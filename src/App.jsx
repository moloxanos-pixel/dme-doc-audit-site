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

const faqItems = [
  {
    question: 'How many charts should we include in a sample audit?',
    answer:
      'Most organizations start with 15 to 25 recent encounters across high-volume clinicians so we can identify repeatable documentation patterns quickly.',
  },
  {
    question: 'Do you review by payer requirements?',
    answer:
      'Yes. We align findings to Medicare and commercial payer expectations and call out where language or order detail creates denial exposure.',
  },
  {
    question: 'Can the audit support provider education?',
    answer:
      'Absolutely. Each engagement includes coaching-ready examples your compliance and operations leads can reuse in documentation training.',
  },
]

const trustSignals = [
  'Business Associate Agreement (BAA) available',
  'Review criteria explicitly mapped to CMS and major commercial payer policies',
  'Findings cite chart-level evidence and include provider-ready examples',
]

const fitChecklist = [
  'You manage DME documentation quality across multiple clinicians.',
  'You need denial-risk visibility before claims submission.',
  'You want a clear remediation plan your team can execute this month.',
]

export default function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className="hero section">
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow">DME Clinical Documentation Audit</p>
            <h1>Independent DME documentation audits for teams that need defensible claims.</h1>
            <p className="lede">
              We review completed encounters against payer-required documentation elements and deliver a clear list of chart-level gaps before submission.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#contact-sales">Request a sample audit</a>
              <a className="btn btn-secondary" href="#sample-audit">Review sample findings</a>
            </div>

            <ul className="hero-stats" aria-label="Service highlights">
              <li>
                <strong>Typically 3-5 business days</strong>
                <span>Initial findings for standard sample sizes</span>
              </li>
              <li>
                <strong>HIPAA-aware</strong>
                <span>De-identified intake by default</span>
              </li>
              <li>
                <strong>Evidence-based output</strong>
                <span>Each finding ties to payer criteria and chart text</span>
              </li>
            </ul>

            <p className="hero-disclaimer">Turnaround timing varies by chart count and documentation complexity.</p>

            <div className="trust-proof" aria-label="Trust and compliance signals">
              {trustSignals.map((signal) => (
                <p key={signal}>{signal}</p>
              ))}
            </div>
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

      <main id="main-content" tabIndex="-1">
        <section className="section process">
          <div className="container">
            <p className="eyebrow">Audit process</p>
            <h2>A practical 3-step workflow from sample selection to corrective action.</h2>

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

        <section className="section fit-check" aria-labelledby="fit-check-heading">
          <div className="container">
            <p className="eyebrow">Quick fit check</p>
            <h2 id="fit-check-heading">Best fit for teams that need fast, operational clarity.</h2>
            <ul className="fit-list">
              {fitChecklist.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section report-showcase" id="sample-audit">
          <div className="container report-layout">
            <div>
              <p className="eyebrow">Sample deliverable</p>
              <h2>Sample report format used for leadership and compliance review.</h2>
              <p className="lede">
                Reports include chart-level findings, citation-backed rationale, and prioritized remediation guidance so teams can act without guesswork.
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
                We review de-identified records, maintain role-based access controls, and document findings in language your compliance and operations leads can validate.
              </p>
            </div>
            <a className="inline-link" href="#contact-sales">Request scope and timeline details</a>
          </div>
        </section>

        <section className="section faq" aria-labelledby="faq-heading">
          <div className="container">
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-heading">Common questions before kickoff.</h2>

            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact-sales" aria-labelledby="contact-heading">
          <div className="container contact-layout">
            <div>
              <p className="eyebrow">Next step</p>
              <h2 id="contact-heading">Request a scoped DME audit plan.</h2>
              <p className="lede">
                Share your organization details and we&apos;ll send a defined scope, required inputs, expected turnaround, and pricing assumptions.
              </p>
              <p className="contact-note">Please do not include patient identifiers or clinical chart details in this form.</p>
            </div>

            <form className="contact-form" action="#" method="post" aria-describedby="contact-privacy-note">
              <label htmlFor="fullName">Full name</label>
              <input id="fullName" name="fullName" type="text" autoComplete="name" required />

              <label htmlFor="workEmail">Work email</label>
              <input id="workEmail" name="workEmail" type="email" autoComplete="email" required />

              <label htmlFor="organization">Organization</label>
              <input id="organization" name="organization" type="text" autoComplete="organization" required />

              <label htmlFor="role">Role</label>
              <input id="role" name="role" type="text" autoComplete="organization-title" required />

              <button type="submit" className="btn btn-primary">Request consultation</button>
              <p id="contact-privacy-note" className="sr-only">
                This request form is for business contact details only. Do not submit protected health information.
              </p>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}
