import FeaturePageLayout from '@/components/FeaturePageLayout';

export default function SoftChecksPage() {
  return (
    <FeaturePageLayout
      title="SoftChecks"
      subtitle="Eliminate the hours spent sourcing, printing, scanning, compiling, and organizing check sheets. Arbiter integrates your client-specific check sheets into a fully digital workflow."
      videoId="XxikKnGESDo"
      ctaLabel="See SoftChecks in action"
      sections={[
        {
          heading: 'Go Fully Digital',
          body: [
            'Check sheets are automatically populated with project- and object-specific information, including headers and object attributes. Continue to use your existing documents in electronic format — user familiarity ensures a seamless transition.',
          ],
          bullets: [
            { title: '', body: 'Eliminate the need for printing and stockpiling paper check sheets for your field staff.' },
            { title: '', body: 'Reduce the chance of human error from check sheets being misplaced or lost.' },
            { title: '', body: 'Upload, complete, and file check sheets entirely within Arbiter.' },
            { title: '', body: 'Attach pictures or documents directly to any check sheet.' },
          ],
        },
        {
          heading: 'Real-Time Project Progress',
          body: [
            'Fully digital check sheets are instantaneously updated, providing real-time project progress and increased visibility of project status — without requiring field managers to manually track and compile reports.',
          ],
          bullets: [
            { title: '', body: 'Accurate project status available to all levels of management from anywhere.' },
            { title: '', body: 'Field managers can accurately schedule daily activities based on live data.' },
            { title: '', body: 'Automatically approved and updated reporting system.' },
            { title: '', body: 'Save partially completed check sheets and resume them later.' },
          ],
        },
        {
          heading: 'Mobile and Offline Capable',
          body: [
            'SoftChecks works in remote locations without cellular service or WiFi. Check sheets are loaded into the browser of your mobile device, completed offline, and uploaded automatically when the user returns to a connected area.',
            'All check sheets remain in the same centralized database, accessible through the Arbiter web portal — so your records are always consistent, no matter where the work happens.',
          ],
        },
      ]}
    />
  );
}
