const base = { width: 88, height: 88, viewBox: '0 0 88 88', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, 'aria-hidden': true }

export function CuasIcon() {
  return (
    <svg {...base}>
      <circle cx="44" cy="44" r="30" />
      <path d="M44 6v18M44 64v18M6 44h18M64 44h18" />
      <path d="M36 36l16 16M52 36L36 52" />
      <circle cx="36" cy="36" r="4" /><circle cx="52" cy="36" r="4" />
      <circle cx="36" cy="52" r="4" /><circle cx="52" cy="52" r="4" />
    </svg>
  )
}
export function DetectIcon() {
  return (
    <svg {...base}>
      <path d="M10 70a48 48 0 0 1 68 0" />
      <path d="M22 70a32 32 0 0 1 44 0" />
      <path d="M34 70a16 16 0 0 1 20 0" />
      <circle cx="44" cy="70" r="3" fill="currentColor" />
      <path d="M44 70L70 22" />
      <path d="M60 14h12v12" />
    </svg>
  )
}
export function EdgeIcon() {
  return (
    <svg {...base}>
      <rect x="24" y="24" width="40" height="40" />
      <rect x="35" y="35" width="18" height="18" />
      <path d="M32 24V10M44 24V10M56 24V10M32 78V64M44 78V64M56 78V64M24 32H10M24 44H10M24 56H10M78 32H64M78 44H64M78 56H64" />
    </svg>
  )
}
export function CommandIcon() {
  return (
    <svg {...base}>
      <rect x="8" y="14" width="72" height="52" />
      <path d="M8 28h72M36 28v38" />
      <path d="M44 56l8-10 8 6 12-14" />
      <path d="M30 78h28M44 66v12" />
    </svg>
  )
}
