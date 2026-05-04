import React from "react";
import { 
  Bell, 
  ChevronRight, 
  LayoutDashboard, 
  LineChart, 
  Calendar,
  Search, 
  Settings, 
  Target, 
  TrendingUp, 
  Wallet,
  Bot,
  ArrowUpRight,
  TrendingDown,
  AlertCircle,
  Clock,
  Zap,
  CheckCircle2
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function WeeklyReview() {
  const comparisonData = [
    { metric: "Net P&L", thisWeek: "+$2,140", lastWeek: "+$840", delta: "+154%", positive: true },
    { metric: "Trades Taken", thisWeek: "14", lastWeek: "22", delta: "-36%", positive: true },
    { metric: "Win Rate", thisWeek: "71%", lastWeek: "58%", delta: "+13%", positive: true },
    { metric: "Profit Factor", thisWeek: "2.84", lastWeek: "1.42", delta: "+1.42", positive: true },
    { metric: "Avg Trade Size", thisWeek: "$4,200", lastWeek: "$3,800", delta: "+$400", positive: false },
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
        
        <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
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
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Setup Performance</span>
          </a>

          <div className="pt-4 pb-2 px-3">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Insights</p>
          </div>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#ff4500]/10 text-[#ff4500] transition-colors">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Weekly Review</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Coaching Alerts</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Strategy Drift</span>
          </a>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Settings</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 border-b border-zinc-800 bg-[#09090b] flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center text-sm text-zinc-400">
            <span>Insights</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-zinc-100 font-medium">Weekly Review</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64 hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <Input 
                placeholder="Search analytics..." 
                className="pl-9 bg-[#121214] border-zinc-800 focus-visible:ring-[#ff4500] h-9 text-sm"
              />
            </div>
            <div className="relative">
              <Bell className="w-5 h-5 text-zinc-400" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#ff4500] rounded-full border-2 border-[#09090b]"></div>
            </div>
            <Avatar className="w-8 h-8 border border-zinc-800">
              <AvatarFallback className="bg-zinc-800 text-xs">TR</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-2xl font-bold text-zinc-100">Weekly Performance</h1>
                <p className="text-zinc-400 mt-1">Week of Oct 21 – Oct 25, 2024</p>
              </div>
              <Badge className="bg-[#ff4500]/10 text-[#ff4500] border-[#ff4500]/20 px-3 py-1">AI Generated</Badge>
            </div>
            
            {/* Stat Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Net P&L</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-green-500">+$2,140</span>
                    <span className="text-xs text-green-500/80 bg-green-500/10 px-1.5 py-0.5 rounded flex items-center">
                      <ArrowUpRight className="w-3 h-3 mr-0.5" /> 3.2%
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Trades Taken</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-zinc-100">14</span>
                    <span className="text-xs text-zinc-500 font-normal">avg 2.8 / day</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Win Rate</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-zinc-100">71%</span>
                    <span className="text-xs text-green-500 bg-green-500/10 px-1.5 py-0.5 rounded">+13% vs LW</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* AI Summary Card */}
            <Card className="bg-zinc-900 border border-[#ff4500]/30 shadow-[0_0_15px_rgba(255,69,0,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Bot className="w-24 h-24 text-[#ff4500]" />
              </div>
              <CardHeader className="border-b border-zinc-800 pb-3 flex flex-row items-center gap-3">
                <div className="p-2 bg-[#ff4500]/10 rounded-lg">
                  <Bot className="w-5 h-5 text-[#ff4500]" />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold text-zinc-100">TAC Copilot · Weekly Digest</CardTitle>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest">Performance Analysis Engine</p>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4 font-mono text-sm leading-relaxed text-zinc-300">
                <p>Your best week in 6 weeks — equity up <span className="text-green-400">3.2%</span> with only 14 trades.</p>
                
                <div className="space-y-2">
                  <div className="flex gap-3">
                    <span className="text-green-500">🟢</span>
                    <p><span className="text-zinc-100 font-medium">Breakout setups</span> drove 68% of profits. Stick to these.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-orange-500">⚠️</span>
                    <p>You overtraded Thursday after your first loss — <span className="text-zinc-100 font-medium">4 consecutive trades in 45 min</span>.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-red-500">🔴</span>
                    <p>Earnings plays remain unprofitable. Consider a <span className="text-zinc-100 font-medium">30-day moratorium</span>.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-500">💡</span>
                    <p>Your <span className="text-zinc-100 font-medium">10AM–11AM</span> window is 3× more profitable than any other hour.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* This Week vs Last Week */}
              <Card className="bg-[#121214] border-zinc-800 overflow-hidden">
                <CardHeader className="pb-3 border-b border-zinc-800/50">
                  <CardTitle className="text-sm font-semibold">This Week vs Last Week</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow className="hover:bg-transparent border-zinc-800">
                        <TableHead className="text-[10px] uppercase font-bold text-zinc-500">Metric</TableHead>
                        <TableHead className="text-[10px] uppercase font-bold text-zinc-500 text-right">This Week</TableHead>
                        <TableHead className="text-[10px] uppercase font-bold text-zinc-500 text-right">Last Week</TableHead>
                        <TableHead className="text-[10px] uppercase font-bold text-zinc-500 text-right">Delta</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comparisonData.map((row, i) => (
                        <TableRow key={i} className="border-zinc-800/50 hover:bg-zinc-800/20">
                          <TableCell className="text-sm font-medium text-zinc-400">{row.metric}</TableCell>
                          <TableCell className="text-sm text-right text-zinc-100">{row.thisWeek}</TableCell>
                          <TableCell className="text-sm text-right text-zinc-500">{row.lastWeek}</TableCell>
                          <TableCell className={`text-sm text-right font-medium ${row.positive ? 'text-green-500' : 'text-zinc-400'}`}>
                            {row.delta}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Patterns Detected */}
              <div className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold px-1">Patterns Detected</h3>
                
                <Card className="bg-[#121214] border-zinc-800">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-100">Morning Edge</p>
                        <p className="text-xs text-zinc-400">74% of profits before 11AM</p>
                      </div>
                    </div>
                    <Badge className="bg-green-500/10 text-green-500 border-none">POSITIVE</Badge>
                  </CardContent>
                </Card>

                <Card className="bg-[#121214] border-zinc-800">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                        <TrendingDown className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-100">Thursday Slump</p>
                        <p className="text-xs text-zinc-400">Net -$340 on Thursdays</p>
                      </div>
                    </div>
                    <Badge className="bg-red-500/10 text-red-500 border-none">WARNING</Badge>
                  </CardContent>
                </Card>

                <Card className="bg-[#121214] border-zinc-800">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-100">Revenge Cycle</p>
                        <p className="text-xs text-zinc-400">After 2 losses: next 3 trades avg -$180</p>
                      </div>
                    </div>
                    <Badge className="bg-orange-500/10 text-orange-500 border-none">WARNING</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
