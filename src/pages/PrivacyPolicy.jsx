import SectionTitle from '../components/SectionTitle';

export default function PrivacyPolicy() {
  return (
    <section className="section page-simple">
      <div className="container narrow">
        <SectionTitle eyebrow="Privacy Policy" title="Privacy and data handling" intro="This website presents a professional service experience and is designed to support secure-link file transfer workflows." />
        <div className="simple-card prose-like">
          <p>Information submitted through the website may be used to respond to review requests, coordinate service delivery, and maintain communication regarding documentation projects.</p>
          <p>Sensitive records should be transferred through the designated secure upload workflow rather than standard email attachments.</p>
        </div>
      </div>
    </section>
  );
}
