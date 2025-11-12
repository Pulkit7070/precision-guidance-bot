import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-machinery.jpg';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section>
      <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
              Precision Metal Cutting Tools for Modern Manufacturing
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">
              Five decades of expertise in carbide drills, milling cutters, and precision tooling. 
              Trusted by 300+ machine shops across aerospace, automotive, and heavy engineering sectors.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                className="px-5 text-base"
                onClick={() => scrollToSection('about')}
              >
                <span className="text-nowrap">View Our Products</span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-5 text-base"
                onClick={() => scrollToSection('contact')}
              >
                <span className="text-nowrap">Request a Quote</span>
              </Button>
            </div>
          </div>
          <img
            className="pointer-events-none order-first ml-auto h-56 w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain"
            src={heroImage}
            alt="Precision Manufacturing Tools"
            height="4000"
            width="3000"
          />
        </div>
      </div>
    </section>
  );
}
