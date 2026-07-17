import type { Messages } from '../types'

const it: Messages = {
  meta: {
    title: 'VistaRemote — Desktop remoto WebRTC open source · Insight AI self-hosted',
    description:
      'Controllo remoto del desktop in tempo reale multipiattaforma. Registrazione sessioni, riepiloghi AI, log di audit — open source e completamente self-hosted. Pensato per PC industriali, gateway edge e desktop IT.',
  },
  common: {
    skipToContent: 'Vai al contenuto principale',
    backToTop: 'Torna in alto',
    copy: 'Copia',
    copied: 'Copiato',
    brandSubtitle: 'VistaRemote',
    luminaryBadge: 'LuminaryWorks · VistaRemote · Controllo',
    sharedCodeLabel: 'Livello codice condiviso',
    sharedCodeDesc:
      'Tutte e quattro le piattaforme condividono gli stessi tipi TypeScript, schemi Zod e hook di business. Electron alimenta Desktop + Web; React Native alimenta Android + iOS. Sviluppa una volta, distribuisci ovunque.',
    mitLicense: 'Polyform Noncommercial License',
    footerTagline: 'I dati restano on-prem · 100% self-hosted · Pronto per l\'audit',
    partOf: 'Parte di',
  },
  header: {
    homeAria: 'Home VistaRemote',
    navAria: 'Navigazione principale',
    mobileNavAria: 'Navigazione mobile',
    toggleLangAria: 'Cambia lingua',
    menuAria: 'Menu',
    signIn: 'Accedi',
    signInTooltip: 'Accedi alla console',
    nav: {
      capabilities: 'Funzionalità',
      multiplatform: 'Multipiattaforma',
      architecture: 'Architettura',
      ecosystem: 'Ecosistema',
      docs: 'Documentazione',
    },
  },
  footer: {
    tagline:
      'Desktop remoto WebRTC open source con insight sulle sessioni AI self-hosted. Pensato per operazioni industriali, supporto IT e audit di conformità.',
    product: 'Prodotto',
    resources: 'Risorse',
    ecosystem: 'Ecosistema',
    links: {
      capabilities: 'Funzionalità',
      multiplatform: 'Multipiattaforma',
      plugins: 'Architettura plugin',
      architecture: 'Architettura',
      devDocs: 'Documentazione sviluppatori',
      pluginSdk: 'Plugin SDK',
      apiRef: 'Riferimento API',
      changelog: 'Changelog',
      docs: 'Documentazione',
    },
  },
  hero: {
    title: 'Raggiungi il campo da remoto. Tieni gli insight nel tuo data center.',
    titleEn: 'WebRTC Remote Control + Self-Hosted AI Audit',
    desc: 'Desktop remoto e takeover di dispositivi in tempo reale multipiattaforma. WebRTC a latenza ultra-bassa combinato con registrazione sessioni guidata da LLM, riepiloghi AI e log di audit. 100% self-hosted. Pensato per PC industriali, gateway edge e operazioni desktop IT.',
    ctaPrimary: 'Avvio rapido deployment',
    ctaSecondary: 'Documentazione sviluppatori e plugin',
    stats: [
      { v: '42ms', l: 'Latenza minima' },
      { v: '100%', l: 'Self-hosted' },
      { v: 'Multipiattaforma', l: 'Web · Desktop · iOS · Android' },
      { v: 'Polyform-NC', l: 'Open source' },
    ],
    mockAria: 'Mock UI sessione remota',
    tags: ['WebRTC 42ms', 'Registrazione', 'Crittografia AES-256', 'Multi-dispositivo'],
  },
  scenarios: {
    eyebrow: 'Casi d\'uso',
    title: 'Pensato per operazioni ad alto valore e assistenza',
    subtitle:
      'Focalizzato sul controllo aziendale e sull\'audit di conformità. Non cerchiamo di essere tutto — eccelliamo in ciò che conta.',
    cards: [
      {
        title: 'Operazioni industriali / edge',
        desc: 'Debug firmware e manutenzione dispositivi senza limiti di distanza fisica. Prendi il controllo di PC industriali e gateway edge da remoto.',
        tags: ['Controllo industriale', 'Edge computing'],
      },
      {
        title: 'Managed service provider IT',
        desc: 'Supporto desktop remoto per i clienti con troubleshooting più rapido. Sostituisci gli interventi in loco con un singolo link.',
        tags: ['Servizi IT', 'Supporto desktop'],
      },
      {
        title: 'Conformità rigorosa e self-hosting',
        desc: 'Dati e log non lasciano mai la tua rete. Soddisfa i requisiti di audit finanziario e governativo. TURN self-hosted, zero relay pubblico.',
        tags: ['Conformità finanziaria', 'On-prem'],
      },
      {
        title: 'Insight sessioni AI',
        desc: 'Riepiloghi registrazione generati automaticamente, rilevamento anomalie e report sull\'efficienza operativa. L\'AI funziona offline — i dati non escono mai.',
        tags: ['Analisi AI', 'Report di audit'],
      },
    ],
    notFitLabel: 'Non adatto',
    notFitBold: 'Streaming live di massa con milioni di spettatori simultanei, intrattenimento CDN globale',
    notFitRest:
      '— VistaRemote si concentra sul controllo bidirezionale a bassa latenza e sull\'audit di conformità, non sullo streaming unidirezionale su larga scala. Usa invece una soluzione dedicata alla distribuzione streaming.',
  },
  capabilities: {
    eyebrow: 'Funzionalità principali',
    title: 'Una console che controlla tutto',
    subtitle:
      'Dal trasporto al millisecondo agli insight sessioni AI fino ai cicli di audit di conformità — tre dimensioni che coprono le operazioni remote aziendali.',
    tabs: { realtime: 'Controllo in tempo reale', audit: 'Registrazione e AI', management: 'Gestione unificata' },
    realtime: {
      conn: {
        title: 'Connessione e protocollo',
        items: [
          'Desktop remoto WebRTC a latenza millisecondi con segnalazione crittografata DTLS',
          'Server TURN self-hosted, LAN-first con fallback pubblico, >99% di successo connessione',
          'Codec adattivi H.264 / H.265 / VP8 con accelerazione hardware NVENC / VAAPI',
          'Alta frequenza 60fps, iniezione mouse e tastiera senza lag',
        ],
        tags: ['WebRTC', 'DTLS', 'TURN', 'NVENC', 'H.265'],
      },
      control: {
        title: 'Capacità di controllo',
        items: [
          'Mappatura tastiera completa e intercettazione scorciatoie, shortcut a livello di sistema (Electron)',
          'Mappatura indipendente multi-monitor, cambio stream senza interruzioni',
          'Trasferimento file bidirezionale, upload drag-and-drop',
          'Sincronizzazione clipboard e iniezione testo incollato',
        ],
        tags: ['Multi-monitor', 'Trasferimento file', 'Clipboard', 'Electron'],
      },
    },
    audit: {
      record: {
        title: 'Registrazione e archiviazione',
        items: [
          'Registrazione sessioni HD in MP4 / WebM, archiviazione offline self-hosted',
          'Archiviazione segmentata per tempo per evitare file troppo grandi, object storage compatibile S3',
          'Metadati registrazione strutturati per ricerca e seek al secondo',
        ],
        tags: ['MP4', 'Compatibile S3', 'Segmentato', 'Archiviazione offline'],
      },
      ai: {
        title: 'Riepiloghi AI e avvisi',
        items: [
          'Pipeline asincrona via BullMQ + LLM self-hosted (Ollama)',
          'Riepiloghi intelligenti restano on-prem — LLM nel tuo data center',
          'Rilevamento anomalie (cancellazioni DB accidentali, terminazione processi core) con avvisi al secondo',
          'Riepiloghi sessione scritti automaticamente nei ticket (estendibile via plugin Workflow)',
        ],
        tags: ['BullMQ', 'Ollama', 'LLM offline', 'Rilevamento anomalie'],
      },
    },
    management: {
      device: {
        title: 'Gestione dispositivi e sessioni',
        items: [
          'Meccanismo codice di pairing — nessun IP fisso, onboarding zero-config',
          'Terminazione forzata sessione, blocco tasti specifici, modalità guida sicura',
          'Log di audit granulari — ogni tasto e clic tracciabile',
        ],
        tags: ['Codice pairing', 'Log di audit', 'Controllo sessione', 'Zero-config'],
      },
      auth: {
        title: 'Permessi e SSO',
        items: [
          'RBAC fino a schermo solo visualizzazione o controllo completo',
          'Single sign-on OIDC nativo LuminaryWorks',
          'Isolamento multi-tenant con namespace per cliente e domini di audit',
        ],
        tags: ['RBAC', 'OIDC', 'SSO', 'Multi-tenant'],
      },
    },
  },
  multiplatform: {
    eyebrow: 'Quattro piattaforme, un codebase',
    title: 'Electron + React Native — un codice, quattro piattaforme',
    subtitle:
      'Runtime duali Electron e React Native che coprono Web, Desktop, Android e iOS. Layer business TypeScript condiviso e componenti UI — nessuno sviluppo duplicato.',
    platforms: [
      {
        name: 'Web Client',
        label: 'browser · zero-install',
        desc: 'Console leggera senza installazione. Apri un browser e connettiti — nessuna app locale richiesta. Ideale per supporto ad hoc e operazioni temporanee.',
        tags: ['React', 'WebRTC', 'PWA'],
        feats: ['Avvio zero-install', 'Layout responsive', 'Multi-finestra', 'Web Share API'],
      },
      {
        name: 'Desktop',
        label: 'Electron · multipiattaforma',
        desc: 'Controllo profondo immersivo. Intercettazione scorciatoie a livello di sistema (Ctrl/Cmd + Alt), mappatura multi-schermo, trasferimento file drag-and-drop. Pensato per ingegneri operativi a lungo termine.',
        tags: ['Electron', 'Node.js', 'DXGI'],
        feats: ['Intercettazione scorciatoie', 'Multi-schermo', 'Clipboard locale', 'Cache sessione offline'],
      },
      {
        name: 'Mobile',
        label: 'React Native · iOS e Android',
        desc: 'Controllo mobile per ingegneri sul campo. Gestisci avvisi dispositivo dal telefono con gesture touch mappate su azioni mouse remote.',
        tags: ['React Native', 'Expo', 'WebRTC'],
        feats: ['Mappatura gesture touch', 'Adattivo orientamento', 'Wake takeover push', 'Autenticazione biometrica'],
      },
    ],
  },
  plugins: {
    eyebrow: 'Architettura plugin',
    title: 'Estendi le capacità remote come pezzi di un puzzle',
    subtitle:
      'Il controllo remoto è più che guardare e cliccare. La nostra architettura plugin separa lo streaming dalla logica di business con tre livelli di estensione.',
    pipeline: ['Core streaming', 'UI Plugins', 'Workflow Plugins', 'AI Plugins', 'Output audit'],
    pipelineAria: 'Pipeline plugin: UI → Workflow → Analisi AI',
    items: [
      {
        type: 'UI Plugins',
        title: 'Livello interazione',
        desc: 'Carica dinamicamente pannelli di controllo specifici per dispositivo. Gamepad virtuali, console PLC, dashboard industriali costruiti dalla community — nessuna modifica al core richiesta.',
        examples: ['Gamepad virtuale', 'Console PLC', 'Dashboard HMI', 'Tastiera touch'],
      },
      {
        type: 'Workflow Plugins',
        title: 'Livello workflow',
        desc: 'Integrati nei sistemi aziendali esistenti. Flussi di approvazione Jira/Lark hot-swap, auth pairing, hook online/offline personalizzati — integrazione senza soluzione di continuità.',
        examples: ['Integrazione Jira', 'Approvazione Lark', 'Auth pairing', 'Hook sessione'],
      },
      {
        type: 'AI Plugins',
        title: 'Livello analisi',
        desc: 'Collega modelli di analisi personalizzati agli stream di sessione. Azioni sensibili (cancellazioni DB, terminazione processi core) attivano avvisi al secondo. Porta il tuo LLM.',
        examples: ['Avvisi in tempo reale', 'Riepiloghi sessione', 'Tag anomalie', 'Export conformità'],
      },
    ],
    registryTitle: 'Registro plugin aperto',
    registryDesc:
      'Tutti i plugin si registrano via @vistaremote/plugin-sdk con hot reload — nessun riavvio del processo principale. I plugin della community sono elencati nel marketplace ufficiale.',
  },
  architecture: {
    eyebrow: 'Architettura geek',
    title: 'TypeScript full-stack + Rust chirurgico',
    subtitle:
      'Massima uniformità, niente Frankenstein poliglotta. Lascia che l\'AI (Vibe Coding) sia il tuo miglior co-pilota per la personalizzazione.',
    vibeTitle: 'Vibe Coding friendly',
    vibeDesc:
      'TypeScript end-to-end con tipi forti. Gli IDE AI (Copilot/Cursor) ottengono contesto chiaro — lo sviluppo assistito da LLM ha molto più successo rispetto a progetti multilingua.',
    layers: [
      {
        name: 'Contratti condivisi',
        en: 'shared · contracts',
        desc: 'Condivisione tipi front/back rigorosa via Zod. Tutte le forme request/response API, entità ed enum definite qui — inferenza TypeScript completa.',
        tags: ['Zod', 'TypeScript', 'monorepo'],
      },
      {
        name: 'Segnalazione server',
        en: 'server · signaling & api',
        desc: 'NestJS fornisce API REST affidabili e route di segnalazione WebRTC. Architettura modulare — ogni dominio ha il proprio module/controller/service.',
        tags: ['NestJS', 'WebSocket', 'Redis Pub/Sub'],
      },
      {
        name: 'Layer business client',
        en: 'client · react / rn / electron',
        desc: 'React / React Native / Electron condividono hook di business e stato. L\'UI differisce; la logica core è zero-duplicazione. >70% riuso codice.',
        tags: ['React', 'React Native', 'Electron', 'Zustand'],
      },
      {
        name: 'Layer performance Rust',
        en: 'rust · codec & capture',
        desc: 'Rust solo sui percorsi critici: cattura schermo DXGI/NVENC e codec. TypeScript chiama Rust via napi-rs — prestazioni massime senza inquinare il codebase principale.',
        tags: ['Rust', 'DXGI', 'NVENC', 'napi-rs'],
      },
      {
        name: 'Layer AI Worker',
        en: 'worker · ai & queue',
        desc: 'Coda asincrona BullMQ per registrazione sessioni e job riepilogo AI. Docker Compose one-click Ollama — LLM privato offline, i dati restano nel rack.',
        tags: ['BullMQ', 'Ollama', 'Docker Compose', 'LLM'],
      },
    ],
  },
  comparison: {
    eyebrow: 'Sinergia ecosistema',
    title: 'Affiancati: VistaRemote',
    titleControl: 'Controllo',
    titleView: 'Vista',
    subtitle:
      'Divisione chiara del lavoro, ciclo chiuso insieme. VistaCast rileva anomalie; VistaRemote esegue l\'intervento.',
    flowAria: 'Flusso avviso VistaCast → takeover VistaRemote',
    flow: [
      { label: 'VistaCast', sub: 'Comportamento ad alto rischio rilevato' },
      { label: '→', sub: '' },
      { label: 'Avviso AI a livelli', sub: 'Gravità P1' },
      { label: '→', sub: '' },
      { label: 'VistaRemote', sub: 'Attiva takeover umano' },
      { label: '→', sub: '' },
      { label: 'Ciclo chiuso', sub: 'Log di audit archiviato' },
    ],
    colDim: 'Dimensione',
    colRemote: 'VistaRemote',
    colCast: 'VistaCast',
    tagControl: 'Controllo',
    tagView: 'Vista',
    tags: {
      bidirectional: 'Bidirezionale',
      unidirectional: 'Unidirezionale',
      receiveAlert: 'Ricevi segnale anomalia',
      manualClose: 'Takeover umano chiude il ciclo',
      detectAnomaly: 'Rileva anomalia spaziale',
      emitSignal: 'Emetti segnale alla fonte',
    },
    rows: [
      {
        dim: 'Vettore principale',
        vistaremote: 'Controller mobile / PC / endpoint Agent',
        vistacast: 'Telecamere di sicurezza fisse (ONVIF / RTSP)',
      },
      {
        dim: 'Valore principale',
        vistaremote: 'Intervento umano, controllo bidirezionale, audit registrazione',
        vistacast: 'Percezione AI, dati spaziali strutturati',
      },
      { dim: 'Direzione', vistaremote: 'bidirectional', vistacast: 'unidirectional' },
      {
        dim: 'Latenza',
        vistaremote: '< 100ms richiesto',
        vistacast: 'Analisi al secondo accettabile',
      },
      {
        dim: 'Capacità AI',
        vistaremote: 'Riepiloghi sessione, avvisi anomalie (LLM offline)',
        vistacast: 'Rilevamento oggetti, eventi spaziali (inferenza edge)',
      },
      {
        dim: 'Collaborazione',
        vistaremote: 'collab-remote',
        vistacast: 'collab-cast',
        highlight: true,
      },
      { dim: 'Self-hosted', vistaremote: 'check', vistacast: 'check' },
      { dim: 'Licenza', vistaremote: 'Polyform-NC', vistacast: 'Polyform-NC' },
    ],
  },
  ecosystem: {
    eyebrow: 'Integrazione ecosistema',
    title: 'L\'ultimo miglio dell\'intervento nella catena del valore',
    subtitle:
      'VistaRemote è l\'esecutore in LuminaryWorks — segnali di percezione, il layer remoto chiude il ciclo.',
    items: {
      VistaCast: {
        role: 'VistaCast · Vista',
        trigger: 'La visione AI attiva un avviso ad alto rischio',
        action: 'Attiva automaticamente VistaRemote per takeover umano',
        desc: 'Quando le telecamere rilevano intrusione, incendio o operazioni anomale, avvisi P1 vengono inviati via event bus. VistaRemote propone il takeover e sessione con un clic.',
      },
      SyncroBrain: {
        role: 'Motore orchestrazione IoT',
        trigger: 'Anomalia nodo IoT',
        action: 'Configurazione remota diretta sul backend dispositivo',
        desc: 'Quando i nodi IoT segnalano temperatura, tensione o guasti di comunicazione, i workflow SyncroBrain attivano sessioni VistaRemote per riparazione terminale diretta.',
      },
      DoerFlow: {
        role: 'Ticketing e dispatch',
        trigger: 'Consegna task post-dispatch',
        action: 'Desktop remoto per debug worker',
        desc: 'Dopo l\'assegnazione del task, i tecnici avviano VistaRemote da DoerFlow. Record di consegna e registrazioni si collegano automaticamente ai ticket per audit trail completo.',
      },
      DataLuminary: {
        role: 'Insight dati e dashboard',
        trigger: 'Report operativi e audit sessioni',
        action: 'Dashboard globali durata sessioni e audit',
        desc: 'Aggrega durata sessioni VistaRemote, frequenza azioni e conclusioni riepilogo AI in dashboard efficienza operativa e conformità per il management.',
      },
      BlockyEdu: {
        role: 'Piattaforma educativa visuale',
        trigger: 'Corsi lab WebRTC',
        action: 'Insegnamento sviluppo assistito da AI',
        desc: 'Lab pratici di controllo remoto WebRTC che insegnano lo sviluppo plugin personalizzati con VistaRemote Plugin SDK — l\'AI assiste coding e debug.',
      },
    },
  },
  quickstart: {
    eyebrow: 'Avvio rapido',
    title: 'Costruisci subito il tuo centro di controllo locale',
    subtitle:
      'Tre percorsi tra cui scegliere. Sviluppo da sorgente, deploy Docker one-click o sviluppo plugin — tutto type-safe e AI-friendly.',
    steps: [
      { n: '01', label: 'Clona repo e inizializza', sub: 'git clone + ./init.sh' },
      { n: '02', label: 'Configura .env e avvia servizi', sub: 'pnpm dev:mvp' },
      { n: '03', label: 'Apri Web Client', sub: 'localhost:3000' },
    ],
    tabsAria: 'Opzioni avvio rapido',
    tabs: { clone: 'Da sorgente', docker: 'Docker one-click', plugin: 'Crea un plugin' },
    copyAria: 'Copia codice',
    code: {
      clone: [
        { t: 'cmt', v: '# 1. Clona repository' },
        { t: 'cmd', v: 'git clone https://github.com/VistaRemote/vibeCode.git' },
        { t: 'cmd', v: 'cd vibeCode' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 2. Inizializza (genera .env, avvia Ollama + Redis + DB)' },
        { t: 'cmd', v: './init.ps1' },
        { t: 'cmt', v: '# Linux / macOS:' },
        { t: 'cmd', v: 'bash init.sh' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 3. Avvia servizi dev MVP' },
        { t: 'cmd', v: 'pnpm dev:mvp' },
        { t: '', v: '' },
        { t: 'cmt', v: '# Web Client →  http://localhost:3000' },
        { t: 'cmt', v: '# Admin API  →  http://localhost:4000' },
        { t: 'cmt', v: '# Signaling  →  ws://localhost:4001' },
      ],
      docker: [
        { t: 'cmt', v: '# Deploy Docker Compose one-click produzione' },
        { t: 'cmd', v: 'git clone https://github.com/VistaRemote/vibeCode.git' },
        { t: 'cmd', v: 'cd vibeCode' },
        { t: '', v: '' },
        { t: 'cmt', v: '# Configura ambiente' },
        { t: 'cmd', v: 'cp .env.example .env' },
        { t: 'arg', v: '# Modifica .env → imposta TURN_SECRET, DB_PASSWORD, LLM_MODEL' },
        { t: '', v: '' },
        { t: 'cmt', v: '# Avvia tutti i servizi (Ollama + BullMQ Worker)' },
        { t: 'cmd', v: 'docker compose -f docker-compose.prod.yml up -d' },
        { t: '', v: '' },
        { t: 'cmt', v: '# Verifica stato servizi' },
        { t: 'cmd', v: 'docker compose ps' },
      ],
      plugin: [
        { t: 'cmt', v: '# Scaffold ufficiale Plugin SDK' },
        { t: 'cmd', v: 'pnpm create @vistaremote/plugin my-plc-ui' },
        { t: 'cmd', v: 'cd my-plc-ui' },
        { t: '', v: '' },
        { t: 'cmt', v: '# Registra UI plugin' },
        { t: 'arg', v: 'import { registerUIPlugin } from "@vistaremote/plugin-sdk"' },
        { t: '', v: '' },
        { t: 'arg', v: 'registerUIPlugin({' },
        { t: 'arg', v: '  id: "my-plc-ui",' },
        { t: 'arg', v: '  match: (device) => device.type === "PLC",' },
        { t: 'arg', v: '  component: PLCPanel,' },
        { t: 'arg', v: '})' },
        { t: '', v: '' },
        { t: 'cmd', v: 'pnpm dev   # Hot-reload nell\'istanza VistaRemote locale' },
      ],
    },
  },
}

export default it
