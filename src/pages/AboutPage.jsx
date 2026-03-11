import PageHero from "../components/PageHero";
import HeroIllustration from "../components/HeroIllustration";
import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";

const values = [
  {
    title: "Compliance-focused methodology",
    description:
      "Our review framework is built around documentation completeness, medical necessity support, and consistency standards.",
  },
  {
    title: "Experienced reviewer oversight",
    description:
      "Structured criteria are applied with professional judgment to identify nuanced documentation risks.",
  },
  {
    title: "Clear operational communication",
    description:
      "Findings are presented in practical language that supports timely handoff and corrective action across teams.",
  },
];

const timeline = [
  {
    title: "Define scope and priorities",
    description:
      "We align on record volume, review depth, and turnaround expectations before work begins.",
  },
  {
    title: "Conduct structured record review",
    description:
      "Records are evaluated for required documentation elements, consistency, and medical necessity support.",
  },
  {
    title: "Deliver findings and next actions",
    description:
      "Teams receive prioritized findings and recommendations to support correction and submission readiness.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Learn how DME Records Reviews applies structured, compliance-focused documentation review with secure handling and professional reporting."
      />

      <PageHero
        eyebrow="About"
        title="A disciplined approach to DME documentation review."
        intro="DME Records Reviews supports suppliers and operations teams with compliance-focused review methodology, secure handling practices, and dependable reporting."
        panel={<HeroIllustration />}
      />

      <section className="section section--tight">
        <div className="container story-grid">
          <article className="story-panel">
            <SectionTitle
              eyebrow="Why teams choose this model"
              title="Built for clarity, consistency, and operational accountability."
              intro="Our service structure helps organizations reduce preventable rework and improve confidence before submission."
            />

            <div className="values-grid">
              {values.map((value) => (
                <article key={value.title} className="value-card">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="timeline-panel">
            <SectionTitle
              eyebrow="Our process"
              title="A straightforward workflow from intake to reporting."
              intro="Each step is designed to support timely decisions and consistent follow-through."
            />

            <div className="timeline-list">
              {timeline.map((item, index) => (
                <div key={item.title} className="timeline-item">
                  <div className="timeline-item__badge">{index + 1}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
