import { Button } from "@/components/ui/button";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-machinery.jpg";
import logoAddison from "@/assets/patners/Logo Addison.png";
import logoHiTech from "@/assets/patners/Logo Hi-Tech.jpeg";
import logoIT from "@/assets/patners/Logo IT.png";
import logoKorloy from "@/assets/patners/Logo Korloy.jpg";
import logoKyocera from "@/assets/patners/Logo Kyocera.png";
import logoMiranda from "@/assets/patners/Logo Miranda.png";
import logoSizeControl from "@/assets/patners/Logo Size Control.jpg";
import logoTaegutec from "@/assets/patners/Logo Taegutec.png";
import logoTotem from "@/assets/patners/Logo Totem.png";
import logoVargus from "@/assets/patners/Logo Vargus.jpg.webp";
import logoWidia from "@/assets/patners/Logo Widia.svg";
import logoYG1 from "@/assets/patners/Logo YG-1.png";

export function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      <section className="min-h-[80vh] flex items-center relative">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient"></div>
        
        <div className="py-12 md:py-16 lg:py-20 xl:py-24 w-full relative z-10">
          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 sm:px-6 lg:flex-row lg:justify-between">
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:w-1/2 lg:text-left z-10 animate-fade-in-up">
              <h1 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight animate-fade-in-up" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 400, animationDelay: '0.1s' }}>
                <span className="inline-block hover:text-primary transition-colors duration-300">Precision</span>{" "}
                <span className="inline-block hover:text-primary transition-colors duration-300">Metal</span>{" "}
                <span className="inline-block hover:text-primary transition-colors duration-300">Cutting</span>{" "}
                <span className="inline-block hover:text-primary transition-colors duration-300">Tools</span>{" "}
                <span className="block mt-2">for Modern Manufacturing</span>
              </h1>

              <div className="mt-6 md:mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Button
                  size="lg"
                  className="px-5 text-base w-full sm:w-auto transform hover:scale-105 transition-all duration-300 hover:shadow-xl"
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <span className="text-nowrap">View Our Products</span>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-5 text-base w-full sm:w-auto transform hover:scale-105 transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:border-accent hover:shadow-lg"
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                >
                  <span className="text-nowrap">Request a Quote</span>
                </Button>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <img
                  className="relative rounded-lg shadow-2xl w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover transform group-hover:scale-105 transition-all duration-500 animate-float"
                  src={heroImage}
                  alt="Precision Machinery"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted/30 py-12 md:py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
        <div className="group relative m-auto max-w-7xl px-4 sm:px-6" id="industries">
          <div className="flex flex-col items-center md:flex-row gap-8 md:gap-12 scroll-reveal">
            <div className="md:max-w-60 md:border-r md:border-border md:pr-8">
              <p className="text-center md:text-end text-xl font-medium text-foreground animate-fade-in">Our Partner Companies</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-17rem)]">
              <Carousel
                opts={{ loop: true, align: "start" }}
                plugins={[AutoScroll({ playOnInit: true, speed: 1, stopOnInteraction: false })]}
              >
                <CarouselContent className="-ml-6">
                  <CarouselItem className="flex basis-1/2 justify-center pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-42 h-24 sm:w-48 sm:h-30 p-4">
                      <img src={logoAddison} alt="Addison" className="w-full h-full object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/2 justify-center pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-42 h-24 sm:w-48 sm:h-30 p-4">
                      <img src={logoHiTech} alt="Hi-Tech" className="w-full h-full object-contain rotate-90" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/2 justify-center pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-42 h-24 sm:w-48 sm:h-30 p-4">
                      <img src={logoIT} alt="IT" className="w-full h-full object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/2 justify-center pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-42 h-24 sm:w-48 sm:h-30 p-4">
                      <img src={logoKorloy} alt="Korloy" className="w-full h-full object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/2 justify-center pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-42 h-24 sm:w-48 sm:h-30 p-4">
                      <img src={logoKyocera} alt="Kyocera" className="w-full h-full object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/2 justify-center pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-42 h-24 sm:w-48 sm:h-30 p-4">
                      <img src={logoMiranda} alt="Miranda" className="w-full h-full object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/2 justify-center pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-42 h-24 sm:w-48 sm:h-30 p-4">
                      <img src={logoSizeControl} alt="Size Control" className="w-full h-full object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/2 justify-center pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-42 h-24 sm:w-48 sm:h-30 p-4">
                      <img src={logoTaegutec} alt="Taegutec" className="w-full h-full object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/2 justify-center pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-42 h-24 sm:w-48 sm:h-30 p-4">
                      <img src={logoTotem} alt="Totem" className="w-full h-full object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/2 justify-center pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-42 h-24 sm:w-48 sm:h-30 p-4">
                      <img src={logoVargus} alt="Vargus" className="w-full h-full object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/2 justify-center pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-42 h-24 sm:w-48 sm:h-30 p-4">
                      <img src={logoWidia} alt="Widia" className="w-full h-full object-contain" />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/2 justify-center pl-6 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-42 h-24 sm:w-48 sm:h-30 p-4">
                      <img src={logoYG1} alt="YG-1" className="w-full h-full object-contain" />
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <div className="absolute inset-y-0 left-0 w-12 md:w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-12 md:w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}