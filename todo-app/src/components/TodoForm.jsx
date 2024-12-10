export default function TodoForm({ todo, todos, setTodo, setTodos }) {
  function buttonClickEvent(event) {
    event.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <form>
      <input
        onChange={(event) => setTodo(event.target.value)}
        type="text"
        value={todo}
      />
      <button onClick={(event) => buttonClickEvent(event)} type="submit">
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
