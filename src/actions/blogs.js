"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function addBlog(obj) {
  try {
    await fetch("http://localhost:3000/api/blogs", {
      method: "POST",
      body: JSON.stringify(obj),
    });
    revalidatePath("/blogs");
  } catch (err) {
    console.log(err);
  }
}

export async function getSingleBlog(id) {
  try {
    let res = await fetch(`http://localhost:3000/api/blogs/${id}`);
    res = await res.json();
    return res;
  } catch (err) {
    console.log(err);
  }
}

export async function updateBlog(id, obj) {
  try {
    await fetch(`http://localhost:3000/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify(obj),
    });
    revalidatePath("/blogs");
  } catch (err) {
    console.log(err);
  }
}

export async function deleteBlog(id) {
  console.log("id in backend=>", id);
  try {
    await fetch(`http://localhost:3000/api/blogs/${id}`, {
      method: "DELETE",
    });

    revalidatePath("/blogs");
  } catch (err) {
    console.log(err);
  }
}
