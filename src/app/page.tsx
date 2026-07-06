import {
  HeroSection,
  ServicesSection,
  TestimonialsSection,
  OffersSection,
  EmergencySection,
  ContactSection,
} from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <OffersSection />
      <EmergencySection />
      <ContactSection />
    </main>
  );
}
