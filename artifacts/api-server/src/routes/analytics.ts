import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth";
import { EQUITY_POINTS, SETUP_PERFORMANCE } from "../data/seed";

const router = Router();

router.get("/analytics/equity-curve", requireAuth, (req, res) => {
  const period = (req.query["period"] as string) ?? "30d";

  let points = EQUITY_POINTS;
  if (period === "7d") points = EQUITY_POINTS.slice(-2);
  else if (period === "30d") points = EQUITY_POINTS.slice(-6);
  else if (period === "90d") points = EQUITY_POINTS.slice(-14);
  else if (period === "1y") points = EQUITY_POINTS.slice(-26);

  const startBalance = points[0]?.value ?? 50000;
  const currentBalance = points[points.length - 1]?.value ?? 50000;
  const totalReturnPct = startBalance > 0 ? ((currentBalance - startBalance) / startBalance) * 100 : 0;

  const values = points.map((p) => p.value);
  let maxDrawdownPct = 0;
  let peak = values[0] ?? 0;
  for (const v of values) {
    if (v > peak) peak = v;
    const drawdownPct = peak > 0 ? ((peak - v) / peak) * 100 : 0;
    if (drawdownPct > maxDrawdownPct) maxDrawdownPct = drawdownPct;
  }

  res.json({
    points,
    startBalance,
    currentBalance,
    totalReturn: Math.round(totalReturnPct * 100) / 100,
    maxDrawdown: Math.round(maxDrawdownPct * 100) / 100,
    sharpeRatio: 1.84,
  });
});

router.get("/analytics/time-analysis", requireAuth, (_req, res) => {
  res.json({
    byHour: [
      { label: "9:30", pnl: 1240, trades: 28, winRate: 71.4 },
      { label: "10:00", pnl: 890, trades: 22, winRate: 68.2 },
      { label: "10:30", pnl: 650, trades: 18, winRate: 66.7 },
      { label: "11:00", pnl: 320, trades: 15, winRate: 60.0 },
      { label: "11:30", pnl: 180, trades: 12, winRate: 58.3 },
      { label: "12:00", pnl: -90, trades: 8, winRate: 50.0 },
      { label: "12:30", pnl: -140, trades: 6, winRate: 33.3 },
      { label: "13:00", pnl: 210, trades: 9, winRate: 55.6 },
      { label: "13:30", pnl: 340, trades: 11, winRate: 63.6 },
      { label: "14:00", pnl: 480, trades: 14, winRate: 64.3 },
      { label: "14:30", pnl: 620, trades: 16, winRate: 68.8 },
      { label: "15:00", pnl: 710, trades: 18, winRate: 72.2 },
      { label: "15:30", pnl: 420, trades: 12, winRate: 66.7 },
    ],
    byDayOfWeek: [
      { label: "Monday", pnl: 1820, trades: 35, winRate: 68.6 },
      { label: "Tuesday", pnl: 2140, trades: 38, winRate: 71.1 },
      { label: "Wednesday", pnl: 980, trades: 28, winRate: 60.7 },
      { label: "Thursday", pnl: 1560, trades: 32, winRate: 65.6 },
      { label: "Friday", pnl: -240, trades: 22, winRate: 50.0 },
    ],
    bestHour: "9:30 AM",
    worstHour: "12:30 PM",
    bestDay: "Tuesday",
    worstDay: "Friday",
  });
});

router.get("/analytics/setups", requireAuth, (_req, res) => {
  res.json(SETUP_PERFORMANCE);
});

export default router;
