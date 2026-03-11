import LegalPage from "./LegalPage";
import Seo from "../components/Seo";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    paragraphs: [
      "By accessing this website, you agree to these Terms of Use and applicable laws.",
      "If you do not agree with these terms, please do not use this website.",
    ],
  },
  {
    id: "site-use",
    title: "Use of the site",
    paragraphs: [
      "This website is provided for lawful business inquiries related to DME documentation review services.",
    ],
    bullets: [
      "Use the site only for legitimate business purposes",
      "Do not interfere with site functionality, security, or availability",
      "Provide accurate and non-misleading information in all submissions",
    ],
  },
  {
    id: "service-scope",
    title: "Service scope and limitations",
    paragraphs: [
      "DME Records Reviews provides documentation review support and operational findings.",
      "Services do not constitute legal advice, clinical decision-making, or a guarantee of payer determination.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      "Website content, branding, and original materials are the property of DME Records Reviews unless otherwise stated.",
      "Client-submitted records and documentation remain the property of their respective owners.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      'This website and related content are provided on an "as is" and "as available" basis without warranties of any kind.',
      "To the fullest extent permitted by law, DME Records Reviews is not liable for indirect, incidental, or consequential damages arising from website use.",
    ],
  },
  {
    id: "contact",
    title: "Contact and updates",
    paragraphs: [
      "We may revise these terms periodically to reflect operational or legal changes.",
      "Continued use of the website after updates constitutes acceptance of the revised terms.",
    ],
  },
];

export default function TermsOfUse() {
  return (
    <>
      <Seo
        title="Terms of Use"
        description="Review the DME Records Reviews Terms of Use for website access, permitted use, service limitations, and legal notices."
      />
      <LegalPage
        title="Terms of Use"
        intro="These Terms of Use govern access to the DME Records Reviews website and related inquiry workflows."
        updatedLabel="Last updated: March 2026"
        sections={sections}
      />
    </>
  );
}
