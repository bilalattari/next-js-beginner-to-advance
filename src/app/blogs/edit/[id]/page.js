"use client";
import { addBlog, getSingleBlog, updateBlog } from "@/actions/blogs";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function EditBlog({ params }) {
  const router = useRouter();
  const formRef = useRef(null);
  const [blogDetail, setBlogDetail] = useState({
    author: "",
    title: "",
    body: "",
  });

  useEffect(() => {
    getBlogDetail();
  }, [params]);

  async function getBlogDetail() {
    const blog = await getSingleBlog(params.id);
    if (blog) {
      setBlogDetail({
        ...blog,
      });
    }
    console.log("blog=>", blog);
  }
  return (
    <form
      ref={formRef}
      action={async () => {
        const obj = {
          ...blogDetail,
        };
        console.log("obj=>", obj);
        await updateBlog(params.id, obj);
        router.push("/blogs");
        formRef.current?.reset();
      }}
      className="container mt-10 mx-auto flex flex-col gap-2"
    >
      <input
        placeholder="Blog Title"
        type="text"
        name="title"
        value={blogDetail.title}
        onChange={(e) =>
          setBlogDetail({ ...blogDetail, title: e.target.value })
        }
        required
        className="border-2 p-2 flex flex-grow"
      />
      <input
        placeholder="Blog Author"
        type="text"
        name="author"
        value={blogDetail.author}
        onChange={(e) =>
          setBlogDetail({ ...blogDetail, author: e.target.value })
        }
        required
        className="border-2 p-2 flex flex-grow"
      />
      <textarea
        placeholder="Blog Description"
        type="text"
        value={blogDetail.body}
        name="body"
        onChange={(e) => setBlogDetail({ ...blogDetail, body: e.target.value })}
        required
        className="border-2 p-2 flex flex-grow"
      ></textarea>
      <input
        type="submit"
        className="bg-purple-200 cursor-pointer rounded p-2 px-4"
        value={"Edit Blog"}
      />
    </form>
  );
}
