import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-machinery.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Precision metal cutting in action"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 hero-pattern" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero-dark via-hero-dark/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 text-shadow-lg leading-tight">
            Precision Tools, Trusted for Five Decades.
          </h1>
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            From micro-drills to carbide cutters, our family-run expertise helps Indian manufacturers 
            cut costs and improve tolerances. Trusted by 300+ machine shops.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 mb-10 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-steel-gradient-start" />
              <span className="text-sm font-medium">Serving since 1970</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-steel-gradient-start" />
              <span className="text-sm font-medium">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-steel-gradient-start" />
              <span className="text-sm font-medium">300+ Clients</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="group">
              Explore Our Tool Ranges
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg">
              Request a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
