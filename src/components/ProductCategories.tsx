import { Card } from "@/components/ui/card";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import img5 from "@/assets/img5.jpg";
import img7 from "@/assets/img7.jpg";
import img8 from "@/assets/img8.jpg";
import img9 from "@/assets/img9.jpg";
import img10 from "@/assets/img10.jpg";
import img11 from "@/assets/img11.jpg";
import img12 from "@/assets/img12.jpg";
import img14 from "@/assets/img14.jpg";
import img15 from "@/assets/img15.jpg";
import img16 from "@/assets/img16.jpg";
import img17 from "@/assets/img17.jpg";

const categories = [
  {
    title: "Carbide Drills",
    description: "High-precision drills for tight tolerance holes in all materials.",
    image: img1,
  },
  {
    title: "Milling Tools",
    description: "End mills and cutters for complex surface finishing operations.",
    image: img2,
  },
  {
    title: "Tapping Tools",
    description: "Threading tools for accurate internal thread production.",
    image: img3,
  },
  {
    title: "Reamers",
    description: "Precision finishing tools for exact hole diameter requirements.",
    image: img4,
  },
  {
    title: "Boring Tools",
    description: "High-accuracy tools for enlarging and finishing existing holes.",
    image: img5,
  },
  {
    title: "Threading Dies",
    description: "External threading tools for producing precision threads on shafts.",
    image: img7,
  },
  {
    title: "Countersinks",
    description: "Conical cutting tools for creating recesses for screw heads.",
    image: img8,
  },
  {
    title: "Chamfer Mills",
    description: "Edge finishing tools for deburring and beveling operations.",
    image: img9,
  },
  {
    title: "Spot Drills",
    description: "Center marking tools for precise hole location guidance.",
    image: img10,
  },
  {
    title: "Form Tools",
    description: "Custom profile cutters for specialized machining applications.",
    image: img11,
  },
  {
    title: "Insert Tooling",
    description: "Indexable cutting systems for efficient production runs.",
    image: img12,
  },
  {
    title: "HSS Tool Bits",
    description: "High-speed steel cutting bits for general purpose machining.",
    image: img14,
  },
  {
    title: "Keyway Cutters",
    description: "Specialized cutters for accurate keyway and slot production.",
    image: img15,
  },
  {
    title: "Thread Mills",
    description: "Versatile threading tools for internal and external threads.",
    image: img16,
  },
  {
    title: "Specialty Cutters",
    description: "Custom-engineered solutions for unique machining challenges.",
    image: img17,
  },
];

const ProductCategories = () => {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string } | null>(null);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 animate-fade-in-up">Our Product Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-4 animate-scale-in"></div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Explore our comprehensive range of precision cutting tools and machinery solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 scroll-reveal border border-transparent hover:border-primary/30 bg-card"
              onClick={() => setSelectedImage({ image: category.image, title: category.title })}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative aspect-square overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <img
                  src={category.image}
                  alt={category.title}
                  className="relative w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                
                {/* Hover text indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-foreground transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    View Full Size
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary hover:scale-110 transition-all duration-300 bg-white/10 hover:bg-white/20 rounded-full p-2 backdrop-blur-sm"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="relative w-full h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCategories;
