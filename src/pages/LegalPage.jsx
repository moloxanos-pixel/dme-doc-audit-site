import PageHero from "../components/PageHero";
import usePageMeta from "../components/usePageMeta";

export default function LegalPage({ title, intro, updatedLabel, sections, metaTitle, metaDescription }) {
  usePageMeta(metaTitle || `${title} | DME Records Reviews`, metaDescription);

  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        intro={intro}
        panel={
          <div className="page-hero__panel__content legal-panel">
            <span className="eyebrow eyebrow--dark">Review before launch</span>
            <h3 className="page-hero__mini-title">Legal terms for website and intake use.</h3>
            <p className="page-hero__mini-copy">
              Review this page periodically so published language remains accurate for your workflows, data handling, and compliance obligations.
            </p>
          </div>
        }
      />

      <section className="section section--tight">
        <div className="container legal-layout">
          <aside className="legal-nav-card">
            <h3>On this page</h3>
            <nav className="legal-nav">
              {sections.map((section) => (
                <a href={`#${section.id}`} key={section.id}>
                  {section.title}
                </a>
              ))}
            </nav>
            <p>{updatedLabel}</p>
          </aside>

          <div className="legal-content">
            <div className="legal-banner">
              <div className="feature-card__icon">
                <span className="legal-icon">!</span>
              </div>
              <div>
                <strong>Publication checklist</strong>
                <p>
                  Validate legal language, contact details, and policy statements against your current operating practices before each release.
                </p>
              </div>
            </div>

            {sections.map((section) => (
              <section key={section.id} id={section.id} className="legal-section">
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
