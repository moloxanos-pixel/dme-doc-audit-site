import LegalPage from "./LegalPage";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    paragraphs: [
      "These terms are intended to govern access to the website and related request workflows for DME Records Reviews.",
      "These terms apply to all visitors and organizations using the website to learn about services or submit review requests.",
    ],
  },
  {
    id: "site-use",
    title: "Use of the site",
    paragraphs: [
      "This section defines permitted use, prohibited activity, and user responsibilities when accessing the site.",
    ],
    bullets: [
      "Use the site only for lawful business purposes",
      "Do not disrupt, copy, or misuse the service",
      "Provide accurate information when requesting review services",
    ],
  },
  {
    id: "no-advice",
    title: "No clinical, legal, or payer guarantee",
    paragraphs: [
      "DME Records Reviews provides documentation review support and operational guidance based on submitted materials and stated scope.",
      "Services do not guarantee payer decisions, reimbursement outcomes, or legal determinations.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      "Website content and branding remain the property of DME Records Reviews, while client-submitted records remain the property of the submitting organization.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "To the fullest extent allowed by law, services are provided on an 'as-is' basis and liability is limited to direct damages related to confirmed service failures.",
    ],
  },
  {
    id: "contact",
    title: "Contact and updates",
    paragraphs: [
      "Questions about these terms can be submitted through the Request Review page. Updates are posted on this page with a revised effective date.",
    ],
  },
];

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="These terms govern website use and service inquiries for DME Records Reviews."
      updatedLabel="Last updated: October 2026"
      sections={sections}
      metaTitle="Terms of Use | DME Records Reviews"
      metaDescription="Review the terms governing website access, service inquiries, and limitations for DME Records Reviews."
    />
  );
}
