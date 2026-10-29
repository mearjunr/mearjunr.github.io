import { m } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: GraduationCap,
      title: "MCA Graduate",
      description: "8.12 CGPA from College of Engineering Chengannur",
    },
    {
      icon: Briefcase,
      title: "Full-Stack Developer",
      description: "Building products with Next.js, React, TypeScript and PostgreSQL at Snapshare AI",
    },
    {
      icon: Target,
      title: "Published Researcher",
      description: "Published in International Journal of Scientific Engineering and Research",
    },
    {
      icon: Lightbulb,
      title: "Guiding Interns",
      description: "Plans tickets, reviews pull requests and owns database migrations for an intern team",
    },
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A full-stack developer with a computer science foundation, building and shipping production software
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <m.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed">
              I am a full-stack developer at Znorm AI (Snapshare), where I joined as an
              intern in January 2026 and moved to a full-time role in July 2026. I am an MCA
              graduate (8.12 CGPA) from College of Engineering Chengannur, and I published
              a geolocation-based web platform in IJSER in 2025.
            </p>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-card p-8"
          >
            <h3 className="text-xl font-semibold mb-4">What I Do</h3>
            <p className="text-muted-foreground leading-relaxed">
              I work mainly with Next.js, React, TypeScript, Prisma and PostgreSQL across
              product UI, a full website revamp and on-site event support. I am currently
              leading development of the company's internal HRMS and guiding an intern team
              through tickets, code reviews and releases.
            </p>
          </m.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass-card p-6 text-center group hover:bg-primary/5 transition-colors"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
