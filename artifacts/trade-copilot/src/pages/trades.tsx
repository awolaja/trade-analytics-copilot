import { useState } from "react";
import { Link } from "wouter";
import { useListTrades } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, RefreshCw, Eye, ChevronLeft, ChevronRight } from "lucide-react";

export default function Trades() {
  const [symbol, setSymbol] = useState("");
  const [side, setSide] = useState<string>("all");
  
  const { data: tradeData, isLoading, refetch, isRefetching } = useListTrades({
    limit: 50,
  });

  return (
    <div className="flex-1 flex flex-col h-full min-w-0">
      <header className="h-16 flex items-center justify-between px-8 border-b border-border bg-card/50 backdrop-blur shrink-0">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Trade Ledger</h2>
        <Button 
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => refetch()}
          disabled={isRefetching}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefetching ? 'animate-spin' : ''}`} />
          {isRefetching ? 'Syncing...' : 'Sync Now'}
        </Button>
      </header>

      <div className="flex-1 overflow-auto p-8 flex flex-col">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-6">
          <div className="bg-card border border-border rounded-lg p-3 flex flex-col md:flex-row items-center gap-3">
            <div className="relative flex-1 min-w-[200px] w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search symbol..." 
                value={symbol}
                onChange={(e) => setSymbol(e.target.value)}
                className="bg-background border-input pl-9 h-9 text-sm focus-visible:ring-ring w-full"
              />
            </div>
            
            <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto">
              <Select value={side} onValueChange={setSide}>
                <SelectTrigger className="h-9 w-[110px] bg-background border-input">
                  <SelectValue placeholder="Side" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sides</SelectItem>
                  <SelectItem value="long">Long</SelectItem>
                  <SelectItem value="short">Short</SelectItem>
                </SelectContent>
              </Select>

              <Button variant="outline" size="icon" className="h-9 w-9 shrink-0 bg-background border-input">
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg flex-1 overflow-auto flex flex-col min-h-[400px]">
            <Table>
              <TableHeader className="bg-card sticky top-0 z-10 shadow-[0_1px_0_var(--border)]">
                <TableRow className="border-border hover:bg-transparent">
                  <TableHead className="text-muted-foreground font-medium">Symbol</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Side</TableHead>
                  <TableHead className="text-muted-foreground font-medium text-right">Qty</TableHead>
                  <TableHead className="text-muted-foreground font-medium text-right">Entry</TableHead>
                  <TableHead className="text-muted-foreground font-medium text-right">Exit</TableHead>
                  <TableHead className="text-muted-foreground font-medium text-right">Net P&L</TableHead>
                  <TableHead className="text-muted-foreground font-medium">Date</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-32 text-center text-muted-foreground">Loading trades...</TableCell>
                  </TableRow>
                ) : tradeData?.trades.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={8} className="h-32 text-center text-muted-foreground">No trades found.</TableCell>
                  </TableRow>
                ) : (
                  tradeData?.trades.map((t) => (
                    <TableRow key={t.id} className="border-border/50 hover:bg-muted/30 transition-colors group">
                      <TableCell className="font-mono font-bold text-foreground">
                        {t.symbol}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`font-medium ${t.side === 'long' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 'bg-red-500/10 text-red-500 border-red-500/20'}`}>
                          {t.side.toUpperCase()}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono text-zinc-300">{t.quantity}</TableCell>
                      <TableCell className="text-right font-mono text-zinc-300">${t.entryPrice.toFixed(2)}</TableCell>
                      <TableCell className="text-right font-mono text-zinc-300">{t.exitPrice ? `$${t.exitPrice.toFixed(2)}` : '-'}</TableCell>
                      <TableCell className={`text-right font-mono font-medium ${t.pnl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                        {t.pnl >= 0 ? '+' : ''}${t.pnl.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm whitespace-nowrap">
                        {new Date(t.openTime).toLocaleDateString()}
                      </TableCell>
                      <TableCell>
                        <Link href={`/trades/${t.id}`}>
                          <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
