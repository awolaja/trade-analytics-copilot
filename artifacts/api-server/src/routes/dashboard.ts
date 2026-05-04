import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth";
import { TRADES, EQUITY_POINTS } from "../data/seed";

const router = Router();

router.get("/dashboard/summary", requireAuth, (_req, res) => {
  const closedTrades = TRADES.filter((t) => t.status === "closed");
  const winners = closedTrades.filter((t) => t.pnl > 0);
  const losers = closedTrades.filter((t) => t.pnl < 0);
  const totalPnL = closedTrades.reduce((sum, t) => sum + t.pnl, 0);
  const avgWin = winners.length > 0 ? winners.reduce((s, t) => s + t.pnl, 0) / winners.length : 0;
  const avgLoss = losers.length > 0 ? Math.abs(losers.reduce((s, t) => s + t.pnl, 0) / losers.length) : 0;
  const profitFactor = avgLoss > 0 ? (avgWin * winners.length) / (avgLoss * losers.length) : 0;

  res.json({
    totalPnL,
    totalPnLPercent: (totalPnL / 50000) * 100,
    winRate: closedTrades.length > 0 ? winners.length / closedTrades.length : 0,
    avgRR: 2.1,
    totalTrades: closedTrades.length,
    openPositions: TRADES.filter((t) => t.status === "open").length,
    dailyPnL: 352.50,
    dailyPnLPercent: 0.71,
    profitFactor,
    avgWin,
    avgLoss,
    bestTrade: Math.max(...closedTrades.map((t) => t.pnl)),
    worstTrade: Math.min(...closedTrades.map((t) => t.pnl)),
  });
});

router.get("/dashboard/recent-trades", requireAuth, (_req, res) => {
  const recent = [...TRADES]
    .sort((a, b) => new Date(b.openTime).getTime() - new Date(a.openTime).getTime())
    .slice(0, 5);
  res.json(recent);
});

router.get("/dashboard/equity-sparkline", requireAuth, (_req, res) => {
  const sparkline = EQUITY_POINTS.slice(-10);
  res.json(sparkline);
});

export default router;
