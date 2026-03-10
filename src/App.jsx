export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">
            Clinical Documentation Audit for DME Providers
          </h1>

          <p className="text-lg mb-8">
            Improve documentation quality, reduce claim denials,
            and ensure DME medical necessity is clearly supported.
          </p>

          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold">
            Request Sample Audit
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-10">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Clinical Notes Quality Review
              </h3>

              <p>
                Evaluate SOAP notes, clinical reasoning,
                and documentation completeness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                DME Documentation Compliance
              </h3>

              <p>
                Ensure documentation supports medical necessity
                and functional limitation requirements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Insurance Readiness Check
              </h3>

              <p>
                Identify documentation gaps that could lead
                to insurance claim rejection.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CONFIDENTIALITY */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Confidentiality First
          </h2>

          <p className="mb-4">
            All documentation submitted for review must be
            de-identified before submission.
          </p>

          <p>
            Files are treated as confidential and removed after
            the audit process is completed.
          </p>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Request a Sample Audit
          </h2>

          <form className="grid gap-4">

            <input
              type="text"
              placeholder="Company or Clinic Name"
              className="p-3 border rounded"
            />

            <input
              type="email"
              placeholder="Email"
              className="p-3 border rounded"
            />

            <textarea
              placeholder="Tell us about your documentation review needs"
              className="p-3 border rounded"
            />

            <button className="bg-blue-900 text-white py-3 rounded">
              Send Request
            </button>

          </form>

        </div>
      </section>

    </div>
  )
}