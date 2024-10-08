import prisma from "@/lib/db";
import Link from "next/link";

export const metadata = {
  title: "NEXT JS BLOGS",
};

export default async function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      slug: "getting-started-with-nextjs",
      description:
        "A beginner’s guide to setting up your first Next.js project.",
    },
    {
      id: 2,
      title: "Understanding Next.js Routing",
      slug: "understanding-nextjs-routing",
      description:
        "Learn how routing works in Next.js, including pages and dynamic routes.",
    },
    {
      id: 3,
      title: "Next.js vs. React: Key Differences",
      slug: "nextjs-vs-react",
      description:
        "An overview of the differences between React and Next.js and when to use each.",
    },
    {
      id: 4,
      title: "Building a Blog with Next.js",
      slug: "building-a-blog-with-nextjs",
      description:
        "Step-by-step guide to building a simple blog using Next.js and Markdown.",
    },
    {
      id: 5,
      title: "Deploying Your Next.js App",
      slug: "deploying-your-nextjs-app",
      description:
        "A guide to deploying your Next.js app on platforms like Vercel and Netlify.",
    },
  ];


  return (
    <div className="container mx-auto text-center p-20">
      <h1 className="font-bold text-5xl">ALL BLOGS</h1>
      {blogs.map((data) => (
        <Link key={data.id} href={`/blogs/${data.slug}`}>
          <h1 className="border border-purple-300 p-2 px-3 text-center my-2">
            {data.title}
          </h1>
        </Link>
      ))}
    </div>
  );
}
