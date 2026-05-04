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
  Clock,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Info,
  X,
  History,
  Plus
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function CoachingAlerts() {
  const alerts = [
    {
      id: 1,
      severity: "critical",
      title: "Stop Loss Violated",
      description: "You held TSLA 4.2R beyond your defined stop. Max loss rule: 2R.",
      reference: "TSLA · Oct 24 · -$320",
      timestamp: "2 hours ago",
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      borderColor: "border-l-red-500"
    },
    {
      id: 2,
      severity: "critical",
      title: "Daily Loss Limit Approaching",
      description: "Down -$480 today. Your limit is -$500. Consider stopping.",
      reference: "Today",
      timestamp: "15 mins ago",
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      borderColor: "border-l-red-500"
    },
    {
      id: 3,
      severity: "warning",
      title: "Overtrading Detected",
      description: "14 trades before noon. Your avg best days have 6-8 trades.",
      reference: "Today",
      timestamp: "1 hour ago",
      icon: <AlertTriangle className="w-5 h-5 text-orange-500" />,
      borderColor: "border-l-orange-500"
    },
    {
      id: 4,
      severity: "warning",
      title: "Low Win-Rate Streak",
      description: "5 consecutive losses on Earnings Plays. Pause this setup.",
      reference: "Last 7 days",
      timestamp: "Yesterday",
      icon: <AlertTriangle className="w-5 h-5 text-orange-500" />,
      borderColor: "border-l-orange-500"
    },
    {
      id: 5,
      severity: "info",
      title: "Best Hour Approaching",
      description: "10AM–11AM is your strongest window. 3 setups on watchlist.",
      reference: "Upcoming",
      timestamp: "Just now",
      icon: <Info className="w-5 h-5 text-blue-500" />,
      borderColor: "border-l-blue-500"
    },
    {
      id: 6,
      severity: "info",
      title: "New Pattern Identified",
      description: "VWAP reclaims on high-volume days: 80% win rate (10 trades).",
      reference: "This week",
      timestamp: "Oct 22",
      icon: <Info className="w-5 h-5 text-blue-500" />,
      borderColor: "border-l-blue-500"
    }
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
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Weekly Review</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#ff4500]/10 text-[#ff4500] transition-colors">
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
            <span className="text-zinc-100 font-medium">Coaching Alerts</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-64 hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <Input 
                placeholder="Search alerts..." 
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
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-zinc-100">Coaching Feed</h1>
                <Badge className="bg-red-500 text-white border-none rounded-full px-2 py-0.5 text-[10px]">12 ACTIVE</Badge>
              </div>
              
              <div className="flex items-center bg-[#121214] border border-zinc-800 rounded-lg p-1">
                {["All", "Critical", "Warning", "Info", "Dismissed"].map((tab, i) => (
                  <button 
                    key={tab} 
                    className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors ${i === 0 ? 'bg-zinc-800 text-zinc-100' : 'text-zinc-400 hover:text-zinc-200'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Alert Feed */}
            <div className="space-y-4">
              {alerts.map((alert) => (
                <Card key={alert.id} className={`bg-[#121214] border-zinc-800 border-l-4 ${alert.borderColor} transition-all hover:bg-zinc-800/30`}>
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex gap-4">
                        <div className="mt-1">{alert.icon}</div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-zinc-100">{alert.title}</h3>
                            <span className="text-[10px] text-zinc-500 flex items-center gap-1 uppercase tracking-wider">
                              <History className="w-3 h-3" /> {alert.timestamp}
                            </span>
                          </div>
                          <p className="text-sm text-zinc-400 leading-relaxed max-w-xl">{alert.description}</p>
                          <div className="flex items-center gap-2 pt-2">
                            <Badge variant="outline" className="text-[10px] border-zinc-700 text-zinc-400 font-mono">
                              {alert.reference}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 shrink-0">
                        <Button variant="outline" size="sm" className="h-8 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100">
                          Review Trade
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800">
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Add Rule Card */}
            <Card className="bg-[#121214] border-dashed border-zinc-800">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-zinc-300 flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Custom Coaching Rule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Rule Type</label>
                    <select className="w-full bg-[#09090b] border border-zinc-800 rounded-md h-9 px-3 text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-[#ff4500]">
                      <option>Max Loss Per Trade</option>
                      <option>Daily Drawdown Limit</option>
                      <option>Consecutive Loss Limit</option>
                      <option>Overtrading Threshold</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Threshold</label>
                    <Input placeholder="e.g. 2R or $500" className="bg-[#09090b] border-zinc-800 h-9 text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Action</label>
                    <select className="w-full bg-[#09090b] border border-zinc-800 rounded-md h-9 px-3 text-sm text-zinc-300 focus:outline-none focus:ring-1 focus:ring-[#ff4500]">
                      <option>Critical Alert</option>
                      <option>Warning Nudge</option>
                      <option>Auto-Journal Tag</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <Button className="bg-[#ff4500] hover:bg-[#ff4500]/90 text-white text-xs font-bold px-6">
                    + Create Rule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
