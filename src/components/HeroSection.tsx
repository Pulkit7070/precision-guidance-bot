import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
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
              <InfiniteSlider
                speedOnHover={60}
                speed={100}
                gap={48}
              >
                <div className="flex items-center justify-center bg-card border-2 border-border rounded-lg px-12 py-8 shadow-sm hover:shadow-md transition-all min-w-[160px]">
                  <span className="text-muted-foreground font-medium text-sm">AEROSPACE CO.</span>
                </div>

                <div className="flex items-center justify-center bg-card border-2 border-border rounded-lg px-12 py-8 shadow-sm hover:shadow-md transition-all min-w-[160px]">
                  <span className="text-muted-foreground font-medium text-sm">AUTO PARTS</span>
                </div>

                <div className="flex items-center justify-center bg-card border-2 border-border rounded-lg px-12 py-8 shadow-sm hover:shadow-md transition-all min-w-[160px]">
                  <span className="text-muted-foreground font-medium text-sm">PRECISION MFG</span>
                </div>

                <div className="flex items-center justify-center bg-card border-2 border-border rounded-lg px-12 py-8 shadow-sm hover:shadow-md transition-all min-w-[160px]">
                  <span className="text-muted-foreground font-medium text-sm">HEAVY INDUSTRY</span>
                </div>

                <div className="flex items-center justify-center bg-card border-2 border-border rounded-lg px-12 py-8 shadow-sm hover:shadow-md transition-all min-w-[160px]">
                  <span className="text-muted-foreground font-medium text-sm">TECH PARTS</span>
                </div>

                <div className="flex items-center justify-center bg-card border-2 border-border rounded-lg px-12 py-8 shadow-sm hover:shadow-md transition-all min-w-[160px]">
                  <span className="text-muted-foreground font-medium text-sm">DEFENSE</span>
                </div>

                <div className="flex items-center justify-center bg-card border-2 border-border rounded-lg px-12 py-8 shadow-sm hover:shadow-md transition-all min-w-[160px]">
                  <span className="text-muted-foreground font-medium text-sm">MEDICAL DEVICE</span>
                </div>

                <div className="flex items-center justify-center bg-card border-2 border-border rounded-lg px-12 py-8 shadow-sm hover:shadow-md transition-all min-w-[160px]">
                  <span className="text-muted-foreground font-medium text-sm">MARINE</span>
                </div>
              </InfiniteSlider>

              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background/50 to-transparent pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background/50 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}