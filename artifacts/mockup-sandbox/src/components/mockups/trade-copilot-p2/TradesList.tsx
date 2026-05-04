import React, { useState } from "react";
import { 
  Search,
  Settings,
  LayoutDashboard,
  LineChart,
  List,
  LogOut,
  Bell,
  Filter,
  RefreshCw,
  Eye,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Link = ({ href, className, children }: { href: string, className?: string, children: React.ReactNode }) => <a href={href} className={className}>{children}</a>;
const AppShell = ({ children, activeNav }: { children: React.ReactNode, activeNav: string }) => {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col md:flex-row font-sans selection:bg-[#ff4500]/30">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-[#27272a] bg-[#09090b] flex flex-col hidden md:flex">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#ff4500] flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(255,69,0,0.4)]">
            TC
          </div>
          <span className="font-semibold text-lg tracking-tight">Trade Copilot</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link href="/dashboard" className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${activeNav === 'dashboard' ? 'bg-[#ff4500]/10 text-[#ff4500]' : 'text-zinc-400 hover:text-zinc-100 hover:bg-[#27272a]/50'}`}>
            <LayoutDashboard className="w-4 h-4" /> Dashboard
          </Link>
          <Link href="/trades" className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${activeNav === 'trades' ? 'bg-[#ff4500]/10 text-[#ff4500]' : 'text-zinc-400 hover:text-zinc-100 hover:bg-[#27272a]/50'}`}>
            <List className="w-4 h-4" /> Trades
          </Link>
          <Link href="/analytics" className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${activeNav === 'analytics' ? 'bg-[#ff4500]/10 text-[#ff4500]' : 'text-zinc-400 hover:text-zinc-100 hover:bg-[#27272a]/50'}`}>
            <LineChart className="w-4 h-4" /> Analytics
          </Link>
          <Link href="/settings" className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${activeNav === 'settings' ? 'bg-[#ff4500]/10 text-[#ff4500]' : 'text-zinc-400 hover:text-zinc-100 hover:bg-[#27272a]/50'}`}>
            <Settings className="w-4 h-4" /> Settings
          </Link>
        </nav>
        
        <div className="p-4 border-t border-[#27272a]">
          <div className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400">
            <Avatar className="w-8 h-8 border border-[#27272a]">
              <AvatarFallback className="bg-[#121214] text-zinc-300">AT</AvatarFallback>
            </Avatar>
            <div className="flex-1 truncate">
              <div className="font-medium text-zinc-200 truncate">Alex Trader</div>
              <div className="text-xs text-zinc-500 truncate">Pro Plan</div>
            </div>
            <LogOut className="w-4 h-4 hover:text-zinc-100 cursor-pointer transition-colors" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar */}
        <header className="h-16 border-b border-[#27272a] flex items-center justify-between px-6 bg-[#09090b]/80 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-4 text-sm text-zinc-400">
            <span className="font-medium text-zinc-200">{activeNav.charAt(0).toUpperCase() + activeNav.slice(1)}</span>
            <span className="text-[#27272a]">/</span>
            <span>Ledger</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-zinc-400 hover:text-zinc-100 transition-colors">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6 md:p-8 flex flex-col">
          <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export function TradesList() {
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 1500);
  };

  const trades = [
    { id: "T1042", sym: "NVDA", side: "Long", qty: 50, entry: 118.50, exit: 124.20, pnl: 285.00, hold: "2h 15m", time: "Today, 10:15 AM", type: "Eq" },
    { id: "T1041", sym: "AAPL", side: "Short", qty: 100, entry: 172.40, exit: 171.10, pnl: 130.00, hold: "45m", time: "Today, 09:45 AM", type: "Eq" },
    { id: "T1040", sym: "TSLA", side: "Long", qty: 200, entry: 180.20, exit: 178.50, pnl: -340.00, hold: "1h 10m", time: "Yesterday, 14:20 PM", type: "Eq" },
    { id: "T1039", sym: "AAPL 190C", side: "Long", qty: 5, entry: 2.45, exit: 3.10, pnl: 325.00, hold: "1d", time: "Yesterday, 13:00 PM", type: "Opt" },
    { id: "T1038", sym: "SPY", side: "Short", qty: 50, entry: 512.10, exit: 510.50, pnl: 80.00, hold: "3h", time: "Oct 24, 11:30 AM", type: "Eq" },
    { id: "T1037", sym: "META", side: "Long", qty: 40, entry: 485.60, exit: 492.10, pnl: 260.00, hold: "4h", time: "Oct 24, 09:35 AM", type: "Eq" },
    { id: "T1036", sym: "MSFT", side: "Long", qty: 60, entry: 410.20, exit: 408.50, pnl: -102.00, hold: "30m", time: "Oct 23, 15:10 PM", type: "Eq" },
    { id: "T1035", sym: "NQ", side: "Long", qty: 2, entry: 18240.50, exit: 18285.00, pnl: 1780.00, hold: "2h", time: "Oct 23, 10:05 AM", type: "Fut" },
    { id: "T1034", sym: "AMZN", side: "Long", qty: 150, entry: 185.30, exit: 187.90, pnl: 390.00, hold: "1d 2h", time: "Oct 22, 14:45 PM", type: "Eq" },
    { id: "T1033", sym: "TSLA 180P", side: "Long", qty: 10, entry: 4.20, exit: 3.80, pnl: -400.00, hold: "2d", time: "Oct 21, 09:30 AM", type: "Opt" },
    { id: "T1032", sym: "NVDA", side: "Short", qty: 100, entry: 122.10, exit: 119.50, pnl: 260.00, hold: "4h", time: "Oct 20, 11:15 AM", type: "Eq" },
    { id: "T1031", sym: "AAPL", side: "Long", qty: 200, entry: 168.50, exit: 170.20, pnl: 340.00, hold: "3d", time: "Oct 19, 10:00 AM", type: "Eq" },
    { id: "T1030", sym: "SPY", side: "Long", qty: 100, entry: 508.40, exit: 511.20, pnl: 280.00, hold: "1d", time: "Oct 18, 15:45 PM", type: "Eq" },
    { id: "T1029", sym: "META", side: "Short", qty: 30, entry: 495.20, exit: 502.10, pnl: -207.00, hold: "2h", time: "Oct 18, 09:30 AM", type: "Eq" }
  ];

  return (
    <AppShell activeNav="trades">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Trade Ledger</h1>
            <Badge variant="outline" className="bg-yellow-400/10 text-yellow-500 border-yellow-400/20 font-bold tracking-wider text-[10px] px-2 py-0.5 rounded uppercase">
              Alpaca
            </Badge>
          </div>
          <p className="text-zinc-400 text-sm">183 trades &middot; synced from connected accounts</p>
        </div>
        
        <Button 
          className="bg-[#ff4500] hover:bg-[#ff4500]/90 text-white shadow-lg shadow-[#ff4500]/20"
          onClick={handleSync}
          disabled={isSyncing}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isSyncing ? 'animate-spin' : ''}`} />
          {isSyncing ? 'Syncing...' : 'Sync Now'}
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-[#121214] border border-[#27272a] rounded-t-lg p-3 flex flex-col md:flex-row items-center gap-3">
        <div className="relative flex-1 min-w-[200px] w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <Input 
            placeholder="Search symbol..." 
            className="bg-[#09090b] border-[#27272a] pl-9 h-9 text-sm focus-visible:ring-[#ff4500]/50 text-zinc-200 w-full"
          />
        </div>
        
        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          <Select defaultValue="all">
            <SelectTrigger className="h-9 w-[110px] bg-[#09090b] border-[#27272a] text-zinc-300 focus:ring-[#ff4500]/50 shrink-0">
              <SelectValue placeholder="Side" />
            </SelectTrigger>
            <SelectContent className="bg-[#121214] border-[#27272a] text-zinc-200">
              <SelectItem value="all">All Sides</SelectItem>
              <SelectItem value="long">Long</SelectItem>
              <SelectItem value="short">Short</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger className="h-9 w-[130px] bg-[#09090b] border-[#27272a] text-zinc-300 focus:ring-[#ff4500]/50 shrink-0">
              <SelectValue placeholder="Asset" />
            </SelectTrigger>
            <SelectContent className="bg-[#121214] border-[#27272a] text-zinc-200">
              <SelectItem value="all">All Assets</SelectItem>
              <SelectItem value="eq">Equities</SelectItem>
              <SelectItem value="opt">Options</SelectItem>
              <SelectItem value="fut">Futures</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="30d">
            <SelectTrigger className="h-9 w-[140px] bg-[#09090b] border-[#27272a] text-zinc-300 focus:ring-[#ff4500]/50 shrink-0">
              <SelectValue placeholder="Date" />
            </SelectTrigger>
            <SelectContent className="bg-[#121214] border-[#27272a] text-zinc-200">
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="ytd">YTD</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" size="icon" className="h-9 w-9 shrink-0 bg-[#09090b] border-[#27272a] text-zinc-400 hover:text-white">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#121214] border-x border-b border-[#27272a] flex-1 min-h-0 overflow-auto">
        <Table>
          <TableHeader className="bg-[#121214] sticky top-0 z-10 shadow-[0_1px_0_#27272a]">
            <TableRow className="border-[#27272a] hover:bg-transparent">
              <TableHead className="text-zinc-500 font-medium whitespace-nowrap">Symbol</TableHead>
              <TableHead className="text-zinc-500 font-medium">Side</TableHead>
              <TableHead className="text-zinc-500 font-medium text-right">Qty</TableHead>
              <TableHead className="text-zinc-500 font-medium text-right">Entry</TableHead>
              <TableHead className="text-zinc-500 font-medium text-right">Exit</TableHead>
              <TableHead className="text-zinc-500 font-medium text-right">Net P&amp;L</TableHead>
              <TableHead className="text-zinc-500 font-medium">Time in Trade</TableHead>
              <TableHead className="text-zinc-500 font-medium">Entry Date</TableHead>
              <TableHead className="text-zinc-500 font-medium">Source</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trades.map((t) => (
              <TableRow key={t.id} className="border-[#27272a]/50 hover:bg-[#27272a]/30 transition-colors group">
                <TableCell className="font-mono font-bold text-zinc-200 whitespace-nowrap">
                  {t.sym}
                  {t.type === "Opt" && <span className="ml-2 text-[10px] font-sans font-normal text-zinc-500 bg-[#27272a] px-1.5 py-0.5 rounded">OPT</span>}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`font-medium ${t.side === 'Long' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}>
                    {t.side}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono text-zinc-300">{t.qty}</TableCell>
                <TableCell className="text-right font-mono text-zinc-300">${t.entry.toFixed(2)}</TableCell>
                <TableCell className="text-right font-mono text-zinc-300">${t.exit.toFixed(2)}</TableCell>
                <TableCell className={`text-right font-mono font-medium ${t.pnl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                  {t.pnl >= 0 ? '+' : ''}${t.pnl.toFixed(2)}
                </TableCell>
                <TableCell className="text-zinc-400 text-sm">{t.hold}</TableCell>
                <TableCell className="text-zinc-400 text-sm whitespace-nowrap">{t.time}</TableCell>
                <TableCell>
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-wider bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">
                    Alpaca
                  </span>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 hover:text-white hover:bg-[#27272a]">
                    <Eye className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Footer / Pagination */}
      <div className="bg-[#09090b] border border-[#27272a] border-t-0 rounded-b-lg p-3 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div className="text-zinc-400 flex items-center gap-2">
          <span>Showing <span className="text-zinc-200 font-medium">14</span> of <span className="text-zinc-200 font-medium">183</span> trades</span>
          <span className="text-[#27272a]">|</span>
          <span>Net P&amp;L this page: <span className="text-emerald-400 font-mono font-medium">+$1,243.50</span></span>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-zinc-500">Page 1 of 15</span>
          <div className="flex items-center gap-1">
            <Button variant="outline" size="icon" className="h-8 w-8 bg-[#121214] border-[#27272a] text-zinc-400" disabled>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 bg-[#121214] border-[#27272a] text-zinc-300 hover:bg-[#27272a] hover:text-white">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
