export default function SectionTitle({
  eyebrow,
  title,
  intro,
  align = "left",
}) {
  const className =
    align === "center" ? "section-title section-title--center" : "section-title";

  return (
    <div className={className}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}
