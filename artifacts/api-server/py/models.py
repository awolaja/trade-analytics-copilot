from sqlalchemy import Column, String, Float, Integer, DateTime, Text, JSON
from sqlalchemy.dialects.postgresql import ARRAY
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    pass


class Trade(Base):
    __tablename__ = "trades"

    id = Column(String, primary_key=True)
    symbol = Column(String, nullable=False)
    side = Column(String, nullable=False)
    status = Column(String, nullable=False)
    setup = Column(String, nullable=False)
    entry_price = Column(Float, nullable=False)
    exit_price = Column(Float, nullable=False, default=0)
    quantity = Column(Integer, nullable=False)
    pnl = Column(Float, nullable=False, default=0)
    pnl_percent = Column(Float, nullable=False, default=0)
    rr = Column(Float, nullable=False, default=0)
    open_time = Column(DateTime, nullable=False)
    close_time = Column(DateTime, nullable=True)
    broker = Column(String, nullable=False)
    tags = Column(ARRAY(String), nullable=False, default=list)
    notes = Column(Text, nullable=True)
    stop_loss = Column(Float, nullable=True)
    take_profit = Column(Float, nullable=True)


class EquityPoint(Base):
    __tablename__ = "equity_points"

    id = Column(Integer, primary_key=True, autoincrement=True)
    date = Column(String, nullable=False)
    value = Column(Float, nullable=False)
    pnl_amount = Column(Float, nullable=False)


class JournalEntry(Base):
    __tablename__ = "journal_entries"

    id = Column(String, primary_key=True)
    trade_id = Column(String, nullable=True)
    symbol = Column(String, nullable=False)
    date = Column(String, nullable=False)
    pnl = Column(Float, nullable=False)
    rr = Column(Float, nullable=False)
    setup = Column(String, nullable=False)
    emotion = Column(String, nullable=False)
    rating = Column(Integer, nullable=False)
    notes = Column(Text, nullable=False)
    tags = Column(ARRAY(String), nullable=False, default=list)
    embedding = Column(JSON, nullable=True)
