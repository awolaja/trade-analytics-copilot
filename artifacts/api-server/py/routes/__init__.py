from fastapi import APIRouter
from routes.auth import router as auth_router
from routes.dashboard import router as dashboard_router
from routes.trades import router as trades_router
from routes.analytics import router as analytics_router
from routes.journal import router as journal_router
from routes.insights import router as insights_router
from routes.brokers import router as brokers_router
from routes.portfolio import router as portfolio_router

router = APIRouter()
router.include_router(auth_router)
router.include_router(dashboard_router)
router.include_router(trades_router)
router.include_router(analytics_router)
router.include_router(journal_router)
router.include_router(insights_router)
router.include_router(brokers_router)
router.include_router(portfolio_router)
