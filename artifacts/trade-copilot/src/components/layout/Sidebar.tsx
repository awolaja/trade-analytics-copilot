import React from "react";
import { Link, useLocation } from "wouter";
import {
  LayoutDashboard,
  Wallet,
  LineChart,
  Calendar,
  Target,
  BookOpen,
  Tags,
  CheckCircle2,
  AlertCircle,
  Zap,
  ExternalLink,
  RefreshCw,
  LogOut,
  TrendingUp
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useGetMe, useLogout } from "@workspace/api-client-react";

export function Sidebar() {
  const [location] = useLocation();
  const { data: user } = useGetMe();
  const logout = useLogout();

  const handleLogout = () => {
    logout.mutate(undefined, {
      onSuccess: () => {
        window.location.href = "/login";
      }
    });
  };

  const navItemClass = (path: string) =>
    `flex items-center gap-3 px-3 py-2 rounded-md transition-colors font-medium text-sm ${
      location === path || location.startsWith(path + "/")
        ? "bg-primary/10 text-primary"
        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
    }`;

  return (
    <aside className="w-64 border-r border-border bg-sidebar flex flex-col hidden md:flex shrink-0">
      <div className="h-16 flex items-center px-6 border-b border-border">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(255,69,0,0.4)]">
            <TrendingUp className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg tracking-tight text-foreground">TAC</span>
        </Link>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        <Link href="/dashboard" className={navItemClass("/dashboard")}>
          <LayoutDashboard className="w-4 h-4" />
          <span>Dashboard</span>
        </Link>
        <Link href="/trades" className={navItemClass("/trades")}>
          <Wallet className="w-4 h-4" />
          <span>Trades</span>
        </Link>

        <div className="pt-4 pb-2 px-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Analytics</p>
        </div>
        <Link href="/analytics" className={navItemClass("/analytics")}>
          <LineChart className="w-4 h-4" />
          <span>Overview</span>
        </Link>

        <div className="pt-4 pb-2 px-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Journal</p>
        </div>
        <Link href="/journal" className={navItemClass("/journal")}>
          <BookOpen className="w-4 h-4" />
          <span>Journal Log</span>
        </Link>
        <Link href="/journal/tags" className={navItemClass("/journal/tags")}>
          <Tags className="w-4 h-4" />
          <span>Tags</span>
        </Link>

        <div className="pt-4 pb-2 px-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Insights</p>
        </div>
        <Link href="/insights" className={navItemClass("/insights")}>
          <CheckCircle2 className="w-4 h-4" />
          <span>Weekly Review</span>
        </Link>

        <div className="pt-4 pb-2 px-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Connections</p>
        </div>
        <Link href="/brokers" className={navItemClass("/brokers")}>
          <ExternalLink className="w-4 h-4" />
          <span>Brokers</span>
        </Link>
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground">
          <Avatar className="w-8 h-8 border border-border">
            <AvatarFallback className="bg-background text-foreground">
              {user?.avatarInitials || "AT"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 truncate">
            <div className="font-medium text-foreground truncate">{user?.displayName || "Trader"}</div>
            <div className="text-xs text-muted-foreground truncate">Pro Plan</div>
          </div>
          <LogOut onClick={handleLogout} className="w-4 h-4 hover:text-foreground cursor-pointer transition-colors" />
        </div>
      </div>
    </aside>
  );
}
