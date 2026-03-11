import LegalPage from "./LegalPage";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of terms",
    paragraphs: [
      "These sample terms are included to complete the redesigned multi-page site structure. They should be replaced with legal language tailored to your actual business, services, and jurisdiction.",
      "By using the site, visitors would typically be agreeing to the terms that govern access to the website and any related request workflows.",
    ],
  },
  {
    id: "site-use",
    title: "Use of the site",
    paragraphs: [
      "This section normally explains who the site is for, what types of use are allowed, and what activities are prohibited.",
    ],
    bullets: [
      "Use the site only for lawful business purposes",
      "Do not attempt to disrupt, copy, or misuse the service",
      "Provide accurate information when requesting review services",
    ],
  },
  {
    id: "no-advice",
    title: "No clinical, legal, or payer guarantee",
    paragraphs: [
      "Because the service involves documentation review, your approved terms should carefully explain what the service does and does not promise.",
      "This section is often where you clarify that review support does not guarantee payer decisions and should not be treated as legal advice.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    paragraphs: [
      "The live terms should identify your ownership of site content, branding, and original design work, while respecting the ownership of any materials submitted by clients through the request process.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    paragraphs: [
      "Your final terms should contain any liability language, warranty disclaimers, or service limitations that your counsel recommends for production.",
    ],
  },
  {
    id: "contact",
    title: "Contact and updates",
    paragraphs: [
      "Replace this section with your real business contact information and explain how updates to the terms will be communicated or posted.",
    ],
  },
];

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="A premium legal page structure with stronger readability and navigation. Replace this sample language with reviewed terms before launch."
      updatedLabel="Suggested last-updated label: replace with the real terms revision date before launch."
      sections={sections}
    />
  );
}
