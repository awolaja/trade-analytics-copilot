from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from db import get_db
from models import JournalEntry
from schemas import JournalEntryOut, JournalTagOut, JournalSearchRequest, JournalSearchResult
from auth_utils import CurrentUser
import embed_utils

router = APIRouter()

JOURNAL_TAGS = [
    {"name": "Breakout",      "count": 42, "color": "#ff4500"},
    {"name": "Gap & Go",      "count": 31, "color": "#3b82f6"},
    {"name": "VWAP",          "count": 28, "color": "#8b5cf6"},
    {"name": "Bull Flag",     "count": 24, "color": "#10b981"},
    {"name": "Mean Reversion","count": 19, "color": "#f59e0b"},
    {"name": "High Volume",   "count": 18, "color": "#06b6d4"},
    {"name": "Futures",       "count": 15, "color": "#ec4899"},
    {"name": "Mistake",       "count": 12, "color": "#ef4444"},
    {"name": "Breakdown",     "count": 11, "color": "#6366f1"},
]


def _entry_out(e: JournalEntry) -> JournalEntryOut:
    return JournalEntryOut(
        id=e.id, tradeId=e.trade_id, symbol=e.symbol, date=e.date,
        pnl=e.pnl, rr=e.rr, setup=e.setup, emotion=e.emotion,
        rating=e.rating, notes=e.notes, tags=e.tags or [],
    )


@router.get("/journal/entries", response_model=list[JournalEntryOut])
def get_entries(
    user: CurrentUser,
    db: Session = Depends(get_db),
    limit: int = Query(20, ge=1, le=100),
):
    entries = db.query(JournalEntry).order_by(JournalEntry.date.desc()).limit(limit).all()
    return [_entry_out(e) for e in entries]


@router.get("/journal/tags", response_model=list[JournalTagOut])
def get_tags(user: CurrentUser):
    return [JournalTagOut(**t) for t in JOURNAL_TAGS]


@router.post("/journal/search", response_model=list[JournalSearchResult])
def search_journal(
    body: JournalSearchRequest,
    user: CurrentUser,
    db: Session = Depends(get_db),
):
    entries = db.query(JournalEntry).all()

    # Try semantic search via OpenAI embeddings stored in DB
    semantic = embed_utils.search_journal_semantic(body.query, entries, top_k=body.limit)
    if semantic:
        return [
            JournalSearchResult(
                entry=_entry_out(r["entry"]),
                score=r["score"],
                matchReason=f"AI semantic match (score: {r['score']:.2f})",
            )
            for r in semantic
        ]

    # Fallback: keyword text search
    q = body.query.lower()
    results = []
    for e in entries:
        text = f"{e.notes} {e.symbol} {e.setup} {e.emotion}".lower()
        if q in text:
            results.append(JournalSearchResult(
                entry=_entry_out(e),
                score=1.0,
                matchReason="Keyword match in notes or metadata",
            ))
    return results[:body.limit]
