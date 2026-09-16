export type Locale =
  | 'en'
  | 'zh-CN'
  | 'zh-TW'
  | 'es'
  | 'pt'
  | 'nl'
  | 'it'
  | 'ja'
  | 'ko'

export const LOCALES: Locale[] = [
  'en',
  'zh-CN',
  'zh-TW',
  'es',
  'pt',
  'nl',
  'it',
  'ja',
  'ko',
]

export const DEFAULT_LOCALE: Locale = 'zh-CN'

export interface ScenarioCard {
  title: string
  desc: string
  tags: string[]
}

export interface PlatformItem {
  name: string
  label: string
  desc: string
  tags: string[]
  feats: string[]
}

export interface PluginItem {
  type: string
  title: string
  desc: string
  examples: string[]
}

export interface ArchLayer {
  name: string
  en: string
  desc: string
  tags: string[]
}

export interface EcoItem {
  role: string
  trigger: string
  action: string
  desc: string
}

export interface ComparisonRow {
  dim: string
  vistaremote: string
  vistacast: string
  vistaremoteTag?: string
  vistaremoteSub?: string
  vistacastTag?: string
  vistacastSub?: string
  highlight?: boolean
}

export interface CapGroup {
  title: string
  items: string[]
  tags: string[]
}

export interface CodeLine {
  t: 'cmt' | 'cmd' | 'arg' | 'url' | ''
  v: string
}

export interface Messages {
  meta: { title: string; description: string }
  common: {
    skipToContent: string
    backToTop: string
    copy: string
    copied: string
    brandSubtitle: string
    luminaryBadge: string
    sharedCodeLabel: string
    sharedCodeDesc: string
    mitLicense: string
    footerTagline: string
    partOf: string
  }
  header: {
    homeAria: string
    navAria: string
    mobileNavAria: string
    toggleLangAria: string
    menuAria: string
    signIn: string
    signInTooltip: string
    download: string
    nav: {
      capabilities: string
      multiplatform: string
      architecture: string
      ecosystem: string
      docs: string
    }
  }
  download: {
    title: string
    lead: string
    note: string
    agentTitle: string
    agentBlurb: string
    viewerTitle: string
    viewerBlurb: string
    androidTitle: string
    androidBlurb: string
    winSetup: string
    winPortable: string
    macDmg: string
    apk: string
    releases: string
    unsigned: string
    versionPrefix: string
    backHome: string
    hostedOn: string
  }
  footer: {
    tagline: string
    product: string
    resources: string
    ecosystem: string
    links: {
      capabilities: string
      multiplatform: string
      plugins: string
      architecture: string
      devDocs: string
      pluginSdk: string
      apiRef: string
      changelog: string
      docs: string
    }
  }
  hero: {
    title: string
    titleEn: string
    desc: string
    ctaPrimary: string
    ctaSecondary: string
    stats: { v: string; l: string }[]
    mockAria: string
    tags: string[]
  }
  scenarios: {
    eyebrow: string
    title: string
    subtitle: string
    cards: ScenarioCard[]
    notFitLabel: string
    notFitBold: string
    notFitRest: string
  }
  capabilities: {
    eyebrow: string
    title: string
    subtitle: string
    tabs: { realtime: string; audit: string; management: string }
    realtime: { conn: CapGroup; control: CapGroup }
    audit: { record: CapGroup; ai: CapGroup }
    management: { device: CapGroup; auth: CapGroup }
  }
  multiplatform: {
    eyebrow: string
    title: string
    subtitle: string
    platforms: PlatformItem[]
  }
  plugins: {
    eyebrow: string
    title: string
    subtitle: string
    pipeline: string[]
    pipelineAria: string
    items: PluginItem[]
    registryTitle: string
    registryDesc: string
  }
  architecture: {
    eyebrow: string
    title: string
    subtitle: string
    vibeTitle: string
    vibeDesc: string
    layers: ArchLayer[]
  }
  comparison: {
    eyebrow: string
    title: string
    titleControl: string
    titleView: string
    subtitle: string
    flowAria: string
    flow: { label: string; sub: string }[]
    colDim: string
    colRemote: string
    colCast: string
    tagControl: string
    tagView: string
    rows: ComparisonRow[]
    tags: {
      bidirectional: string
      unidirectional: string
      receiveAlert: string
      manualClose: string
      detectAnomaly: string
      emitSignal: string
    }
  }
  ecosystem: {
    eyebrow: string
    title: string
    subtitle: string
    items: {
      VistaCast: EcoItem
      SyncroBrain: EcoItem
      DoerFlow: EcoItem
      DataLuminary: EcoItem
      BlockyEdu: EcoItem
    }
  }
  quickstart: {
    eyebrow: string
    title: string
    subtitle: string
    steps: { n: string; label: string; sub: string }[]
    tabsAria: string
    tabs: { clone: string; docker: string; plugin: string }
    code: { clone: CodeLine[]; docker: CodeLine[]; plugin: CodeLine[] }
    copyAria: string
  }
}
