import FeaturePageLayout from '@/components/FeaturePageLayout';

export default function DynamicITPPage() {
  return (
    <FeaturePageLayout
      title="Dynamic ITP"
      subtitle="Arbiter's Inspection and Test Plan feature lets you perform the same check against multiple objects, replacing extensive spreadsheets with a real-time, auditable digital workflow."
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&auto=format&fit=crop&q=80"
      ctaLabel="See Dynamic ITP in action"
      sections={[
        {
          heading: 'What Is a Dynamic ITP?',
          body: [
            'Instead of using extensive Excel spreadsheets to capture checks, the Dynamic ITP feature allows users to build unique, customizable ITPs by selecting multiple objects (tags) and compiling them into a convenient, dynamic format.',
            'Arbiter is the first completions and controls software to develop an ITP feature of this kind.',
          ],
          image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1000&auto=format&fit=crop&q=80',
        },
        {
          heading: 'How It Works',
          body: [
            'The ITP feature allows you to sign off multiple individual tags and objects at once. After performing checks, the user updates the status for each individual object and uploads instantly into Arbiter, giving everyone in your company a real-time project status immediately.',
            'Deficiencies can be identified and Actions raised against each object. Pictures and documents can also be added as attachments.',
            'Companies that currently use spreadsheets for ITPs must wait until the entire process is complete before updating their system, resulting in delayed status reporting. The Dynamic ITP in Arbiter eliminates this lag entirely.',
          ],
          bullets: [
            { title: 'Save Time and Reduce Costs', body: 'One sheet for all objects. No duplication of effort.' },
            { title: 'Real-Time Progress Tracking', body: 'Instant uploads mean project status is always current.' },
            { title: 'Action Integration', body: 'Raise actions against deficiencies for each object directly from the ITP, with photo attachments.' },
            { title: 'Parallel Efficiency', body: 'Multiple check sheets are updated at once, making far better use of your team\'s time.' },
          ],
        },
      ]}
    />
  );
}
