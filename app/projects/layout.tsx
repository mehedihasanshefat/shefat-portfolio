import Container from "@/components/container";
import React from "react";
function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Container className="px-4 py-20 min-h-screen">{children}</Container>
    </div>
  );
}

export default ProjectsLayout;
