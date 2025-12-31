export type ProjectType = {
  slug: string;
  name: string;
  status: string;
  role: string;
  team: string;
  timeline: string;
  liveLink: string;
  githubLink: string;
  image: string;
  technologies: string[];
  mainTechnologies: number;
  otherTechnologies: number;
  description: string;
};

const projects = [
  {
    slug: "learnstack",
    name: "LearnStack",
    status: "Working",
    role: "Full Stack",
    team: "Solo",
    timeline: "Six Week",
    liveLink: "",
    githubLink: "https://github.com/mehedihasanshefat/learnstack-lms.git",
    image: "/images/projects/learnstack.PNG",
    technologies: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "postgresql",
      "prisma",
      "shadcn",
    ],
    mainTechnologies: 5,
    otherTechnologies: 0,
    description:
      "A modern Learning Management System (LMS) built to deliver online courses, manage students, track progress, and provide a seamless learning experience. The platform includes features such as user authentication, course creation, lesson management, quizzes, progress tracking, and an intuitive dashboard for both instructors and learners.",
  },
  {
    slug: "eventhut",
    name: "EventHut",
    status: "Completed",
    role: "Full Stack",
    team: "Solo",
    timeline: "One Week",
    liveLink: "https://eventhut-bd.vercel.app/",
    githubLink: "https://github.com/mehedihasanshefat/eventhut.git",
    image: "/images/projects/eventhut.PNG",
    technologies: ["nextjs", "typescript", "tailwindcss", "mongodb", "prisma"],
    mainTechnologies: 5,
    otherTechnologies: 4,
    description:
      "EventHut is a modern full-stack event management platform built with Next.js and TypeScript. It allows users to discover events, purchase tickets, and manage their own events through a clean and intuitive interface. With secure authentication, form validation, and a dedicated profile dashboard, EventHut delivers a smooth and reliable event booking.",
  },
  {
    slug: "mhsventures",
    name: "MHSVentures",
    status: "Completed",
    role: "Full Stack",
    team: "Solo",
    timeline: "Three Weeks",
    liveLink: "https://mhs-ventures.vercel.app/",
    githubLink: "https://github.com/mehedihasanshefat/mhs-ventures.git",
    image: "/images/projects/mhsventures.PNG",
    technologies: [
      "nextjs",
      "typescript",
      "tailwindcss",
      "postgresql",
      "prisma",
      "motion",
    ],
    mainTechnologies: 6,
    otherTechnologies: 3,
    description:
      "MhsVentures is a modern, animated startup submission platform built with Next.js 16, TypeScript, Tailwind CSS, PostgreSQL, Prisma ORM, and Framer Motion. The project focuses on providing a smooth and interactive user experience for submitting, showcasing, and managing startup projects.",
  },
  {
    slug: "nike-clone",
    name: "NikeClone",
    status: "Completed",
    role: "Full Stack",
    team: "Solo",
    timeline: "One Week",
    liveLink: "https://nike-clone-v1.vercel.app/",
    githubLink: "https://github.com/mehedihasanshefat/nike-clone-v1.git",
    image: "/images/projects/nike-clone.PNG",
    technologies: ["nextjs", "typescript", "tailwindcss", "postgresql"],
    mainTechnologies: 4,
    otherTechnologies: 3,
    description:
      "Nike-style eCommerce built with Next.js, Drizzle ORM, and Better Auth. In this project, you’ll master prompting as Devin helps generate sleek product pages powered by Next.js 15, TypeScript, and TailwindCSS.",
  },
  {
    slug: "valorant-redesign",
    name: "Valorant Redesign",
    status: "Completed",
    role: "Frontend",
    team: "Solo",
    timeline: "One Week",
    liveLink: "https://valorant-redesign-v1.vercel.app/",
    githubLink: "https://github.com/mehedihasanshefat/valorant-redesign.git",
    image: "/images/projects/valorant.PNG",
    technologies: ["reactjs", "tailwindcss", "gsap"],
    mainTechnologies: 3,
    otherTechnologies: 0,
    description:
      "A minimal and visually striking Valorant landing page built with React, Tailwind CSS, and GSAP. The project focuses on smooth animations, clean layout, and modern UI design inspired by Riot Games’ Valorant aesthetic.",
  },
  {
    slug: "gta6-landing-clone",
    name: "GTA6 Landing Clone",
    status: "Completed",
    role: "Frontend",
    team: "Solo",
    timeline: "One Week",
    liveLink: "https://gta-six-landing-clone.vercel.app/",
    githubLink:
      "https://github.com/mehedihasanshefat/gta-six-landing-clone.git",
    image: "/images/projects/gta6.PNG",
    technologies: ["reactjs", "tailwindcss", "gsap"],
    mainTechnologies: 3,
    otherTechnologies: 0,
    description: "A clone of the latest GTA 6 landing page.",
  },
];

export default projects;
// Nike-style eCommerce built with Devin AI, Next.js, Drizzle ORM, and Better Auth. In this project, you’ll master prompting as Devin helps generate sleek product pages powered by Next.js 15, TypeScript, and TailwindCSS.
