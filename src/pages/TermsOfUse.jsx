import SectionTitle from '../components/SectionTitle';

export default function TermsOfUse() {
  return (
    <section className="section page-simple">
      <div className="container narrow">
        <SectionTitle eyebrow="Terms of Use" title="Website terms" intro="Use of this website is subject to standard informational and service-request terms." />
        <div className="simple-card prose-like">
          <p>The website content is provided for informational and business inquiry purposes. Service scope, pricing, timelines, and delivery terms may be confirmed separately.</p>
          <p>Users should not send sensitive medical records through unsecured email attachments when a secure-link workflow is provided.</p>
        </div>
      </div>
    </section>
  );
}
