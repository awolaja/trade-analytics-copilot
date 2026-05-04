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
  AlertCircle,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Info,
  ArrowRight,
  TrendingDown
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function StrategyDrift() {
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
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Weekly Review</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Coaching Alerts</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#ff4500]/10 text-[#ff4500] transition-colors">
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
            <span className="text-zinc-100 font-medium">Strategy Drift</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64 hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <Input 
                placeholder="Search metrics..." 
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
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-2xl font-bold text-zinc-100">Strategy Drift Analysis</h1>
                <p className="text-zinc-400 mt-1">Comparison: Current Month vs. Historical Baseline</p>
              </div>
            </div>

            {/* Consistency Score Hero */}
            <Card className="bg-[#121214] border-zinc-800 overflow-hidden">
              <CardContent className="p-8 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="relative w-48 h-24">
                  {/* Semicircular Gauge SVG */}
                  <svg className="w-full h-full" viewBox="0 0 100 50">
                    <path 
                      d="M 10 50 A 40 40 0 0 1 90 50" 
                      fill="none" 
                      stroke="#1e1e21" 
                      strokeWidth="10" 
                      strokeLinecap="round" 
                    />
                    <path 
                      d="M 10 50 A 40 40 0 0 1 72 15" 
                      fill="none" 
                      stroke="#ff4500" 
                      strokeWidth="10" 
                      strokeLinecap="round" 
                      strokeDasharray="125"
                      strokeDashoffset="35"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-end">
                    <span className="text-4xl font-bold text-zinc-100">72</span>
                    <span className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Score / 100</span>
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 mb-2 px-3">MODERATE DRIFT</Badge>
                  <h2 className="text-xl font-bold text-zinc-100 mb-2">You're drifting from your edge.</h2>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                    Your current trading behavior has drifted 18% from your most profitable period (Sept 2024). This is primarily driven by setup selection and timing.
                  </p>
                </div>

                <Button variant="outline" className="border-[#ff4500] text-[#ff4500] hover:bg-[#ff4500]/10 hover:text-[#ff4500] shrink-0">
                  Recalibrate to Best Period
                </Button>
              </CardContent>
            </Card>

            {/* Drift Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Setup Adherence</label>
                  <span className="text-sm font-bold text-orange-500">68%</span>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full" style={{ width: '68%' }}></div>
                </div>
                <p className="text-[10px] text-zinc-500 font-medium">Below target 80%</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Risk Discipline</label>
                  <span className="text-sm font-bold text-green-500">81%</span>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '81%' }}></div>
                </div>
                <p className="text-[10px] text-zinc-500 font-medium">On target</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Time-of-Day Compliance</label>
                  <span className="text-sm font-bold text-red-500">54%</span>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 rounded-full" style={{ width: '54%' }}></div>
                </div>
                <p className="text-[10px] text-zinc-500 font-medium">Needs work</p>
              </div>
            </div>

            {/* Setup Mix Shift */}
            <Card className="bg-[#121214] border-zinc-800">
              <CardHeader>
                <CardTitle className="text-sm font-semibold">Setup Mix Shift</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-12 items-center justify-around">
                  {/* Last Month Bar */}
                  <div className="flex flex-col items-center gap-4 w-full md:w-32">
                    <p className="text-xs font-medium text-zinc-500">Last Month</p>
                    <div className="w-12 h-64 flex flex-col rounded-md overflow-hidden shadow-lg border border-zinc-800">
                      <div className="bg-[#ff4500] w-full" style={{ height: '45%' }} title="Breakout 45%"></div>
                      <div className="bg-zinc-700 w-full" style={{ height: '20%' }} title="Scalp 20%"></div>
                      <div className="bg-zinc-800 w-full flex-1" title="Others"></div>
                    </div>
                    <div className="text-[10px] text-center space-y-1">
                      <div className="flex items-center gap-1.5 justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#ff4500]"></div><span>Breakout 45%</span></div>
                      <div className="flex items-center gap-1.5 justify-center"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div><span>Scalp 20%</span></div>
                    </div>
                  </div>

                  <ArrowRight className="w-6 h-6 text-zinc-700 hidden md:block" />

                  {/* This Month Bar */}
                  <div className="flex flex-col items-center gap-4 w-full md:w-32">
                    <p className="text-xs font-medium text-zinc-100">This Month</p>
                    <div className="w-12 h-64 flex flex-col rounded-md overflow-hidden shadow-lg border border-zinc-800">
                      <div className="bg-[#ff4500] w-full" style={{ height: '28%' }} title="Breakout 28%"></div>
                      <div className="bg-zinc-700 w-full" style={{ height: '38%' }} title="Scalp 38%"></div>
                      <div className="bg-zinc-800 w-full flex-1" title="Others"></div>
                    </div>
                    <div className="text-[10px] text-center space-y-1">
                      <div className="flex items-center gap-1.5 justify-center"><div className="w-1.5 h-1.5 rounded-full bg-[#ff4500]"></div><span>Breakout 28%</span></div>
                      <div className="flex items-center gap-1.5 justify-center"><div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div><span>Scalp 38%</span></div>
                    </div>
                  </div>

                  <div className="flex-1 max-w-sm">
                    <h3 className="text-sm font-bold text-zinc-100 mb-3">Analysis</h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      You are moving away from your high-edge <span className="text-[#ff4500]">Breakout</span> setups towards lower-edge <span className="text-zinc-300">Scalp</span> trades.
                    </p>
                    <div className="mt-4 p-3 bg-red-500/5 rounded border border-red-500/10">
                      <p className="text-[11px] text-red-400 font-medium">Expected P&L Impact: -$1,420 / mo if trend continues.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Drift Alerts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingDown className="w-4 h-4 text-orange-500" />
                    <p className="text-sm font-bold text-zinc-100">Scalp Overuse</p>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    You're scalping 38% of trades vs your historical 20%. Scalps have 52% win rate vs your Breakout 74%. 
                  </p>
                  <p className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">Recommendation: Reduce frequency</p>
                </CardContent>
              </Card>

              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-4 h-4 text-blue-500" />
                    <p className="text-sm font-bold text-zinc-100">Morning Window Ignored</p>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    Only 31% of trades in 9-11AM vs your historical 58%. You're drifting into the afternoon slump.
                  </p>
                  <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest">Action: Revert to 9:30AM start</p>
                </CardContent>
              </Card>

              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <p className="text-sm font-bold text-zinc-100">Position Sizing Creep</p>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    Avg position 12% larger than last month. Risk per trade up from 1.2R to 1.8R.
                  </p>
                  <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Status: Critical Risk Warning</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
