import { useState } from "react";

function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      {isEditing ? (
        <>
          <input
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>Kaydet</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Güncelle</button>
          <button onClick={() => deleteTodo(todo.id)}>Sil</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
