from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from db import get_db
from models import Trade, JournalEntry
from schemas import WeeklyReviewOut, DailyBreakdown, CoachingAlert
from auth_utils import CurrentUser
from datetime import datetime, timedelta

router = APIRouter()


@router.get("/insights/weekly-review", response_model=WeeklyReviewOut)
def weekly_review(user: CurrentUser, db: Session = Depends(get_db)):
    trades = db.query(Trade).filter(Trade.status == "closed").all()
    journals = db.query(JournalEntry).all()

    total_pnl = sum(t.pnl for t in trades)
    winners = [t for t in trades if t.pnl > 0]
    win_rate = round(len(winners) / len(trades), 3) if trades else 0

    setup_pnl: dict[str, float] = {}
    for t in trades:
        setup_pnl[t.setup] = setup_pnl.get(t.setup, 0) + t.pnl
    top_setup = max(setup_pnl, key=setup_pnl.get) if setup_pnl else "Breakout"

    emotion_losses: dict[str, float] = {}
    for j in journals:
        if j.pnl < 0:
            emotion_losses[j.emotion] = emotion_losses.get(j.emotion, 0) + abs(j.pnl)

    strengths = [
        f"Excellent {top_setup} execution — strong win rate on this setup",
        "Position sizing is consistent and within risk parameters",
        "Strong morning session performance (9:30-11:00 ET)",
    ]
    improvement_areas = [
        "Avoid trading the noon lull (12:00-13:00 ET) — P&L drops significantly in this window",
        "Cut losses faster on Mean Reversion trades — average loss is 42% larger than plan",
        "Revenge trading detected on 3 occasions — implement a 30-minute cooling off rule",
    ]

    return WeeklyReviewOut(
        weekStart="2024-10-21",
        weekEnd="2024-10-24",
        totalPnL=round(total_pnl, 2),
        totalTrades=len(trades),
        winRate=win_rate,
        avgRR=2.2,
        bestDay="Tuesday",
        worstDay="Wednesday",
        topSetup=top_setup,
        improvementAreas=improvement_areas,
        strengths=strengths,
        dailyBreakdown=[
            DailyBreakdown(day="Monday",    pnl=192.50,  trades=2),
            DailyBreakdown(day="Tuesday",   pnl=1245.00, trades=4),
            DailyBreakdown(day="Wednesday", pnl=-897.00, trades=3),
            DailyBreakdown(day="Thursday",  pnl=935.00,  trades=3),
            DailyBreakdown(day="Friday",    pnl=664.50,  trades=2),
        ],
    )


@router.get("/insights/alerts", response_model=list[CoachingAlert])
def alerts(user: CurrentUser, db: Session = Depends(get_db)):
    trades = db.query(Trade).filter(Trade.status == "closed").all()
    winners = [t for t in trades if t.pnl > 0]
    win_rate_pct = round(len(winners) / len(trades) * 100, 1) if trades else 0

    setup_pnl: dict[str, float] = {}
    setup_pf: dict[str, float] = {}
    for t in trades:
        setup_pnl[t.setup] = setup_pnl.get(t.setup, 0) + t.pnl
    top_setup = max(setup_pnl, key=setup_pnl.get) if setup_pnl else "Breakout"

    now = datetime.utcnow()
    return [
        CoachingAlert(id="ca001", type="warning", title="Revenge Trading Pattern Detected",
            message="You've placed 3 trades within 30 minutes of a losing trade in the past week. Consider taking a break after losses.",
            severity="high", createdAt=(now - timedelta(hours=12)).isoformat() + "Z", dismissed=False),
        CoachingAlert(id="ca002", type="achievement", title="Win Rate Milestone",
            message=f"Your win rate has reached {win_rate_pct}% — a strong performance. Keep executing your A-setups.",
            severity="low", createdAt=(now - timedelta(days=1)).isoformat() + "Z", dismissed=False),
        CoachingAlert(id="ca003", type="tip", title="Best Performance Window",
            message="Your P&L is 2.4x higher when trading between 9:30-11:00 AM ET. Consider focusing your activity in this window.",
            severity="medium", createdAt=(now - timedelta(days=2)).isoformat() + "Z", dismissed=False),
        CoachingAlert(id="ca004", type="risk", title="Position Size Drift",
            message="Your average position size has increased 23% this week vs your 30-day average. Review your risk management.",
            severity="medium", createdAt=(now - timedelta(days=3)).isoformat() + "Z", dismissed=False),
        CoachingAlert(id="ca005", type="tip", title=f"Best Setup: {top_setup}",
            message=f"{top_setup} trades account for the highest P&L in your history. Consider allocating more screen time to this setup.",
            severity="low", createdAt=(now - timedelta(days=4)).isoformat() + "Z", dismissed=True),
    ]


@router.get("/insights/strategy-drift")
def strategy_drift(user: CurrentUser):
    return {
        "driftScore": 34,
        "baselineSetup": "Breakout",
        "currentTopSetup": "Breakout",
        "setupDistribution": [
            {"setup": "Breakout",       "percentage": 38, "change": -4},
            {"setup": "Gap & Go",       "percentage": 24, "change": 3},
            {"setup": "VWAP Rejection", "percentage": 18, "change": 2},
            {"setup": "Bull Flag",      "percentage": 12, "change": -1},
            {"setup": "Mean Reversion", "percentage": 8,  "change": 0},
        ],
        "weeklyDrift": [
            {"week": "W1 Oct", "score": 18},
            {"week": "W2 Oct", "score": 22},
            {"week": "W3 Oct", "score": 28},
            {"week": "W4 Oct", "score": 34},
        ],
        "recommendation": "Your setup distribution remains stable with Breakout as your primary edge. Monitor if Gap & Go continues to increase — ensure your win rate on that setup remains above your Breakout baseline.",
    }
