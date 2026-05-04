import React from "react";
import { 
  Bell, 
  ChevronRight, 
  Info, 
  LayoutDashboard, 
  LineChart, 
  Calendar,
  Search, 
  Settings, 
  Target, 
  TrendingUp, 
  Wallet,
  AlertTriangle
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function SetupPerformance() {
  const symbolData = [
    { sym: 'NVDA', val: 4120, max: 4120, count: 24 },
    { sym: 'NQ', val: 3280, max: 4120, count: 18 },
    { sym: 'SPY', val: 2140, max: 4120, count: 42 },
    { sym: 'META', val: 1870, max: 4120, count: 12 },
    { sym: 'AAPL', val: 1240, max: 4120, count: 15 },
    { sym: 'Options', val: 920, max: 4120, count: 8 },
    { sym: 'MSFT', val: -380, max: 4120, count: 6 },
    { sym: 'TSLA', val: -795, max: 4120, count: 14 },
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 bg-[#121214] flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-[#ff4500] flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">TAC</span>
          </div>
        </div>
        
        <nav className="flex-1 py-6 px-3 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <LayoutDashboard className="w-4 h-4" />
            <span className="text-sm font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <Wallet className="w-4 h-4" />
            <span className="text-sm font-medium">Trades</span>
          </a>
          <div className="pt-4 pb-2 px-3">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Analytics</p>
          </div>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <LineChart className="w-4 h-4" />
            <span className="text-sm font-medium">Overview</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Time Analysis</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#ff4500]/10 text-[#ff4500] transition-colors">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Setup Performance</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 border-b border-zinc-800 bg-[#09090b] flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center text-sm text-zinc-400">
            <span>Analytics</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-zinc-100 font-medium">Setup Performance</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64 hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <Input 
                placeholder="Search command..." 
                className="pl-9 bg-[#121214] border-zinc-800 focus-visible:ring-[#ff4500] h-9 text-sm"
              />
            </div>
            <Avatar className="w-8 h-8 border border-zinc-800">
              <AvatarFallback className="bg-zinc-800 text-xs">TR</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Setup Tag Table */}
            <Card className="bg-[#121214] border-zinc-800">
              <CardHeader className="pb-4 border-b border-zinc-800/50">
                <CardTitle className="text-base font-semibold">Performance by Setup Tag</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader className="bg-zinc-900/50 border-b border-zinc-800">
                    <TableRow className="hover:bg-transparent">
                      <TableHead className="text-zinc-500 font-medium">Setup Tag</TableHead>
                      <TableHead className="text-zinc-500 font-medium text-right">Trades</TableHead>
                      <TableHead className="text-zinc-500 font-medium text-right">Win Rate</TableHead>
                      <TableHead className="text-zinc-500 font-medium text-right">Avg Winner</TableHead>
                      <TableHead className="text-zinc-500 font-medium text-right">Avg Loser</TableHead>
                      <TableHead className="text-zinc-500 font-medium text-right">Profit Factor</TableHead>
                      <TableHead className="text-zinc-500 font-medium text-right">Net P&L</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-zinc-800/50 hover:bg-zinc-800/20 border-l-2 border-l-[#ff4500] bg-zinc-900/20">
                      <TableCell className="font-medium">Breakout</TableCell>
                      <TableCell className="text-right text-zinc-400">42</TableCell>
                      <TableCell className="text-right text-zinc-100">74%</TableCell>
                      <TableCell className="text-right text-green-500">+$387</TableCell>
                      <TableCell className="text-right text-red-500">-$142</TableCell>
                      <TableCell className="text-right text-green-500 font-medium">3.12</TableCell>
                      <TableCell className="text-right text-green-500 font-bold">+$8,240</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-zinc-800/50 hover:bg-zinc-800/20">
                      <TableCell className="font-medium">Momentum</TableCell>
                      <TableCell className="text-right text-zinc-400">38</TableCell>
                      <TableCell className="text-right text-zinc-100">61%</TableCell>
                      <TableCell className="text-right text-green-500">+$310</TableCell>
                      <TableCell className="text-right text-red-500">-$198</TableCell>
                      <TableCell className="text-right text-green-500 font-medium">2.14</TableCell>
                      <TableCell className="text-right text-green-500 font-bold">+$3,920</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-zinc-800/50 hover:bg-zinc-800/20">
                      <TableCell className="font-medium">Scalp</TableCell>
                      <TableCell className="text-right text-zinc-400">32</TableCell>
                      <TableCell className="text-right text-zinc-100">72%</TableCell>
                      <TableCell className="text-right text-green-500">+$142</TableCell>
                      <TableCell className="text-right text-red-500">-$98</TableCell>
                      <TableCell className="text-right text-green-500 font-medium">2.78</TableCell>
                      <TableCell className="text-right text-green-500 font-bold">+$2,490</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-zinc-800/50 hover:bg-zinc-800/20">
                      <TableCell className="font-medium">VWAP Reclaim</TableCell>
                      <TableCell className="text-right text-zinc-400">24</TableCell>
                      <TableCell className="text-right text-zinc-100">67%</TableCell>
                      <TableCell className="text-right text-green-500">+$298</TableCell>
                      <TableCell className="text-right text-red-500">-$201</TableCell>
                      <TableCell className="text-right text-green-500 font-medium">2.31</TableCell>
                      <TableCell className="text-right text-green-500 font-bold">+$2,870</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-zinc-800/50 hover:bg-zinc-800/20">
                      <TableCell className="font-medium">Mean Revert</TableCell>
                      <TableCell className="text-right text-zinc-400">29</TableCell>
                      <TableCell className="text-right text-zinc-100">55%</TableCell>
                      <TableCell className="text-right text-green-500">+$224</TableCell>
                      <TableCell className="text-right text-red-500">-$189</TableCell>
                      <TableCell className="text-right text-zinc-400 font-medium">1.48</TableCell>
                      <TableCell className="text-right text-green-500 font-bold">+$1,140</TableCell>
                    </TableRow>
                    <TableRow className="border-b border-zinc-800/50 hover:bg-zinc-800/20 border-l-2 border-l-red-500 bg-red-950/10">
                      <TableCell className="font-medium">Earnings Play</TableCell>
                      <TableCell className="text-right text-zinc-400">18</TableCell>
                      <TableCell className="text-right text-zinc-100">44%</TableCell>
                      <TableCell className="text-right text-green-500">+$512</TableCell>
                      <TableCell className="text-right text-red-500">-$318</TableCell>
                      <TableCell className="text-right text-red-500 font-medium">1.02</TableCell>
                      <TableCell className="text-right text-red-500 font-bold">-$240</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* P&L by Symbol */}
            <Card className="bg-[#121214] border-zinc-800">
              <CardHeader className="pb-4 border-b border-zinc-800/50">
                <CardTitle className="text-base font-semibold">P&L by Symbol</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {symbolData.map((d, i) => {
                    const isPositive = d.val >= 0;
                    const absVal = Math.abs(d.val);
                    const widthPct = Math.max((absVal / d.max) * 100, 2);
                    
                    return (
                      <div key={i} className="flex items-center gap-4 text-sm">
                        <div className="w-16 font-medium text-zinc-300">{d.sym}</div>
                        
                        {/* Center line layout for positive/negative */}
                        <div className="flex-1 flex relative h-7">
                          {/* Negative side */}
                          <div className="flex-1 border-r border-zinc-700/50 flex justify-end items-center pr-1">
                            {!isPositive && (
                              <div className="h-full bg-red-500/80 rounded-l-sm flex items-center justify-end px-2" style={{ width: `${widthPct}%` }}>
                                <span className="text-xs text-white mix-blend-difference font-medium">-${Math.abs(d.val)}</span>
                              </div>
                            )}
                          </div>
                          
                          {/* Positive side */}
                          <div className="flex-1 border-l border-zinc-700/50 flex justify-start items-center pl-1">
                            {isPositive && (
                              <div className="h-full bg-green-500/80 rounded-r-sm flex items-center justify-start px-2" style={{ width: `${widthPct}%` }}>
                                <span className="text-xs text-white mix-blend-difference font-medium">+${Math.abs(d.val)}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="w-16 text-right">
                          <span className="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded">{d.count} tr</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Drawdown Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-5">
                  <p className="text-xs font-medium text-zinc-400 mb-1">Max Drawdown</p>
                  <p className="text-2xl font-bold text-red-500 mb-2">-$2,140</p>
                  <p className="text-xs text-zinc-500">Mar 12 – Mar 18</p>
                </CardContent>
              </Card>
              
              <div className="grid grid-rows-2 gap-4">
                <Card className="bg-[#121214] border-zinc-800 h-full">
                  <CardContent className="p-4 flex flex-col justify-center h-full">
                    <p className="text-xs font-medium text-zinc-400 mb-1">Avg Drawdown</p>
                    <p className="text-lg font-bold text-zinc-100">-$487</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#121214] border-zinc-800 h-full">
                  <CardContent className="p-4 flex flex-col justify-center h-full">
                    <p className="text-xs font-medium text-zinc-400 mb-1">Recovery Time</p>
                    <p className="text-lg font-bold text-zinc-100">4.2 days <span className="text-zinc-500 text-sm font-normal">avg</span></p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-[#121214] border-zinc-800 md:col-span-1">
                <CardContent className="p-5 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle className="w-4 h-4 text-[#ff4500]" />
                      <p className="text-xs font-medium text-zinc-400">Largest Recurring Loss Pattern</p>
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed mt-3">
                      Short <span className="font-semibold text-zinc-100">TSLA</span> on momentum — 4 consecutive losses averaging <span className="text-red-400 font-medium">-$198</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
