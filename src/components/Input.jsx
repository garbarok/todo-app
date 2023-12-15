import { useForm } from "../hooks/useSubmit";

export default function Input({ onNewTodo }) {
  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const submitTodo = (event) => {
    event.preventDefault();
    if (description.trim().length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description: description.trim(),
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={submitTodo} className="flex p-4">
      <label htmlFor="todoInput" className="sr-only">Add Todo</label>
      <input
        id="todoInput"
        type="text"
        name="description"
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        value={description}
        onChange={onInputChange}
      />
      <button
        type="submit"
        className="middle none center rounded-lg bg-blue-500 py-2 px-4 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Add
      </button>
    </form>
  );
}
