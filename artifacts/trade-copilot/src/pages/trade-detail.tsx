import { useParams } from "wouter";
import { useGetTrade } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TradeDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: trade, isLoading } = useGetTrade(id || "", {
    query: { enabled: !!id }
  });

  if (isLoading) {
    return <div className="p-8 text-muted-foreground">Loading trade details...</div>;
  }

  if (!trade) {
    return <div className="p-8 text-muted-foreground">Trade not found.</div>;
  }

  return (
    <div className="flex-1 flex flex-col h-full min-w-0 overflow-auto">
      <header className="h-16 flex items-center px-8 border-b border-border bg-card/50 backdrop-blur shrink-0">
        <Link href="/trades" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mr-4">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <h2 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-3">
          Trade Details: {trade.symbol}
          <Badge variant="outline" className={`ml-2 ${trade.side === 'long' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
            {trade.side.toUpperCase()}
          </Badge>
        </h2>
      </header>

      <div className="p-8 max-w-4xl mx-auto w-full space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold uppercase text-muted-foreground">Net P&L</CardTitle>
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold tracking-tight ${trade.pnl >= 0 ? "text-emerald-400" : "text-destructive"}`}>
                {trade.pnl >= 0 ? "+" : ""}${trade.pnl.toFixed(2)}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold uppercase text-muted-foreground">Entry Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold tracking-tight">${trade.entryPrice.toFixed(2)}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold uppercase text-muted-foreground">Exit Price</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold tracking-tight">{trade.exitPrice ? `$${trade.exitPrice.toFixed(2)}` : "-"}</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Execution Details</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-sm text-muted-foreground mb-1">Quantity</div>
              <div className="font-medium text-foreground">{trade.quantity}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Broker</div>
              <div className="font-medium text-foreground">{trade.broker}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Open Time</div>
              <div className="font-medium text-foreground">{new Date(trade.openTime).toLocaleString()}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Close Time</div>
              <div className="font-medium text-foreground">{trade.closeTime ? new Date(trade.closeTime).toLocaleString() : "-"}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Commission</div>
              <div className="font-medium text-foreground">{trade.commission ? `$${trade.commission}` : "-"}</div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-1">Setup</div>
              <div className="font-medium text-foreground">{trade.setup || "-"}</div>
            </div>
          </CardContent>
        </Card>

        {trade.notes && (
          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground whitespace-pre-wrap">{trade.notes}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
