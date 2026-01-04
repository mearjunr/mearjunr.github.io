import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, MapPin, BarChart3, Dumbbell } from "lucide-react";

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Store Connect",
      subtitle: "Geolocation-Based Shopping Platform",
      description:
        "Developed a PHP-based web platform connecting users to local stores using geolocation. Enabled stores to manage inventory, update listings, and deliver personalized service.",
      tags: ["PHP", "MySQL", "Geolocation API", "HTML/CSS"],
      icon: MapPin,
      highlight: "Published in International Journal of Scientific Engineering and Research",
    },
    {
      title: "Power BI Dashboard",
      subtitle: "Business Intelligence Project",
      description:
        "Cleaned and transformed Excel data to build an interactive dashboard in Power BI. Extracted and visualized actionable business insights for decision-making.",
      tags: ["Power BI", "Excel", "Data Analytics", "Visualization"],
      icon: BarChart3,
      highlight: null,
    },
    {
      title: "Gym Management System",
      subtitle: "Service Management Platform",
      description:
        "Created a comprehensive gym service platform using PHP, HTML, CSS. Managed training packages, schedules, and payment features for seamless gym operations.",
      tags: ["PHP", "HTML", "CSS", "MySQL"],
      icon: Dumbbell,
      highlight: null,
    },
  ];

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my key projects demonstrating skills in web development and data analytics
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-6 group hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <project.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-primary mb-4">{project.subtitle}</p>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {project.highlight && (
                <div className="mb-5 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-xs text-primary font-medium">
                    📚 {project.highlight}
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
