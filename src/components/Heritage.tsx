import { AnimatedTabs } from "@/components/ui/animated-tabs";
import { Award, Users, Handshake, Headset } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "50 Years of Excellence",
    description: "Five decades of tooling expertise and continuous improvement.",
  },
  {
    icon: Users,
    title: "Family-Run Business",
    description: "Personal service and relationships that span generations.",
  },
  {
    icon: Handshake,
    title: "Premium Partnerships",
    description: "Authorized supplier for leading global tooling manufacturers.",
  },
  {
    icon: Headset,
    title: "Technical Support",
    description: "On-site application engineering and machining consultation.",
  },
];

const Heritage = () => {
  const tabs = features.map((feature) => {
    const Icon = feature.icon;
    return {
      id: feature.title.toLowerCase().replace(/\s+/g, '-'),
      label: feature.title,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
          <div className="flex items-center justify-center bg-muted/20 rounded-lg p-8">
            <Icon className="w-32 h-32 text-primary" />
          </div>
          <div className="flex flex-col gap-y-4 justify-center">
            <h3 className="text-2xl font-bold mb-0 mt-0 !m-0">{feature.title}</h3>
            <p className="text-base text-muted-foreground mt-0">
              {feature.description}
            </p>
          </div>
        </div>
      ),
    };
  });

  return (
    <section id="why-gm" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why G M Machinery Store</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than a supplier – your partner in precision manufacturing
          </p>
        </div>

        <div className="flex justify-center">
          <AnimatedTabs tabs={tabs} className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Heritage;
