import { useGetBrokerSyncStatus } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

export default function BrokerSync() {
  const { data: syncStatus, isLoading, refetch, isRefetching } = useGetBrokerSyncStatus();

  return (
    <div className="flex-1 flex flex-col h-full min-w-0 overflow-auto">
      <header className="h-16 flex items-center justify-between px-8 border-b border-border bg-card/50 backdrop-blur shrink-0">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">Sync Status</h2>
        <Button 
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          onClick={() => refetch()}
          disabled={isRefetching}
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isRefetching ? 'animate-spin' : ''}`} />
          {isRefetching ? 'Syncing...' : 'Sync Now'}
        </Button>
      </header>

      <div className="p-8 max-w-5xl mx-auto w-full space-y-6">
        {isLoading ? (
          <div className="text-muted-foreground">Loading sync status...</div>
        ) : !syncStatus ? (
           <div className="text-muted-foreground">No sync data available.</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Last Global Sync</p>
                  <div className="text-lg font-bold text-foreground">
                    {new Date(syncStatus.lastSyncAt).toLocaleString()}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Next Scheduled Sync</p>
                  <div className="text-lg font-bold text-foreground">
                    {new Date(syncStatus.nextSyncAt).toLocaleString()}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Total Trades Imported</p>
                  <div className="text-3xl font-bold text-foreground">
                    {syncStatus.tradesImported}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Broker Sync Details</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Broker</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Trades Imported</TableHead>
                      <TableHead className="text-right">Last Sync</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {syncStatus.brokers.map((broker) => (
                      <TableRow key={broker.name}>
                        <TableCell className="font-medium">{broker.name}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className={broker.status === 'success' ? 'text-emerald-500 bg-emerald-500/10' : 'text-red-500 bg-red-500/10'}>
                            {broker.status.toUpperCase()}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{broker.tradesImported}</TableCell>
                        <TableCell className="text-right">{new Date(broker.lastSync).toLocaleString()}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
