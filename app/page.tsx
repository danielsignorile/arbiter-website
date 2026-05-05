import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogosBar from '@/components/LogosBar';
import Features from '@/components/Features';
import WhyArbiter from '@/components/WhyArbiter';
import Approach from '@/components/Approach';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import CTABanner from '@/components/CTABanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogosBar />
        <Features />
        <WhyArbiter />
        <Approach />
        <Stats />
        <Testimonials />
        <ContactForm />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
