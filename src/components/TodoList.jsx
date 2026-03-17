function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              onChange={() => {
                toggleTodo(todo.id);
              }}
              checked={todo.checked}
            />
            {JSON.stringify(todo.checked)} / {todo.id} / {todo.text}
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todo();
