import os
import httpx
from typing import Optional

ALPACA_KEY_ID = os.environ.get("ALPACA_API_KEY_ID", "")
ALPACA_SECRET_KEY = os.environ.get("ALPACA_API_SECRET_KEY", "")
ALPACA_BASE_URL = os.environ.get("ALPACA_BASE_URL", "https://paper-api.alpaca.markets")
ALPACA_DATA_URL = "https://data.alpaca.markets"

HEADERS = {
    "APCA-API-KEY-ID": ALPACA_KEY_ID,
    "APCA-API-SECRET-KEY": ALPACA_SECRET_KEY,
}


def is_configured() -> bool:
    return bool(ALPACA_KEY_ID and ALPACA_SECRET_KEY)


def _get(path: str, base: str = ALPACA_BASE_URL) -> dict:
    url = f"{base}{path}"
    with httpx.Client(timeout=10) as client:
        r = client.get(url, headers=HEADERS)
        r.raise_for_status()
        return r.json()


def get_account() -> dict:
    return _get("/v2/account")


def get_positions() -> list:
    return _get("/v2/positions")


def get_orders(status: str = "all", limit: int = 50) -> list:
    return _get(f"/v2/orders?status={status}&limit={limit}&direction=desc")


def get_portfolio_history(period: str = "1M", timeframe: str = "1D") -> dict:
    return _get(f"/v2/account/portfolio/history?period={period}&timeframe={timeframe}")


def get_latest_bar(symbol: str) -> Optional[dict]:
    try:
        data = _get(f"/v2/stocks/{symbol}/bars/latest", base=ALPACA_DATA_URL)
        return data.get("bar")
    except Exception:
        return None
