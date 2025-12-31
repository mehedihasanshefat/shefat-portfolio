import Container from "@/components/container";
import React from "react";
function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Container className="px-4 py-20 prose dark:prose-invert min-h-screen">
        {children}
      </Container>
    </div>
  );
}

export default BlogLayout;
