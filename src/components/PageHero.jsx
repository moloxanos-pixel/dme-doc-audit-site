export default function PageHero({ eyebrow, title, intro, panel, panelClassName = "" }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="page-hero__shell">
          <div className="page-hero__text">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
          <div className={panelClassName ? `page-hero__panel ${panelClassName}` : "page-hero__panel"}>{panel}</div>
        </div>
      </div>
    </section>
  );
}
