import { useState } from "react";
import { useGetEquityCurve, useGetTimeAnalysis, useGetSetupPerformance } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar } from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Analytics() {
  const { data: equityData } = useGetEquityCurve({ period: "30d" });
  const { data: timeData } = useGetTimeAnalysis();
  const { data: setupData } = useGetSetupPerformance();

  return (
    <div className="flex-1 flex flex-col h-full min-w-0 overflow-auto">
      <header className="h-16 flex items-center px-8 border-b border-border bg-card/50 backdrop-blur shrink-0">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Analytics</h2>
      </header>

      <div className="p-8 max-w-7xl mx-auto w-full space-y-8">
        <Tabs defaultValue="equity" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="equity">Equity Curve</TabsTrigger>
            <TabsTrigger value="time">Time Analysis</TabsTrigger>
            <TabsTrigger value="setup">Setup Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="equity" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase text-muted-foreground">Total Return</div>
                  <div className="text-2xl font-bold mt-2">
                    {equityData ? `${equityData.totalReturn > 0 ? '+' : ''}${equityData.totalReturn}%` : "---"}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase text-muted-foreground">Max Drawdown</div>
                  <div className="text-2xl font-bold mt-2 text-destructive">
                    {equityData ? `${equityData.maxDrawdown}%` : "---"}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase text-muted-foreground">Sharpe Ratio</div>
                  <div className="text-2xl font-bold mt-2 text-foreground">
                    {equityData ? equityData.sharpeRatio.toFixed(2) : "---"}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase text-muted-foreground">Current Balance</div>
                  <div className="text-2xl font-bold mt-2 text-emerald-400">
                    {equityData ? `$${equityData.currentBalance.toLocaleString()}` : "---"}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Cumulative Equity</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                {equityData?.points ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={equityData.points} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" tick={{fontSize: 12}} />
                      <YAxis stroke="hsl(var(--muted-foreground))" tick={{fontSize: 12}} tickFormatter={(v) => `$${v}`} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                        itemStyle={{ color: 'hsl(var(--foreground))' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorValue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground">Loading chart...</div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="time">
            <Card>
              <CardHeader>
                <CardTitle>Performance by Hour</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                 {timeData?.byHour ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={timeData.byHour} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                      <XAxis dataKey="label" stroke="hsl(var(--muted-foreground))" tick={{fontSize: 12}} />
                      <YAxis stroke="hsl(var(--muted-foreground))" tick={{fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))' }}
                        cursor={{fill: 'hsl(var(--muted)/0.5)'}}
                      />
                      <Bar dataKey="pnl" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center text-muted-foreground">Loading analysis...</div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="setup">
             <Card>
              <CardHeader>
                <CardTitle>Setup Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground p-8 text-center border border-dashed border-border rounded-lg">
                  Setup performance analysis data will appear here.
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
