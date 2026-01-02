import { TechnologyTag } from "@/components/technology/technology-tag";
import { cn } from "@/lib/utils";
function Experience() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-4">
        <div className="">
          <h4 className="text-lg font-semibold mt-2">TradeByte</h4>
          <span className="text-muted-foreground text-sm font-medium">
            Software Engineering Apprentice
          </span>
        </div>
        <div className="flex flex-col md:mr-8">
          <span className="text-muted-foreground text-sm">
            October 2025 - Present
          </span>
          <span className="text-muted-foreground text-sm">
            Germany {"(Remote)"}
          </span>
        </div>
      </div>
      <div className="mt-4">
        <h6 className="font-semibold">Technologies & Tools</h6>
        <div className="flex items-center flex-wrap gap-2 space-y-2 mt-4">
          <TechnologyTag tech="reactjs" /> <TechnologyTag tech="nextjs" />
          <TechnologyTag tech="typescript" />
          <TechnologyTag tech="tailwindcss" /> <TechnologyTag tech="nodejs" />
          <TechnologyTag tech="postgresql" />
          <TechnologyTag tech="prisma" />
        </div>
        <ul className="px-6 py-3 flex flex-col gap-1">
          <li className="list-disc text-muted-foreground">
            Built a full LMS platform with user registration, course purchase,
            and progress tracking.
          </li>
          <li className="list-disc text-muted-foreground">
            Implemented secure authentication & RBAC using Better-Auth.
          </li>
          <li className="list-disc text-muted-foreground">
            Integrated AWS S3 for scalable media uploads.
          </li>
          <li className="list-disc text-muted-foreground">
            Developed user dashboards for course access and lesson tracking.
          </li>
          <li className="list-disc text-muted-foreground">
            Built an admin panel with full course CRUD.
          </li>
          <li className="list-disc text-muted-foreground">
            Strengthened security with Arcjet rate-limiting and Zod validation.
          </li>
          <li className="list-disc text-muted-foreground">
            Designed optimized data models using PostgreSQL + Prisma.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
