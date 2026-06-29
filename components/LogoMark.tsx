interface LogoMarkProps {
  size?: number
  className?: string
}

/** VistaRemote brand mark — keep in sync with assets/icon.svg */
export default function LogoMark({ size = 28, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M196 118 A72 72 0 0 1 316 118" stroke="#0078FF" strokeWidth="18" strokeLinecap="round"/>
      <path d="M176 118 A92 92 0 0 1 336 118" stroke="#99CCFF" strokeWidth="18" strokeLinecap="round"/>
      <path d="M196 394 A72 72 0 0 0 316 394" stroke="#0078FF" strokeWidth="18" strokeLinecap="round"/>
      <path d="M176 394 A92 92 0 0 0 336 394" stroke="#99CCFF" strokeWidth="18" strokeLinecap="round"/>
      <path d="M118 196 A72 72 0 0 0 118 316" stroke="#0078FF" strokeWidth="18" strokeLinecap="round"/>
      <path d="M118 176 A92 92 0 0 0 118 336" stroke="#99CCFF" strokeWidth="18" strokeLinecap="round"/>
      <path d="M394 196 A72 72 0 0 1 394 316" stroke="#0078FF" strokeWidth="18" strokeLinecap="round"/>
      <path d="M394 176 A92 92 0 0 1 394 336" stroke="#99CCFF" strokeWidth="18" strokeLinecap="round"/>
      <rect x="156" y="148" width="200" height="148" rx="22" fill="#0078FF"/>
      <rect x="172" y="164" width="168" height="108" rx="10" fill="#FFFFFF"/>
      <path d="M228 198 L268 198 L252 228 Z" fill="#0078FF"/>
      <circle cx="256" cy="278" r="7" fill="#FFFFFF"/>
      <path d="M236 296 H276 L266 318 H246 Z" fill="#0078FF"/>
      <rect x="206" y="318" width="100" height="16" rx="8" fill="#0078FF"/>
    </svg>
  )
}
