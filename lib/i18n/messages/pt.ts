import type { Messages } from '../types'

const pt: Messages = {
  meta: {
    title: 'VistaRemote — Desktop remoto WebRTC de código aberto · Insights com IA auto-hospedada',
    description:
      'Controle remoto de desktop em tempo real multiplataforma. Gravação de sessões, resumos com IA, logs de auditoria — código aberto e totalmente auto-hospedável. Feito para PCs industriais, gateways de borda e desktops de TI.',
  },
  common: {
    skipToContent: 'Ir para o conteúdo principal',
    backToTop: 'Voltar ao topo',
    copy: 'Copiar',
    copied: 'Copiado',
    brandSubtitle: 'VistaRemote',
    luminaryBadge: 'LuminaryWorks · VistaRemote · Controle',
    sharedCodeLabel: 'Camada de código compartilhado',
    sharedCodeDesc:
      'As quatro plataformas compartilham os mesmos tipos TypeScript, schemas Zod e hooks de negócio. Electron alimenta Desktop + Web; React Native alimenta Android + iOS. Desenvolva uma vez, publique em todos os lugares.',
    mitLicense: 'MIT License',
    footerTagline: 'Dados permanecem on-prem · 100% auto-hospedado · Pronto para auditoria',
    partOf: 'Parte de',
  },
  header: {
    homeAria: 'Página inicial VistaRemote',
    navAria: 'Navegação principal',
    mobileNavAria: 'Navegação móvel',
    toggleLangAria: 'Alterar idioma',
    menuAria: 'Menu',
    signIn: 'Entrar',
    signInTooltip: 'Entrar no console',
    nav: {
      capabilities: 'Capacidades',
      multiplatform: 'Multiplataforma',
      architecture: 'Arquitetura',
      ecosystem: 'Ecossistema',
      docs: 'Documentação',
    },
  },
  footer: {
    tagline:
      'Desktop remoto WebRTC de código aberto com insights de sessão com IA auto-hospedada. Feito para operações industriais, suporte de TI e auditoria de conformidade.',
    product: 'Produto',
    resources: 'Recursos',
    ecosystem: 'Ecossistema',
    links: {
      capabilities: 'Capacidades',
      multiplatform: 'Multiplataforma',
      plugins: 'Arquitetura de plugins',
      architecture: 'Arquitetura',
      devDocs: 'Documentação para desenvolvedores',
      pluginSdk: 'Plugin SDK',
      apiRef: 'Referência da API',
      changelog: 'Registro de alterações',
      docs: 'Documentação',
    },
  },
  hero: {
    title: 'Alcance o campo remotamente. Mantenha os insights no seu data center.',
    titleEn: 'WebRTC Remote Control + Self-Hosted AI Audit',
    desc: 'Desktop remoto em tempo real multiplataforma e tomada de controle de dispositivos. WebRTC de latência ultrabaixa combinado com gravação de sessões orientada por LLM, resumos com IA e logs de auditoria. 100% auto-hospedado. Feito para PCs industriais, gateways de borda e operações de desktop de TI.',
    ctaPrimary: 'Implantação rápida',
    ctaSecondary: 'Documentação para desenvolvedores e plugins',
    stats: [
      { v: '42ms', l: 'Latência mínima' },
      { v: '100%', l: 'Auto-hospedado' },
      { v: 'Multiplataforma', l: 'Web · Desktop · iOS · Android' },
      { v: 'MIT', l: 'Código aberto' },
    ],
    mockAria: 'Interface simulada de sessão remota',
    tags: ['WebRTC 42ms', 'Gravação', 'Criptografado AES-256', 'Multidispositivo'],
  },
  scenarios: {
    eyebrow: 'Casos de uso',
    title: 'Feito para operações e assistência de alto valor',
    subtitle:
      'Focado em controle empresarial e auditoria de conformidade. Não tentamos ser tudo — nos destacamos no que importa.',
    cards: [
      {
        title: 'Operações industriais / de borda',
        desc: 'Depuração de firmware e manutenção de dispositivos sem limites de distância física. Assuma o controle de PCs industriais e gateways de borda remotamente.',
        tags: ['Controle industrial', 'Computação de borda'],
      },
      {
        title: 'Provedores de serviços de TI gerenciados',
        desc: 'Suporte remoto de desktop para clientes com resolução de problemas mais rápida. Substitua o envio presencial por um único link.',
        tags: ['Serviços de TI', 'Suporte de desktop'],
      },
      {
        title: 'Conformidade rigorosa e auto-hospedagem',
        desc: 'Dados e logs nunca saem da sua rede. Atenda aos requisitos de auditoria financeira e governamental. TURN auto-hospedado, zero retransmissão pública.',
        tags: ['Conformidade financeira', 'On-prem'],
      },
      {
        title: 'Insights de sessão com IA',
        desc: 'Resumos de gravação gerados automaticamente, detecção de anomalias e relatórios de eficiência operacional. A IA roda offline — os dados nunca saem.',
        tags: ['Análise com IA', 'Relatórios de auditoria'],
      },
    ],
    notFitLabel: 'Não é adequado para',
    notFitBold: 'Transmissão ao vivo em massa com milhões de espectadores simultâneos, entretenimento global com CDN',
    notFitRest:
      '— VistaRemote foca em controle bidirecional de baixa latência e auditoria de conformidade, não em streaming unidirecional em larga escala. Use uma solução dedicada de distribuição de streaming.',
  },
  capabilities: {
    eyebrow: 'Capacidades principais',
    title: 'Um console que controla tudo',
    subtitle:
      'Do transporte em milissegundos aos insights de sessão com IA e aos loops de auditoria de conformidade — três dimensões cobrindo operações remotas empresariais.',
    tabs: { realtime: 'Controle em tempo real', audit: 'Gravação e IA', management: 'Gestão unificada' },
    realtime: {
      conn: {
        title: 'Conexão e protocolo',
        items: [
          'Desktop remoto WebRTC com latência em milissegundos e sinalização criptografada com DTLS',
          'Servidor TURN auto-hospedado, LAN primeiro com fallback público, >99% de sucesso de conexão',
          'Codecs adaptativos H.264 / H.265 / VP8 com aceleração por hardware NVENC / VAAPI',
          'Alta taxa de quadros a 60fps, injeção de mouse e teclado sem atraso',
        ],
        tags: ['WebRTC', 'DTLS', 'TURN', 'NVENC', 'H.265'],
      },
      control: {
        title: 'Capacidades de controle',
        items: [
          'Mapeamento completo de teclado e interceptação de atalhos, atalhos em nível de sistema (Electron)',
          'Mapeamento independente de múltiplos monitores, troca de stream sem interrupções',
          'Transferência de arquivos bidirecional, upload por arrastar e soltar',
          'Sincronização da área de transferência e injeção de texto colado',
        ],
        tags: ['Multimonitor', 'Transferência de arquivos', 'Área de transferência', 'Electron'],
      },
    },
    audit: {
      record: {
        title: 'Gravação e armazenamento',
        items: [
          'Gravação de sessões em HD em MP4 / WebM, armazenamento offline auto-hospedado',
          'Armazenamento segmentado por tempo para evitar arquivos muito grandes, armazenamento de objetos compatível com S3',
          'Metadados de gravação estruturados para busca e navegação em nível de segundo',
        ],
        tags: ['MP4', 'Compatível com S3', 'Segmentado', 'Armazenamento offline'],
      },
      ai: {
        title: 'Resumos e alertas com IA',
        items: [
          'Pipeline assíncrono via BullMQ + LLM auto-hospedado (Ollama)',
          'Resumos inteligentes permanecem on-prem — o LLM roda no seu data center',
          'Detecção de anomalias (exclusões acidentais de BD, encerramento de processos críticos) com alertas em nível de segundo',
          'Resumos de sessão gravados automaticamente em tickets (extensível via plugins Workflow)',
        ],
        tags: ['BullMQ', 'Ollama', 'LLM offline', 'Detecção de anomalias'],
      },
    },
    management: {
      device: {
        title: 'Gestão de dispositivos e sessões',
        items: [
          'Mecanismo de código de pareamento — sem IP fixo, integração sem configuração',
          'Encerramento forçado de sessão, bloqueio de teclas específicas, modo de condução segura',
          'Logs de auditoria granulares — cada tecla e clique é rastreável',
        ],
        tags: ['Código de pareamento', 'Logs de auditoria', 'Controle de sessão', 'Sem configuração'],
      },
      auth: {
        title: 'Permissões e SSO',
        items: [
          'RBAC até tela somente leitura ou controle completo',
          'Login único OIDC nativo LuminaryWorks',
          'Isolamento multi-inquilino com namespaces e domínios de auditoria por cliente',
        ],
        tags: ['RBAC', 'OIDC', 'SSO', 'Multi-inquilino'],
      },
    },
  },
  multiplatform: {
    eyebrow: 'Quatro plataformas, uma base de código',
    title: 'Electron + React Native — um código, quatro plataformas',
    subtitle:
      'Runtimes duplos Electron e React Native cobrindo Web, Desktop, Android e iOS. Camada de negócio TypeScript e componentes de UI compartilhados — sem desenvolvimento duplicado.',
    platforms: [
      {
        name: 'Web Client',
        label: 'browser · zero-install',
        desc: 'Console leve sem instalação. Abra um navegador e conecte — nenhum app local necessário. Ideal para suporte ad hoc e operações temporárias.',
        tags: ['React', 'WebRTC', 'PWA'],
        feats: ['Início sem instalação', 'Layout responsivo', 'Multijanela', 'Web Share API'],
      },
      {
        name: 'Desktop',
        label: 'Electron · cross-platform',
        desc: 'Controle profundo imersivo. Interceptação de atalhos em nível de sistema (Ctrl/Cmd + Alt), mapeamento multitelas, transferência de arquivos por arrastar e soltar. Feito para engenheiros de operações de longo prazo.',
        tags: ['Electron', 'Node.js', 'DXGI'],
        feats: ['Interceptação de atalhos', 'Multitelas', 'Área de transferência local', 'Cache de sessão offline'],
      },
      {
        name: 'Mobile',
        label: 'React Native · iOS & Android',
        desc: 'Controle móvel para engenheiros de campo. Gerencie alertas de dispositivos pelo celular com gestos de toque mapeados para ações remotas do mouse.',
        tags: ['React Native', 'Expo', 'WebRTC'],
        feats: ['Mapeamento de gestos de toque', 'Adaptação de orientação', 'Tomada de controle por push', 'Autenticação biométrica'],
      },
    ],
  },
  plugins: {
    eyebrow: 'Arquitetura de plugins',
    title: 'Estenda capacidades remotas como peças de quebra-cabeça',
    subtitle:
      'O controle remoto é mais do que olhar e clicar. Nossa arquitetura de plugins desacopla streaming da lógica de negócio com três camadas de extensão.',
    pipeline: ['Núcleo de streaming', 'UI Plugins', 'Workflow Plugins', 'AI Plugins', 'Saída de auditoria'],
    pipelineAria: 'Pipeline de plugins: UI → Workflow → Análise com IA',
    items: [
      {
        type: 'UI Plugins',
        title: 'Camada de interação',
        desc: 'Carregue dinamicamente painéis de controle específicos do dispositivo. Controles virtuais, consoles PLC e painéis industriais criados pela comunidade — sem alterações no núcleo.',
        examples: ['Controle virtual', 'Console PLC', 'Painel HMI', 'Teclado touch'],
      },
      {
        type: 'Workflow Plugins',
        title: 'Camada de fluxo de trabalho',
        desc: 'Conecte-se aos sistemas empresariais existentes. Fluxos de aprovação Jira/Lark intercambiáveis a quente, autenticação por pareamento, hooks personalizados online/offline — integração perfeita.',
        examples: ['Integração com Jira', 'Aprovação Lark', 'Autenticação por pareamento', 'Hooks de sessão'],
      },
      {
        type: 'AI Plugins',
        title: 'Camada de análise',
        desc: 'Anexe modelos de análise personalizados aos streams de sessão. Ações sensíveis (exclusões de BD, encerramento de processos críticos) disparam alertas em nível de segundo. Traga seu próprio LLM.',
        examples: ['Alertas em tempo real', 'Resumos de sessão', 'Marcação de anomalias', 'Exportação de conformidade'],
      },
    ],
    registryTitle: 'Registro aberto de plugins',
    registryDesc:
      'Todos os plugins se registram via @vistaremote/plugin-sdk com hot reload — sem reiniciar o processo principal. Plugins da comunidade são listados no marketplace oficial.',
  },
  architecture: {
    eyebrow: 'Arquitetura técnica',
    title: 'TypeScript full-stack + Rust cirúrgico',
    subtitle:
      'Máxima uniformidade, sem monstro poliglota. Deixe a IA (Vibe Coding) ser seu melhor copiloto para personalização.',
    vibeTitle: 'Compatível com Vibe Coding',
    vibeDesc:
      'TypeScript de ponta a ponta com tipos sólidos. IDEs com IA (Copilot/Cursor) obtêm contexto claro — o desenvolvimento assistido por LLM tem muito mais sucesso do que em projetos multilíngues.',
    layers: [
      {
        name: 'Contratos compartilhados',
        en: 'shared · contracts',
        desc: 'Compartilhamento estrito de tipos front/back via Zod. Todas as formas de requisição/resposta de API, entidades e enums definidas aqui — inferência TypeScript completa.',
        tags: ['Zod', 'TypeScript', 'monorepo'],
      },
      {
        name: 'Sinalização do servidor',
        en: 'server · signaling & api',
        desc: 'NestJS oferece APIs REST confiáveis e rotas de sinalização WebRTC. Arquitetura modular — cada domínio tem seu próprio module/controller/service.',
        tags: ['NestJS', 'WebSocket', 'Redis Pub/Sub'],
      },
      {
        name: 'Camada de negócio do cliente',
        en: 'client · react / rn / electron',
        desc: 'React / React Native / Electron compartilham hooks de negócio e estado. A UI difere; a lógica central é sem duplicação. >70% de reutilização de código.',
        tags: ['React', 'React Native', 'Electron', 'Zustand'],
      },
      {
        name: 'Camada de performance Rust',
        en: 'rust · codec & capture',
        desc: 'Rust apenas em caminhos críticos: captura de tela DXGI/NVENC e codecs. TypeScript chama Rust via napi-rs — performance máxima sem poluir a base de código principal.',
        tags: ['Rust', 'DXGI', 'NVENC', 'napi-rs'],
      },
      {
        name: 'Camada AI Worker',
        en: 'worker · ai & queue',
        desc: 'Fila assíncrona BullMQ para gravação de sessões e trabalhos de resumo com IA. Ollama com um clique via Docker Compose — LLM privado offline, dados permanecem no rack.',
        tags: ['BullMQ', 'Ollama', 'Docker Compose', 'LLM'],
      },
    ],
  },
  comparison: {
    eyebrow: 'Sinergia do ecossistema',
    title: 'Lado a lado: VistaRemote',
    titleControl: 'Controle',
    titleView: 'Visualização',
    subtitle:
      'Divisão clara de trabalho, loop fechado em conjunto. VistaCast detecta anomalias; VistaRemote executa a intervenção.',
    flowAria: 'Fluxo de alerta VistaCast → tomada de controle VistaRemote',
    flow: [
      { label: 'VistaCast', sub: 'Comportamento de alto risco detectado' },
      { label: '→', sub: '' },
      { label: 'Alerta escalonado com IA', sub: 'Gravidade P1' },
      { label: '→', sub: '' },
      { label: 'VistaRemote', sub: 'Ativar tomada de controle humana' },
      { label: '→', sub: '' },
      { label: 'Loop fechado', sub: 'Log de auditoria arquivado' },
    ],
    colDim: 'Dimensão',
    colRemote: 'VistaRemote',
    colCast: 'VistaCast',
    tagControl: 'Controle',
    tagView: 'Visualização',
    tags: {
      bidirectional: 'Bidirecional',
      unidirectional: 'Unidirecional',
      receiveAlert: 'Receber sinal de anomalia',
      manualClose: 'Tomada de controle humana fecha o loop',
      detectAnomaly: 'Detectar anomalia espacial',
      emitSignal: 'Emitir sinal na origem',
    },
    rows: [
      {
        dim: 'Portador principal',
        vistaremote: 'Controlador móvel / PC / endpoint Agent',
        vistacast: 'Câmeras de segurança fixas (ONVIF / RTSP)',
      },
      {
        dim: 'Valor principal',
        vistaremote: 'Intervenção humana, controle bidirecional, auditoria de gravação',
        vistacast: 'Percepção com IA, dados espaciais estruturados',
      },
      { dim: 'Direção', vistaremote: 'bidirectional', vistacast: 'unidirectional' },
      {
        dim: 'Latência',
        vistaremote: '< 100ms obrigatório',
        vistacast: 'Análise em nível de segundo aceitável',
      },
      {
        dim: 'Capacidade de IA',
        vistaremote: 'Resumos de sessão, alertas de anomalias (LLM offline)',
        vistacast: 'Detecção de objetos, eventos espaciais (inferência de borda)',
      },
      {
        dim: 'Colaboração',
        vistaremote: 'collab-remote',
        vistacast: 'collab-cast',
        highlight: true,
      },
      { dim: 'Auto-hospedado', vistaremote: 'check', vistacast: 'check' },
      { dim: 'Licença', vistaremote: 'MIT', vistacast: 'MIT' },
    ],
  },
  ecosystem: {
    eyebrow: 'Integração do ecossistema',
    title: 'A última milha de intervenção na cadeia de valor',
    subtitle:
      'VistaRemote é o executor no LuminaryWorks — sinais de percepção, a camada remota fecha o loop.',
    items: {
      VistaCast: {
        role: 'VistaCast · Visualização',
        trigger: 'Visão com IA dispara alerta de alto risco',
        action: 'Ativar automaticamente VistaRemote para tomada de controle humana',
        desc: 'Quando câmeras detectam invasão, incêndio ou operações anômalas, alertas P1 são enviados via barramento de eventos. VistaRemote solicita tomada de controle e sessão com um clique.',
      },
      SyncroBrain: {
        role: 'Motor de orquestração IoT',
        trigger: 'Anomalia em nó IoT',
        action: 'Configuração remota direta no backend do dispositivo',
        desc: 'Quando nós IoT reportam temperatura, voltagem ou falhas de comunicação, workflows SyncroBrain disparam sessões VistaRemote para reparo direto no terminal.',
      },
      DoerFlow: {
        role: 'Tickets e despacho',
        trigger: 'Entrega de tarefa após despacho',
        action: 'Desktop remoto para depuração do trabalhador',
        desc: 'Após atribuição de tarefas, técnicos iniciam VistaRemote pelo DoerFlow. Registros de entrega e gravações vinculam-se automaticamente aos tickets para trilha de auditoria completa.',
      },
      DataLuminary: {
        role: 'Insights de dados e painéis',
        trigger: 'Relatórios operacionais e auditoria de sessões',
        action: 'Painéis globais de duração de sessões e auditoria',
        desc: 'Agregue duração de sessões VistaRemote, frequência de ações e conclusões de resumos com IA em painéis de eficiência operacional e conformidade para a liderança.',
      },
      BlockyEdu: {
        role: 'Plataforma de educação visual',
        trigger: 'Cursos de laboratório WebRTC',
        action: 'Ensino de desenvolvimento assistido por IA',
        desc: 'Laboratórios práticos de controle remoto WebRTC ensinando desenvolvimento de plugins personalizados com VistaRemote Plugin SDK — IA auxilia codificação e depuração.',
      },
    },
  },
  quickstart: {
    eyebrow: 'Início rápido',
    title: 'Construa seu centro de controle local agora',
    subtitle:
      'Três caminhos para escolher. Desenvolvimento a partir do código-fonte, implantação com um clique no Docker ou desenvolvimento de plugins — tudo com segurança de tipos e compatível com IA.',
    steps: [
      { n: '01', label: 'Clonar repositório e inicializar', sub: 'git clone + ./init.sh' },
      { n: '02', label: 'Configurar .env e iniciar serviços', sub: 'pnpm dev:mvp' },
      { n: '03', label: 'Abrir Web Client', sub: 'localhost:3000' },
    ],
    tabsAria: 'Opções de início rápido',
    tabs: { clone: 'Do código-fonte', docker: 'Docker com um clique', plugin: 'Criar um plugin' },
    copyAria: 'Copiar código',
    code: {
      clone: [
        { t: 'cmt', v: '# 1. Clonar repositório' },
        { t: 'cmd', v: 'git clone https://github.com/VistaRemote/vibeCode.git' },
        { t: 'cmd', v: 'cd vibeCode' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 2. Inicializar (gera .env, inicia Ollama + Redis + DB)' },
        { t: 'cmd', v: './init.ps1' },
        { t: 'cmt', v: '# Linux / macOS:' },
        { t: 'cmd', v: 'bash init.sh' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 3. Iniciar serviços de desenvolvimento MVP' },
        { t: 'cmd', v: 'pnpm dev:mvp' },
        { t: '', v: '' },
        { t: 'cmt', v: '# Web Client →  http://localhost:3000' },
        { t: 'cmt', v: '# Admin API  →  http://localhost:4000' },
        { t: 'cmt', v: '# Signaling  →  ws://localhost:4001' },
      ],
      docker: [
        { t: 'cmt', v: '# Implantação de produção com Docker Compose em um clique' },
        { t: 'cmd', v: 'git clone https://github.com/VistaRemote/vibeCode.git' },
        { t: 'cmd', v: 'cd vibeCode' },
        { t: '', v: '' },
        { t: 'cmt', v: '# Configurar ambiente' },
        { t: 'cmd', v: 'cp .env.example .env' },
        { t: 'arg', v: '# Editar .env → definir TURN_SECRET, DB_PASSWORD, LLM_MODEL' },
        { t: '', v: '' },
        { t: 'cmt', v: '# Iniciar todos os serviços (Ollama + BullMQ Worker)' },
        { t: 'cmd', v: 'docker compose -f docker-compose.prod.yml up -d' },
        { t: '', v: '' },
        { t: 'cmt', v: '# Verificar status dos serviços' },
        { t: 'cmd', v: 'docker compose ps' },
      ],
      plugin: [
        { t: 'cmt', v: '# Scaffold oficial do Plugin SDK' },
        { t: 'cmd', v: 'pnpm create @vistaremote/plugin my-plc-ui' },
        { t: 'cmd', v: 'cd my-plc-ui' },
        { t: '', v: '' },
        { t: 'cmt', v: '# Registrar plugin de UI' },
        { t: 'arg', v: 'import { registerUIPlugin } from "@vistaremote/plugin-sdk"' },
        { t: '', v: '' },
        { t: 'arg', v: 'registerUIPlugin({' },
        { t: 'arg', v: '  id: "my-plc-ui",' },
        { t: 'arg', v: '  match: (device) => device.type === "PLC",' },
        { t: 'arg', v: '  component: PLCPanel,' },
        { t: 'arg', v: '})' },
        { t: '', v: '' },
        { t: 'cmd', v: 'pnpm dev   # Hot-reload na instância local do VistaRemote' },
      ],
    },
  },
}

export default pt
