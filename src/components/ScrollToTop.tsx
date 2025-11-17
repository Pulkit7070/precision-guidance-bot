import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all duration-300 animate-fade-in group"
          aria-label="Scroll to top"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
          <ArrowUp className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
