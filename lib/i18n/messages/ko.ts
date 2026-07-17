import type { Messages } from '../types'

const ko: Messages = {
  meta: {
    title: 'VistaRemote — 오픈소스 WebRTC 원격 데스크톱 · 셀프호스팅 AI 인사이트',
    description:
      '크로스 플랫폼 실시간 원격 데스크톱 제어. 세션 녹화, AI 요약, 감사 로그 — 오픈소스이며 완전 셀프호스팅 가능. 산업용 PC, 엣지 게이트웨이, IT 데스크톱용으로 설계.',
  },
  common: {
    skipToContent: '본문으로 건너뛰기',
    backToTop: '맨 위로',
    copy: '복사',
    copied: '복사됨',
    brandSubtitle: 'VistaRemote',
    luminaryBadge: 'LuminaryWorks · VistaRemote · 제어',
    sharedCodeLabel: '공유 코드 레이어',
    sharedCodeDesc:
      '네 플랫폼 모두 동일한 TypeScript 타입, Zod 스키마, 비즈니스 훅을 공유합니다. Electron이 Desktop + Web을, React Native가 Android + iOS를 담당합니다. 한 번 개발하고 어디서나 배포하세요.',
    mitLicense: 'Polyform Noncommercial License',
    footerTagline: '데이터는 온프레미스 · 100% 셀프호스팅 · 감사 대응',
    partOf: 'Part of',
  },
  header: {
    homeAria: 'VistaRemote 홈',
    navAria: '주요 내비게이션',
    mobileNavAria: '모바일 내비게이션',
    toggleLangAria: '언어 변경',
    menuAria: '메뉴',
    signIn: '로그인',
    signInTooltip: '콘솔에 로그인',
    nav: {
      capabilities: '기능',
      multiplatform: '멀티 플랫폼',
      architecture: '아키텍처',
      ecosystem: '에코시스템',
      docs: '문서',
    },
  },
  footer: {
    tagline:
      '셀프호스팅 AI 세션 인사이트를 갖춘 오픈소스 WebRTC 원격 데스크톱. 산업 운영, IT 지원, 컴플라이언스 감사를 위해 구축.',
    product: '제품',
    resources: '리소스',
    ecosystem: '에코시스템',
    links: {
      capabilities: '기능',
      multiplatform: '멀티 플랫폼',
      plugins: '플러그인 아키텍처',
      architecture: '아키텍처',
      devDocs: '개발자 문서',
      pluginSdk: 'Plugin SDK',
      apiRef: 'API 레퍼런스',
      changelog: '변경 이력',
      docs: '문서',
    },
  },
  hero: {
    title: '현장에 원격으로 닿고, 인사이트는 데이터센터에 남깁니다.',
    titleEn: 'WebRTC Remote Control + Self-Hosted AI Audit',
    desc: '크로스 플랫폼 실시간 원격 데스크톱 및 디바이스 테이크오버. 초저지연 WebRTC와 LLM 기반 세션 녹화, AI 요약, 감사 로그를 결합. 100% 셀프호스팅. 산업용 PC, 엣지 게이트웨이, IT 데스크톱 운영용으로 설계.',
    ctaPrimary: '빠른 시작 배포',
    ctaSecondary: '개발자 및 플러그인 문서',
    stats: [
      { v: '42ms', l: '최소 지연' },
      { v: '100%', l: '셀프호스팅' },
      { v: '멀티 플랫폼', l: 'Web · Desktop · iOS · Android' },
      { v: 'Polyform-NC', l: '오픈소스' },
    ],
    mockAria: '원격 세션 모의 UI',
    tags: ['WebRTC 42ms', '녹화 중', 'AES-256 암호화', '멀티 디바이스'],
  },
  scenarios: {
    eyebrow: '사용 사례',
    title: '고가치 운영 및 지원을 위해 구축',
    subtitle:
      '엔터프라이즈 제어와 컴플라이언스 감사에 집중합니다. 모든 것을 하려 하지 않습니다 — 중요한 것에 탁월합니다.',
    cards: [
      {
        title: '산업 / 엣지 운영',
        desc: '물리적 거리 제한 없이 펌웨어 디버깅 및 디바이스 유지보수. 산업용 PC와 엣지 게이트웨이를 원격으로 테이크오버.',
        tags: ['산업 제어', '엣지 컴퓨팅'],
      },
      {
        title: '관리형 IT 서비스 제공업체',
        desc: '고객 데스크톱 원격 지원으로 문제 해결을 더 빠르게. 현장 출동을 단일 링크로 대체.',
        tags: ['IT 서비스', '데스크톱 지원'],
      },
      {
        title: '엄격한 컴플라이언스 및 셀프호스팅',
        desc: '데이터와 로그는 네트워크를 벗어나지 않습니다. 금융 및 정부 감사 요건을 충족. 셀프호스팅 TURN, 공용 릴레이 없음.',
        tags: ['금융 컴플라이언스', '온프레미스'],
      },
      {
        title: 'AI 세션 인사이트',
        desc: '녹화 요약 자동 생성, 이상 탐지, 운영 효율 보고서. AI는 오프라인으로 동작 — 데이터는 외부로 나가지 않습니다.',
        tags: ['AI 분석', '감사 보고서'],
      },
    ],
    notFitLabel: '부적합한 용도',
    notFitBold: '수백만 동시 시청자 대규모 라이브 스트리밍, 글로벌 CDN 엔터테인먼트',
    notFitRest:
      '— VistaRemote는 저지연 양방향 제어와 컴플라이언스 감사에 집중하며, 대규모 단방향 스트리밍에는 적합하지 않습니다. 전용 스트리밍 배포 솔루션을 사용하세요.',
  },
  capabilities: {
    eyebrow: '핵심 기능',
    title: '모든 것을 제어하는 콘솔',
    subtitle:
      '밀리초 단위 전송부터 AI 세션 인사이트, 컴플라이언스 감사 루프까지 — 엔터프라이즈 원격 운영을 아우르는 세 가지 차원.',
    tabs: { realtime: '실시간 제어', audit: '녹화 및 AI', management: '통합 관리' },
    realtime: {
      conn: {
        title: '연결 및 프로토콜',
        items: [
          'DTLS 암호화 시그널링을 갖춘 밀리초 지연 WebRTC 원격 데스크톱',
          '셀프호스팅 TURN 서버, LAN 우선 및 공용 폴백, 연결 성공률 >99%',
          'NVENC / VAAPI 하드웨어 가속 H.264 / H.265 / VP8 적응형 코덱',
          '60fps 고프레임레이트, 제로 랙 마우스 및 키보드 인젝션',
        ],
        tags: ['WebRTC', 'DTLS', 'TURN', 'NVENC', 'H.265'],
      },
      control: {
        title: '제어 기능',
        items: [
          '전체 키보드 매핑 및 단축키 가로채기, 시스템 수준 단축키(Electron)',
          '멀티 모니터 독립 매핑, 끊김 없는 스트림 전환',
          '양방향 파일 전송, 드래그 앤 드롭 업로드',
          '클립보드 동기화 및 텍스트 붙여넣기 인젝션',
        ],
        tags: ['멀티 모니터', '파일 전송', '클립보드', 'Electron'],
      },
    },
    audit: {
      record: {
        title: '녹화 및 저장',
        items: [
          'MP4 / WebM HD 세션 녹화, 셀프호스팅 오프라인 저장',
          '과대 파일 방지를 위한 시간 세그먼트 저장, S3 호환 객체 저장소',
          '초 단위 검색 및 탐색을 위한 구조화된 녹화 메타데이터',
        ],
        tags: ['MP4', 'S3 호환', '세그먼트', '오프라인 저장'],
      },
      ai: {
        title: 'AI 요약 및 알림',
        items: [
          'BullMQ + 셀프호스팅 LLM(Ollama) 비동기 파이프라인',
          '스마트 요약은 온프레미스에 유지 — LLM은 데이터센터에서 실행',
          '이상 탐지(실수로 DB 삭제, 핵심 프로세스 종료) 및 초 단위 알림',
          '세션 요약을 티켓에 자동 기록(Workflow 플러그인으로 확장 가능)',
        ],
        tags: ['BullMQ', 'Ollama', '오프라인 LLM', '이상 탐지'],
      },
    },
    management: {
      device: {
        title: '디바이스 및 세션 관리',
        items: [
          '페어링 코드 메커니즘 — 고정 IP 불필요, 제로 설정 온보딩',
          '세션 강제 종료, 특정 키 차단, 안전 운전 모드',
          '세밀한 감사 로그 — 모든 키 입력과 클릭 추적 가능',
        ],
        tags: ['페어링 코드', '감사 로그', '세션 제어', '제로 설정'],
      },
      auth: {
        title: '권한 및 SSO',
        items: [
          '보기 전용 화면부터 전체 제어까지 RBAC',
          '네이티브 LuminaryWorks OIDC 싱글 사인온',
          '고객별 네임스페이스 및 감사 도메인으로 멀티 테넌트 격리',
        ],
        tags: ['RBAC', 'OIDC', 'SSO', '멀티 테넌트'],
      },
    },
  },
  multiplatform: {
    eyebrow: '네 플랫폼, 하나의 코드베이스',
    title: 'Electron + React Native — 하나의 코드, 네 플랫폼',
    subtitle:
      'Electron과 React Native 듀얼 런타임으로 Web, Desktop, Android, iOS를 커버. 공유 TypeScript 비즈니스 레이어 및 UI 컴포넌트 — 중복 개발 없음.',
    platforms: [
      {
        name: 'Web Client',
        label: 'browser · zero-install',
        desc: '경량 제로 설치 콘솔. 브라우저를 열고 연결 — 로컬 앱 불필요. 임시 지원 및 단기 운영에 이상적.',
        tags: ['React', 'WebRTC', 'PWA'],
        feats: ['제로 설치 실행', '반응형 레이아웃', '멀티 윈도우', 'Web Share API'],
      },
      {
        name: 'Desktop',
        label: 'Electron · 크로스 플랫폼',
        desc: '몰입형 심층 제어. 시스템 수준 단축키 가로채기(Ctrl/Cmd + Alt), 멀티 스크린 매핑, 드래그 앤 드롭 파일 전송. 장기 운영 엔지니어용.',
        tags: ['Electron', 'Node.js', 'DXGI'],
        feats: ['단축키 가로채기', '멀티 스크린', '로컬 클립보드', '오프라인 세션 캐시'],
      },
      {
        name: 'Mobile',
        label: 'React Native · iOS & Android',
        desc: '현장 엔지니어용 모바일 제어. 터치 제스처를 원격 마우스 동작에 매핑하여 스마트폰으로 디바이스 알림 처리.',
        tags: ['React Native', 'Expo', 'WebRTC'],
        feats: ['터치 제스처 매핑', '방향 적응', '푸시 웨이크 테이크오버', '생체 인증'],
      },
    ],
  },
  plugins: {
    eyebrow: '플러그인 아키텍처',
    title: '퍼즐 조각처럼 원격 기능 확장',
    subtitle:
      '원격 제어는 보고 클릭하는 것 이상입니다. 플러그인 아키텍처는 스트리밍과 비즈니스 로직을 세 가지 확장 레이어로 분리합니다.',
    pipeline: ['스트리밍 코어', 'UI Plugins', 'Workflow Plugins', 'AI Plugins', '감사 출력'],
    pipelineAria: '플러그인 파이프라인: UI → Workflow → AI 분석',
    items: [
      {
        type: 'UI Plugins',
        title: '인터랙션 레이어',
        desc: '디바이스별 제어 패널을 동적으로 로드. 커뮤니티 제작 가상 게임패드, PLC 콘솔, 산업 대시보드 — 코어 변경 불필요.',
        examples: ['가상 게임패드', 'PLC 콘솔', 'HMI 대시보드', '터치 키보드'],
      },
      {
        type: 'Workflow Plugins',
        title: '워크플로우 레이어',
        desc: '기존 엔터프라이즈 시스템에 연결. Jira/Lark 승인 흐름 핫스왑, 페어링 인증, 커스텀 온라인/오프라인 훅 — 원활한 통합.',
        examples: ['Jira 연동', 'Lark 승인', '페어링 인증', '세션 훅'],
      },
      {
        type: 'AI Plugins',
        title: '분석 레이어',
        desc: '세션 스트림에 커스텀 분석 모델 연결. 민감한 작업(DB 삭제, 핵심 프로세스 종료) 시 초 단위 알림. 자체 LLM 사용 가능.',
        examples: ['실시간 알림', '세션 요약', '이상 태깅', '규정 준수보내기'],
      },
    ],
    registryTitle: '오픈 플러그인 레지스트리',
    registryDesc:
      '모든 플러그인은 @vistaremote/plugin-sdk로 핫 리로드 등록 — 메인 프로세스 재시작 불필요. 커뮤니티 플러그인은 공식 마켓플레이스에 등록.',
  },
  architecture: {
    eyebrow: '긱 아키텍처',
    title: '풀스택 TypeScript + 정밀 Rust',
    subtitle:
      '최대 균일성, 다언어 프랑켄슈타인 없음. AI(Vibe Coding)를 커스터마이징의 최고의 코파일럿으로.',
    vibeTitle: 'Vibe Coding 친화적',
    vibeDesc:
      '강한 타입의 엔드투엔드 TypeScript. AI IDE(Copilot/Cursor)가 명확한 컨텍스트를 확보 — 혼합 언어 프로젝트보다 LLM 지원 개발이 훨씬 성공적.',
    layers: [
      {
        name: '공유 계약',
        en: 'shared · contracts',
        desc: 'Zod를 통한 엄격한 프론트/백 타입 공유. 모든 API 요청/응답 형태, 엔티티, 열거형을 여기서 정의 — 완전한 TypeScript 추론.',
        tags: ['Zod', 'TypeScript', 'monorepo'],
      },
      {
        name: '서버 시그널링',
        en: 'server · signaling & api',
        desc: 'NestJS가 신뢰할 수 있는 REST API와 WebRTC 시그널링 라우트 제공. 모듈형 아키텍처 — 각 도메인에 전용 module/controller/service.',
        tags: ['NestJS', 'WebSocket', 'Redis Pub/Sub'],
      },
      {
        name: '클라이언트 비즈니스 레이어',
        en: 'client · react / rn / electron',
        desc: 'React / React Native / Electron이 비즈니스 훅과 상태를 공유. UI는 다르지만 핵심 로직은 중복 없음. 코드 재사용률 >70%.',
        tags: ['React', 'React Native', 'Electron', 'Zustand'],
      },
      {
        name: 'Rust 성능 레이어',
        en: 'rust · codec & capture',
        desc: 'Rust는 핫 패스에만: DXGI/NVENC 화면 캡처 및 코덱. TypeScript가 napi-rs로 Rust 호출 — 메인 코드베이스 오염 없이 최고 성능.',
        tags: ['Rust', 'DXGI', 'NVENC', 'napi-rs'],
      },
      {
        name: 'AI Worker 레이어',
        en: 'worker · ai & queue',
        desc: 'BullMQ 비동기 큐로 세션 녹화 및 AI 요약 작업. Docker Compose 원클릭 Ollama — 프라이빗 LLM 오프라인, 데이터는 랙 안에 유지.',
        tags: ['BullMQ', 'Ollama', 'Docker Compose', 'LLM'],
      },
    ],
  },
  comparison: {
    eyebrow: '에코시스템 시너지',
    title: '나란히 비교: VistaRemote',
    titleControl: '제어',
    titleView: '시야',
    subtitle:
      '명확한 역할 분담, 함께하는 폐쇄 루프. VistaCast가 이상을 탐지하고 VistaRemote가 개입을 실행.',
    flowAria: 'VistaCast 알림 → VistaRemote 테이크오버 흐름',
    flow: [
      { label: 'VistaCast', sub: '고위험 행동 탐지' },
      { label: '→', sub: '' },
      { label: 'AI 단계별 알림', sub: '심각도 P1' },
      { label: '→', sub: '' },
      { label: 'VistaRemote', sub: '인간 테이크오버 활성화' },
      { label: '→', sub: '' },
      { label: '폐쇄 루프', sub: '감사 로그 아카이브' },
    ],
    colDim: '차원',
    colRemote: 'VistaRemote',
    colCast: 'VistaCast',
    tagControl: '제어',
    tagView: '시야',
    tags: {
      bidirectional: '양방향',
      unidirectional: '단방향',
      receiveAlert: '이상 신호 수신',
      manualClose: '인간 테이크오버로 루프 종료',
      detectAnomaly: '공간 이상 탐지',
      emitSignal: '소스에서 신호 발신',
    },
    rows: [
      {
        dim: '핵심 캐리어',
        vistaremote: '모바일 / PC 컨트롤러 / Agent 엔드포인트',
        vistacast: '고정 보안 카메라(ONVIF / RTSP)',
      },
      {
        dim: '핵심 가치',
        vistaremote: '인간 개입, 양방향 제어, 녹화 감사',
        vistacast: 'AI 인지, 구조화된 공간 데이터',
      },
      { dim: '방향', vistaremote: 'bidirectional', vistacast: 'unidirectional' },
      {
        dim: '지연',
        vistaremote: '< 100ms 필수',
        vistacast: '초 단위 분석 허용',
      },
      {
        dim: 'AI 기능',
        vistaremote: '세션 요약, 이상 알림(오프라인 LLM)',
        vistacast: '객체 탐지, 공간 이벤트(엣지 추론)',
      },
      {
        dim: '협업',
        vistaremote: 'collab-remote',
        vistacast: 'collab-cast',
        highlight: true,
      },
      { dim: '셀프호스팅', vistaremote: 'check', vistacast: 'check' },
      { dim: '라이선스', vistaremote: 'Polyform-NC', vistacast: 'Polyform-NC' },
    ],
  },
  ecosystem: {
    eyebrow: '에코시스템 통합',
    title: '가치 사슬에서 개입의 마지막 마일',
    subtitle:
      'VistaRemote는 LuminaryWorks의 실행자 — 인지 신호, 원격 레이어가 루프를 닫습니다.',
    items: {
      VistaCast: {
        role: 'VistaCast · 시야',
        trigger: 'AI 비전이 고위험 알림 트리거',
        action: '인간 테이크오버를 위해 VistaRemote 자동 활성화',
        desc: '카메라가 침입, 화재, 이상 작업을 탐지하면 이벤트 버스로 P1 알림 푸시. VistaRemote가 테이크오버를 안내하고 원클릭 세션 연결.',
      },
      SyncroBrain: {
        role: 'IoT 오케스트레이션 엔진',
        trigger: 'IoT 노드 이상',
        action: '디바이스 백엔드 직접 원격 설정',
        desc: 'IoT 노드가 온도, 전압, 통신 장애를 보고하면 SyncroBrain 워크플로우가 VistaRemote 세션을 트리거하여 운영자가 터미널을 직접 수리.',
      },
      DoerFlow: {
        role: '티켓 및 디스패치',
        trigger: '디스패치 후 작업 전달',
        action: '워커 디버깅용 원격 데스크톱',
        desc: '작업 할당 후 기술자가 DoerFlow에서 VistaRemote 실행. 전달 기록과 녹화가 티켓에 자동 연결되어 완전한 감사 추적 형성.',
      },
      DataLuminary: {
        role: '데이터 인사이트 및 대시보드',
        trigger: '운영 보고서 및 세션 감사',
        action: '전역 세션 시간 및 감사 대시보드',
        desc: 'VistaRemote 세션 시간, 작업 빈도, AI 요약 결론을 집계하여 경영진용 운영 효율 및 컴플라이언스 대시보드 생성.',
      },
      BlockyEdu: {
        role: '비주얼 교육 플랫폼',
        trigger: 'WebRTC 랩 코스',
        action: 'AI 지원 개발 교육',
        desc: 'VistaRemote Plugin SDK로 커스텀 플러그인 개발을 가르치는 WebRTC 원격 제어 핸즈온 랩 — AI가 코딩과 디버깅 지원.',
      },
    },
  },
  quickstart: {
    eyebrow: '빠른 시작',
    title: '지금 로컬 제어 센터 구축',
    subtitle:
      '세 가지 경로 중 선택. 소스 개발, Docker 원클릭 배포, 플러그인 개발 — 모두 타입 안전하고 AI 친화적.',
    steps: [
      { n: '01', label: '저장소 클론 및 초기화', sub: 'git clone + ./init.sh' },
      { n: '02', label: '.env 설정 및 서비스 시작', sub: 'pnpm dev:mvp' },
      { n: '03', label: 'Web Client 열기', sub: 'localhost:3000' },
    ],
    tabsAria: '빠른 시작 옵션',
    tabs: { clone: '소스에서', docker: 'Docker 원클릭', plugin: '플러그인 만들기' },
    copyAria: '코드 복사',
    code: {
      clone: [
        { t: 'cmt', v: '# 1. 저장소 클론' },
        { t: 'cmd', v: 'git clone https://github.com/VistaRemote/vibeCode.git' },
        { t: 'cmd', v: 'cd vibeCode' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 2. 초기화(.env 생성, Ollama + Redis + DB 시작)' },
        { t: 'cmd', v: './init.ps1' },
        { t: 'cmt', v: '# Linux / macOS:' },
        { t: 'cmd', v: 'bash init.sh' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 3. MVP 개발 서비스 시작' },
        { t: 'cmd', v: 'pnpm dev:mvp' },
        { t: '', v: '' },
        { t: 'cmt', v: '# Web Client →  http://localhost:3000' },
        { t: 'cmt', v: '# Admin API  →  http://localhost:4000' },
        { t: 'cmt', v: '# Signaling  →  ws://localhost:4001' },
      ],
      docker: [
        { t: 'cmt', v: '# 프로덕션 Docker Compose 원클릭 배포' },
        { t: 'cmd', v: 'git clone https://github.com/VistaRemote/vibeCode.git' },
        { t: 'cmd', v: 'cd vibeCode' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 환경 설정' },
        { t: 'cmd', v: 'cp .env.example .env' },
        { t: 'arg', v: '# .env 편집 → TURN_SECRET, DB_PASSWORD, LLM_MODEL 설정' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 모든 서비스 시작(Ollama + BullMQ Worker)' },
        { t: 'cmd', v: 'docker compose -f docker-compose.prod.yml up -d' },
        { t: '', v: '' },
        { t: 'cmt', v: '# 서비스 상태 확인' },
        { t: 'cmd', v: 'docker compose ps' },
      ],
      plugin: [
        { t: 'cmt', v: '# 공식 Plugin SDK 스캐폴드' },
        { t: 'cmd', v: 'pnpm create @vistaremote/plugin my-plc-ui' },
        { t: 'cmd', v: 'cd my-plc-ui' },
        { t: '', v: '' },
        { t: 'cmt', v: '# UI 플러그인 등록' },
        { t: 'arg', v: 'import { registerUIPlugin } from "@vistaremote/plugin-sdk"' },
        { t: '', v: '' },
        { t: 'arg', v: 'registerUIPlugin({' },
        { t: 'arg', v: '  id: "my-plc-ui",' },
        { t: 'arg', v: '  match: (device) => device.type === "PLC",' },
        { t: 'arg', v: '  component: PLCPanel,' },
        { t: 'arg', v: '})' },
        { t: '', v: '' },
        { t: 'cmd', v: 'pnpm dev   # 로컬 VistaRemote 인스턴스에 핫 리로드' },
      ],
    },
  },
}

export default ko
