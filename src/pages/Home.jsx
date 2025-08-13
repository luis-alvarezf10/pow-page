import Header from "../components/Header";
import ScrollingBanner from "../components/ScrollingBanner";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import StaffSection from "../sections/StaffSection";
import PricingSection from "../sections/PricingSection";
import LocationSection from "../sections/LocationSection";

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
    </div>
  );
}