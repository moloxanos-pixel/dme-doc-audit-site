import PageHero from "../components/PageHero";
import HeroIllustration from "../components/HeroIllustration";
import SectionTitle from "../components/SectionTitle";
import usePageMeta from "../components/usePageMeta";

const values = [
  {
    title: "Professional user experience",
    description:
      "The interface balances clarity and visual structure so stakeholders can review information quickly and confidently.",
  },
  {
    title: "Human judgment where it matters",
    description:
      "The review model combines structured criteria with experienced judgment for records that require nuance.",
  },
  {
    title: "Operational communication",
    description:
      "Clear status language, hierarchy, and next-step guidance support timely action across teams.",
  },
];

const timeline = [
  {
    title: "Define the documentation risk",
    description:
      "The experience starts by clarifying common submission risks and the operational impact of incomplete documentation.",
  },
  {
    title: "Present the review method",
    description:
      "Visuals and content explain how records are assessed for completeness, consistency, and readiness.",
  },
  {
    title: "Guide the next action",
    description:
      "Each page directs visitors toward a clear Request Review path with practical expectations.",
  },
];

export default function AboutPage() {
  usePageMeta(
    "About Our DME Review Approach | DME Records Reviews",
    "Learn how DME Records Reviews combines structured criteria and human judgment to deliver clear, actionable documentation audit findings.",
  );

  return (
    <>
      <PageHero
        eyebrow="About"
        title="A clear, professional presentation for documentation review services."
        intro="DME Records Reviews is built to communicate methodology, compliance awareness, and service reliability with clarity."
        panel={<HeroIllustration />}
      />

      <section className="section section--tight">
        <div className="container story-grid">
          <article className="story-panel">
            <SectionTitle
              eyebrow="Why this approach works"
              title="A complete service narrative built for decision-makers."
              intro="The information architecture supports decision-making by presenting scope, process, trust signals, and action steps in a logical flow."
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
              eyebrow="Approach"
              title="A sequence stakeholders can follow quickly."
              intro="Each page supports understanding from service need to review process to implementation readiness."
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
