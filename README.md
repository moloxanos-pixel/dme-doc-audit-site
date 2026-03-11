# DME Doc Audit Site

A modern multi-page React + Vite website for DME Records Reviews, focused on professional documentation audit communication.

## Included pages

- Home
- Services
- About
- Request Review
- Privacy Policy
- Terms of Use

## Design notes

- Professional clinical-operations visual style
- Original SVG hero and workflow illustrations inspired by provided references
- Blended background cards using approved reference photos
- Responsive layouts with clear hierarchy for service communication

## Important notes

- The large Shutterstock group illustration was treated as reference only and is **not embedded** in this project.
- The Request Review form is a front-end UI pattern and should be connected to your secure endpoint, CRM, or upload workflow before production use.
- Privacy Policy and Terms of Use content should be reviewed and finalized by legal counsel before launch.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Suggested next steps

1. Connect the Request Review form to your approved backend or secure intake workflow.
2. Finalize legal page language with counsel.
3. Add production contact details and any required compliance disclosures.
4. Replace reference photos with final licensed brand imagery if needed.
