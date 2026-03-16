import SectionTitle from '../components/SectionTitle';

export default function RequestAuditPage() {
  return (
    <section className="section page-simple">
      <div className="container narrow">
        <SectionTitle eyebrow="Request Review" title="Request a documentation review." intro="After submission, a secure upload link can be delivered by email for protected file transfer." />
        <form className="simple-card form-grid">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="name@example.com" />
          </label>
          <label>
            Company
            <input type="text" placeholder="Company name" />
          </label>
          <label>
            Estimated Records
            <input type="text" placeholder="Example: 250" />
          </label>
          <label className="form-full">
            Notes
            <textarea rows="5" placeholder="Describe your request, timeline, and documentation needs." />
          </label>
          <button type="button" className="button button--accent form-full">Submit Request</button>
        </form>
      </div>
    </section>
  );
}
