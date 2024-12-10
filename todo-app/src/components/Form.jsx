import { useState } from "react";

export default function Form() {
  const [todo, setTodo] = useState("");

  function buttonClickEvent(event) {
    event.preventDefault();
    console.log("button clicked");
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
    </form>
  );
}
