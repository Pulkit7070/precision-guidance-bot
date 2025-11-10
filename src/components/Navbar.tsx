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
      className="relative rounded-full border border-border/50 bg-card/80 backdrop-blur-md shadow-lg flex justify-center space-x-4 px-8 py-6"
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

  return (
    <div className="fixed top-8 inset-x-0 max-w-2xl mx-auto z-50">
      <Menu setActive={setActive}>
        <Link to="/">
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/products/drills">Precision Drills</HoveredLink>
            <HoveredLink to="/products/milling">Milling Tools</HoveredLink>
            <HoveredLink to="/products/tapping">Tapping Solutions</HoveredLink>
            <HoveredLink to="/products/reamers">Reamer Systems</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Industries">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink to="/industries/aerospace">Aerospace</HoveredLink>
            <HoveredLink to="/industries/automotive">Automotive</HoveredLink>
            <HoveredLink to="/industries/engineering">Heavy Engineering</HoveredLink>
          </div>
        </MenuItem>
        <Link to="/contact">
          <MenuItem setActive={setActive} active={active} item="Contact" />
        </Link>
      </Menu>
    </div>
  );
}
