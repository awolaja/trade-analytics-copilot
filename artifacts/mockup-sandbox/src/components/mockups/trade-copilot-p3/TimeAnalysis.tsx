import React from "react";
import { 
  Bell, 
  Calendar, 
  ChevronRight, 
  Info, 
  LayoutDashboard, 
  LineChart, 
  Search, 
  Settings, 
  Target, 
  TrendingUp, 
  Wallet 
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function TimeAnalysis() {
  const hourlyData = [
    { label: '9AM', val: 3240, max: 4120, count: 42 },
    { label: '10AM', val: 4120, max: 4120, count: 58 },
    { label: '11AM', val: 2180, max: 4120, count: 34 },
    { label: '12PM', val: -640, max: 4120, count: 18 },
    { label: '1PM', val: 890, max: 4120, count: 22 },
    { label: '2PM', val: 1340, max: 4120, count: 28 },
    { label: '3PM', val: 2970, max: 4120, count: 45 },
    { label: '4PM', val: 230, max: 4120, count: 12 },
  ];

  const dailyData = [
    { label: 'Mon', val: 2140, max: 3870, count: 34 },
    { label: 'Tue', val: 3870, max: 3870, count: 42 },
    { label: 'Wed', val: 1240, max: 3870, count: 31 },
    { label: 'Thu', val: -380, max: 3870, count: 28 },
    { label: 'Fri', val: 2180, max: 3870, count: 39 },
  ];

  // Calendar Heatmap generation
  const daysInMonth = 31; // e.g. October
  const startDayOffset = 2; // Starts on a Tuesday (0=Sun)
  
  // Dummy generation for calendar
  const getIntensityClass = (day: number) => {
    // Weekend logic
    const dayOfWeek = (day + startDayOffset - 1) % 7;
    if (dayOfWeek === 0 || dayOfWeek === 6) return "bg-zinc-900/30 text-zinc-600 border-zinc-800/30";
    
    // Some arbitrary data points
    if ([2, 9, 16, 23, 30].includes(day)) return "bg-green-500/20 text-green-400 border-green-500/30"; // Tuesdays (good)
    if ([4, 11, 18, 25].includes(day)) return "bg-red-500/20 text-red-400 border-red-500/30"; // Thursdays (bad)
    if ([1, 15, 29].includes(day)) return "bg-green-500/40 text-green-300 border-green-500/50 font-bold"; // Deep green
    if ([11].includes(day)) return "bg-red-500/40 text-red-300 border-red-500/50 font-bold"; // Deep red
    if ([8, 22].includes(day)) return "bg-[#121214] text-zinc-500 border-zinc-800"; // No trades
    
    // Default light green
    return "bg-green-500/10 text-green-500 border-green-500/20";
  };
  
  const getAmountStr = (day: number) => {
    const dayOfWeek = (day + startDayOffset - 1) % 7;
    if (dayOfWeek === 0 || dayOfWeek === 6) return "";
    if ([8, 22].includes(day)) return "";
    
    if ([1, 15, 29].includes(day)) return "+$640";
    if ([11].includes(day)) return "-$420";
    if ([4, 18, 25].includes(day)) return "-$120";
    if ([2, 9, 16, 23, 30].includes(day)) return "+$280";
    
    return "+$110";
  };

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
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <LineChart className="w-4 h-4" />
            <span className="text-sm font-medium">Overview</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md bg-[#ff4500]/10 text-[#ff4500] transition-colors">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">Time Analysis</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
            <Target className="w-4 h-4" />
            <span className="text-sm font-medium">Setup Performance</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Topbar */}
        <header className="h-16 border-b border-zinc-800 bg-[#09090b] flex items-center justify-between px-6 sticky top-0 z-10">
          <div className="flex items-center text-sm text-zinc-400">
            <span>Analytics</span>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-zinc-100 font-medium">Time Analysis</span>
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
          <div className="max-w-6xl mx-auto space-y-6">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Hourly Chart */}
              <Card className="bg-[#121214] border-zinc-800">
                <CardHeader className="pb-4 border-b border-zinc-800/50">
                  <CardTitle className="text-base font-semibold">P&L by Time of Day</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex h-48 items-end gap-2 mb-6">
                    {hourlyData.map((d, i) => {
                      const isPositive = d.val >= 0;
                      const absVal = Math.abs(d.val);
                      const heightPct = Math.max((absVal / d.max) * 100, 5); // min 5% height
                      
                      return (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 group relative">
                          {/* Tooltip on hover (simulated via group-hover) */}
                          <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-800 text-xs px-2 py-1 rounded whitespace-nowrap z-10 pointer-events-none border border-zinc-700">
                            {d.val > 0 ? '+' : ''}${Math.abs(d.val)}
                          </div>
                          
                          <div className="w-full flex justify-center h-full items-end">
                            <div 
                              className={`w-full max-w-[40px] rounded-t-sm transition-all duration-500 ${isPositive ? 'bg-green-500/80 hover:bg-green-400' : 'bg-red-500/80 hover:bg-red-400'}`}
                              style={{ height: `${heightPct}%` }}
                            ></div>
                          </div>
                          <div className="text-center">
                            <div className="text-xs font-medium text-zinc-400">{d.label}</div>
                            <div className="text-[10px] text-zinc-600">{d.count} tr</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <Alert className="bg-red-500/10 border-red-500/20 text-red-400">
                    <Info className="h-4 w-4 text-red-400" />
                    <AlertTitle className="text-sm font-medium">Insight</AlertTitle>
                    <AlertDescription className="text-xs text-red-400/80 mt-1">
                      Avoid trading 12PM–1PM — your weakest window (-$640 avg loss).
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Day of Week Chart */}
              <Card className="bg-[#121214] border-zinc-800">
                <CardHeader className="pb-4 border-b border-zinc-800/50">
                  <CardTitle className="text-base font-semibold">P&L by Day of Week</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4 mb-6">
                    {dailyData.map((d, i) => {
                      const isPositive = d.val >= 0;
                      const absVal = Math.abs(d.val);
                      const widthPct = Math.max((absVal / d.max) * 100, 5);
                      
                      return (
                        <div key={i} className="flex items-center gap-4 text-sm">
                          <div className="w-10 text-zinc-400 font-medium">{d.label}</div>
                          <div className="flex-1 h-6 bg-zinc-900 rounded-sm overflow-hidden flex items-center relative">
                            {/* The bar */}
                            <div 
                              className={`h-full ${isPositive ? 'bg-green-500/80' : 'bg-red-500/80'}`}
                              style={{ width: `${widthPct}%` }}
                            ></div>
                            {/* Value label */}
                            <div className={`absolute px-2 text-xs font-medium ${widthPct > 20 ? 'text-white mix-blend-difference' : (isPositive ? 'text-green-500' : 'text-red-500')} ${widthPct > 20 ? 'left-0' : `left-[${widthPct}%]`}`}>
                              {d.val > 0 ? '+' : ''}${Math.abs(d.val)}
                            </div>
                          </div>
                          <div className="w-12 text-right text-xs text-zinc-500">{d.count} tr</div>
                        </div>
                      );
                    })}
                  </div>
                  
                  <Alert className="bg-red-500/10 border-red-500/20 text-red-400">
                    <Info className="h-4 w-4 text-red-400" />
                    <AlertTitle className="text-sm font-medium">Insight</AlertTitle>
                    <AlertDescription className="text-xs text-red-400/80 mt-1">
                      Thursday is your worst day — 3× higher loss rate than your average.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>

            {/* Calendar Heatmap */}
            <Card className="bg-[#121214] border-zinc-800">
              <CardHeader className="pb-4 border-b border-zinc-800/50 flex flex-row items-center justify-between">
                <CardTitle className="text-base font-semibold">Performance Calendar (October)</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-7 gap-2 mb-2">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-xs font-semibold text-zinc-500 py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {/* Empty cells for start of month */}
                  {Array.from({ length: startDayOffset }).map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square rounded-md bg-transparent"></div>
                  ))}
                  
                  {/* Days of month */}
                  {Array.from({ length: daysInMonth }).map((_, i) => {
                    const day = i + 1;
                    const cellClass = getIntensityClass(day);
                    const amount = getAmountStr(day);
                    
                    return (
                      <div 
                        key={day} 
                        className={`aspect-square rounded-md border p-2 flex flex-col justify-between transition-colors hover:border-zinc-500 ${cellClass}`}
                      >
                        <span className="text-xs opacity-70">{day}</span>
                        <span className="text-xs sm:text-sm text-center">{amount}</span>
                      </div>
                    );
                  })}
                </div>
                
                {/* Legend */}
                <div className="mt-6 flex items-center justify-end gap-4 text-xs text-zinc-400">
                  <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-green-500/40 border border-green-500/50"></div> +$500+</div>
                  <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-green-500/10 border border-green-500/20"></div> +$100-499</div>
                  <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-[#121214] border border-zinc-800"></div> Neutral</div>
                  <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-red-500/20 border border-red-500/30"></div> -$1-299</div>
                  <div className="flex items-center gap-1"><div className="w-3 h-3 rounded bg-red-500/40 border border-red-500/50"></div> -$300+</div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  );
}
