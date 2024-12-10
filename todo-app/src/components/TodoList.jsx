import TodoElement from "./TodoElement";
import "./TodoList.css";

export default function TodoList({ todos }) {
  return (
    <div className="modern-list">
      {todos.map((todo) => (
        <TodoElement todo={todo} />
      ))}
    </div>
  );
}
