"use client"

import Image from "next/image"
import { AlertTriangle, Info, CheckCircle2, Ban, ChevronRight } from "lucide-react"

interface RulesContentProps {
  activeSection: string
}

const sectionImages: Record<string, string> = {
  gerais: "/images/regras-gerais.jpg",
  interacao: "/images/interacao.jpg",
  veiculos: "/images/veiculos.jpg",
  organizacoes: "/images/organizacoes.jpg",
  comunicacao: "/images/comunicacao.jpg",
  punicoes: "/images/punicoes.jpg",
  staff: "/images/staff.jpg",
  empregos: "/images/empregos.jpg",
  acoes: "/images/regras-gerais.jpg",
  sequestro: "/images/interacao.jpg",
  caixa: "/images/veiculos.jpg",
  fuga: "/images/veiculos.jpg",
  rua: "/images/interacao.jpg",
  invasao: "/images/organizacoes.jpg"
}

const rulesData: Record<string, { title: string; subtitle: string; description: string; rules: Array<{ id: string; title: string; content: string; type?: "warning" | "info" | "success" | "danger" }> }> = {
  gerais: {
    title: "Regras Gerais",
    subtitle: "Fundamentos",
    description: "Regras fundamentais para a convivência e o bom andamento do Roleplay.",
    rules: [
      { id: "1.1", title: "Respeito Mútuo", content: "Proibido qualquer forma de toxicidade ou discriminação.", type: "danger" },
      { id: "1.2", title: "Bugs e Hacks", content: "Uso de trapaças resulta em banimento permanente.", type: "danger" }
    ]
  },
  acoes: {
    title: "Regras de Ações",
    subtitle: "Assaltos e Roubos",
    description: "Normas básicas para a realização de ações criminosas estruturadas.",
    rules: [
      { id: "9.1", title: "Animações e Binds", content: "Proibido utilizar comandos de animação ou binds após o FF da ação ou após 2 disparos[cite: 82].", type: "danger" },
      { id: "9.2", title: "Imunidade de Trabalho", content: "Trabalhadores uniformizados e em serviço possuem imunidade[cite: 84].", type: "info" },
      { id: "9.3", title: "QRR (Reforço)", content: "Só é permitido solicitar QRR antes de ser rendido. Após ser rendido, é proibido[cite: 87].", type: "warning" },
      { id: "9.4", title: "Capacetes", content: "Proibido o uso de capacetes durante as ações para ambos os lados[cite: 93].", type: "danger" },
      { id: "9.5", title: "Negociações", content: "Devem ocorrer via frequência de rádio. A polícia deve ser informada da frequência no início[cite: 107, 108].", type: "info" }
    ]
  },
  sequestro: {
    title: "Sequestros",
    subtitle: "Cativeiros e Resgates",
    description: "Diretrizes para a privação de liberdade de civis e oficiais.",
    rules: [
      { id: "10.1", title: "Negociação Policial", content: "Permitida apenas a fuga limpa. Proibido exigir dinheiro ou recompensa pela liberação[cite: 111, 113].", type: "warning" },
      { id: "10.2", title: "Membros de Facção", content: "Pode ser cobrado dinheiro ou item para a liberação de membros de facções rivais[cite: 115].", type: "success" },
      { id: "10.3", title: "Sequestro de Oficiais", content: "Exige contexto forte, como a liberação de um líder da facção que esteja preso[cite: 116].", type: "danger" }
    ]
  },
  caixa: {
    title: "Caixa Eletrônico",
    subtitle: "Ação Livre Tipo 01",
    description: "Regras para roubos rápidos em caixas eletrônicos (Caixinha).",
    rules: [
      { id: "11.1", title: "Chegada da Polícia", content: "O roubo deve ser cancelado e a fuga iniciada imediatamente[cite: 120].", type: "warning" },
      { id: "11.2", title: "Contingente", content: "Bandidos: 01 a 04. Polícia: 02 a 06 oficiais[cite: 123, 124].", type: "info" },
      { id: "11.3", title: "Tempo de Fuga", content: "Policiais devem dar o tempo necessário para os bandidos iniciarem a fuga[cite: 121].", type: "success" }
    ]
  },
  fuga: {
    title: "Ações de Fuga",
    subtitle: "Perseguições Limpas",
    description: "Normas para fugas sem uso de armamento (Fuga Limpa).",
    rules: [
      { id: "12.1", title: "Proibição de Armas", content: "Ações livres de fuga não permitem o uso de NENHUMA arma de fogo[cite: 126].", type: "danger" },
      { id: "12.2", title: "Código 3", content: "Proibido em colisões. Permitido apenas se houver atropelamento ou morte de cidadão[cite: 127].", type: "warning" },
      { id: "12.3", title: "Apoio (QRR)", content: "Não é permitido solicitar apoio (QRR) durante as Ações Livres Tipo 01[cite: 128].", type: "danger" }
    ]
  },
  rua: {
    title: "Ações de Rua",
    subtitle: "Confrontos e QRU",
    description: "Regras para tiroteios e abordagens em vias públicas.",
    rules: [
      { id: "13.1", title: "Voz e Desmaio", content: "Voz no máximo (Alto). Se desmaiar, não pode retornar à ação nem buscar pertences[cite: 132, 133].", type: "danger" },
      { id: "13.2", title: "Paramédicos", content: "Com a chegada do SAMU, a ação deve ser encerrada imediatamente[cite: 137].", type: "info" },
      { id: "13.3", title: "QRU de Disparo", content: "Se a polícia for recebida a tiros ao chegar em disparos, não será considerado RDM[cite: 144].", type: "warning" },
      { id: "13.4", title: "Helicóptero", content: "A polícia pode utilizar no máximo 01 helicóptero com 01 atirador[cite: 134].", type: "info" }
    ]
  },
  invasao: {
    title: "Invasão e Pacificação",
    subtitle: "Operações Especiais",
    description: "Regras para intervenções policiais em sedes de organizações.",
    rules: [
      { id: "14.1", title: "Pacificação", content: "Produto trava por 5 dias. Se a facção perder, o baú é limpo[cite: 147, 150].", type: "danger" },
      { id: "14.2", title: "Invasão", content: "Comércio paralisado por 12 horas. Máximo de 1 invasão por semana por grupo[cite: 151, 152].", type: "warning" },
      { id: "14.3", title: "Membros Extras", content: "Após o início da ação, nenhum membro extra pode entrar na cena[cite: 154].", type: "danger" }
    ]
  }
}

export function RulesContent({ activeSection }: RulesContentProps) {
  const section = rulesData[activeSection]
  const sectionImage = sectionImages[activeSection]

  if (!section) {
    return <div className="p-8 text-center text-muted-foreground">Seção não encontrada</div>
  }

  const getIcon = (type?: string) => {
    switch (type) {
      case "danger": return <Ban className="h-5 w-5 text-red-500" />
      case "warning": return <AlertTriangle className="h-5 w-5 text-amber-500" />
      case "success": return <CheckCircle2 className="h-5 w-5 text-emerald-500" />
      default: return <Info className="h-5 w-5 text-primary" />
    }
  }

  return (
    <div className="min-h-screen">
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image src={sectionImage || "/images/regras-gerais.jpg"} alt={section.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
            <ChevronRight className="h-4 w-4" /> {section.subtitle}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{section.title}</h1>
          <p className="text-muted-foreground max-w-2xl">{section.description}</p>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        <div className="grid gap-4">
          {section.rules.map((rule) => (
            <article key={rule.id} className="group rounded-xl border border-border bg-card/50 p-5 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-muted/50">
                  {getIcon(rule.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">{rule.id}</span>
                    <h3 className="font-semibold">{rule.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{rule.content}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}