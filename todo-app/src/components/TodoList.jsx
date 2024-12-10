import TodoElement from "./TodoElement";
import "./TodoList.css";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className="modern-list">
      {todos.map((todo) => (
        <TodoElement todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
}
