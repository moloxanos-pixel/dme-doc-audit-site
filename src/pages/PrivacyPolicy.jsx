import LegalPage from "./LegalPage";

const sections = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "We collect business contact information, project scoping details, and materials submitted through the request form or connected intake workflow.",
      "If you connect a secure uploader or CRM, this policy should accurately reflect the information your production systems receive and store.",
    ],
    bullets: [
      "Contact details such as name, company, and work email",
      "Project notes or scope details submitted by the requester",
      "Operational metadata required to route and manage review requests",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    paragraphs: [
      "Information is used to respond to review requests, scope services, coordinate communication, and improve intake clarity.",
      "If analytics or third-party form services are added, this section should describe those uses clearly and accurately.",
    ],
  },
  {
    id: "security-and-confidentiality",
    title: "Security and confidentiality",
    paragraphs: [
      "Your production policy should explain safeguards for sensitive materials, including access controls, secure vendors, internal handling standards, and retention boundaries.",
      "This interface communicates a compliance-focused approach, but legal language must match operational controls in practice.",
    ],
  },
  {
    id: "retention",
    title: "Retention and deletion",
    paragraphs: [
      "State how long request data, submitted materials, and related communications are retained, and how deletion requests are processed.",
      "Retention language should align with your storage systems, vendor configurations, and contractual obligations.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    paragraphs: [
      "If you rely on external services for forms, analytics, file transfer, hosting, or CRM, identify them here and summarize each role.",
      "This project supports those integrations, but the published policy should name your actual providers.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Provide your active privacy contact details and any jurisdiction-specific rights disclosures required for your audience.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This page provides a clear legal structure for disclosing data-handling practices related to DME Records Reviews services."
      updatedLabel="Last updated: replace with the current policy revision date before publication."
      sections={sections}
    />
  );
}
