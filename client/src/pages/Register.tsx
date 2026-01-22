import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Register() {
  const [, setLocation] = useLocation();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulating registration
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 py-12">
      <div className="w-full max-w-2xl space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex flex-col items-center text-center space-y-2">
          <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-display font-bold tracking-tight">
            Criar nova conta
          </h1>
          <p className="text-muted-foreground max-w-md">
            Junte-se ao GOForensic para gerenciar suas auditorias com segurança e eficiência.
          </p>
        </div>

        <div className="bg-card border border-border p-8 rounded-lg shadow-sm">
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome do Usuário</Label>
                <Input id="name" placeholder="Seu nome completo" required className="h-11" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="company">Empresa que Representa</Label>
                <Input id="company" placeholder="Nome da empresa" required className="h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email para Contato</Label>
                <Input id="email" type="email" placeholder="nome@empresa.com" required className="h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" type="tel" placeholder="+55 (00) 00000-0000" required className="h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input id="city" placeholder="Sua cidade" required className="h-11" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">País</Label>
                <Input id="country" placeholder="Seu país" required className="h-11" />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" placeholder="Crie uma senha segura" required className="h-11" />
              <p className="text-xs text-muted-foreground">
                Mínimo de 8 caracteres com letras e números.
              </p>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full h-11 text-base">
                Criar Conta
              </Button>
            </div>
          </form>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link href="/login">
              <span className="text-primary font-medium hover:underline cursor-pointer">
                Fazer Login
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
