import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  Users, 
  FileText, 
  AlertTriangle, 
  CheckCircle2,
  MoreHorizontal,
  Download
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Visão geral das auditorias e conformidade florestal.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Exportar Dados
          </Button>
          <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm">
            <FileText className="w-4 h-4" />
            Nova Auditoria
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Auditorias Totais
            </CardTitle>
            <FileText className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-display">1,284</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <span className="text-emerald-600 font-medium flex items-center">
                <ArrowUpRight className="w-3 h-3" /> +12%
              </span>
              mês passado
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-blue-500 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Empresas Ativas
            </CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-display">342</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <span className="text-emerald-600 font-medium flex items-center">
                <ArrowUpRight className="w-3 h-3" /> +4%
              </span>
              mês passado
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-orange-500 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Alertas de Risco
            </CardTitle>
            <AlertTriangle className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-display">24</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <span className="text-destructive font-medium flex items-center">
                <ArrowUpRight className="w-3 h-3" /> +2
              </span>
              novos hoje
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-emerald-500 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Conformidade
            </CardTitle>
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold font-display">98.2%</div>
            <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
              <span className="text-emerald-600 font-medium flex items-center">
                <ArrowUpRight className="w-3 h-3" /> +0.4%
              </span>
              média geral
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        {/* Recent Audits Table */}
        <Card className="col-span-4 shadow-sm">
          <CardHeader>
            <CardTitle className="font-display">Auditorias Recentes</CardTitle>
            <CardDescription>
              Últimas 5 auditorias realizadas no sistema.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Empresa</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead className="text-right">Ação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { company: "Madeireira Silva", status: "Conforme", date: "Hoje, 14:30", risk: "low" },
                  { company: "Agroflorestal Norte", status: "Em Análise", date: "Hoje, 11:20", risk: "medium" },
                  { company: "Exportadora Verde", status: "Risco Alto", date: "Ontem, 16:45", risk: "high" },
                  { company: "BioEnergia Sul", status: "Conforme", date: "Ontem, 09:15", risk: "low" },
                  { company: "Amazon Woods", status: "Conforme", date: "20 Jan, 15:00", risk: "low" },
                ].map((audit, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{audit.company}</TableCell>
                    <TableCell>
                      <Badge 
                        variant="outline" 
                        className={
                          audit.risk === "high" ? "border-destructive text-destructive bg-destructive/5" :
                          audit.risk === "medium" ? "border-orange-500 text-orange-500 bg-orange-500/5" :
                          "border-emerald-500 text-emerald-600 bg-emerald-500/5"
                        }
                      >
                        {audit.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground text-sm font-mono">{audit.date}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Quick Actions & Alerts */}
        <Card className="col-span-3 shadow-sm">
          <CardHeader>
            <CardTitle className="font-display">Alertas Críticos</CardTitle>
            <CardDescription>
              Atenção requerida para os seguintes itens.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { title: "Inconsistência Volumétrica", desc: "Exportadora Verde apresentou desvio de 15% no GF3.", time: "2h atrás", type: "critical" },
              { title: "Documentação Pendente", desc: "Agroflorestal Norte não enviou comprovante de pagamento.", time: "5h atrás", type: "warning" },
              { title: "Licença Expirando", desc: "Madeireira Silva tem licença válida até 25/01.", time: "1d atrás", type: "info" },
            ].map((alert, i) => (
              <div key={i} className="flex items-start gap-4 p-3 rounded-lg border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors">
                <div className={`mt-1 w-2 h-2 rounded-full ${
                  alert.type === "critical" ? "bg-destructive" :
                  alert.type === "warning" ? "bg-orange-500" :
                  "bg-blue-500"
                }`} />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{alert.title}</p>
                  <p className="text-xs text-muted-foreground">{alert.desc}</p>
                  <p className="text-[10px] text-muted-foreground/70 font-mono uppercase mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full mt-2">
              Ver Todos os Alertas
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
