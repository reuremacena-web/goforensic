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

// Wrapper for protected routes that need Layout
const ProtectedRoute = ({ component: Component }: { component: React.ComponentType }) => (
  <Layout>
    <Component />
  </Layout>
);

function Router() {
  return (
    <Switch>
      {/* Public Routes */}
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      
      {/* Protected Routes */}
      <Route path="/" component={() => <ProtectedRoute component={Dashboard} />} />
      <Route path="/reports" component={() => <ProtectedRoute component={() => <div className="p-4">Página de Relatórios (Em Breve)</div>} />} />
      <Route path="/audits" component={() => <ProtectedRoute component={() => <div className="p-4">Página de Auditorias (Em Breve)</div>} />} />
      <Route path="/audits/new" component={() => <ProtectedRoute component={() => <div className="p-4">Nova Auditoria (Em Breve)</div>} />} />
      <Route path="/alerts" component={() => <ProtectedRoute component={() => <div className="p-4">Central de Alertas (Em Breve)</div>} />} />
      <Route path="/settings" component={() => <ProtectedRoute component={() => <div className="p-4">Configurações (Em Breve)</div>} />} />
      
      {/* Fallback */}
      <Route component={NotFound} />
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
