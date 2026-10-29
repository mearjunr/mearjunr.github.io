import { m } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Database, Layers, Wrench } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "C", "C++", "HTML", "CSS"],
    },
    {
      title: "Frameworks & Libraries",
      icon: Layers,
      skills: ["Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion", "Auth.js", "PHP", "REST APIs"],
    },
    {
      title: "Databases & BI",
      icon: Database,
      skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "MySQL", "Power BI", "Tableau", "Excel"],
    },
    {
      title: "Tools & Leadership",
      icon: Wrench,
      skills: ["Git", "GitHub", "Vercel", "Docker", "Vitest", "XAMPP", "Leading an Intern Team", "Mentoring", "Code Review"],
    },
  ];

  return (
    <section id="skills" className="py-24" ref={ref}>
      <div className="section-container">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Languages, frameworks, databases and tools I use day to day
          </p>
        </m.div>

        <m.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category) => (
            <m.div key={category.title} variants={fadeUp} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <m.div variants={staggerContainer(0.04)} className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <m.span
                    key={skill}
                    variants={scaleIn}
                    className="skill-tag inline-flex items-center gap-2"
                  >
                    <span
                      className="flex h-5 w-5 items-center justify-center rounded-md text-[10px] font-bold text-primary-foreground"
                      style={{ background: "var(--gradient-primary)" }}
                      aria-hidden="true"
                    >
                      {skill.charAt(0)}
                    </span>
                    {skill}
                  </m.span>
                ))}
              </m.div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
};

export default SkillsSection;
