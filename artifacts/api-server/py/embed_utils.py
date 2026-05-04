import os
import math

OPENAI_API_KEY = os.environ.get("OPENAI_API_KEY", "")

_openai_client = None


def is_configured() -> bool:
    return bool(OPENAI_API_KEY)


def get_openai_client():
    global _openai_client
    if _openai_client is None:
        from openai import OpenAI
        _openai_client = OpenAI(api_key=OPENAI_API_KEY)
    return _openai_client


def embed_text(text: str) -> list[float]:
    client = get_openai_client()
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=text,
    )
    return response.data[0].embedding


def cosine_similarity(a: list[float], b: list[float]) -> float:
    dot = sum(x * y for x, y in zip(a, b))
    mag_a = math.sqrt(sum(x * x for x in a))
    mag_b = math.sqrt(sum(x * x for x in b))
    if mag_a == 0 or mag_b == 0:
        return 0.0
    return dot / (mag_a * mag_b)


def seed_embeddings_if_needed(journal_entries: list):
    """Generate and store embeddings for journal entries in a background thread."""
    if not is_configured():
        return
    import threading
    threading.Thread(target=_seed_worker, args=(journal_entries,), daemon=True).start()


def _seed_worker(journal_entries: list):
    from db import SessionLocal
    from models import JournalEntry

    try:
        db = SessionLocal()
        try:
            for entry in journal_entries:
                row = db.query(JournalEntry).filter(JournalEntry.id == entry.id).first()
                if row and row.embedding is None:
                    vec = embed_text(entry.notes)
                    row.embedding = vec
                    db.commit()
                    print(f"Embedded journal entry {entry.id}")
            print("Embedding seeding complete.")
        finally:
            db.close()
    except Exception as e:
        print(f"Embedding seed error: {e}")


def search_journal_semantic(query: str, journal_entries: list, top_k: int = 5) -> list[dict]:
    """
    Score each journal entry against the query embedding using cosine similarity.
    Falls back to text search if OpenAI is unavailable or entries have no embeddings.
    """
    if not is_configured():
        return []

    try:
        query_vec = embed_text(query)
        scored = []
        for entry in journal_entries:
            if entry.embedding:
                score = cosine_similarity(query_vec, entry.embedding)
                scored.append((entry, score))

        if not scored:
            return []

        scored.sort(key=lambda x: x[1], reverse=True)
        return [
            {"entry": e, "score": round(s, 3)}
            for e, s in scored[:top_k]
            if s > 0.1
        ]
    except Exception as ex:
        print(f"Semantic search error: {ex}")
        return []
