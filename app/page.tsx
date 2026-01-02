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
import { RoleAnimator } from "@/components/role-animator";
function HomePage() {
  return (
    <>
      <section id="hero" className="">
        <Container className="sm:min-h-screen p-4 pt-20 sm:pt-24 md:pb-10">
          <RoleAnimator />
          {/* Name */}
          <h1 className="text-2xl font-bold md:text-4xl mt-4 sm:mt-6 text-neutral-700 dark:text-neutral-200">
            Mehedi Hasan Shefat
          </h1>
          {/* Introduction */}
          <p className="text-muted-foreground md:text-lg  leading-6 sm:leading-8 mt-4 sm:mt-6 max-w-2xl ">
            A software developer focused on crafting scalable solutions where
            robust back-end systems meet intuitive, interactive front-ends
          </p>
          {/* Contact Buttons*/}
          <div className="mt-4 sm:mt-8 flex items-center gap-4">
            <Link
              href="https://drive.google.com/file/d/1OruWyOyzmqxcQqL6Wnn7FMtQ3-ol4SVm/view?usp=sharing"
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
          {/* Social Links */}
          <div className="mt-4 sm:mt-6">
            <SocialContacts />
          </div>
          {/* Technologies */}
          <div className="mt-6 sm:mt-8">
            <p className="text-base italic text-stone-500 dark:text-neutral-300 font-semibold my-4">
              Technologies I frequently use:
            </p>
            <div className="max-w-3xl border border-dashed dark:border-white/10 border-black/20 p-2 rounded-md bg-linear-to-br from-red-400/5 to-orange-200/5">
              <div className="flex items-center flex-wrap gap-2 space-y-2 mt-4 sm:mt-6">
                <TechnologyTag tech="reactjs" /> <TechnologyTag tech="nextjs" />
                <TechnologyTag tech="typescript" />
                <TechnologyTag tech="tailwindcss" />{" "}
                <TechnologyTag tech="shadcn" />
                <TechnologyTag tech="reactQuery" />
                <TechnologyTag tech="nodejs" />
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
        </Container>
      </section>
      <section>
        <Container className="p-4">
          <span className="text-sm font-normal text-muted-foreground">
            Featured
          </span>
          <h4 className="text-2xl font-bold">Experience</h4>
          <Experience />
        </Container>
      </section>
      <section>
        <Container className="p-4">
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
        </Container>
      </section>
      <section>
        <Container className="p-4">
          <Github />
        </Container>
      </section>
      <section>
        <Container className="pt-10 px-4 pb-6">
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
        </Container>
      </section>
      <section>
        <Container className="px-4">
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
        </Container>
      </section>
    </>
  );
}

export default HomePage;
