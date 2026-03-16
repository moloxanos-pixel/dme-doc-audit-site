export default function SectionTitle({ eyebrow, title, intro, align = 'left' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}
