/* ==================================================================
 *  SITE CONTENT  —  edit everything here. No other file needs touching
 *  to change what the site says.
 *
 *  Sourced from Dieu-Donne Nazzah's resume. Items marked  // TODO  are
 *  spots where adding a real link / image / extra project would help.
 * ================================================================== */

export const site = {
  name: "Dieu-Donne Nazzah",
  shortName: "DDN",
  role: "Full-Stack Engineer & CTO",
  // One-line tagline under the name in the hero.
  tagline: "I design, build, and scale user-centered software.",
  location: "Accra, Ghana",
  email: "dieudonnenazzah@gmail.com",
  phone: "+233 (0) 20 132 9311",
  // Hosted resume PDF (leave "" to hide the button).
  resumeUrl:
    "https://drive.google.com/file/d/1wyWt80my9HUC3hsxTSSLB5FLq64Vp5Kj/view?usp=sharing",
  // Short intro shown in the hero, beneath the role.
  intro:
    "I'm a full-stack engineer and CTO with 7+ years designing, building, and scaling user-centered web and mobile products — pairing deep technical work across the React and Node ecosystems with hands-on leadership of cross-functional teams.",
};

export type Social = { label: string; url: string; icon: SocialIcon };
export type SocialIcon = "github" | "linkedin" | "twitter" | "email";

export const socials: Social[] = [
  { label: "GitHub", url: "https://github.com/ddnazzah", icon: "github" },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/dieudonnenazzah",
    icon: "linkedin",
  },
  {
    label: "Email",
    url: "mailto:dieudonnenazzah@gmail.com",
    icon: "email",
  },
];

/* ------------------------------------------------------------------ */
/*  About — short paragraphs. Use <a> tags for links.                  */
/* ------------------------------------------------------------------ */
export const about = {
  paragraphs: [
    `I'm a full-stack engineer and CTO based in Accra, Ghana, with 7+ years
     spent designing, building, and scaling user-centered web and mobile
     applications. I combine deep technical work across React, TypeScript, and
     Node.js with hands-on leadership of cross-functional teams.`,
    `Today I lead engineering at <a href="#" data-noexternal>BenchFive</a>, where
     I head a team of eight developers across 12+ client products spanning
     EdTech, real estate, logistics, and SaaS. I've delivered DevOps pipelines,
     hardened production infrastructure to 97%+ uptime, and shaped the technical
     architecture that keeps it all running.`,
    `I'm also a core engineer on <strong>Schooldesk</strong>, where I've been the
     primary developer of the staff and guardian apps since its early days —
     building features like NFC attendance, canteen POS, and a real-time
     school–guardian diary, and helping grow the platform to 3,600+ monthly active
     users. I graduated from <a href="https://www.knust.edu.gh/">KNUST</a> with a
     B.Sc. in Computer Engineering, and I'm drawn to code optimisation, machine
     learning, and cloud infrastructure.`,
  ],
  // Optional portrait image placed in /public. Leave "" to hide it.
  photo: "",
};

/* ------------------------------------------------------------------ */
/*  Skills — grouped, from the resume.                                 */
/* ------------------------------------------------------------------ */
export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "PHP", "GraphQL", "SQL", "Python"],
  },
  {
    group: "Libraries & Frameworks",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "React Native",
      "Electron",
      "NestJS",
      "Laravel",
      "Redux",
      "Prisma",
      "Tailwind CSS",
    ],
  },
  {
    group: "Tools & Platforms",
    items: [
      "Git",
      "GitHub Actions",
      "Docker",
      "Bun",
      "PostgreSQL",
      "GCP",
      "Digital Ocean",
      "Firebase",
      "Nginx",
      "Sentry",
      "Stripe",
      "Paystack",
      "Figma",
    ],
  },
  {
    group: "Leadership",
    items: [
      "Team management",
      "Code review",
      "CI/CD",
      "Security auditing",
      "System architecture",
      "Agile development",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Experience — most recent first.                                    */
/* ------------------------------------------------------------------ */
export type Job = {
  company: string;
  title: string;
  url?: string;
  start: string;
  end: string;
  points: string[];
};

export const experience: Job[] = [
  {
    company: "BenchFive",
    title: "CTO / Full-Stack Engineer",
    url: "", // TODO: add company URL if available
    start: "2021",
    end: "Present",
    points: [
      "Lead a team of 8 developers across 12+ client products spanning EdTech, real estate, logistics, and SaaS, serving thousands of users.",
      "Architected and delivered full-stack web and mobile apps with React, Next.js, React Native, NestJS, Laravel, and PostgreSQL — 2,200+ commits across 30+ repositories.",
      "Manage production VPS infrastructure at 97%+ uptime through proactive monitoring, server hardening, and automated scaling.",
      "Implemented security practices: vulnerability scanning, dependency auditing, SSL/TLS management, and regular penetration assessments.",
      "Define technical architecture and conduct code reviews, mentoring junior and mid-level engineers.",
    ],
  },
  {
    company: "SpringKnight",
    title: "Full-Stack Engineer",
    url: "",
    start: "2023",
    end: "Present",
    points: [
      "Shipped FlowVoice, a cross-platform AI dictation desktop app (Electron + Bun), cutting end-to-end latency ~70% via a real-time streaming transcription pipeline.",
      "Primary developer of the Schooldesk staff and guardian apps since 2018 — 1,500+ commits across 6 repos, building modules like NFC attendance, canteen POS, transport, visitor logs, diary, classroom, and store/inventory.",
      "Built backend API features (Node.js) and the Schooldesk PWA, growing the platform to 3,600+ monthly active users and 15,000+ push-notification subscribers.",
      "Shipped the Classroom module and a real-time diary feature for school–guardian communication.",
      "Implemented Sentry for error tracking and eliminated unnecessary re-renders, improving stability and performance across mobile, PWA, and backend.",
    ],
  },
  {
    company: "Stakester",
    title: "Senior Frontend Developer",
    url: "",
    start: "2022",
    end: "2022",
    points: [
      "Architected a real-time challenges feature for competitive user interactions with React Native and Firebase — 140 commits in 4 months.",
      "Integrated mParticle analytics and built reusable UI components, surfacing data-driven insights that informed product prioritization.",
      "Mentored 2 junior developers through code reviews and technical workshops.",
    ],
  },
];

export const education = {
  school: "Kwame Nkrumah University of Science and Technology (KNUST)",
  degree: "B.Sc. Computer Engineering",
  start: "2015",
  end: "2019",
};

/* ------------------------------------------------------------------ */
/*  "By the numbers" — headline stats (from git contribution report).  */
/* ------------------------------------------------------------------ */
export const stats: { value: string; label: string }[] = [
  { value: "7+", label: "Years building" },
  { value: "2,275+", label: "Commits shipped" },
  { value: "30+", label: "Repositories" },
  { value: "12+", label: "Products delivered" },
];

/* ------------------------------------------------------------------ */
/*  Featured projects — derived from real work. Add links/images.      */
/* ------------------------------------------------------------------ */
export type Project = {
  name: string;
  description: string;
  tech: string[];
  image?: string; // file in /public, e.g. "projects/foo.png". Optional.
  github?: string;
  external?: string; // live demo / site
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Schooldesk",
    description:
      "A school management platform where I'm the primary developer of the staff and guardian apps — building NFC attendance, canteen POS, transport, visitor logs, a real-time school–guardian diary, classroom management, and store/inventory. The apps reach 3,600+ monthly active users and 15,000+ push subscribers across native mobile, a PWA, and a Node.js backend.",
    tech: ["React", "React Native", "Node.js", "PWA", "PostgreSQL", "Sentry"],
    image: "",
    github: "",
    external: "", // TODO: add live link if public
    featured: true,
  },
  {
    name: "Trinity",
    description:
      "A social-impact platform and my largest single codebase to date — 537 commits and 60k+ net lines of TypeScript and React powering community engagement and giving. Built end-to-end and maintained over its first year.",
    tech: ["React", "TypeScript", "Node.js"],
    image: "",
    github: "",
    external: "",
    featured: true,
  },
  {
    name: "Diffstone Real Estate",
    description:
      "A full real-estate platform for listing, discovering, and managing properties — a React/TypeScript customer-facing app, a PHP/Laravel backend, and a dedicated marketing site, delivered over 380+ commits.",
    tech: ["React", "TypeScript", "PHP", "Laravel"],
    image: "",
    github: "",
    external: "",
    featured: true,
  },
  {
    name: "Testoria Exam Suite",
    description:
      "An online examination and assessment suite for education and certification — an exam platform, a candidate web app, an admin console, and a Prisma/PostgreSQL backend, all in TypeScript.",
    tech: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
    image: "",
    github: "",
    external: "",
    featured: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Archive — the full "everything I've worked on" list, shown as a     */
/*  table on the dedicated /archive page. Sourced from the git          */
/*  contribution report; sub-repos consolidated into single products.   */
/*  Add a `link` if/when a project becomes publicly viewable.           */
/* ------------------------------------------------------------------ */
export type ArchiveEntry = {
  year: string;
  title: string;
  madeAt: string;
  builtWith: string[];
  link?: string;
};

export const archiveTable: ArchiveEntry[] = [
  {
    year: "2026",
    title: "FlowVoice",
    madeAt: "SpringKnight",
    builtWith: ["Electron", "Bun", "TypeScript", "React"],
  },
  {
    year: "2026",
    title: "Mission1000",
    madeAt: "BenchFive",
    builtWith: ["React", "TypeScript"],
  },
  {
    year: "2026",
    title: "Ozapp",
    madeAt: "BenchFive",
    builtWith: ["React Native"],
  },
  {
    year: "2025",
    title: "Testoria",
    madeAt: "BenchFive",
    builtWith: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL"],
  },
  {
    year: "2025",
    title: "Nextchange",
    madeAt: "BenchFive",
    builtWith: ["React", "TypeScript", "SQL"],
  },
  {
    year: "2025",
    title: "Kargonet",
    madeAt: "BenchFive",
    builtWith: ["React Native", "TypeScript", "SQL"],
  },
  {
    year: "2025",
    title: "Virtual Career Guide",
    madeAt: "BenchFive",
    builtWith: ["React", "Flutter", "Prisma"],
  },
  {
    year: "2025",
    title: "Creative Arts Agency",
    madeAt: "BenchFive",
    builtWith: ["React"],
  },
  {
    year: "2024",
    title: "Workspace Global",
    madeAt: "BenchFive",
    builtWith: ["TypeScript", "PHP", "React"],
  },
  {
    year: "2024",
    title: "Diffstone Real Estate",
    madeAt: "BenchFive",
    builtWith: ["React", "TypeScript", "PHP", "Laravel"],
  },
  {
    year: "2024",
    title: "Template8",
    madeAt: "BenchFive",
    builtWith: ["Python", "HTML", "CSS"],
  },
  {
    year: "2023",
    title: "MyTroTro",
    madeAt: "BenchFive",
    builtWith: ["PHP", "MySQL"],
  },
  {
    year: "2023",
    title: "ReadyDesk",
    madeAt: "BenchFive",
    builtWith: ["Laravel", "PHP", "React"],
  },
  {
    year: "2023",
    title: "Kenea",
    madeAt: "BenchFive",
    builtWith: ["PHP", "Vue"],
  },
  {
    year: "2023",
    title: "CakeHome GH",
    madeAt: "BenchFive",
    builtWith: ["PHP", "SCSS", "JavaScript"],
  },
  {
    year: "2023",
    title: "Sunpower Innovations",
    madeAt: "BenchFive",
    builtWith: ["JavaScript", "HTML"],
  },
  {
    year: "2022",
    title: "Rango",
    madeAt: "BenchFive",
    builtWith: ["React Native", "Node.js"],
  },
  {
    year: "2022",
    title: "Stakester — Real-time Challenges",
    madeAt: "Stakester",
    builtWith: ["React Native", "Firebase"],
  },
  {
    year: "2021",
    title: "Trinity",
    madeAt: "MyShabo",
    builtWith: ["React", "TypeScript", "Node.js"],
  },
  {
    year: "2018",
    title: "Schooldesk",
    madeAt: "SpringKnight",
    builtWith: ["React", "React Native", "Node.js", "PWA", "PostgreSQL"],
  },
];
