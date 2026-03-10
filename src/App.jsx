import './App.css'

const auditSteps = [
  {
    title: 'Submit De-Identified Charts',
    detail:
      'Upload a focused sample of completed encounters and corresponding DME orders using our secure intake workflow.',
  },
  {
    title: 'Clinical + Coding Review',
    detail:
      'Our auditors validate medical necessity language, functional limitation documentation, and payer-specific requirements.',
  },
  {
    title: 'Actionable Remediation Plan',
    detail:
      'Receive prioritized fixes, denial-risk flags, and a provider coaching summary your team can apply immediately.',
  },
]

const focusAreas = [
  'Face-to-face encounter completeness',
  'Order detail and modifier accuracy',
  'Medical necessity narrative strength',
  'Template consistency across clinicians',
]

export default function App() {
  return (
    <div className="site-shell">
      <header className="hero section">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">DME Clinical Documentation Audit</p>
            <h1>Audit readiness for DME claims, built for healthcare operations teams.</h1>
            <p className="lede">
              Strengthen documentation quality, reduce preventable denials, and improve confidence before claims are submitted.
            </p>

            <div className="hero-actions">
              <button type="button" className="btn btn-primary">Request a sample audit</button>
              <button type="button" className="btn btn-secondary">See example report</button>
            </div>

            <ul className="hero-stats" aria-label="Service highlights">
              <li>
                <strong>48 hrs</strong>
                <span>Initial findings turnaround</span>
              </li>
              <li>
                <strong>HIPAA-aware</strong>
                <span>De-identification workflow</span>
              </li>
              <li>
                <strong>B2B focused</strong>
                <span>Built for clinic leadership</span>
              </li>
            </ul>
          </div>

          <figure className="hero-media">
            <img
              src="/images/dme-workflow-hero.svg"
              alt="Clinical documentation workflow board showing intake, audit review, and remediation handoff"
              width="720"
              height="540"
              fetchPriority="high"
              decoding="async"
            />
          </figure>
        </div>
      </header>

      <main>
        <section className="section process">
          <div className="container">
            <p className="eyebrow">Audit process</p>
            <h2>A clear 3-step pathway from chart sample to corrective action.</h2>

            <div className="steps-grid" role="list" aria-label="Three step DME audit process">
              {auditSteps.map((step, index) => (
                <article className="step-card" key={step.title} role="listitem">
                  <span className="step-number">{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section report-showcase">
          <div className="container report-layout">
            <div>
              <p className="eyebrow">Sample deliverable</p>
              <h2>Audit report mockup designed for leadership decisions.</h2>
              <p className="lede">
                Every report combines denial-risk scoring, chart-level findings, and recommended policy updates so your team can prioritize what to fix first.
              </p>

              <ul className="focus-list">
                {focusAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </div>

            <figure className="report-media">
              <img
                src="/images/sample-audit-report.svg"
                alt="Mockup of a DME documentation audit report with compliance score, finding categories, and action list"
                width="720"
                height="520"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </section>

        <section className="section trust-band">
          <div className="container trust-layout">
            <div>
              <h2>Credibility-first, confidentiality-always.</h2>
              <p>
                We only review de-identified records, maintain strict access controls, and provide audit documentation aligned to payer expectations and internal quality programs.
              </p>
            </div>
            <a className="inline-link" href="#">Download sample checklist</a>
          </div>
        </section>
      </main>
    </div>
  )
}
