import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Mehedi Hasan Shefat",
  description:
    "Full-stack software developer specializing in modern web technologies.",
};

const techStackData = {
  frontend: [
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "TypeScript",
    "ShadcnUI",
    "Framer Motion",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Prisma ORM",
    "Better Auth",
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 py-20 md:py-28">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-start">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-lg border border-border">
              <Image
                src="/images/shefat.png"
                alt="Mehedi Hasan Shefat"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-start gap-8">
            {/* Header */}
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
                About Me
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                Mehedi Hasan Shefat
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Full-Stack Software Developer
              </p>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-balance leading-relaxed">
              <p className="text-base md:text-lg text-foreground">
                I'm a passionate full-stack developer crafting elegant,
                efficient solutions with modern technologies. I love building
                seamless user experiences coupled with robust backend systems.
              </p>
              <p className="text-base md:text-lg text-muted-foreground">
                My expertise spans both frontend and backend development, with a
                strong focus on creating scalable, maintainable applications
                using cutting-edge tools and best practices.
              </p>
            </div>

            {/* Social Links */}
            <div className="pt-4 flex gap-6">
              <a
                href="https://github.com/mehedihasanshefat"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mehedihasanshefat"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/mhshefat_dev"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-20">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-2">
              Technology Stack
            </p>
            <h2 className="text-3xl font-bold">What I Work With</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Frontend */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {techStackData.frontend.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {techStackData.backend.map((tech) => (
                  <span
                    key={tech}
                    className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
