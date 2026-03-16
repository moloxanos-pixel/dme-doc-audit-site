import SectionTitle from '../components/SectionTitle';

export default function AboutPage() {
  return (
    <section className="section page-simple">
      <div className="container narrow">
        <SectionTitle eyebrow="About" title="A more structured approach to DME record readiness." intro="DME Records Reviews is positioned to help teams strengthen documentation quality before submission." />
        <div className="simple-card">
          <p>Our approach emphasizes documentation completeness, operational clarity, professional communication, and a secure-link workflow for sensitive record transfer.</p>
        </div>
      </div>
    </section>
  );
}
