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
        className="cursor-pointer text-foreground hover:text-primary"
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
      className="relative rounded-full border border-border/50 bg-card/80 backdrop-blur-md shadow-lg flex justify-center space-x-2 sm:space-x-4 px-4 sm:px-8 py-4 sm:py-6 text-sm sm:text-base"
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
    <div className={`fixed top-4 md:top-8 inset-x-0 z-50 px-4 py-4 transition-all duration-300 ${scrolled ? 'top-0 md:top-0 py-2 bg-background/80 backdrop-blur-lg shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between animate-fade-in-up">
        <Link to="/" className="flex-shrink-0">
          <span className="text-xl sm:text-2xl font-bold text-foreground">GM Machinery</span>
        </Link>
        <Menu setActive={setActive}>
          <Link to="/" className="hidden sm:block">
            <MenuItem setActive={setActive} active={active} item="Home" />
          </Link>
          <div onClick={() => scrollToSection('why-gm')}>
            <MenuItem setActive={setActive} active={active} item="About Us" />
          </div>
          <div onClick={() => scrollToSection('industries')} className="hidden sm:block">
            <MenuItem setActive={setActive} active={active} item="Industries" />
          </div>
          <div onClick={() => scrollToSection('contact')}>
            <MenuItem setActive={setActive} active={active} item="Contact" />
          </div>
        </Menu>
      </div>
    </div>
  );
}
