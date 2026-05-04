from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import Optional
from db import get_db
from models import Trade
from schemas import TradeOut, TradeDetailOut, TradesListOut
from auth_utils import CurrentUser

router = APIRouter()


def _trade_out(t: Trade) -> TradeOut:
    return TradeOut(
        id=t.id, symbol=t.symbol, side=t.side, status=t.status, setup=t.setup,
        entryPrice=t.entry_price, exitPrice=t.exit_price, quantity=t.quantity,
        pnl=t.pnl, pnlPercent=t.pnl_percent, rr=t.rr,
        openTime=t.open_time.isoformat() + "Z",
        closeTime=t.close_time.isoformat() + "Z" if t.close_time else "",
        broker=t.broker, tags=t.tags or [],
    )


@router.get("/trades", response_model=TradesListOut)
def list_trades(
    user: CurrentUser,
    db: Session = Depends(get_db),
    symbol: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    setup: Optional[str] = Query(None),
    limit: int = Query(50, ge=1, le=200),
    offset: int = Query(0, ge=0),
):
    q = db.query(Trade)
    if symbol:
        q = q.filter(Trade.symbol.ilike(f"%{symbol}%"))
    if status and status != "all":
        q = q.filter(Trade.status == status)
    if setup:
        q = q.filter(Trade.setup == setup)

    total = q.count()
    trades = q.order_by(Trade.open_time.desc()).offset(offset).limit(limit).all()
    return TradesListOut(trades=[_trade_out(t) for t in trades], total=total)


@router.get("/trades/{trade_id}", response_model=TradeDetailOut)
def get_trade(trade_id: str, user: CurrentUser, db: Session = Depends(get_db)):
    t = db.query(Trade).filter(Trade.id == trade_id).first()
    if not t:
        raise HTTPException(status_code=404, detail="Trade not found")
    return TradeDetailOut(
        id=t.id, symbol=t.symbol, side=t.side, status=t.status, setup=t.setup,
        entryPrice=t.entry_price, exitPrice=t.exit_price, quantity=t.quantity,
        pnl=t.pnl, pnlPercent=t.pnl_percent, rr=t.rr,
        openTime=t.open_time.isoformat() + "Z",
        closeTime=t.close_time.isoformat() + "Z" if t.close_time else "",
        broker=t.broker, tags=t.tags or [],
        notes=t.notes or "Entry was clean. Held through the first pullback at VWAP, then added conviction at the second touch.",
        stopLoss=t.stop_loss,
        takeProfit=t.take_profit,
        mae=t.pnl * -0.3 if t.pnl > 0 else t.pnl,
        mfe=t.pnl * 1.4 if t.pnl > 0 else abs(t.pnl) * 0.2,
        commission=round(1.05 * t.quantity, 2),
        screenshots=[],
    )
