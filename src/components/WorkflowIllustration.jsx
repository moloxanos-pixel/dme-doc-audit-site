export default function WorkflowIllustration() {
  return (
    <svg
      viewBox="0 0 420 320"
      className="workflow-illustration-svg"
      role="img"
      aria-label="Illustration of documentation workflow and security review"
    >
      <defs>
        <linearGradient id="workflow-card" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
          <stop offset="100%" stopColor="#e4edff" stopOpacity="0.88" />
        </linearGradient>
        <filter id="workflow-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#081120" floodOpacity="0.15" />
        </filter>
      </defs>

      <circle cx="312" cy="82" r="52" fill="#f6d873" opacity="0.2" />
      <circle cx="92" cy="80" r="40" fill="#35b89a" opacity="0.16" />
      <circle cx="338" cy="236" r="42" fill="#2e6cf3" opacity="0.1" />
      <path d="M118 94c40-34 104-35 149-4" fill="none" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="3" strokeDasharray="7 9" />

      <g filter="url(#workflow-shadow)">
        <path d="M78 118c17-8 34-14 50-17l22 21v74c0 18-10 35-25 46-16-5-31-17-41-34-7-12-10-26-6-40Z" fill="#35b89a" />
        <path d="m108 156 12 12 24-29" fill="none" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="120" y="54" width="210" height="216" rx="30" fill="url(#workflow-card)" />
        <rect x="184" y="34" width="82" height="42" rx="18" fill="#f0f5ff" />
        <rect x="156" y="110" width="120" height="11" rx="5.5" fill="#d5ddee" />
        <rect x="156" y="142" width="132" height="11" rx="5.5" fill="#d5ddee" />
        <rect x="156" y="174" width="110" height="11" rx="5.5" fill="#d5ddee" />
        <rect x="156" y="206" width="126" height="11" rx="5.5" fill="#d5ddee" />
        <circle cx="136" cy="115" r="11" fill="#2e6cf3" opacity="0.16" />
        <circle cx="136" cy="147" r="11" fill="#ff6b59" opacity="0.15" />
        <circle cx="136" cy="179" r="11" fill="#35b89a" opacity="0.18" />
        <circle cx="136" cy="211" r="11" fill="#f6d873" opacity="0.28" />
        <path d="m130 115 4 4 7-8" fill="none" stroke="#2e6cf3" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m130 147 4 4 7-8" fill="none" stroke="#ff6b59" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m130 179 4 4 7-8" fill="none" stroke="#35b89a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m130 211 4 4 7-8" fill="none" stroke="#af8f17" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="282" y="106" width="88" height="70" rx="20" fill="#1f3352" opacity="0.96" />
        <circle cx="309" cy="141" r="15" fill="#ff6b59" opacity="0.9" />
        <path d="m303 141 4 4 7-8" fill="none" stroke="#ffffff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="329" y="132" width="24" height="8" rx="4" fill="#ffffff" opacity="0.7" />
        <rect x="329" y="147" width="18" height="8" rx="4" fill="#ffffff" opacity="0.5" />
      </g>
    </svg>
  );
}
