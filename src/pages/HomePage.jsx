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
  { value: "2%", label: "medical necessity concerns identified" },
  { value: "8%", label: "administrative issues identified" },
  { value: "$0.85", label: "starting point per record" },
];

const features = [
  {
    icon: FileSparkIcon,
    title: "Pre-submission quality review",
    description:
      "Identify missing signatures, dates, order elements, and chart-note inconsistencies before submission.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Consistent reviewer judgment",
    description:
      "Apply repeatable review standards with experienced human oversight for records that require context.",
  },
  {
    icon: HandoffIcon,
    title: "Action-ready findings",
    description:
      "Provide teams with organized issue categories, concise notes, and clear recommendations for correction.",
  },
];

const steps = [
  {
    title: "Submit records securely",
    description:
      "Share the requested batch through your secure workflow and confirm scope, priorities, and turnaround expectations.",
  },
  {
    title: "Complete a readiness audit",
    description:
      "Review chart notes, orders, signatures, dates, and documentation completeness against DME requirements.",
  },
  {
    title: "Receive a prioritized action list",
    description:
      "Get record-level findings with rationale and practical next steps to support timely correction and submission.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">AI-assisted and human-reviewed workflows</span>
            <h1 className="hero__title">
              Documentation audits designed for faster, cleaner DME submissions.
            </h1>
            <p className="hero__lede">
              Improve documentation quality, reduce preventable denials, and move each
              record toward submission readiness with a structured review process.
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
              <span>Clear issue categorization</span>
              <span>Professional reporting experience</span>
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
              <strong>Structured review workflow</strong>
              <span>Built to support consistent quality, visibility, and control.</span>
            </div>

            <div className="hero__floating-note hero__floating-note--bottom">
              <strong>Submission-ready insights</strong>
              <span>Record-level findings and recommendations your team can act on quickly.</span>
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
            eyebrow="What your team receives"
            title="A practical review layer between document preparation and payer submission."
            intro="The platform is designed for clarity and accountability, so teams can identify issues quickly and complete corrections with confidence."
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
              title="A review process built for speed, accuracy, and clear handoffs."
              intro="Each step is structured to help documentation teams prioritize corrections, maintain throughput, and improve file quality."
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
                    <span>Concise guidance teams can apply immediately.</span>
                  </div>
                  <div className="showcase-meta__card">
                    <strong>Clear categories</strong>
                    <span>Separate administrative deficiencies from medical necessity concerns.</span>
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
            title="Visual reporting backed by measurable review outcomes."
            intro="Each review area is presented with clear language so internal teams and clients understand findings and required actions."
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
                  <h3>Identify missing elements before intake delays occur.</h3>
                  <p>
                    Signature gaps, missing dates, order inconsistencies, and support
                    documentation issues are flagged in a consistent review format.
                  </p>
                </div>
                <ul className="media-card__list">
                  <li>Chart note alignment</li>
                  <li>Order element verification</li>
                  <li>Issue grouping by category</li>
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
                    <span className="eyebrow">Coordinated handoff</span>
                    <h3>One view for reviewers, intake teams, and operations.</h3>
                    <p>
                      Use a shared format for status, comments, and correction priorities so next steps are clear.
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
                    <span className="eyebrow eyebrow--dark">Privacy-focused operations</span>
                    <h3>Responsible handling for sensitive documentation.</h3>
                    <p>
                      Support trust with controlled workflows, clear process boundaries, and consistent communication.
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
              <h2>Privacy-conscious review from initial upload through final reporting.</h2>
              <p>
                The platform supports controlled intake, defined workflows, and orderly communication throughout the review lifecycle.
              </p>

              <ul className="security-list">
                <li>Review steps are clear and easy to communicate to clients and internal teams.</li>
                <li>Security messaging is integrated into the interface without adding unnecessary complexity.</li>
                <li>Forms and pages are ready to connect to your governed submission process.</li>
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
                  Connect your secure uploader or CRM endpoint while maintaining a consistent professional experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container quote-panel">
          <article className="quote-card">
            <span className="eyebrow">Who we support</span>
            <h3>Designed for DME suppliers, intake teams, and reimbursement leadership.</h3>
            <p>
              The site presents your service clearly across problem definition, review methodology,
              compliance posture, and next steps.
            </p>
            <div className="chip-list">
              <span className="chip">Pre-submission QA</span>
              <span className="chip">Batch reviews</span>
              <span className="chip">Operational oversight</span>
              <span className="chip">Client-ready reporting</span>
            </div>
          </article>

          <article className="cta-panel">
            <span className="eyebrow">Next step</span>
            <h2>Ready to review your next documentation batch?</h2>
            <p>
              Start with a structured request and receive clear findings that support faster, more accurate submissions.
            </p>
            <div className="hero__actions hero__actions--compact">
              <Link to="/request-review" className="button button--accent">
                Request review
              </Link>
              <Link to="/about" className="button button--ghost">
                See our approach
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
