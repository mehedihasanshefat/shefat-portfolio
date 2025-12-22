// components/TechnologyList.tsx
import { TechnologyTag } from "./technology-tag";

interface TechnologyListProps {
  technologies: string[];
  size?: "sm" | "md" | "lg";
  maxItems?: number;
  className?: string;
}

export function TechnologyList({
  technologies,
  size = "md",
  maxItems,
  className = "",
}: TechnologyListProps) {
  const displayTechs = maxItems
    ? technologies.slice(0, maxItems)
    : technologies;
  const remainingCount = maxItems ? technologies.length - maxItems : 0;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {displayTechs.map((tech) => (
        <TechnologyTag key={tech} tech={tech} size={size} />
      ))}
      {remainingCount > 0 && (
        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm">
          +{remainingCount} more
        </span>
      )}
    </div>
  );
}
