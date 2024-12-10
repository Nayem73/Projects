import "./TodoForm.css";

export default function TodoForm({ todo, todos, setTodo, setTodos }) {
  function buttonClickEvent(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form className="modern-form">
      <input
        className="modern-input"
        onChange={(event) => setTodo(event.target.value)}
        type="text"
        value={todo}
      />
      <button
        className="modern-button"
        onClick={(event) => buttonClickEvent(event)}
        type="submit"
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </form>
  );
}
