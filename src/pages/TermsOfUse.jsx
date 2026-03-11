import LegalPage from "./LegalPage";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    paragraphs: [
      "These terms are intended to govern access to the website and related request workflows for DME Records Reviews.",
      "Before publication, confirm that this language is tailored to your business model, services, and applicable jurisdiction.",
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
      "Because this service includes documentation review, your terms should clearly explain service scope and limitations.",
      "Terms should also clarify that review support does not guarantee payer decisions and does not constitute legal advice.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      "The published terms should define ownership of website content, branding, and original materials while respecting ownership of submitted client records and documentation.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "Include liability limitations, warranty disclaimers, and service constraints recommended by legal counsel for production use.",
    ],
  },
  {
    id: "contact",
    title: "Contact and updates",
    paragraphs: [
      "Provide current business contact information and explain how updates to these terms will be published.",
    ],
  },
];

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="This page provides a structured legal framework for website access and service inquiry terms."
      updatedLabel="Last updated: replace with the current terms revision date before publication."
      sections={sections}
    />
  );
}
