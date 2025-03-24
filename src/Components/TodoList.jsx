import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import Clock from "./Clock";

function TodoList() {
  // Ladda sparade todos från Local Storage vid start
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // Uppdatera Local Storage varje gång `todos` ändras
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Lägg till ny todo
  const addTodo = (text) => {
    if (text.trim() === "") return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // Markera som klar
  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //  Uppdatera todo-text
  const updateTodo = (id, newText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  // Ta bort en todo
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Rensa alla todos (med bekräftelse)
  const clearTodos = () => {
    const isConfirmed = window.confirm("Är du säker på att du vill rensa hela din To Do Lista? Ja eller Nej");
    if (isConfirmed) {
      setTodos([]);
    }
  };

  return (
    <div className="container">
       <Clock />
      <h1>Min Todo Lista</h1>
      <TodoInput addTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
      {todos.length > 0 && (
        <button className="clear-btn" onClick={clearTodos}>
          Rensa alla
        </button>
      )}
    </div>
  );
}

export default TodoList;