import { Item } from "./Item"


export const List = ({ todos = [], onDeleteTodo, onToggleTodo }) => {

  return (
    <ul className="border border-gray-200 rounded overflow-hidden shadow-md">
      {
        todos.map(todo => (
          <Item
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onCompleteTodo={onToggleTodo}
          />
        ))
      }
    </ul>
  )
}