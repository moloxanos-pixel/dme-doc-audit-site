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
import Seo from "../components/Seo";
import tabletPhoto from "../assets/tablet-review.jpg";
import protectionPhoto from "../assets/data-protection.jpg";

const stats = [
  { value: "Comprehensive", label: "documentation completeness checks" },
  { value: "Targeted", label: "medical necessity review checkpoints" },
  { value: "Structured", label: "record-level issue categorization" },
  { value: "Reliable", label: "professional reporting turnaround" },
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
      <Seo
        title="Home"
        description="Compliance-focused DME documentation and medical necessity reviews designed to improve submission quality and reduce avoidable denials."
      />

      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">Compliance-focused DME record review</span>
            <h1 className="hero__title">
              Professional DME documentation reviews that strengthen submission readiness.
            </h1>
            <p className="hero__lede">
              Our review process identifies documentation gaps early, supports medical necessity validation, and helps teams submit cleaner files with confidence.
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
              <strong>Structured review methodology</strong>
              <span>Built for consistent quality, clear accountability, and operational control.</span>
            </div>

            <div className="hero__floating-note hero__floating-note--bottom">
              <strong>Actionable compliance findings</strong>
              <span>Record-level findings and correction priorities your team can apply immediately.</span>
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
            title="A disciplined review layer between document preparation and payer submission."
            intro="Our reporting model is designed for clarity and accountability, enabling teams to complete corrections efficiently and accurately."
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
              title="A review process built for consistency, accuracy, and efficient handoffs."
              intro="Each step is structured to help documentation teams prioritize corrective action, maintain throughput, and improve documentation quality."
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
            title="Clear reporting backed by measurable review outcomes."
            intro="Each review area is communicated in precise language so teams understand findings, risk level, and required actions."
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
                  <h3>Identify missing documentation before submission delays occur.</h3>
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
                    <h3>One reporting view for reviewers, intake teams, and operations.</h3>
                    <p>
                      Use a shared format for status, reviewer comments, and correction priorities so handoffs remain clear.
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
                    <h3>Secure handling for sensitive documentation.</h3>
                    <p>
                      Maintain trust through controlled workflows, clear process boundaries, and consistent communication.
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
              <h2>Privacy-conscious review from intake through final reporting.</h2>
              <p>
                Our process supports controlled intake, defined workflows, and structured communication throughout the review lifecycle.
              </p>

              <ul className="security-list">
                <li>Review steps are standardized and easy to communicate across teams.</li>
                <li>Security expectations are integrated into the workflow without adding unnecessary complexity.</li>
                <li>Request workflows align with governed submission and escalation processes.</li>
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
            <h3>Built for DME suppliers, intake teams, and reimbursement leadership.</h3>
            <p>
              Our service model communicates review scope, compliance expectations, and operational next steps with clarity.
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
            <h2>Ready to evaluate your next documentation batch?</h2>
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
