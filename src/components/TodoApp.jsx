import { useTodos } from "../hooks/useTodos";
import Input from "./Input";
import { List } from "./List";

export default function TodoApp() {
  const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();

  return (
    <>
      <div className="h-screen w-[800px]">
        <h1 className="text-4xl font-bold text-center my-4">Todo App</h1>
        <Input onNewTodo={handleNewTodo} />
        <List todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onToggleTodo={handleToggleTodo} />
      </div>
    </>
  )
}
