import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { IndustriesSlider } from "@/components/IndustriesSlider";
import ProductCategories from "@/components/ProductCategories";
import CaseStudy from "@/components/CaseStudy";
import Heritage from "@/components/Heritage";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div id="industries">
        <IndustriesSlider />
      </div>
      <div id="about">
        <ProductCategories />
        <CaseStudy />
        <Heritage />
      </div>
      <div id="contact">
        <ContactCTA />
      </div>
    </main>
  );
};

export default Index;
