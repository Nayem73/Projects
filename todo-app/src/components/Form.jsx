import { useState } from "react";

export default function Form() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

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
