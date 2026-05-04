import { useListJournalEntries } from "@workspace/api-client-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Journal() {
  const { data: entries, isLoading } = useListJournalEntries({ limit: 50 });

  return (
    <div className="flex-1 flex flex-col h-full min-w-0">
      <header className="h-16 flex items-center px-8 border-b border-border bg-card/50 backdrop-blur shrink-0">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Journal Log</h2>
      </header>

      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="outline" className="bg-card border-border text-muted-foreground justify-between w-full sm:w-48 font-normal">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date Range
              </span>
            </Button>
            <Button variant="outline" className="bg-card border-border text-muted-foreground justify-between w-full sm:w-40 font-normal">
              <span className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                All Tags
              </span>
            </Button>
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input 
                placeholder="Search entries..." 
                className="bg-background border-input pl-9 focus-visible:ring-ring w-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            {isLoading ? (
              <div className="p-8 text-center text-muted-foreground">Loading journal entries...</div>
            ) : entries?.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground bg-card border border-border rounded-xl">
                No journal entries found.
              </div>
            ) : (
              entries?.map((entry) => (
                <div key={entry.id} className="flex items-start gap-6 p-4 bg-card border border-border rounded-xl hover:border-zinc-700 transition-all">
                  <div className="w-24 shrink-0">
                    <p className="text-sm font-semibold text-foreground">{new Date(entry.date).toLocaleDateString()}</p>
                  </div>
                  <div className="w-24 shrink-0">
                    <p className="text-sm font-bold tracking-tight">{entry.symbol}</p>
                    <Badge variant="outline" className="mt-1 text-[10px] h-5">{entry.setup}</Badge>
                  </div>
                  <div className="w-20 shrink-0">
                    <p className={`text-sm font-bold ${entry.pnl >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                      {entry.pnl >= 0 ? '+' : ''}${Math.abs(entry.pnl).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {entry.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{entry.notes}"</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
