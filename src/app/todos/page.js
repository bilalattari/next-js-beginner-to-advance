import ListItem from "@/components/ListItem";
import TodoForm from "@/components/TodoForm";
import Link from "next/link";

export default async function Todos() {
  let res = await fetch("http://localhost:3000/api/todos", {
    cache: "no-cache",
  });
  res = await res.json();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl text-center font-bold ">Todos</h1>
      <TodoForm />

      {res.data?.map((todo) => (
        <ListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
