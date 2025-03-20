import { useState, useEffect } from "react";
import TodoList from "./Components/TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  // Ladda todos från localStorage vid start
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Uppdatera localStorage varje gång todos ändras
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h1>📝 Min To-Do Lista</h1>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;