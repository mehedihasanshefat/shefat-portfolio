// components/TechnologyTag.tsx
import Image from "next/image";
import { technologies } from "@/lib/technologies";

interface TechnologyTagProps {
  tech: string;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
}

export function TechnologyTag({
  tech,
  size = "md",
  showName = true,
}: TechnologyTagProps) {
  const technology = technologies[tech.toLowerCase()];

  if (!technology) {
    return (
      <span className="inline-flex items-center rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 text-xs sm:text-sm">
        {tech}
      </span>
    );
  }

  const iconSize = {
    sm: "h-3.5 w-3.5 sm:h-4 sm:w-4",
    md: "h-4 w-4 sm:h-5 sm:w-5",
    lg: "h-5 w-5 sm:h-6 sm:w-6",
  };

  const textSize = {
    sm: "text-[11px] sm:text-xs",
    md: "text-xs sm:text-sm",
    lg: "text-sm sm:text-sm",
  };

  return (
    <div
      className={`
        inline-flex items-center
        gap-1 sm:gap-2
        px-2 sm:px-3
        py-1 sm:py-1.5
        rounded-full
        ${technology.color || "bg-gray-100 dark:bg-gray-800"}
        transition-colors hover:opacity-90
      `}
    >
      <div className={`relative ${iconSize[size]} shrink-0`}>
        <Image
          src={technology.icon}
          alt={technology.name}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 14px, 20px"
        />
      </div>

      {showName && (
        <span
          className={`${textSize[size]} font-bold text-gray-800 dark:text-gray-300`}
        >
          {technology.name}
        </span>
      )}
    </div>
  );
}
