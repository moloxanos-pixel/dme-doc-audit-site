import LegalPage from "./LegalPage";
import Seo from "../components/Seo";

const sections = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "We collect business contact information and project details submitted through the Request Review workflow.",
      "We do not request patient-identifying information through the public website form.",
    ],
    bullets: [
      "Business contact details such as name, organization, and work email",
      "Service inquiry details, including requested scope and timeline",
      "Technical and operational metadata used to process and respond to requests",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    paragraphs: [
      "Information is used to respond to inquiries, scope review engagements, coordinate communication, and maintain service records.",
      "Information may also be used to improve intake clarity, workflow performance, and service quality.",
    ],
  },
  {
    id: "security-and-confidentiality",
    title: "Security and confidentiality",
    paragraphs: [
      "We apply secure document-handling practices, access controls, and restricted workflow permissions appropriate to the services provided.",
      "Record materials submitted through approved channels are handled in accordance with internal confidentiality standards and contractual obligations.",
    ],
  },
  {
    id: "retention",
    title: "Retention and deletion",
    paragraphs: [
      "Inquiry and service records are retained only as long as required for business operations, legal compliance, and contractual obligations.",
      "Deletion or retention requests will be evaluated based on legal, regulatory, and operational requirements.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    paragraphs: [
      "We may use approved third-party providers for hosting, communication, workflow management, and secure file transfer.",
      "Where applicable, third-party providers are expected to maintain security and confidentiality controls consistent with service requirements.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "For privacy-related questions, contact DME Records Reviews through your designated business communication channel.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="Review the DME Records Reviews privacy policy covering information collection, secure handling, retention, and third-party services."
      />
      <LegalPage
        title="Privacy Policy"
        intro="This Privacy Policy describes how DME Records Reviews collects, uses, and safeguards information submitted through this website."
        updatedLabel="Last updated: March 2026"
        sections={sections}
      />
    </>
  );
}
