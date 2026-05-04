import { useGetPortfolioOverview } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function BrokerPortfolio() {
  const { data: portfolio, isLoading } = useGetPortfolioOverview();

  return (
    <div className="flex-1 flex flex-col h-full min-w-0 overflow-auto">
      <header className="h-16 flex items-center px-8 border-b border-border bg-card/50 backdrop-blur shrink-0">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Portfolio Overview</h2>
      </header>

      <div className="p-8 max-w-6xl mx-auto w-full space-y-6">
        {isLoading ? (
          <div className="text-muted-foreground">Loading portfolio...</div>
        ) : !portfolio ? (
          <div className="text-muted-foreground">No portfolio data available.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Total Balance</p>
                  <div className="text-3xl font-bold text-foreground">
                    ${portfolio.totalBalance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Unrealized P&L</p>
                  <div className={`text-3xl font-bold ${portfolio.totalPnL >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {portfolio.totalPnL >= 0 ? '+' : ''}${portfolio.totalPnL.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">P&L %</p>
                  <div className={`text-3xl font-bold ${portfolio.totalPnLPercent >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {portfolio.totalPnLPercent >= 0 ? '+' : ''}{portfolio.totalPnLPercent.toFixed(2)}%
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Open Positions</p>
                  <div className="text-3xl font-bold text-foreground">
                    {portfolio.openPositions}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle>Allocation by Broker</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {portfolio.allocations.map((alloc) => (
                      <div key={alloc.broker}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="font-medium">{alloc.broker}</span>
                          <span className="text-muted-foreground">{alloc.percentage.toFixed(1)}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${alloc.percentage}%` }} />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">${alloc.balance.toLocaleString()}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Open Positions</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Symbol</TableHead>
                        <TableHead>Broker</TableHead>
                        <TableHead className="text-right">Qty</TableHead>
                        <TableHead className="text-right">Entry</TableHead>
                        <TableHead className="text-right">Current</TableHead>
                        <TableHead className="text-right">Unrealized P&L</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {portfolio.positions.map((pos, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">
                            {pos.symbol}
                            <Badge variant="outline" className={`ml-2 text-[10px] ${pos.side === 'long' ? 'text-emerald-500' : 'text-red-500'}`}>
                              {pos.side.toUpperCase()}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-muted-foreground">{pos.broker}</TableCell>
                          <TableCell className="text-right font-mono">{pos.quantity}</TableCell>
                          <TableCell className="text-right font-mono">${pos.entryPrice.toFixed(2)}</TableCell>
                          <TableCell className="text-right font-mono">${pos.currentPrice.toFixed(2)}</TableCell>
                          <TableCell className={`text-right font-mono font-medium ${pos.unrealizedPnL >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                            {pos.unrealizedPnL >= 0 ? '+' : ''}${pos.unrealizedPnL.toFixed(2)}
                          </TableCell>
                        </TableRow>
                      ))}
                      {portfolio.positions.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center text-muted-foreground h-24">
                            No open positions.
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
