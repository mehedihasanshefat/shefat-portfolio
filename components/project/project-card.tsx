import Image from "next/image";
import { Card, CardHeader, CardContent } from "../ui/card";
import { Github, GlobeIcon, ArrowRight } from "lucide-react";
import projects from "@/lib/projects";
import { TechnologyTag } from "../technology/technology-tag";
import Link from "next/link";

function ProjectCard() {
  const project = projects[0];
  return (
    <Card className="p-0 rounded-none border border-indigo-900/20 rounded-b-md">
      <CardHeader className="p-0">
        <Image
          src={project.image}
          width={600}
          height={500}
          alt={project.name}
          className="object-cover"
        />
      </CardHeader>
      <CardContent className="px-3 pb-6">
        <div className="flex justify-between items-center">
          <h4 className="text-xl font-bold">{project.name}</h4>
          <div className="flex items-center gap-2">
            <Link href={project.liveLink}>
              <GlobeIcon className="size-4" />
            </Link>
            <Link href={project.githubLink}>
              <Github className="size-4" />
            </Link>
          </div>
        </div>
        <p className="line-clamp-3 my-3">{project.description}</p>
        <div>
          <span className="text-sm font-medium">Technologies</span>
          <div className="flex items-center gap-1 my-2">
            {project.technologies.map((item, idx) => (
              <TechnologyTag key={idx} tech={item} showName={false} size="sm" />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between pt-2">
          {project.status === "Completed" ? (
            <span className="text-xs bg-green-600/10 px-2 py-1 rounded-md text-white flex flex-nowrap items-center gap-2">
              <span className="size-2 animate-pulse bg-green-400 rounded-full" />
              All Systems Operational
            </span>
          ) : (
            <span className="text-xs bg-red-600/10 px-2 py-1 rounded-md text-white flex flex-nowrap items-center gap-2">
              <span className="size-2 animate-pulse bg-green-400 rounded-full" />
              Working
            </span>
          )}
          <Link
            href={`/projects/${project.name}`}
            className="text-xs flex items-center gap-1"
          >
            View Details
            <ArrowRight className="size-3" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
