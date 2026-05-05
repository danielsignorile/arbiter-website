import FeaturePageLayout from '@/components/FeaturePageLayout';

export default function ActionsAndDeficienciesPage() {
  return (
    <FeaturePageLayout
      title="Actions & Deficiencies"
      subtitle="Raise actions the moment a deficiency is identified and track every open item to closure — so nothing falls through the cracks before handover."
      videoId="MpjG3PQhbw8"
      ctaLabel="See action tracking in action"
      sections={[
        {
          heading: 'Real-Time Deficiency Tracking',
          body: [
            'Arbiter allows users to raise actions the moment a deficiency is identified, and helps your team track every open action until closure. Every item is assigned to a specific party, timestamped, and visible to all levels of management — no matter where they are.',
          ],
          bullets: [
            { title: 'Prevent Project Overruns', body: 'Reduce or eliminate cost overruns caused by forgotten or unactioned deficiencies.' },
            { title: 'Full Pre-Handover Confidence', body: 'Ensure that any project deficiency is identified, actioned, and closed prior to project completion, so your product meets the quality milestones your client expects.' },
            { title: 'Live Tracking', body: 'Track the opening and clearing of actions in real time, by any level of management in any location.' },
            { title: 'Clear Accountability', body: 'Assign actions to a specific party, ensuring deficiencies are never forgotten or deferred.' },
          ],
        },
        {
          heading: 'Streamline Customer Handover',
          body: [
            'When every deficiency is tracked from identification to closure inside Arbiter, your customer handover is clean, documented, and fully auditable. No last-minute scrambles — just a complete record that gives both parties confidence.',
          ],
        },
      ]}
    />
  );
}
