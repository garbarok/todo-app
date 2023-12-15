
export const Item = ({ todo, onDeleteTodo, onCompleteTodo }) => {
  return (
    <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between items-center">
      <span
        className={` ${todo.done ? 'line-through' : ''
          }`}
        onClick={() => onCompleteTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button className="middle none center rounded-lg bg-pink-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" onClick={() => onDeleteTodo(todo.id)}>
        Borrar
      </button>
    </li>
  )
}
