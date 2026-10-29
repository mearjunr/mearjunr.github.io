import { Moon, Sun } from "lucide-react";
import { m } from "framer-motion";
import { useTheme } from "@/hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <m.button
      onClick={toggleTheme}
      className="relative p-3 rounded-full bg-secondary border border-border/50 
                 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <m.div
        initial={false}
        animate={{ rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </m.div>
    </m.button>
  );
};

export default ThemeToggle;
