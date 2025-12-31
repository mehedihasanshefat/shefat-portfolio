import BlogCard from "@/components/blog/blog-card";
import Container from "@/components/container";
import blogs from "@/lib/blogs";
function BlogsPage() {
  return (
    <div className="w-full">
      <Container>
        <div>
          <h2 className="mt-0">All Blogs</h2>
          <p>
            Thoughts, tutorials, and insights on engineering, and programming.
          </p>
        </div>

        <div className="not-prose grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6 mt-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default BlogsPage;
