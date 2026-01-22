import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  FileText, 
  ShieldCheck, 
  Settings, 
  LogOut, 
  Menu,
  Search,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Relatórios", href: "/reports", icon: FileText },
    { name: "Auditorias", href: "/audits", icon: ShieldCheck },
    { name: "Configurações", href: "/settings", icon: Settings },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-sidebar-foreground">
            GOForensic
          </span>
        </div>
      </div>

      <div className="flex-1 py-6 px-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-colors cursor-pointer",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground border border-sidebar-border shadow-sm"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
                )}
              >
                <item.icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground")} />
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>

      <div className="p-4 border-t border-sidebar-border">
        <Button variant="ghost" className="w-full justify-start gap-2 text-sidebar-foreground/70 hover:text-destructive hover:bg-destructive/10">
          <LogOut className="w-4 h-4" />
          Sair
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 fixed inset-y-0 z-50">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar */}
      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetContent side="left" className="p-0 w-64 border-r border-sidebar-border">
          <SidebarContent />
        </SheetContent>
      </Sheet>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileOpen(true)}>
              <Menu className="w-5 h-5" />
            </Button>
            
            <div className="hidden md:flex items-center gap-2 text-muted-foreground text-sm">
              <span className="font-medium text-foreground">Green Oracle</span>
              <span className="text-muted-foreground/50">/</span>
              <span>Forensic Analyst</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search" 
                placeholder="Buscar auditorias..." 
                className="w-64 pl-9 h-9 bg-secondary/50 border-border focus:bg-background transition-colors"
              />
            </div>
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full border-2 border-background"></span>
            </Button>
            
            <div className="h-8 w-px bg-border mx-1"></div>
            
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium leading-none">Dr. Auditor</p>
                <p className="text-xs text-muted-foreground mt-1">Analista Sênior</p>
              </div>
              <Avatar className="h-9 w-9 border border-border">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>DA</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8 overflow-x-hidden">
          <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
