export const TRADES = [
  {
    id: "t001", symbol: "NVDA", side: "long", status: "closed", setup: "Breakout",
    entryPrice: 118.45, exitPrice: 122.30, quantity: 50, pnl: 192.50, pnlPercent: 3.25,
    rr: 2.1, openTime: "2024-10-24T10:15:00Z", closeTime: "2024-10-24T11:00:00Z",
    broker: "Alpaca", tags: ["Breakout", "High Volume"],
  },
  {
    id: "t002", symbol: "AAPL", side: "short", status: "closed", setup: "Gap Fill",
    entryPrice: 192.10, exitPrice: 190.50, quantity: 100, pnl: 160.00, pnlPercent: 0.83,
    rr: 1.8, openTime: "2024-10-24T09:30:00Z", closeTime: "2024-10-24T10:50:00Z",
    broker: "Alpaca", tags: ["Gap & Go"],
  },
  {
    id: "t003", symbol: "TSLA", side: "long", status: "closed", setup: "Mean Reversion",
    entryPrice: 175.20, exitPrice: 172.80, quantity: 100, pnl: -240.00, pnlPercent: -1.37,
    rr: -0.8, openTime: "2024-10-23T14:30:00Z", closeTime: "2024-10-23T14:45:00Z",
    broker: "Alpaca", tags: ["Mean Reversion", "Mistake"],
  },
  {
    id: "t004", symbol: "SPY", side: "short", status: "closed", setup: "VWAP Rejection",
    entryPrice: 524.80, exitPrice: 522.10, quantity: 50, pnl: 135.00, pnlPercent: 0.51,
    rr: 2.4, openTime: "2024-10-23T11:00:00Z", closeTime: "2024-10-23T13:10:00Z",
    broker: "Alpaca", tags: ["VWAP", "Breakdown"],
  },
  {
    id: "t005", symbol: "NQ", side: "long", status: "closed", setup: "Momentum",
    entryPrice: 18250.25, exitPrice: 18210.50, quantity: 2, pnl: -795.00, pnlPercent: -0.22,
    rr: -0.5, openTime: "2024-10-22T15:07:00Z", closeTime: "2024-10-22T15:15:00Z",
    broker: "Alpaca", tags: ["Futures"],
  },
  {
    id: "t006", symbol: "META", side: "long", status: "closed", setup: "Bull Flag",
    entryPrice: 485.60, exitPrice: 492.10, quantity: 40, pnl: 260.00, pnlPercent: 1.34,
    rr: 1.9, openTime: "2024-10-22T09:35:00Z", closeTime: "2024-10-22T13:35:00Z",
    broker: "Alpaca", tags: ["Bull Flag"],
  },
  {
    id: "t007", symbol: "MSFT", side: "long", status: "closed", setup: "Breakout",
    entryPrice: 410.20, exitPrice: 408.50, quantity: 60, pnl: -102.00, pnlPercent: -0.41,
    rr: -0.6, openTime: "2024-10-21T15:40:00Z", closeTime: "2024-10-21T16:10:00Z",
    broker: "Alpaca", tags: ["Breakout"],
  },
  {
    id: "t008", symbol: "NQ", side: "long", status: "closed", setup: "Momentum",
    entryPrice: 18240.50, exitPrice: 18285.00, quantity: 2, pnl: 1780.00, pnlPercent: 0.24,
    rr: 3.2, openTime: "2024-10-21T10:05:00Z", closeTime: "2024-10-21T12:05:00Z",
    broker: "Alpaca", tags: ["Futures", "High Volume"],
  },
  {
    id: "t009", symbol: "AMZN", side: "long", status: "closed", setup: "Gap Fill",
    entryPrice: 185.30, exitPrice: 187.90, quantity: 150, pnl: 390.00, pnlPercent: 1.40,
    rr: 2.0, openTime: "2024-10-20T14:45:00Z", closeTime: "2024-10-21T16:45:00Z",
    broker: "Alpaca", tags: ["Gap & Go"],
  },
  {
    id: "t010", symbol: "NVDA", side: "short", status: "closed", setup: "VWAP Rejection",
    entryPrice: 122.10, exitPrice: 119.50, quantity: 100, pnl: 260.00, pnlPercent: 2.13,
    rr: 1.7, openTime: "2024-10-19T11:15:00Z", closeTime: "2024-10-19T15:15:00Z",
    broker: "Alpaca", tags: ["VWAP"],
  },
  {
    id: "t011", symbol: "AAPL", side: "long", status: "open", setup: "Breakout",
    entryPrice: 228.50, exitPrice: 0, quantity: 75, pnl: 0, pnlPercent: 0,
    rr: 0, openTime: "2024-10-24T14:30:00Z", closeTime: "",
    broker: "Alpaca", tags: ["Breakout"],
  },
  {
    id: "t012", symbol: "TSLA", side: "long", status: "open", setup: "Bull Flag",
    entryPrice: 250.30, exitPrice: 0, quantity: 50, pnl: 0, pnlPercent: 0,
    rr: 0, openTime: "2024-10-24T09:45:00Z", closeTime: "",
    broker: "Alpaca", tags: ["Bull Flag"],
  },
];

export const EQUITY_POINTS = [
  { date: "2024-01-02", value: 50000, pnl: 0 },
  { date: "2024-01-08", value: 51200, pnl: 1200 },
  { date: "2024-01-15", value: 52400, pnl: 1200 },
  { date: "2024-01-22", value: 51800, pnl: -600 },
  { date: "2024-01-29", value: 53100, pnl: 1300 },
  { date: "2024-02-05", value: 54500, pnl: 1400 },
  { date: "2024-02-12", value: 53800, pnl: -700 },
  { date: "2024-02-19", value: 55600, pnl: 1800 },
  { date: "2024-02-26", value: 56200, pnl: 600 },
  { date: "2024-03-04", value: 55100, pnl: -1100 },
  { date: "2024-03-11", value: 53900, pnl: -1200 },
  { date: "2024-03-18", value: 56800, pnl: 2900 },
  { date: "2024-03-25", value: 58200, pnl: 1400 },
  { date: "2024-04-01", value: 59500, pnl: 1300 },
  { date: "2024-04-08", value: 60800, pnl: 1300 },
  { date: "2024-04-15", value: 61500, pnl: 700 },
  { date: "2024-04-22", value: 62900, pnl: 1400 },
  { date: "2024-04-29", value: 64100, pnl: 1200 },
  { date: "2024-05-06", value: 63200, pnl: -900 },
  { date: "2024-05-13", value: 65400, pnl: 2200 },
  { date: "2024-05-20", value: 66800, pnl: 1400 },
  { date: "2024-05-27", value: 67500, pnl: 700 },
  { date: "2024-06-03", value: 68900, pnl: 1400 },
  { date: "2024-06-10", value: 70100, pnl: 1200 },
  { date: "2024-06-17", value: 69400, pnl: -700 },
  { date: "2024-06-24", value: 71200, pnl: 1800 },
];

export const JOURNAL_ENTRIES = [
  {
    id: "j001", tradeId: "t001", symbol: "NVDA", date: "2024-10-24", pnl: 192.50, rr: 2.1,
    setup: "Breakout", emotion: "Confident", rating: 5,
    notes: "Caught the morning push above $118 level. Held through initial pullback. Clean execution, entry was perfect.",
    tags: ["Breakout", "High Volume"],
  },
  {
    id: "j002", tradeId: "t002", symbol: "AAPL", date: "2024-10-24", pnl: 160.00, rr: 1.8,
    setup: "Gap Fill", emotion: "Calm", rating: 4,
    notes: "Perfect gap fill play. Exit target hit on first resistance level. Stayed disciplined.",
    tags: ["Gap & Go"],
  },
  {
    id: "j003", tradeId: "t003", symbol: "TSLA", date: "2024-10-23", pnl: -240.00, rr: -0.8,
    setup: "Mean Reversion", emotion: "Frustrated", rating: 2,
    notes: "Tried to short the top but it kept squeezing. Should have respected the trend. Cut loss too late.",
    tags: ["Mean Reversion", "Mistake"],
  },
  {
    id: "j004", tradeId: "t004", symbol: "SPY", date: "2024-10-23", pnl: 135.00, rr: 2.4,
    setup: "VWAP Rejection", emotion: "Calm", rating: 5,
    notes: "Failed to hold VWAP after open. Clean flush to daily support. Waited patiently for confirmation.",
    tags: ["VWAP", "Breakdown"],
  },
  {
    id: "j005", tradeId: "t005", symbol: "NQ", date: "2024-10-22", pnl: -795.00, rr: -0.5,
    setup: "Momentum", emotion: "Impulsive", rating: 1,
    notes: "Chased the move at market open. No setup, pure FOMO. Reminded myself why I have rules.",
    tags: ["Futures", "Mistake"],
  },
  {
    id: "j006", tradeId: "t006", symbol: "META", date: "2024-10-22", pnl: 260.00, rr: 1.9,
    setup: "Bull Flag", emotion: "Focused", rating: 4,
    notes: "Solid consolidation pattern. Sized appropriately. Clean price action throughout.",
    tags: ["Bull Flag"],
  },
  {
    id: "j007", tradeId: "t008", symbol: "NQ", date: "2024-10-21", pnl: 1780.00, rr: 3.2,
    setup: "Momentum", emotion: "Confident", rating: 5,
    notes: "Best trade of the month. Futures push on macro catalyst. Held through pullbacks. Let winners run.",
    tags: ["Futures", "High Volume"],
  },
];

export const JOURNAL_TAGS = [
  { name: "Breakout", count: 42, color: "#ff4500" },
  { name: "Gap & Go", count: 31, color: "#3b82f6" },
  { name: "VWAP", count: 28, color: "#8b5cf6" },
  { name: "Bull Flag", count: 24, color: "#10b981" },
  { name: "Mean Reversion", count: 19, color: "#f59e0b" },
  { name: "High Volume", count: 18, color: "#06b6d4" },
  { name: "Futures", count: 15, color: "#ec4899" },
  { name: "Mistake", count: 12, color: "#ef4444" },
  { name: "Breakdown", count: 11, color: "#6366f1" },
];

export const SETUP_PERFORMANCE = [
  { name: "Breakout", trades: 52, winRate: 73.1, avgRR: 2.4, totalPnL: 4820.50, profitFactor: 3.1, avgHoldTime: "1h 12m" },
  { name: "Gap & Go", trades: 38, winRate: 68.4, avgRR: 2.1, totalPnL: 3240.00, profitFactor: 2.7, avgHoldTime: "45m" },
  { name: "VWAP Rejection", trades: 31, winRate: 71.0, avgRR: 2.0, totalPnL: 2680.00, profitFactor: 2.4, avgHoldTime: "2h 5m" },
  { name: "Bull Flag", trades: 28, winRate: 64.3, avgRR: 1.8, totalPnL: 1920.00, profitFactor: 2.1, avgHoldTime: "3h 20m" },
  { name: "Mean Reversion", trades: 22, winRate: 54.5, avgRR: 1.4, totalPnL: 580.00, profitFactor: 1.6, avgHoldTime: "30m" },
  { name: "Momentum", trades: 18, winRate: 61.1, avgRR: 1.9, totalPnL: 1080.00, profitFactor: 2.0, avgHoldTime: "1h 45m" },
];

export const COACHING_ALERTS = [
  {
    id: "ca001", type: "warning" as const, title: "Revenge Trading Pattern Detected",
    message: "You've placed 3 trades within 30 minutes of a losing trade in the past week. Consider taking a break after losses.",
    severity: "high" as const, createdAt: "2024-10-24T11:30:00Z", dismissed: false,
  },
  {
    id: "ca002", type: "achievement" as const, title: "Win Rate Milestone",
    message: "Your win rate has exceeded 65% for the past 30 days. This is a significant improvement from your 58% baseline.",
    severity: "low" as const, createdAt: "2024-10-23T09:00:00Z", dismissed: false,
  },
  {
    id: "ca003", type: "tip" as const, title: "Best Performance Window",
    message: "Your P&L is 2.4x higher when trading between 9:30-11:00 AM ET. Consider focusing your activity in this window.",
    severity: "medium" as const, createdAt: "2024-10-22T16:00:00Z", dismissed: false,
  },
  {
    id: "ca004", type: "risk" as const, title: "Position Size Drift",
    message: "Your average position size has increased 23% this week vs your 30-day average. Review your risk management.",
    severity: "medium" as const, createdAt: "2024-10-21T12:00:00Z", dismissed: false,
  },
  {
    id: "ca005", type: "tip" as const, title: "Best Setup: Breakout",
    message: "Breakout trades account for 38% of your P&L with the highest profit factor (3.1). Consider allocating more to this setup.",
    severity: "low" as const, createdAt: "2024-10-20T09:00:00Z", dismissed: true,
  },
];
