import { Router, type IRouter } from "express";
import healthRouter from "./health";
import authRouter from "./auth";
import dashboardRouter from "./dashboard";
import tradesRouter from "./trades";
import analyticsRouter from "./analytics";
import journalRouter from "./journal";
import insightsRouter from "./insights";
import brokersRouter from "./brokers";
import portfolioRouter from "./portfolio";

const router: IRouter = Router();

router.use(healthRouter);
router.use(authRouter);
router.use(dashboardRouter);
router.use(tradesRouter);
router.use(analyticsRouter);
router.use(journalRouter);
router.use(insightsRouter);
router.use(brokersRouter);
router.use(portfolioRouter);

export default router;
