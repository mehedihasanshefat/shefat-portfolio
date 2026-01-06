import Image from "next/image";
import { Card, CardHeader, CardContent } from "../ui/card";
import { ArrowRight } from "lucide-react";
import { BlogType } from "@/lib/blogs";
import Link from "next/link";

function BlogCard({ blog }: { blog: BlogType }) {
  return (
    <Card className="p-0 rounded-none border border-indigo-900/20 rounded-b-md">
      <CardHeader className="p-0">
        <Image
          src={blog.image}
          width={600}
          height={500}
          alt={blog.title}
          className="object-cover not-prose"
        />
      </CardHeader>
      <CardContent className="px-3 pb-6 flex flex-col h-fit">
        <h4 className="text-xl font-bold line-clamp-2">{blog.title}</h4>
        <span className="text-xs mt-2">{blog.date}</span>
        <p className="line-clamp-2 my-3 text-sm">{blog.description}</p>
        <Link
          href={`/blog/${blog.slug}`}
          className="text-xs flex items-center gap-1 mt-4"
        >
          View Details
          <ArrowRight className="size-3" />
        </Link>
      </CardContent>
    </Card>
  );
}

export default BlogCard;
