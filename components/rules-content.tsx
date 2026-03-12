"use client"

import { AlertTriangle, Info, CheckCircle2 } from "lucide-react"

interface RulesContentProps {
  activeSection: string
}

const rulesData: Record<string, { title: string; description: string; rules: Array<{ title: string; content: string; type?: "warning" | "info" | "success" }> }> = {
  gerais: {
    title: "Regras Gerais",
    description: "Regras fundamentais que todos os jogadores devem seguir no servidor Atenas Roleplay.",
    rules: [
      {
        title: "1.1 Respeito",
        content: "Todos os jogadores devem tratar uns aos outros com respeito. Insultos, discriminacao, assedio ou qualquer forma de comportamento toxico nao serao tolerados.",
        type: "warning"
      },
      {
        title: "1.2 Roleplay Realista",
        content: "Mantenha seu roleplay o mais realista possivel. Suas acoes devem fazer sentido dentro do contexto do jogo e da vida real.",
        type: "info"
      },
      {
        title: "1.3 Uso de Bugs/Exploits",
        content: "E estritamente proibido usar bugs, glitches ou exploits para obter vantagens. Qualquer bug encontrado deve ser reportado imediatamente a staff.",
        type: "warning"
      },
      {
        title: "1.4 Conta Pessoal",
        content: "Cada jogador deve ter apenas uma conta. O uso de multiplas contas (multiaccounting) e proibido e resultara em banimento.",
      },
      {
        title: "1.5 Software de Terceiros",
        content: "O uso de hacks, cheats, mods nao autorizados ou qualquer software que de vantagem injusta e proibido e resultara em ban permanente.",
        type: "warning"
      },
      {
        title: "1.6 AFK em Locais Publicos",
        content: "Evite ficar AFK em locais publicos ou movimentados. Se precisar se ausentar, va para um local apropriado ou desconecte.",
      }
    ]
  },
  interacao: {
    title: "Interacao entre Jogadores",
    description: "Regras que governam como os jogadores devem interagir entre si durante o roleplay.",
    rules: [
      {
        title: "2.1 RDM (Random Deathmatch)",
        content: "E proibido matar outros jogadores sem motivo de roleplay valido. Toda acao letal deve ter uma justificativa e contexto adequado.",
        type: "warning"
      },
      {
        title: "2.2 VDM (Vehicle Deathmatch)",
        content: "Usar veiculos para atropelar jogadores sem motivo de roleplay e proibido. Veiculos nao sao armas.",
        type: "warning"
      },
      {
        title: "2.3 Metagaming",
        content: "Usar informacoes obtidas fora do jogo (streams, discord, etc.) para beneficio dentro do roleplay e estritamente proibido.",
        type: "warning"
      },
      {
        title: "2.4 Powergaming",
        content: "Forcar acoes em outros jogadores sem dar chance de reacao, ou fazer coisas impossiveis na vida real, e proibido.",
        type: "warning"
      },
      {
        title: "2.5 Fear RP",
        content: "Voce deve demonstrar medo quando sua vida estiver em perigo. Se alguem apontar uma arma para voce, aja de acordo.",
        type: "info"
      },
      {
        title: "2.6 New Life Rule (NLR)",
        content: "Apos morrer, voce esquece todos os eventos que levaram a sua morte. Nao pode voltar ao local da morte por 15 minutos.",
        type: "info"
      },
      {
        title: "2.7 Combat Logging",
        content: "Desconectar durante uma situacao de roleplay para evitar consequencias e proibido e resultara em punicao.",
        type: "warning"
      },
      {
        title: "2.8 Revenge Kill",
        content: "Apos aplicar NLR, voce nao pode buscar vinganca contra quem te matou usando informacoes da vida anterior.",
      }
    ]
  },
  veiculos: {
    title: "Veiculos",
    description: "Regras relacionadas ao uso de veiculos no servidor.",
    rules: [
      {
        title: "3.1 Conducao Realista",
        content: "Dirija de forma realista. Evite subir em calcadas, bater em outros veiculos propositalmente ou dirigir de forma irresponsavel sem motivo.",
        type: "info"
      },
      {
        title: "3.2 Veiculos em Perseguicoes",
        content: "Durante perseguicoes policiais, mantenha o roleplay realista. Nao use veiculos off-road onde nao faz sentido.",
      },
      {
        title: "3.3 Estacionamento",
        content: "Estacione seus veiculos em locais apropriados. Veiculos abandonados em locais publicos podem ser removidos.",
      },
      {
        title: "3.4 Roubo de Veiculos",
        content: "O roubo de veiculos deve ser feito com roleplay adequado. Nao roube veiculos sem interacao com o dono se ele estiver presente.",
        type: "info"
      },
      {
        title: "3.5 Veiculos de Emergencia",
        content: "Nao use veiculos de emergencia (policia, ambulancia, bombeiros) se voce nao fizer parte dessas organizacoes.",
        type: "warning"
      }
    ]
  },
  organizacoes: {
    title: "Organizacoes",
    description: "Regras para faccoes, gangues e organizacoes dentro do servidor.",
    rules: [
      {
        title: "4.1 Criacao de Organizacoes",
        content: "Novas organizacoes devem ser aprovadas pela staff. Submeta uma proposta detalhada antes de iniciar qualquer atividade.",
        type: "info"
      },
      {
        title: "4.2 Territorios",
        content: "Respeite os territorios de outras organizacoes. Invasoes devem ter motivo de roleplay e serem comunicadas a staff.",
      },
      {
        title: "4.3 Guerras entre Faccoes",
        content: "Guerras devem ser declaradas formalmente e ter regras acordadas entre as partes. A staff deve ser notificada.",
        type: "info"
      },
      {
        title: "4.4 Recrutamento",
        content: "O recrutamento deve ser feito atraves de roleplay. Evite recrutar jogadores novos sem orientacao adequada.",
      },
      {
        title: "4.5 Aliancas",
        content: "Aliancas entre organizacoes sao permitidas, mas devem fazer sentido no contexto do roleplay.",
      },
      {
        title: "4.6 Limites de Membros",
        content: "Cada organizacao tem um limite de membros. Consulte a staff para saber o limite da sua categoria.",
        type: "info"
      }
    ]
  },
  comunicacao: {
    title: "Comunicacao",
    description: "Regras sobre comunicacao no jogo e fora dele.",
    rules: [
      {
        title: "5.1 Chat de Voz",
        content: "Use o chat de voz apropriadamente. Evite gritar, usar sons irritantes ou music sharing sem contexto de RP.",
      },
      {
        title: "5.2 Linguagem",
        content: "Mantenha a linguagem apropriada. Xingamentos excessivos fora do contexto de RP nao sao permitidos.",
        type: "warning"
      },
      {
        title: "5.3 Radio/Telefone",
        content: "Use radio e telefone de forma realista. Nao transmita informacoes que seu personagem nao teria.",
      },
      {
        title: "5.4 OOC (Out of Character)",
        content: "Minimize conversas OOC durante o roleplay. Use os canais apropriados para discussoes fora do personagem.",
        type: "info"
      },
      {
        title: "5.5 Discord/Teamspeak",
        content: "Informacoes do Discord ou Teamspeak nao podem ser usadas no jogo. Isso caracteriza metagaming.",
        type: "warning"
      }
    ]
  },
  punicoes: {
    title: "Punicoes",
    description: "Sistema de punicoes aplicadas no servidor Atenas Roleplay.",
    rules: [
      {
        title: "6.1 Sistema de Warns",
        content: "Infracoes menores resultam em warns. Acumular 3 warns resulta em ban temporario. 5 warns resultam em ban permanente.",
        type: "warning"
      },
      {
        title: "6.2 Kicks",
        content: "Kicks sao aplicados para infracoes leves ou como aviso. Nao contam como warn, mas ficam registrados.",
      },
      {
        title: "6.3 Bans Temporarios",
        content: "Bans temporarios variam de 1 dia a 30 dias dependendo da gravidade da infracao.",
        type: "warning"
      },
      {
        title: "6.4 Bans Permanentes",
        content: "Aplicados para infracoes graves como hacking, assedio grave, ou acumulo de punicoes.",
        type: "warning"
      },
      {
        title: "6.5 Apelacoes",
        content: "Jogadores podem apelar suas punicoes atraves do Discord oficial. Apelacoes sao analisadas pela staff senior.",
        type: "success"
      },
      {
        title: "6.6 Reducao de Pena",
        content: "Em casos especificos, bans podem ser reduzidos apos analise. Bom comportamento anterior e considerado.",
        type: "info"
      }
    ]
  },
  staff: {
    title: "Staff",
    description: "Regras relacionadas a equipe administrativa do servidor.",
    rules: [
      {
        title: "7.1 Respeito a Staff",
        content: "Trate todos os membros da staff com respeito. Eles estao aqui para ajudar a manter o servidor funcionando.",
        type: "info"
      },
      {
        title: "7.2 Decisoes da Staff",
        content: "As decisoes da staff sao finais durante o jogo. Se discordar, use os canais apropriados para contestar depois.",
      },
      {
        title: "7.3 Reportes",
        content: "Use o sistema de tickets para reportar problemas. Nao confronte jogadores diretamente sobre infracoes.",
        type: "success"
      },
      {
        title: "7.4 Falsas Denuncias",
        content: "Fazer denuncias falsas contra outros jogadores resultara em punicao para quem denunciou.",
        type: "warning"
      },
      {
        title: "7.5 Contato com Staff",
        content: "Para assuntos urgentes, use /report no jogo. Para outros assuntos, use o Discord oficial.",
        type: "info"
      }
    ]
  },
  empregos: {
    title: "Empregos",
    description: "Regras especificas para empregos e profissoes no servidor.",
    rules: [
      {
        title: "8.1 Policia",
        content: "Policiais devem seguir protocolos realistas. Abuso de autoridade e proibido e sera punido.",
        type: "warning"
      },
      {
        title: "8.2 EMS/Medicos",
        content: "Medicos devem atender a todos igualmente. Recusar atendimento sem motivo de RP e proibido.",
        type: "info"
      },
      {
        title: "8.3 Mecanicos",
        content: "Mecanicos devem cobrar precos justos e fornecer servico de qualidade no roleplay.",
      },
      {
        title: "8.4 Taxistas/Motoristas",
        content: "Motoristas nao podem se envolver em atividades criminosas enquanto em servico.",
      },
      {
        title: "8.5 Empregos Ilegais",
        content: "Atividades ilegais devem ser feitas com roleplay adequado. Nao force outros jogadores a participar.",
        type: "warning"
      },
      {
        title: "8.6 Abandono de Emprego",
        content: "Se precisar sair durante o servico, avise sua organizacao. Abandonos frequentes podem resultar em demissao.",
      }
    ]
  }
}

export function RulesContent({ activeSection }: RulesContentProps) {
  const section = rulesData[activeSection]

  if (!section) {
    return (
      <div className="p-8 text-center text-muted-foreground">
        Secao nao encontrada
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/95 backdrop-blur">
        <div className="px-6 py-4 lg:px-8">
          <h1 className="text-xl font-semibold text-foreground">{section.title}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{section.description}</p>
        </div>
      </header>

      {/* Rules List */}
      <div className="p-6 lg:p-8">
        <div className="space-y-4">
          {section.rules.map((rule, index) => (
            <article
              key={index}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-border/80"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5">
                  {rule.type === "warning" ? (
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10">
                      <AlertTriangle className="h-4 w-4 text-amber-500" />
                    </div>
                  ) : rule.type === "success" ? (
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    </div>
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10">
                      <Info className="h-4 w-4 text-blue-500" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{rule.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {rule.content}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
