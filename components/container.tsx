import React from "react";
import { cn } from "@/lib/utils";
function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("max-w-4xl mx-auto bg-white dark:bg-black", className)}>
      {children}
    </div>
  );
}

export default Container;
