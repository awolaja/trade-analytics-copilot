import { useGetDashboardSummary, useGetDashboardRecentTrades, useGetEquityCurve } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function Dashboard() {
  const { data: summary, isLoading: isLoadingSummary } = useGetDashboardSummary();
  const { data: recentTrades, isLoading: isLoadingTrades } = useGetDashboardRecentTrades();
  const { data: equityData } = useGetEquityCurve({ period: "30d" });

  return (
    <div className="flex-1 flex flex-col h-full min-w-0">
      <header className="h-16 flex items-center justify-between px-8 border-b border-border bg-card/50 backdrop-blur shrink-0">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Overview</h2>
        <div className="flex items-center gap-6">
          <button className="text-muted-foreground hover:text-foreground transition-colors relative">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <Card className="col-span-1 md:col-span-2">
              <CardContent className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Total Realized P&L</div>
                <div className={`text-4xl font-bold tracking-tight ${summary?.totalPnL && summary.totalPnL >= 0 ? "text-emerald-400" : "text-destructive"}`}>
                  {summary ? `${summary.totalPnL >= 0 ? "+" : ""}$${summary.totalPnL.toFixed(2)}` : "---"}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Win Rate</div>
                <div className="text-2xl font-bold tracking-tight text-foreground">
                  {summary ? `${(summary.winRate * 100).toFixed(1)}%` : "---"}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Profit Factor</div>
                <div className="text-2xl font-bold tracking-tight text-emerald-400">
                  {summary ? summary.profitFactor.toFixed(2) : "---"}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Expectancy</div>
                <div className="text-2xl font-bold tracking-tight text-foreground">
                  {summary ? `$${((summary.avgWin * summary.winRate) - (summary.avgLoss * (1 - summary.winRate))).toFixed(2)}` : "---"}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Total Trades</div>
                <div className="text-2xl font-bold tracking-tight text-zinc-300">
                  {summary ? summary.totalTrades : "---"}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2 flex flex-col">
              <CardHeader className="pb-2 border-b border-border/50">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base font-semibold text-foreground">Equity Curve</CardTitle>
                  {equityData && (
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>
                        Return:{" "}
                        <span className={equityData.totalReturn >= 0 ? "text-emerald-400 font-semibold" : "text-red-400 font-semibold"}>
                          {equityData.totalReturn >= 0 ? "+" : ""}{equityData.totalReturn}%
                        </span>
                      </span>
                      <span>
                        Max DD:{" "}
                        <span className="text-red-400 font-semibold">{equityData.maxDrawdown}%</span>
                      </span>
                      <span>
                        Sharpe:{" "}
                        <span className="text-foreground font-semibold">{equityData.sharpeRatio.toFixed(2)}</span>
                      </span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-4 min-h-[300px]">
                {equityData?.points && equityData.points.length > 0 ? (
                  <ResponsiveContainer width="100%" height={280}>
                    <AreaChart data={equityData.points} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="equityGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis
                        dataKey="date"
                        stroke="hsl(var(--muted-foreground))"
                        tick={{ fontSize: 11 }}
                        tickFormatter={(d) => new Date(d).toLocaleDateString(undefined, { month: "short", day: "numeric" })}
                      />
                      <YAxis
                        stroke="hsl(var(--muted-foreground))"
                        tick={{ fontSize: 11 }}
                        tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
                        width={48}
                      />
                      <Tooltip
                        contentStyle={{ backgroundColor: "hsl(var(--card))", borderColor: "hsl(var(--border))", borderRadius: "8px", fontSize: 12 }}
                        labelFormatter={(d) => new Date(d).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                        formatter={(value: number) => [`$${value.toLocaleString()}`, "Equity"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="value"
                        stroke="hsl(var(--primary))"
                        strokeWidth={2}
                        fill="url(#equityGradient)"
                        dot={false}
                        activeDot={{ r: 4, fill: "hsl(var(--primary))" }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-[280px] flex items-center justify-center text-muted-foreground text-sm">
                    Loading equity data...
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Avg Hold Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold tracking-tight text-foreground">47 min</div>
                  <div className="text-sm text-muted-foreground mt-1">Based on recent trades</div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card>
            <CardHeader className="border-b border-border py-4 flex flex-row items-center justify-between">
              <CardTitle className="text-base font-semibold text-foreground">Recent Trades</CardTitle>
              <Button variant="ghost" className="text-xs text-primary hover:text-primary/80 hover:bg-transparent h-auto p-0">View All</Button>
            </CardHeader>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-background">
                  <TableRow className="border-border hover:bg-transparent">
                    <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Symbol</TableHead>
                    <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Side</TableHead>
                    <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Entry</TableHead>
                    <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Exit</TableHead>
                    <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">P&L</TableHead>
                    <TableHead className="text-xs font-semibold uppercase tracking-wider text-muted-foreground text-right">Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTrades?.map((trade) => (
                    <TableRow key={trade.id} className="border-border hover:bg-muted/30 transition-colors">
                      <TableCell className="font-medium text-foreground">{trade.symbol}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`text-xs px-2 py-0 h-5 border-transparent ${trade.side === 'long' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'}`}>
                          {trade.side.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground font-mono text-sm">{trade.entryPrice}</TableCell>
                      <TableCell className="text-muted-foreground font-mono text-sm">{trade.exitPrice || '-'}</TableCell>
                      <TableCell className={`font-medium font-mono text-sm ${trade.pnl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {trade.pnl > 0 ? '+' : ''}{trade.pnl.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm text-right">{new Date(trade.openTime).toLocaleDateString()}</TableCell>
                    </TableRow>
                  ))}
                  {!isLoadingTrades && (!recentTrades || recentTrades.length === 0) && (
                    <TableRow>
                      <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                        No recent trades.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}
