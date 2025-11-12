import { AnimatedMarqueeHero } from "@/components/AnimatedMarqueeHero";
import { Navbar } from "@/components/Navbar";
import ProductCategories from "@/components/ProductCategories";
import CaseStudy from "@/components/CaseStudy";
import Industries from "@/components/Industries";
import Heritage from "@/components/Heritage";
import ContactCTA from "@/components/ContactCTA";
import heroImage from "@/assets/hero-machinery.jpg";
import drillsImage from "@/assets/product-drills.jpg";
import millingImage from "@/assets/product-milling.jpg";
import tappingImage from "@/assets/product-tapping.jpg";
import reamersImage from "@/assets/product-reamers.jpg";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AnimatedMarqueeHero
        tagline="Serving manufacturers since 1970"
        title="Precision Metal Cutting Tools for Modern Manufacturing"
        description=""
        ctaText="Explore Our Tool Ranges"
        images={[heroImage, drillsImage, millingImage, tappingImage, reamersImage]}
      />
      <div id="about">
        <ProductCategories />
        <CaseStudy />
        <Heritage />
      </div>
      <div id="industries">
        <Industries />
      </div>
      <div id="contact">
        <ContactCTA />
      </div>
    </main>
  );
};

export default Index;
