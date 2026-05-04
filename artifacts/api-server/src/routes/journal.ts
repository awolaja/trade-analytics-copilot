import { Router } from "express";
import { requireAuth } from "../middleware/requireAuth";
import { JOURNAL_ENTRIES, JOURNAL_TAGS } from "../data/seed";

const router = Router();

router.get("/journal/entries", requireAuth, (req, res) => {
  const limit = parseInt((req.query["limit"] as string) ?? "20", 10);
  const entries = JOURNAL_ENTRIES.slice(0, limit);
  res.json(entries);
});

router.get("/journal/tags", requireAuth, (_req, res) => {
  res.json(JOURNAL_TAGS);
});

export default router;
