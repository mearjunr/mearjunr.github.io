import { m, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Code2, Menu, X, FileDown } from "lucide-react";
import { useActiveSection } from "@/hooks/useActiveSection";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navItems.map((item) => item.href.slice(1));

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const linkClass = (href: string) =>
    `font-mono text-sm transition-colors ${
      activeSection === href.slice(1)
        ? "text-primary"
        : "text-muted-foreground hover:text-primary"
    }`;

  return (
    <m.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <m.div
        style={{ scaleX: progress }}
        className="absolute top-0 left-0 right-0 h-0.5 origin-left"
        aria-hidden="true"
      >
        <div className="h-full w-full" style={{ background: "var(--gradient-primary)" }} />
      </m.div>

      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center gap-2 text-foreground hover:text-primary transition-colors"
          >
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-lg">arjun.r</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={linkClass(item.href)}
                aria-current={activeSection === item.href.slice(1) ? "true" : undefined}
              >
                ~/{item.label.toLowerCase()}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              download="Arjun_R_Resume.pdf"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <FileDown className="w-4 h-4" />
              Resume
            </a>
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <m.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/50"
          >
            <nav className="section-container py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 text-sm font-medium hover:bg-secondary/50 rounded-lg transition-colors ${
                    activeSection === item.href.slice(1) ? "text-primary bg-secondary/50" : "text-muted-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                download="Arjun_R_Resume.pdf"
                className="sm:hidden flex items-center gap-2 px-4 py-3 text-sm font-medium text-primary hover:bg-secondary/50 rounded-lg transition-colors"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </m.header>
  );
};

export default Header;
