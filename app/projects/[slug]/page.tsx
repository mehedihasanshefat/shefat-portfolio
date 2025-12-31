import Container from "@/components/container";
import { TechnologyTag } from "@/components/technology/technology-tag";
import { Button, buttonVariants } from "@/components/ui/button";
import projects from "@/lib/projects";
import { technologies } from "@/lib/technologies";
import { GithubIcon, Globe } from "lucide-react";
import { span } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
type Params = Promise<{
  slug: string;
}>;
async function ProjectDetailsPage({ params }: { params: Params }) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  return (
    <div>
      <Container className="px-4 pt-4 sm:pt-4">
        {/* Back button */}
        <Link
          href="/projects"
          className={buttonVariants({
            variant: "outline",
            className: "mb-4",
          })}
        >
          Go to projects
        </Link>
        {/* Cover image */}
        <div className="w-full h-60 sm:h-100 relative">
          <Image
            src={project?.image || ""}
            alt={project?.name || "thumbnail"}
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Technology and status */}
        <div className="flex flex-col sm:flex-row  gap-3 my-6">
          <Button className="bg-black text-white dark:bg-white dark:text-black">
            {project?.status}
          </Button>
          <div className="flex items-center gap-2 flex-wrap">
            {project?.technologies?.map((tech, idx) => {
              return idx <= project.mainTechnologies ? (
                <TechnologyTag key={idx} tech={tech} size="sm" />
              ) : null;
            })}
            {project?.otherTechnologies !== 0 && (
              <Button variant="outline">
                + {project?.otherTechnologies} others
              </Button>
            )}
          </div>
        </div>
        {/* Rest... */}
        <h2 className="text-2xl sm:text-4xl font-bold">{project?.name}</h2>
        <p className="text-muted-foreground mt-4">{project?.description}</p>
        {/* Info div */}
        <div className="flex border border-primary/20 py-4 px-3 justify-between rounded-md mt-4">
          <div>
            <h4 className="text-muted-foreground font-semibold text-sm">
              Timeline
            </h4>
            <span className="text-sm font-semibold">{project?.timeline}</span>
          </div>
          <div>
            <h4 className="text-muted-foreground font-semibold text-sm">
              Role
            </h4>
            <span className="text-sm font-semibold">{project?.role}</span>
          </div>
          <div>
            <h4 className="text-muted-foreground font-semibold text-sm">
              Team
            </h4>
            <span className="text-sm font-semibold">{project?.team}</span>
          </div>
          <div>
            <h4 className="text-muted-foreground font-semibold text-sm">
              Status
            </h4>
            <span className="text-xs font-semibold border border-primary/20 px-2 py-1 dark:bg-white dark:text-black bg-black text-white rounded-lg">
              {project?.status}
            </span>
          </div>
        </div>
        {/* Action buttons */}
        <div className="flex items-center gap-4 mt-4">
          <Link
            href={project?.liveLink || "#"}
            className={buttonVariants({
              className: "text-sm font-bold flex items-center gap-1",
            })}
          >
            <Globe className="size-4" />
            Live Demo
          </Link>
          <Link
            href={project?.githubLink || "#"}
            className={buttonVariants({
              variant: "outline",
              className: "text-sm font-bold flex items-center gap-1",
            })}
          >
            <GithubIcon className="size-4" />
            Source Code
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default ProjectDetailsPage;
