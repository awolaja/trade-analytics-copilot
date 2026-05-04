import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();

router.get("/portfolio/overview", requireAuth, (_req, res) => {
  res.json({
    totalBalance: 71200.00,
    totalPnL: 21200.00,
    totalPnLPercent: 42.4,
    openPositions: 2,
    allocations: [
      { broker: "Alpaca", balance: 71200.00, percentage: 100 },
    ],
    positions: [
      {
        symbol: "AAPL",
        side: "long",
        quantity: 75,
        entryPrice: 228.50,
        currentPrice: 231.20,
        unrealizedPnL: 202.50,
        broker: "Alpaca",
      },
      {
        symbol: "TSLA",
        side: "long",
        quantity: 50,
        entryPrice: 250.30,
        currentPrice: 248.10,
        unrealizedPnL: -110.00,
        broker: "Alpaca",
      },
    ],
  });
});

export default router;
