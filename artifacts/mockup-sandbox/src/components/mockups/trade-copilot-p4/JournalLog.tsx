import React from "react";
import { 
  Bell, 
  ChevronRight, 
  LayoutDashboard, 
  LineChart, 
  Search, 
  Settings, 
  Target, 
  TrendingUp, 
  Wallet,
  Calendar,
  BookOpen,
  Tags,
  Filter,
  ChevronDown,
  Eye
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function JournalLog() {
  const entries = [
    {
      date: "Oct 24, 2024",
      time: "10:42 AM",
      symbol: "NVDA",
      side: "LONG",
      pnl: 652.00,
      tags: ["Breakout", "High Volume"],
      note: "Caught the morning push above $875 level. Held through initial pullback nicely.",
      mood: "🙂",
      type: "positive"
    },
    {
      date: "Oct 23, 2024",
      time: "02:15 PM",
      symbol: "TSLA",
      side: "SHORT",
      pnl: -240.00,
      tags: ["Mean Reversion", "Mistake"],
      note: "Tried to short the top but it kept squeezing. Should have respected the trend.",
      mood: "😤",
      type: "negative"
    },
    {
      date: "Oct 23, 2024",
      time: "09:45 AM",
      symbol: "AAPL",
      side: "LONG",
      pnl: 310.00,
      tags: ["Gap & Go"],
      note: "Perfect gap fill play. Exit target hit on first resistance level.",
      mood: "😎",
      type: "positive"
    },
    {
      date: "Oct 22, 2024",
      time: "11:30 AM",
      symbol: "AMD",
      side: "LONG",
      pnl: 185.00,
      tags: ["Bull Flag"],
      note: "Solid consolidation pattern. Sized small but clear price action.",
      mood: "🙂",
      type: "positive"
    },
    {
      date: "Oct 21, 2024",
      time: "10:10 AM",
      symbol: "MSFT",
      side: "SHORT",
      pnl: 420.00,
      tags: ["Breakdown", "VWAP"],
      note: "Failed to hold VWAP after open. Clean flush to daily support.",
      mood: "😎",
      type: "positive"
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 bg-[#121214] flex flex-col hidden md:flex shrink-0">
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
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Setup Performance</span>
          </a>

          <div className="pt-4 pb-2 px-3">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Journal</p>
          </div>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Trade Detail</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <Tags className="w-4 h-4" />
            <span className="text-sm font-medium">Tags</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#ff4500]/10 text-[#ff4500] transition-colors">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Journal Log</span>
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
            <span>Journal</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-zinc-100 font-medium">Journal Log</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64 hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <Input 
                placeholder="Search journal..." 
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
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="outline" className="bg-[#121214] border-zinc-800 text-zinc-400 text-xs justify-between w-full sm:w-48 font-normal">
                    <span className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5" />
                        Oct 1 – Oct 31
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                </Button>
                <Button variant="outline" className="bg-[#121214] border-zinc-800 text-zinc-400 text-xs justify-between w-full sm:w-40 font-normal">
                    <span className="flex items-center gap-2">
                        <Filter className="w-3.5 h-3.5" />
                        All Tags
                    </span>
                    <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                </Button>
                <div className="relative flex-1">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                    <Input 
                        placeholder="Search entries..." 
                        className="pl-9 bg-[#121214] border-zinc-800 focus-visible:ring-[#ff4500] h-9 text-xs"
                    />
                </div>
            </div>

            {/* Entries List */}
            <div className="space-y-4">
                {entries.map((entry, i) => (
                    <div 
                        key={i} 
                        className={`group relative flex items-center gap-6 p-4 bg-[#121214] border border-zinc-800 rounded-xl hover:border-zinc-700 transition-all cursor-pointer overflow-hidden ${entry.type === 'positive' ? 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-green-500/50' : 'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-red-500/50'}`}
                    >
                        {/* Date/Time */}
                        <div className="w-24 shrink-0">
                            <p className="text-xs font-semibold text-zinc-100">{entry.date}</p>
                            <p className="text-[10px] text-zinc-500 mt-0.5">{entry.time}</p>
                        </div>

                        {/* Symbol/Side */}
                        <div className="w-24 shrink-0">
                            <p className="text-sm font-bold tracking-tight">{entry.symbol}</p>
                            <Badge className={`mt-1 text-[9px] h-4 leading-none uppercase font-bold px-1.5 ${entry.side === 'LONG' ? 'bg-green-500/10 text-green-500 border-green-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}>
                                {entry.side}
                            </Badge>
                        </div>

                        {/* P&L */}
                        <div className="w-20 shrink-0">
                            <p className={`text-sm font-bold ${entry.type === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                                {entry.pnl > 0 ? '+' : ''}${Math.abs(entry.pnl).toFixed(2)}
                            </p>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0 pr-4">
                            <div className="flex flex-wrap gap-1.5 mb-1.5">
                                {entry.tags.map(tag => (
                                    <span key={tag} className="text-[9px] px-1.5 py-0.5 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700">{tag}</span>
                                ))}
                            </div>
                            <p className="text-xs text-zinc-400 line-clamp-1 italic">"{entry.note}"</p>
                        </div>

                        {/* Mood & Action */}
                        <div className="flex items-center gap-6 shrink-0">
                            <span className="text-xl" title={entry.mood}>{entry.mood}</span>
                            <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-zinc-500 hover:text-zinc-100 hover:bg-zinc-800">
                                <Eye className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stat Bar */}
            <div className="p-4 rounded-xl bg-zinc-900/30 border border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-6 text-xs text-zinc-400">
                    <span className="flex items-center gap-2"><span className="text-zinc-100 font-semibold">23</span> entries this month</span>
                    <span className="flex items-center gap-2"><span className="text-green-500 font-semibold">71%</span> positive</span>
                    <span className="flex items-center gap-2">Most-tagged: <span className="text-[#ff4500] font-semibold">Breakout</span></span>
                </div>
                <Button size="sm" className="bg-transparent hover:bg-zinc-800 text-[#ff4500] border border-[#ff4500]/20 text-xs h-8">
                    View Monthly Summary
                </Button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
