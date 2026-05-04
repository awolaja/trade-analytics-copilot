import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.sessions import SessionMiddleware
from db import engine
from models import Base
from seed import seed_database

SESSION_SECRET = os.environ.get("SESSION_SECRET", "dev-secret-change-me")


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    seed_database()
    from db import SessionLocal
    from models import JournalEntry
    from embed_utils import seed_embeddings_if_needed
    db = SessionLocal()
    try:
        entries = db.query(JournalEntry).all()
        seed_embeddings_if_needed(entries)
    finally:
        db.close()
    yield


app = FastAPI(title="Trade Analytics Copilot API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    SessionMiddleware,
    secret_key=SESSION_SECRET,
    max_age=7 * 24 * 3600,
    https_only=False,
    same_site="lax",
)

from routes import router
app.include_router(router, prefix="/api")


@app.get("/api/healthz")
def health():
    return {"status": "ok"}


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", "8080"))
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)
