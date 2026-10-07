import { useState } from "react";

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const addTodo = () => {
    const value = text.trim();

    if (!value) return;

    setTodos((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        text: value,
        completed: false,
      },
    ]);

    setText("");
  };

  const deleteTodo = (id) => {
    setTodos((previous) => previous.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((previous) =>
      previous.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed,} : todo
      )
    );
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const saveEdit = (id) => {
    const value = editingText.trim();
    if (!value) return;

    setTodos((previous) =>
      previous.map((todo) => todo.id === id ? {...todo, text: value,} : todo)
    );

    setEditingId(null);
    setEditingText("");
  };

  return (
    <>
      <h2>Todo Application</h2>

      <div className="todo-input">
        <input
          className="input"
          value={text}
          onChange={(event) =>setText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {addTodo();}
          }}
          placeholder="Enter todo..."
        />

        <button onClick={addTodo}>Add</button>
      </div>

      {todos.map((todo) => (
        <div className="item" key={todo.id}>
          {editingId === todo.id ? (
            <>
              <input className="input" value={editingText} onChange={(event) =>setEditingText(event.target.value)} />
              <button onClick={() => saveEdit(todo.id)}>Save</button>
            </>
          ) : (
            <>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />

                <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
              </label>

              <div className="actions">
                <button onClick={() => startEdit(todo)}>Edit</button>

                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default TodoApp;
