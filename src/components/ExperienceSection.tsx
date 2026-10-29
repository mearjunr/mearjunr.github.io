import { m } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const roles = [
    "Full Stack Developer (Jul 2026 – Present)",
    "Full Stack Developer Intern (Jan – Jun 2026)",
  ];

  const work = [
    {
      title: "Internal HRMS (in development)",
      period: "Sep 2026 – Present",
      points: [
        "Leading development of a multi-module HRMS covering payroll and payslips, attendance, leave, hiring, asset tracking, a sales CRM and event management.",
        "Implemented role-based access for 7 user roles (Super Admin, HR, Finance, Core Team, Sales, Events, Employee) with Auth.js, login throttling, password reset and an audit log.",
        "Built monthly pay runs with PDF payslip generation and email delivery, Excel employee import, and AES-256-GCM encryption for sensitive financial fields.",
        "Lead a team of interns: plan and assign tickets, review and merge pull requests, and own database schema migrations, with automated tests across 22 suites.",
      ],
      stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL (Neon)", "Auth.js", "Tailwind CSS", "Zod", "Vitest", "Resend", "Vercel", "Docker"],
    },
    {
      title: "Snapshare Product: Frontend and Event Tech Coordinator",
      period: "May – Jul 2026",
      points: [
        "Shipped frontend work on the Snapshare product, including UI changes, animation updates and page revamps.",
        "Acted as the on-site technical point of contact at client events, diagnosing and fixing product issues live and coordinating event operations end to end.",
        "Gathered real customer feedback at events and turned it into user-experience improvements in the product.",
      ],
      stack: [],
    },
    {
      title: "Znorm AI Website Revamp (znorm.org)",
      period: "Mar – May 2026",
      points: [
        "Revamped the company website, building new About, Training and Demo pages and the AI services section, with scroll animations and mobile and tablet layouts.",
        "Built product pages for EchoLink, EchoRAG, EchoSell, EchoStruct and IVA Gate, and integrated Calendly demo booking and email enquiry forms so leads reach the team directly.",
        "Resolved build issues and QA rounds through to launch.",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Calendly", "Formspree"],
    },
  ];

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="section-container">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Building and shipping products at Znorm AI (Snapshare)
          </p>
        </m.div>

        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-2 justify-center">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Znorm AI (Snapshare)</h3>
          </div>
          <p className="text-sm text-muted-foreground text-center mb-1">
            Bengaluru, Hybrid · Jan 2026 – Present
          </p>
          <div className="text-sm text-primary text-center mb-8">
            {roles.map((role) => (
              <p key={role}>{role}</p>
            ))}
          </div>

          <div className="space-y-6">
            {work.map((item, index) => (
              <m.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-6 border-l-2 border-primary/20 hover:border-primary transition-colors"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary/20 border-2 border-primary" />
                <div className="glass-card p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h4 className="font-semibold">{item.title}</h4>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {item.period}
                    </span>
                  </div>
                  <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  {item.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
