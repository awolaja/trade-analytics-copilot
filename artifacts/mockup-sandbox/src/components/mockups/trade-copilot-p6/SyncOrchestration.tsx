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
  CheckCircle2,
  AlertCircle,
  Clock3,
  XCircle,
  MoreVertical,
  Play,
  RotateCcw
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SyncOrchestration() {
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
            <a href="#" className="flex items-center gap-3 px-3 py-2 bg-[#ff4500]/10 text-[#ff4500] rounded-md transition-colors font-medium">
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
            <span className="text-zinc-100 font-medium">Sync Status</span>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <span className="text-xs text-zinc-500 italic">Last full sync: 12 min ago</span>
              <Button className="bg-[#ff4500] hover:bg-[#ff4500]/90 text-white border-0 h-9">
                <RefreshCw size={14} className="mr-2" /> Sync All Brokers
              </Button>
            </div>
            <div className="w-[1px] h-6 bg-zinc-800"></div>
            <Avatar className="h-8 w-8 border border-zinc-800">
              <AvatarFallback className="bg-zinc-800 text-xs">TR</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-8 space-y-8">
          {/* Active Jobs */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Active Jobs</h2>
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-[#121214] border-zinc-800">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-50"></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Alpaca</h3>
                        <p className="text-xs text-zinc-500">Started 23s ago</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="h-8 text-zinc-400 hover:text-red-500">Cancel</Button>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-zinc-400">Fetching trades: 847 / 912</span>
                      <span className="text-[#ff4500] font-medium">93%</span>
                    </div>
                    <Progress value={93} className="h-1.5 bg-zinc-800" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-[#121214] border-zinc-800 border-dashed">
                <CardContent className="p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3 text-zinc-500">
                      <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
                      <div>
                        <h3 className="font-semibold text-sm">Pinecone Index</h3>
                        <p className="text-xs">Waiting for Alpaca sync...</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-zinc-400 italic">Re-index 847 embeddings</p>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-600 uppercase font-bold tracking-widest mt-2">
                      <Clock3 size={12} /> ETA ~2 MIN
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Recent Sync History */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Recent Sync History</h2>
            <Card className="bg-[#121214] border-zinc-800 overflow-hidden">
              <Table>
                <TableHeader className="bg-zinc-900/50">
                  <TableRow className="border-zinc-800">
                    <TableHead className="text-zinc-400 h-10">Broker</TableHead>
                    <TableHead className="text-zinc-400 h-10">Status</TableHead>
                    <TableHead className="text-zinc-400 h-10 text-right">Trades Synced</TableHead>
                    <TableHead className="text-zinc-400 h-10">Duration</TableHead>
                    <TableHead className="text-zinc-400 h-10">Timestamp</TableHead>
                    <TableHead className="text-zinc-400 h-10 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-zinc-800 hover:bg-zinc-800/20">
                    <TableCell className="font-medium">Alpaca</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-green-500">
                        <CheckCircle2 size={14} /> <span className="text-xs">Success</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-zinc-400">847</TableCell>
                    <TableCell className="text-zinc-500 text-xs">1m 12s</TableCell>
                    <TableCell className="text-zinc-400 text-xs">Oct 24 11:30 AM</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 text-zinc-400 hover:text-zinc-100 text-xs">View Log</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-zinc-800 hover:bg-zinc-800/20">
                    <TableCell className="font-medium">Pinecone</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-green-500">
                        <CheckCircle2 size={14} /> <span className="text-xs">Success</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-zinc-400">847 vectors</TableCell>
                    <TableCell className="text-zinc-500 text-xs">0m 43s</TableCell>
                    <TableCell className="text-zinc-400 text-xs">Oct 24 11:31 AM</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 text-zinc-400 hover:text-zinc-100 text-xs">View Log</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-zinc-800 hover:bg-zinc-800/20">
                    <TableCell className="font-medium">Alpaca</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-yellow-500">
                        <AlertCircle size={14} /> <span className="text-xs">Partial</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-zinc-400">203</TableCell>
                    <TableCell className="text-zinc-500 text-xs">0m 31s</TableCell>
                    <TableCell className="text-zinc-400 text-xs">Oct 23 09:15 AM</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 text-[#ff4500] hover:text-[#ff4500]/80 text-xs">Retry</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-zinc-800 hover:bg-zinc-800/20">
                    <TableCell className="font-medium">Alpaca</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-red-500">
                        <XCircle size={14} /> <span className="text-xs">Failed</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-zinc-400">0</TableCell>
                    <TableCell className="text-zinc-500 text-xs">—</TableCell>
                    <TableCell className="text-zinc-400 text-xs">Oct 22 02:00 AM</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 text-zinc-400 hover:text-zinc-100 text-xs">Retry</Button>
                    </TableCell>
                  </TableRow>
                  <TableRow className="border-zinc-800 hover:bg-zinc-800/20">
                    <TableCell className="font-medium">Pinecone</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 text-green-500">
                        <CheckCircle2 size={14} /> <span className="text-xs">Success</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-zinc-400">1,204 vectors</TableCell>
                    <TableCell className="text-zinc-500 text-xs">1m 02s</TableCell>
                    <TableCell className="text-zinc-400 text-xs">Oct 21 08:00 AM</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="h-8 text-zinc-400 hover:text-zinc-100 text-xs">View Log</Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </section>

          {/* Sync Settings */}
          <section className="space-y-4">
            <h2 className="text-lg font-semibold">Sync Settings</h2>
            <Card className="bg-[#121214] border-zinc-800 max-w-3xl">
              <CardContent className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Sync Frequency</label>
                    <Select defaultValue="15m">
                      <SelectTrigger className="bg-zinc-900 border-zinc-800 h-10 focus:ring-[#ff4500]">
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent className="bg-zinc-900 border-zinc-800 text-zinc-100">
                        <SelectItem value="5m">Every 5 minutes</SelectItem>
                        <SelectItem value="15m">Every 15 minutes</SelectItem>
                        <SelectItem value="1h">Every hour</SelectItem>
                        <SelectItem value="manual">Manual only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between pt-8">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium text-zinc-300">Auto-sync on login</label>
                      <p className="text-xs text-zinc-500">Automatically sync all brokers when you sign in.</p>
                    </div>
                    <Switch checked className="data-[state=checked]:bg-[#ff4500]" />
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <div className="space-y-0.5">
                      <label className="text-sm font-medium text-zinc-300">Include paper trades</label>
                      <p className="text-xs text-zinc-500">Sync data from simulated/paper trading accounts.</p>
                    </div>
                    <Switch className="data-[state=checked]:bg-[#ff4500]" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Webhook URL</label>
                    <Input 
                      className="bg-zinc-900 border-zinc-800 h-10 focus-visible:ring-[#ff4500]" 
                      placeholder="https://..."
                    />
                  </div>
                </div>
                <div className="pt-4 border-t border-zinc-800 flex justify-end">
                  <Button className="bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border-0">Save Settings</Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
