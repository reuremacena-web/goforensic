import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Router() {
  return (
    <Switch>
      {/* Public Routes (No Layout) */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      
      {/* Protected Routes (With Layout) */}
      <Route path="/:rest*">
        <Layout>
          <Switch>
            <Route path="/" component={Dashboard} />
            <Route path="/reports" component={() => <div className="p-4">Página de Relatórios (Em Breve)</div>} />
            <Route path="/audits" component={() => <div className="p-4">Página de Auditorias (Em Breve)</div>} />
            <Route path="/settings" component={() => <div className="p-4">Configurações (Em Breve)</div>} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
