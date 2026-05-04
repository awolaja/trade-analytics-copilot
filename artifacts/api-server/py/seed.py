from datetime import datetime
from sqlalchemy.orm import Session
from models import Trade, EquityPoint, JournalEntry

TRADES_DATA = [
    {"id": "t001", "symbol": "NVDA", "side": "long", "status": "closed", "setup": "Breakout",
     "entry_price": 118.45, "exit_price": 122.30, "quantity": 50, "pnl": 192.50, "pnl_percent": 3.25,
     "rr": 2.1, "open_time": "2024-10-24T10:15:00", "close_time": "2024-10-24T11:00:00",
     "broker": "Alpaca", "tags": ["Breakout", "High Volume"],
     "notes": "Entry was clean. Held through the first pullback at VWAP, then added conviction at the second touch.",
     "stop_loss": 116.08, "take_profit": 126.10},
    {"id": "t002", "symbol": "AAPL", "side": "short", "status": "closed", "setup": "Gap Fill",
     "entry_price": 192.10, "exit_price": 190.50, "quantity": 100, "pnl": 160.00, "pnl_percent": 0.83,
     "rr": 1.8, "open_time": "2024-10-24T09:30:00", "close_time": "2024-10-24T10:50:00",
     "broker": "Alpaca", "tags": ["Gap & Go"],
     "notes": "Perfect gap fill play. Exit target hit on first resistance level. Stayed disciplined.",
     "stop_loss": 193.97, "take_profit": 188.72},
    {"id": "t003", "symbol": "TSLA", "side": "long", "status": "closed", "setup": "Mean Reversion",
     "entry_price": 175.20, "exit_price": 172.80, "quantity": 100, "pnl": -240.00, "pnl_percent": -1.37,
     "rr": -0.8, "open_time": "2024-10-23T14:30:00", "close_time": "2024-10-23T14:45:00",
     "broker": "Alpaca", "tags": ["Mean Reversion", "Mistake"],
     "notes": "Tried to short the top but it kept squeezing. Should have respected the trend. Cut loss too late.",
     "stop_loss": 178.10, "take_profit": 169.30},
    {"id": "t004", "symbol": "SPY", "side": "short", "status": "closed", "setup": "VWAP Rejection",
     "entry_price": 524.80, "exit_price": 522.10, "quantity": 50, "pnl": 135.00, "pnl_percent": 0.51,
     "rr": 2.4, "open_time": "2024-10-23T11:00:00", "close_time": "2024-10-23T13:10:00",
     "broker": "Alpaca", "tags": ["VWAP", "Breakdown"],
     "notes": "Failed to hold VWAP after open. Clean flush to daily support. Waited patiently for confirmation.",
     "stop_loss": 525.93, "take_profit": 519.40},
    {"id": "t005", "symbol": "NQ", "side": "long", "status": "closed", "setup": "Momentum",
     "entry_price": 18250.25, "exit_price": 18210.50, "quantity": 2, "pnl": -795.00, "pnl_percent": -0.22,
     "rr": -0.5, "open_time": "2024-10-22T15:07:00", "close_time": "2024-10-22T15:15:00",
     "broker": "Alpaca", "tags": ["Futures"],
     "notes": "Chased the move at market open. No setup, pure FOMO. Reminded myself why I have rules.",
     "stop_loss": 18331.00, "take_profit": 18490.75},
    {"id": "t006", "symbol": "META", "side": "long", "status": "closed", "setup": "Bull Flag",
     "entry_price": 485.60, "exit_price": 492.10, "quantity": 40, "pnl": 260.00, "pnl_percent": 1.34,
     "rr": 1.9, "open_time": "2024-10-22T09:35:00", "close_time": "2024-10-22T13:35:00",
     "broker": "Alpaca", "tags": ["Bull Flag"],
     "notes": "Solid consolidation pattern. Sized appropriately. Clean price action throughout.",
     "stop_loss": 481.18, "take_profit": 494.18},
    {"id": "t007", "symbol": "MSFT", "side": "long", "status": "closed", "setup": "Breakout",
     "entry_price": 410.20, "exit_price": 408.50, "quantity": 60, "pnl": -102.00, "pnl_percent": -0.41,
     "rr": -0.6, "open_time": "2024-10-21T15:40:00", "close_time": "2024-10-21T16:10:00",
     "broker": "Alpaca", "tags": ["Breakout"],
     "notes": "Breakout failed — market reversed sharply. Should have waited for confirmation.",
     "stop_loss": 407.38, "take_profit": 415.48},
    {"id": "t008", "symbol": "NQ", "side": "long", "status": "closed", "setup": "Momentum",
     "entry_price": 18240.50, "exit_price": 18285.00, "quantity": 2, "pnl": 1780.00, "pnl_percent": 0.24,
     "rr": 3.2, "open_time": "2024-10-21T10:05:00", "close_time": "2024-10-21T12:05:00",
     "broker": "Alpaca", "tags": ["Futures", "High Volume"],
     "notes": "Best trade of the month. Futures push on macro catalyst. Held through pullbacks. Let winners run.",
     "stop_loss": 18213.63, "take_profit": 18326.38},
    {"id": "t009", "symbol": "AMZN", "side": "long", "status": "closed", "setup": "Gap Fill",
     "entry_price": 185.30, "exit_price": 187.90, "quantity": 150, "pnl": 390.00, "pnl_percent": 1.40,
     "rr": 2.0, "open_time": "2024-10-20T14:45:00", "close_time": "2024-10-21T16:45:00",
     "broker": "Alpaca", "tags": ["Gap & Go"],
     "notes": "Patient hold overnight. Gap filled cleanly the next day.",
     "stop_loss": 184.00, "take_profit": 189.90},
    {"id": "t010", "symbol": "NVDA", "side": "short", "status": "closed", "setup": "VWAP Rejection",
     "entry_price": 122.10, "exit_price": 119.50, "quantity": 100, "pnl": 260.00, "pnl_percent": 2.13,
     "rr": 1.7, "open_time": "2024-10-19T11:15:00", "close_time": "2024-10-19T15:15:00",
     "broker": "Alpaca", "tags": ["VWAP"],
     "notes": "Clean VWAP rejection setup. Took profits at planned target.",
     "stop_loss": 123.63, "take_profit": 118.37},
    {"id": "t011", "symbol": "AAPL", "side": "long", "status": "open", "setup": "Breakout",
     "entry_price": 228.50, "exit_price": 0, "quantity": 75, "pnl": 0, "pnl_percent": 0,
     "rr": 0, "open_time": "2024-10-24T14:30:00", "close_time": None,
     "broker": "Alpaca", "tags": ["Breakout"],
     "notes": None, "stop_loss": 223.93, "take_profit": 237.62},
    {"id": "t012", "symbol": "TSLA", "side": "long", "status": "open", "setup": "Bull Flag",
     "entry_price": 250.30, "exit_price": 0, "quantity": 50, "pnl": 0, "pnl_percent": 0,
     "rr": 0, "open_time": "2024-10-24T09:45:00", "close_time": None,
     "broker": "Alpaca", "tags": ["Bull Flag"],
     "notes": None, "stop_loss": 245.29, "take_profit": 260.31},
]

EQUITY_DATA = [
    ("2024-01-02", 50000, 0), ("2024-01-08", 51200, 1200), ("2024-01-15", 52400, 1200),
    ("2024-01-22", 51800, -600), ("2024-01-29", 53100, 1300), ("2024-02-05", 54500, 1400),
    ("2024-02-12", 53800, -700), ("2024-02-19", 55600, 1800), ("2024-02-26", 56200, 600),
    ("2024-03-04", 55100, -1100), ("2024-03-11", 53900, -1200), ("2024-03-18", 56800, 2900),
    ("2024-03-25", 58200, 1400), ("2024-04-01", 59500, 1300), ("2024-04-08", 60800, 1300),
    ("2024-04-15", 61500, 700), ("2024-04-22", 62900, 1400), ("2024-04-29", 64100, 1200),
    ("2024-05-06", 63200, -900), ("2024-05-13", 65400, 2200), ("2024-05-20", 66800, 1400),
    ("2024-05-27", 67500, 700), ("2024-06-03", 68900, 1400), ("2024-06-10", 70100, 1200),
    ("2024-06-17", 69400, -700), ("2024-06-24", 71200, 1800),
]

JOURNAL_DATA = [
    {"id": "j001", "trade_id": "t001", "symbol": "NVDA", "date": "2024-10-24", "pnl": 192.50, "rr": 2.1,
     "setup": "Breakout", "emotion": "Confident", "rating": 5,
     "notes": "Caught the morning push above $118 level. Held through initial pullback. Clean execution, entry was perfect.",
     "tags": ["Breakout", "High Volume"]},
    {"id": "j002", "trade_id": "t002", "symbol": "AAPL", "date": "2024-10-24", "pnl": 160.00, "rr": 1.8,
     "setup": "Gap Fill", "emotion": "Calm", "rating": 4,
     "notes": "Perfect gap fill play. Exit target hit on first resistance level. Stayed disciplined.",
     "tags": ["Gap & Go"]},
    {"id": "j003", "trade_id": "t003", "symbol": "TSLA", "date": "2024-10-23", "pnl": -240.00, "rr": -0.8,
     "setup": "Mean Reversion", "emotion": "Frustrated", "rating": 2,
     "notes": "Tried to short the top but it kept squeezing. Should have respected the trend. Cut loss too late.",
     "tags": ["Mean Reversion", "Mistake"]},
    {"id": "j004", "trade_id": "t004", "symbol": "SPY", "date": "2024-10-23", "pnl": 135.00, "rr": 2.4,
     "setup": "VWAP Rejection", "emotion": "Calm", "rating": 5,
     "notes": "Failed to hold VWAP after open. Clean flush to daily support. Waited patiently for confirmation.",
     "tags": ["VWAP", "Breakdown"]},
    {"id": "j005", "trade_id": "t005", "symbol": "NQ", "date": "2024-10-22", "pnl": -795.00, "rr": -0.5,
     "setup": "Momentum", "emotion": "Impulsive", "rating": 1,
     "notes": "Chased the move at market open. No setup, pure FOMO. Reminded myself why I have rules.",
     "tags": ["Futures", "Mistake"]},
    {"id": "j006", "trade_id": "t006", "symbol": "META", "date": "2024-10-22", "pnl": 260.00, "rr": 1.9,
     "setup": "Bull Flag", "emotion": "Focused", "rating": 4,
     "notes": "Solid consolidation pattern. Sized appropriately. Clean price action throughout.",
     "tags": ["Bull Flag"]},
    {"id": "j007", "trade_id": "t008", "symbol": "NQ", "date": "2024-10-21", "pnl": 1780.00, "rr": 3.2,
     "setup": "Momentum", "emotion": "Confident", "rating": 5,
     "notes": "Best trade of the month. Futures push on macro catalyst. Held through pullbacks. Let winners run.",
     "tags": ["Futures", "High Volume"]},
]


def seed_database():
    from db import SessionLocal
    db = SessionLocal()
    try:
        if db.query(Trade).count() > 0:
            return
        for t in TRADES_DATA:
            trade = Trade(
                id=t["id"], symbol=t["symbol"], side=t["side"], status=t["status"],
                setup=t["setup"], entry_price=t["entry_price"], exit_price=t["exit_price"],
                quantity=t["quantity"], pnl=t["pnl"], pnl_percent=t["pnl_percent"],
                rr=t["rr"],
                open_time=datetime.fromisoformat(t["open_time"]),
                close_time=datetime.fromisoformat(t["close_time"]) if t["close_time"] else None,
                broker=t["broker"], tags=t["tags"], notes=t.get("notes"),
                stop_loss=t.get("stop_loss"), take_profit=t.get("take_profit"),
            )
            db.add(trade)
        for date, value, pnl in EQUITY_DATA:
            db.add(EquityPoint(date=date, value=value, pnl_amount=pnl))
        for j in JOURNAL_DATA:
            entry = JournalEntry(
                id=j["id"], trade_id=j.get("trade_id"), symbol=j["symbol"],
                date=j["date"], pnl=j["pnl"], rr=j["rr"], setup=j["setup"],
                emotion=j["emotion"], rating=j["rating"], notes=j["notes"], tags=j["tags"],
            )
            db.add(entry)
        db.commit()
        print("Database seeded successfully.")
    except Exception as e:
        db.rollback()
        print(f"Seed error: {e}")
    finally:
        db.close()
