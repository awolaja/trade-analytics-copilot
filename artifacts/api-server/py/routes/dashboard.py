from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db import get_db
from models import Trade, EquityPoint
from schemas import DashboardSummaryOut, TradeOut, EquitySparklinePoint
from auth_utils import CurrentUser
from datetime import datetime

router = APIRouter()


@router.get("/dashboard/summary", response_model=DashboardSummaryOut)
def dashboard_summary(user: CurrentUser, db: Session = Depends(get_db)):
    closed = db.query(Trade).filter(Trade.status == "closed").all()
    open_count = db.query(Trade).filter(Trade.status == "open").count()

    winners = [t for t in closed if t.pnl > 0]
    losers = [t for t in closed if t.pnl < 0]

    total_pnl = sum(t.pnl for t in closed)
    avg_win = sum(t.pnl for t in winners) / len(winners) if winners else 0
    avg_loss = abs(sum(t.pnl for t in losers) / len(losers)) if losers else 0
    profit_factor = (avg_win * len(winners)) / (avg_loss * len(losers)) if losers else 0
    win_rate = len(winners) / len(closed) if closed else 0
    avg_rr = sum(t.rr for t in closed if t.rr > 0) / len([t for t in closed if t.rr > 0]) if any(t.rr > 0 for t in closed) else 0
    best_trade = max((t.pnl for t in closed), default=0)
    worst_trade = min((t.pnl for t in closed), default=0)

    return DashboardSummaryOut(
        totalPnL=round(total_pnl, 2),
        totalPnLPercent=round((total_pnl / 50000) * 100, 2),
        winRate=round(win_rate, 4),
        avgRR=round(avg_rr, 2),
        totalTrades=len(closed),
        openPositions=open_count,
        dailyPnL=352.50,
        dailyPnLPercent=0.71,
        profitFactor=round(profit_factor, 4),
        avgWin=round(avg_win, 2),
        avgLoss=round(avg_loss, 2),
        bestTrade=best_trade,
        worstTrade=worst_trade,
    )


@router.get("/dashboard/recent-trades", response_model=list[TradeOut])
def recent_trades(user: CurrentUser, db: Session = Depends(get_db)):
    trades = (
        db.query(Trade)
        .order_by(Trade.open_time.desc())
        .limit(5)
        .all()
    )
    return [_trade_out(t) for t in trades]


@router.get("/dashboard/equity-sparkline", response_model=list[EquitySparklinePoint])
def equity_sparkline(user: CurrentUser, db: Session = Depends(get_db)):
    points = db.query(EquityPoint).order_by(EquityPoint.date.desc()).limit(10).all()
    return [EquitySparklinePoint(date=p.date, value=p.value, pnl=p.pnl_amount) for p in reversed(points)]


def _trade_out(t: Trade) -> TradeOut:
    return TradeOut(
        id=t.id,
        symbol=t.symbol,
        side=t.side,
        status=t.status,
        setup=t.setup,
        entryPrice=t.entry_price,
        exitPrice=t.exit_price,
        quantity=t.quantity,
        pnl=t.pnl,
        pnlPercent=t.pnl_percent,
        rr=t.rr,
        openTime=t.open_time.isoformat() + "Z",
        closeTime=t.close_time.isoformat() + "Z" if t.close_time else "",
        broker=t.broker,
        tags=t.tags or [],
    )
