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
}

const rulesData: Record<string, { title: string; subtitle: string; description: string; rules: Array<{ id: string; title: string; content: string; type?: "warning" | "info" | "success" | "danger" }> }> = {
  gerais: {
    title: "Regras Gerais",
    subtitle: "Fundamentos do Servidor",
    description: "Regras fundamentais que todos os jogadores devem seguir para manter a qualidade do roleplay no servidor Atenas Roleplay.",
    rules: [
      {
        id: "1.1",
        title: "Respeito Mutuo",
        content: "Todos os jogadores devem tratar uns aos outros com respeito, independentemente de cargo, tempo de servidor ou nivel de experiencia. Insultos, discriminacao por raca, genero, orientacao sexual, religiao, assedio ou qualquer forma de comportamento toxico resultarao em punicao imediata.",
        type: "danger"
      },
      {
        id: "1.2",
        title: "Roleplay Realista e Coerente",
        content: "Mantenha seu roleplay o mais realista e coerente possivel. Suas acoes devem fazer sentido dentro do contexto do jogo e da vida real. Crie uma historia para seu personagem e mantenha-a consistente.",
        type: "info"
      },
      {
        id: "1.3",
        title: "Uso de Bugs, Glitches e Exploits",
        content: "E estritamente proibido usar bugs, glitches, exploits ou qualquer falha do jogo para obter vantagens. Qualquer bug encontrado deve ser reportado imediatamente a equipe de staff atraves de ticket no Discord. Jogadores que reportarem bugs serao recompensados.",
        type: "danger"
      },
      {
        id: "1.4",
        title: "Conta Pessoal e Intransferivel",
        content: "Cada jogador deve ter apenas uma conta. O uso de multiplas contas (multiaccounting) e proibido e resultara em banimento de todas as contas. Compartilhar conta com outros jogadores tambem e proibido.",
        type: "warning"
      },
      {
        id: "1.5",
        title: "Software de Terceiros e Modificacoes",
        content: "O uso de hacks, cheats, mods nao autorizados, macros, autoclickers ou qualquer software que de vantagem injusta sobre outros jogadores e estritamente proibido e resultara em ban permanente sem direito a apelacao.",
        type: "danger"
      },
      {
        id: "1.6",
        title: "AFK e Ausencias",
        content: "Evite ficar AFK em locais publicos, movimentados ou durante interacoes de roleplay. Se precisar se ausentar, va para um local apropriado (casa, hotel) ou desconecte do servidor. AFK farming e proibido.",
        type: "info"
      },
      {
        id: "1.7",
        title: "Idade Minima",
        content: "E necessario ter no minimo 16 anos para jogar no servidor Atenas Roleplay. Jogadores que aparentarem ser menores de idade poderao ser solicitados a comprovar idade.",
        type: "warning"
      }
    ]
  },
  interacao: {
    title: "Interacao entre Jogadores",
    subtitle: "Roleplay e Convivencia",
    description: "Regras que governam como os jogadores devem interagir entre si durante o roleplay para garantir uma experiencia imersiva e justa para todos.",
    rules: [
      {
        id: "2.1",
        title: "RDM - Random Deathmatch",
        content: "E proibido matar outros jogadores sem motivo de roleplay valido e bem desenvolvido. Toda acao letal deve ter uma justificativa clara, contexto adequado e desenvolvimento previo. Matar jogadores aleatoriamente resultara em punicao severa.",
        type: "danger"
      },
      {
        id: "2.2",
        title: "VDM - Vehicle Deathmatch",
        content: "Usar veiculos como armas para atropelar jogadores intencionalmente sem motivo de roleplay e estritamente proibido. Veiculos sao meios de transporte, nao armas. Excecao: situacoes de fuga onde nao ha outra opcao.",
        type: "danger"
      },
      {
        id: "2.3",
        title: "Metagaming",
        content: "Usar informacoes obtidas fora do jogo (streams, Discord, WhatsApp, conversas de voz externas) para beneficio dentro do roleplay e estritamente proibido. Seu personagem so sabe o que ele vivenciou no jogo.",
        type: "danger"
      },
      {
        id: "2.4",
        title: "Powergaming",
        content: "Forcar acoes em outros jogadores sem dar chance de reacao, fazer coisas impossiveis na vida real, ou negar roleplay de outros jogadores e proibido. Sempre de chance do outro jogador reagir usando /me e /do.",
        type: "danger"
      },
      {
        id: "2.5",
        title: "Fear RP - Valorize sua Vida",
        content: "Voce deve demonstrar medo quando sua vida estiver em perigo real. Se alguem apontar uma arma para voce em desvantagem numerica ou posicional, aja de acordo. Sua vida e valiosa - nao seja heroi em situacoes impossiveis.",
        type: "warning"
      },
      {
        id: "2.6",
        title: "New Life Rule (NLR)",
        content: "Apos morrer e ser atendido no hospital, voce esquece TODOS os eventos que levaram a sua morte. Nao pode voltar ao local da morte por 30 minutos e nao pode ter vinganca baseada em eventos da vida anterior.",
        type: "warning"
      },
      {
        id: "2.7",
        title: "Combat Logging",
        content: "Desconectar do servidor durante uma situacao de roleplay ativa para evitar consequencias e proibido. Se voce cair por problemas tecnicos, deve retornar e continuar a cena ou avisar a staff.",
        type: "danger"
      },
      {
        id: "2.8",
        title: "Revenge Kill (RK)",
        content: "Apos aplicar a New Life Rule, voce nao pode buscar vinganca contra quem te matou usando informacoes ou sentimentos da vida anterior. Seu personagem nao sabe quem o matou.",
        type: "warning"
      },
      {
        id: "2.9",
        title: "Sequestros e Assaltos",
        content: "Sequestros devem ter no minimo 4 policiais online. Assaltos a jogadores devem ter limite de valor e tempo adequado de roleplay. Nao e permitido sequestrar o mesmo jogador mais de uma vez em 24 horas.",
        type: "info"
      },
      {
        id: "2.10",
        title: "Safe Zones",
        content: "Delegacias, hospitais e spawns iniciais sao zonas seguras. Nao e permitido iniciar acoes criminosas ou violentas nessas areas. Perseguicoes podem passar por essas areas, mas nao devem terminar nelas.",
        type: "info"
      }
    ]
  },
  veiculos: {
    title: "Veiculos",
    subtitle: "Regras de Transito e Conducao",
    description: "Regras relacionadas ao uso de veiculos terrestres, aereos e aquaticos no servidor Atenas Roleplay.",
    rules: [
      {
        id: "3.1",
        title: "Conducao Realista",
        content: "Dirija de forma realista respeitando as leis de transito quando nao houver motivo para nao faze-lo. Evite subir em calcadas, bater em outros veiculos propositalmente, fazer manobras impossiveis ou dirigir em alta velocidade sem motivo.",
        type: "info"
      },
      {
        id: "3.2",
        title: "Veiculos em Perseguicoes",
        content: "Durante perseguicoes policiais, mantenha o roleplay realista. Nao use veiculos esportivos em terrenos off-road, nao faca saltos impossiveis e respeite os limites fisicos do veiculo.",
        type: "info"
      },
      {
        id: "3.3",
        title: "Estacionamento",
        content: "Estacione seus veiculos em locais apropriados como estacionamentos, garagens ou vagas na rua. Veiculos abandonados em locais publicos ou bloqueando passagem podem ser removidos pela prefeitura.",
        type: "info"
      },
      {
        id: "3.4",
        title: "Roubo de Veiculos",
        content: "O roubo de veiculos deve ser feito com roleplay adequado. Se o dono estiver presente, deve haver interacao. Nao e permitido roubar veiculos em Safe Zones ou veiculos de emergencia sem motivo extremo.",
        type: "warning"
      },
      {
        id: "3.5",
        title: "Veiculos de Emergencia",
        content: "Nao use veiculos de emergencia (policia, ambulancia, bombeiros) se voce nao fizer parte dessas organizacoes. Roubar esses veiculos so e permitido em situacoes extremas de roleplay.",
        type: "danger"
      },
      {
        id: "3.6",
        title: "Veiculos Aereos",
        content: "Helicopteros e avioes so podem ser pilotados por jogadores com licenca de piloto. Pousos em areas urbanas sem autorizacao e uso irresponsavel resultarao em apreensao do veiculo e punicao.",
        type: "warning"
      },
      {
        id: "3.7",
        title: "Pit Maneuver e Batidas",
        content: "Manobras PIT e batidas intencionais em alta velocidade sao perigosas e devem ser usadas apenas pela policia em perseguicoes. Civis nao devem realizar essas manobras.",
        type: "warning"
      }
    ]
  },
  organizacoes: {
    title: "Organizacoes",
    subtitle: "Faccoes e Grupos",
    description: "Regras para faccoes criminosas, gangues, mafias e organizacoes legais dentro do servidor Atenas Roleplay.",
    rules: [
      {
        id: "4.1",
        title: "Criacao de Organizacoes",
        content: "Novas organizacoes devem ser aprovadas pela staff antes de qualquer atividade oficial. Submeta uma proposta detalhada incluindo historia, hierarquia, objetivos e regras internas atraves do Discord.",
        type: "info"
      },
      {
        id: "4.2",
        title: "Territorios e Dominios",
        content: "Cada organizacao pode ter territorios definidos. Respeite os territorios de outras organizacoes. Invasoes e disputas territoriais devem ter motivo de roleplay solido e serem comunicadas a staff previamente.",
        type: "warning"
      },
      {
        id: "4.3",
        title: "Guerras entre Faccoes",
        content: "Guerras devem ser declaradas formalmente com regras acordadas entre as liderancas. A staff deve ser notificada e aprovar a guerra. Deve haver periodo de paz apos o fim de cada conflito.",
        type: "danger"
      },
      {
        id: "4.4",
        title: "Recrutamento",
        content: "O recrutamento deve ser feito atraves de roleplay elaborado. Novos membros devem passar por periodo de teste. E proibido recrutar jogadores com menos de uma semana de servidor.",
        type: "info"
      },
      {
        id: "4.5",
        title: "Aliancas e Parcerias",
        content: "Aliancas entre organizacoes sao permitidas e incentivadas quando fazem sentido no contexto do roleplay. Aliancas devem ser registradas com a staff.",
        type: "success"
      },
      {
        id: "4.6",
        title: "Limites de Membros",
        content: "Gangues: maximo 15 membros. Mafias: maximo 20 membros. Organizacoes governamentais: sem limite definido. Consulte a staff para casos especiais.",
        type: "info"
      },
      {
        id: "4.7",
        title: "Atividades da Organizacao",
        content: "Todas as atividades devem ter roleplay adequado. Nao e permitido farm de atividades ilegais sem desenvolvimento de historia. Liderancas sao responsaveis pelos membros.",
        type: "warning"
      }
    ]
  },
  comunicacao: {
    title: "Comunicacao",
    subtitle: "Chat e Interacoes",
    description: "Regras sobre comunicacao por voz, chat, radio e outros meios dentro e fora do jogo.",
    rules: [
      {
        id: "5.1",
        title: "Chat de Voz",
        content: "Use o chat de voz de forma apropriada e realista. Ajuste o volume para a situacao (sussurro, fala normal, grito). Evite usar musicas, sons irritantes ou microfone aberto com ruido.",
        type: "info"
      },
      {
        id: "5.2",
        title: "Linguagem e Vocabulario",
        content: "Mantenha linguagem minimamente apropriada. Xingamentos sao permitidos no contexto do RP, mas ofensas pessoais (OOC) contra jogadores reais sao proibidas. Termos discriminatorios sao proibidos mesmo em RP.",
        type: "danger"
      },
      {
        id: "5.3",
        title: "Radio e Comunicadores",
        content: "Use radio e celular de forma realista. Voce so pode transmitir informacoes que seu personagem realmente sabe. Radios tem alcance limitado e podem ter interferencia.",
        type: "info"
      },
      {
        id: "5.4",
        title: "OOC - Out of Character",
        content: "Minimize conversas OOC durante o roleplay. Use o chat /ooc ou parenteses ((assim)) apenas quando necessario. Para discussoes longas, use o Discord.",
        type: "warning"
      },
      {
        id: "5.5",
        title: "Discord e Comunicacao Externa",
        content: "Informacoes do Discord, Teamspeak, WhatsApp ou qualquer comunicacao externa nao podem ser usadas no jogo. Isso caracteriza metagaming e sera punido severamente.",
        type: "danger"
      },
      {
        id: "5.6",
        title: "Comandos de Roleplay",
        content: "Use /me para acoes, /do para descricoes de ambiente e /ooc para comunicacao fora do personagem. Use esses comandos para enriquecer o roleplay, nao para powergaming.",
        type: "success"
      }
    ]
  },
  punicoes: {
    title: "Punicoes",
    subtitle: "Sistema de Penalidades",
    description: "Sistema de punicoes aplicadas no servidor Atenas Roleplay. A gravidade determina o tipo de punicao.",
    rules: [
      {
        id: "6.1",
        title: "Sistema de Advertencias (Warns)",
        content: "Infracoes leves e moderadas resultam em warns. Ao acumular 3 warns, voce recebe ban temporario de 3 dias. Com 5 warns, ban de 7 dias. Com 7 warns, analise para ban permanente.",
        type: "warning"
      },
      {
        id: "6.2",
        title: "Kicks",
        content: "Kicks sao aplicados para infracoes muito leves, como aviso inicial ou para jogadores que nao respondem a staff. Nao contam como warn, mas ficam registrados no historico.",
        type: "info"
      },
      {
        id: "6.3",
        title: "Bans Temporarios",
        content: "Aplicados para infracoes moderadas a graves. Variam de 1 a 30 dias dependendo da gravidade e historico do jogador. Reincidencia aumenta o tempo de ban.",
        type: "danger"
      },
      {
        id: "6.4",
        title: "Bans Permanentes",
        content: "Aplicados para: hacking/cheating, assedio grave, discriminacao, doxxing, ameacas reais, acumulo excessivo de punicoes, ou comportamento extremamente prejudicial ao servidor.",
        type: "danger"
      },
      {
        id: "6.5",
        title: "Sistema de Apelacao",
        content: "Jogadores podem apelar suas punicoes atraves de ticket no Discord oficial. Apelacoes sao analisadas pela staff senior em ate 7 dias. Apresente provas se tiver.",
        type: "success"
      },
      {
        id: "6.6",
        title: "Reducao de Pena",
        content: "Em casos especificos e com bom historico anterior, bans podem ser reduzidos apos analise. Participacao positiva na comunidade e considerada favoravel.",
        type: "info"
      },
      {
        id: "6.7",
        title: "Wipe de Historico",
        content: "A cada 3 meses sem infracoes, 1 warn e removido automaticamente do seu historico. Jogadores exemplares podem ter historico limpo apos 6 meses.",
        type: "success"
      }
    ]
  },
  staff: {
    title: "Staff",
    subtitle: "Administracao do Servidor",
    description: "Regras relacionadas a interacao com a equipe administrativa do servidor Atenas Roleplay.",
    rules: [
      {
        id: "7.1",
        title: "Respeito a Equipe",
        content: "Trate todos os membros da staff com respeito, mesmo em situacoes de discordancia. A staff trabalha voluntariamente para manter o servidor funcionando. Desrespeito sera punido.",
        type: "warning"
      },
      {
        id: "7.2",
        title: "Decisoes em Jogo",
        content: "As decisoes da staff durante o jogo sao finais naquele momento. Se discordar, acate a decisao e depois use os canais apropriados (ticket) para contestar com provas.",
        type: "info"
      },
      {
        id: "7.3",
        title: "Sistema de Reports",
        content: "Use /report para situacoes urgentes no jogo. Para denuncias detalhadas, abra ticket no Discord com provas (clips, screenshots). Quanto mais detalhes, melhor a analise.",
        type: "success"
      },
      {
        id: "7.4",
        title: "Falsas Denuncias",
        content: "Fazer denuncias falsas, forjar provas ou acusar jogadores injustamente resultara em punicao severa para quem denunciou, incluindo possivel ban.",
        type: "danger"
      },
      {
        id: "7.5",
        title: "Candidatura para Staff",
        content: "Para se candidatar a staff, voce precisa: ter no minimo 30 dias de servidor, historico limpo nos ultimos 60 dias, e participacao ativa na comunidade. Formularios no Discord.",
        type: "info"
      },
      {
        id: "7.6",
        title: "Staff Abusando",
        content: "Se voce presenciar um staff abusando de poder, reporte diretamente a um Administrador ou Dono atraves de ticket privado com provas. Todas as denuncias sao investigadas.",
        type: "warning"
      }
    ]
  },
  empregos: {
    title: "Empregos",
    subtitle: "Profissoes e Carreiras",
    description: "Regras especificas para empregos legais e ilegais, profissoes e carreiras no servidor.",
    rules: [
      {
        id: "8.1",
        title: "Policia Civil e Militar",
        content: "Policiais devem seguir protocolos realistas de abordagem, uso de forca e investigacao. Abuso de autoridade, corrupcao sem RP adequado, e execucoes sumarias sao proibidos e resultarao em demissao e punicao.",
        type: "danger"
      },
      {
        id: "8.2",
        title: "SAMU - Servico de Emergencia Medica",
        content: "Medicos devem atender a TODOS os chamados igualmente, sem discriminacao. Recusar atendimento sem motivo de RP valido e proibido. Mantenha sigilo medico no RP.",
        type: "warning"
      },
      {
        id: "8.3",
        title: "Mecanicos",
        content: "Mecanicos devem cobrar precos tabelados e fornecer servico de qualidade. Golpes em clientes, roubo de pecas ou veiculos, e mau atendimento resultarao em demissao.",
        type: "info"
      },
      {
        id: "8.4",
        title: "Taxistas e Motoristas",
        content: "Motoristas de aplicativo e taxistas nao podem se envolver em atividades criminosas enquanto em servico. Recusar corridas sem motivo e proibido. Mantenha atendimento cordial.",
        type: "info"
      },
      {
        id: "8.5",
        title: "Atividades Ilegais",
        content: "Trafico, contrabando, assaltos e outras atividades ilegais devem ser feitas com roleplay elaborado. Nao force outros jogadores a participar e respeite os limites de cada um.",
        type: "warning"
      },
      {
        id: "8.6",
        title: "Abandono de Servico",
        content: "Se precisar sair durante o servico, avise sua organizacao/empresa. Abandonos frequentes sem aviso podem resultar em demissao e restricao para aquele emprego.",
        type: "info"
      },
      {
        id: "8.7",
        title: "Jornalistas e Midia",
        content: "Jornalistas podem cobrir eventos e noticias, mas devem respeitar a privacidade e nao interferir em operacoes policiais ou cenas de crime ativas.",
        type: "info"
      },
      {
        id: "8.8",
        title: "Advogados",
        content: "Advogados podem defender clientes em julgamentos e negociar com a policia. Devem ter conhecimento basico das leis do servidor. Corrupcao de advogados e punivel.",
        type: "info"
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
        Secao nao encontrada
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
      {/* Hero Section with Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={sectionImage}
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
            Ao entrar no servidor <span className="text-primary font-semibold">Atenas Roleplay</span>, voce concorda automaticamente com todas as regras listadas acima.
            O desconhecimento das regras nao isenta o jogador de punicao.
          </p>
        </div>
      </div>
    </div>
  )
}
