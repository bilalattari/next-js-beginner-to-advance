"use client";
import { addBlog } from "@/actions/blogs";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export default function BlogForm() {
  const router = useRouter();

  const formRef = useRef(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        const obj = {
          title: formData.get("title"),
          author: formData.get("author"),
          body: formData.get("body"),
        };
        await addBlog(obj);
        router.push("/blogs");
        formRef.current?.reset();
      }}
      className="mx-auto flex flex-col gap-2"
    >
      <input
        placeholder="Blog Title"
        type="text"
        name="title"
        required
        className="border-2 p-2 flex flex-grow"
      />
      <input
        placeholder="Blog Author"
        type="text"
        name="author"
        required
        className="border-2 p-2 flex flex-grow"
      />
      <textarea
        placeholder="Blog Description"
        type="text"
        name="body"
        required
        className="border-2 p-2 flex flex-grow"
      ></textarea>
      <input
        type="submit"
        className="bg-purple-200 cursor-pointer rounded p-2 px-4"
        value={"Add Blog"}
      />
    </form>
  );
}
