import ProjectCard from "@/components/project/project-card";
import Container from "@/components/container";
import projects from "@/lib/projects";
function ProjectsPage() {
  return (
    <div>
      <Container>
        <div className="prose dark:prose-invert my-4">
          <h2 className="w-full sm:mt-12 mt-0">All Projects</h2>
          <p className="text-muted-foreground">
            My projects and work across different technologies and domains.
          </p>
        </div>
        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 mt-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ProjectsPage;
