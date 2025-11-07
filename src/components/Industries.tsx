import { Card } from "@/components/ui/card";
import { Plane, Car, Factory, Droplet, Wrench } from "lucide-react";

const industries = [
  {
    icon: Plane,
    title: "Aerospace",
    description: "Precision tools for tight-tolerance aerospace components and exotic alloys.",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "High-volume production tooling for engine, transmission, and chassis parts.",
  },
  {
    icon: Factory,
    title: "Heavy Engineering",
    description: "Robust cutting solutions for large-scale fabrication and machining.",
  },
  {
    icon: Droplet,
    title: "Oil & Gas",
    description: "Specialized tooling for drilling equipment and pipeline components.",
  },
  {
    icon: Wrench,
    title: "General Engineering",
    description: "Versatile tools for job shops and prototype manufacturing.",
  },
];

const Industries = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized tooling solutions tailored to your industry's unique requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group border-2 border-border hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg steel-gradient shrink-0">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
