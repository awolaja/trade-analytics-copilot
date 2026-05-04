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
  Plus,
  Pencil,
  X,
  ChevronDown
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TagManagement() {
  const setupTags = [
    { name: "Breakout", count: 42, color: "bg-blue-500" },
    { name: "Momentum", count: 28, color: "bg-purple-500" },
    { name: "VWAP Reclaim", count: 15, color: "bg-cyan-500" },
    { name: "Scalp", count: 64, color: "bg-indigo-500" },
    { name: "Gap & Go", count: 12, color: "bg-sky-500" },
    { name: "Mean Reversion", count: 9, color: "bg-teal-500" },
    { name: "Trend Follow", count: 31, color: "bg-blue-600" },
  ];

  const strategyTags = [
    { name: "Bull Flag", count: 18, color: "bg-emerald-500" },
    { name: "Bear Flag", count: 7, color: "bg-rose-500" },
    { name: "Earnings Play", count: 12, color: "bg-amber-500" },
    { name: "Options Hedge", count: 5, color: "bg-violet-500" },
    { name: "News Catalyst", count: 21, color: "bg-orange-500" },
  ];

  const mistakeTags = [
    { name: "Held Too Long", count: 14, color: "bg-red-500" },
    { name: "Sized Too Big", count: 8, color: "bg-red-500" },
    { name: "Chased Entry", count: 19, color: "bg-red-500" },
    { name: "Revenge Trade", count: 3, color: "bg-red-500" },
    { name: "Early Exit", count: 22, color: "bg-red-500" },
    { name: "FOMO", count: 11, color: "bg-red-500" },
  ];

  const moodTags = [
    { name: "Anxious", emoji: "😤", count: 12 },
    { name: "Neutral", emoji: "😐", count: 45 },
    { name: "Confident", emoji: "🙂", count: 38 },
    { name: "In-Zone", emoji: "😎", count: 24 },
    { name: "FOMO", emoji: "🤯", count: 9 },
  ];

  const topTags = [
    { name: "Scalp", count: 64, percentage: 90 },
    { name: "Neutral", count: 45, percentage: 70 },
    { name: "Breakout", count: 42, percentage: 65 },
    { name: "Confident", count: 38, percentage: 58 },
    { name: "Trend Follow", count: 31, percentage: 48 },
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
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#ff4500]/10 text-[#ff4500] transition-colors">
            <Tags className="w-4 h-4" />
            <span className="text-sm font-medium">Tags</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
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
            <span className="text-zinc-100 font-medium">Tags</span>
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
          <div className="max-w-6xl mx-auto space-y-8">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <Tabs defaultValue="all" className="w-auto">
                    <TabsList className="bg-[#121214] border border-zinc-800 p-1 h-10">
                        <TabsTrigger value="all" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100 text-xs px-4">All</TabsTrigger>
                        <TabsTrigger value="setup" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100 text-xs px-4">Setup</TabsTrigger>
                        <TabsTrigger value="strategy" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100 text-xs px-4">Strategy</TabsTrigger>
                        <TabsTrigger value="mistake" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100 text-xs px-4">Mistake</TabsTrigger>
                        <TabsTrigger value="mood" className="data-[state=active]:bg-zinc-800 data-[state=active]:text-zinc-100 text-xs px-4">Mood</TabsTrigger>
                    </TabsList>
                </Tabs>
                <Button className="bg-[#ff4500] hover:bg-[#e63e00] text-white gap-2 font-medium">
                    <Plus className="w-4 h-4" />
                    New Tag
                </Button>
            </div>

            {/* Categories */}
            <div className="space-y-8">
                {/* Setup Tags */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Setup Tags</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {setupTags.map((tag) => (
                            <div key={tag.name} className="flex items-center justify-between p-2 rounded-lg bg-[#121214] border border-zinc-800 hover:border-zinc-700 transition-colors group">
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <div className={`w-1.5 h-1.5 rounded-full ${tag.color} shrink-0`}></div>
                                    <span className="text-sm font-medium truncate">{tag.name}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-[10px] text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">{tag.count}</span>
                                    <div className="flex items-center gap-1 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1 hover:text-zinc-100 text-zinc-600"><Pencil className="w-3 h-3" /></button>
                                        <button className="p-1 hover:text-red-500 text-zinc-600"><X className="w-3 h-3" /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Strategy Tags */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Strategy Tags</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {strategyTags.map((tag) => (
                            <div key={tag.name} className="flex items-center justify-between p-2 rounded-lg bg-[#121214] border border-zinc-800 hover:border-zinc-700 transition-colors group">
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <div className={`w-1.5 h-1.5 rounded-full ${tag.color} shrink-0`}></div>
                                    <span className="text-sm font-medium truncate">{tag.name}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-[10px] text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">{tag.count}</span>
                                    <div className="flex items-center gap-1 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1 hover:text-zinc-100 text-zinc-600"><Pencil className="w-3 h-3" /></button>
                                        <button className="p-1 hover:text-red-500 text-zinc-600"><X className="w-3 h-3" /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mistake Tags */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-red-500"></div>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Mistake Tags</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {mistakeTags.map((tag) => (
                            <div key={tag.name} className="flex items-center justify-between p-2 rounded-lg bg-[#121214] border border-red-500/10 hover:border-red-500/30 transition-colors group">
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <div className={`w-1.5 h-1.5 rounded-full ${tag.color} shrink-0`}></div>
                                    <span className="text-sm font-medium truncate text-red-400">{tag.name}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-[10px] text-red-500/50 bg-red-500/5 px-1.5 py-0.5 rounded border border-red-500/10">{tag.count}</span>
                                    <div className="flex items-center gap-1 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1 hover:text-zinc-100 text-zinc-600"><Pencil className="w-3 h-3" /></button>
                                        <button className="p-1 hover:text-red-500 text-zinc-600"><X className="w-3 h-3" /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mood Tags */}
                <section>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-zinc-500"></div>
                        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-400">Mood Tags</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {moodTags.map((tag) => (
                            <div key={tag.name} className="flex items-center justify-between p-2 rounded-lg bg-[#121214] border border-zinc-800 hover:border-zinc-700 transition-colors group">
                                <div className="flex items-center gap-2 overflow-hidden">
                                    <span className="text-base leading-none shrink-0">{tag.emoji}</span>
                                    <span className="text-sm font-medium truncate">{tag.name}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span className="text-[10px] text-zinc-500 bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800">{tag.count}</span>
                                    <div className="flex items-center gap-1 ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button className="p-1 hover:text-zinc-100 text-zinc-600"><Pencil className="w-3 h-3" /></button>
                                        <button className="p-1 hover:text-red-500 text-zinc-600"><X className="w-3 h-3" /></button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Tag Analytics */}
            <Card className="bg-[#121214] border-zinc-800">
                <CardHeader className="pb-4 border-b border-zinc-800/50">
                    <CardTitle className="text-base font-semibold">Tag Analytics</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                    <div className="space-y-4">
                        {topTags.map((tag, i) => (
                            <div key={tag.name} className="space-y-1.5">
                                <div className="flex justify-between text-xs mb-1">
                                    <span className="text-zinc-400 font-medium">{tag.name}</span>
                                    <span className="text-zinc-500">{tag.count} trades</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-900 rounded-full overflow-hidden">
                                    <div 
                                        className="h-full bg-green-500 transition-all duration-1000" 
                                        style={{ width: `${tag.percentage}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}
