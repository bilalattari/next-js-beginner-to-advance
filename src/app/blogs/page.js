import BlogForm from "@/components/BlogForm";
import Link from "next/link";

export default async function Blogs() {
  let res = await fetch(`http://localhost:3000/api/blogs`);
  res = await res.json();

  return (
    <div className="container mx-auto my-5">
      <div className="flex mb-5 justify-between">
        <h1 className="font-bold text-3xl">Blogs</h1>
        <Link className="bg-blue-200 rounded px-2 py-1" href={"/blogs/addBlog"}>
          Add Blog
        </Link>
      </div>
      {res.data?.map((blog) => (
        <Link key={blog._id} href={`/blogs/${blog._id}`}>
          <div className="border p-2 my-2">
            <h1 className="font-medium text-3xl">{blog.title}</h1>
          </div>
        </Link>
      ))}

      {/* <BlogForm /> */}
    </div>
  );
}
