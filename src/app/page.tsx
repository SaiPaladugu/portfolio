"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundPaths } from "@/components/ui/background-paths";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Code2,
  BrainCircuit,
  Cloud,
  Database,
  Container,
  Heart,
} from "lucide-react";

// --- Data ---

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "Shopify",
    location: "Toronto, ON",
    period: "Jan 2026 – Apr 2026",
    bullets: [
      "Architected an E2E ML pipeline using XGBoost, dbt, and Airflow to predict conversion value for real-time ad auctions, increasing bid efficiency by 15% and generating $15M yearly in incremental revenue",
      "Engineered an online Multi-Armed Bandit (Thompson Sampling) framework for ad creative selection, solving the cold-start problem and boosting aggregate click-through rate by 25%",
    ],
  },
  {
    title: "Machine Learning Research Intern",
    company: "Valence Labs",
    location: "Mila AI Institute, QC",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Designed active learning pipelines using uncertainty estimation to optimize data sampling efficiency, saving $40k in data acquisition costs for training in sparse-data regimes",
      "Engineered generative geometric deep learning models (GNNs) for 3D graph-structured data, implementing multi-objective optimization to satisfy 94% of complex structural constraints",
    ],
  },
  {
    title: "Machine Learning Research Intern",
    company: "Recursion",
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
      "Engineered a MCP microservice to standardize the retrieval of proprietary data from an internal LLM store, reducing data preparation latency by 60% for domain specific training",
      "Built large-scale, Dockerized, Kubernetes-orchestrated microservices to source, validate, and register 100+ LLMs from HuggingFace into Nokia's MLFlow based model registry",
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
    title: "Scribble - Graffiti in AR",
    tech: "Augmented Reality, zk-Proofs, Cohere, React, NextJS",
    description:
      "Leveraged vector embeddings and similarity search to personalize geotagged AR scribbles; used zk-proofs for secure location-based access control",
    github: "https://github.com/SaiPaladugu/UofTHacks2025",
    award: "Winner - UofTHacks 12 2025",
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

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    tagColor: "bg-blue-100 text-blue-800",
    skills: ["Python", "R", "Java", "C++", "SQL", "JavaScript", "Bash", "Scala"],
  },
  {
    title: "ML & Data Science",
    icon: BrainCircuit,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    tagColor: "bg-emerald-100 text-emerald-800",
    skills: [
      "TensorFlow",
      "PyTorch",
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
    icon: Container,
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    tagColor: "bg-violet-100 text-violet-800",
    skills: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitLab CI",
      "Jenkins",
      "Airflow",
      "Argo Workflows",
      "MLflow",
      "DVC",
      "Git",
    ],
  },
  {
    title: "Cloud & API",
    icon: Cloud,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    tagColor: "bg-orange-100 text-orange-800",
    skills: ["AWS", "S3", "EC2", "SageMaker", "EKS", "Kafka", "FastAPI", "Flask"],
  },
  {
    title: "Databases & Data Stores",
    icon: Database,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    tagColor: "bg-indigo-100 text-indigo-800",
    skills: [
      "MySQL",
      "MongoDB",
      "Elasticsearch",
      "Pinecone",
      "ChromaDB",
      "GraphDB",
    ],
  },
];

// --- Animation variants ---

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

// --- Section Component ---

function Section({
  id,
  title,
  icon: Icon,
  children,
  className = "",
}: {
  id: string;
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          custom={0}
          className="flex items-center justify-center gap-3 mb-16"
        >
          <Icon className="w-8 h-8 text-neutral-400" />
          <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
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
    { href: "#home", label: "Home" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200/50 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-xl font-bold tracking-tight text-neutral-900">
            SP
          </a>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/SaiPaladugu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/saipaladugu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:Saichandan03@gmail.com"
              className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

// --- Page ---

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />

      {/* Hero with BackgroundPaths */}
      <div id="home">
        <BackgroundPaths
          title="Sai Paladugu"
          subtitle="Computer Science · Machine Learning"
          description="Passionate about machine learning for drug discovery, predictive modeling, and computer vision. Pursuing a B.CS Honours with a Math minor at Carleton University."
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            <a
              href="https://github.com/SaiPaladugu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 text-white text-sm font-medium 
                hover:bg-neutral-800 transition-all hover:scale-105 hover:shadow-lg"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/saipaladugu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-medium 
                hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-lg"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href="mailto:Saichandan03@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-300 text-neutral-700 text-sm font-medium 
                hover:border-neutral-400 hover:bg-neutral-50 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <a href="#experience" className="inline-block">
              <ChevronDown className="w-6 h-6 text-neutral-400 animate-bounce" />
            </a>
          </motion.div>
        </BackgroundPaths>
      </div>

      {/* Experience */}
      <Section id="experience" title="Experience" icon={BookOpen}>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              custom={i}
              className="group relative bg-neutral-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl 
                transition-all duration-300 border border-transparent hover:border-neutral-200"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-lg font-semibold text-neutral-700">{exp.company}</p>
                  <div className="flex items-center gap-2 text-neutral-500 text-sm mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </div>
                </div>
                <span className="flex items-center gap-2 text-sm text-neutral-400 mt-2 md:mt-0 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="relative pl-5 text-neutral-600 leading-relaxed text-[15px]"
                  >
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-neutral-300" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title="Projects" icon={Code2} className="bg-neutral-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 
                border border-neutral-100 hover:border-neutral-200 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-neutral-900 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-400 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              {project.award && (
                <div className="mb-3">
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold border border-amber-200">
                    <Award className="w-3 h-3" />
                    {project.award}
                  </span>
                </div>
              )}
              <p className="text-xs text-neutral-400 mb-3 font-medium">{project.tech}</p>
              <p className="text-sm text-neutral-600 leading-relaxed flex-grow">
                {project.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education" icon={BookOpen}>
        <div className="max-w-4xl mx-auto space-y-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-8 border border-blue-100"
          >
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-neutral-900 mb-2">
                Carleton University
              </h3>
              <p className="text-lg font-semibold text-neutral-700 mb-1">
                Bachelor of Computer Science (Honours), Minor in Math
              </p>
              <p className="text-sm text-neutral-500 mb-4">Expected: April 2026</p>
              <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-1.5 rounded-full text-sm font-bold">
                GPA: 4.0
              </span>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
            className="rounded-2xl bg-neutral-50 p-8 border border-neutral-200"
          >
            <h3 className="text-2xl font-bold text-neutral-900 mb-2">
              Colonel By Secondary School
            </h3>
            <p className="text-lg font-semibold text-neutral-700 mb-1">
              International Baccalaureate Diploma
            </p>
            <p className="text-sm text-neutral-500 mb-4">Sep 2018 – Jun 2021</p>
            <span className="inline-block bg-slate-100 text-slate-700 px-4 py-1.5 rounded-full text-sm font-semibold">
              IB Diploma
            </span>
          </motion.div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills" icon={BrainCircuit} className="bg-neutral-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={staggerItem}
              className="bg-white rounded-2xl p-6 border border-neutral-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${category.bgColor}`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`${category.tagColor} px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Volunteering */}
      <Section id="volunteering" title="Volunteering" icon={Heart}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
            className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-neutral-900">Mentor</h3>
                <p className="text-lg font-semibold text-neutral-700">Technovation Girls</p>
                <div className="flex items-center gap-2 text-neutral-500 text-sm mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  Education
                </div>
              </div>
              <span className="flex items-center gap-2 text-sm text-neutral-400 mt-2 md:mt-0 font-medium">
                <Calendar className="w-3.5 h-3.5" />
                Jan – Apr 2023
              </span>
            </div>
            <ul className="space-y-2 mt-4">
              <li className="relative pl-5 text-neutral-600 leading-relaxed text-[15px]">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-neutral-300" />
                Mentored a team that became global semifinalists, fostering skills in innovation and teamwork
              </li>
              <li className="relative pl-5 text-neutral-600 leading-relaxed text-[15px]">
                <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-neutral-300" />
                Guided young women in developing entrepreneurial skills and technological solutions for real-world problems
              </li>
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-neutral-950 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={0}
          >
            <h3 className="text-3xl font-bold mb-4 tracking-tight">Let&apos;s Connect</h3>
            <p className="text-neutral-400 mb-8 max-w-md mx-auto">
              Always open to discussing new opportunities, interesting projects, and
              collaborations.
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <a
                href="https://github.com/SaiPaladugu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-all hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/saipaladugu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-all hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:Saichandan03@gmail.com"
                className="p-3 rounded-full bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-neutral-600 text-sm">
              &copy; {new Date().getFullYear()} Sai Paladugu
            </p>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
