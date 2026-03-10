export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-blue-900 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">
            DME Doc Audit Site
          </p>

          <h1 className="mb-6 text-4xl font-bold">
            Clinical Documentation Audit for DME Providers
          </h1>

          <p className="mb-8 text-lg">
            Improve documentation quality, reduce claim denials, and ensure DME
            medical necessity is clearly supported.
          </p>

          <button type="button" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-900">
            Request Sample Audit
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10 text-3xl font-bold">Our Services</h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="mb-3 text-xl font-semibold">
                Clinical Notes Quality Review
              </h3>

              <p>
                Evaluate SOAP notes, clinical reasoning, and documentation
                completeness.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="mb-3 text-xl font-semibold">
                DME Documentation Compliance
              </h3>

              <p>
                Ensure documentation supports medical necessity and functional
                limitation requirements.
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow">
              <h3 className="mb-3 text-xl font-semibold">
                Insurance Readiness Check
              </h3>

              <p>
                Identify documentation gaps that could lead to insurance claim
                rejection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIDENTIALITY */}
      <section className="bg-gray-100 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 text-3xl font-bold">Confidentiality First</h2>

          <p className="mb-4">
            All documentation submitted for review must be de-identified before
            submission.
          </p>

          <p>
            Files are treated as confidential and removed after the audit
            process is completed.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-6 text-3xl font-bold">Request a Sample Audit</h2>

          <form className="grid gap-4" aria-label="Sample audit request form">
            <label className="grid gap-2">
              <span className="font-medium text-gray-700">Company or Clinic Name</span>
              <input
                type="text"
                name="companyName"
                autoComplete="organization"
                placeholder="Acme Rehab Clinic"
                className="rounded border p-3"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="font-medium text-gray-700">Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="rounded border p-3"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="font-medium text-gray-700">Audit Request Details</span>
              <textarea
                name="details"
                rows="5"
                placeholder="Tell us about your documentation review needs"
                className="rounded border p-3"
                required
              />
            </label>

            <button type="submit" className="rounded bg-blue-900 py-3 text-white">
              Send Request
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
