import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import heroImage from "@/assets/hero-machinery.jpg";

export function HeroSection() {
  return (
    <main className="overflow-x-hidden">
      <section>
        <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-32">
          <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
              <h1 className="mt-8 max-w-2xl text-balance text-5xl font-medium md:text-6xl lg:mt-16 xl:text-7xl">
                Precision Metal Cutting Tools for Modern Manufacturing
              </h1>
              <p className="mt-8 max-w-2xl text-pretty text-lg text-muted-foreground">
                Highly customizable cutting tools for building precision parts that meet exacting specifications.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
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
            <img
              className="pointer-events-none order-first ml-auto h-56 w-full object-cover sm:h-96 lg:absolute lg:inset-0 lg:-right-20 lg:-top-96 lg:order-last lg:h-max lg:w-2/3 lg:object-contain opacity-80"
              src={heroImage}
              alt="Precision Machinery"
              height="4000"
              width="3000"
            />
          </div>
        </div>
      </section>
      <section className="bg-background pb-16 md:pb-32">
        <div className="group relative m-auto max-w-6xl px-6" id="industries">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-end text-sm text-muted-foreground">Powering the best teams</p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider
                speedOnHover={20}
                speed={40}
                gap={112}
              >
                <div className="flex">
                  <img
                    className="mx-auto h-5 w-fit opacity-70 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                    alt="Nvidia Logo"
                    height="20"
                    width="auto"
                  />
                </div>

                <div className="flex">
                  <img
                    className="mx-auto h-4 w-fit opacity-70 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/column.svg"
                    alt="Column Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-4 w-fit opacity-70 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/github.svg"
                    alt="GitHub Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-5 w-fit opacity-70 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Nike Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-5 w-fit opacity-70 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                    alt="Lemon Squeezy Logo"
                    height="20"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-4 w-fit opacity-70 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                    alt="Laravel Logo"
                    height="16"
                    width="auto"
                  />
                </div>
                <div className="flex">
                  <img
                    className="mx-auto h-7 w-fit opacity-70 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                    alt="Lilly Logo"
                    height="28"
                    width="auto"
                  />
                </div>

                <div className="flex">
                  <img
                    className="mx-auto h-6 w-fit opacity-70 hover:opacity-100 transition-opacity"
                    src="https://html.tailus.io/blocks/customers/openai.svg"
                    alt="OpenAI Logo"
                    height="24"
                    width="auto"
                  />
                </div>
              </InfiniteSlider>

              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background"></div>
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background"></div>
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}