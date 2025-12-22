export type TechnologyType = {
  name: string;
  icon: string;
  color?: string;
};

export const technologies: Record<string, TechnologyType> = {
  reactjs: {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
  nextjs: {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "bg-teal-200/40 dark:bg-teal-200/20",
  },
  typescript: {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
  tailwindcss: {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "bg-cyan-100 dark:bg-cyan-900/30",
  },
  motion: {
    name: "Framer Motion",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    color: "bg-purple-100 dark:bg-purple-900/30",
  },
  nodejs: {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "bg-green-100 dark:bg-green-900/30",
  },
  mongodb: {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "bg-green-100 dark:bg-green-900/30",
  },
  postgresql: {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "bg-blue-100 dark:bg-blue-900/30",
  },
  prisma: {
    name: "Prisma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    color: "bg-indigo-100 dark:bg-indigo-900/30",
  },
  redux: {
    name: "Redux Toolkit",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    color: "bg-purple-100 dark:bg-purple-900/30",
  },
  zustand: {
    name: "Zustand",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
    color: "bg-amber-100 dark:bg-amber-900/30",
  },
  redis: {
    name: "Redis",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
    color: "bg-red-100 dark:bg-red-900/30",
  },
  // Add more as needed
};
