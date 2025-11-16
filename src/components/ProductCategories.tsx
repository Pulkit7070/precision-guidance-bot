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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Product Gallery</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Explore our comprehensive range of precision cutting tools and machinery solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              onClick={() => setSelectedImage({ image: category.image, title: category.title })}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductCategories;
