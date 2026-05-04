import React, { useState } from "react";
import { 
  BarChart2, 
  Bell, 
  Calendar, 
  ChevronRight, 
  LayoutDashboard, 
  LineChart, 
  LogOut, 
  Search, 
  Settings, 
  Target, 
  TrendingUp, 
  Wallet 
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export function EquityCurve() {
  const [activeTab, setActiveTab] = useState("6M");

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
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#ff4500]/10 text-[#ff4500] transition-colors">
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
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium">Settings</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 border-b border-zinc-800 bg-[#09090b] flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center text-sm text-zinc-400">
            <span>Analytics</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-zinc-100 font-medium">Overview</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64 hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <Input 
                placeholder="Search command..." 
                className="pl-9 bg-[#121214] border-zinc-800 focus-visible:ring-[#ff4500] h-9 text-sm"
              />
            </div>
            <button className="relative p-2 text-zinc-400 hover:text-zinc-100 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#ff4500] rounded-full"></span>
            </button>
            <Avatar className="w-8 h-8 border border-zinc-800">
              <AvatarImage src="" />
              <AvatarFallback className="bg-zinc-800 text-xs">TR</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto space-y-6">
            
            {/* Top Stat Row */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-4 flex flex-col justify-center h-full">
                  <p className="text-xs font-medium text-zinc-400 mb-1">Net P&L</p>
                  <p className="text-2xl font-bold text-green-500">+$14,320.50</p>
                </CardContent>
              </Card>
              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-4 flex flex-col justify-center h-full">
                  <p className="text-xs font-medium text-zinc-400 mb-1">Win Rate</p>
                  <p className="text-2xl font-bold text-zinc-100">68.4%</p>
                </CardContent>
              </Card>
              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-4 flex flex-col justify-center h-full">
                  <p className="text-xs font-medium text-zinc-400 mb-1">Profit Factor</p>
                  <p className="text-2xl font-bold text-zinc-100">2.31</p>
                </CardContent>
              </Card>
              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-4 flex flex-col justify-center h-full">
                  <p className="text-xs font-medium text-zinc-400 mb-1">Expectancy</p>
                  <p className="text-2xl font-bold text-green-500">+$127.40</p>
                </CardContent>
              </Card>
              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-4 flex flex-col justify-center h-full">
                  <p className="text-xs font-medium text-zinc-400 mb-1">Max Drawdown</p>
                  <p className="text-2xl font-bold text-red-500">-$2,140</p>
                </CardContent>
              </Card>
            </div>

            {/* Equity Curve Chart */}
            <Card className="bg-[#121214] border-zinc-800">
              <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-zinc-800/50">
                <CardTitle className="text-base font-semibold">Cumulative Equity</CardTitle>
                <div className="flex bg-zinc-900 rounded-md p-0.5 border border-zinc-800">
                  {['1W', '1M', '3M', '6M', '1Y', 'All'].map(tab => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 text-xs font-medium rounded-sm transition-colors ${
                        activeTab === tab 
                          ? 'bg-zinc-800 text-[#ff4500] shadow-sm' 
                          : 'text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="h-[350px] w-full relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    {[66, 62, 58, 54, 50].map((val, i) => (
                      <div key={i} className="flex items-center w-full h-0 border-t border-zinc-800/50 border-dashed">
                        <span className="absolute -left-1 -translate-x-full text-[10px] text-zinc-500">${val}k</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Chart SVG */}
                  <div className="absolute inset-0 ml-2 mt-0 mb-6 border-l border-b border-zinc-800">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 300" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="equity-gradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#ff4500" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#ff4500" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      
                      {/* Path logic: 
                          Y domain: $50k to $66k (16k diff)
                          $50k = Y:300, $66k = Y:0
                          Scale: Y = 300 - ((val - 50000) / 16000) * 300
                      */}
                      
                      {/* Data points for realistic curve: 
                          Jan: 50000 (0, 300)
                          Feb: 52000 (200, 262.5)
                          Mar: 54500 (400, 215.6)
                          Mar 15: 52360 (500, 255.7) - Max DD
                          Apr: 57000 (600, 168.7)
                          May: 61000 (800, 93.7)
                          Jun: 64320 (1000, 31.5)
                      */}
                      
                      <path 
                        d="M0,300 C100,280 150,270 200,262.5 C300,240 350,220 400,215.6 C450,200 480,260 500,255.7 C550,240 570,180 600,168.7 C700,130 750,110 800,93.7 C900,60 950,40 1000,31.5 L1000,300 L0,300 Z" 
                        fill="url(#equity-gradient)" 
                      />
                      
                      <path 
                        d="M0,300 C100,280 150,270 200,262.5 C300,240 350,220 400,215.6 C450,200 480,260 500,255.7 C550,240 570,180 600,168.7 C700,130 750,110 800,93.7 C900,60 950,40 1000,31.5" 
                        fill="none" 
                        stroke="#ff4500" 
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      
                      {/* Max DD Marker */}
                      <circle cx="500" cy="255.7" r="4" fill="#ef4444" stroke="#121214" strokeWidth="2" />
                      
                      {/* Peak Marker */}
                      <circle cx="1000" cy="31.5" r="4" fill="#ff4500" stroke="#121214" strokeWidth="2" />
                    </svg>

                    {/* DD Label */}
                    <div className="absolute flex flex-col items-center" style={{ left: '50%', top: 'calc(100% * (255.7/300) + 10px)', transform: 'translateX(-50%)' }}>
                      <span className="text-[10px] bg-red-500/10 text-red-500 px-1.5 py-0.5 rounded border border-red-500/20 whitespace-nowrap">
                        Max DD: -$2,140
                      </span>
                    </div>

                    {/* Peak Label */}
                    <div className="absolute" style={{ left: '100%', top: 'calc(100% * (31.5/300) - 25px)', transform: 'translateX(-100%)' }}>
                      <span className="text-xs font-bold text-zinc-100 whitespace-nowrap">
                        $64,320
                      </span>
                    </div>

                    {/* X-Axis Labels */}
                    <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] text-zinc-500">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bottom Row: Winners & Losers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Largest Winners */}
              <Card className="bg-[#121214] border-zinc-800 flex flex-col">
                <CardHeader className="pb-3 border-b border-zinc-800/50">
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Largest Winners
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                  <Table>
                    <TableHeader className="bg-zinc-900/50 border-b border-zinc-800">
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="text-zinc-500 h-9">Symbol</TableHead>
                        <TableHead className="text-zinc-500 h-9 text-right">P&L</TableHead>
                        <TableHead className="text-zinc-500 h-9 text-right">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { sym: 'NVDA', pl: '+$1,780', date: 'May 24' },
                        { sym: 'NQ', pl: '+$1,420', date: 'Jun 12' },
                        { sym: 'META', pl: '+$910', date: 'Feb 03' },
                        { sym: 'SPY', pl: '+$675', date: 'Apr 18' },
                        { sym: 'AAPL', pl: '+$520', date: 'Jan 15' },
                      ].map((trade, i) => (
                        <TableRow key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/20">
                          <TableCell className="font-medium">{trade.sym}</TableCell>
                          <TableCell className="text-right text-green-500 font-medium">{trade.pl}</TableCell>
                          <TableCell className="text-right text-zinc-500 text-xs">{trade.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              {/* Largest Losers */}
              <Card className="bg-[#121214] border-zinc-800 flex flex-col">
                <CardHeader className="pb-3 border-b border-zinc-800/50">
                  <CardTitle className="text-base font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    Largest Losers
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-1">
                  <Table>
                    <TableHeader className="bg-zinc-900/50 border-b border-zinc-800">
                      <TableRow className="hover:bg-transparent">
                        <TableHead className="text-zinc-500 h-9">Symbol</TableHead>
                        <TableHead className="text-zinc-500 h-9 text-right">P&L</TableHead>
                        <TableHead className="text-zinc-500 h-9 text-right">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { sym: 'TSLA', pl: '-$795', date: 'Mar 15' },
                        { sym: 'NQ', pl: '-$640', date: 'Mar 16' },
                        { sym: 'MSFT', pl: '-$380', date: 'May 02' },
                        { sym: 'AAPL 180P', pl: '-$290', date: 'Jan 22' },
                        { sym: 'SPY', pl: '-$215', date: 'Apr 04' },
                      ].map((trade, i) => (
                        <TableRow key={i} className="border-b border-zinc-800/50 hover:bg-zinc-800/20">
                          <TableCell className="font-medium">{trade.sym}</TableCell>
                          <TableCell className="text-right text-red-500 font-medium">{trade.pl}</TableCell>
                          <TableCell className="text-right text-zinc-500 text-xs">{trade.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
