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
    `Earlier, I was the primary developer on <strong>Schooldesk</strong> from its
     inception — building everything from NFC attendance and canteen POS to a PWA
     that grew to 3,600+ monthly active users. I graduated from
     <a href="https://www.knust.edu.gh/">KNUST</a> with a B.Sc. in Computer
     Engineering, and I'm drawn to code optimisation, machine learning, and cloud
     infrastructure.`,
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
      "Primary developer on the Schooldesk platform since its 2018 inception — 1,500+ commits across 6 repos, building NFC attendance, canteen POS, transport, visitor logs, diary, classroom, and store/inventory modules.",
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
      "An end-to-end school management platform I've built since its inception — spanning NFC attendance, canteen POS, transport, visitor logs, a real-time school–guardian diary, classroom management, and store/inventory. Grew to 3,600+ monthly active users and 15,000+ push subscribers across native mobile apps, a PWA, and a Node.js backend.",
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
/*  Archive — compact "other noteworthy projects" grid.                */
/*  All from real client work. Add github/external links if any go     */
/*  public; otherwise they render as non-linked cards.                 */
/* ------------------------------------------------------------------ */
export const archive: Project[] = [
  {
    name: "Kargonet",
    description:
      "Logistics & delivery platform — a driver app, logistics app, admin dashboard, and TypeScript/SQL backend.",
    tech: ["React Native", "TypeScript", "SQL"],
    github: "",
    external: "",
  },
  {
    name: "Workspace Global",
    description:
      "Project-management suite built on a microservice backend with a manager-facing frontend.",
    tech: ["TypeScript", "PHP", "React"],
    github: "",
    external: "",
  },
  {
    name: "Virtual Career Guide",
    description:
      "Career-guidance platform with an admin console, a Flutter mobile app, and a Prisma/PostgreSQL backend.",
    tech: ["React", "Flutter", "Prisma"],
    github: "",
    external: "",
  },
  {
    name: "Nextchange",
    description:
      "E-commerce / SaaS platform with an admin console and a TypeScript service backend.",
    tech: ["React", "TypeScript", "SQL"],
    github: "",
    external: "",
  },
  {
    name: "ReadyDesk",
    description:
      "A SaaS support-desk product built on Laravel with a React frontend.",
    tech: ["Laravel", "PHP", "React"],
    github: "",
    external: "",
  },
  {
    name: "Rango",
    description:
      "Transportation mobile app and Node.js backend for ride and trip management.",
    tech: ["React Native", "Node.js"],
    github: "",
    external: "",
  },
  {
    name: "MyTroTro",
    description:
      "Backend services for a public-transport (trotro) platform connecting riders and routes.",
    tech: ["PHP", "MySQL"],
    github: "",
    external: "",
  },
  {
    name: "Mission1000",
    description:
      "A social-impact web app supporting a community giving and mobilisation initiative.",
    tech: ["React", "TypeScript"],
    github: "",
    external: "",
  },
  {
    name: "Template8",
    description:
      "A website/landing-page templating tool for spinning up branded sites quickly.",
    tech: ["Python", "HTML", "CSS"],
    github: "",
    external: "",
  },
  {
    name: "Kenea",
    description: "An e-commerce website built with a PHP and Vue stack.",
    tech: ["PHP", "Vue"],
    github: "",
    external: "",
  },
  {
    name: "CakeHome GH",
    description: "An e-commerce storefront for a Ghanaian bakery brand.",
    tech: ["PHP", "SCSS", "JavaScript"],
    github: "",
    external: "",
  },
  {
    name: "Sunpower Innovations",
    description: "Corporate marketing website for a solar-energy company.",
    tech: ["Web", "JavaScript"],
    github: "",
    external: "",
  },
];
