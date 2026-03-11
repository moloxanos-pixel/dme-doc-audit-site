import logo from "../assets/logo-medical-record.svg"
import checklist from "../assets/checklist.svg"
import shield from "../assets/shield-security.svg"
import ai from "../assets/ai-review.svg"
import data from "../assets/data-protection.svg"

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center">
        <img src={logo} className="mx-auto w-24 mb-6"/>
        <h1 className="text-4xl font-bold">DME Doc Review</h1>
        <p className="mt-4 text-slate-600">
          AI-assisted documentation review with human verification.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-10 mt-16 text-center">

        <div>
          <img src={checklist} className="mx-auto w-16 mb-4"/>
          <p>Medical record checklist review</p>
        </div>

        <div>
          <img src={shield} className="mx-auto w-16 mb-4"/>
          <p>Documentation security and compliance</p>
        </div>

        <div>
          <img src={ai} className="mx-auto w-16 mb-4"/>
          <p>AI-assisted analysis</p>
        </div>

        <div>
          <img src={data} className="mx-auto w-16 mb-4"/>
          <p>Data protection and privacy</p>
        </div>

      </div>
    </div>
  )
}
