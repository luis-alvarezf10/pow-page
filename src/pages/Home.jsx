import Header from "../components/Header";
import ScrollingBanner from "../components/ScrollingBanner";
import Footer from "../components/Footer";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import StaffSection from "../sections/StaffSection";
import PricingSection from "../sections/PricingSection";
import LocationSection from "../sections/LocationSection";
import TestimonialsSection from "../sections/TestimonialsSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ScrollingBanner />
      <ServicesSection />
      <StaffSection />
      <PricingSection />
      <LocationSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}