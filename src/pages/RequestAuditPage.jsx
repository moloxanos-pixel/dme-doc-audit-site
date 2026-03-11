import { useState } from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import protectionPhoto from "../assets/data-protection.jpg";

export default function RequestAuditPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Request review"
        title="Submit your review request in a secure, publish-ready flow."
        intro="Share your project details to begin intake. After submission, your team receives a secure upload link by email for safe document transfer."
        panelClassName="page-hero__panel--image page-hero__panel--plain"
        panel={
          <>
            <div
              className="page-hero__background"
              style={{ backgroundImage: `url(${protectionPhoto})` }}
            />
            <div className="page-hero__panel__content">
              <span className="eyebrow eyebrow--dark">Integration ready</span>
              <h3 className="page-hero__mini-title">Launch with secure document handoff.</h3>
              <p className="page-hero__mini-copy">
                Connect this flow to Formspree, Resend, HubSpot, or a custom API that emails a secure upload link after request submission.
              </p>
            </div>
          </>
        }
      />

      <section className="section section--tight">
        <div className="container request-grid">
          <article className="contact-card">
            <SectionTitle
              eyebrow="Request details"
              title="A professional intake form ready for production."
              intro="This front-end workflow is designed for live publishing once connected to your approved backend, notifications, and secure upload service."
            />

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="fullName">Full name</label>
                  <input id="fullName" name="fullName" type="text" placeholder="Your name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Work email</label>
                  <input id="email" name="email" type="email" placeholder="name@company.com" required />
                </div>
                <div className="form-field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" placeholder="Company name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="records">Number of records</label>
                  <select id="records" name="records" defaultValue="">
                    <option value="" disabled>
                      Select volume
                    </option>
                    <option value="1-25">1–25</option>
                    <option value="26-100">26–100</option>
                    <option value="101-500">101–500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="timeline">Desired timeline</label>
                  <select id="timeline" name="timeline" defaultValue="">
                    <option value="" disabled>
                      Choose turnaround
                    </option>
                    <option value="asap">As soon as possible</option>
                    <option value="this-week">This week</option>
                    <option value="this-month">This month</option>
                    <option value="planning">Planning for later</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="scope">Review scope</label>
                  <select id="scope" name="scope" defaultValue="">
                    <option value="" disabled>
                      Select scope
                    </option>
                    <option value="batch-review">Batch documentation review</option>
                    <option value="medical-necessity">Medical necessity checkpoint</option>
                    <option value="recurring-qa">Recurring QA support</option>
                    <option value="unsure">Not sure yet</option>
                  </select>
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Share relevant context such as document types, recurring issues, preferred intake method, or questions."
                  />
                </div>
              </div>

              <div className="hero__actions hero__actions--compact">
                <button type="submit" className="button button--accent">
                  Submit review request
                </button>
              </div>

              <div className="form-note">
                {submitted
                  ? "Thanks—your request has been captured in this demo flow. In production, this action should trigger an email with a secure upload link for protected document transfer."
                  : "After submission, users should receive a secure upload link by email. Avoid requesting sensitive records through standard email attachments."}
              </div>
            </form>
          </article>

          <article className="info-card">
            <SectionTitle
              eyebrow="What to expect"
              title="Clear next steps from request to document transfer."
              intro="Set expectations before submission so clients understand exactly how documents are shared securely."
            />

            <ul className="info-list">
              <li>Users submit request details first—no sensitive files are uploaded directly in this form.</li>
              <li>After submission, send a secure upload link by email for protected document transfer.</li>
              <li>Use encrypted storage, access controls, and audit logging in the connected upload system.</li>
              <li>Keep plain email attachments as a fallback exception, not the default for sensitive records.</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
