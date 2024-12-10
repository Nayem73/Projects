export default function TodoList({ todos }) {
  return (
    <>
      {todos.map((todo) => (
        <h3 key={todo}>{todo}</h3>
      ))}
    </>
  );
}
