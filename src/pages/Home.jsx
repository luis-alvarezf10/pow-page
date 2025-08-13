import Header from "../components/Header";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import PricingSection from "../sections/PricingSection";
import LocationSection from "../sections/LocationSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <LocationSection />
    </div>
  );
}