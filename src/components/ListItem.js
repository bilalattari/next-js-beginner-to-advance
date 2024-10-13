"use client";
import { deleteTodo, updateTodo } from "@/actions/todos";
import { useState } from "react";

export default function ListItem({ todo }) {
  const [isEdit, setIsEdit] = useState(false);
  const [task, setTask] = useState("");

  const onComplete = async () => {
    let obj = { ...todo };
    obj.isCompleted = !obj.isCompleted;
    await updateTodo(obj);
  };

  const onEdit = async () => {
    if (isEdit) {
      let obj = todo;
      obj.todo = task;
      await updateTodo(obj);
      setIsEdit(false);
      setTask("");
    } else {
      setIsEdit(true);
      setTask(todo.todo);
    }
  };
  const onDelete = async () => {
    await deleteTodo({ id: todo.id });
  };
  return (
    <div
      className={`border flex cursor-pointer p-2 text-center text-3xl w-2/3 mx-auto my-1
    ${todo.isCompleted ? "bg-teal-100" : "bg-white"}`}
    >
      {isEdit ? (
        <input
          className="flex flex-grow border p-1 rounded text-black"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      ) : (
        <h1 className="flex flex-grow">{todo.todo}</h1>
      )}
      <button
        onClick={onComplete}
        className="bg-fuchsia-200 mx-1 p-1 px-2 text-sm rounded"
      >
        {!todo.isCompleted ? "Done" : "Not Done"}
      </button>
      <button
        onClick={onEdit}
        className="bg-blue-200 mx-1 p-1 px-2 text-sm rounded"
      >
        Edit
      </button>
      <button
        onClick={onDelete}
        className="bg-red-200 mx-1 p-1 px-2 text-sm rounded"
      >
        Delete
      </button>
    </div>
  );
}
