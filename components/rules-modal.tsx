"use client"

import { useState } from "react"
import { X, ChevronDown, ChevronUp, Shield, Users, Car, Briefcase, MessageSquare, AlertTriangle, Gavel, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface RulesModalProps {
  isOpen: boolean
  onClose: () => void
  serverName: string
}

const rulesCategories = [
  {
    id: "gerais",
    title: "Regras Gerais",
    icon: Shield,
    rules: [
      {
        title: "1.1 - Respeito",
        content: "Todos os jogadores devem tratar uns aos outros com respeito. Insultos, discriminação, assédio ou qualquer forma de comportamento tóxico são estritamente proibidos."
      },
      {
        title: "1.2 - Metagaming (MG)",
        content: "É proibido usar informações obtidas fora do jogo (Discord, streams, etc.) para benefício dentro do RP. Seu personagem só pode saber o que aprendeu dentro do jogo."
      },
      {
        title: "1.3 - Powergaming (PG)",
        content: "Não force ações em outros jogadores sem dar a eles chance de reagir. Todas as ações devem ser realistas dentro do contexto do personagem."
      },
      {
        title: "1.4 - Random Deathmatch (RDM)",
        content: "Matar ou agredir outros jogadores sem motivo RP válido é proibido. Toda ação violenta deve ter uma justificativa dentro da narrativa."
      },
      {
        title: "1.5 - Vehicle Deathmatch (VDM)",
        content: "Usar veículos como armas para atropelar jogadores intencionalmente sem motivo RP é proibido."
      },
      {
        title: "1.6 - Fail RP",
        content: "Ações que quebram a imersão do roleplay, como pular de prédios sem consequências ou agir de forma não realista, são proibidas."
      },
      {
        title: "1.7 - Combat Log",
        content: "Desconectar durante uma situação de RP para evitar consequências é proibido e resultará em punição severa."
      }
    ]
  },
  {
    id: "interacao",
    title: "Interação entre Jogadores",
    icon: Users,
    rules: [
      {
        title: "2.1 - New Life Rule (NLR)",
        content: "Após morrer, seu personagem perde todas as memórias relacionadas à morte. Você não pode voltar ao local ou se vingar imediatamente."
      },
      {
        title: "2.2 - Fear RP",
        content: "Seu personagem deve demonstrar medo realista quando ameaçado. Se alguém aponta uma arma, você deve cooperar ou reagir de forma realista."
      },
      {
        title: "2.3 - Sequestros",
        content: "Sequestros devem ter motivo RP válido e duração máxima de 30 minutos. A vítima deve ter a chance de interagir durante o evento."
      },
      {
        title: "2.4 - Roubos",
        content: "Roubos devem ser conduzidos com roleplay de qualidade. Limite de 4 jogadores por ação. Proibido roubar jogadores recém-criados."
      },
      {
        title: "2.5 - Zonas Seguras",
        content: "Hospitais, delegacias e spawns iniciais são zonas seguras. Ações criminosas nesses locais são proibidas, exceto em eventos autorizados."
      }
    ]
  },
  {
    id: "veiculos",
    title: "Veículos e Condução",
    icon: Car,
    rules: [
      {
        title: "3.1 - Condução Realista",
        content: "Dirija de forma realista. Não use veículos para escalar montanhas impossíveis ou realizar manobras irreais."
      },
      {
        title: "3.2 - Perseguições",
        content: "Durante perseguições policiais, mantenha o RP. Evite entrar em áreas impossíveis ou usar bugs do mapa."
      },
      {
        title: "3.3 - Estacionamento",
        content: "Estacione veículos em locais apropriados. Bloquear acessos ou usar veículos para trollar é proibido."
      },
      {
        title: "3.4 - Modificações",
        content: "Modificações de veículos devem ser feitas em oficinas autorizadas. Veículos com modificações ilegais podem ser apreendidos."
      }
    ]
  },
  {
    id: "organizacoes",
    title: "Organizações e Facções",
    icon: Briefcase,
    rules: [
      {
        title: "4.1 - Criação de Facções",
        content: "Para criar uma facção oficial, é necessário submeter uma proposta à administração com no mínimo 5 membros ativos."
      },
      {
        title: "4.2 - Guerras de Facções",
        content: "Guerras entre facções devem ser declaradas formalmente e seguir as regras de engajamento. Limite de 6 membros por lado em confrontos."
      },
      {
        title: "4.3 - Território",
        content: "Territórios de facções devem ser respeitados. Invasões devem ter roleplay adequado e motivo válido."
      },
      {
        title: "4.4 - Alianças",
        content: "Alianças entre facções são permitidas, mas devem ser registradas. Máximo de 2 facções aliadas em um único confronto."
      },
      {
        title: "4.5 - Recrutamento",
        content: "O recrutamento deve ser feito através de RP. É proibido recrutar jogadores fora do servidor."
      }
    ]
  },
  {
    id: "comunicacao",
    title: "Comunicação",
    icon: MessageSquare,
    rules: [
      {
        title: "5.1 - Chat de Voz",
        content: "Use o chat de voz apenas para RP. Evite sons de fundo, músicas altas ou microfone aberto desnecessário."
      },
      {
        title: "5.2 - Idioma",
        content: "O idioma oficial do servidor é Português. Comunicação em outros idiomas é permitida em contextos de RP específicos."
      },
      {
        title: "5.3 - Rádio",
        content: "Use as frequências de rádio apropriadas para sua facção. Não interfira em comunicações de outras organizações."
      },
      {
        title: "5.4 - OOC",
        content: "Minimize conversas fora de personagem (OOC). Use canais apropriados para discussões que não fazem parte do RP."
      }
    ]
  },
  {
    id: "punicoes",
    title: "Punições",
    icon: AlertTriangle,
    rules: [
      {
        title: "6.1 - Sistema de Avisos",
        content: "O sistema de punições funciona com avisos progressivos: 1º Aviso (advertência), 2º Aviso (kick), 3º Aviso (ban temporário), 4º Aviso (ban permanente)."
      },
      {
        title: "6.2 - Apelações",
        content: "Jogadores banidos podem apelar através do Discord oficial. Apelações são analisadas em até 7 dias úteis."
      },
      {
        title: "6.3 - Infrações Graves",
        content: "Hacks, exploits, ou comportamento extremamente tóxico resultam em ban permanente imediato, sem direito a apelação."
      },
      {
        title: "6.4 - Denúncias",
        content: "Denúncias devem ser feitas com provas (vídeos ou screenshots). Denúncias falsas também são passíveis de punição."
      }
    ]
  },
  {
    id: "staff",
    title: "Equipe e Administração",
    icon: Gavel,
    rules: [
      {
        title: "7.1 - Decisões da Staff",
        content: "As decisões da equipe de moderação são finais. Discordar publicamente ou desrespeitar moderadores resultará em punição."
      },
      {
        title: "7.2 - Tickets",
        content: "Para resolver problemas, abra um ticket no Discord. Não interrompa moderadores durante seu RP ou trabalho."
      },
      {
        title: "7.3 - Eventos",
        content: "Eventos especiais podem ter regras temporárias. Fique atento aos anúncios da administração."
      },
      {
        title: "7.4 - Sugestões",
        content: "Sugestões para melhorias do servidor são bem-vindas através dos canais apropriados no Discord."
      }
    ]
  },
  {
    id: "empregos",
    title: "Empregos e Profissões",
    icon: Building2,
    rules: [
      {
        title: "8.1 - Empregos Legais",
        content: "Empregos como policial, médico, mecânico, etc., têm regras específicas. Consulte o guia de cada profissão."
      },
      {
        title: "8.2 - Corrupção",
        content: "Corrupção em cargos públicos é permitida com roleplay de qualidade, mas deve ser sutil e bem desenvolvida."
      },
      {
        title: "8.3 - Dupla Vida",
        content: "É possível manter uma vida dupla (emprego legal + atividades ilegais), desde que seja feito com RP coerente."
      },
      {
        title: "8.4 - Demissões",
        content: "Demissões de empregos públicos devem ser feitas através de RP ou por decisão administrativa em caso de quebra de regras."
      }
    ]
  }
]

export function RulesModal({ isOpen, onClose, serverName }: RulesModalProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("gerais")

  if (!isOpen) return null

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-card/95 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Shield className="h-6 w-6 text-primary" />
              <div className="absolute inset-0 blur-md bg-primary/30" />
            </div>
            <h2 
              className="text-xl md:text-2xl font-bold text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Regras - {serverName}
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="hover:bg-destructive/20 hover:text-destructive"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <ScrollArea className="h-[calc(90vh-100px)]">
          <div className="p-6 space-y-4">
            {rulesCategories.map((category) => {
              const Icon = category.icon
              const isExpanded = expandedCategory === category.id

              return (
                <div 
                  key={category.id}
                  className="border border-border rounded-xl overflow-hidden bg-secondary/30"
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <span 
                        className="text-lg font-semibold text-foreground"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {category.title}
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>

                  {/* Rules */}
                  {isExpanded && (
                    <div className="border-t border-border">
                      {category.rules.map((rule, index) => (
                        <div 
                          key={index}
                          className="p-4 border-b border-border/50 last:border-b-0 hover:bg-secondary/20 transition-colors"
                        >
                          <h4 className="font-semibold text-primary mb-2">
                            {rule.title}
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {rule.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}

            {/* Warning Footer */}
            <div className="mt-8 p-4 rounded-xl bg-destructive/10 border border-destructive/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-destructive mb-1">Aviso Importante</h4>
                  <p className="text-sm text-muted-foreground">
                    O desconhecimento das regras não é desculpa para infrações. Ao entrar no servidor Atenas Roleplay, você concorda automaticamente com todas as regras listadas acima. A administração reserva-se o direito de atualizar as regras sem aviso prévio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
