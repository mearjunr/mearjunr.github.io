import { m } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Lock, ShieldCheck, TestTube2, Users } from "lucide-react";
import { slideIn, staggerContainer } from "@/lib/motion";
import { trackSpotlight } from "@/hooks/useSpotlight";

const roles = [
  "Full Stack Developer (Jul 2026 – Present)",
  "Full Stack Developer Intern (Jan – Jun 2026)",
];

const hrms = {
  title: "Internal HRMS (in development)",
  period: "Sep 2026 – Present",
  highlights: [
    { icon: Users, value: "7", label: "user roles" },
    { icon: TestTube2, value: "22", label: "test suites" },
    { icon: Lock, value: "AES-256-GCM", label: "encrypted financial fields" },
    { icon: ShieldCheck, value: "Audit log", label: "login throttling, password reset" },
  ],
  points: [
    "Leading development of a multi-module HRMS covering payroll and payslips, attendance, leave, hiring, asset tracking, a sales CRM and event management.",
    "Implemented role-based access for 7 user roles (Super Admin, HR, Finance, Core Team, Sales, Events, Employee) with Auth.js, login throttling, password reset and an audit log.",
    "Built monthly pay runs with PDF payslip generation and email delivery, Excel employee import, and AES-256-GCM encryption for sensitive financial fields.",
    "Lead a team of interns: plan and assign tickets, review and merge pull requests, and own database schema migrations, with automated tests across 22 suites.",
  ],
  stack: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL (Neon)", "Auth.js", "Tailwind CSS", "Zod", "Vitest", "Resend", "Vercel", "Docker"],
};

const earlier = [
  {
    title: "Snapshare Product: Frontend and Event Tech Coordinator",
    period: "May – Jul 2026",
    points: [
      "Shipped frontend work on the Snapshare product, including UI changes, animation updates and page revamps.",
      "Acted as the on-site technical point of contact at client events, diagnosing and fixing product issues live and coordinating event operations end to end.",
      "Gathered real customer feedback at events and turned it into user-experience improvements in the product.",
    ],
    stack: [] as string[],
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

const Chips = ({ items }: { items: string[] }) =>
  items.length > 0 ? (
    <div className="flex flex-wrap gap-2 mt-4">
      {items.map((tech) => (
        <span key={tech} className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground">
          {tech}
        </span>
      ))}
    </div>
  ) : null;

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2 justify-center">
            <div className="p-2 rounded-lg bg-primary/10">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Znorm AI (Snapshare)</h3>
          </div>
          <p className="text-sm text-muted-foreground text-center mb-1">
            Bengaluru, Hybrid · Jan 2026 – Present
          </p>
          <div className="text-sm text-primary text-center mb-10">
            {roles.map((role) => (
              <p key={role}>{role}</p>
            ))}
          </div>

          <m.div
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            <m.div
              variants={slideIn}
              onMouseMove={trackSpotlight}
              className="glass-card spotlight p-6 sm:p-8 mb-10 border-primary/30"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-1 rounded-full bg-primary/15 text-primary font-mono font-medium">
                    Current focus
                  </span>
                  <h4 className="font-display text-xl font-semibold">{hrms.title}</h4>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {hrms.period}
                </span>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                {hrms.highlights.map((item) => (
                  <div key={item.label} className="rounded-xl bg-secondary/60 p-4">
                    <item.icon className="w-5 h-5 text-primary mb-2" />
                    <p className="font-display font-bold leading-tight">{item.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
                  </div>
                ))}
              </div>

              <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                {hrms.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <Chips items={hrms.stack} />
            </m.div>

            <div className="space-y-6">
              {earlier.map((item) => (
                <m.div
                  key={item.title}
                  variants={slideIn}
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
                    <Chips items={item.stack} />
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
