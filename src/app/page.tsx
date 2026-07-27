"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { SilkAurora } from "@/components/ui/silk-aurora";
import {
  ArrowUpRight,
  Award,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

// --- Content ---

const experiences = [
  {
    title: "Machine Learning Engineer II",
    company: "Shopify",
    location: "Toronto, ON",
    period: "May 2026 – Present",
    bullets: [
      "DRI for the ML side launch of Microsoft into Shopify's Autopilot",
      "Own the cross-channel budget allocation model that distributes merchant spend across Meta, Shop, and Microsoft",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Shopify",
    location: "Toronto, ON",
    period: "Jan 2026 – Apr 2026",
    bullets: [
      "Architected an end-to-end ML pipeline using XGBoost, dbt, and Airflow to predict conversion value for real-time ad auctions, generating a projected $5M in annualized incremental revenue",
      "Engineered an online Multi-Armed Bandit (Thompson Sampling) framework for ad creative selection, mitigating the cold-start problem and boosting aggregate click-through rate by 25%",
    ],
  },
  {
    title: "Machine Learning Research Intern",
    company: "Valence Labs (Mila)",
    location: "Montreal, QC",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Designed active learning pipelines using uncertainty estimation to optimize data sampling efficiency, saving $40k in data acquisition costs for training in sparse-data regimes",
      "Engineered generative geometric deep learning models (GNNs) for 3D graph-structured data, implementing multi-objective optimization to satisfy 94% of complex structural constraints",
    ],
  },
  {
    title: "Machine Learning Research Intern",
    company: "Recursion x NVIDIA",
    location: "Toronto, ON",
    period: "May 2025 – Aug 2025",
    bullets: [
      "Developed multi-modal foundation models fusing computer vision and high-dimensional tabular data; optimized transformer attention mechanisms to increase inference throughput by 4x",
      "Implemented domain adaptation and robust feature normalization techniques to handle distribution shifts across heterogeneous datasets, boosting out-of-distribution accuracy by 12%",
    ],
  },
  {
    title: "Machine Learning Operations Intern",
    company: "Nokia",
    location: "Ottawa, ON",
    period: "May 2024 – Apr 2025",
    bullets: [
      "Engineered an MCP microservice to standardize retrieval of proprietary data from an internal training-data store, reducing data preparation latency by 60% for domain-specific LLM training",
      "Built large-scale, Dockerized, Kubernetes-orchestrated microservices to source, validate, and register 100+ LLMs from Hugging Face into Nokia's MLflow-based model registry",
    ],
  },
  {
    title: "Machine Learning Intern",
    company: "Cisco",
    location: "Ottawa, ON",
    period: "May 2023 – Dec 2023",
    bullets: [
      "Built an API integrating ChromaDB and an in-house LLM to convert natural language into structured Elasticsearch queries, adopted by 10+ Cisco engineering teams",
      "Designed and maintained ETL pipelines using Apache Airflow to ingest, transform, and load 5TB+ of data from internal APIs and cloud storage into a centralized Snowflake warehouse",
    ],
  },
];

const projects = [
  {
    title: "Scribble – Anonymous AR Graffiti",
    tech: "Augmented Reality, zk-Proofs, Cohere, React, NextJS",
    description:
      "AR app for leaving anonymous, geotagged graffiti in physical spaces, using Cohere for content personalization and zk-proofs to grant secure, location-based access",
    github: "https://github.com/SaiPaladugu/UofTHacks2025",
    live: "https://dorahacks.io/buidl/21703/milestones",
    award: "Winner - UofTHacks 2025",
  },
  {
    title: "Model Garden",
    tech: "Python, MCPT, Bootstrap Inference, ib_async",
    description:
      "Trading system deployed live on IBKR, projected to beat the S&P 500 with half the drawdown",
    live: "https://modelgarden.vercel.app",
  },
  {
    title: "TennisBoost",
    tech: "Python, scikit-learn, LightGBM, XGBoost, CatBoost, Optuna",
    description:
      "Automated prediction system to identify market inefficiencies in ATP tennis odds, using a stacking ensemble model with custom time decay and ELO rating features",
    github: "https://github.com/SaiPaladugu/TennisBoost",
  },
  {
    title: "MLBets",
    tech: "Python, statsmodels, XGBoost, Poisson Regression, SQL",
    description:
      "ML model using Poisson regression and gradient boosting to identify profitable pitcher strikeout props in MLB, achieving consistent edges (~$500/month passive income)",
  },
  {
    title: "Brain Tumor Detection",
    tech: "YOLOv8, Computer Vision, Medical AI",
    description:
      "Brain Tumor Detection using YOLOv8 on MRI Scans — advanced computer vision for medical diagnosis using object detection",
    github: "https://github.com/SaiPaladugu/tumor-detection",
  },
  {
    title: "MoodWave",
    tech: "Spotify Web API, OpenAI GPT, Angular, Node.js, TypeScript",
    description:
      "AI mood-based Spotify playlist generator that uses sentiment analysis to create personalized music experiences",
    github: "https://github.com/SaiPaladugu/moodWave",
    live: "https://mood-wave.vercel.app/",
  },
  {
    title: "GeoClone",
    tech: "Angular, Google Maps & Street View API, TypeScript",
    description:
      "A free alternative to Geoguessr, hosted and playable; averaging over 50 monthly users",
    github: "https://github.com/SaiPaladugu/geoclone",
    live: "https://geoclone.vercel.app/",
  },
  {
    title: "GeoguessrAI",
    tech: "Python, Computer Vision, AI, Geolocation",
    description:
      "AI-powered geolocation system that predicts locations from images using advanced computer vision and machine learning",
    github: "https://github.com/SaiPaladugu/GeoguessrAI",
  },
  {
    title: "2048 RL Agent",
    tech: "Python, PyTorch, Reinforcement Learning, Deep Q-Learning",
    description:
      "Deep Q-Learning agent using PyTorch that autonomously learns and optimizes strategies to achieve high scores in 2048",
    github: "https://github.com/SaiPaladugu/2048_DeepQ",
  },
  {
    title: "Therien Ottawa South",
    tech: "HTML, CSS, JavaScript, SCSS, Responsive Design",
    description:
      "Responsive website for a martial arts club — exchanged for a free lifetime membership",
    github: "https://github.com/SaiPaladugu/TherienOttawaSouth",
    live: "https://therienottawasouth.vercel.app/",
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "Java", "C++", "SQL", "JavaScript", "Bash", "Scala"],
  },
  {
    title: "ML & Data Science",
    skills: [
      "PyTorch",
      "TensorFlow",
      "XGBoost",
      "Scikit-learn",
      "Keras",
      "Hugging Face",
      "Pandas",
      "NumPy",
      "OpenCV",
    ],
  },
  {
    title: "MLOps & DevOps",
    skills: [
      "Docker",
      "Kubernetes",
      "Airflow",
      "dbt",
      "MLflow",
      "LangChain",
      "Terraform",
      "GitLab CI",
      "Jenkins",
      "Argo Workflows",
      "DVC",
      "Git",
    ],
  },
  {
    title: "Cloud & API",
    skills: ["AWS", "S3", "EC2", "SageMaker", "EKS", "Kafka", "FastAPI", "Flask"],
  },
  {
    title: "Databases & Data Stores",
    skills: ["MySQL", "MongoDB", "Elasticsearch", "Pinecone", "ChromaDB"],
  },
];

const honours = [
  "Summa Cum Laude",
  "Harry S. Southam Scholarship",
  "Dale L. Sheehan Award",
];

const socials = [
  { href: "https://github.com/SaiPaladugu", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/saipaladugu", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:saichandan03@gmail.com", label: "Email", icon: Mail },
];

// --- Motion ---

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// --- Building blocks ---

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="border-t border-white/10">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-24 md:px-10 md:py-28">
        <Reveal className="mb-14 flex items-baseline gap-4">
          <span className="font-mono text-xs text-white/30">{index}</span>
          <h2 className="text-xs font-medium uppercase tracking-[0.24em] text-white/50">
            {title}
          </h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="relative pl-5 text-[15px] leading-relaxed text-white/65">
      <span
        aria-hidden="true"
        className="absolute left-0 top-[0.7em] h-px w-2.5 bg-white/25"
      />
      {children}
    </li>
  );
}

function EntryRow({
  meta,
  children,
}: {
  meta: ReactNode;
  children: ReactNode;
}) {
  return (
    <Reveal className="grid gap-3 py-10 first:pt-0 last:pb-0 md:grid-cols-[240px_1fr] md:gap-10">
      <div className="font-mono text-xs leading-6 text-white/40">{meta}</div>
      <div>{children}</div>
    </Reveal>
  );
}

// --- Navbar ---

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050507]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1240px] items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#home"
          className="font-mono text-sm font-semibold tracking-[0.2em] text-white"
        >
          SP
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1">
          {socials.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="p-2 text-white/50 transition-colors hover:text-white"
            >
              <Icon className="h-[18px] w-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

// --- Page ---

export default function Home() {
  return (
    <main className="relative text-white">
      {/* Persistent aurora backdrop — fixed to the viewport, content scrolls over it */}
      <SilkAurora
        aria-hidden="true"
        globalPointer
        className="fixed inset-0 -z-10"
      />

      <Navbar />

      {/* Hero */}
      <header
        id="home"
        className="relative flex min-h-svh w-full items-center"
        style={{ containerType: "inline-size" }}
      >
        <div className="mx-auto w-full max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
          <div className="max-w-[760px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.7, ease: "easeOut" }}
              className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-white/50"
            >
              Machine Learning Engineer · Shopify
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
              className="max-w-[820px] text-[13cqi] font-semibold leading-[0.86] tracking-normal text-white md:text-[8cqi] lg:text-[6.4cqi]"
            >
              Sai Paladugu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              className="mt-7 max-w-[620px] text-base leading-relaxed text-white/68 md:text-xl"
            >
              Passionate about machine learning for drug discovery, predictive
              modeling, and computer vision. B.CS Honours with a Math minor from
              Carleton University.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="https://github.com/SaiPaladugu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-colors hover:bg-white/85"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/saipaladugu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:saichandan03@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#experience"
            aria-label="Scroll to experience"
            className="text-white/40 transition-colors hover:text-white"
          >
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </header>

      {/* Experience */}
      <Section id="experience" index="01" title="Experience">
        <div className="divide-y divide-white/10">
          {experiences.map((exp) => (
            <EntryRow
              key={`${exp.company}-${exp.period}`}
              meta={
                <>
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </>
              }
            >
              <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
              <p className="mt-0.5 text-sm text-white/50">{exp.company}</p>
              <ul className="mt-4 space-y-2.5">
                {exp.bullets.map((bullet) => (
                  <Bullet key={bullet}>{bullet}</Bullet>
                ))}
              </ul>
            </EntryRow>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" index="02" title="Projects">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeIn}
              className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.06]"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold leading-snug text-white transition-colors group-hover:text-[#f4dfb8]">
                  {project.title}
                </h3>
                <div className="flex shrink-0 items-center gap-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="p-1 text-white/40 transition-colors hover:text-white"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} — live`}
                      className="p-1 text-white/40 transition-colors hover:text-white"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
              {project.award && (
                <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-[#f4dfb8]/25 bg-[#f4dfb8]/10 px-3 py-1 text-xs font-medium text-[#f4dfb8]">
                  <Award className="h-3 w-3" />
                  {project.award}
                </span>
              )}
              <p className="mt-3 font-mono text-[11px] leading-relaxed text-white/35">
                {project.tech}
              </p>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-white/60">
                {project.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      {/* Education */}
      <Section id="education" index="03" title="Education">
        <div className="divide-y divide-white/10">
          <EntryRow meta={<p>Graduated April 2026</p>}>
            <h3 className="text-lg font-semibold text-white">
              Carleton University
            </h3>
            <p className="mt-0.5 text-sm text-white/50">
              Bachelor of Computer Science (Honours), Minor in Math
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#f4dfb8]/25 bg-[#f4dfb8]/10 px-3 py-1 text-xs font-medium text-[#f4dfb8]">
                GPA 4.0 / 4.0
              </span>
              {honours.map((honour) => (
                <span
                  key={honour}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                >
                  <Award className="h-3 w-3 text-white/40" />
                  {honour}
                </span>
              ))}
            </div>
          </EntryRow>
          <EntryRow meta={<p>Sep 2018 – Jun 2021</p>}>
            <h3 className="text-lg font-semibold text-white">
              Colonel By Secondary School
            </h3>
            <p className="mt-0.5 text-sm text-white/50">
              International Baccalaureate Diploma
            </p>
          </EntryRow>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" index="04" title="Skills">
        <div className="divide-y divide-white/10">
          {skillGroups.map((group) => (
            <Reveal
              key={group.title}
              className="grid gap-3 py-8 first:pt-0 last:pb-0 md:grid-cols-[240px_1fr] md:gap-10"
            >
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-white/50 md:pt-1.5">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Volunteering */}
      <Section id="volunteering" index="05" title="Volunteering">
        <EntryRow meta={<p>Jan – Apr 2023</p>}>
          <h3 className="text-lg font-semibold text-white">Mentor</h3>
          <p className="mt-0.5 text-sm text-white/50">Technovation Girls</p>
          <ul className="mt-4 space-y-2.5">
            <Bullet>
              Mentored a team that became global semifinalists, fostering skills
              in innovation and teamwork
            </Bullet>
            <Bullet>
              Guided young women in developing entrepreneurial skills and
              technological solutions for real-world problems
            </Bullet>
          </ul>
        </EntryRow>
      </Section>

      {/* Contact / Footer */}
      <footer id="contact" className="border-t border-white/10">
        <div className="mx-auto w-full max-w-[1240px] px-6 py-24 md:px-10 md:py-28">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/50">
              Contact
            </p>
            <h2 className="mt-6 max-w-[640px] text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              Let&apos;s connect.
            </h2>
            <p className="mt-5 max-w-[480px] text-base leading-relaxed text-white/60">
              Always open to discussing new opportunities, interesting projects,
              and collaborations.
            </p>
            <a
              href="mailto:saichandan03@gmail.com"
              className="mt-8 inline-flex items-center gap-2 text-lg text-white underline decoration-white/30 underline-offset-8 transition-colors hover:text-[#f4dfb8] hover:decoration-[#f4dfb8]/50"
            >
              saichandan03@gmail.com
              <ArrowUpRight className="h-5 w-5" />
            </a>
          </Reveal>
          <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
            <p className="font-mono text-xs text-white/30">
              © {new Date().getFullYear()} Sai Paladugu · Toronto, ON
            </p>
            <div className="flex items-center gap-1">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...(href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="p-2 text-white/40 transition-colors hover:text-white"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
