import { Link } from "react-router-dom";
import logo from "@/assets/gm-logo.png";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header>
      <nav className="bg-background/50 w-full border-b backdrop-blur-3xl">
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="G M Machinery Store" className="h-10 w-auto" />
              </Link>

              <div className="hidden lg:block">
                <ul className="flex gap-8 text-sm">
                  <li>
                    <button
                      onClick={() => scrollToSection('industries')}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>Industries</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('about')}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>About Us</span>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection('contact')}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                    >
                      <span>Contact</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
