import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth";
import { COACHING_ALERTS } from "../data/seed";

const router = Router();

router.get("/insights/weekly-review", requireAuth, (_req, res) => {
  res.json({
    weekStart: "2024-10-21",
    weekEnd: "2024-10-24",
    totalPnL: 2140.00,
    totalTrades: 14,
    winRate: 0.714,
    avgRR: 2.2,
    bestDay: "Tuesday",
    worstDay: "Wednesday",
    topSetup: "Breakout",
    improvementAreas: [
      "Avoid trading the noon lull (12:00-13:00 ET) — your P&L drops significantly in this window",
      "Cut losses faster on Mean Reversion trades — average loss is 42% larger than plan",
      "Revenge trading detected on 3 occasions — implement a 30-minute cooling off rule",
    ],
    strengths: [
      "Excellent breakout execution — 73% win rate on this setup this week",
      "Position sizing is consistent and within risk parameters",
      "Strong morning session performance (9:30-11:00 ET)",
    ],
    dailyBreakdown: [
      { day: "Monday", pnl: 192.50, trades: 2 },
      { day: "Tuesday", pnl: 1245.00, trades: 4 },
      { day: "Wednesday", pnl: -897.00, trades: 3 },
      { day: "Thursday", pnl: 935.00, trades: 3 },
      { day: "Friday", pnl: 664.50, trades: 2 },
    ],
  });
});

router.get("/insights/alerts", requireAuth, (_req, res) => {
  res.json(COACHING_ALERTS);
});

router.get("/insights/strategy-drift", requireAuth, (_req, res) => {
  res.json({
    driftScore: 34,
    baselineSetup: "Breakout",
    currentTopSetup: "Breakout",
    setupDistribution: [
      { setup: "Breakout", percentage: 38, change: -4 },
      { setup: "Gap & Go", percentage: 24, change: 3 },
      { setup: "VWAP Rejection", percentage: 18, change: 2 },
      { setup: "Bull Flag", percentage: 12, change: -1 },
      { setup: "Mean Reversion", percentage: 8, change: 0 },
    ],
    weeklyDrift: [
      { week: "W1 Oct", score: 18 },
      { week: "W2 Oct", score: 22 },
      { week: "W3 Oct", score: 28 },
      { week: "W4 Oct", score: 34 },
    ],
    recommendation: "Your setup distribution remains stable with Breakout as your primary edge. Minor drift toward Gap & Go — monitor if this continues as your win rate on that setup is slightly below your Breakout baseline.",
  });
});

export default router;
