import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-foreground hover:text-primary touch-manipulation px-1 py-1 whitespace-nowrap"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-card backdrop-blur-sm rounded-2xl overflow-hidden border border-border shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full border border-border/50 bg-card/90 backdrop-blur-md shadow-lg flex justify-center space-x-2 sm:space-x-3 md:space-x-4 px-3 sm:px-4 md:px-8 py-3 sm:py-4 md:py-6 text-xs sm:text-sm md:text-base"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link to={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl object-cover"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-foreground">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, to, ...rest }: any) => {
  return (
    <Link
      to={to}
      {...rest}
      className="text-muted-foreground hover:text-foreground transition-colors"
    >
      {children}
    </Link>
  );
};

export function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`fixed top-0 inset-x-0 z-50 px-3 sm:px-4 py-3 sm:py-4 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-xl shadow-lg' : 'bg-background/60 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 animate-fade-in-up">
        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex-shrink-0 cursor-pointer touch-manipulation">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground hover:text-primary transition-colors duration-300">GM Machinery</span>
        </div>
        <Menu setActive={setActive}>
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hidden sm:block cursor-pointer">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </div>
          <div onClick={() => scrollToSection('about-us')} className="cursor-pointer">
            <MenuItem setActive={setActive} active={active} item="About Us" />
          </div>
          <div onClick={() => scrollToSection('industries')} className="hidden sm:block cursor-pointer">
            <MenuItem setActive={setActive} active={active} item="Industries" />
          </div>
          <div onClick={() => scrollToSection('contact')} className="cursor-pointer">
            <MenuItem setActive={setActive} active={active} item="Contact" />
          </div>
        </Menu>
      </div>
    </div>
  );
}
