import FeaturePageLayout from '@/components/FeaturePageLayout';

export default function RealTimeReportingPage() {
  return (
    <FeaturePageLayout
      title="Real-Time Reporting"
      subtitle="Accurate, up-to-the-minute project progression and efficiency tracking — so your team always makes informed decisions and cost-effective processes are always followed."
      heroImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80"
      ctaLabel="See real-time reporting in action"
      sections={[
        {
          heading: 'Live Project Reporting',
          body: [
            'Arbiter removes the requirement for field staff to gather, compile, or tabulate work progress manually. Our digital process delivers accurate, real-time reporting so that team members can make informed project decisions at every stage.',
          ],
          bullets: [
            { title: 'Accurate Cost Projection', body: 'Track earned vs. burned hours and project spending in real time.' },
            { title: 'Scheduling Accuracy', body: 'Up-to-the-minute schedule reporting so your team always knows where things stand.' },
            { title: 'Improved Budget Forecasting', body: 'Historical data feeds into more accurate forecasts for future projects.' },
            { title: 'Reduced Cost Risk', body: 'Early visibility into budget deviations before they become overruns.' },
            { title: 'Manpower Tracking', body: 'Track manpower usage and increase confidence in cost and schedule regarding labour hours.' },
            { title: 'Labour Cost Control', body: 'Tighter control on labour cost management and the ability to accurately plan and execute work scope.' },
          ],
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=80',
        },
        {
          heading: 'Weekly Efficiency Reports',
          body: [
            'Arbiter generates weekly efficiency reports that give project leads and owners a consistent, structured view of progress. No manual compilation — the system does it automatically, so your reporting is always current and always trustworthy.',
          ],
        },
      ]}
    />
  );
}
