"use server";

import { revalidatePath } from "next/cache";

export async function addTodo(formData) {
  const todo = formData.get("todo");
  try {
    await fetch("http://localhost:3000/api/todos", {
      method: "POST",
      body: JSON.stringify({ todo }),
    });

    revalidatePath("/todos");
  } catch (err) {
    console.log(err);
  }
}
