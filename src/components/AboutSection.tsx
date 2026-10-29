import { m } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpenCheck, GraduationCap, Users } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import { scaleIn, staggerContainer } from "@/lib/motion";
import { trackSpotlight } from "@/hooks/useSpotlight";

const stack = ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL"];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tile = "glass-card spotlight p-6";

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

        <m.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <m.div variants={scaleIn} onMouseMove={trackSpotlight} className={`${tile} sm:col-span-2 lg:row-span-2 flex flex-col justify-center`}>
            <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am a full-stack developer at Znorm AI (Snapshare), where I joined as an
              intern in January 2026 and moved to a full-time role in July 2026. I am an MCA
              graduate (8.12 CGPA) from College of Engineering Chengannur, and I published
              a geolocation-based web platform in IJSER in 2025.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I work mainly with Next.js, React, TypeScript, Prisma and PostgreSQL across
              product UI, a full website revamp and on-site event support. I am currently
              leading development of the company's internal HRMS and guiding an intern team
              through tickets, code reviews and releases.
            </p>
          </m.div>

          <m.div variants={scaleIn} onMouseMove={trackSpotlight} className={`${tile} sm:col-span-2`}>
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary mb-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
              </span>
              Now
            </div>
            <p className="font-display text-lg font-semibold leading-snug">
              Building the company's internal HRMS at Znorm AI (Snapshare)
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Payroll, attendance, leave, hiring, assets, a sales CRM and event management.
            </p>
          </m.div>

          <m.div variants={scaleIn} className="relative overflow-hidden rounded-xl border border-border min-h-[180px]">
            <img
              src={profileImage}
              alt="Arjun R"
              width={324}
              height={309}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
              <p className="font-mono text-xs text-white">Pathanamthitta, Kerala</p>
            </div>
          </m.div>

          <m.div variants={scaleIn} onMouseMove={trackSpotlight} className={tile}>
            <GraduationCap className="w-6 h-6 text-primary mb-3" />
            <p className="font-semibold">MCA, 8.12 CGPA</p>
            <p className="text-sm text-muted-foreground mt-1">College of Engineering Chengannur</p>
          </m.div>

          <m.div variants={scaleIn} onMouseMove={trackSpotlight} className={`${tile} sm:col-span-2`}>
            <p className="font-mono text-xs uppercase tracking-wider text-primary mb-3">Daily stack</p>
            <div className="flex flex-wrap gap-2">
              {stack.map((item) => (
                <span key={item} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </m.div>

          <m.div variants={scaleIn} onMouseMove={trackSpotlight} className={tile}>
            <Users className="w-6 h-6 text-primary mb-3" />
            <p className="font-semibold">Guiding interns</p>
            <p className="text-sm text-muted-foreground mt-1">Tickets, pull request reviews and database migrations</p>
          </m.div>

          <m.div variants={scaleIn} onMouseMove={trackSpotlight} className={tile}>
            <BookOpenCheck className="w-6 h-6 text-primary mb-3" />
            <p className="font-semibold">Published in IJSER</p>
            <p className="text-sm text-muted-foreground mt-1">Geolocation-based shopping platform, 2025</p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
};

export default AboutSection;
