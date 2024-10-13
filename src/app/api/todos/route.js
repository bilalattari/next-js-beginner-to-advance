const todos = [
  {
    id: 1,
    todo: "Task 1",
    isCompleted: false,
  },
  {
    id: 2,
    todo: "Task 2",
    isCompleted: false,
  },
  {
    id: 3,
    todo: "Task 3",
    isCompleted: false,
  },
  {
    id: 4,
    todo: "Task 4",
    isCompleted: false,
  },
];

export async function GET(request) {
  return Response.json({
    data: todos,
    msg: "Todos fetched Successfully.",
  });
}

export async function POST(request) {
  const data = await request.json();
  const obj = {
    ...data,
    isCompleted: false,
    id: todos.length + 1,
  };
  todos.push(obj);
  console.log("Data from frontend to backend=>", data);
  return Response.json({
    data: todos,
    msg: "Todos Added Successfully.",
  });
}

export async function PUT(request) {
  const data = await request.json();
  console.log("update todo in backend==>", data);
  const todoInd = todos.findIndex((todo) => todo.id == data.id);
  todos[todoInd] = data;
  return Response.json({
    data: todos,
    msg: "Todo Updated Successfully.",
  });
}

export async function DELETE(request) {
  const data = await request.json();
  console.log("delete todo in backend==>", data.id);
  const todoInd = todos.findIndex((todo) => todo.id == data.id);
  todos.splice(todoInd, 1);
  return Response.json({
    data: todos,
    msg: "Todo Deleted Successfully.",
  });
}
