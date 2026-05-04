from fastapi import APIRouter, HTTPException
from schemas import BrokerOut, BrokerSyncStatus
from auth_utils import CurrentUser
from datetime import datetime, timedelta
import alpaca_client

router = APIRouter()


@router.get("/brokers", response_model=list[BrokerOut])
def list_brokers(user: CurrentUser):
    if not alpaca_client.is_configured():
        raise HTTPException(status_code=503, detail="Alpaca not configured")

    try:
        account = alpaca_client.get_account()
        positions = alpaca_client.get_positions()

        balance = float(account.get("portfolio_value", account.get("equity", 0)))
        account_number = account.get("account_number", "")
        masked_id = f"{account_number[:4]}...{account_number[-4:]}" if len(account_number) >= 8 else account_number

        return [
            BrokerOut(
                id="alpaca",
                name="Alpaca",
                status="connected" if account.get("status") == "ACTIVE" else account.get("status", "unknown").lower(),
                accountBalance=balance,
                openPositions=len(positions),
                lastSync=datetime.utcnow().isoformat() + "Z",
                logo="",
                accountId=masked_id,
                accountType="paper" if "paper" in alpaca_client.ALPACA_BASE_URL else "live",
                buyingPower=float(account.get("buying_power", 0)),
                cash=float(account.get("cash", 0)),
                daytradeCount=int(account.get("daytrade_count", 0)),
                equity=float(account.get("equity", 0)),
            )
        ]
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Alpaca error: {str(e)}")


@router.get("/brokers/sync-status", response_model=BrokerSyncStatus)
def sync_status(user: CurrentUser):
    if not alpaca_client.is_configured():
        raise HTTPException(status_code=503, detail="Alpaca not configured")

    try:
        orders = alpaca_client.get_orders(status="all", limit=100)
        filled = [o for o in orders if o.get("status") == "filled"]
        now = datetime.utcnow()

        return BrokerSyncStatus(
            lastSyncAt=now.isoformat() + "Z",
            nextSyncAt=(now + timedelta(minutes=5)).isoformat() + "Z",
            tradesImported=len(filled),
            brokers=[
                {
                    "name": "Alpaca",
                    "status": "connected",
                    "tradesImported": len(filled),
                    "lastSync": now.isoformat() + "Z",
                }
            ],
        )
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Alpaca error: {str(e)}")
