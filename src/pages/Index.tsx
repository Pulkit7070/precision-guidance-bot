import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import Heritage from "@/components/Heritage";
import ContactCTA from "@/components/ContactCTA";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoader from "@/components/PageLoader";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    const revealElements = document.querySelectorAll(".scroll-reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <PageLoader />
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <div id="about">
          <ProductCategories />
          <Heritage />
        </div>
        <div id="contact">
          <ContactCTA />
        </div>
        <ScrollToTop />
      </main>
    </>
  );
};

export default Index;
