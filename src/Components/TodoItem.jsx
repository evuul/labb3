import { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li
      className={`todo-item ${todo.completed ? "completed" : ""}`}
      style={{
        opacity: todo.completed ? 0.6 : 1, // Lägg till genomskinlighet för klara uppgifter
        transition: "opacity 0.3s ease",
      }}
    >
      <span onClick={() => toggleTodo(todo.id)} className={`checkmark ${todo.completed ? "checked" : ""}`}>
        {todo.completed ? "✔️" : ""}
      </span>

      {/*Redigering av todo */}
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleUpdate}
          autoFocus
        />
      ) : (
        <span onDoubleClick={() => setIsEditing(true)}>{todo.text}</span>
      )}

      {/*Ta bort-knapp */}
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Ta bort</button>
    </li>
  );
}

export default TodoItem;