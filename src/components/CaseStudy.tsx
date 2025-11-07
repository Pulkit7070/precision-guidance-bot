import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingDown, Clock, DollarSign, ArrowRight } from "lucide-react";

const CaseStudy = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-muted-foreground">
              Real outcomes from manufacturers who trust our expertise
            </p>
          </div>

          <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
            <div className="steel-gradient p-8 text-primary-foreground">
              <h3 className="text-3xl font-bold mb-2">
                How we reduced tool wear by 22% for an automotive supplier
              </h3>
              <p className="text-lg opacity-90">XYZ Automotive Components</p>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <TrendingDown className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">22%</div>
                    <div className="text-sm text-muted-foreground">Tool wear reduction</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">12%</div>
                    <div className="text-sm text-muted-foreground">Throughput increase</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-1">3 mo</div>
                    <div className="text-sm text-muted-foreground">ROI payback period</div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none mb-6">
                <p className="text-muted-foreground leading-relaxed">
                  Client faced high tool wear causing production downtime. We supplied coated carbide drills 
                  with optimized flute geometry and provided on-site cutting parameter tuning. The result was 
                  a 22% reduction in tool wear, 12% increase in throughput, and 3 months payback on tooling cost. 
                  G M Machinery provided samples, machining support, and monthly check-ins.
                </p>
              </div>

              <Button variant="default" size="lg" className="group">
                Read Full Case Study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
