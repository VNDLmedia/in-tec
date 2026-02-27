import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import CoreServices from "@/components/sections/CoreServices";
import SpecializedServices from "@/components/sections/SpecializedServices";
import SocialProof from "@/components/sections/SocialProof";
import ContactForm from "@/components/sections/ContactForm";
import { LocalBusinessJsonLd } from "@/components/JsonLd";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-white selection:text-black">
      <LocalBusinessJsonLd />
      <Navbar />
      <HeroSection />
      <StatsSection />
      <BeforeAfterSlider />
      <CoreServices />
      <SpecializedServices />
      <SocialProof />
      <ContactForm />
      <Footer />
    </div>
  );
}
