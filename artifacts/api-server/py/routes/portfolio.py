from fastapi import APIRouter, HTTPException
from schemas import PortfolioOverviewOut, Position, Allocation
from auth_utils import CurrentUser
import alpaca_client

router = APIRouter()


@router.get("/portfolio/overview", response_model=PortfolioOverviewOut)
def portfolio_overview(user: CurrentUser):
    if not alpaca_client.is_configured():
        raise HTTPException(status_code=503, detail="Alpaca not configured")

    try:
        account = alpaca_client.get_account()
        raw_positions = alpaca_client.get_positions()

        equity = float(account.get("equity", 0))
        last_equity = float(account.get("last_equity", equity))
        total_pnl = equity - last_equity
        total_pnl_pct = ((equity - last_equity) / last_equity * 100) if last_equity else 0

        positions = []
        for p in raw_positions:
            side = "long" if float(p.get("qty", 0)) > 0 else "short"
            qty = abs(int(float(p.get("qty", 0))))
            entry = float(p.get("avg_entry_price", 0))
            current = float(p.get("current_price", 0))
            unrealized = float(p.get("unrealized_pl", 0))
            positions.append(Position(
                symbol=p.get("symbol", ""),
                side=side,
                quantity=qty,
                entryPrice=entry,
                currentPrice=current,
                unrealizedPnL=unrealized,
                broker="Alpaca",
            ))

        return PortfolioOverviewOut(
            totalBalance=equity,
            totalPnL=total_pnl,
            totalPnLPercent=round(total_pnl_pct, 2),
            openPositions=len(positions),
            allocations=[
                Allocation(broker="Alpaca", balance=equity, percentage=100.0)
            ],
            positions=positions,
        )
    except Exception as e:
        raise HTTPException(status_code=502, detail=f"Alpaca error: {str(e)}")
