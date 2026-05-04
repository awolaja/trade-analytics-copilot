import { useListBrokers } from "@workspace/api-client-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, ShieldCheck, Wallet, TrendingUp, Activity, Zap } from "lucide-react";

export default function Brokers() {
  const { data: brokers, isLoading, refetch, isRefetching } = useListBrokers();

  return (
    <div className="flex-1 flex flex-col h-full min-w-0 overflow-auto">
      <header className="h-16 flex items-center justify-between px-8 border-b border-border bg-card/50 backdrop-blur shrink-0">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Broker Connections</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={() => refetch()}
          disabled={isRefetching}
          className="border-primary text-primary hover:bg-primary/10"
        >
          <RefreshCw size={14} className={`mr-2 ${isRefetching ? "animate-spin" : ""}`} />
          {isRefetching ? "Refreshing..." : "Refresh"}
        </Button>
      </header>

      <div className="p-8 max-w-5xl mx-auto w-full space-y-8">
        <section className="space-y-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-foreground">
            Connected
            <Badge variant="outline" className="font-normal text-muted-foreground">
              {brokers?.length ?? 0} Total
            </Badge>
          </h2>

          {isLoading ? (
            <div className="space-y-4">
              {[1].map(i => (
                <div key={i} className="h-64 bg-card border border-border rounded-xl animate-pulse" />
              ))}
            </div>
          ) : brokers?.length === 0 ? (
            <div className="text-muted-foreground bg-card border border-border p-10 rounded-xl text-center">
              No brokers connected.
            </div>
          ) : (
            <div className="grid gap-6">
              {brokers?.map(broker => (
                <Card key={broker.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header */}
                    <div className="p-6 flex items-start justify-between border-b border-border/60">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                          <span className="text-black font-black text-xl italic tracking-tighter">A</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-lg text-foreground">{broker.name}</h3>
                            <Badge className="bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/10 border-0 text-[10px] h-5 uppercase">
                              {broker.accountType === "paper" ? "Paper Trading" : "Live Trading"}
                            </Badge>
                            {broker.status === "connected" && (
                              <Badge className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/10 border-0 text-[10px] h-5">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse mr-1.5" />
                                ACTIVE
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-emerald-500 text-xs">●</span>
                            <span className="text-muted-foreground text-xs font-medium capitalize">{broker.status}</span>
                            <span className="text-zinc-600 text-xs">·</span>
                            <span className="text-zinc-500 text-xs">Account: <span className="font-mono">{broker.accountId}</span></span>
                          </div>
                        </div>
                      </div>
                      <span className="text-[10px] text-zinc-500 italic">
                        Synced {new Date(broker.lastSync).toLocaleTimeString()}
                      </span>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/40">
                      <StatCell
                        icon={<TrendingUp size={14} className="text-primary" />}
                        label="Portfolio Value"
                        value={`$${broker.accountBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                        highlight
                      />
                      <StatCell
                        icon={<Wallet size={14} className="text-emerald-400" />}
                        label="Cash"
                        value={`$${broker.cash.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                      />
                      <StatCell
                        icon={<Zap size={14} className="text-yellow-400" />}
                        label="Buying Power"
                        value={`$${broker.buyingPower.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                      />
                      <StatCell
                        icon={<Activity size={14} className="text-blue-400" />}
                        label="Open Positions"
                        value={String(broker.openPositions)}
                      />
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck size={14} className="text-emerald-500" /> Encrypted Credentials
                        </span>
                        {broker.daytradeCount > 0 && (
                          <span className="text-yellow-500">
                            {broker.daytradeCount} day trades (PDT rule applies if ≥4 in 5 days)
                          </span>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
                        onClick={() => refetch()}
                        disabled={isRefetching}
                      >
                        <RefreshCw size={13} className={`mr-1.5 ${isRefetching ? "animate-spin" : ""}`} />
                        Sync Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function StatCell({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="bg-card px-5 py-4">
      <div className="flex items-center gap-1.5 text-muted-foreground mb-2">
        {icon}
        <span className="text-[10px] uppercase tracking-wider font-semibold">{label}</span>
      </div>
      <div className={`text-lg font-bold font-mono ${highlight ? "text-foreground" : "text-foreground/90"}`}>
        {value}
      </div>
    </div>
  );
}
