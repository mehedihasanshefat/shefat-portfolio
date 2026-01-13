import Container from "@/components/container";
import { TechnologyTag } from "@/components/technology/technology-tag";
import SocialContacts from "@/components/social-contacts";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Experience from "./_components/experience";
import ProjectCard from "@/components/project/project-card";
import Github from "./_components/Github";
import BlogCard from "@/components/blog/blog-card";
import blogs from "@/lib/blogs";
import projects from "@/lib/projects";
import Image from "next/image";
function HomePage() {
  return (
    <>
      <Container>
        <section id="hero">
          <div className="flex flex-col justify-between p-4 pt-20 sm:pt-24">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1/3">
                <Image
                  src="/images/shefat.png"
                  width={400}
                  height={600}
                  alt="shefat"
                  className="hidden md:block"
                />
              </div>
              <div className="flex-2/3 flex flex-col gap-6">
                <h1 className="text-4xl font-bold leading-tight font-inter">
                  Hello! I am Shefat, a developer based in Bangladesh
                </h1>
                <p className="leading-relaxed">
                  I am a Software Developer specializing in building robust,
                  scalable full-stack applications. I leverage modern tools like{" "}
                  <Bold>Next.js</Bold>, <Bold>TypeScript</Bold>,{" "}
                  <Bold>Tailwind CSS</Bold> and <Bold>Node.js</Bold> or{" "}
                  <Bold>Bun</Bold> to ensure every project is type-safe,
                  optimized, and developer-friendly from the database to the UI.
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="https://drive.google.com/file/d/16jS5VZdMqClDPJ28s5BXLsdvHwog-VJx/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      variant: "outline",
                      className:
                        "inset-shadow-xs inset-shadow-neutral-200 border-border",
                    })}
                  >
                    Resume / CV
                  </Link>

                  <Link href="/contact" className={buttonVariants()}>
                    Get in touch
                  </Link>
                </div>
                <SocialContacts />
              </div>
            </div>
            <div className="mt-6 sm:mt-8">
              <p className="text-base italic text-stone-500 dark:text-neutral-300 font-semibold my-4">
                Technologies I frequently use:
              </p>
              <div className="border border-dashed dark:border-white/10 border-black/20 p-2 rounded-md bg-linear-to-br from-red-400/5 to-orange-200/5">
                <div className="flex items-center flex-wrap gap-2 space-y-2 mt-4 sm:mt-6">
                  <TechnologyTag tech="reactjs" />
                  <TechnologyTag tech="nextjs" />
                  <TechnologyTag tech="typescript" />
                  <TechnologyTag tech="tailwindcss" />
                  <TechnologyTag tech="shadcn" />
                  <TechnologyTag tech="reactQuery" />
                  <TechnologyTag tech="nodejs" />
                  <TechnologyTag tech="bun" />
                  <TechnologyTag tech="postgresql" />
                  <TechnologyTag tech="mongodb" />
                  <TechnologyTag tech="prisma" />
                  <TechnologyTag tech="motion" />
                  <TechnologyTag tech="redux" />
                  <TechnologyTag tech="zustand" />
                  <TechnologyTag tech="redis" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8">
          <div className="p-4">
            <span className="text-sm font-normal text-muted-foreground">
              Featured
            </span>
            <h4 className="text-2xl font-bold">Experience</h4>
            <Experience />
          </div>
        </section>
        <section>
          <div className="p-4">
            <span className="text-sm font-normal text-muted-foreground">
              Featured
            </span>
            <h4 className="text-2xl font-bold">Projects</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 mt-8">
              {projects.slice(0, 3).map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
            <div className="flex justify-center items-center my-6 sm:my-8">
              <Link
                href="/projects"
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "inset-shadow-xs inset-shadow-neutral-200 border-border",
                })}
              >
                Show all projects
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="p-4">
            <Github />
          </div>
        </section>
        <section>
          <div className="pt-10 px-4 pb-6">
            <span className="text-sm font-normal text-muted-foreground">
              Featured
            </span>
            <h4 className="text-2xl font-bold">Blogs</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 mt-8">
              {blogs.slice(0, 3).map((blog, idx) => (
                <BlogCard key={idx} blog={blog} />
              ))}
            </div>
            <div className="flex justify-center items-center my-6 sm:my-8">
              <Link
                href="/blog"
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "inset-shadow-xs inset-shadow-neutral-200 border-border",
                })}
              >
                Show all blogs
              </Link>
            </div>
          </div>
        </section>
        <section>
          <div className="px-4">
            <div className="flex flex-col justify-center items-center gap-2 space-y-4 border border-dashed dark:border-white/10 border-black/20 p-2 rounded-md bg-linear-to-br from-red-400/5 to-orange-200/5 py-10">
              <h4 className="text-lg sm:text-xl font-semibold text-muted-foreground">
                Let's connect and build something together
              </h4>
              <Link
                href="/contact"
                className={buttonVariants({
                  className: "flex items-center gap-2 bg-primary",
                })}
              >
                <Image
                  src="/images/shefat.png"
                  alt="shefat"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </>
  );
}

export default HomePage;

function Bold({ children }: { children: React.ReactNode }) {
  return <span className="font-bold">{children}</span>;
}
