import PageHero from "../components/PageHero";
import HeroIllustration from "../components/HeroIllustration";
import SectionTitle from "../components/SectionTitle";

const values = [
  {
    title: "Calm premium UX",
    description:
      "Serious services often look too sparse or too cluttered. This redesign sits in the middle: modern, elegant, and still trustworthy.",
  },
  {
    title: "Human judgement where it matters",
    description:
      "The story communicates a process that combines structured review logic with thoughtful evaluation of edge cases.",
  },
  {
    title: "Communication teams can use",
    description:
      "A strong operational service needs a strong interface. Clear status, visual hierarchy, and next-step language help people act fast.",
  },
];

const timeline = [
  {
    title: "Position the problem clearly",
    description:
      "The site now opens with stronger storytelling: documentation friction, submission risk, and the need for clean review workflows.",
  },
  {
    title: "Present the solution visually",
    description:
      "Original SVG illustrations and softly blended imagery create trust without relying on generic placeholder sections alone.",
  },
  {
    title: "Lead visitors to action",
    description:
      "Every page creates a smoother route to Request Review, supported by better structure and more premium design cues.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A clearer story for a serious documentation review service."
        intro="The redesign keeps the original business promise, but reframes it inside a modern, multi-page product experience that feels more complete, more premium, and easier to trust."
        panel={<HeroIllustration />}
      />

      <section className="section section--tight">
        <div className="container story-grid">
          <article className="story-panel">
            <SectionTitle
              eyebrow="Why this redesign works"
              title="From a simple landing page to a polished service narrative."
              intro="The original project had the core message, but not the visual depth or information flow to support it. This version introduces stronger hierarchy, page separation, and premium visual storytelling."
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
              title="A sequence visitors can follow."
              intro="Each page moves from problem to process to trust to action, which makes the service easier to understand at a glance."
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
