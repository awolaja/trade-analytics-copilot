from pydantic import BaseModel
from typing import Optional
from datetime import datetime


# --- Auth ---
class LoginRequest(BaseModel):
    username: str
    password: str


class UserResponse(BaseModel):
    username: str
    displayName: str
    avatarInitials: str


# --- Trade ---
class TradeOut(BaseModel):
    id: str
    symbol: str
    side: str
    status: str
    setup: str
    entryPrice: float
    exitPrice: float
    quantity: int
    pnl: float
    pnlPercent: float
    rr: float
    openTime: str
    closeTime: str
    broker: str
    tags: list[str]

    class Config:
        from_attributes = True


class TradeDetailOut(TradeOut):
    notes: Optional[str] = None
    stopLoss: Optional[float] = None
    takeProfit: Optional[float] = None
    mae: Optional[float] = None
    mfe: Optional[float] = None
    commission: Optional[float] = None
    screenshots: list[str] = []


class TradesListOut(BaseModel):
    trades: list[TradeOut]
    total: int


# --- Dashboard ---
class DashboardSummaryOut(BaseModel):
    totalPnL: float
    totalPnLPercent: float
    winRate: float
    avgRR: float
    totalTrades: int
    openPositions: int
    dailyPnL: float
    dailyPnLPercent: float
    profitFactor: float
    avgWin: float
    avgLoss: float
    bestTrade: float
    worstTrade: float


class EquitySparklinePoint(BaseModel):
    date: str
    value: float
    pnl: float


# --- Analytics ---
class EquityCurvePoint(BaseModel):
    date: str
    value: float
    pnl: float


class EquityCurveOut(BaseModel):
    points: list[EquityCurvePoint]
    startBalance: float
    currentBalance: float
    totalReturn: float
    maxDrawdown: float
    sharpeRatio: float


class TimeSlot(BaseModel):
    label: str
    pnl: float
    trades: int
    winRate: float


class TimeAnalysisOut(BaseModel):
    byHour: list[TimeSlot]
    byDayOfWeek: list[TimeSlot]
    bestHour: str
    worstHour: str
    bestDay: str
    worstDay: str


class SetupPerformanceOut(BaseModel):
    name: str
    trades: int
    winRate: float
    avgRR: float
    totalPnL: float
    profitFactor: float
    avgHoldTime: str


# --- Journal ---
class JournalEntryOut(BaseModel):
    id: str
    tradeId: Optional[str] = None
    symbol: str
    date: str
    pnl: float
    rr: float
    setup: str
    emotion: str
    rating: int
    notes: str
    tags: list[str]

    class Config:
        from_attributes = True


class JournalTagOut(BaseModel):
    name: str
    count: int
    color: str


class JournalSearchRequest(BaseModel):
    query: str
    limit: int = 5


class JournalSearchResult(BaseModel):
    entry: JournalEntryOut
    score: float
    matchReason: str


# --- Insights ---
class DailyBreakdown(BaseModel):
    day: str
    pnl: float
    trades: int


class WeeklyReviewOut(BaseModel):
    weekStart: str
    weekEnd: str
    totalPnL: float
    totalTrades: int
    winRate: float
    avgRR: float
    bestDay: str
    worstDay: str
    topSetup: str
    improvementAreas: list[str]
    strengths: list[str]
    dailyBreakdown: list[DailyBreakdown]


class CoachingAlert(BaseModel):
    id: str
    type: str
    title: str
    message: str
    severity: str
    createdAt: str
    dismissed: bool


# --- Brokers ---
class BrokerOut(BaseModel):
    id: str
    name: str
    status: str
    accountBalance: float
    openPositions: int
    lastSync: str
    logo: str
    accountId: str
    accountType: str = "paper"
    buyingPower: float = 0.0
    cash: float = 0.0
    daytradeCount: int = 0
    equity: float = 0.0


class BrokerSyncStatus(BaseModel):
    lastSyncAt: str
    nextSyncAt: str
    tradesImported: int
    brokers: list[dict]


# --- Portfolio ---
class Position(BaseModel):
    symbol: str
    side: str
    quantity: int
    entryPrice: float
    currentPrice: float
    unrealizedPnL: float
    broker: str


class Allocation(BaseModel):
    broker: str
    balance: float
    percentage: float


class PortfolioOverviewOut(BaseModel):
    totalBalance: float
    totalPnL: float
    totalPnLPercent: float
    openPositions: int
    allocations: list[Allocation]
    positions: list[Position]
