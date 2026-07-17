import type { Metadata } from 'next';
import FeaturePageLayout from '@/components/FeaturePageLayout';

export const metadata: Metadata = {
  title: 'Arbiter Forms | Digital Forms & Check Sheets for Project Management | Arbiter',
  description:
    'Create and track digital forms and check sheets for project management activities — RFIs, Toolbox Talks, Safety Meetings, Vendor Orientation, Client and Vendor Meetings, and action items — all in one place.',
  alternates: { canonical: '/features/arbiter-forms' },
};

export default function ArbiterFormsPage() {
  return (
    <FeaturePageLayout
      title="Arbiter Forms"
      subtitle="Build, distribute, and track the everyday forms and check sheets that keep projects moving — from RFIs and Toolbox Talks to Safety Meetings, Vendor Orientation, and follow-up action items."
      ctaLabel="See Arbiter Forms in action"
      sections={[
        {
          heading: 'One Place for Every Project Form',
          body: [
            'Project management runs on paperwork — requests, meetings, orientations, and the action items they generate. Arbiter Forms replaces the scattered mix of paper, PDFs, and spreadsheets with configurable digital forms and check sheets that live inside your project, are completed in the field or the office, and are instantly available to everyone who needs them.',
          ],
          bullets: [
            { title: 'Requests For Information (RFIs)', body: 'Raise, route, and resolve RFIs with a clear record of who asked, who answered, and when — no more lost email threads.' },
            { title: 'Toolbox Talks', body: 'Document daily safety briefings and capture attendee sign-off directly on a mobile device.' },
            { title: 'Safety Meetings', body: 'Record agendas, attendance, and outcomes for every safety meeting in a consistent, auditable format.' },
            { title: 'Vendor Orientation', body: 'Onboard vendors and subcontractors with standardized orientation forms and acknowledgements.' },
            { title: 'Client & Vendor Meetings', body: 'Capture meeting minutes, decisions, and commitments so nothing slips between sessions.' },
            { title: 'Action Items', body: 'Turn every form into follow-through — assign action items, set owners, and track them to completion.' },
          ],
        },
        {
          heading: 'Create Forms That Fit Your Workflow',
          body: [
            'Use your existing forms and check sheets in a fully digital format, or build new ones to match the way your teams already work. Forms are automatically populated with project- and object-specific information, so field staff spend their time completing work rather than filling in headers.',
          ],
          bullets: [
            { title: '', body: 'Configure forms and check sheets for any project management activity.' },
            { title: '', body: 'Attach photos and supporting documents directly to any form.' },
            { title: '', body: 'Capture sign-offs and acknowledgements to prove work was done and understood.' },
            { title: '', body: 'Keep every completed form in one centralized, searchable database.' },
          ],
        },
        {
          heading: 'Track Everything, Miss Nothing',
          body: [
            'Every form and check sheet updates in real time, giving managers live visibility into what has been raised, what is outstanding, and what needs attention. Action items generated from RFIs, meetings, and safety talks are assigned to owners and tracked to closeout, so commitments never fall through the cracks.',
          ],
          bullets: [
            { title: '', body: 'Real-time status of every RFI, meeting, orientation, and action item.' },
            { title: '', body: 'Assign action items to owners with due dates and track them to completion.' },
            { title: '', body: 'Full audit trail of who completed what, and when.' },
            { title: '', body: 'Reporting available to all levels of management from anywhere.' },
          ],
        },
        {
          heading: 'Mobile and Offline Capable',
          body: [
            'Arbiter Forms works in remote locations without cellular service or WiFi. Forms and check sheets are completed offline on a mobile device and uploaded automatically once the user returns to a connected area — so a Toolbox Talk in the field is recorded just as reliably as an RFI raised from the office.',
            'All records remain in the same centralized database, accessible through the Arbiter web portal, keeping your project documentation consistent no matter where the work happens.',
          ],
        },
      ]}
    />
  );
}
