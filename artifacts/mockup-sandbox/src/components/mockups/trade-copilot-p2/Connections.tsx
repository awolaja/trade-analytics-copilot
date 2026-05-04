import React, { useState } from "react";
import { 
  CheckCircle2, 
  RefreshCw, 
  Unplug, 
  Server, 
  Database,
  Plus,
  Search,
  Settings,
  LayoutDashboard,
  LineChart,
  List,
  LogOut,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Link = ({ href, className, children }: { href: string, className?: string, children: React.ReactNode }) => <a href={href} className={className}>{children}</a>;
const AppShell = ({ children, activeNav }: { children: React.ReactNode, activeNav: string }) => {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col md:flex-row font-sans selection:bg-[#ff4500]/30">
      {/* Sidebar */}
      <aside className="w-full md:w-64 border-r border-[#27272a] bg-[#09090b] flex flex-col">
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
            <span>API Connections</span>
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
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#ff4500]"></span>
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-6 md:p-8">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};

export function Connections() {
  const [isSyncing, setIsSyncing] = useState(false);

  const handleSync = () => {
    setIsSyncing(true);
    setTimeout(() => setIsSyncing(false), 2000);
  };

  return (
    <AppShell activeNav="settings">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-100 mb-2">API Connections</h1>
        <p className="text-zinc-400 max-w-2xl">
          Connect your broker and AI services to automatically sync trade history and enable intelligent insights.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {/* Alpaca Card */}
        <Card className="bg-[#121214] border-[#27272a] shadow-none">
          <CardHeader className="pb-4 border-b border-[#27272a]/50">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                  <span className="font-bold text-yellow-500 text-xs tracking-wider">ALPACA</span>
                </div>
                <div>
                  <CardTitle className="text-lg">Alpaca Markets</CardTitle>
                  <CardDescription className="text-zinc-500 mt-0.5">Brokerage Integration</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Connected
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-zinc-500 mb-1 font-medium uppercase tracking-wider">Account</div>
                  <div className="text-sm text-zinc-200">Alex Trader &mdash; Paper Trading</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 mb-1 font-medium uppercase tracking-wider">Status</div>
                  <div className="text-sm text-zinc-200">Active (Live Data)</div>
                </div>
              </div>
              
              <div className="p-4 rounded-md bg-[#09090b] border border-[#27272a] flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-500 mb-1">Trades Synced</div>
                  <div className="text-xl font-bold text-zinc-100">183</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-zinc-500 mb-1">Last Synced</div>
                  <div className="text-sm text-zinc-300 flex items-center justify-end gap-1.5">
                    <RefreshCw className="w-3 h-3 text-zinc-500" />
                    2 minutes ago
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 pt-2">
                <div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Recent Syncs</div>
                <div className="text-sm space-y-2">
                  <div className="flex justify-between items-center text-zinc-400">
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Today, 09:41 AM</span>
                    <span className="text-zinc-300">12 trades</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400">
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Yesterday, 16:00 PM</span>
                    <span className="text-zinc-300">38 trades</span>
                  </div>
                  <div className="flex justify-between items-center text-zinc-400">
                    <span className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Oct 24, 16:05 PM</span>
                    <span className="text-zinc-300">8 trades</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-2 pb-6 flex gap-3">
            <Button 
              className="bg-[#ff4500] hover:bg-[#ff4500]/90 text-white shadow-lg shadow-[#ff4500]/20 flex-1"
              onClick={handleSync}
              disabled={isSyncing}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isSyncing ? 'animate-spin' : ''}`} />
              {isSyncing ? 'Syncing...' : 'Sync Now'}
            </Button>
            <Button variant="outline" className="border-[#27272a] bg-transparent text-zinc-400 hover:text-red-400 hover:bg-red-400/10 hover:border-red-400/20">
              <Unplug className="w-4 h-4 mr-2" />
              Disconnect
            </Button>
          </CardFooter>
        </Card>

        {/* Pinecone Card */}
        <Card className="bg-[#121214] border-[#27272a] shadow-none">
          <CardHeader className="pb-4 border-b border-[#27272a]/50">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <CardTitle className="text-lg">Pinecone</CardTitle>
                  <CardDescription className="text-zinc-500 mt-0.5">Vector Database</CardDescription>
                </div>
              </div>
              <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Connected
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-zinc-500 mb-1 font-medium uppercase tracking-wider">Index</div>
                  <div className="text-sm text-zinc-200 font-mono">trade-analytics-prod</div>
                </div>
                <div>
                  <div className="text-xs text-zinc-500 mb-1 font-medium uppercase tracking-wider">Namespace</div>
                  <div className="text-sm text-zinc-200 font-mono">user_trades</div>
                </div>
              </div>
              
              <div className="p-4 rounded-md bg-[#09090b] border border-[#27272a] flex items-center justify-between">
                <div>
                  <div className="text-xs text-zinc-500 mb-1">Vectors Stored</div>
                  <div className="text-xl font-bold text-zinc-100">12,847</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-zinc-500 mb-1">Last Indexed</div>
                  <div className="text-sm text-zinc-300">5 minutes ago</div>
                </div>
              </div>
              
              <div className="pt-2 flex items-center gap-4 text-xs text-zinc-400 bg-[#27272a]/20 p-3 rounded-md border border-[#27272a]/50">
                <div className="flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-zinc-500" />
                  Model: <span className="text-zinc-300">text-embedding-3-small</span>
                </div>
                <div className="flex items-center gap-1.5 border-l border-[#27272a] pl-4">
                  Dims: <span className="text-zinc-300 font-mono">1536</span>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-4 pb-6 flex gap-3 mt-auto">
            <Button variant="outline" className="flex-1 border-[#27272a] bg-[#121214] text-zinc-300 hover:bg-[#27272a] hover:text-zinc-100">
              <RefreshCw className="w-4 h-4 mr-2" />
              Re-index
            </Button>
            <Button variant="ghost" className="text-zinc-500 hover:text-red-400 hover:bg-red-400/10">
              Disconnect
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-zinc-200">Coming Soon</h2>
        <Button variant="outline" size="sm" className="border-[#27272a] bg-transparent text-zinc-300 hover:bg-[#27272a] hover:text-white">
          <Plus className="w-4 h-4 mr-1" />
          Request Integration
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "Interactive Brokers", type: "Brokerage" },
          { name: "TD Ameritrade", type: "Brokerage" },
          { name: "Charles Schwab", type: "Brokerage" }
        ].map((item, i) => (
          <Card key={i} className="bg-[#121214]/50 border-[#27272a]/50 border-dashed opacity-60">
            <CardContent className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#27272a] flex items-center justify-center">
                  <span className="text-xs font-bold text-zinc-500">{item.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-medium text-zinc-300">{item.name}</div>
                  <div className="text-xs text-zinc-500">{item.type}</div>
                </div>
              </div>
              <Badge variant="secondary" className="bg-[#27272a] text-zinc-400 hover:bg-[#27272a]">Soon</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
