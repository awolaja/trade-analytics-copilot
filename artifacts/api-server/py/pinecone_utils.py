import os
from typing import Optional

PINECONE_API_KEY = os.environ.get("PINECONE_API_KEY", "")
OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")
PINECONE_INDEX_NAME = os.environ.get("PINECONE_INDEX_NAME", "tac-journal")

_pinecone_index = None
_openai_client = None


def is_configured() -> bool:
    return bool(PINECONE_API_KEY and OPENAI_API_KEY)


def get_openai_client():
    global _openai_client
    if _openai_client is None:
        from openai import OpenAI
        _openai_client = OpenAI(api_key=OPENAI_API_KEY)
    return _openai_client


def get_pinecone_index():
    global _pinecone_index
    if _pinecone_index is None:
        from pinecone import Pinecone, ServerlessSpec
        pc = Pinecone(api_key=PINECONE_API_KEY)
        existing = [idx.name for idx in pc.list_indexes()]
        if PINECONE_INDEX_NAME not in existing:
            pc.create_index(
                name=PINECONE_INDEX_NAME,
                dimension=1536,
                metric="cosine",
                spec=ServerlessSpec(cloud="aws", region="us-east-1"),
            )
        _pinecone_index = pc.Index(PINECONE_INDEX_NAME)
    return _pinecone_index


def embed_text(text: str) -> list[float]:
    client = get_openai_client()
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=text,
    )
    return response.data[0].embedding


def upsert_journal_entry(entry_id: str, notes: str, metadata: dict):
    if not is_configured():
        return
    try:
        index = get_pinecone_index()
        vector = embed_text(notes)
        index.upsert(vectors=[{"id": entry_id, "values": vector, "metadata": metadata}])
    except Exception as e:
        print(f"Pinecone upsert error: {e}")


def search_journal(query: str, top_k: int = 5) -> list[dict]:
    if not is_configured():
        return []
    try:
        index = get_pinecone_index()
        query_vector = embed_text(query)
        results = index.query(vector=query_vector, top_k=top_k, include_metadata=True)
        return [
            {"id": match.id, "score": match.score, "metadata": match.metadata}
            for match in results.matches
        ]
    except Exception as e:
        print(f"Pinecone search error: {e}")
        return []


def seed_pinecone_if_needed(journal_entries: list):
    """Seed tac-journal index — runs in a background thread so it never blocks startup."""
    if not is_configured():
        return
    import threading
    threading.Thread(target=_seed_worker, args=(journal_entries,), daemon=True).start()


def _seed_worker(journal_entries: list):
    import time
    # Retry up to 8 times with back-off so Pinecone's free-tier storage quota
    # reconciliation (which can take several minutes after deletions) doesn't
    # permanently block seeding.
    for attempt in range(8):
        try:
            index = get_pinecone_index()
            stats = index.describe_index_stats()
            if stats.total_vector_count >= len(journal_entries):
                print("Pinecone already seeded, skipping.")
                return
            # Build all embeddings first, then batch upsert in one call
            vectors = []
            for entry in journal_entries:
                vec = embed_text(entry.notes)
                vectors.append({
                    "id": entry.id,
                    "values": vec,
                    "metadata": {
                        "symbol": entry.symbol,
                        "setup": entry.setup,
                        "emotion": entry.emotion,
                        "pnl": entry.pnl,
                        "rating": entry.rating,
                        "date": entry.date,
                    },
                })
            index.upsert(vectors=vectors)
            print(f"Pinecone seeded with {len(vectors)} journal entries.")
            return
        except Exception as e:
            wait = 60 * (attempt + 1)
            print(f"Pinecone seed attempt {attempt + 1} failed: {e}. Retrying in {wait}s…")
            time.sleep(wait)
    print("Pinecone seeding gave up after 8 attempts — search will use text fallback.")
