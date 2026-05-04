import React from "react";
import { 
  TrendingUp, 
  LayoutDashboard, 
  History, 
  LineChart, 
  Clock, 
  Zap, 
  Search, 
  Bell, 
  Settings,
  ChevronRight,
  ExternalLink,
  RefreshCw,
  Wallet,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  PieChart,
  BarChart3,
  DollarSign
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function PortfolioOverview() {
  return (
    <div className="flex h-screen bg-[#09090b] text-zinc-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 flex flex-col">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-[#ff4500] rounded flex items-center justify-center">
            <TrendingUp className="text-white w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight">TAC</span>
        </div>

        <nav className="flex-1 px-4 space-y-8 py-4">
          <div className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 transition-colors">
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 transition-colors">
              <History size={18} />
              <span>Trades</span>
            </a>
          </div>

          <div className="space-y-1">
            <h3 className="px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Analytics</h3>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 transition-colors">
              <LineChart size={18} />
              <span>Overview</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 transition-colors">
              <Clock size={18} />
              <span>Time Analysis</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 transition-colors">
              <Zap size={18} />
              <span>Setup Performance</span>
            </a>
          </div>

          <div className="space-y-1">
            <h3 className="px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Connections</h3>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 transition-colors">
              <ExternalLink size={18} />
              <span>Broker Connections</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 transition-colors">
              <RefreshCw size={18} />
              <span>Sync Status</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-[#ff4500]/10 text-[#ff4500] rounded-md transition-colors font-medium">
              <LayoutDashboard size={18} />
              <span>Portfolio</span>
            </a>
          </div>
        </nav>

        <div className="p-4 border-t border-zinc-800">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 transition-colors">
            <Settings size={18} />
            <span>Settings</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 border-b border-zinc-800 flex items-center justify-between px-8 shrink-0">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-zinc-500">Connections</span>
            <ChevronRight size={14} className="text-zinc-600" />
            <span className="text-zinc-100 font-medium">Portfolio</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
              <Input 
                className="bg-zinc-900 border-zinc-800 pl-10 h-9 text-sm focus-visible:ring-[#ff4500]" 
                placeholder="Search symbol..."
              />
            </div>
            <div className="relative">
              <Bell size={20} className="text-zinc-400 cursor-pointer hover:text-zinc-100 transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#ff4500] rounded-full border-2 border-[#09090b]"></div>
            </div>
            <Avatar className="h-8 w-8 border border-zinc-800">
              <AvatarFallback className="bg-zinc-800 text-xs">TR</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-8 space-y-8">
          {/* Stat Bar */}
          <div className="grid grid-cols-4 gap-6">
            <Card className="bg-[#121214] border-zinc-800">
              <CardContent className="p-6">
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Total Equity</p>
                <h3 className="text-2xl font-bold mt-2">$64,320.00</h3>
                <div className="flex items-center gap-1 text-[10px] text-zinc-500 mt-1 uppercase tracking-tighter">
                  Consolidated across 2 accounts
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#121214] border-zinc-800">
              <CardContent className="p-6">
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Today's P&L</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <h3 className="text-2xl font-bold text-green-500">+$2,140.40</h3>
                  <span className="text-xs text-green-500 font-medium">+3.4%</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-zinc-500 mt-1 uppercase tracking-tighter">
                  Real-time market value
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#121214] border-zinc-800">
              <CardContent className="p-6">
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Open Positions</p>
                <h3 className="text-2xl font-bold mt-2">3</h3>
                <div className="flex items-center gap-1 text-[10px] text-zinc-500 mt-1 uppercase tracking-tighter">
                  2 Long · 1 Future
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#121214] border-zinc-800">
              <CardContent className="p-6">
                <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">Buying Power</p>
                <h3 className="text-2xl font-bold mt-2">$38,120.00</h3>
                <div className="flex items-center gap-1 text-[10px] text-zinc-500 mt-1 uppercase tracking-tighter">
                  Combined leverage available
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Accounts Section */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Accounts</h2>
            <div className="flex gap-6 overflow-x-auto pb-2">
              <Card className="bg-[#121214] border-zinc-800 min-w-[320px]">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-zinc-100">Alpaca Live</h4>
                      <p className="text-xs text-zinc-500">P002...3941</p>
                    </div>
                    <Badge className="bg-green-500/10 text-green-500 border-0 text-[10px]">LIVE</Badge>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xl font-bold">$64,320</p>
                      <p className="text-xs text-green-500 font-medium">+3.4% MTD</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold">Stocks & Options</p>
                      <p className="text-xs text-zinc-400">2 open positions</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#121214] border-zinc-800 min-w-[320px]">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-zinc-100">Alpaca Paper</h4>
                      <p className="text-xs text-zinc-500">PAPER-001</p>
                    </div>
                    <Badge className="bg-zinc-800 text-zinc-400 border-0 text-[10px]">SIMULATED</Badge>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-xl font-bold">$98,450 <span className="text-[10px] text-zinc-600 font-normal ml-1">(sim)</span></p>
                      <p className="text-xs text-green-500 font-medium">+7.2% MTD</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold">Paper only</p>
                      <p className="text-xs text-zinc-400">1 open position</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#121214] border-zinc-800 border-dashed min-w-[320px] flex items-center justify-center">
                <CardContent className="p-6 text-center">
                  <p className="text-sm text-zinc-500 mb-3">Connect IBKR to see your positions</p>
                  <a href="#" className="text-[#ff4500] text-xs font-bold hover:underline flex items-center justify-center gap-1">
                    Connect Now <ChevronRight size={14} />
                  </a>
                </CardContent>
              </Card>
            </div>
          </section>

          <div className="grid grid-cols-3 gap-8">
            {/* Open Positions Table */}
            <section className="col-span-2 space-y-4">
              <h2 className="text-lg font-semibold">Open Positions</h2>
              <Card className="bg-[#121214] border-zinc-800">
                <Table>
                  <TableHeader>
                    <TableRow className="border-zinc-800 hover:bg-transparent">
                      <TableHead className="text-zinc-500 text-[10px] uppercase font-bold h-10">Symbol</TableHead>
                      <TableHead className="text-zinc-500 text-[10px] uppercase font-bold h-10">Account</TableHead>
                      <TableHead className="text-zinc-500 text-[10px] uppercase font-bold h-10">Type</TableHead>
                      <TableHead className="text-zinc-500 text-[10px] uppercase font-bold h-10 text-right">Qty</TableHead>
                      <TableHead className="text-zinc-500 text-[10px] uppercase font-bold h-10 text-right">Entry</TableHead>
                      <TableHead className="text-zinc-500 text-[10px] uppercase font-bold h-10 text-right">Current</TableHead>
                      <TableHead className="text-zinc-500 text-[10px] uppercase font-bold h-10 text-right">P&L</TableHead>
                      <TableHead className="text-zinc-500 text-[10px] uppercase font-bold h-10 text-right">% Chg</TableHead>
                      <TableHead className="text-zinc-500 text-[10px] uppercase font-bold h-10 text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-zinc-800 hover:bg-zinc-800/10">
                      <TableCell className="font-bold">NVDA</TableCell>
                      <TableCell className="text-zinc-400 text-xs">Alpaca Live</TableCell>
                      <TableCell className="text-zinc-500 text-xs">Stock Long</TableCell>
                      <TableCell className="text-right text-xs">20</TableCell>
                      <TableCell className="text-right text-xs">$875.20</TableCell>
                      <TableCell className="text-right text-xs">$891.50</TableCell>
                      <TableCell className="text-right text-green-500 text-xs">+$326</TableCell>
                      <TableCell className="text-right text-green-500 text-xs">+1.86%</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-7 text-xs text-red-500 hover:bg-red-500/10">Close</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-zinc-800 hover:bg-zinc-800/10">
                      <TableCell className="font-bold">SPY 450C</TableCell>
                      <TableCell className="text-zinc-400 text-xs">Alpaca Live</TableCell>
                      <TableCell className="text-zinc-500 text-xs">Option</TableCell>
                      <TableCell className="text-right text-xs">5</TableCell>
                      <TableCell className="text-right text-xs">$4.20</TableCell>
                      <TableCell className="text-right text-xs">$5.10</TableCell>
                      <TableCell className="text-right text-green-500 text-xs">+$450</TableCell>
                      <TableCell className="text-right text-green-500 text-xs">+21.4%</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-7 text-xs text-red-500 hover:bg-red-500/10">Close</Button>
                      </TableCell>
                    </TableRow>
                    <TableRow className="border-zinc-800 hover:bg-zinc-800/10">
                      <TableCell className="font-bold">NQ Dec</TableCell>
                      <TableCell className="text-zinc-400 text-xs">Alpaca Paper</TableCell>
                      <TableCell className="text-zinc-500 text-xs">Futures</TableCell>
                      <TableCell className="text-right text-xs">1</TableCell>
                      <TableCell className="text-right text-xs">$19,240</TableCell>
                      <TableCell className="text-right text-xs">$19,380</TableCell>
                      <TableCell className="text-right text-green-500 text-xs">+$700</TableCell>
                      <TableCell className="text-right text-green-500 text-xs">+0.73%</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-7 text-xs text-red-500 hover:bg-red-500/10">Close</Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Card>
            </section>

            {/* Allocation Section */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold">Allocation</h2>
              <Card className="bg-[#121214] border-zinc-800 h-[240px] flex flex-col justify-center">
                <CardContent>
                  <div className="h-6 w-full flex rounded-full overflow-hidden mb-8">
                    <div className="h-full bg-green-500" style={{ width: '60%' }}></div>
                    <div className="h-full bg-[#ff4500]" style={{ width: '25%' }}></div>
                    <div className="h-full bg-blue-500" style={{ width: '15%' }}></div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-zinc-400 font-medium">Stocks</span>
                      </div>
                      <span className="text-xs font-bold">60%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-[#ff4500] rounded-full"></div>
                        <span className="text-xs text-zinc-400 font-medium">Options</span>
                      </div>
                      <span className="text-xs font-bold">25%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 bg-blue-500 rounded-full"></div>
                        <span className="text-xs text-zinc-400 font-medium">Futures</span>
                      </div>
                      <span className="text-xs font-bold">15%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Performance by Account */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Performance by Account</h2>
            <div className="grid grid-cols-2 gap-8">
              <Card className="bg-[#121214] border-zinc-800">
                <CardHeader className="py-4 border-b border-zinc-800">
                  <CardTitle className="text-sm font-bold">Alpaca Live</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1 text-center">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Win Rate</p>
                      <p className="text-lg font-bold text-zinc-100">68%</p>
                    </div>
                    <div className="space-y-1 text-center border-x border-zinc-800 px-4">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Profit Factor</p>
                      <p className="text-lg font-bold text-zinc-100">2.31</p>
                    </div>
                    <div className="space-y-1 text-center">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Net P&L</p>
                      <p className="text-lg font-bold text-green-500">+$14,320</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#121214] border-zinc-800">
                <CardHeader className="py-4 border-b border-zinc-800">
                  <CardTitle className="text-sm font-bold">Alpaca Paper</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-1 text-center">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Win Rate</p>
                      <p className="text-lg font-bold text-zinc-100">74%</p>
                    </div>
                    <div className="space-y-1 text-center border-x border-zinc-800 px-4">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Profit Factor</p>
                      <p className="text-lg font-bold text-zinc-100">3.12</p>
                    </div>
                    <div className="space-y-1 text-center">
                      <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-tighter">Net P&L (Sim)</p>
                      <p className="text-lg font-bold text-green-500">+$28,450</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
