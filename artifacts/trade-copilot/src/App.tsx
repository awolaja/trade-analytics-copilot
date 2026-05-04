import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { ProtectedRoute } from "@/components/layout/ProtectedRoute";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import Trades from "@/pages/trades";
import TradeDetail from "@/pages/trade-detail";
import Analytics from "@/pages/analytics";
import Journal from "@/pages/journal";
import JournalTags from "@/pages/journal-tags";
import Insights from "@/pages/insights";
import Brokers from "@/pages/brokers";
import BrokerSync from "@/pages/broker-sync";
import BrokerPortfolio from "@/pages/broker-portfolio";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/">
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/dashboard">
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/trades">
        <ProtectedRoute>
          <Trades />
        </ProtectedRoute>
      </Route>
      <Route path="/trades/:id">
        <ProtectedRoute>
          <TradeDetail />
        </ProtectedRoute>
      </Route>
      <Route path="/analytics">
        <ProtectedRoute>
          <Analytics />
        </ProtectedRoute>
      </Route>
      <Route path="/journal">
        <ProtectedRoute>
          <Journal />
        </ProtectedRoute>
      </Route>
      <Route path="/journal/tags">
        <ProtectedRoute>
          <JournalTags />
        </ProtectedRoute>
      </Route>
      <Route path="/insights">
        <ProtectedRoute>
          <Insights />
        </ProtectedRoute>
      </Route>
      <Route path="/brokers">
        <ProtectedRoute>
          <Brokers />
        </ProtectedRoute>
      </Route>
      <Route path="/brokers/sync">
        <ProtectedRoute>
          <BrokerSync />
        </ProtectedRoute>
      </Route>
      <Route path="/brokers/portfolio">
        <ProtectedRoute>
          <BrokerPortfolio />
        </ProtectedRoute>
      </Route>
      <Route>
        <ProtectedRoute>
          <NotFound />
        </ProtectedRoute>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
