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
  Trash2,
  Info,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";

export function MultiBroker() {
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
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-[#ff4500]/10 text-[#ff4500] rounded-md transition-colors font-medium">
              <ExternalLink size={18} />
              <span>Broker Connections</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 transition-colors">
              <RefreshCw size={18} />
              <span>Sync Status</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 text-zinc-400 hover:text-zinc-100 transition-colors">
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
            <span className="text-zinc-100 font-medium">Broker Connections</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
              <Input 
                className="bg-zinc-900 border-zinc-800 pl-10 h-9 text-sm focus-visible:ring-[#ff4500]" 
                placeholder="Search..."
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
        <div className="flex-1 overflow-auto p-8 space-y-12">
          {/* Connected Section */}
          <section className="space-y-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              Connected
              <Badge variant="outline" className="text-[10px] font-normal border-zinc-800 text-zinc-500">1 Total</Badge>
            </h2>
            
            <Card className="bg-[#121214] border-zinc-800 max-w-2xl">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2">
                      <span className="text-black font-black text-xl italic tracking-tighter">A</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-lg">Alpaca</h3>
                        <Badge className="bg-green-500/10 text-green-500 hover:bg-green-500/10 border-0 text-[10px] h-5">LIVE TRADING</Badge>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-green-500 text-xs">●</span>
                        <span className="text-zinc-400 text-xs font-medium">Connected</span>
                        <span className="text-zinc-600 text-xs">·</span>
                        <span className="text-zinc-500 text-xs italic">Last sync: 2 min ago</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-500 mr-1">Paper / Live</span>
                    <Switch className="data-[state=checked]:bg-green-600" checked />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 mt-8 pb-6 border-b border-zinc-800/50">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Account ID</p>
                    <p className="text-sm font-mono mt-1">P002...3941</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-bold">Consolidated Data</p>
                    <p className="text-sm mt-1">847 trades synced <span className="text-zinc-600 ml-1">· Since Jan 2024</span></p>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    <span className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-green-500" /> Encrypted Credentials</span>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" className="border-[#ff4500] text-[#ff4500] hover:bg-[#ff4500]/10 hover:text-[#ff4500] h-9">
                      <RefreshCw size={14} className="mr-2" /> Sync Now
                    </Button>
                    <Button variant="ghost" className="text-red-500 hover:text-red-400 hover:bg-red-500/10 h-9">
                      <Trash2 size={14} className="mr-2" /> Disconnect
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Available Brokers Section */}
          <section className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold">Available Brokers</h2>
              <p className="text-zinc-400 text-sm mt-1">Connect additional brokers to consolidate your trading data.</p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {/* IBKR */}
              <Card className="bg-[#121214] border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 bg-zinc-800 rounded-md flex items-center justify-center font-bold text-zinc-400">IB</div>
                    <Badge variant="secondary" className="bg-[#ff4500]/10 text-[#ff4500] hover:bg-[#ff4500]/10 border-0 text-[10px]">MOST POPULAR</Badge>
                  </div>
                  <CardTitle className="text-base mt-4 font-bold">IBKR (Interactive Brokers)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-xs leading-relaxed h-12">
                    Sync trades from IBKR TWS or Client Portal. Supports stocks, options, futures, forex.
                  </p>
                  <Button className="w-full mt-6 bg-[#ff4500] hover:bg-[#ff4500]/90 text-white border-0">
                    Connect
                  </Button>
                </CardContent>
              </Card>

              {/* TDA */}
              <Card className="bg-[#121214] border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 bg-zinc-800 rounded-md flex items-center justify-center font-bold text-zinc-400">TD</div>
                    <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/10 border-0 text-[10px]">ACQUIRING</Badge>
                  </div>
                  <CardTitle className="text-base mt-4 font-bold">TD Ameritrade / Schwab</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-xs leading-relaxed h-12">
                    Previously TD Ameritrade, now Schwab. Import your trade history from thinkorswim.
                  </p>
                  <Button className="w-full mt-6 bg-[#ff4500] hover:bg-[#ff4500]/90 text-white border-0">
                    Connect
                  </Button>
                </CardContent>
              </Card>

              {/* Tradovate */}
              <Card className="bg-[#121214] border-zinc-800 hover:border-zinc-700 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 bg-zinc-800 rounded-md flex items-center justify-center font-bold text-zinc-400">TV</div>
                    <Badge variant="secondary" className="bg-blue-500/10 text-blue-500 hover:bg-blue-500/10 border-0 text-[10px]">FUTURES</Badge>
                  </div>
                  <CardTitle className="text-base mt-4 font-bold">Tradovate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400 text-xs leading-relaxed h-12">
                    Purpose-built futures platform. Sync NQ, ES, CL and other CME futures.
                  </p>
                  <Button className="w-full mt-6 bg-[#ff4500] hover:bg-[#ff4500]/90 text-white border-0">
                    Connect
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Coming Soon Section */}
          <section className="space-y-6">
            <h2 className="text-lg font-semibold">Coming Soon</h2>
            <div className="grid grid-cols-3 gap-6">
              {["TradeStation", "Webull", "Tastytrade"].map((broker) => (
                <Card key={broker} className="bg-[#121214] border-zinc-800 opacity-70">
                  <CardContent className="p-4 flex items-center justify-between">
                    <span className="font-medium text-sm text-zinc-300">{broker}</span>
                    <Button variant="outline" size="sm" className="h-7 text-[10px] border-zinc-800 text-zinc-400 hover:bg-zinc-800">
                      Notify Me
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
