import FeaturePageLayout from '@/components/FeaturePageLayout';

export default function DossierPage() {
  return (
    <FeaturePageLayout
      title="Dossier (Document Turnover)"
      subtitle="Paper dossiers are no longer required. Arbiter's customizable turnover dossier is fully digital, structured, and ready to archive on the client's system from the moment the project is complete."
      heroImage="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=1200&auto=format&fit=crop&q=80"
      ctaLabel="See Dossier in action"
      sections={[
        {
          heading: 'Dynamic, Ongoing Compilation',
          body: [
            'As a project progresses within Arbiter, a project dossier or handover/turnover package is dynamically created and organized in the background. Each organized unit can be seamlessly built to include all necessary documentation — activity check sheets, redlined documents, vendor reports, system boundaries, RFIs, and records of relevant action items.',
            'The system ensures that leadership always has the correct documentation and supporting records to safely and efficiently hand over systems and areas for commissioning, energization, and operations.',
          ],
          image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1000&auto=format&fit=crop&q=80',
        },
        {
          heading: 'Structured for Handover',
          body: [
            'Dossiers are produced in a defined file folder structure, saving each record separately and aligning them in a consistent, client-ready format. Standard chapters are compiled automatically — including check sheets and action or turnover certificates — while custom chapters can be added to manage unique project requirements.',
          ],
          bullets: [
            { title: 'Standard Chapters', body: 'Check sheets, action logs, and turnover certificates compiled automatically.' },
            { title: 'Custom Chapters', body: 'Add redlines, vendor reports, RFIs, and any other project-specific documentation.' },
            { title: 'Client-System Ready', body: 'The complete file structure is archived directly on the client system for future reference.' },
            { title: 'Preservation and Operations', body: 'Supports handovers for project, preservation, and operations activities.' },
          ],
        },
      ]}
    />
  );
}
