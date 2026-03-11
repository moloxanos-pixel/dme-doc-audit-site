import PageHero from "../components/PageHero";
import WorkflowIllustration from "../components/WorkflowIllustration";
import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";
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
      "Review record sets before submission to identify documentation deficiencies, missing elements, and workflow risks.",
    bullets: [
      "Signature, date, and order detail verification",
      "Issue categorization by record and risk level",
      "Concise reviewer notes to support correction",
    ],
    icon: FileSparkIcon,
  },
  {
    title: "Medical necessity review",
    description:
      "Evaluate narrative support and record consistency to identify files that require stronger medical necessity documentation.",
    bullets: [
      "Clinical narrative support assessment",
      "Consistency checks across order and chart documentation",
      "Priority flags for high-risk records",
    ],
    icon: ShieldCheckIcon,
  },
  {
    title: "Ongoing compliance QA support",
    description:
      "Provide recurring compliance-focused record review for teams managing ongoing volume and quality improvement initiatives.",
    bullets: [
      "Flexible cadence aligned to batch volume",
      "Status visibility for operations leadership",
      "Trend insights to support process improvement",
    ],
    icon: ClockArrowIcon,
  },
];

const included = [
  {
    icon: CompassPulseIcon,
    title: "Scoping and prioritization",
    description: "Define review depth, turnaround targets, and priority categories before work begins.",
  },
  {
    icon: FileSparkIcon,
    title: "Record-level findings",
    description: "Deliver structured findings that intake, billing, and correction teams can apply quickly.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Professional reporting",
    description: "Provide clear outputs designed for accountable handoff and operational follow-through.",
  },
];

const faqs = [
  {
    question: "Can the request workflow support secure intake requirements?",
    answer:
      "Yes. The Request Review workflow can be connected to approved secure upload, CRM, or internal intake systems.",
  },
  {
    question: "Is service delivery suitable for both one-time and recurring review?",
    answer:
      "Yes. Engagements can be scoped for a single batch or a recurring review cadence based on your operational needs.",
  },
  {
    question: "What does the final deliverable include?",
    answer:
      "Deliverables include record-level findings, issue categorization, and practical recommendations for correction and resubmission readiness.",
  },
  {
    question: "Can service scope be adjusted over time?",
    answer:
      "Yes. Scope can be refined as documentation trends, staffing models, and compliance priorities evolve.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="DME Records Reviews provides batch documentation review, medical necessity review, and recurring compliance QA support with clear reporting."
      />

      <PageHero
        eyebrow="Services"
        title="Review services designed to improve documentation quality and submission outcomes."
        intro="Our service model emphasizes clear scope, dependable turnaround, and actionable reporting for one-time and recurring review needs."
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
            title="Focused review support with scalable coverage."
            intro="Each service is defined with clear deliverables to support planning, execution, and compliance accountability."
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
            title="Deliverables teams can apply immediately."
            intro="Outputs are structured to support efficient communication, corrective action, and operational follow-through."
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
            title="Common questions about service scope and delivery."
            intro="These answers provide practical guidance for planning implementation and onboarding."
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
