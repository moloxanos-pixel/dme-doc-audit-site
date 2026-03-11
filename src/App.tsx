const quickActions = [
  {
    title: 'REQUEST A SAMPLE AUDIT',
    subtitle: 'See a findings layout',
    href: '#contact',
    classes: 'bg-[#b01487] hover:bg-[#960f72] text-white',
    icon: AuditIcon,
  },
  {
    title: 'SEE WHAT WE REVIEW',
    subtitle: 'Orders, notes, intake',
    href: '#scope',
    classes: 'bg-[#7b33c7] hover:bg-[#6928ac] text-white',
    icon: PinIcon,
  },
  {
    title: 'BOOK AN INTRO CALL',
    subtitle: 'Talk through workflow fit',
    href: '#contact',
    classes: 'bg-[#08a6a0] hover:bg-[#078d88] text-white',
    icon: CalendarIcon,
  },
]

const processSteps = [
  {
    title: 'Share the workflow',
    body: 'Start with a sample packet or walk through where documentation issues usually surface in intake, review, or billing.',
  },
  {
    title: 'Receive a focused audit',
    body: 'We flag missing elements, weak support, and avoidable handoff issues in a format your team can act on quickly.',
  },
  {
    title: 'Fix upstream issues faster',
    body: 'Use the findings to improve file quality, internal QA, and staff follow-through before problems turn into rework.',
  },
]

const reviewAreas = [
  'Order detail gaps and signature/date issues',
  'Clinical note support and medical necessity clarity',
  'Intake-to-review handoff consistency',
  'Repeat documentation issues that slow teams down',
]

const faqs = [
  {
    question: 'What does the audit deliver?',
    answer:
      'A practical findings report with prioritized issues, missing elements, and action-ready notes your team can use immediately.',
  },
  {
    question: 'Is this only for denied claims?',
    answer:
      'No. It also fits pre-submission review, internal QA, process cleanup, and staff training where teams want fewer preventable misses.',
  },
  {
    question: 'Should we send PHI through the website?',
    answer:
      'No. Keep the first inquiry operational and high level. Use the site to start the conversation, not to send patient details.',
  },
]

function AuditIcon({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M9 3h6l1 2h2a2 2 0 0 1 2 2v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a2 2 0 0 1 2-2h2l1-2Z" />
      <path d="M9 10h6M9 14h6" />
      <path d="m10 18 1.2 1.2L14 16.5" />
    </svg>
  )
}

function PinIcon({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 21s6-5.1 6-10a6 6 0 1 0-12 0c0 4.9 6 10 6 10Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  )
}

function CalendarIcon({ className = 'h-7 w-7' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <path d="M8 14h3M13 14h3M8 18h3" />
    </svg>
  )
}

function ShieldCheckIcon({ className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
      <path d="M12 3l7 3v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.8-4.1" />
    </svg>
  )
}

function ChevronRight({ className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  )
}

function TopRibbon() {
  return (
    <div className="bg-[#21499a] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.18em] sm:px-6 lg:px-8">
        DME Clinical Documentation Audit Support
      </div>
    </div>
  )
}

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#21499a]/20 bg-[#f5f8ff] text-[#21499a]">
            <ShieldCheckIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-3xl font-semibold tracking-tight text-[#21499a]">DME Records Reviews</p>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">Clinical documentation review</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.12em] text-slate-700 lg:flex">
          <a href="#about" className="transition hover:text-[#21499a]">About</a>
          <a href="#process" className="transition hover:text-[#21499a]">Process</a>
          <a href="#scope" className="transition hover:text-[#21499a]">What We Review</a>
          <a href="#faq" className="transition hover:text-[#21499a]">FAQ</a>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50 sm:inline-flex"
        >
          Request sample audit
        </a>
      </div>
    </header>
  )
}

function RecordShieldIllustration() {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle_at_center,_rgba(8,166,160,0.12),transparent_48%)] blur-2xl" />
      <svg viewBox="0 0 560 420" className="h-auto w-full" aria-hidden="true">
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#36d1c8" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="paperGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#eef4ff" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#94a3b8" floodOpacity="0.28" />
          </filter>
        </defs>

        <g filter="url(#softShadow)">
          <rect x="330" y="70" width="135" height="235" rx="16" fill="#83d7db" opacity="0.55" />
          <rect x="294" y="55" width="160" height="255" rx="18" fill="#d4eff1" />
          <path d="M304 55h118l32 32v205a18 18 0 0 1-18 18H304a18 18 0 0 1-18-18V73a18 18 0 0 1 18-18Z" fill="url(#paperGrad)" />
          <path d="M422 55v22a10 10 0 0 0 10 10h22" fill="#f8fbff" />
          <path d="M383 104h38" stroke="#2a6ed7" strokeWidth="10" strokeLinecap="round" />
          <path d="M402 85v38" stroke="#2a6ed7" strokeWidth="10" strokeLinecap="round" />

          {[140, 174, 208, 242].map((y) => (
            <g key={y}>
              <path d={`M366 ${y + 10}l10 10 18-20`} stroke="#57b882" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="394" y={y} width="70" height="7" rx="3.5" fill="#c3d5f6" />
              <rect x="394" y={y + 15} width="48" height="6" rx="3" fill="#d7e3f8" />
            </g>
          ))}
        </g>

        <g filter="url(#softShadow)">
          <path d="M227 45c49 20 74 25 112 34v76c0 72-44 123-112 160-68-37-112-88-112-160V79c38-9 63-14 112-34Z" fill="#e8f4ff" />
          <path d="M227 61c39 16 61 20 92 28v64c0 58-35 101-92 133-57-32-92-75-92-133V89c31-8 53-12 92-28Z" fill="url(#shieldGrad)" />
          <path d="M227 61v225c57-32 92-75 92-133V89c-31-8-53-12-92-28Z" fill="#0ea5a6" opacity="0.22" />
          <path d="m190 167 28 28 55-63" stroke="#ffffff" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  )
}

function Hero() {
  return (
    <section id="top" className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
        <div className="flex flex-col justify-center">
          <div className="mb-8 h-1.5 w-10 bg-[#b01487]" />
          <h1 className="max-w-2xl font-serif text-5xl leading-[1.02] tracking-tight text-slate-950 sm:text-6xl">
            Cleaner DME documentation before it turns into avoidable rework.
          </h1>
          <div className="mt-8 h-1.5 w-10 bg-[#b01487]" />

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
            Structured clinical documentation audits for DME teams that want clearer files, stronger support, and faster follow-through.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#21499a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#183a81]"
            >
              Request a sample audit
            </a>
            <a
              href="#scope"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              See what we review
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <RecordShieldIllustration />
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-14 sm:px-6 lg:px-8 lg:-mt-2 lg:pb-16">
        <div className="rounded-sm bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.16)] ring-1 ring-slate-200 sm:p-7">
          <div className="grid gap-3 md:grid-cols-3">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <a
                  key={action.title}
                  href={action.href}
                  className={`group flex items-center justify-between gap-4 rounded-sm px-5 py-5 transition ${action.classes}`}
                >
                  <div className="flex items-center gap-4">
                    <Icon className="h-8 w-8 shrink-0" />
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.14em]">{action.title}</p>
                      <p className="mt-1 text-xs font-medium text-white/85">{action.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-6 w-6 shrink-0 transition group-hover:translate-x-1" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="bg-[#fafafa] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-700">About the service</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
          Tightening documentation, reducing preventable misses, and making next steps easier to act on.
        </h2>
        <div className="mt-8 max-w-4xl space-y-5 text-lg leading-9 text-slate-700">
          <p>
            This site should feel less like generic healthcare advertising and more like an operational review service. The design uses a calm medical record illustration, structured calls to action, and practical language that signals rigor.
          </p>
          <p>
            The strongest version of this homepage leads with what the audit does, shows what the deliverable looks like, and makes the next action clear for an intake, QA, or revenue cycle lead.
          </p>
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section id="process" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#21499a]">How it works</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
            A simple audit flow your team can understand at a glance.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {processSteps.map((step, index) => (
            <article key={step.title} className="rounded-3xl border border-slate-200 bg-[#fafafa] p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#21499a] text-white">
                <span className="text-lg font-bold">{index + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-4 text-base leading-8 text-slate-600">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ScopeSection() {
  return (
    <section id="scope" className="bg-[#f3f5f9] py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#21499a]">What we review</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
            Documentation cues that matter before a file moves downstream.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Keep this section specific. Real review language builds more trust than broad healthcare promises.
          </p>
        </div>

        <div className="rounded-[2rem] bg-white p-7 shadow-sm ring-1 ring-slate-200">
          <div className="grid gap-4 sm:grid-cols-2">
            {reviewAreas.map((item) => (
              <div key={item} className="rounded-2xl border border-slate-200 bg-[#fafafa] p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#08a6a0]/10 text-[#08a6a0]">
                    <ShieldCheckIcon className="h-4 w-4" />
                  </div>
                  <p className="text-sm font-semibold leading-7 text-slate-900">{item}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-[#fafafa] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-700">Visual fit</p>
            <p className="mt-3 text-base leading-8 text-slate-600">
              Use real report previews, checklists, records, and quality-review imagery. Avoid smiling stock clinician photos that do not explain the service.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section id="faq" className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#21499a]">FAQ</p>
        <h2 className="mt-4 font-serif text-4xl leading-tight text-slate-950 sm:text-5xl">
          Clear answers remove friction faster than extra sales copy.
        </h2>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-3xl border border-slate-200 bg-[#fafafa] p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-xl font-semibold text-slate-950">
                <span>{faq.question}</span>
                <span className="rounded-full border border-slate-300 px-3 py-1 text-sm text-slate-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#21499a] py-20 text-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-white/10 p-8 ring-1 ring-white/20 backdrop-blur sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">Next step</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">Request a sample audit or talk through your current workflow.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">
            Use an approved business inquiry channel for scheduling or intake coordination. Do not submit patient-identifying information through standard website forms.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:contact@dmerecordsreviews.com"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#21499a] transition hover:bg-slate-100"
            >
              Request sample audit
            </a>
            <a
              href="mailto:contact@dmerecordsreviews.com"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Ask for sample report
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-[#173574] py-8 text-sm text-white/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} DME Records Reviews</p>
        <p>Designed for clarity, trust, and cleaner documentation workflows.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <TopRibbon />
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProcessSection />
        <ScopeSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
