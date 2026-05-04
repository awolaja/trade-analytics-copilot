# Trade Analytics Copilot (TAC)

## Overview

Professional trading analytics platform. pnpm monorepo with a React+Vite frontend and a Python/FastAPI backend.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Frontend**: React + Vite (`artifacts/trade-copilot/`) — served at `/trade-copilot/`
- **Backend**: Python 3.11 / FastAPI / Uvicorn (`artifacts/api-server/py/`) — served at `/api`
- **Database**: PostgreSQL + SQLAlchemy (ORM) + auto-seeding on startup
- **AI / Semantic search**: OpenAI `text-embedding-3-small` + Pinecone serverless (AWS us-east-1)
- **Auth**: Session-based via `starlette.middleware.sessions.SessionMiddleware`
- **Login**: username=`yemi`, password=`yemi`

## Pinecone

- **Index name**: controlled by `PINECONE_INDEX_NAME` env var (currently `tac-journal-v2`)
- Dimension: 1536, metric: cosine, serverless AWS us-east-1
- Seeds all journal entries in a background thread on startup (8 retries, 60s backoff)
- Falls back to PostgreSQL text search if Pinecone is unavailable
- **Note**: The free-tier 2 GB storage quota may lag after deleting vectors. If seeding fails, wait ~5 min for Pinecone's billing counter to reconcile.

## Key Files

- `artifacts/api-server/py/main.py` — FastAPI app entry, lifespan, middleware
- `artifacts/api-server/py/models.py` — SQLAlchemy models (Trade, EquityPoint, JournalEntry)
- `artifacts/api-server/py/seed.py` — DB seeding (runs once if tables empty)
- `artifacts/api-server/py/pinecone_utils.py` — Pinecone+OpenAI embedding, search, background seeding
- `artifacts/api-server/py/routes/` — auth, dashboard, trades, analytics, journal, insights, brokers, portfolio
- `artifacts/api-server/py/schemas.py` — Pydantic request/response models
- `artifacts/trade-copilot/src/App.tsx` — frontend router, 11 protected routes

## Environment Secrets

- `OPENAI_API_KEY` — OpenAI embeddings
- `PINECONE_API_KEY` — Pinecone vector DB
- `SESSION_SECRET` — session middleware signing
- `DATABASE_URL` — PostgreSQL connection (auto-provided by Replit)
- `PINECONE_INDEX_NAME` — Pinecone index name (currently `tac-journal-v2`)

## Workflows

- `artifacts/api-server: API Server` — `cd /home/runner/workspace/artifacts/api-server/py && python main.py`
- `artifacts/trade-copilot: web` — `pnpm --filter @workspace/trade-copilot run dev`

## Routes (Backend)

All routes prefixed with `/api`:
- `POST /api/auth/login`, `POST /api/auth/logout`, `GET /api/auth/me`
- `GET /api/dashboard`
- `GET /api/trades`, `POST /api/trades`
- `GET /api/analytics`
- `GET /api/journal`, `POST /api/journal`, `POST /api/journal/search`
- `GET /api/insights`
- `GET /api/brokers`
- `GET /api/portfolio`

## Navigation (Frontend — 11 screens)

Dashboard, Trades, Analytics, Journal, Insights, Brokers, Portfolio, Settings, Notifications, Help, Profile
