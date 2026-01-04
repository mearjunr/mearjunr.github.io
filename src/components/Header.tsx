import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { Code2 } from "lucide-react";

const Header = () => {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <Code2 className="w-6 h-6 text-primary" />
            <span className="font-semibold text-lg">Arjun R</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
