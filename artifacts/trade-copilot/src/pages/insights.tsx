import { useGetWeeklyReview } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Insights() {
  const { data: review, isLoading } = useGetWeeklyReview();

  return (
    <div className="flex-1 flex flex-col h-full min-w-0 overflow-auto">
      <header className="h-16 flex items-center px-8 border-b border-border bg-card/50 backdrop-blur shrink-0">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Weekly Review</h2>
      </header>

      <div className="p-8 max-w-5xl mx-auto w-full space-y-6">
        {isLoading ? (
           <div className="text-muted-foreground">Loading insights...</div>
        ) : !review ? (
           <div className="text-muted-foreground">No weekly review data available.</div>
        ) : (
          <>
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">Weekly Performance</h1>
                <p className="text-muted-foreground mt-1">{new Date(review.weekStart).toLocaleDateString()} - {new Date(review.weekEnd).toLocaleDateString()}</p>
              </div>
              <Badge className="bg-primary/10 text-primary border-primary/20 px-3 py-1">AI Generated</Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Net P&L</p>
                  <div className="text-3xl font-bold text-emerald-400">
                    {review.totalPnL >= 0 ? "+" : ""}${review.totalPnL.toFixed(2)}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Trades Taken</p>
                  <div className="text-3xl font-bold text-foreground">{review.totalTrades}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Win Rate</p>
                  <div className="text-3xl font-bold text-foreground">{(review.winRate * 100).toFixed(1)}%</div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-card border-primary/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Bot className="w-24 h-24 text-primary" />
              </div>
              <CardHeader className="border-b border-border pb-3 flex flex-row items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold text-foreground">TAC Copilot · Weekly Digest</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4 text-sm leading-relaxed text-zinc-300">
                <p>Your best setup this week was <strong>{review.topSetup}</strong>. Best day to trade was {review.bestDay}.</p>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Strengths:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {review.strengths.map((s, i) => <li key={i}>{s}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Areas for Improvement:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {review.improvementAreas.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
