"use client"

import Image from "next/image"
import { AlertTriangle, Info, CheckCircle2, Ban, ChevronRight, Gavel, Skull, Car, Siren, ShieldAlert } from "lucide-react"

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
  // Novas categorias
  acoes: "/images/acoes.jpg",
  sequestro: "/images/sequestro.jpg",
  caixa: "/images/caixa.jpg",
  fuga: "/images/fuga.jpg",
  rua: "/images/acao-rua.jpg",
  invasao: "/images/invasao.jpg",
}

const rulesData: Record<string, { title: string; subtitle: string; description: string; rules: Array<{ id: string; title: string; content: string; type?: "warning" | "info" | "success" | "danger" }> }> = {
  // ... (categorias anteriores mantidas)
  
  acoes: {
    title: "Regras de Ações",
    subtitle: "Assaltos e Roubos",
    description: "Normas básicas para a realização de ações criminosas estruturadas[cite: 6].",
    rules: [
      {
        id: "9.1",
        title: "Proibição de Animações",
        content: "É proibido utilizar comandos de animação ou binds após o FF (Fogo Forçado) da ação ou após 2 disparos da polícia ou bandidos[cite: 6].",
        type: "danger"
      },
      {
        id: "9.2",
        title: "Saque e Desova",
        content: "É permitido saquear pessoas abatidas caso estejam desacordadas e desovar corpos para outros locais[cite: 6].",
        type: "success"
      },
      {
        id: "9.3",
        title: "Imunidade de Trabalhadores",
        content: "Trabalhadores uniformizados, em serviço e com veículo de trabalho possuem imunidade. A proteção cai se estiverem fora de serviço ou sem uniforme[cite: 6].",
        type: "info"
      },
      {
        id: "9.4",
        title: "Negociação e Reféns",
        content: "Negociações devem ser via rádio. Máximo de R$150.000 de dinheiro sujo por refém. Ações grandes permitem até 5 reféns; pequenas até 3[cite: 6].",
        type: "warning"
      }
    ]
  },
  sequestro: {
    title: "Sequestros",
    subtitle: "Cativeiros e Resgates",
    description: "Diretrizes para a privação de liberdade de civis e oficiais[cite: 2].",
    rules: [
      {
        id: "10.1",
        title: "Fuga Limpa",
        content: "Em negociações com a polícia, é permitida apenas a fuga limpa. Não é permitido exigir dinheiro pela liberação do refém[cite: 2].",
        type: "warning"
      },
      {
        id: "10.2",
        title: "Sequestro de Facção",
        content: "Ao sequestrar membros de facções rivais, é permitido cobrar dinheiro ou itens para a liberação[cite: 2].",
        type: "success"
      },
      {
        id: "10.3",
        title: "Sequestro de Oficiais",
        content: "Deve haver contexto forte, como a troca de um oficial pela liberação de um líder ou gerente de facção preso[cite: 2].",
        type: "danger"
      }
    ]
  },
  caixa: {
    title: "Caixa Eletrônico",
    subtitle: "Roubos Rápidos (Caixinha)",
    description: "Regras para assaltos a caixas eletrônicos (Ação Livre Tipo 01)[cite: 3, 4].",
    rules: [
      {
        id: "11.1",
        title: "Chegada da Polícia",
        content: "Ao assaltar, se a polícia chegar, o roubo deve ser cancelado e a fuga iniciada imediatamente. A polícia deve dar tempo para a fuga começar[cite: 3, 4].",
        type: "warning"
      },
      {
        id: "11.2",
        title: "Contingente Permitido",
        content: "Bandidos: 01 a 04 membros (01 veículo). Polícia: 02 a 06 oficiais (até 03 viaturas)[cite: 3, 4].",
        type: "info"
      }
    ]
  },
  fuga: {
    title: "Ações de Fuga",
    subtitle: "Perseguições Limpas",
    description: "Normas para fugas em ações livres sem o uso de armas de fogo[cite: 5].",
    rules: [
      {
        id: "12.1",
        title: "Fuga 100% Limpa",
        content: "Não é permitido o uso de armas de fogo. Se houver colisão acidental, a polícia não pode atirar nos pneus (Código 3)[cite: 5].",
        type: "success"
      },
      {
        id: "12.2",
        title: "Atropelamentos",
        content: "Se houver atropelamento ou morte de cidadão por culpa do bandido, a polícia está autorizada a usar Código 3 nos pneus[cite: 5].",
        type: "danger"
      }
    ]
  },
  rua: {
    title: "Ações de Rua",
    subtitle: "Confrontos Urbanos",
    description: "Regras para tiroteios e abordagens em vias públicas[cite: 1].",
    rules: [
      {
        id: "13.1",
        title: "Voz e Desmaio",
        content: "Obrigatório alcance de voz no máximo (Alto). Se desmaiar, o player não pode retornar nem buscar pertences/veículos[cite: 1].",
        type: "danger"
      },
      {
        id: "13.2",
        title: "Apoio Aéreo",
        content: "A polícia pode utilizar no máximo 01 helicóptero com 01 atirador em ações de rua[cite: 1].",
        type: "warning"
      },
      {
        id: "13.3",
        title: "Paramédicos",
        content: "Com a chegada do paramédico, a ação deve ser encerrada imediatamente. Não é permitido continuar RP de resgate[cite: 1].",
        type: "info"
      }
    ]
  },
  invasao: {
    title: "Invasão e Pacificação",
    subtitle: "Operações Especiais",
    description: "Regras para intervenções policiais em sedes de organizações[cite: 7].",
    rules: [
      {
        id: "14.1",
        title: "Pacificação",
        content: "Ação de alto impacto que exige dossiê e presença dos líderes. Em caso de derrota, o baú da organização é limpo e o produto trava por 5 dias[cite: 7].",
        type: "danger"
      },
      {
        id: "14.2",
        title: "Invasão",
        content: "Objetivo de neutralizar ameaças imediatas. O comércio trava por 12 horas. Máximo de 1 invasão por semana por grupo[cite: 7].",
        type: "warning"
      }
    ]
  }
}

export function RulesContent({ activeSection }: RulesContentProps) {
  const section = rulesData[activeSection]
  const sectionImage = sectionImages[activeSection]

  if (!section) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Seção não encontrada
      </div>
    )
  }

  const getIcon = (type?: string) => {
    switch (type) {
      case "danger":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20">
            <Ban className="h-5 w-5 text-red-500" />
          </div>
        )
      case "warning":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
          </div>
        )
      case "success":
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          </div>
        )
      default:
        return (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
            <Info className="h-5 w-5 text-primary" />
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={sectionImage || "/images/default-rules.jpg"}
          alt={section.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
          <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
            <ChevronRight className="h-4 w-4" />
            {section.subtitle}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{section.title}</h1>
          <p className="text-muted-foreground max-w-2xl">{section.description}</p>
        </div>
      </div>

      {/* Rules List */}
      <div className="p-6 lg:p-8">
        <div className="grid gap-4">
          {section.rules.map((rule) => (
            <article
              key={rule.id}
              className="group rounded-xl border border-border bg-card/50 p-5 transition-all duration-300 hover:bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                {getIcon(rule.type)}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-0.5 rounded">
                      {rule.id}
                    </span>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {rule.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {rule.content}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
          <p className="text-sm text-muted-foreground text-center">
            Ao entrar no servidor <span className="text-primary font-semibold">Atenas Roleplay</span>, você concorda automaticamente com todas as regras listadas acima.
            O desconhecimento das regras não isenta o jogador de punição.
          </p>
        </div>
      </div>
    </div>
  )
}