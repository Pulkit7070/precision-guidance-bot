import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import CaseStudy from "@/components/CaseStudy";
import Heritage from "@/components/Heritage";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
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
