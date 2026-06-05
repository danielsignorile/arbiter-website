import FeaturePageLayout from '@/components/FeaturePageLayout';

export default function DoculinkPage() {
  return (
    <FeaturePageLayout
      title="Doculink"
      subtitle="A digital document repository that stores all project-related files in a customized structure, linking them directly to objects and check sheets inside Arbiter."
      heroImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&auto=format&fit=crop&q=80"
      ctaLabel="See Doculink in action"
      sections={[
        {
          heading: 'One Repository for Every File',
          body: [
            'Doculink connects with Arbiter Completions and Controls to give your team instant access to any project file, from anywhere. Every file is stored in a specific category so it can always be found. No more searching through folders or emailing documents back and forth.',
          ],
          bullets: [
            { title: '', body: 'Mass upload up to 500 files at a time.' },
            { title: '', body: 'Link any document to specific objects in Arbiter.' },
            { title: '', body: 'Arbiter automatically assigns linked documents to every check sheet for that object.' },
            { title: '', body: 'Download a check sheet in SoftChecks and have instant access to every relevant document, all in one place.' },
            { title: '', body: 'Eliminate the printing and compiling of documents for field check sheets entirely.' },
          ],
          image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=1000&auto=format&fit=crop&q=80',
        },
        {
          heading: 'Revisioning and Redlines',
          body: [
            'Doculink\'s revisioning capabilities allow markups and redlines to be added to existing documents. When a revised document is re-uploaded, Doculink automatically creates a new revision, making the updated version accessible to every user within Arbiter.',
          ],
          bullets: [
            { title: '', body: 'Print documents to add field redlines, then re-upload for automatic revisioning.' },
            { title: '', body: 'Every revision is tracked and accessible to all users.' },
            { title: '', body: 'Files can be accessed from any location, at any time.' },
          ],
        },
      ]}
    />
  );
}
