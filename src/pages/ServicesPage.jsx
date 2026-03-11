import PageHero from "../components/PageHero";
import WorkflowIllustration from "../components/WorkflowIllustration";
import SectionTitle from "../components/SectionTitle";
import {
  ClockArrowIcon,
  CompassPulseIcon,
  FileSparkIcon,
  ShieldCheckIcon,
} from "../components/Icons";

const services = [
  {
    title: "Batch documentation review",
    description:
      "Review record sets before submission to identify administrative deficiencies and documentation completeness issues.",
    bullets: [
      "Signature, date, and order detail verification",
      "Issue grouping by record",
      "Clear reviewer notes for correction",
    ],
    icon: FileSparkIcon,
  },
  {
    title: "Medical necessity checkpoint",
    description:
      "Identify records that require additional support for medical necessity and chart-note alignment.",
    bullets: [
      "Narrative support assessment",
      "Consistency checks across documentation",
      "Priority flags for high-risk records",
    ],
    icon: ShieldCheckIcon,
  },
  {
    title: "Recurring QA support",
    description:
      "Establish ongoing quality review support for teams managing recurring volume, escalations, or process correction.",
    bullets: [
      "Flexible cadence based on batch size",
      "Status visibility for operations teams",
      "Support for workflow improvement",
    ],
    icon: ClockArrowIcon,
  },
];

const included = [
  {
    icon: CompassPulseIcon,
    title: "Scoping and prioritization",
    description: "Define turnaround, review depth, and priorities before review begins.",
  },
  {
    icon: FileSparkIcon,
    title: "Record-level findings",
    description: "Deliver clear findings that intake staff, managers, and correction teams can use.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Professional delivery",
    description: "Present results in a structured format that supports confidence and accountability.",
  },
];

const faqs = [
  {
    question: "Can this site support a basic request flow or a secure intake process?",
    answer:
      "Yes. The Request Review page can capture request details first, then trigger an email with a secure upload link via CRM or custom backend.",
  },
  {
    question: "Is the design responsive across desktop and mobile?",
    answer:
      "Yes. The layout uses responsive grids, flexible cards, and mobile-friendly navigation for consistent usability.",
  },
  {
    question: "Can we add case studies or pricing later?",
    answer:
      "Yes. The page structure is modular, so additional sections and service detail pages can be added without redesigning the core layout.",
  },
  {
    question: "Does this preserve the current value proposition?",
    answer:
      "Yes. The core message remains focused on faster approvals, fewer avoidable denials, and stronger documentation readiness.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Review services designed for cleaner submissions and fewer delays."
        intro="Our service model emphasizes clear deliverables, dependable turnaround, and practical reporting for both one-time and recurring review needs."
        panel={
          <div className="page-hero__panel__content">
            <div className="page-hero__art page-hero__art--compact">
              <WorkflowIllustration />
            </div>
          </div>
        }
      />

      <section className="section section--tight">
        <div className="container">
          <SectionTitle
            eyebrow="Core services"
            title="A focused review menu with room to scale."
            intro="Each service is defined with clear scope and outputs to support operational planning and execution."
          />

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="service-card">
                  <div className="feature-card__icon">
                    <Icon />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section section--highlight">
        <div className="container">
          <SectionTitle
            eyebrow="Included with each engagement"
            title="Deliverables teams can act on immediately."
            intro="Outputs are structured to improve communication with clients and accelerate internal correction workflows."
          />
          <div className="feature-grid">
            {included.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="feature-card">
                  <div className="feature-card__icon">
                    <Icon />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="FAQ"
            title="Common questions about service delivery and implementation."
            intro="These responses address typical planning questions when preparing the site for live operations."
          />
          <div className="faq-grid">
            {faqs.map((faq) => (
              <article key={faq.question} className="faq-card">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
