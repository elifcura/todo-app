import { useState } from "react";
import TodoItem from "../components/TodoItem";

function Home() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div className="container">
      <h2>Todo App ({todos.length} Görev)</h2>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Görev gir..."
      />
      <button onClick={addTodo}>Ekle</button>

      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default Home;
