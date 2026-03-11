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
        title="Start a DME documentation audit request with a more premium intake experience."
        intro="This page is ready to become your live request flow. The interface is polished, responsive, and easy to wire into a secure upload or backend workflow."
        panelClassName="page-hero__panel--image page-hero__panel--plain"
        panel={
          <>
            <div
              className="page-hero__background"
              style={{ backgroundImage: `url(${protectionPhoto})` }}
            />
            <div className="page-hero__panel__content">
              <span className="eyebrow eyebrow--dark">Front-end ready</span>
              <h3 className="page-hero__mini-title">Connect your secure intake next.</h3>
              <p className="page-hero__mini-copy">
                Plug in Formspree, Resend, HubSpot, a custom API, or your existing secure uploader.
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
              title="A clean form layout you can launch from."
              intro="The form below is intentionally honest: it is a finished front-end pattern ready for your backend integration."
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
                    placeholder="Share anything useful: document types, pain points, preferred intake method, or questions."
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
                  ? "This demo form is ready for your secure backend or intake endpoint. Replace the submit handler with your production workflow."
                  : "Demo-ready UI: this submit action currently stays on the page. Connect it to your endpoint before launch."}
              </div>
            </form>
          </article>

          <article className="info-card">
            <SectionTitle
              eyebrow="What to expect"
              title="A calmer intake experience for both sides."
              intro="The right side of the page gives visitors confidence before they submit anything."
            />

            <ul className="info-list">
              <li>Use this design with a secure uploader, encrypted file exchange, or controlled CRM workflow.</li>
              <li>Keep expectations clear with scoping fields, turnaround choices, and open notes for context.</li>
              <li>Support trust with strong visual cues instead of overloading the page with technical language.</li>
              <li>Extend the page later with FAQs, upload steps, or a scheduling widget if needed.</li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}
