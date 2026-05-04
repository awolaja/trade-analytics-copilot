from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session
from db import get_db
from models import EquityPoint, Trade
from schemas import EquityCurveOut, EquityCurvePoint, TimeAnalysisOut, TimeSlot, SetupPerformanceOut
from auth_utils import CurrentUser

router = APIRouter()


@router.get("/analytics/equity-curve", response_model=EquityCurveOut)
def equity_curve(
    user: CurrentUser,
    db: Session = Depends(get_db),
    period: str = Query("30d"),
):
    all_points = db.query(EquityPoint).order_by(EquityPoint.date).all()

    slice_map = {"7d": -2, "30d": -6, "90d": -14, "1y": -26}
    sliced = all_points[slice_map.get(period, -6):]

    points = [EquityCurvePoint(date=p.date, value=p.value, pnl=p.pnl_amount) for p in sliced]
    start_balance = sliced[0].value if sliced else 50000
    current_balance = sliced[-1].value if sliced else 50000

    total_return_pct = round(((current_balance - start_balance) / start_balance) * 100, 2) if start_balance else 0

    values = [p.value for p in sliced]
    max_dd_pct = 0.0
    peak = values[0] if values else 0
    for v in values:
        if v > peak:
            peak = v
        if peak > 0:
            dd = ((peak - v) / peak) * 100
            if dd > max_dd_pct:
                max_dd_pct = dd

    return EquityCurveOut(
        points=points,
        startBalance=start_balance,
        currentBalance=current_balance,
        totalReturn=total_return_pct,
        maxDrawdown=round(max_dd_pct, 2),
        sharpeRatio=1.84,
    )


@router.get("/analytics/time-analysis", response_model=TimeAnalysisOut)
def time_analysis(user: CurrentUser):
    by_hour = [
        TimeSlot(label="9:30",  pnl=1240, trades=28, winRate=71.4),
        TimeSlot(label="10:00", pnl=890,  trades=22, winRate=68.2),
        TimeSlot(label="10:30", pnl=650,  trades=18, winRate=66.7),
        TimeSlot(label="11:00", pnl=320,  trades=15, winRate=60.0),
        TimeSlot(label="11:30", pnl=180,  trades=12, winRate=58.3),
        TimeSlot(label="12:00", pnl=-90,  trades=8,  winRate=50.0),
        TimeSlot(label="12:30", pnl=-140, trades=6,  winRate=33.3),
        TimeSlot(label="13:00", pnl=210,  trades=9,  winRate=55.6),
        TimeSlot(label="13:30", pnl=340,  trades=11, winRate=63.6),
        TimeSlot(label="14:00", pnl=480,  trades=14, winRate=64.3),
        TimeSlot(label="14:30", pnl=620,  trades=16, winRate=68.8),
        TimeSlot(label="15:00", pnl=710,  trades=18, winRate=72.2),
        TimeSlot(label="15:30", pnl=420,  trades=12, winRate=66.7),
    ]
    by_day = [
        TimeSlot(label="Monday",    pnl=1820, trades=35, winRate=68.6),
        TimeSlot(label="Tuesday",   pnl=2140, trades=38, winRate=71.1),
        TimeSlot(label="Wednesday", pnl=980,  trades=28, winRate=60.7),
        TimeSlot(label="Thursday",  pnl=1560, trades=32, winRate=65.6),
        TimeSlot(label="Friday",    pnl=-240, trades=22, winRate=50.0),
    ]
    return TimeAnalysisOut(
        byHour=by_hour, byDayOfWeek=by_day,
        bestHour="9:30 AM", worstHour="12:30 PM",
        bestDay="Tuesday", worstDay="Friday",
    )


@router.get("/analytics/setups", response_model=list[SetupPerformanceOut])
def setup_performance(user: CurrentUser, db: Session = Depends(get_db)):
    trades = db.query(Trade).filter(Trade.status == "closed").all()
    setups: dict[str, list] = {}
    for t in trades:
        setups.setdefault(t.setup, []).append(t)

    result = []
    for name, ts in setups.items():
        winners = [t for t in ts if t.pnl > 0]
        losers = [t for t in ts if t.pnl < 0]
        total_pnl = sum(t.pnl for t in ts)
        avg_win = sum(t.pnl for t in winners) / len(winners) if winners else 0
        avg_loss = abs(sum(t.pnl for t in losers) / len(losers)) if losers else 0
        pf = (avg_win * len(winners)) / (avg_loss * len(losers)) if losers and avg_loss else 0
        avg_rr = sum(t.rr for t in ts) / len(ts) if ts else 0
        result.append(SetupPerformanceOut(
            name=name,
            trades=len(ts),
            winRate=round(len(winners) / len(ts) * 100, 1) if ts else 0,
            avgRR=round(avg_rr, 2),
            totalPnL=round(total_pnl, 2),
            profitFactor=round(pf, 2),
            avgHoldTime="1h 12m",
        ))
    result.sort(key=lambda x: x.totalPnL, reverse=True)
    return result
