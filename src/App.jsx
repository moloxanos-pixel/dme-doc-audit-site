import workflowHero from './assets/workflow-hero.svg'

const processSteps = [
  {
    title: '1. Intake & Scope',
    description:
      'Submit de-identified notes, order details, and payer targets. We align the review to your denial and risk profile.',
  },
  {
    title: '2. Clinical Audit',
    description:
      'Auditors evaluate medical necessity language, functional limitations, and face-to-face documentation against DME requirements.',
  },
  {
    title: '3. Action Plan',
    description:
      'Receive prioritized fixes, provider coaching notes, and denial-prevention recommendations your team can implement quickly.',
  },
]

const reportFindings = [
  { label: 'Medical Necessity Support', score: '88%' },
  { label: 'LCD/Policy Alignment', score: '81%' },
  { label: 'Order & Note Consistency', score: '74%' },
]

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <p className="text-sm font-semibold tracking-wide text-slate-700">
            DME Documentation Audit Services
          </p>
          <button className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-950">
            Book Discovery Call
          </button>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-200 bg-gradient-to-b from-white via-slate-50 to-slate-100">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:items-center md:py-20">
            <div>
              <p className="mb-4 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
                Credibility-first clinical QA
              </p>
              <h1 className="text-3xl font-bold leading-tight text-slate-950 sm:text-4xl md:text-5xl">
                Defensible DME documentation, before claims are at risk.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-700 sm:text-lg">
                We audit real clinical documentation workflows for DME providers and rehab clinics,
                helping teams reduce denials, improve note consistency, and strengthen payer-ready
                medical necessity narratives.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                  Request Sample Audit Report
                </button>
                <button className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400">
                  View Audit Scope
                </button>
              </div>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <img
                src={workflowHero}
                alt="Clinical documentation team reviewing DME note quality checkpoints and audit workflow"
                className="h-full w-full object-cover"
                width="768"
                height="576"
                decoding="async"
                fetchPriority="high"
              />
            </figure>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">How the audit works</h2>
            <p className="mt-3 text-slate-700">
              A concise three-step process designed for compliance teams, clinical leads, and revenue
              cycle managers.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3 md:gap-6">
            {processSteps.map((step) => (
              <article key={step.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center md:py-20">
            <div>
              <h2 className="text-2xl font-bold text-slate-950 sm:text-3xl">Sample audit report preview</h2>
              <p className="mt-4 text-slate-700">
                Each report translates chart-level observations into an executive summary, risk-ranked
                findings, and concrete remediation steps for documentation teams.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                <li>• Payer-focused compliance findings with evidence references</li>
                <li>• Note quality scorecard across medical necessity criteria</li>
                <li>• Recommended language and workflow corrections by priority</li>
              </ul>
            </div>

            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <p className="text-sm font-semibold text-slate-900">DME Audit Report — Q2 Sample</p>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                    Medium Risk
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  {reportFindings.map((finding) => (
                    <div key={finding.label} className="rounded-lg border border-slate-200 p-3">
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-slate-800">{finding.label}</span>
                        <span className="font-semibold text-slate-900">{finding.score}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-100">
                        <div
                          className="h-2 rounded-full bg-slate-700"
                          style={{ width: finding.score }}
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-4 rounded-md bg-amber-50 p-3 text-xs leading-5 text-amber-900">
                  Priority recommendation: standardize functional limitation statements in evaluation and
                  progress notes to improve policy alignment.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <div className="rounded-2xl bg-slate-900 px-6 py-10 text-white sm:px-10">
            <h2 className="text-2xl font-bold sm:text-3xl">Ready for a documentation risk baseline?</h2>
            <p className="mt-3 max-w-2xl text-slate-200">
              Send a de-identified sample chart set and receive a focused audit summary in 5 business
              days.
            </p>
            <button className="mt-6 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              Start a Confidential Sample Audit
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}
