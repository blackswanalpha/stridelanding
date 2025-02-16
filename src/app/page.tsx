import Image from "next/image";
import Navbar from "./components/Navigation/navbar";
import HeroSection from "./components/hero/hero";
import { WaitlistSection } from "./components/Waitlist/WaitlistSection";
import {FeaturesSection} from "./components/Feature/feats";
import HowItWorksSection from "./components/Howitworks/HowItWorksSection";
import StatsSection from "./components/Stats/StatSection";
import { CarouselSection } from "./components/Courosel/CarouselSection";
import { PricingSection } from "./components/Pricing/PricingSection";
// import { AboutSection } from "./components/About/AboutSection";

import { Footer } from "./components/ui/footer";
import AboutSection from "./components/About/AboutSection";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <WaitlistSection />
    <HowItWorksSection />
    <StatsSection />
    <CarouselSection />
    <FeaturesSection />
   
    
   
    <PricingSection />
    
    <AboutSection />
  
    <Footer  />
    </>
  );
}
