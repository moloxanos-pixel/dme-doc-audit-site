import { Link } from "react-router-dom";
import HeroIllustration from "../components/HeroIllustration";
import WorkflowIllustration from "../components/WorkflowIllustration";
import SectionTitle from "../components/SectionTitle";
import {
  FileSparkIcon,
  HandoffIcon,
  ShieldCheckIcon,
} from "../components/Icons";
import checklistPhoto from "../assets/checklist-review.jpg";
import tabletPhoto from "../assets/tablet-review.jpg";
import protectionPhoto from "../assets/data-protection.jpg";

const stats = [
  { value: "5000+", label: "records reviewed before submission" },
  { value: "2%", label: "medical necessity issues surfaced" },
  { value: "8%", label: "administrative issues identified" },
  { value: "$0.85", label: "starting point per record" },
];

const features = [
  {
    icon: FileSparkIcon,
    title: "Pre-submission clarity",
    description:
      "Catch missing signatures, dates, order elements, and chart note mismatches before they become rework.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Human-reviewed judgement",
    description:
      "Blend repeatable review logic with experienced eyes on the records that need nuance and context.",
  },
  {
    icon: HandoffIcon,
    title: "Actionable handoffs",
    description:
      "Give intake, operations, and leadership a clean list of issues, comments, and next-step recommendations.",
  },
];

const steps = [
  {
    title: "Send records securely",
    description:
      "Share a batch through your secure workflow, scope the request, and align on turnaround and priorities.",
  },
  {
    title: "Audit for readiness",
    description:
      "Review chart notes, order details, signatures, dates, and documentation completeness against DME expectations.",
  },
  {
    title: "Receive a clear action list",
    description:
      "Get record-level issue categories, concise rationale, and a cleaner path to correction and submission.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">AI-assisted + human-reviewed workflows</span>
            <h1 className="hero__title">
              Documentation audits built for faster DME approvals.
            </h1>
            <p className="hero__lede">
              Identify missing documentation, reduce denials, and move every
              record toward submission-ready confidence with a calmer, more
              elegant review experience.
            </p>

            <div className="hero__actions">
              <Link to="/request-review" className="button button--accent">
                Request review
              </Link>
              <Link to="/services" className="button button--ghost">
                Explore services
              </Link>
            </div>

            <div className="hero__micro">
              <span>Secure intake workflows</span>
              <span>Clear issue categories</span>
              <span>Modern, premium user experience</span>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__panel" />
            <div
              className="hero__photo hero__photo--one"
              style={{
                backgroundImage: `linear-gradient(150deg, rgba(255,255,255,0.15), rgba(12,22,39,0.18)), url(${checklistPhoto})`,
              }}
            />
            <div
              className="hero__photo hero__photo--two"
              style={{
                backgroundImage: `linear-gradient(150deg, rgba(255,255,255,0.12), rgba(12,22,39,0.18)), url(${tabletPhoto})`,
              }}
            />
            <div className="hero__illustration">
              <HeroIllustration />
            </div>

            <div className="hero__floating-note hero__floating-note--top">
              <strong>Elegant review flow</strong>
              <span>Designed to look premium while communicating trust and control.</span>
            </div>

            <div className="hero__floating-note hero__floating-note--bottom">
              <strong>Submission-ready insight</strong>
              <span>Issue tagging, recommendations, and operational clarity for each batch.</span>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="hero__stat-row">
            {stats.map((stat) => (
              <article key={stat.label} className="stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionTitle
            align="center"
            eyebrow="What your team gets"
            title="A polished review layer between documentation prep and payer submission."
            intro="The experience is built to feel less like a placeholder tool and more like a premium operational product—clear, modern, and easy to act on."
          />

          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="feature-card">
                  <div className="feature-card__icon">
                    <Icon />
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--highlight">
        <div className="container split-layout">
          <div>
            <SectionTitle
              eyebrow="How it works"
              title="A review flow built for speed, clarity, and clean handoffs."
              intro="The process keeps documentation teams focused on what needs correction first, what is ready to move, and how to keep volume under control."
            />

            <div className="process-list">
              {steps.map((step, index) => (
                <article key={step.title} className="process-item">
                  <div className="process-item__number">0{index + 1}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="showcase-card">
            <div className="showcase-card__glow" />
            <div className="showcase-card__inner">
              <div>
                <span className="eyebrow eyebrow--dark">Workflow visual</span>
                <div className="showcase-card__art">
                  <WorkflowIllustration />
                </div>
              </div>

              <div>
                <div className="showcase-meta">
                  <div className="showcase-meta__card">
                    <strong>Record-level notes</strong>
                    <span>Focused recommendations teams can apply immediately.</span>
                  </div>
                  <div className="showcase-meta__card">
                    <strong>Clean categories</strong>
                    <span>Separate administrative friction from medical necessity concerns.</span>
                  </div>
                </div>

                <div className="showcase-card__footer">
                  <span className="showcase-tag">Documentation completeness</span>
                  <span className="showcase-tag">Medical necessity checkpoints</span>
                  <span className="showcase-tag">Operational readiness</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Review coverage"
            title="Modern visual storytelling backed by practical review outcomes."
            intro="Your reference images work best as subtle blended surfaces—real enough to signal trust, stylized enough to keep the brand feeling elevated."
          />

          <div className="media-grid">
            <article className="media-card">
              <div
                className="media-card__image"
                style={{
                  backgroundImage: `url(${checklistPhoto})`,
                }}
              />
              <div className="media-card__body">
                <div>
                  <span className="eyebrow eyebrow--dark">Documentation completeness review</span>
                  <h3>Catch the missing pieces before they slow down intake.</h3>
                  <p>
                    Signature gaps, missing dates, order inconsistencies, and supporting
                    documentation issues are surfaced in a more structured, premium review flow.
                  </p>
                </div>
                <ul className="media-card__list">
                  <li>Chart note alignment</li>
                  <li>Order element verification</li>
                  <li>Clean issue grouping</li>
                </ul>
              </div>
            </article>

            <div className="media-grid__stack">
              <article className="media-card media-card--light">
                <div
                  className="media-card__image"
                  style={{
                    backgroundImage: `url(${tabletPhoto})`,
                  }}
                />
                <div className="media-card__body">
                  <div>
                    <span className="eyebrow">Collaborative handoff</span>
                    <h3>One clearer view for review teams and operations.</h3>
                    <p>
                      Use a shared visual language for status, comments, and correction work so the next step is obvious.
                    </p>
                  </div>
                </div>
              </article>

              <article className="media-card">
                <div
                  className="media-card__image"
                  style={{
                    backgroundImage: `url(${protectionPhoto})`,
                  }}
                />
                <div className="media-card__body">
                  <div>
                    <span className="eyebrow eyebrow--dark">Privacy-aware process</span>
                    <h3>Security-minded handling for sensitive documentation.</h3>
                    <p>
                      Keep the experience compliant-looking and trust-building with controlled workflows, clear boundaries, and calm UX.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="security-panel">
            <div className="security-panel__content">
              <span className="eyebrow eyebrow--dark">Security by design</span>
              <h2>Privacy-conscious review from the first upload to the final report.</h2>
              <p>
                The visual language communicates trust, but the structure also supports it:
                guided intake, scoped workflows, and a user experience that feels orderly from start to finish.
              </p>

              <ul className="security-list">
                <li>Review steps are easy to understand and present clearly to clients.</li>
                <li>Secure workflow messaging is built into the interface without overwhelming the design.</li>
                <li>Forms and pages are ready to connect to your controlled submission process.</li>
              </ul>
            </div>

            <div className="security-panel__visual">
              <div
                className="media-blend"
                style={{ backgroundImage: `url(${protectionPhoto})` }}
              />
              <div className="security-panel__card">
                <strong>Protected workflow</strong>
                <p>
                  Layer your secure uploader or CRM endpoint into this interface and keep the premium feel intact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container quote-panel">
          <article className="quote-card">
            <span className="eyebrow">Who this is for</span>
            <h3>Built for DME suppliers, intake teams, and reimbursement leaders.</h3>
            <p>
              This redesign turns a simple MVP-style site into a stronger product story: problem,
              solution, workflow, trust, and action—without losing the operational seriousness of the service.
            </p>
            <div className="chip-list">
              <span className="chip">Pre-submission QA</span>
              <span className="chip">Batch reviews</span>
              <span className="chip">Operational oversight</span>
              <span className="chip">Elegant client-facing UX</span>
            </div>
          </article>

          <article className="cta-panel">
            <span className="eyebrow">Next step</span>
            <h2>Ready to review your next documentation batch?</h2>
            <p>
              Move from a bare-bones landing page to a polished multi-page experience that feels more trustworthy and much easier to use.
            </p>
            <div className="hero__actions hero__actions--compact">
              <Link to="/request-review" className="button button--accent">
                Request review
              </Link>
              <Link to="/about" className="button button--ghost">
                See the approach
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
