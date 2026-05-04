import React from "react";
import { 
  CheckCircle2, 
  RefreshCw, 
  Search,
  Settings,
  LayoutDashboard,
  LineChart,
  List,
  LogOut,
  Bell,
  Clock,
  AlertCircle,
  PlayCircle,
  ChevronRight,
  ArrowRightLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Link href="/trades" className="hover:text-zinc-200 transition-colors">Trades</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="font-medium text-zinc-200">Sync History</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input 
                type="text" 
                placeholder="Search command (Cmd+K)" 
                className="bg-[#121214] border border-[#27272a] rounded-full pl-9 pr-4 py-1.5 text-sm text-zinc-200 focus:outline-none focus:border-[#ff4500] focus:ring-1 focus:ring-[#ff4500]/50 transition-all w-64"
              />
            </div>
            <button className="relative p-2 text-zinc-400 hover:text-zinc-100 transition-colors">
              <Bell className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6 md:p-8">
          <div className="max-w-6xl mx-auto space-y-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export function SyncStatus() {
  const syncJobs = [
    { id: "sync_0025", time: "Today, 09:41 AM", duration: "-", trades: "-", status: "in_progress", error: null },
    { id: "sync_0024", time: "Today, 09:36 AM", duration: "1.2s", trades: "12", status: "completed", error: null },
    { id: "sync_0023", time: "Today, 09:31 AM", duration: "0.8s", trades: "0", status: "completed", error: null },
    { id: "sync_0022", time: "Today, 09:26 AM", duration: "1.4s", trades: "3", status: "completed", error: null },
    { id: "sync_0021", time: "Today, 09:21 AM", duration: "0.4s", trades: "-", status: "failed", error: "API rate limit exceeded" },
    { id: "sync_0020", time: "Yesterday, 16:00 PM", duration: "2.1s", trades: "38", status: "completed", error: null },
    { id: "sync_0019", time: "Yesterday, 15:55 PM", duration: "1.1s", trades: "5", status: "completed", error: null },
    { id: "sync_0018", time: "Yesterday, 15:50 PM", duration: "0.9s", trades: "1", status: "completed", error: null },
  ];

  return (
    <AppShell activeNav="trades">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded bg-[#121214] border border-[#27272a] flex items-center justify-center">
            <ArrowRightLeft className="w-4 h-4 text-zinc-400" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-100">Alpaca Sync History</h1>
        </div>
        <p className="text-zinc-400 mb-8">Monitor live data synchronization from your brokerage account.</p>
      </div>

      {/* Summary Stat Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-[#121214] border-[#27272a] rounded-lg">
          <CardContent className="p-4">
            <div className="text-sm font-medium text-zinc-500 mb-1">Total Syncs</div>
            <div className="text-2xl font-bold text-zinc-100">24</div>
          </CardContent>
        </Card>
        <Card className="bg-[#121214] border-[#27272a] rounded-lg">
          <CardContent className="p-4">
            <div className="text-sm font-medium text-zinc-500 mb-1">Trades Imported</div>
            <div className="text-2xl font-bold text-zinc-100">183</div>
          </CardContent>
        </Card>
        <Card className="bg-[#121214] border-[#27272a] rounded-lg">
          <CardContent className="p-4 flex flex-col justify-between h-full">
            <div className="text-sm font-medium text-zinc-500 mb-1">Last Sync</div>
            <div className="text-2xl font-bold text-zinc-100 flex items-center gap-2">
              2 min ago
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#121214] border-[#27272a] rounded-lg">
          <CardContent className="p-4">
            <div className="text-sm font-medium text-zinc-500 mb-1">Avg Sync Time</div>
            <div className="text-2xl font-bold text-zinc-100">1.3s</div>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card className="bg-[#121214] border-[#27272a]">
        <div className="p-4 border-b border-[#27272a] flex items-center justify-between">
          <h3 className="font-semibold text-zinc-200">Recent Jobs</h3>
          <Button variant="outline" size="sm" className="h-8 bg-[#121214] border-[#27272a] text-zinc-300 hover:text-white hover:bg-[#27272a]">
            <RefreshCw className="w-3.5 h-3.5 mr-2" /> Refresh
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-[#27272a] hover:bg-transparent">
              <TableHead className="text-zinc-500 font-medium">Sync ID</TableHead>
              <TableHead className="text-zinc-500 font-medium">Started At</TableHead>
              <TableHead className="text-zinc-500 font-medium">Duration</TableHead>
              <TableHead className="text-zinc-500 font-medium">Trades Fetched</TableHead>
              <TableHead className="text-zinc-500 font-medium">Status</TableHead>
              <TableHead className="text-zinc-500 font-medium text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {syncJobs.map((job) => (
              <TableRow key={job.id} className="border-[#27272a] hover:bg-[#27272a]/20 transition-colors">
                <TableCell className="font-mono text-xs text-zinc-400">{job.id}</TableCell>
                <TableCell className="text-zinc-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-zinc-500" />
                    {job.time}
                  </div>
                </TableCell>
                <TableCell className="text-zinc-300 font-mono text-sm">{job.duration}</TableCell>
                <TableCell className="text-zinc-300">
                  {job.trades !== "-" ? <span className="font-medium">{job.trades}</span> : "-"}
                </TableCell>
                <TableCell>
                  {job.status === "completed" && (
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-normal">
                      Completed
                    </Badge>
                  )}
                  {job.status === "in_progress" && (
                    <Badge variant="outline" className="bg-[#ff4500]/10 text-[#ff4500] border-[#ff4500]/20 font-normal flex items-center gap-1.5 w-fit">
                      <RefreshCw className="w-3 h-3 animate-spin" />
                      Syncing...
                    </Badge>
                  )}
                  {job.status === "failed" && (
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20 font-normal">
                        Failed
                      </Badge>
                      <span className="text-xs text-zinc-500 truncate max-w-[120px]" title={job.error!}>{job.error}</span>
                    </div>
                  )}
                </TableCell>
                <TableCell className="text-right">
                  {job.status === "failed" ? (
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-zinc-400 hover:text-white hover:bg-[#27272a]">
                      Retry
                    </Button>
                  ) : (
                    <Button variant="ghost" size="sm" className="h-7 text-xs text-zinc-500 hover:text-zinc-300 hover:bg-[#27272a]">
                      Details
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* Sync Settings Panel */}
      <Card className="bg-[#121214] border-[#27272a]">
        <div className="p-5 border-b border-[#27272a]">
          <h3 className="font-semibold text-zinc-200">Sync Settings</h3>
          <p className="text-sm text-zinc-500 mt-1">Configure how Trade Copilot pulls data from your broker.</p>
        </div>
        <CardContent className="p-5 flex flex-col md:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label className="text-base text-zinc-200">Auto-sync</Label>
                <p className="text-sm text-zinc-500">Automatically fetch new trades in the background.</p>
              </div>
              <Switch defaultChecked className="data-[state=checked]:bg-[#ff4500]" />
            </div>
            
            <div className="space-y-3">
              <Label className="text-zinc-200">Sync Frequency</Label>
              <Select defaultValue="5m">
                <SelectTrigger className="w-full md:w-[240px] bg-[#09090b] border-[#27272a] text-zinc-200 focus:ring-[#ff4500]/50">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent className="bg-[#121214] border-[#27272a] text-zinc-200">
                  <SelectItem value="1m">Every minute</SelectItem>
                  <SelectItem value="5m">Every 5 minutes</SelectItem>
                  <SelectItem value="15m">Every 15 minutes</SelectItem>
                  <SelectItem value="1h">Hourly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="w-px bg-[#27272a] hidden md:block"></div>
          
          <div className="flex-1 space-y-6">
            <div className="space-y-3">
              <Label className="text-zinc-200">Historical Import Range</Label>
              <p className="text-sm text-zinc-500 mb-2">The date range for your initial trade import.</p>
              <div className="p-3 rounded-md bg-[#09090b] border border-[#27272a] flex items-center justify-between text-sm">
                <span className="text-zinc-300">Jan 1, 2024 &mdash; Today</span>
                <Button variant="ghost" size="sm" className="h-6 px-2 text-xs text-[#ff4500] hover:text-[#ff4500] hover:bg-[#ff4500]/10">Edit</Button>
              </div>
            </div>
            
            <Button variant="outline" className="w-full md:w-auto border-[#27272a] bg-[#09090b] text-zinc-300 hover:bg-[#27272a] hover:text-white">
              <PlayCircle className="w-4 h-4 mr-2" /> Run Full Re-sync
            </Button>
          </div>
        </CardContent>
      </Card>
    </AppShell>
  );
}
