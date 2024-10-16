"use client";

const { deleteBlog } = require("@/actions/blogs");
const { useRouter } = require("next/navigation");

const DeleteBlogButton = ({ id }) => {
  const router = useRouter();
  return (
    <button
      className="bg-red-100 px-2 py-1 rounded"
      onClick={async () => {
        await deleteBlog(id);
        router.push("/blogs");
      }}
    >
      Delete
    </button>
  );
};

export default DeleteBlogButton;
