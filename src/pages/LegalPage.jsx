import PageHero from "../components/PageHero";

export default function LegalPage({ title, intro, updatedLabel, sections }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        intro={intro}
        panel={
          <div className="page-hero__panel__content legal-panel">
            <span className="eyebrow eyebrow--dark">Review before launch</span>
            <h3 className="page-hero__mini-title">Production-ready legal page structure.</h3>
            <p className="page-hero__mini-copy">
              Confirm this content with legal counsel so published language reflects your actual workflow and compliance obligations.
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
                  Before publishing, validate legal language, contact details, and policy statements against your live data-handling practices.
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
