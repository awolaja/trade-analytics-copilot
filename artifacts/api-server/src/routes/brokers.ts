import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth";

const router = Router();

const BROKERS = [
  {
    id: "alpaca",
    name: "Alpaca",
    status: "connected" as const,
    accountBalance: 71200.00,
    openPositions: 2,
    lastSync: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    logo: "",
    accountId: "P002...3941",
  },
];

router.get("/brokers", requireAuth, (_req, res) => {
  res.json(BROKERS);
});

router.get("/brokers/sync-status", requireAuth, (_req, res) => {
  res.json({
    lastSyncAt: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    nextSyncAt: new Date(Date.now() + 3 * 60 * 1000).toISOString(),
    tradesImported: 183,
    brokers: [
      {
        name: "Alpaca",
        status: "connected",
        tradesImported: 183,
        lastSync: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
      },
    ],
  });
});

export default router;
