import BlogModal from "@/app/lib/modals/BlogModal";

export async function GET(request, { params }) {
  const id = params.id;

  const blog = await BlogModal.findById(id);

  return Response.json(blog);
}

export async function PUT(request, { params }) {
  const id = params.id;
  const editedBlog = await request.json();

  const updated = await BlogModal.updateOne(
    {
      _id: id,
    },
    {
      ...editedBlog,
    }
  );
  return Response.json({ blog: updated, msg: "Blog Updated Successfully" });
}

export async function DELETE(request, { params }) {
  const id = params.id;

  const blog = await BlogModal.deleteOne({ _id: id });

  return Response.json({ msg: "Blog Deleted Successfully" });
}
