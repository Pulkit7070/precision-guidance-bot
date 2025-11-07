import { Card } from "@/components/ui/card";
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
  return (
    <section className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why G M Machinery Store</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            More than a supplier – your partner in precision manufacturing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex p-4 rounded-full steel-gradient mb-4">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Heritage;
