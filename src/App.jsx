import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { text: "공부하기", checked: false },
    { text: "코딩하기", checked: false },
    { text: "운동하기", checked: false },
  ]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setTodos([form.todo.value, ...todos]);
  };

  const removeTodo = (selectIndex) => {
    const filterTodos = todos.filter((_, index) => index !== selectIndex);
    setTodos(filterTodos);
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="todo" />
        <button type="submit">등록</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo}
            <button onClick={() => removeTodo(i)}></button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
