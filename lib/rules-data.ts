export interface RuleBlock {
  type: "definicao" | "exemplo" | "proibicao" | "punicao" | "importante" | "permitido" | "requisito" | "limite"
  content: string
}

export interface Rule {
  id: string
  title: string
  blocks: RuleBlock[]
}

export interface Category {
  id: string
  name: string
  rules: Rule[]
}

export const categoriesData: Category[] = [
  {
    id: "regras-gerais",
    name: "Regras Gerais",
    rules: [
      {
        id: "metagaming",
        title: "Metagaming",
        blocks: [
          { type: "definicao", content: "É utilizar informações obtidas **fora do jogo** dentro do jogo, ou buscar informações fora do jogo sabendo quem é alguém dentro do jogo." },
          { type: "exemplo", content: "Descobrir pelo Discord que um amigo foi sequestrado e, mesmo o personagem dele estando sem comunicação no RP, você ir até o local para resgatá-lo ou pedir ajuda para outras pessoas." },
          { type: "punicao", content: "1ª vez: Advertência | 2ª vez: Ban 3 dias | 3ª vez: Ban 7 dias | Reincidência: Ban permanente" }
        ]
      },
      {
        id: "ghost",
        title: "Ghost",
        blocks: [
          { type: "definicao", content: "Quando um jogador acompanha uma **live ou transmissão** de outro player e utiliza o que viu ou ouviu para agir dentro do jogo, mesmo que seu personagem não tenha como saber daquela informação." },
          { type: "punicao", content: "1ª vez: Advertência | 2ª vez: Ban permanente" }
        ]
      },
      {
        id: "powergaming",
        title: "Powergaming",
        blocks: [
          { type: "definicao", content: "É realizar algo dentro do jogo que seria **impossível** fazer na realidade." },
          { type: "exemplo", content: "Estar em uma fuga ou perseguição, seu veículo capotar e você continuar a correr." },
          { type: "punicao", content: "1ª vez: Advertência | 2ª vez: Advertência | 3ª vez: Ban 3 dias" }
        ]
      },
      {
        id: "combat-logging",
        title: "Combat Logging (CL)",
        blocks: [
          { type: "definicao", content: "Desconectar do servidor durante uma situação de RP ativa para evitar consequências, seja durante um tiroteio, perseguição, sequestro ou qualquer interação em andamento." },
          { type: "importante", content: "Caso tenha problemas técnicos, avise imediatamente no Discord com provas (print/vídeo)." },
          { type: "punicao", content: "1ª vez: Advertência | 2ª vez: Advertência | 3ª vez: Ban 7 dias" }
        ]
      },
      {
        id: "rdm",
        title: "RDM (Random Deathmatch)",
        blocks: [
          { type: "definicao", content: "Matar ou agredir outro jogador **sem qualquer motivo** de roleplay ou interação prévia que justifique a ação." },
          { type: "exemplo", content: "Chegar em alguém na rua e atirar sem falar nada, sem motivo IC (in character) para isso." },
          { type: "punicao", content: "1ª vez: Ban 3 dias | 2ª vez: Ban 7 dias | 3ª vez: Ban permanente" }
        ]
      },
      {
        id: "vdm",
        title: "VDM (Vehicle Deathmatch)",
        blocks: [
          { type: "definicao", content: "Usar um veículo como arma para atropelar ou matar outros jogadores intencionalmente sem motivação de RP." },
          { type: "proibicao", content: "Atropelar jogadores propositalmente, usar veículos para derrubar motos em perseguições sem justificativa IC." },
          { type: "punicao", content: "1ª vez: Ban 3 dias | 2ª vez: Ban 7 dias | 3ª vez: Ban permanente" }
        ]
      },
      {
        id: "fail-rp",
        title: "Fail RP",
        blocks: [
          { type: "definicao", content: "Realizar ações que não fazem sentido dentro do contexto de roleplay ou que seriam impossíveis/ilógicas na vida real." },
          { type: "exemplo", content: "Pular de um prédio de 10 andares e sair correndo." },
          { type: "punicao", content: "1ª vez: Advertência | 2ª vez: Ban 3 dia | 3ª vez: Ban 7 dias" }
        ]
      },
      {
        id: "amor-vida",
        title: "Amor à Vida",
        blocks: [
          { type: "definicao", content: "Todo personagem deve valorizar sua própria vida. Em situações de risco iminente (arma apontada, em desvantagem numérica), deve-se cooperar." },
          { type: "proibicao", content: "Reagir armado quando está em clara desvantagem, ignorar ameaças de morte, agir de forma suicida sem motivo IC." },
          { type: "punicao", content: "1ª vez: Advertência | 2ª vez: Ban 3 dias | Reincidência: Ban 7 dias" }
        ]
      },
      {
        id: "zonas-seguras",
        title: "Zonas Seguras",
        blocks: [
          { type: "definicao", content: "Áreas onde ações criminosas e conflitos são estritamente proibidos." },
          { type: "importante", content: "Hospital Central, Delegacia Central, Prefeitura, Mecânicas Oficiais, Spawn de novatos." },
          { type: "proibicao", content: "Roubar, sequestrar, matar, iniciar perseguições ou qualquer ação hostil dentro dessas áreas." },
          { type: "punicao", content: "Crime em zona segura: Ban 3 dias" }
        ]
      },
      {
        id: "bugs-exploits",
        title: "Bugs e Exploits",
        blocks: [
          { type: "definicao", content: "Uso de falhas do jogo ou mecânicas não intencionais para obter vantagem." },
          { type: "permitido", content: "Reportar bugs encontrados à staff imediatamente." },
          { type: "proibicao", content: "Usar qualquer bug para vantagem própria, duplicação de itens/dinheiro, uso de programas externos (hacks, cheats, macros)." },
          { type: "punicao", content: "Uso de bug: Ban 7-30 dias | Reincidência de uso de bug: Ban permanente | Hack/Cheat: Ban permanente sem apelação" }
        ]
      }
    ]
  },
  {
    id: "ilegal",
    name: "Ilegal",
    rules: [
      {
        id: "sequestro",
        title: "Sequestro",
        blocks: [
          { type: "definicao", content: "Ato de capturar e manter um jogador refém por motivos de RP, seja para extorsão, negociação ou outros fins." },
          { type: "requisito", content: "Mínimo de **3 criminosos** para realizar um sequestro. Deve haver motivação IC clara e justificável." },
          { type: "limite", content: "Duração máxima: **30 minutos**. Proibido sequestrar o mesmo jogador duas vezes em 24h." },
          { type: "proibicao", content: "Sequestrar em zonas seguras, sequestrar policiais em serviço sem situação extrema, pedir valores absurdos de resgate, tortura excessiva." },
          { type: "punicao", content: "Quebra de regras: Ban 3-7 dias dependendo da gravidade" }
        ]
      },
      {
        id: "assaltos",
        title: "Assaltos",
        blocks: [
          { type: "definicao", content: "Roubo mediante ameaça ou uso de força contra outros jogadores ou estabelecimentos." },
          { type: "requisito", content: "Anunciar o assalto claramente via voz ou chat. A vítima deve ter chance de reagir ou cooperar." },
          { type: "limite", content: "Máximo de **R$50.000** ou itens equivalentes por assalto a civis. Cooldown de 30 minutos entre assaltos." },
          { type: "proibicao", content: "Assaltar em zonas seguras, assaltar a mesma pessoa mais de uma vez em 2 horas, assaltar sem anunciar (RDM)." },
          { type: "punicao", content: "Assalto sem RP: Ban 3 dias | Zona segura: Ban 5 dias" }
        ]
      },
      {
        id: "trafico",
        title: "Tráfico de Drogas",
        blocks: [
          { type: "definicao", content: "Produção, transporte e venda de substâncias ilícitas dentro do servidor." },
          { type: "permitido", content: "Comprar e vender drogas para NPCs ou jogadores, criar rotas de tráfico, negociar territórios com outras facções." },
          { type: "proibicao", content: "Vender drogas em zonas seguras, traficar sem estar em uma facção ou ter histórico IC de envolvimento criminal." },
          { type: "punicao", content: "Tráfico fora das regras: Advertência + apreensão dos itens" }
        ]
      },
      {
        id: "guerras",
        title: "Guerras entre Facções",
        blocks: [
          { type: "definicao", content: "Conflito armado declarado entre duas ou mais organizações criminosas." },
          { type: "requisito", content: "Declaração formal no Discord (canal específico). Ambas facções devem ter no mínimo **5 membros ativos**." },
          { type: "limite", content: "Duração máxima: **7 dias**. Máximo de **3 confrontos** por dia. Horário permitido: 18h às 00h." },
          { type: "proibicao", content: "Atacar membros offline/AFK, envolver civis no conflito, atacar em zonas seguras, usar exploits ou bugs." },
          { type: "punicao", content: "Quebra de regras de guerra: Ban 7 dias para todos os envolvidos" }
        ]
      },
      {
        id: "territorios",
        title: "Territórios e Domínios",
        blocks: [
          { type: "definicao", content: "Áreas controladas por facções criminosas onde exercem influência e controle sobre atividades." },
          { type: "requisito", content: "Facção deve ter no mínimo **8 membros ativos** para reivindicar território. Solicitação formal via Discord." },
          { type: "permitido", content: "Cobrar pedágio de quem passa, expulsar invasores com aviso prévio, realizar atividades ilegais no local." },
          { type: "proibicao", content: "Matar sem aviso prévio em território próprio, bloquear totalmente o acesso de civis a áreas públicas." }
        ]
      },
      {
        id: "faccoes",
        title: "Facções Criminosas",
        blocks: [
          { type: "definicao", content: "Organizações criminosas registradas que operam atividades ilegais de forma coordenada." },
          { type: "requisito", content: "Mínimo de **6 membros** para criar. Lore da facção deve ser aprovada pela staff. Líder deve ser ativo." },
          { type: "limite", content: "Máximo de **15 membros** por facção. Limite de **5 facções criminosas** ativas no servidor." },
          { type: "importante", content: "Facções inativas por mais de 14 dias serão automaticamente dissolvidas." }
        ]
      },
      {
        id: "roubos-grandes",
        title: "Roubos de Grande Porte",
        blocks: [
          { type: "definicao", content: "Assaltos a bancos, joalherias, carros-fortes e outros alvos de alto valor." },
          { type: "requisito", content: "Mínimo de **4 criminosos**. Deve haver refém válido. Comunicar frequência de negociação à polícia." },
          { type: "limite", content: "Máximo de **6 criminosos** participando. Polícia pode ter até **8 oficiais** respondendo." },
          { type: "proibicao", content: "Mais de 1 roubo grande por dia por grupo. Uso de explosivos sem aprovação da staff." },
          { type: "punicao", content: "Quebra de contingente: Ban 3 dias | Roubo sem RP: Ban 7 dias" }
        ]
      }
    ]
  },
  {
    id: "policia",
    name: "Polícia",
    rules: [
      {
        id: "abordagem",
        title: "Abordagem Policial",
        blocks: [
          { type: "definicao", content: "Procedimento padrão para abordar suspeitos ou realizar verificações de rotina." },
          { type: "requisito", content: "Sirene ligada ou ordem verbal clara. Identificação como policial. Informar motivo da abordagem." },
          { type: "proibicao", content: "Abordar sem motivo justificável, usar força excessiva em abordagens de rotina, não se identificar como policial." },
          { type: "punicao", content: "Abordagem irregular: Advertência interna | Reincidência: Suspensão do cargo" }
        ]
      },
      {
        id: "uso-forca",
        title: "Uso da Força",
        blocks: [
          { type: "definicao", content: "Escalada progressiva do uso de força de acordo com a resistência apresentada pelo suspeito." },
          { type: "importante", content: "**Nível 1:** Presença policial | **Nível 2:** Comandos verbais | **Nível 3:** Controle físico | **Nível 4:** Taser | **Nível 5:** Arma de fogo" },
          { type: "permitido", content: "Armas letais **apenas** quando houver risco iminente de morte para policiais ou civis inocentes." },
          { type: "proibicao", content: "Pular níveis de força sem necessidade, atirar para matar em situações controláveis, execução de suspeitos rendidos." }
        ]
      },
      {
        id: "perseguicao",
        title: "Perseguição Veicular",
        blocks: [
          { type: "definicao", content: "Procedimentos para perseguição de veículos em fuga." },
          { type: "requisito", content: "Comunicar central antes de iniciar. Mínimo de **2 viaturas** para perseguição prolongada." },
          { type: "permitido", content: "Manobras PIT em velocidades abaixo de 120km/h, uso de spike strips, bloqueios coordenados." },
          { type: "proibicao", content: "Manobras PIT acima de 150km/h, disparar contra veículo em movimento sem ameaça letal comprovada." }
        ]
      },
      {
        id: "prisao",
        title: "Prisão e Custódia",
        blocks: [
          { type: "definicao", content: "Procedimentos para efetuar prisões e manter suspeitos em custódia policial." },
          { type: "requisito", content: "Informar os direitos ao preso, registrar ocorrência no sistema, permitir contato com advogado se solicitado." },
          { type: "limite", content: "Tempo máximo de custódia sem acusação formal: **30 minutos**." },
          { type: "importante", content: "Presos têm direito a julgamento ou negociação de pena reduzida." }
        ]
      },
      {
        id: "corrupcao",
        title: "Corrupção Policial",
        blocks: [
          { type: "definicao", content: "Ações ilegais praticadas por policiais em serviço ou utilizando o cargo para benefício próprio." },
          { type: "requisito", content: "Necessário **autorização prévia da staff** para interpretar policial corrupto. Deve haver histórico IC justificável." },
          { type: "limite", content: "Máximo de **2 policiais corruptos** ativos simultaneamente no servidor." },
          { type: "proibicao", content: "Corrupção sem aprovação prévia, vazar informações em massa para criminosos, prejudicar completamente o RP da polícia." }
        ]
      },
      {
        id: "negociacao",
        title: "Negociação em Crises",
        blocks: [
          { type: "definicao", content: "Procedimentos para negociar em situações com reféns ou crises." },
          { type: "requisito", content: "Negociador designado deve conduzir. Manter comunicação clara via frequência combinada." },
          { type: "permitido", content: "Negociar fuga limpa, redução de pena, liberação de membros presos (casos extremos)." },
          { type: "proibicao", content: "Prometer algo que não pode cumprir, dar dinheiro em troca de reféns, mentir sobre termos acordados." }
        ]
      }
    ]
  },
  {
    id: "servicos",
    name: "Regras de Serviços",
    rules: [
      {
        id: "medicos",
        title: "Médicos / SAMU",
        blocks: [
          { type: "definicao", content: "Profissionais responsáveis pelo atendimento médico de emergência e tratamento de feridos." },
          { type: "permitido", content: "Cobrar por atendimentos particulares, recusar atendimento em zonas de conflito ativo até cessar-fogo." },
          { type: "proibicao", content: "Reviver jogadores em meio a tiroteios ativos, ignorar chamados sem motivo válido, cobrar valores abusivos." },
          { type: "importante", content: "Médicos são considerados **neutros** e não devem ser alvos de ações criminosas ou policiais." }
        ]
      },
      {
        id: "mecanicos",
        title: "Mecânicos",
        blocks: [
          { type: "definicao", content: "Profissionais responsáveis por reparos, manutenção e customização de veículos." },
          { type: "permitido", content: "Definir preços próprios pelos serviços, recusar serviços suspeitos, trabalhar para facções específicas." },
          { type: "proibicao", content: "Reparar veículos durante perseguições ativas, modificar veículos claramente roubados sem questionar." }
        ]
      },
      {
        id: "taxi",
        title: "Taxistas / Motoristas",
        blocks: [
          { type: "definicao", content: "Profissionais de transporte de passageiros pelo mapa." },
          { type: "permitido", content: "Definir tarifas próprias, recusar corridas para áreas perigosas, trabalhar em eventos." },
          { type: "proibicao", content: "Participar de fugas como motorista sem RP prévio estabelecido, transportar itens ilegais conscientemente." }
        ]
      },
      {
        id: "advogados",
        title: "Advogados",
        blocks: [
          { type: "definicao", content: "Profissionais que representam jogadores em situações legais, julgamentos e negociações de pena." },
          { type: "permitido", content: "Negociar redução de penas, acompanhar interrogatórios, representar criminosos em julgamentos." },
          { type: "proibicao", content: "Ajudar ativamente em fugas, passar informações privilegiadas da polícia para facções criminosas." }
        ]
      },
      {
        id: "reporters",
        title: "Repórteres / Mídia",
        blocks: [
          { type: "definicao", content: "Profissionais de comunicação que cobrem eventos e notícias da cidade." },
          { type: "permitido", content: "Filmar e fotografar eventos públicos, entrevistar jogadores, transmitir ao vivo acontecimentos." },
          { type: "proibicao", content: "Interferir em ações policiais ou criminosas, divulgar informações que comprometam investigações em andamento." },
          { type: "importante", content: "Repórteres podem ser afastados de cenas de crime pela polícia por segurança." }
        ]
      }
    ]
  },
  {
    id: "mecanica",
    name: "Mecânica",
    rules: [
      {
        id: "respeito-mecanica",
        title: "Respeito em Primeiro Lugar",
        blocks: [
          { type: "definicao", content: "Trate todos com respeito, independentemente do cargo dentro da mecânica." },
          { type: "proibicao", content: "Ofensas, preconceito ou toxicidade não serão tolerados." },
          { type: "importante", content: "Discussões devem ser resolvidas com maturidade." }
        ]
      },
      {
        id: "proibicoes-mecanica",
        title: "Proibições da Mecânica",
        blocks: [
          { type: "proibicao", content: "Spam, flood ou divulgação sem permissão." },
          { type: "proibicao", content: "Uso de hacks, bugs ou qualquer forma de trapaça." },
          { type: "proibicao", content: "Desrespeitar membros da equipe ou clientes." },
          { type: "proibicao", content: "Criar confusão proposital ou atrapalhar atendimentos." }
        ]
      },
      {
        id: "regras-trabalho-mecanica",
        title: "Regras de Trabalho",
        blocks: [
          { type: "requisito", content: "Siga a hierarquia da mecânica." },
          { type: "proibicao", content: "Não interfira em atendimentos de outros mecânicos sem autorização." },
          { type: "importante", content: "Sempre registre serviços quando necessário." },
          { type: "requisito", content: "Mantenha organização e profissionalismo durante o trabalho." }
        ]
      },
      {
        id: "pagamentos-servicos",
        title: "Pagamentos e Serviços",
        blocks: [
          { type: "requisito", content: "Combine valores **antes** de iniciar qualquer serviço." },
          { type: "proibicao", content: "Não aplique golpes ou engane clientes." },
          { type: "importante", content: "Pagamentos devem ser confirmados corretamente." }
        ]
      },
      {
        id: "uso-canais",
        title: "Uso dos Canais",
        blocks: [
          { type: "requisito", content: "Utilize cada canal para sua função correta." },
          { type: "proibicao", content: "Evite mensagens fora de contexto." },
          { type: "importante", content: "Respeite canais internos (uso exclusivo da equipe)." }
        ]
      },
      {
        id: "membros-equipe",
        title: "Membros da Equipe",
        blocks: [
          { type: "requisito", content: "Seja ativo e comprometido." },
          { type: "requisito", content: "Atenda clientes com respeito e agilidade." },
          { type: "importante", content: "Problemas devem ser reportados à liderança." }
        ]
      },
      {
        id: "punicoes-mecanica",
        title: "Punições",
        blocks: [
          { type: "definicao", content: "O descumprimento das regras pode resultar em diferentes níveis de punição." },
          { type: "punicao", content: "**Aviso** → **Suspensão** → **Demissão/Banimento**" },
          { type: "importante", content: "As regras podem ser atualizadas a qualquer momento. Ao permanecer na mecânica, você concorda com todas elas." }
        ]
      }
    ]
  },
  {
    id: "economia",
    name: "Economia",
    rules: [
      {
        id: "empregos",
        title: "Empregos Legais",
        blocks: [
          { type: "definicao", content: "Trabalhos disponíveis para ganhar dinheiro de forma legal no servidor." },
          { type: "permitido", content: "Acumular até 2 empregos legais simultâneos, criar negócios próprios com aprovação da staff." },
          { type: "proibicao", content: "Usar bugs para farmear dinheiro, ficar AFK em empregos automáticos, explorar mecânicas quebradas." },
          { type: "punicao", content: "Farm com bug/exploit: Ban 7 dias + reset financeiro completo" }
        ]
      },
      {
        id: "transacoes",
        title: "Transações Financeiras",
        blocks: [
          { type: "definicao", content: "Regras sobre compra, venda e transferência de dinheiro e itens entre jogadores." },
          { type: "proibicao", content: "Vender dinheiro ou itens do jogo por dinheiro real (RMT), transferir bens para contas secundárias sem justificativa IC." },
          { type: "punicao", content: "RMT (Real Money Trading): **Ban permanente** para ambas as partes envolvidas" }
        ]
      },
      {
        id: "propriedades",
        title: "Propriedades",
        blocks: [
          { type: "definicao", content: "Casas, apartamentos e imóveis comerciais que podem ser adquiridos pelos jogadores." },
          { type: "limite", content: "Máximo de **2 propriedades residenciais** e **1 comercial** por jogador." },
          { type: "importante", content: "Propriedades sem uso por 30 dias consecutivos podem ser retomadas e revendidas pelo servidor." }
        ]
      },
      {
        id: "veiculos-economia",
        title: "Veículos",
        blocks: [
          { type: "definicao", content: "Regras sobre aquisição, posse e uso de veículos pessoais." },
          { type: "limite", content: "Máximo de **5 veículos** registrados por personagem." },
          { type: "proibicao", content: "Usar veículos de luxo sem condições IC de possuí-los (coherência com a história do personagem), abusar de veículos de serviço." }
        ]
      },
      {
        id: "negocios",
        title: "Negócios e Empresas",
        blocks: [
          { type: "definicao", content: "Empresas e negócios que jogadores podem abrir e administrar." },
          { type: "requisito", content: "Aprovação da staff para abrir negócio. Mínimo de 50 horas jogadas. Plano de negócios básico." },
          { type: "permitido", content: "Contratar funcionários, definir preços, expandir com aprovação, vender o negócio para outros jogadores." },
          { type: "importante", content: "Negócios inativos por 21 dias podem ser fechados pela administração." }
        ]
      }
    ]
  },
  {
    id: "administracao",
    name: "Administração",
    rules: [
      {
        id: "staff",
        title: "Interação com Staff",
        blocks: [
          { type: "definicao", content: "Como se comunicar e interagir com a equipe administrativa do servidor." },
          { type: "permitido", content: "Abrir tickets para dúvidas, reportar bugs e jogadores, solicitar suporte em situações travadas." },
          { type: "proibicao", content: "Desrespeitar membros da staff, mentir em tickets ou reports, abusar do sistema de suporte, chantagear staff." },
          { type: "punicao", content: "Desrespeito à staff: Ban 3 dias | Mentir em ticket: Ban 7 dias | Chantagem: Ban permanente" }
        ]
      },
      {
        id: "reports",
        title: "Sistema de Reports",
        blocks: [
          { type: "definicao", content: "Sistema para reportar jogadores que quebram regras do servidor." },
          { type: "requisito", content: "Evidência em **vídeo de no mínimo 30 segundos** mostrando contexto completo. Print de chat quando aplicável." },
          { type: "importante", content: "Reports falsos, por vingança ou sem evidências válidas resultam em punição para quem reportou." },
          { type: "punicao", content: "Report falso/vingança: Advertência | Reincidência: Ban 3 dias" }
        ]
      },
      {
        id: "punicoes-tabela",
        title: "Tabela de Punições",
        blocks: [
          { type: "definicao", content: "Referência geral da progressão de punições aplicadas no servidor." },
          { type: "importante", content: "**Advertência** → **Ban 1 dia** → **Ban 3 dias** → **Ban 7 dias** → **Ban 14 dias** → **Ban Permanente**" },
          { type: "permitido", content: "Apelar qualquer punição no Discord dentro de 7 dias. Bans permanentes podem ser revisados após 30 dias." }
        ]
      },
      {
        id: "recursos",
        title: "Recursos e Apelações",
        blocks: [
          { type: "definicao", content: "Processo para contestar punições aplicadas pela staff." },
          { type: "requisito", content: "Preencher formulário de apelação no Discord. Apresentar evidências e explicação detalhada do ocorrido." },
          { type: "limite", content: "Prazo de **7 dias** para apelar punições. Staff responde em até **72 horas úteis**." },
          { type: "importante", content: "Apelações mal-educadas ou sem fundamento serão automaticamente negadas." }
        ]
      },
      {
        id: "whitelist",
        title: "Whitelist e Acesso",
        blocks: [
          { type: "definicao", content: "Processo de aprovação para entrar no servidor." },
          { type: "requisito", content: "Formulário de whitelist aprovado, entrevista com staff (se necessário), leitura das regras." },
          { type: "importante", content: "Whitelist pode ser revogada por inatividade superior a 60 dias ou quebras graves de regras." }
        ]
      }
    ]
  },
  {
    id: "combate",
    name: "Ações de Combate",
    rules: [
      {
        id: "tiroteios",
        title: "Tiroteios",
        blocks: [
          { type: "definicao", content: "Regras para confrontos armados entre jogadores." },
          { type: "requisito", content: "Deve haver motivo IC claro para iniciar tiroteio. Anunciar intenção hostil antes de disparar (exceto emboscadas justificadas)." },
          { type: "proibicao", content: "Atirar de dentro de veículos em movimento sem desacelerar, bunny hop durante combate, combat roll excessivo." },
          { type: "punicao", content: "Tiroteio sem RP válido: Ban 3 dias" }
        ]
      },
      {
        id: "armas",
        title: "Porte e Uso de Armas",
        blocks: [
          { type: "definicao", content: "Regras sobre posse, porte e utilização de armamentos." },
          { type: "permitido", content: "Civis podem ter armas leves com registro legal. Armas pesadas são exclusivas de facções e polícia." },
          { type: "proibicao", content: "Exibir armas pesadas em público sem motivo IC, usar armas exclusivas de facções sem pertencer a elas, vender armas ilegais em zonas seguras." }
        ]
      },
      {
        id: "mortes",
        title: "Mortes e Memória",
        blocks: [
          { type: "definicao", content: "O que acontece quando seu personagem morre em combate." },
          { type: "importante", content: "Ao morrer, você **esquece os últimos 15 minutos** antes da morte. Isso inclui quem te matou, local e circunstâncias." },
          { type: "proibicao", content: "Voltar ao local da morte imediatamente, usar informações perdidas pela memória de morte, buscar vingança pelo mesmo evento." },
          { type: "limite", content: "Aguardar no mínimo **5 minutos** antes de retornar à área onde morreu." }
        ]
      },
      {
        id: "refem",
        title: "Situações com Refém",
        blocks: [
          { type: "definicao", content: "Regras quando um jogador é mantido sob ameaça como moeda de troca em negociações." },
          { type: "requisito", content: "Refém deve cooperar (amor à vida). Toda negociação deve ser conduzida em RP." },
          { type: "limite", content: "Polícia não pode atirar com refém na linha de fogo. Criminosos devem ter demandas razoáveis e alcançáveis." },
          { type: "proibicao", content: "Matar refém sem motivo (quebra de negociação, por exemplo), usar refém AFK, sequestrar o mesmo refém repetidamente." }
        ]
      },
      {
        id: "emboscadas",
        title: "Emboscadas",
        blocks: [
          { type: "definicao", content: "Ataques surpresa planejados contra alvos específicos." },
          { type: "requisito", content: "Deve haver contexto IC forte (guerra de facção, vingança por evento anterior, etc.)." },
          { type: "permitido", content: "Emboscar sem anúncio prévio se houver guerra ativa ou histórico de conflito." },
          { type: "proibicao", content: "Emboscar jogadores aleatórios, fazer emboscadas em zonas seguras, emboscar sem qualquer motivo IC." }
        ]
      },
      {
        id: "codigo3",
        title: "Código 3 (Atropelamento)",
        blocks: [
          { type: "definicao", content: "Regras sobre colisões e atropelamentos durante ações e perseguições." },
          { type: "importante", content: "Código 3 só é válido quando resulta em **atropelamento grave ou morte**. Simples colisões não contam." },
          { type: "permitido", content: "Parar ação após Código 3 legítimo, solicitar SAMU para atendimento." },
          { type: "proibicao", content: "Forçar Código 3 propositalmente para encerrar ações, ignorar Código 3 legítimo para continuar combate." }
        ]
      }
    ]
  },
  {
    id: "interacao",
    name: "Interação e RP",
    rules: [
      {
        id: "personagem",
        title: "Criação de Personagem",
        blocks: [
          { type: "definicao", content: "Diretrizes para criar e desenvolver seu personagem no servidor." },
          { type: "requisito", content: "Nome e sobrenome realistas (estilo brasileiro). História/background coerente. Aparência adequada ao contexto." },
          { type: "proibicao", content: "Nomes de famosos reais, nomes ofensivos ou memes, personagens com traços extremos (serial killer, etc.) sem aprovação." },
          { type: "importante", content: "Seu personagem deve ter motivações, medos e objetivos que guiem suas ações no RP." }
        ]
      },
      {
        id: "chat",
        title: "Uso do Chat e Comandos",
        blocks: [
          { type: "definicao", content: "Regras sobre comunicação textual e por voz dentro do servidor." },
          { type: "permitido", content: "**/me** para ações do personagem | **/do** para descrever ambiente | **/ooc** para fora do personagem (usar com moderação)." },
          { type: "proibicao", content: "Spam ou flood de mensagens, falar OOC em chat IC, divulgar outros servidores, discussões políticas/religiosas." }
        ]
      },
      {
        id: "voz",
        title: "Comunicação por Voz",
        blocks: [
          { type: "definicao", content: "Regras para uso do chat de voz in-game." },
          { type: "requisito", content: "Manter tom de voz adequado ao personagem. Falar português de forma compreensível." },
          { type: "proibicao", content: "Som ambiente alto, música no microfone, voice changers que prejudiquem a comunicação, gritos excessivos." }
        ]
      },
      {
        id: "eventos",
        title: "Eventos do Servidor",
        blocks: [
          { type: "definicao", content: "Eventos especiais organizados pela staff ou pela comunidade." },
          { type: "permitido", content: "Participar livremente, sugerir eventos no Discord, organizar eventos próprios com aprovação prévia." },
          { type: "proibicao", content: "Atrapalhar eventos em andamento, usar eventos para cometer crimes (salvo se o evento permitir), RDM durante eventos pacíficos." },
          { type: "importante", content: "Durante eventos oficiais, algumas regras podem ser temporariamente flexibilizadas - a staff informará." }
        ]
      },
      {
        id: "novatos",
        title: "Tratamento a Novatos",
        blocks: [
          { type: "definicao", content: "Como interagir com jogadores novos no servidor." },
          { type: "permitido", content: "Ajudar com dúvidas IC (como personagem experiente), indicar locais e mecânicas de forma roleplay." },
          { type: "proibicao", content: "Abusar de novatos que não conhecem as regras, assaltar jogadores em área de spawn, ridicularizar erros de RP." },
          { type: "importante", content: "Jogadores com menos de 5 horas têm proteção parcial contra crimes (não podem ser sequestrados ou mortos sem motivo forte)." }
        ]
      },
      {
        id: "relacionamentos",
        title: "Relacionamentos IC",
        blocks: [
          { type: "definicao", content: "Regras sobre relacionamentos entre personagens no servidor." },
          { type: "permitido", content: "Amizades, rivalidades, namoros e casamentos IC. Alianças e traições fazem parte do RP." },
          { type: "proibicao", content: "Conteúdo sexual explícito (ERP), relacionamentos envolvendo menores IC, assédio que ultrapasse o RP." },
          { type: "importante", content: "Mantenha separação clara entre IC (in character) e OOC (out of character) em relacionamentos." }
        ]
      }
    ]
  }
]
