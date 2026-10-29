import { m } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ArrowRight } from "lucide-react";

const stats = [
  { value: "7", label: "user roles in the HRMS" },
  { value: "22", label: "automated test suites" },
  { value: "8.12", label: "MCA CGPA" },
  { value: "IJSER", label: "published in 2025" },
];

const HeroSection = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/mearjunr", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mearjunr",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:arjunr.off@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+917025119367", label: "Phone" },
  ];

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 hero-mesh" aria-hidden="true" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_1fr] items-center gap-12 lg:gap-16">
          <div className="text-center lg:text-left">
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-mono text-sm text-primary mb-6"
            >
              Full Stack Developer / HRMS Builder / Intern Team Mentor
            </m.p>

            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-3"
            >
              Arjun<span className="text-primary">.</span>R
            </m.h1>

            <m.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-xl sm:text-2xl font-medium mb-5"
            >
              Software Developer at Snapshare AI
            </m.h2>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Building products with Next.js, React, TypeScript, Prisma and
              PostgreSQL, and leading the company's internal HRMS with a team of
              interns. MCA graduate, published in IJSER 2025.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8"
            >
              <a
                href="/resume.pdf"
                download="Arjun_R_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium bg-primary text-primary-foreground hover:-translate-y-0.5 transition-all shadow-[0_0_30px_-6px_hsl(var(--primary))]"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium border border-border bg-card/60 hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
              >
                Contact me
                <ArrowRight className="w-4 h-4" />
              </a>
            </m.div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <MapPin className="w-4 h-4" />
                <span>Pathanamthitta, Kerala</span>
              </div>
              <div className="flex items-center gap-2">
                {socialLinks.map((link, index) => (
                  <m.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 glass-card hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    whileHover={{ y: -4 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    aria-label={link.label}
                  >
                    <link.icon className="w-4 h-4" />
                  </m.a>
                ))}
              </div>
            </div>
          </div>

          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-2xl text-left"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <span className="w-3 h-3 rounded-full bg-secondary" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">arjun.ts</span>
            </div>
            <pre className="p-5 sm:p-6 font-mono text-[13px] sm:text-sm leading-7 text-muted-foreground overflow-x-auto">
              <code>
                <span className="text-pink-600 dark:text-pink-400">const</span> arjun = {"{"}
                {"\n  "}role: <span className="text-primary">"Full Stack Developer"</span>,
                {"\n  "}company: <span className="text-primary">"Znorm AI (Snapshare)"</span>,
                {"\n  "}stack: [<span className="text-primary">"Next.js"</span>, <span className="text-primary">"React"</span>,
                {"\n    "}<span className="text-primary">"TypeScript"</span>, <span className="text-primary">"Prisma"</span>,
                {"\n    "}<span className="text-primary">"PostgreSQL"</span>],
                {"\n  "}leading: <span className="text-primary">"internal HRMS + intern team"</span>,
                {"\n  "}published: <span className="text-primary">"IJSER 2025"</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
          </m.div>
        </div>

        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-5">
              <p className="font-display text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default HeroSection;
