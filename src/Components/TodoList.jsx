import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

function TodoList({ todos, setTodos }) {
  const addTodo = (text) => {
    if (text.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text, completed: false }]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  return (
    <div>
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
  <button 
    className="clear-btn" 
    onClick={() => {
      if (window.confirm("Är du säker på att du vill rensa hela listan?")) {
        setTodos([]);
      }
    }}
  >
    Rensa alla
  </button>
)}
    </div>
  );
}

export default TodoList;