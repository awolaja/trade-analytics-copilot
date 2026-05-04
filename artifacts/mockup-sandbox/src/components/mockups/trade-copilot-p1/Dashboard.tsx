import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Activity, Bell, BookOpen, LayoutDashboard, LineChart, Settings, Target, TrendingUp, Zap } from "lucide-react";

export function Dashboard() {
  const recentTrades = [
    { id: "trd_1", symbol: "NVDA", side: "Long", entry: "118.45", exit: "122.30", pnl: 485.50, holdTime: "45m", date: "Today, 10:15 AM" },
    { id: "trd_2", symbol: "AAPL", side: "Short", entry: "192.10", exit: "190.50", pnl: 320.00, holdTime: "1h 20m", date: "Today, 09:30 AM" },
    { id: "trd_3", symbol: "TSLA", side: "Long", entry: "175.20", exit: "172.80", pnl: -240.00, holdTime: "15m", date: "Yesterday, 2:45 PM" },
    { id: "trd_4", symbol: "SPY", side: "Short", entry: "524.80", exit: "522.10", pnl: 675.00, holdTime: "2h 10m", date: "Yesterday, 11:00 AM" },
    { id: "trd_5", symbol: "NQ", side: "Long", entry: "18250.25", exit: "18210.50", pnl: -795.00, holdTime: "8m", date: "May 14, 3:15 PM" },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex font-sans selection:bg-[#ff4500]/30">
      {/* Sidebar */}
      <aside className="w-64 bg-[#121214] border-r border-[#27272a] flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-[#27272a] gap-3 text-[#ff4500]">
          <Activity className="w-6 h-6" />
          <span className="text-xl font-bold tracking-tight text-white">TAC</span>
        </div>
        
        <nav className="flex-1 py-6 px-3 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 bg-[#ff4500]/10 text-[#ff4500] rounded-md font-medium text-sm">
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-[#27272a]/50 rounded-md font-medium text-sm transition-colors">
            <Zap className="w-4 h-4" />
            Trades
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-[#27272a]/50 rounded-md font-medium text-sm transition-colors">
            <LineChart className="w-4 h-4" />
            Analytics
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-[#27272a]/50 rounded-md font-medium text-sm transition-colors">
            <BookOpen className="w-4 h-4" />
            Journal
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-[#27272a]/50 rounded-md font-medium text-sm transition-colors">
            <Target className="w-4 h-4" />
            Insights
          </a>
        </nav>

        <div className="p-3 mt-auto">
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-zinc-400 hover:text-zinc-100 hover:bg-[#27272a]/50 rounded-md font-medium text-sm transition-colors">
            <Settings className="w-4 h-4" />
            Settings
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-[#27272a] bg-[#121214]/50 backdrop-blur">
          <h2 className="text-lg font-semibold tracking-tight">Overview</h2>
          <div className="flex items-center gap-6">
            <button className="text-zinc-400 hover:text-zinc-100 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-[#ff4500] rounded-full border border-[#121214]"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium">Alex Trader</div>
                <div className="text-xs text-zinc-500">Pro Plan</div>
              </div>
              <Avatar className="h-8 w-8 rounded bg-[#27272a] border border-[#3f3f46]">
                <AvatarFallback className="bg-transparent text-xs text-zinc-300">AT</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 overflow-auto p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            
            {/* Top Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <Card className="bg-[#121214] border-[#27272a] col-span-1 md:col-span-2">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Total Realized P&L</div>
                  <div className="text-4xl font-bold tracking-tight text-emerald-400">+$14,320.50</div>
                </CardContent>
              </Card>

              <Card className="bg-[#121214] border-[#27272a]">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Win Rate</div>
                  <div className="text-2xl font-bold tracking-tight">68.4%</div>
                </CardContent>
              </Card>

              <Card className="bg-[#121214] border-[#27272a]">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Profit Factor</div>
                  <div className="text-2xl font-bold tracking-tight text-emerald-400">2.31</div>
                </CardContent>
              </Card>

              <Card className="bg-[#121214] border-[#27272a]">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Expectancy</div>
                  <div className="text-2xl font-bold tracking-tight">+$127.40</div>
                </CardContent>
              </Card>

              <Card className="bg-[#121214] border-[#27272a]">
                <CardContent className="p-6">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Total Trades</div>
                  <div className="text-2xl font-bold tracking-tight text-zinc-300">183</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Equity Curve Placeholder */}
              <Card className="bg-[#121214] border-[#27272a] lg:col-span-2 flex flex-col">
                <CardHeader className="pb-2 border-b border-[#27272a]/50">
                  <CardTitle className="text-base font-semibold">Equity Curve</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-0 relative min-h-[300px] flex items-center justify-center overflow-hidden">
                  {/* Fake faint chart background */}
                  <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <path d="M0,80 L10,75 L20,78 L30,60 L40,65 L50,45 L60,50 L70,30 L80,35 L90,15 L100,20 V100 H0 Z" fill="url(#chart-gradient)" />
                    <path d="M0,80 L10,75 L20,78 L30,60 L40,65 L50,45 L60,50 L70,30 L80,35 L90,15 L100,20" fill="none" stroke="#ff4500" strokeWidth="1" />
                    <defs>
                      <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ff4500" stopOpacity="1" />
                        <stop offset="100%" stopColor="#ff4500" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  <div className="relative z-10 text-center space-y-4 max-w-sm px-6">
                    <div className="w-12 h-12 bg-[#27272a] rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-6 h-6 text-zinc-400" />
                    </div>
                    <h3 className="text-lg font-medium text-zinc-200">No data available</h3>
                    <p className="text-sm text-zinc-500">Connect your broker or upload a CSV of your trade history to view your equity curve.</p>
                    <div className="flex gap-3 justify-center pt-2">
                      <Button variant="outline" className="border-[#3f3f46] text-zinc-300 hover:text-white hover:bg-[#27272a]">
                        Upload CSV
                      </Button>
                      <Button className="bg-[#ff4500] hover:bg-[#e03d00] text-white">
                        Connect Broker
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Side Stats */}
              <div className="space-y-4">
                <Card className="bg-[#121214] border-[#27272a]">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Avg Hold Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold tracking-tight">47 min</div>
                    <div className="text-sm text-zinc-500 mt-1">Based on 183 trades</div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recent Trades Table */}
            <Card className="bg-[#121214] border-[#27272a]">
              <CardHeader className="border-b border-[#27272a] py-4 flex flex-row items-center justify-between">
                <CardTitle className="text-base font-semibold">Recent Trades</CardTitle>
                <Button variant="ghost" className="text-xs text-[#ff4500] hover:text-[#ff4500]/80 hover:bg-transparent h-auto p-0">View All</Button>
              </CardHeader>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-[#09090b]">
                    <TableRow className="border-[#27272a] hover:bg-transparent">
                      <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Symbol</TableHead>
                      <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Side</TableHead>
                      <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Entry</TableHead>
                      <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Exit</TableHead>
                      <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500">P&L</TableHead>
                      <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Hold Time</TableHead>
                      <TableHead className="text-xs font-semibold uppercase tracking-wider text-zinc-500 text-right">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTrades.map((trade) => (
                      <TableRow key={trade.id} className="border-[#27272a] hover:bg-[#27272a]/30 transition-colors">
                        <TableCell className="font-medium text-zinc-200">{trade.symbol}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={`text-xs px-2 py-0 h-5 border-transparent ${trade.side === 'Long' ? 'bg-blue-500/10 text-blue-400' : 'bg-purple-500/10 text-purple-400'}`}>
                            {trade.side}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-zinc-400 font-mono text-sm">{trade.entry}</TableCell>
                        <TableCell className="text-zinc-400 font-mono text-sm">{trade.exit}</TableCell>
                        <TableCell className={`font-medium font-mono text-sm ${trade.pnl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                          {trade.pnl > 0 ? '+' : ''}{trade.pnl.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-zinc-400 text-sm">{trade.holdTime}</TableCell>
                        <TableCell className="text-zinc-500 text-sm text-right">{trade.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}
