import { useState } from "react";

function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputValue);
    setInputValue("");
  };

  return (
    <form className="todo-input-container" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Lägg till en uppgift..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Lägg till</button>
    </form>
  );
}

export default TodoInput;