import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

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

  const certifications = [
    "NPTEL Cloud Computing",
    "British Council Score - 472",
    "Blockchain Certification – W3K",
    "Data Analytics Internship - SkillUno",
    "KKEM Personality Development Program",
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
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic journey and professional certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
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

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>

            <div className="glass-card p-6">
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-primary/5 transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
