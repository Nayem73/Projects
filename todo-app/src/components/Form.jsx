import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Form() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <TodoForm
        todo={todo}
        setTodo={setTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <TodoList todos={todos} />
    </div>
  );
}
