import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth";
import { ListTradesQueryParams, GetTradeParams } from "@workspace/api-zod";
import { TRADES } from "../data/seed";

const router = Router();

router.get("/trades", requireAuth, (req, res) => {
  const parsed = ListTradesQueryParams.safeParse(req.query);
  const symbol = parsed.success ? parsed.data.symbol : undefined;
  const status = parsed.success ? parsed.data.status : undefined;
  const setup = parsed.success ? parsed.data.setup : undefined;
  const limit = parsed.success ? parsed.data.limit : 50;
  const offset = parsed.success ? parsed.data.offset : 0;

  let filtered = [...TRADES];

  if (symbol) {
    filtered = filtered.filter((t) =>
      t.symbol.toLowerCase().includes(symbol.toLowerCase()),
    );
  }

  if (status && status !== "all") {
    filtered = filtered.filter((t) => t.status === status);
  }

  if (setup) {
    filtered = filtered.filter((t) => t.setup === setup);
  }

  filtered.sort(
    (a, b) => new Date(b.openTime).getTime() - new Date(a.openTime).getTime(),
  );

  const paginated = filtered.slice(offset, offset + limit);
  res.json({ trades: paginated, total: filtered.length });
});

router.get("/trades/:id", requireAuth, (req, res) => {
  const params = GetTradeParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "invalid_params", message: "Invalid trade ID" });
    return;
  }

  const trade = TRADES.find((t) => t.id === params.data.id);
  if (!trade) {
    res.status(404).json({ error: "not_found", message: "Trade not found" });
    return;
  }

  res.json({
    ...trade,
    notes: "Entry was clean. Held through the first pullback at VWAP, then added conviction at the second touch.",
    stopLoss: trade.entryPrice * 0.98,
    takeProfit: trade.entryPrice * 1.04,
    mae: trade.pnl < 0 ? trade.pnl : trade.pnl * -0.3,
    mfe: trade.pnl > 0 ? trade.pnl * 1.4 : Math.abs(trade.pnl) * 0.2,
    commission: 1.05 * trade.quantity,
    screenshots: [],
  });
});

export default router;
