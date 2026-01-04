import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Kerala Technological University",
      period: "2023 – 2025",
      grade: "CGPA: 8.12",
    },
    {
      degree: "Bachelor of Computer Applications",
      institution: "University of Kerala",
      period: "2020 – 2023",
      grade: "CGPA: 7.6",
    },
    {
      degree: "Higher Secondary",
      institution: "Kerala State Board",
      period: "2018 – 2020",
      grade: "82%",
    },
    {
      degree: "High School",
      institution: "Kerala State Board",
      period: "2017 – 2018",
      grade: "95%",
    },
  ];

  return (
    <section id="education" className="py-24 bg-secondary/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and qualifications
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="p-2 rounded-lg bg-primary/10">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Academic Background</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary/20 border-2 border-primary" />
                <div className="glass-card p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {edu.grade}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{edu.institution}</p>
                  <p className="text-xs text-muted-foreground">{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
