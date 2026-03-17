import { useState } from "react";

function App() {
  const [todoId, setTodoId] = useState(4);

  const [todos, setTodos] = useState([
    { id: 3, text: "공부하기", checked: false },
    { id: 2, text: "코딩하기", checked: false },
    { id: 1, text: "운동하기", checked: false },
  ]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setTodos([{ id: todoId, text: form.todo.value, checked: false }, ...todos]);
    setTodoId(todoId + 1);
  };

  const removeTodo = (selectId) => {
    const filterTodos = todos.filter((todo) => todo.id !== selectId);
    setTodos(filterTodos);
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" />
        <button type="submit">등록</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.id}
            {todo.text}
            {todo.checked}
            <button onClick={() => removeTodo(todo.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
