import "./TodoElement.css";

export default function TodoElement({ todo, todos, setTodos }) {
  function buttonClickEvent(event) {
    const newTodos = todos.filter((element) => element !== todo);
    setTodos(newTodos);
  }

  return (
    <div className="modern-list-elements">
      {todo}
      <button onClick={(event) => buttonClickEvent(event)}>x</button>
    </div>
  );
}
