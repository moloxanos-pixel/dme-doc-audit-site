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
      "Review a set of records before submission to identify administrative gaps and documentation completeness issues.",
    bullets: [
      "Signatures, dates, and order detail checks",
      "Issue grouping by record",
      "Clear reviewer comments",
    ],
    icon: FileSparkIcon,
  },
  {
    title: "Medical necessity checkpoint",
    description:
      "Surface records that may need closer attention for medical necessity support and chart note alignment.",
    bullets: [
      "Narrative support review",
      "Documentation consistency",
      "Priority flagging",
    ],
    icon: ShieldCheckIcon,
  },
  {
    title: "Recurring QA support",
    description:
      "Create an ongoing review rhythm for teams handling repeat batches, escalations, or workflow cleanup.",
    bullets: [
      "Flexible cadence by batch size",
      "Status visibility for operations",
      "Support for process refinement",
    ],
    icon: ClockArrowIcon,
  },
];

const included = [
  {
    icon: CompassPulseIcon,
    title: "Scoping and prioritization",
    description: "Define turnaround, review depth, and what matters most before work starts.",
  },
  {
    icon: FileSparkIcon,
    title: "Record-level findings",
    description: "Keep output understandable for intake staff, managers, and anyone handling corrections.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Confidence-building presentation",
    description: "Use a premium interface that makes the service feel deliberate and reliable.",
  },
];

const faqs = [
  {
    question: "Can this site support a simple request flow or a full secure intake process?",
    answer:
      "Yes. The Request Review page is designed as a front-end UI that can be connected to a lightweight contact flow, secure uploader, CRM, or custom backend.",
  },
  {
    question: "Is the design responsive across desktop and mobile?",
    answer:
      "Yes. The layout uses responsive grids, flexible cards, and a mobile navigation pattern so the experience stays polished on smaller screens.",
  },
  {
    question: "Can I extend this to show case studies or pricing later?",
    answer:
      "Absolutely. The structure is intentionally modular, so adding case studies, pricing sections, or more service detail pages is straightforward.",
  },
  {
    question: "Does the redesign preserve the existing value proposition?",
    answer:
      "Yes. The core message remains the same—faster approvals, fewer denials, and stronger documentation readiness—but the storytelling is much more premium and complete.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Review services for cleaner submissions and fewer surprises."
        intro="The service stack is framed to feel premium and operationally useful: clear deliverables, elegant presentation, and enough flexibility to support both single batches and repeat review work."
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
            eyebrow="Core offers"
            title="A clean service menu with room to grow."
            intro="Instead of presenting everything in one flat block, the redesign gives each offer its own card, visual anchor, and operational context."
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
            eyebrow="What is included"
            title="Deliverables that feel usable, not vague."
            intro="Every section is designed to make the service easier to explain to clients and easier to act on internally."
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
            title="Common questions about the redesign and service structure."
            intro="These answer the questions most likely to come up when you turn the prototype into a live production site."
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
