function Figure({
  x,
  y,
  scale = 1,
  hair,
  skin,
  top,
  bottom,
  accent,
  direction = 1,
}) {
  const armOffset = direction === 1 ? 0 : -2;

  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <polygon points="30 0 54 9 49 41 19 35" fill={hair} />
      <polygon points="24 33 44 31 40 74 28 74" fill={skin} />
      <path d="M6 92Q36 63 69 92L76 166H0Z" fill={top} />
      <path d="M15 166h19l-5 147H16Z" fill={bottom} />
      <path d="M44 166h18l-4 147H46Z" fill={bottom} />
      <path d="M8 100C-6 126-8 157-2 184" stroke={accent} strokeWidth="10" strokeLinecap="round" />
      <path d={`M68 ${100 + armOffset}C88 114 96 138 101 166`} stroke={top} strokeWidth="10" strokeLinecap="round" />
      <path d="M12 311h27" stroke={hair} strokeWidth="7" strokeLinecap="round" />
      <path d="M42 311h26" stroke={hair} strokeWidth="7" strokeLinecap="round" />
    </g>
  );
}

export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 560 460"
      className="hero-illustration-svg"
      role="img"
      aria-label="Abstract team illustration with audit cards"
    >
      <defs>
        <linearGradient id="hero-panel-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.94" />
          <stop offset="100%" stopColor="#deebff" stopOpacity="0.84" />
        </linearGradient>
        <filter id="hero-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="20" stdDeviation="20" floodColor="#091425" floodOpacity="0.12" />
        </filter>
      </defs>

      <circle cx="88" cy="85" r="40" fill="#f6d873" opacity="0.35" />
      <circle cx="470" cy="84" r="58" fill="#ff6b59" opacity="0.18" />
      <circle cx="416" cy="320" r="78" fill="#2e6cf3" opacity="0.1" />

      <g filter="url(#hero-shadow)">
        <rect x="54" y="52" width="136" height="82" rx="24" fill="url(#hero-panel-bg)" />
        <circle cx="93" cy="93" r="16" fill="#2e6cf3" opacity="0.16" />
        <path d="m85 93 6 6 13-16" fill="none" stroke="#2e6cf3" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="118" y="82" width="44" height="8" rx="4" fill="#1f3352" opacity="0.16" />
        <rect x="118" y="99" width="30" height="8" rx="4" fill="#1f3352" opacity="0.12" />

        <rect x="392" y="280" width="114" height="78" rx="20" fill="url(#hero-panel-bg)" />
        <rect x="422" y="303" width="52" height="10" rx="5" fill="#1f3352" opacity="0.14" />
        <rect x="422" y="323" width="38" height="10" rx="5" fill="#1f3352" opacity="0.12" />
        <circle cx="416" cy="198" r="34" fill="#ffffff" opacity="0.92" />
        <path d="m404 198 8 8 16-18" fill="none" stroke="#31b99a" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <path d="M214 236c42-44 102-46 148-5" fill="none" stroke="#ffffff" strokeOpacity="0.42" strokeWidth="4" strokeDasharray="8 10" />

      <Figure
        x={86}
        y={138}
        scale={0.88}
        hair="#1f3352"
        skin="#d29a72"
        top="#f6d873"
        bottom="#ff6b59"
        accent="#1f3352"
      />
      <Figure
        x={216}
        y={114}
        scale={1}
        hair="#ff6b59"
        skin="#d9aa8b"
        top="#ff6b59"
        bottom="#1f3352"
        accent="#f6d873"
      />
      <Figure
        x={354}
        y={132}
        scale={0.92}
        hair="#f6d873"
        skin="#be815b"
        top="#1f3352"
        bottom="#ff6b59"
        accent="#f6d873"
        direction={-1}
      />

      <g filter="url(#hero-shadow)">
        <rect x="250" y="162" width="66" height="98" rx="18" fill="#ffffff" opacity="0.78" />
        <rect x="269" y="183" width="28" height="8" rx="4" fill="#1f3352" opacity="0.12" />
        <rect x="269" y="202" width="20" height="8" rx="4" fill="#1f3352" opacity="0.1" />
        <circle cx="267" cy="184" r="10" fill="#ff6b59" opacity="0.16" />
        <path d="m261 184 4 4 8-10" fill="none" stroke="#ff6b59" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
