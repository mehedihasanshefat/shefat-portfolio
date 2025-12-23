"use client";
import React from "react";
import Container from "@/components/container";
function BlogsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose">
      <Container className="pt-20 px-4">{children}</Container>
    </div>
  );
}

export default BlogsLayout;
