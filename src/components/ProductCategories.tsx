import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import drillsImage from "@/assets/product-drills.jpg";
import millingImage from "@/assets/product-milling.jpg";
import tappingImage from "@/assets/product-tapping.jpg";
import reamersImage from "@/assets/product-reamers.jpg";

const categories = [
  {
    title: "Carbide Drills",
    description: "High-precision drills for tight tolerance holes in all materials.",
    image: drillsImage,
  },
  {
    title: "Milling Tools",
    description: "End mills and cutters for complex surface finishing operations.",
    image: millingImage,
  },
  {
    title: "Tapping Tools",
    description: "Threading tools for accurate internal thread production.",
    image: tappingImage,
  },
  {
    title: "Reamers",
    description: "Precision finishing tools for exact hole diameter requirements.",
    image: reamersImage,
  },
];

const ProductCategories = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Product Range</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Precision cutting tools engineered for demanding applications across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 border-border hover:border-primary/30"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hero-dark/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  View range
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
