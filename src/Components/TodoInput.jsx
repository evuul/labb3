import { useState } from "react";

function TodoInput({ addTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return; // Ignorera tomma strängar
    addTodo(text.trim());
    setText(""); // Rensa input efter inmatning
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-container">
      <input
        type="text"
        placeholder="Lägg till en uppgift..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        autoFocus // Markören börjar på inputfältet vid öppning
      />
      <button type="submit" disabled={text.trim() === ""}>Lägg till</button>
    </form>
  );
}

export default TodoInput;