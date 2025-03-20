import { useState } from "react";

function TodoItem({ todo, toggleTodo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    if (newText.trim() !== "") {
      updateTodo(todo.id, newText);
    } else {
      setNewText(todo.text); // Behåll gamla texten om det är tomt
    }
    setIsEditing(false);
  };

  return (
    <li className="todo-item">
      {/* Checkmark som ändras mellan tom ruta och grön check */}
      <span onClick={() => toggleTodo(todo.id)} className={`checkmark ${todo.completed ? "checked" : ""}`}>
        {todo.completed ? "✔️" : ""}
      </span> 

      {/* Om i redigeringsläge -> visa inputfält, annars text */}
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          onBlur={handleUpdate} // Uppdatera texten när fältet tappas ur fokus
          autoFocus
        />
      ) : (
        <span className={`todo-text ${todo.completed ? "completed" : ""}`} onDoubleClick={() => setIsEditing(true)}>
          {todo.text}
        </span>
      )}

      {/* Röd ta bort-knapp */}
      <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Ta bort</button>
    </li>
  );
}

export default TodoItem;