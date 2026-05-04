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
  Image as ImageIcon,
  Upload,
  MoreHorizontal
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function TradeDetail() {
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
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#ff4500]/10 text-[#ff4500] transition-colors">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Trade Detail</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
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
            <span className="text-zinc-100 font-medium">Trade Detail</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64 hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <Input 
                placeholder="Search command..." 
                className="pl-9 bg-[#121214] border-zinc-800 focus-visible:ring-[#ff4500] h-9 text-sm"
              />
            </div>
            <div className="relative">
                <Bell className="w-5 h-5 text-zinc-400" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#ff4500] rounded-full"></span>
            </div>
            <Avatar className="w-8 h-8 border border-zinc-800">
              <AvatarFallback className="bg-zinc-800 text-xs">TR</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">
            
            {/* Left Panel - Trade Info (55%) */}
            <div className="lg:w-[55%] space-y-6">
              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h1 className="text-2xl font-bold">NVDA</h1>
                        <Badge className="bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/10 uppercase font-bold text-xs tracking-wider">LONG</Badge>
                      </div>
                      <p className="text-sm text-zinc-500">Oct 24, 2024 · 10:42 AM</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-green-500">+$652.00</p>
                      <p className="text-sm text-zinc-500">+2.1R</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                      <p className="text-xs text-zinc-500 mb-1 font-medium uppercase tracking-wider">Entry</p>
                      <p className="text-lg font-bold">$875.20</p>
                    </div>
                    <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                      <p className="text-xs text-zinc-500 mb-1 font-medium uppercase tracking-wider">Exit</p>
                      <p className="text-lg font-bold">$891.50</p>
                    </div>
                    <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                      <p className="text-xs text-zinc-500 mb-1 font-medium uppercase tracking-wider">Shares</p>
                      <p className="text-lg font-bold">40</p>
                    </div>
                    <div className="bg-zinc-900/50 p-3 rounded-lg border border-zinc-800">
                      <p className="text-xs text-zinc-500 mb-1 font-medium uppercase tracking-wider">Duration</p>
                      <p className="text-lg font-bold">1h 23m</p>
                    </div>
                  </div>

                  {/* SVG Chart Placeholder */}
                  <div className="mb-8">
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-4">Trade Execution</p>
                    <div className="relative h-24 bg-zinc-900/30 rounded-lg border border-zinc-800/50 flex items-center px-8">
                      {/* Timeline */}
                      <div className="absolute left-8 right-8 h-[1px] bg-zinc-800"></div>
                      
                      {/* Stop line */}
                      <div className="absolute left-8 right-1/2 h-0 border-t border-dashed border-red-500/50 -translate-y-8"></div>
                      <div className="absolute left-1/2 -translate-y-8 text-[10px] text-red-500/70 font-medium">STOP $868.00</div>

                      {/* Entry dot */}
                      <div className="absolute left-1/4 -translate-x-1/2 flex flex-col items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                        <span className="text-[10px] text-zinc-500 font-medium mt-1">ENTRY</span>
                      </div>

                      {/* Exit dot */}
                      <div className="absolute right-1/4 translate-x-1/2 flex flex-col items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-[#ff4500] shadow-[0_0_8px_rgba(255,69,0,0.5)]"></div>
                        <span className="text-[10px] text-zinc-500 font-medium mt-1">EXIT</span>
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                        <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Tags</p>
                        <Button variant="ghost" size="sm" className="h-7 text-[#ff4500] hover:text-[#ff4500] hover:bg-[#ff4500]/10 text-xs gap-1">
                            <Plus className="w-3 h-3" />
                            Add Tag
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#ff4500]/10 text-[#ff4500] border-[#ff4500]/20 hover:bg-[#ff4500]/20 rounded-full px-3 py-1">Breakout</Badge>
                      <Badge className="bg-[#ff4500]/10 text-[#ff4500] border-[#ff4500]/20 hover:bg-[#ff4500]/20 rounded-full px-3 py-1">Morning Session</Badge>
                      <Badge className="bg-[#ff4500]/10 text-[#ff4500] border-[#ff4500]/20 hover:bg-[#ff4500]/20 rounded-full px-3 py-1">High Volume</Badge>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Screenshot</p>
                    <div className="w-full h-48 rounded-lg border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center bg-zinc-900/20 text-zinc-500">
                        <ImageIcon className="w-8 h-8 mb-2 opacity-20" />
                        <p className="text-sm mb-4">No screenshot attached</p>
                        <Button variant="outline" size="sm" className="border-zinc-800 bg-zinc-900 hover:bg-zinc-800 gap-2">
                            <Upload className="w-3.5 h-3.5" />
                            Upload Screenshot
                        </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Panel - Journal Panel (45%) */}
            <div className="lg:w-[45%]">
              <Card className="bg-[#121214] border-zinc-800 sticky top-[88px]">
                <CardHeader className="border-b border-zinc-800/50 py-4">
                  <CardTitle className="text-base font-semibold">Journal Entry</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Mood */}
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Mood</p>
                    <div className="flex gap-2">
                        <button className="flex-1 flex flex-col items-center gap-1.5 p-2 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors">
                            <span className="text-xl">😤</span>
                            <span className="text-[10px] text-zinc-500">Anxious</span>
                        </button>
                        <button className="flex-1 flex flex-col items-center gap-1.5 p-2 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors">
                            <span className="text-xl">😐</span>
                            <span className="text-[10px] text-zinc-500">Neutral</span>
                        </button>
                        <button className="flex-1 flex flex-col items-center gap-1.5 p-2 rounded-lg border-[#ff4500] bg-[#ff4500]/10 transition-colors">
                            <span className="text-xl">🙂</span>
                            <span className="text-[10px] text-[#ff4500] font-medium">Confident</span>
                        </button>
                        <button className="flex-1 flex flex-col items-center gap-1.5 p-2 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors">
                            <span className="text-xl">😎</span>
                            <span className="text-[10px] text-zinc-500">In-the-zone</span>
                        </button>
                        <button className="flex-1 flex flex-col items-center gap-1.5 p-2 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition-colors">
                            <span className="text-xl">🤯</span>
                            <span className="text-[10px] text-zinc-500">FOMO</span>
                        </button>
                    </div>
                  </div>

                  {/* Pre-trade thesis */}
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Pre-trade Thesis</p>
                    <Textarea 
                      placeholder="Pre-trade thesis..." 
                      className="bg-zinc-900/50 border-zinc-800 focus-visible:ring-[#ff4500] resize-none h-32"
                    />
                  </div>

                  {/* Post-trade review */}
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Post-Trade Review</p>
                    <Textarea 
                      placeholder="What went well / what I'd do differently..." 
                      className="bg-zinc-900/50 border-zinc-800 focus-visible:ring-[#ff4500] resize-none h-28"
                    />
                  </div>

                  {/* Mistakes */}
                  <div>
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Mistakes</p>
                    <div className="flex flex-wrap gap-2">
                      <button className="px-3 py-1 rounded-full border border-zinc-800 text-xs text-zinc-400 hover:border-[#ff4500]/50 hover:text-[#ff4500] transition-colors">Held too long</button>
                      <button className="px-3 py-1 rounded-full border border-zinc-800 text-xs text-zinc-400 hover:border-[#ff4500]/50 hover:text-[#ff4500] transition-colors">Sized too big</button>
                      <button className="px-3 py-1 rounded-full border border-[#ff4500] text-[#ff4500] bg-[#ff4500]/5 text-xs font-medium">Chased entry</button>
                      <button className="px-3 py-1 rounded-full border border-zinc-800 text-xs text-zinc-400 hover:border-[#ff4500]/50 hover:text-[#ff4500] transition-colors">Revenge trade</button>
                    </div>
                  </div>

                  <Button className="w-full bg-[#ff4500] hover:bg-[#e63e00] text-white font-semibold h-11 mt-4">
                    Save Journal Entry
                  </Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
