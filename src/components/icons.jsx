// Icone disegnate (stroke coerente 1.7), mai emoji
const s = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const IconPlus = (p) => (<svg {...s} {...p}><path d="M12 5v14M5 12h14" /></svg>)
export const IconMinus = (p) => (<svg {...s} {...p}><path d="M5 12h14" /></svg>)
export const IconFit = (p) => (<svg {...s} {...p}><path d="M4 9V5a1 1 0 0 1 1-1h4M20 9V5a1 1 0 0 0-1-1h-4M4 15v4a1 1 0 0 0 1 1h4M20 15v4a1 1 0 0 1-1 1h-4" /></svg>)
export const IconList = (p) => (<svg {...s} {...p}><path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" /></svg>)
export const IconNew = (p) => (<svg {...s} {...p}><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M5 3h9l5 5v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" /><path d="M12 11v6M9 14h6" /></svg>)
export const IconDownload = (p) => (<svg {...s} {...p}><path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" /></svg>)
export const IconUpload = (p) => (<svg {...s} {...p}><path d="M12 21V9m0 0 4 4m-4-4-4 4M5 3h14" /></svg>)
export const IconTrash = (p) => (<svg {...s} {...p}><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7" /></svg>)
export const IconLock = (p) => (<svg {...s} {...p}><rect x="5" y="11" width="14" height="9" rx="1.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>)
export const IconClose = (p) => (<svg {...s} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>)
export const IconBackspace = (p) => (<svg {...s} {...p}><path d="M9 6h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-5-6 5-6z" /><path d="M12 10l4 4m0-4-4 4" /></svg>)

// Marchio Zenith: una "Z" a spinotto (jack) — segno del centralino
export const ZenithMark = (p) => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" {...p}>
    <circle cx="16" cy="16" r="15" fill="none" stroke="var(--brass)" strokeWidth="1.5" />
    <path d="M10 10h12l-12 12h12" fill="none" stroke="var(--brass-hi)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="16" r="2.1" fill="var(--live)" />
  </svg>
)
