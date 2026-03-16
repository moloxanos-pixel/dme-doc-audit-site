import SectionTitle from '../components/SectionTitle';

const services = [
  'Documentation completeness review',
  'Medical necessity support review',
  'Administrative issue identification',
  'Record-level summary reporting',
];

export default function ServicesPage() {
  return (
    <section className="section page-simple">
      <div className="container narrow">
        <SectionTitle eyebrow="Services" title="Professional DME documentation review services." intro="Support intake and reimbursement workflows with structured, review-ready reporting." />
        <div className="simple-card">
          <ul className="clean-list">
            {services.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
