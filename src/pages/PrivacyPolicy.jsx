import LegalPage from "./LegalPage";

const sections = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "We collect business contact information, project scoping details, and materials submitted through the request form or connected intake workflow.",
      "This policy covers information submitted through website forms and connected intake workflows used for service requests.",
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
      "Information may also be used to improve site performance, prevent misuse, and maintain service quality.",
    ],
  },
  {
    id: "security-and-confidentiality",
    title: "Security and confidentiality",
    paragraphs: [
      "We apply administrative and technical safeguards designed to limit access, protect submitted information, and support secure handling practices.",
      "Our controls and procedures are reviewed regularly to maintain alignment with operational and compliance requirements.",
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
      "We review third-party providers periodically and require appropriate contractual and security commitments where applicable.",
    ],
  },
  {
    id: "contact",
    title: "Contact",
    paragraphs: [
      "For privacy requests, contact the team through the Request Review page or your designated account representative.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains how DME Records Reviews collects, uses, and safeguards information submitted through the website and intake workflows."
      updatedLabel="Last updated: October 2026"
      sections={sections}
      metaTitle="Privacy Policy | DME Records Reviews"
      metaDescription="Read how DME Records Reviews collects, uses, and protects information submitted through website and intake workflows."
    />
  );
}
