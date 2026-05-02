const GITHUB_URL = "https://github.com/mohit716";
const LINKEDIN_URL = "https://www.linkedin.com/in/mohit-sharma-msh8/";
const EMAIL = "mohitsharmamsh8@gmail.com";
const RESUME_PATH = "/Mohit_Sharma_Resume.pdf";

function GitHubIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l9 5.5 9-5.5M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
    </svg>
  );
}

function DownloadIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </svg>
  );
}

function NavBar() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#top" className="text-sm font-semibold tracking-wide text-white">
          Mohit Sharma
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-sky-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-4 py-1.5 text-sm font-semibold text-sky-200 transition hover:bg-sky-400/20"
        >
          <DownloadIcon />
          Resume
        </a>
      </div>
    </nav>
  );
}

export default function Portfolio() {
  const featuredProjects = [
    {
      title: "Inventory App",
      subtitle: "Full-Stack Inventory Management Application",
      description:
        "Built a full-stack inventory management system with a React frontend, FastAPI backend, and MongoDB database. The application supports product management, validation, search, pagination, and protected write operations using API-key based authorization.",
      stack: ["React", "FastAPI", "MongoDB", "Pydantic", "Python"],
      link: "https://github.com/mohit716/inventory-app",
    },
    {
      title: "AutoQA",
      subtitle: "AI-Assisted API Testing and Reporting Tool",
      description:
        "Built an automation-oriented QA tool that uses AI to generate API test cases, execute them, analyze failures, and produce reports. The project is designed to reduce manual effort in API testing while improving test coverage and developer feedback.",
      stack: ["Python", "FastAPI", "GitHub Actions", "HTML Reports", "LLM Integration"],
      link: "https://github.com/mohit716/autoqa",
    },
    {
      title: "Model Fine-Tuning Platform",
      subtitle: "Self-Hosted LLM Fine-Tuning Workflow Platform",
      description:
        "Designed a platform for managing LLM fine-tuning workflows, including dataset handling, job management, asynchronous processing, and inference support. This project reflects system-level thinking through backend architecture, job orchestration, and ML workflow management.",
      stack: ["FastAPI", "Redis", "Celery", "SQLite", "Python"],
      link: "https://github.com/mohit716/model-finetune-platform",
    },
    {
      title: "RAG Playground",
      subtitle: "Retrieval-Augmented Generation Application",
      description:
        "Built a local-first RAG application that ingests documents, retrieves relevant context, and generates answers grounded in retrieved content. The system includes document ingestion, embeddings, vector search, answer generation, and a frontend interface.",
      stack: ["FastAPI", "React", "ChromaDB", "Ollama", "Python"],
      link: "https://github.com/mohit716/rag-playground",
    },
  ];

  const otherProjects = [
    {
      title: "FileSaver",
      description:
        "A developer productivity CLI that simplifies Git workflows using plain-English style commands and AI-generated commit message support.",
      stack: ["Python", "Rich", "Ollama"],
      link: "https://github.com/mohit716/filesaver",
    },
    {
      title: "IPYNB to PDF Converter",
      description:
        "A Streamlit-based utility that converts Jupyter notebooks to PDF. Simple, useful, and immediately understandable for recruiters and users.",
      stack: ["Python", "Streamlit"],
      link: "https://github.com/mohit716/ipynb-to-pdf",
    },
    {
      title: "Memory Game",
      description:
        "An interactive React project showing frontend development, user interaction, and game logic with a polished project presentation angle.",
      stack: ["React", "JavaScript", "Firebase"],
      link: "https://github.com/mohit716/Memory_Game",
    },
  ];

  const skills = {
    Languages: ["Python", "Java", "JavaScript", "SQL", "C"],
    Frameworks: ["FastAPI", "React", "Spring Boot", "Streamlit"],
    Databases: ["MongoDB", "SQLite", "PostgreSQL", "Firebase"],
    Tools: ["Git", "GitHub Actions", "Redis", "Celery", "ChromaDB", "Ollama"],
  };

  return (
    <div id="top" className="min-h-screen bg-slate-950 text-slate-100">
      <NavBar />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-indigo-500/10 to-emerald-500/10" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-sky-300">Portfolio</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Mohit Sharma
            </h1>
            <p className="mt-4 text-xl text-slate-300 md:text-2xl">
              Software Engineer focused on backend, full-stack, and AI-integrated applications.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
              MS in Computer Science student at Drexel University building practical software systems with Python, FastAPI, React, MongoDB, and modern AI tooling. I enjoy creating software that connects real product value with clean engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-2xl bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5"
              >
                View Projects
              </a>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <DownloadIcon />
                Download Resume
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <GitHubIcon />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <MailIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-5 leading-8 text-slate-300">
              I am a Master of Science in Computer Science student at Drexel University with experience building backend, full-stack, and AI-integrated applications. I enjoy working on systems that are not only functional, but also practical, scalable, and easy to reason about.
            </p>
            <p className="mt-4 leading-8 text-slate-300">
              My background includes APIs, automation, databases, modern web development, and applied AI systems. I am especially interested in roles where I can contribute across engineering, product thinking, and system design while continuing to grow as a software engineer.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
            <h2 className="text-2xl font-semibold">Education</h2>
            <div className="mt-5 space-y-4 text-slate-300">
              <div>
                <p className="font-semibold text-white">Drexel University</p>
                <p>Master of Science in Computer Science</p>
              </div>
              <p className="leading-8 text-slate-400">
                Areas of study include software development, distributed systems, databases, networking, machine learning, and backend/web systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 pb-6 md:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-black/20">
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="rounded-2xl border border-white/10 bg-slate-900/50 p-5">
                <h3 className="text-lg font-semibold text-white">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-sm text-sky-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Selected Work</p>
          <h2 className="mt-3 text-3xl font-bold">Featured Projects</h2>
          <p className="mt-3 max-w-2xl text-slate-400">
            A curated set of projects showing my work across full-stack development, backend systems, automation, and AI-integrated software.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-sky-300/30"
            >
              <p className="text-sm uppercase tracking-wide text-sky-300">{project.subtitle}</p>
              <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-8 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center text-sm font-semibold text-sky-300 transition group-hover:text-sky-200"
              >
                View Repository →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Other Selected Work</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1 hover:border-sky-300/30"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center text-sm font-semibold text-sky-300 transition group-hover:text-sky-200"
              >
                View Repository →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="text-3xl font-bold">Let's build something useful.</h2>
              <p className="mt-4 max-w-2xl leading-8 text-slate-400">
                I am looking for software engineering opportunities where I can contribute to backend systems, full-stack applications, APIs, automation, and AI-enabled products.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <GitHubIcon />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <LinkedInIcon />
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  aria-label="Email"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <MailIcon />
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Contact</p>
              <div className="mt-4 space-y-3 text-slate-300">
                <a
                  className="flex items-center gap-3 hover:text-white"
                  href={`mailto:${EMAIL}`}
                >
                  <MailIcon className="h-4 w-4 shrink-0 text-sky-300" />
                  {EMAIL}
                </a>
                <a
                  className="flex items-center gap-3 hover:text-white"
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GitHubIcon className="h-4 w-4 shrink-0 text-sky-300" />
                  github.com/mohit716
                </a>
                <a
                  className="flex items-center gap-3 hover:text-white"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedInIcon className="h-4 w-4 shrink-0 text-sky-300" />
                  linkedin.com/in/mohit-sharma-msh8
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-slate-500 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Mohit Sharma. All rights reserved.</p>
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
