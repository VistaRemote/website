import type { Messages } from '../types'

const ja: Messages = {
  meta: {
    title: 'VistaRemote — オープンソース WebRTC リモートデスクトップ · セルフホスト AI インサイト',
    description:
      'クロスプラットフォームのリアルタイムリモートデスクトップ制御。セッション録画、AI サマリー、監査ログ — オープンソースで完全セルフホスト可能。産業用 PC、エッジゲートウェイ、IT デスクトップ向けに設計。',
  },
  common: {
    skipToContent: 'メインコンテンツへスキップ',
    backToTop: 'ページ上部へ戻る',
    copy: 'コピー',
    copied: 'コピーしました',
    brandSubtitle: 'VistaRemote',
    luminaryBadge: 'LuminaryWorks · VistaRemote · 制御',
    sharedCodeLabel: '共有コードレイヤー',
    sharedCodeDesc:
      '4 つのプラットフォームすべてが同じ TypeScript 型、Zod スキーマ、ビジネスフックを共有。Electron が Desktop + Web を、React Native が Android + iOS を担います。一度開発すれば、どこでも展開できます。',
    mitLicense: 'Polyform Noncommercial License',
    footerTagline: 'データはオンプレミス · 100% セルフホスト · 監査対応',
    partOf: 'Part of',
  },
  header: {
    homeAria: 'VistaRemote ホーム',
    navAria: 'メインナビゲーション',
    mobileNavAria: 'モバイルナビゲーション',
    toggleLangAria: '言語を変更',
    menuAria: 'メニュー',
    signIn: 'サインイン',
    signInTooltip: 'コンソールにサインイン',
    nav: {
      capabilities: '機能',
      multiplatform: 'マルチプラットフォーム',
      architecture: 'アーキテクチャ',
      ecosystem: 'エコシステム',
      docs: 'ドキュメント',
    },
  },
  footer: {
    tagline:
      'セルフホスト AI セッションインサイト付きのオープンソース WebRTC リモートデスクトップ。産業オペレーション、IT サポート、コンプライアンス監査向けに構築。',
    product: '製品',
    resources: 'リソース',
    ecosystem: 'エコシステム',
    links: {
      capabilities: '機能',
      multiplatform: 'マルチプラットフォーム',
      plugins: 'プラグインアーキテクチャ',
      architecture: 'アーキテクチャ',
      devDocs: '開発者ドキュメント',
      pluginSdk: 'Plugin SDK',
      apiRef: 'API リファレンス',
      changelog: '変更履歴',
      docs: 'ドキュメント',
    },
  },
  hero: {
    title: '現場にリモートで届く。インサイトはデータセンターに留まる。',
    titleEn: 'WebRTC Remote Control + Self-Hosted AI Audit',
    desc: 'クロスプラットフォームのリアルタイムリモートデスクトップとデバイステイクオーバー。超低遅延 WebRTC と LLM 駆動のセッション録画、AI サマリー、監査ログを組み合わせ。100% セルフホスト。産業用 PC、エッジゲートウェイ、IT デスクトップ運用向けに設計。',
    ctaPrimary: 'クイックスタートデプロイ',
    ctaSecondary: '開発者・プラグインドキュメント',
    stats: [
      { v: '42ms', l: '最小遅延' },
      { v: '100%', l: 'セルフホスト' },
      { v: 'マルチプラットフォーム', l: 'Web · Desktop · iOS · Android' },
      { v: 'Polyform-NC', l: 'オープンソース' },
    ],
    mockAria: 'リモートセッションモック UI',
    tags: ['WebRTC 42ms', '録画中', 'AES-256 暗号化', 'マルチデバイス'],
  },
  scenarios: {
    eyebrow: 'ユースケース',
    title: '高価値オペレーションとアシスト向けに構築',
    subtitle:
      'エンタープライズ制御とコンプライアンス監査に特化。何でも屋にはならない — 重要なことに卓越します。',
    cards: [
      {
        title: '産業 / エッジオペレーション',
        desc: '物理的距離の制限なくファームウェアデバッグとデバイスメンテナンス。産業用 PC とエッジゲートウェイをリモートでテイクオーバー。',
        tags: ['産業制御', 'エッジコンピューティング'],
      },
      {
        title: 'マネージド IT サービスプロバイダー',
        desc: 'クライアント向けリモートデスクトップサポートでトラブルシューティングを高速化。現地派遣を単一リンクに置き換え。',
        tags: ['IT サービス', 'デスクトップサポート'],
      },
      {
        title: '厳格なコンプライアンスとセルフホスティング',
        desc: 'データとログはネットワーク外に出ません。金融・政府の監査要件を満たします。セルフホスト TURN、パブリックリレーなし。',
        tags: ['金融コンプライアンス', 'オンプレミス'],
      },
      {
        title: 'AI セッションインサイト',
        desc: '録画サマリーの自動生成、異常検知、運用効率レポート。AI はオフライン動作 — データは外部に出ません。',
        tags: ['AI 分析', '監査レポート'],
      },
    ],
    notFitLabel: '不向きな用途',
    notFitBold: '数百万同時視聴者の大規模ライブストリーミング、グローバル CDN エンターテインメント',
    notFitRest:
      '— VistaRemote は低遅延双方向制御とコンプライアンス監査に特化し、大規模一方向ストリーミングには適しません。専用ストリーミング配信ソリューションをご利用ください。',
  },
  capabilities: {
    eyebrow: 'コア機能',
    title: 'すべてを制御するコンソール',
    subtitle:
      'ミリ秒単位のトランスポートから AI セッションインサイト、コンプライアンス監査ループまで — エンタープライズリモートオペレーションを網羅する 3 つの次元。',
    tabs: { realtime: 'リアルタイム制御', audit: '録画と AI', management: '統合管理' },
    realtime: {
      conn: {
        title: '接続とプロトコル',
        items: [
          'DTLS 暗号化シグナリングによるミリ秒遅延の WebRTC リモートデスクトップ',
          'セルフホスト TURN サーバー、LAN 優先でパブリックフォールバック、接続成功率 >99%',
          'NVENC / VAAPI ハードウェアアクセラレーション付き H.264 / H.265 / VP8 適応コーデック',
          '60fps 高フレームレート、ゼロラグのマウス・キーボードインジェクション',
        ],
        tags: ['WebRTC', 'DTLS', 'TURN', 'NVENC', 'H.265'],
      },
      control: {
        title: '制御機能',
        items: [
          '完全なキーボードマッピングとホットキーインターセプト、システムレベルショートカット（Electron）',
          'マルチモニター独立マッピング、シームレスなストリーム切り替え',
          '双方向ファイル転送、ドラッグ＆ドロップアップロード',
          'クリップボード同期とテキストペーストインジェクション',
        ],
        tags: ['マルチモニター', 'ファイル転送', 'クリップボード', 'Electron'],
      },
    },
    audit: {
      record: {
        title: '録画とストレージ',
        items: [
          'MP4 / WebM 形式の HD セッション録画、セルフホストオフラインストレージ',
          '巨大ファイル回避のための時間セグメント分割ストレージ、S3 互換オブジェクトストレージ',
          '秒単位検索・シーク用の構造化録画メタデータ',
        ],
        tags: ['MP4', 'S3 互換', 'セグメント分割', 'オフラインストレージ'],
      },
      ai: {
        title: 'AI サマリーとアラート',
        items: [
          'BullMQ + セルフホスト LLM（Ollama）による非同期パイプライン',
          'スマートサマリーはオンプレミスに留まる — LLM はデータセンターで稼働',
          '異常検知（誤った DB 削除、コアプロセス終了）と秒単位アラート',
          'セッションサマリーをチケットに自動記録（Workflow プラグインで拡張可能）',
        ],
        tags: ['BullMQ', 'Ollama', 'オフライン LLM', '異常検知'],
      },
    },
    management: {
      device: {
        title: 'デバイスとセッション管理',
        items: [
          'ペアリングコード機構 — 固定 IP 不要、ゼロコンフィグオンボーディング',
          'セッション強制終了、特定キーのブロック、セーフドライビングモード',
          '粒度の細かい監査ログ — すべてのキーストロークとクリックを追跡可能',
        ],
        tags: ['ペアリングコード', '監査ログ', 'セッション制御', 'ゼロコンフィグ'],
      },
      auth: {
        title: '権限と SSO',
        items: [
          '閲覧専用画面からフル制御までの RBAC',
          'ネイティブ LuminaryWorks OIDC シングルサインオン',
          '顧客別ネームスペースと監査ドメインによるマルチテナント分離',
        ],
        tags: ['RBAC', 'OIDC', 'SSO', 'マルチテナント'],
      },
    },
  },
  multiplatform: {
    eyebrow: '4 プラットフォーム、1 コードベース',
    title: 'Electron + React Native — 1 コード、4 プラットフォーム',
    subtitle:
      'Electron と React Native のデュアルランタイムで Web、Desktop、Android、iOS をカバー。共有 TypeScript ビジネスレイヤーと UI コンポーネント — 重複開発なし。',
    platforms: [
      {
        name: 'Web Client',
        label: 'browser · zero-install',
        desc: '軽量ゼロインストールコンソール。ブラウザを開いて接続 — ローカルアプリ不要。アドホックサポートと一時的なオペレーションに最適。',
        tags: ['React', 'WebRTC', 'PWA'],
        feats: ['ゼロインストール起動', 'レスポンシブレイアウト', 'マルチウィンドウ', 'Web Share API'],
      },
      {
        name: 'Desktop',
        label: 'Electron · クロスプラットフォーム',
        desc: '没入型の深い制御。システムレベルホットキーインターセプト（Ctrl/Cmd + Alt）、マルチスクリーンマッピング、ドラッグ＆ドロップファイル転送。長期運用エンジニア向け。',
        tags: ['Electron', 'Node.js', 'DXGI'],
        feats: ['ホットキーインターセプト', 'マルチスクリーン', 'ローカルクリップボード', 'オフラインセッションキャッシュ'],
      },
      {
        name: 'Mobile',
        label: 'React Native · iOS & Android',
        desc: '現場エンジニア向けモバイル制御。タッチジェスチャーをリモートマウス操作にマッピングし、スマートフォンからデバイスアラートに対応。',
        tags: ['React Native', 'Expo', 'WebRTC'],
        feats: ['タッチジェスチャーマッピング', '向き適応', 'プッシュウェイクテイクオーバー', '生体認証'],
      },
    ],
  },
  plugins: {
    eyebrow: 'プラグインアーキテクチャ',
    title: 'パズルのピースのようにリモート機能を拡張',
    subtitle:
      'リモート制御は見てクリックするだけではありません。プラグインアーキテクチャはストリーミングとビジネスロジックを 3 つの拡張レイヤーで分離します。',
    pipeline: ['ストリーミングコア', 'UI Plugins', 'Workflow Plugins', 'AI Plugins', '監査出力'],
    pipelineAria: 'プラグインパイプライン: UI → Workflow → AI 分析',
    items: [
      {
        type: 'UI Plugins',
        title: 'インタラクションレイヤー',
        desc: 'デバイス固有のコントロールパネルを動的にロード。コミュニティ製バーチャルゲームパッド、PLC コンソール、産業ダッシュボード — コア変更不要。',
        examples: ['バーチャルゲームパッド', 'PLC コンソール', 'HMI ダッシュボード', 'タッチキーボード'],
      },
      {
        type: 'Workflow Plugins',
        title: 'ワークフローレイヤー',
        desc: '既存のエンタープライズシステムに接続。Jira/Lark 承認フローのホットスワップ、ペアリング認証、カスタムオンライン/オフラインフック — シームレスな統合。',
        examples: ['Jira 連携', 'Lark 承認', 'ペアリング認証', 'セッションフック'],
      },
      {
        type: 'AI Plugins',
        title: '分析レイヤー',
        desc: 'セッションストリームにカスタム分析モデルを接続。機密操作（DB 削除、コアプロセス終了）で秒単位アラート。独自 LLM を持ち込み可能。',
        examples: ['リアルタイムアラート', 'セッションサマリー', '異常タグ付け', 'コンプライアンスエクスポート'],
      },
    ],
    registryTitle: 'オープンプラグインレジストリ',
    registryDesc:
      'すべてのプラグインは @vistaremote/plugin-sdk でホットリロード登録 — メインプロセス再起動不要。コミュニティプラグインは公式マーケットプレイスに掲載。',
  },
  architecture: {
    eyebrow: 'ギークアーキテクチャ',
    title: 'フルスタック TypeScript + 外科的 Rust',
    subtitle:
      '最大の均一性、ポリグロットのフランケンシュタインなし。AI（Vibe Coding）をカスタマイズの最高のコパイロットに。',
    vibeTitle: 'Vibe Coding フレンドリー',
    vibeDesc:
      '強い型付けのエンドツーエンド TypeScript。AI IDE（Copilot/Cursor）は明確なコンテキストを取得 — 混合言語プロジェクトより LLM 支援開発がはるかに成功します。',
    layers: [
      {
        name: '共有コントラクト',
        en: 'shared · contracts',
        desc: 'Zod による厳格なフロント/バック型共有。すべての API リクエスト/レスポンス形状、エンティティ、列挙型をここで定義 — 完全な TypeScript 推論。',
        tags: ['Zod', 'TypeScript', 'monorepo'],
      },
      {
        name: 'サーバーシグナリング',
        en: 'server · signaling & api',
        desc: 'NestJS が信頼性の高い REST API と WebRTC シグナリングルートを提供。モジュラーアーキテクチャ — 各ドメインに専用の module/controller/service。',
        tags: ['NestJS', 'WebSocket', 'Redis Pub/Sub'],
      },
      {
        name: 'クライアントビジネスレイヤー',
        en: 'client · react / rn / electron',
        desc: 'React / React Native / Electron がビジネスフックと状態を共有。UI は異なるが、コアロジックはゼロ重複。コード再利用率 >70%。',
        tags: ['React', 'React Native', 'Electron', 'Zustand'],
      },
      {
        name: 'Rust パフォーマンスレイヤー',
        en: 'rust · codec & capture',
        desc: 'Rust はホットパスのみ: DXGI/NVENC 画面キャプチャとコーデック。TypeScript が napi-rs 経由で Rust を呼び出し — メインコードベースを汚さず最高性能。',
        tags: ['Rust', 'DXGI', 'NVENC', 'napi-rs'],
      },
      {
        name: 'AI Worker レイヤー',
        en: 'worker · ai & queue',
        desc: 'BullMQ 非同期キューでセッション録画と AI サマリージョブ。Docker Compose ワンクリック Ollama — プライベート LLM オフライン、データはラック内に留まる。',
        tags: ['BullMQ', 'Ollama', 'Docker Compose', 'LLM'],
      },
    ],
  },
  comparison: {
    eyebrow: 'エコシステムシナジー',
    title: '並列比較: VistaRemote',
    titleControl: '制御',
    titleView: '視',
    subtitle:
      '明確な役割分担、一体のクローズドループ。VistaCast が異常を検知し、VistaRemote が介入を実行。',
    flowAria: 'VistaCast アラート → VistaRemote テイクオーバーフロー',
    flow: [
      { label: 'VistaCast', sub: '高リスク行動を検知' },
      { label: '→', sub: '' },
      { label: 'AI 段階別アラート', sub: '重大度 P1' },
      { label: '→', sub: '' },
      { label: 'VistaRemote', sub: '人間テイクオーバーを起動' },
      { label: '→', sub: '' },
      { label: 'クローズドループ', sub: '監査ログをアーカイブ' },
    ],
    colDim: '次元',
    colRemote: 'VistaRemote',
    colCast: 'VistaCast',
    tagControl: '制御',
    tagView: '視',
    tags: {
      bidirectional: '双方向',
      unidirectional: '一方向',
      receiveAlert: '異常シグナルを受信',
      manualClose: '人間テイクオーバーでループを閉じる',
      detectAnomaly: '空間異常を検知',
      emitSignal: 'ソースでシグナルを発信',
    },
    rows: [
      {
        dim: 'コアキャリア',
        vistaremote: 'モバイル / PC コントローラー / Agent エンドポイント',
        vistacast: '固定防犯カメラ（ONVIF / RTSP）',
      },
      {
        dim: 'コアバリュー',
        vistaremote: '人間介入、双方向制御、録画監査',
        vistacast: 'AI 知覚、構造化空間データ',
      },
      { dim: '方向', vistaremote: 'bidirectional', vistacast: 'unidirectional' },
      {
        dim: '遅延',
        vistaremote: '< 100ms 必須',
        vistacast: '秒単位分析で許容',
      },
      {
        dim: 'AI 機能',
        vistaremote: 'セッションサマリー、異常アラート（オフライン LLM）',
        vistacast: '物体検出、空間イベント（エッジ推論）',
      },
      {
        dim: 'コラボレーション',
        vistaremote: 'collab-remote',
        vistacast: 'collab-cast',
        highlight: true,
      },
      { dim: 'セルフホスト', vistaremote: 'check', vistacast: 'check' },
      { dim: 'ライセンス', vistaremote: 'Polyform-NC', vistacast: 'Polyform-NC' },
    ],
  },
  ecosystem: {
    eyebrow: 'エコシステム統合',
    title: 'バリューチェーンにおける介入のラストマイル',
    subtitle:
      'VistaRemote は LuminaryWorks の実行者 — 知覚シグナル、リモートレイヤーがループを閉じる。',
    items: {
      VistaCast: {
        role: 'VistaCast · 視',
        trigger: 'AI ビジョンが高リスクアラートをトリガー',
        action: '人間テイクオーバーのため VistaRemote を自動起動',
        desc: 'カメラが侵入、火災、異常操作を検知すると、イベントバス経由で P1 アラートをプッシュ。VistaRemote がテイクオーバーを促し、ワンクリックでセッションを確立。',
      },
      SyncroBrain: {
        role: 'IoT オーケストレーションエンジン',
        trigger: 'IoT ノード異常',
        action: 'デバイスバックエンドへの直接リモート設定',
        desc: 'IoT ノードが温度、電圧、通信障害を報告すると、SyncroBrain ワークフローが VistaRemote セッションをトリガーし、運用者が端末を直接修復。',
      },
      DoerFlow: {
        role: 'チケットとディスパッチ',
        trigger: 'ディスパッチ後のタスク配信',
        action: 'ワーカーデバッグ用リモートデスクトップ',
        desc: 'タスク割り当て後、技術者は DoerFlow から VistaRemote を起動。配信記録と録画がチケットに自動リンクされ、完全な監査証跡を形成。',
      },
      DataLuminary: {
        role: 'データインサイトとダッシュボード',
        trigger: '運用レポートとセッション監査',
        action: 'グローバルセッション時間と監査ダッシュボード',
        desc: 'VistaRemote セッション時間、操作頻度、AI サマリー結論を集約し、経営層向けの運用効率とコンプライアンスダッシュボードを生成。',
      },
      BlockyEdu: {
        role: 'ビジュアル教育プラットフォーム',
        trigger: 'WebRTC ラボコース',
        action: 'AI 支援開発教育',
        desc: 'VistaRemote Plugin SDK でカスタムプラグイン開発を教える WebRTC リモート制御ハンズオンラボ — AI がコーディングとデバッグを支援。',
      },
    },
  },
  quickstart: {
    eyebrow: 'クイックスタート',
    title: '今すぐローカルコントロールセンターを構築',
    subtitle:
      '3 つのパスから選択。ソース開発、Docker ワンクリックデプロイ、プラグイン開発 — すべて型安全で AI フレンドリー。',
    steps: [
      { n: '01', label: 'リポジトリをクローンして初期化', sub: 'git clone + ./init.sh' },
      { n: '02', label: '.env を設定してサービスを起動', sub: 'pnpm dev:mvp' },
      { n: '03', label: 'Web Client を開く', sub: 'localhost:3000' },
    ],
    tabsAria: 'クイックスタートオプション',
    tabs: { clone: 'ソースから', docker: 'Docker ワンクリック', plugin: 'プラグインを作成' },
    copyAria: 'コードをコピー',
    code: {
      clone: [
        { t: 'cmt', v: '# 1. リポジトリをクローン' },
        { t: 'cmd', v: 'git clone https://github.com/VistaRemote/vibeCode.git' },
        { t: 'cmd', v: 'cd vibeCode' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 2. 初期化（.env 生成、Ollama + Redis + DB 起動）' },
        { t: 'cmd', v: './init.ps1' },
        { t: 'cmt', v: '# Linux / macOS:' },
        { t: 'cmd', v: 'bash init.sh' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 3. MVP 開発サービスを起動' },
        { t: 'cmd', v: 'pnpm dev:mvp' },
        { t: '', v: '' },
        { t: 'cmt', v: '# Web Client →  http://localhost:3000' },
        { t: 'cmt', v: '# Admin API  →  http://localhost:4000' },
        { t: 'cmt', v: '# Signaling  →  ws://localhost:4001' },
      ],
      docker: [
        { t: 'cmt', v: '# 本番 Docker Compose ワンクリックデプロイ' },
        { t: 'cmd', v: 'git clone https://github.com/VistaRemote/vibeCode.git' },
        { t: 'cmd', v: 'cd vibeCode' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 環境を設定' },
        { t: 'cmd', v: 'cp .env.example .env' },
        { t: 'arg', v: '# .env を編集 → TURN_SECRET, DB_PASSWORD, LLM_MODEL を設定' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 全サービスを起動（Ollama + BullMQ Worker）' },
        { t: 'cmd', v: 'docker compose -f docker-compose.prod.yml up -d' },
        { t: '', v: '' },
        { t: 'cmt', v: '# サービス状態を確認' },
        { t: 'cmd', v: 'docker compose ps' },
      ],
      plugin: [
        { t: 'cmt', v: '# 公式 Plugin SDK スキャフォールド' },
        { t: 'cmd', v: 'pnpm create @vistaremote/plugin my-plc-ui' },
        { t: 'cmd', v: 'cd my-plc-ui' },
        { t: '', v: '' },
        { t: 'cmt', v: '# UI プラグインを登録' },
        { t: 'arg', v: 'import { registerUIPlugin } from "@vistaremote/plugin-sdk"' },
        { t: '', v: '' },
        { t: 'arg', v: 'registerUIPlugin({' },
        { t: 'arg', v: '  id: "my-plc-ui",' },
        { t: 'arg', v: '  match: (device) => device.type === "PLC",' },
        { t: 'arg', v: '  component: PLCPanel,' },
        { t: 'arg', v: '})' },
        { t: '', v: '' },
        { t: 'cmd', v: 'pnpm dev   # ローカル VistaRemote インスタンスへホットリロード' },
      ],
    },
  },
}

export default ja
