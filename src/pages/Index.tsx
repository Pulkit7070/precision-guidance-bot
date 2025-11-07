import Hero from "@/components/Hero";
import ProductCategories from "@/components/ProductCategories";
import CaseStudy from "@/components/CaseStudy";
import Industries from "@/components/Industries";
import Heritage from "@/components/Heritage";
import ContactCTA from "@/components/ContactCTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductCategories />
      <CaseStudy />
      <Industries />
      <Heritage />
      <ContactCTA />
    </main>
  );
};

export default Index;
