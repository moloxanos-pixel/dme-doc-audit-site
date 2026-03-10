const services = [
  {
    title: 'Clinical Note Quality Review',
    description:
      'Structured review of evaluation and follow-up documentation for clarity, internal consistency, and clinical rationale.',
  },
  {
    title: 'Medical Necessity Documentation Assessment',
    description:
      'Focused assessment of records to confirm that charted findings align with prescribed DME and functional needs.',
  },
  {
    title: 'Claim Readiness Gap Analysis',
    description:
      'Identification of documentation gaps that may increase the risk of payer requests, delays, or denials.',
  },
]

const trustPrinciples = [
  {
    title: 'Minimum Necessary Data',
    detail:
      'We request only the clinical details needed for a documentation review and recommend de-identified submissions whenever possible.',
  },
  {
    title: 'Controlled Handling',
    detail:
      'Files are handled through restricted workflows with role-limited access during the audit engagement.',
  },
  {
    title: 'Clear Boundaries',
    detail:
      'Our audit provides documentation feedback and risk insights; final coverage decisions remain with each payer.',
  },
]

function PageSection({ className = '', children }) {
  return (
    <section className={`py-20 ${className}`.trim()}>
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  )
}

function SectionHeading({ title, description }) {
  return (
    <header className="mb-10 max-w-3xl">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
      {description ? <p className="text-slate-700 leading-relaxed">{description}</p> : null}
    </header>
  )
}

function HeroSection() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="uppercase tracking-[0.2em] text-xs text-blue-200 mb-4">DME Documentation Audit Support</p>
        <h1 className="text-4xl font-bold mb-6">Clinical Documentation Audit for DME Providers</h1>
        <p className="text-lg text-blue-50 mb-8 max-w-3xl leading-relaxed">
          Support your clinical teams with objective documentation feedback designed to improve record quality and
          strengthen medical necessity narratives.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold">Request Sample Audit</button>
      </div>
    </section>
  )
}

function ServiceCard({ title, description }) {
  return (
    <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <h3 className="text-xl font-semibold mb-3 text-slate-900">{title}</h3>
      <p className="text-slate-700 leading-relaxed">{description}</p>
    </article>
  )
}

function ServicesSection() {
  return (
    <PageSection>
      <SectionHeading
        title="Our Services"
        description="Each review is tailored to your documentation workflows and payer mix, with practical guidance your team can apply immediately."
      />
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} title={service.title} description={service.description} />
        ))}
      </div>
    </PageSection>
  )
}

function TrustSection() {
  return (
    <PageSection className="bg-slate-100">
      <SectionHeading
        title="Trust and Confidentiality"
        description="We recognize that documentation review involves sensitive clinical information and requires disciplined data handling."
      />
      <div className="grid md:grid-cols-3 gap-6">
        {trustPrinciples.map((principle) => (
          <article key={principle.title} className="bg-white rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">{principle.title}</h3>
            <p className="text-slate-700 leading-relaxed">{principle.detail}</p>
          </article>
        ))}
      </div>
    </PageSection>
  )
}

function ContactSection() {
  return (
    <PageSection>
      <SectionHeading
        title="Request a Sample Audit"
        description="Share your goals, documentation volume, and timelines, and we will outline a review approach for your team."
      />
      <form className="grid gap-4 max-w-3xl">
        <input type="text" placeholder="Company or Clinic Name" className="p-3 border rounded border-slate-300" />
        <input type="email" placeholder="Work Email" className="p-3 border rounded border-slate-300" />
        <textarea
          placeholder="Tell us about your documentation review priorities"
          className="p-3 border rounded border-slate-300 min-h-28"
        />
        <button className="bg-blue-900 text-white py-3 rounded font-medium">Send Request</button>
      </form>
    </PageSection>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection />
      <ServicesSection />
      <TrustSection />
      <ContactSection />
    </div>
  )
}
