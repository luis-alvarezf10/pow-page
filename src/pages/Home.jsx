import Header from '../components/Header';
import ScrollingBanner from '../components/ScrollingBanner';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import HeroSection from '../sections/HeroSection';
import ServicesSection from '../sections/ServicesSection';
import WodUpSection from '../sections/WodUpSection';
import StaffSection from '../sections/StaffSection';
import PricingSection from '../sections/PricingSection';
import LocationSection from '../sections/LocationSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import FinalCTASection from '../sections/FinalCTASection';

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ScrollingBanner />
      <ServicesSection />
      <WodUpSection />
      <StaffSection />
      <PricingSection />
      <LocationSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
