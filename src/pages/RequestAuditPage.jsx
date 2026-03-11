import { useState } from "react";
import PageHero from "../components/PageHero";
import SectionTitle from "../components/SectionTitle";
import Seo from "../components/Seo";
import protectionPhoto from "../assets/data-protection.jpg";

export default function RequestAuditPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Seo
        title="Request Review"
        description="Submit a DME documentation review request with secure intake details, scope preferences, and turnaround priorities."
      />

      <PageHero
        eyebrow="Request review"
        title="Submit a DME documentation review request."
        intro="Provide your review requirements through a structured intake form designed for secure document-handling workflows."
        panelClassName="page-hero__panel--image page-hero__panel--plain"
        panel={
          <>
            <div
              className="page-hero__background"
              style={{ backgroundImage: `url(${protectionPhoto})` }}
            />
            <div className="page-hero__panel__content">
              <span className="eyebrow eyebrow--dark">Secure integration</span>
              <h3 className="page-hero__mini-title">Aligned with governed intake processes.</h3>
              <p className="page-hero__mini-copy">
                Connect this request workflow to your approved secure upload, CRM, or internal submission system.
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
              title="Provide scope and turnaround requirements."
              intro="Complete the form below to help us evaluate review needs and coordinate next steps."
            />

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="fullName">Full name</label>
                  <input id="fullName" name="fullName" type="text" placeholder="Enter your full name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="email">Work email</label>
                  <input id="email" name="email" type="email" placeholder="name@organization.com" required />
                </div>
                <div className="form-field">
                  <label htmlFor="company">Organization</label>
                  <input id="company" name="company" type="text" placeholder="Enter organization name" required />
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
                    <option value="medical-necessity">Medical necessity review</option>
                    <option value="recurring-qa">Ongoing compliance QA support</option>
                    <option value="unsure">Scope discussion requested</option>
                  </select>
                </div>
                <div className="form-field form-field--full">
                  <label htmlFor="notes">Notes</label>
                  <textarea
                    id="notes"
                    name="notes"
                    placeholder="Share document types, recurring issues, intake preferences, or any scope considerations."
                  />
                </div>
              </div>

              <div className="hero__actions hero__actions--compact">
                <button type="submit" className="button button--accent">
                  Submit request
                </button>
              </div>

              <div className="form-note">
                {submitted
                  ? "Thank you. Your request has been captured and is ready for secure intake follow-up."
                  : "Please submit high-level operational details only. Do not include patient-identifying information in this web form."}
              </div>
            </form>
          </article>

          <article className="info-card">
            <SectionTitle
              eyebrow="What to expect"
              title="A structured intake experience for operational teams."
              intro="These standards support a secure, efficient review handoff process."
            />

            <ul className="info-list">
              <li>Requests are scoped for volume, timeline, and review depth before engagement begins.</li>
              <li>Secure document transfer methods are confirmed prior to record submission.</li>
              <li>Communication is aligned to compliance expectations and defined turnaround commitments.</li>
              <li>Final reporting is delivered in a clear format suitable for corrective action planning.</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
