import "./TodoForm.css";

export default function TodoForm({ todo, todos, setTodo, setTodos }) {
  function buttonClickEvent(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form onSubmit={buttonClickEvent} className="modern-form">
      <input
        className="modern-input"
        onChange={(event) => setTodo(event.target.value)}
        type="text"
        value={todo}
      />
      <button
        className="modern-button"
        // onClick={(event) => buttonClickEvent(event)}
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
