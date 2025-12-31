export type BlogType = {
  title: string;
  description: string;
  date: string;
  slug: string;
  image: string;
};

const blogs: BlogType[] = [
  {
    title: "System Design for Fullstack Developers",
    description:
      "A comprehensive guide to designing scalable systems as a fullstack developer",
    date: "23/12/2025",
    slug: "system-design-for-fullstack-developers",
    image: "/images/blogs/system-design.PNG",
  },

  {
    title: "Advanced Design Patterns for React.js",
    description:
      "Master advanced React design patterns including render props, compound components, hooks patterns, and more",
    date: "23/12/2025",
    slug: "advanced-design-patterns-for-react",
    image: "/images/blogs/design-patterns.PNG",
  },
  {
    title: "How I Create Scalable Fullstack Applications",
    description:
      "A practical walkthrough of building scalable fullstack apps using React, Next.js, TypeScript, Tailwind, Prisma, PostgreSQL, MongoDB, Redis, Clerk, Arcjet and more",
    date: "23/12/2025",
    slug: "how-i-create-scalable-fullstack-application",
    image: "/images/blogs/scalable-application.PNG",
  },
  {
    title: "How to Create Advanced Re-usable Components Like shadcn/ui",
    description:
      "Learn the patterns and techniques behind shadcn/ui by leveraging Radix UI primitives and building professional, accessible component libraries",
    date: "23/12/2025",
    slug: "how-to-create-advanced-reusable-components-like-shadcnui",
    image: "/images/blogs/shadcn-component.PNG",
  },
  {
    title:
      "Mastering JavaScript Promises: A Guide to Polyfills and Advanced Techniques",
    description:
      "Deep dive into JavaScript Promises, from basics to advanced patterns, and how to implement polyfills for older browsers",
    date: "23/12/2025",
    slug: "mastering-javascript-promise-with-polyfills",
    image: "/images/blogs/javascript-promise.PNG",
  },
];

export default blogs;
