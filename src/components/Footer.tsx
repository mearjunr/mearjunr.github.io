import { ArrowUp, Code2, Github, Linkedin, Mail } from "lucide-react";

const links = [
  { icon: Github, href: "https://github.com/mearjunr", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mearjunr", label: "LinkedIn" },
  { icon: Mail, href: "mailto:arjunr.off@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="font-display font-semibold">Arjun R</span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-2 inline-flex items-center gap-2 px-3 py-2 text-sm rounded-lg border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
              Back to top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
