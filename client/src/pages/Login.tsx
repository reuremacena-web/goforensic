import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Login() {
  const [, setLocation] = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating login
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <div className="w-full max-w-md space-y-8 animate-in fade-in zoom-in-95 duration-500">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center mb-4">
            <ShieldCheck className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-display font-bold tracking-tight">
            Bem-vindo de volta
          </h1>
          <p className="text-muted-foreground">
            Entre com suas credenciais para acessar o painel
          </p>
        </div>

        <div className="bg-card border border-border p-8 rounded-lg shadow-sm space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="nome@empresa.com" 
                required 
                className="h-11"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <Link href="/forgot-password">
                  <span className="text-sm text-primary hover:underline cursor-pointer">
                    Esqueceu a senha?
                  </span>
                </Link>
              </div>
              <Input 
                id="password" 
                type="password" 
                placeholder="••••••••" 
                required 
                className="h-11"
              />
            </div>
            <Button type="submit" className="w-full h-11 text-base">
              Entrar
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Ou continue com
              </span>
            </div>
          </div>

          <div className="text-center text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link href="/register">
              <span className="text-primary font-medium hover:underline cursor-pointer">
                Cadastre-se
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
