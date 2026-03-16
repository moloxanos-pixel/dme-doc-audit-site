import { Link } from 'react-router-dom';
import HeroIllustration from '../components/HeroIllustration';
import WorkflowIllustration from '../components/WorkflowIllustration';
import SectionTitle from '../components/SectionTitle';
import { FileSparkIcon, HandoffIcon, ShieldCheckIcon } from '../components/Icons';
import checklistPhoto from '../assets/checklist-review.jpg';
import tabletPhoto from '../assets/tablet-review.jpg';
import protectionPhoto from '../assets/data-protection.jpg';

const stats = [
  { value: '5000+', label: 'records reviewed before submission' },
  { value: '2%', label: 'medical necessity issues surfaced' },
  { value: '8%', label: 'administrative issues identified' },
  { value: '$0.85', label: 'starting pricing per record' },
];

const features = [
  {
    icon: FileSparkIcon,
    title: 'Documentation clarity',
    description: 'Identify missing signatures, dates, order elements, and chart note mismatches before they create avoidable rework.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Professional review',
    description: 'Combine efficient review workflows with experienced judgment for records that require closer attention.',
  },
  {
    icon: HandoffIcon,
    title: 'Actionable reporting',
    description: 'Provide teams with structured findings, concise issue summaries, and recommended next steps.',
  },
];

const steps = [
  {
    title: 'Submit your request',
    description: 'Share project details and receive a secure upload link by email for protected document transfer.',
  },
  {
    title: 'Review for readiness',
    description: 'Assess documentation completeness, medical necessity support, signatures, dates, and order accuracy.',
  },
  {
    title: 'Receive a structured report',
    description: 'Get record-level findings and a clear action list that supports faster correction and submission.',
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">AI-assisted and professionally reviewed workflows</span>
            <h1 className="hero__title">Documentation reviews built for stronger DME submission readiness.</h1>
            <p className="hero__lede">
              Reduce avoidable denials, strengthen documentation quality, and move each record toward submission with a more structured review process.
            </p>
            <div className="hero__actions">
              <Link to="/request-review" className="button button--accent">Request Review</Link>
              <Link to="/services" className="button button--ghost">View Services</Link>
            </div>
            <div className="hero__micro">
              <span>5000+ records reviewed</span>
              <span>Secure upload link by email</span>
              <span>Professional reporting</span>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero-card">
              <HeroIllustration />
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
            eyebrow="What clients receive"
            title="A professional review layer between intake preparation and payer submission."
            intro="The site and service are designed to communicate trust, clarity, and operational readiness from the first interaction."
          />
          <div className="feature-grid">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="feature-card">
                  <div className="feature-card__icon"><Icon /></div>
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
              title="A review process built for clarity, speed, and dependable handoff."
              intro="Each step is positioned to help documentation teams understand priorities, organize corrections, and move forward with confidence."
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
            <div className="showcase-card__inner">
              <span className="eyebrow eyebrow--dark">Workflow overview</span>
              <div className="showcase-card__art"><WorkflowIllustration /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Review coverage"
            title="Professional visual storytelling backed by practical review outcomes."
            intro="Reference imagery and illustration are blended into the experience to support a modern, trustworthy presentation."
          />
          <div className="media-grid">
            <article className="media-card">
              <div className="media-card__image" style={{ backgroundImage: `url(${checklistPhoto})` }} />
              <div className="media-card__body">
                <span className="eyebrow eyebrow--dark">Documentation completeness review</span>
                <h3>Identify missing elements before they slow down intake.</h3>
                <p>Surface missing signatures, absent dates, order issues, and chart note inconsistencies in a cleaner review workflow.</p>
              </div>
            </article>
            <article className="media-card media-card--light">
              <div className="media-card__image" style={{ backgroundImage: `url(${tabletPhoto})` }} />
              <div className="media-card__body">
                <span className="eyebrow">Collaborative handoff</span>
                <h3>Support review teams with clearer status and next-step visibility.</h3>
                <p>Present findings in a format that is easier for operations, intake, and leadership teams to act on.</p>
              </div>
            </article>
            <article className="media-card">
              <div className="media-card__image" style={{ backgroundImage: `url(${protectionPhoto})` }} />
              <div className="media-card__body">
                <span className="eyebrow eyebrow--dark">Security-minded process</span>
                <h3>Use a secure-link workflow for protected document transfer.</h3>
                <p>After a request is submitted, clients receive a secure upload link by email rather than sending sensitive records as attachments.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container quote-panel">
          <article className="quote-card">
            <span className="eyebrow">Who this is for</span>
            <h3>Built for DME suppliers, intake teams, and reimbursement leaders.</h3>
            <p>The website positions the service with a stronger story: review quality, workflow clarity, secure handling, and professional action.</p>
          </article>
          <article className="cta-panel">
            <span className="eyebrow">Next step</span>
            <h2>Ready to review your next documentation batch?</h2>
            <p>Start with a request and receive a secure upload link by email for your document transfer workflow.</p>
            <div className="hero__actions hero__actions--compact">
              <Link to="/request-review" className="button button--accent">Request Review</Link>
              <Link to="/about" className="button button--ghost">Learn More</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
