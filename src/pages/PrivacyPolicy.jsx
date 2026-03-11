import LegalPage from "./LegalPage";

const sections = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "This sample page assumes that you may collect business contact information, project scoping details, and any materials voluntarily submitted through the request form or connected intake workflow.",
      "If you later connect a secure uploader or CRM, the categories of information described here should match what your production system actually receives and stores.",
    ],
    bullets: [
      "Contact details such as name, company, and work email",
      "Project-related notes or scope details provided by the requester",
      "Operational metadata needed to route or manage review requests",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    paragraphs: [
      "Information is generally used to respond to review requests, scope services, communicate next steps, and improve the clarity of the intake process.",
      "If analytics or third-party form services are added later, this section should explain those uses plainly and accurately.",
    ],
  },
  {
    id: "security-and-confidentiality",
    title: "Security and confidentiality",
    paragraphs: [
      "Your production policy should explain the safeguards used for sensitive materials, including access controls, secure vendors, internal handling practices, and retention boundaries.",
      "The current redesign visually supports a security-minded message, but your legal text should describe the real operational controls in place.",
    ],
  },
  {
    id: "retention",
    title: "Retention and deletion",
    paragraphs: [
      "Describe how long request data, uploaded materials, and related communications are retained, and how deletion requests are handled.",
      "Retention language should match your actual storage systems, vendor settings, and contractual obligations.",
    ],
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    paragraphs: [
      "If you use external services for forms, analytics, file transfer, hosting, or customer relationship management, list them here with an accurate summary of their role.",
      "This project is front-end ready for those integrations, but the live policy should name the specific tools you use.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "Replace this section with your live privacy contact details and any region-specific rights language required for your audience.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="A polished legal page layout with better hierarchy, spacing, and navigation. Replace the sample content below with your approved production policy."
      updatedLabel="Suggested last-updated label: replace with the real policy revision date before launch."
      sections={sections}
    />
  );
}
