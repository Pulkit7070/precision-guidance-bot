import { Button } from "@/components/ui/button";
import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import heroImage from "@/assets/hero-machinery.jpg";

export function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      <section className="min-h-[80vh] flex items-center">
        <div className="py-16 md:py-20 lg:py-24 w-full">
          <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 lg:flex-row lg:justify-between">
            <div className="mx-auto max-w-lg text-center lg:mx-0 lg:w-1/2 lg:text-left z-10">
              <h1 className="text-balance text-4xl font-medium md:text-5xl lg:text-6xl">
                Precision Metal Cutting Tools for Modern Manufacturing
              </h1>
              <p className="mt-6 text-pretty text-base md:text-lg text-muted-foreground">
                Highly customizable cutting tools for building precision parts that meet exacting specifications.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <Button
                  size="lg"
                  className="px-5 text-base"
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
                  variant="ghost"
                  className="px-5 text-base"
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
            <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
              <img
                className="rounded-lg shadow-2xl w-full max-w-md lg:max-w-lg object-cover"
                src={heroImage}
                alt="Precision Machinery"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-muted/30 py-16 md:py-24">
        <div className="group relative m-auto max-w-6xl px-6" id="industries">
          <div className="flex flex-col items-center md:flex-row gap-8">
            <div className="md:max-w-44 md:border-r md:border-border md:pr-6">
              <p className="text-center md:text-end text-sm font-medium text-foreground">Powering the best teams</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <Carousel
                opts={{ loop: true }}
                plugins={[AutoScroll({ playOnInit: true, speed: 0.5 })]}
              >
                <CarouselContent className="ml-0 -ml-4">
                  <CarouselItem className="flex basis-1/3 justify-center pl-4 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-32 h-20 sm:w-36 sm:h-24">
                      <div className="text-muted-foreground/30 text-xs">Logo 1</div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/3 justify-center pl-4 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-32 h-20 sm:w-36 sm:h-24">
                      <div className="text-muted-foreground/30 text-xs">Logo 2</div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/3 justify-center pl-4 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-32 h-20 sm:w-36 sm:h-24">
                      <div className="text-muted-foreground/30 text-xs">Logo 3</div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/3 justify-center pl-4 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-32 h-20 sm:w-36 sm:h-24">
                      <div className="text-muted-foreground/30 text-xs">Logo 4</div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/3 justify-center pl-4 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-32 h-20 sm:w-36 sm:h-24">
                      <div className="text-muted-foreground/30 text-xs">Logo 5</div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/3 justify-center pl-4 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-32 h-20 sm:w-36 sm:h-24">
                      <div className="text-muted-foreground/30 text-xs">Logo 6</div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/3 justify-center pl-4 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-32 h-20 sm:w-36 sm:h-24">
                      <div className="text-muted-foreground/30 text-xs">Logo 7</div>
                    </div>
                  </CarouselItem>
                  <CarouselItem className="flex basis-1/3 justify-center pl-4 sm:basis-1/4 md:basis-1/5 lg:basis-1/6">
                    <div className="flex shrink-0 items-center justify-center bg-card border border-border rounded-lg natural-shadow hover:shadow-md transition-all w-32 h-20 sm:w-36 sm:h-24">
                      <div className="text-muted-foreground/30 text-xs">Logo 8</div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}