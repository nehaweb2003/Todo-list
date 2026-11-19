import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);  // esme text id status show honge // set se hum function update krte hai.
  const [input, setInput] = useState("");  // set box ka text change krte k liye.


  const addTodo = (e) => {
    e.preventDefault();            // form submit se page reload hota hai toh use rokne k liye.
    if (!input.trim()) return;     // agr input khali hai toh task add nhi hoga.

    setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
    setInput("");          // box clean ho jata hai 
  };

  const toggleTodo = (id) => {        // complete hone se line through lgti hai.
    setTodos(
      todos.map((todo) =>             // map se jiska id match kre usma completed reverse ho jata hai .
        todo.id === id ? { ...todo, completed: !todo.completed } : todo     // true false
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));  // jiski id match hoti hai usko list se hta deta hai 
  };      // unko rkhta hai jo match nhi hote

  return (
    <div style={styles.container}>
      <h1>Todo List</h1>

      <form onSubmit={addTodo} style={styles.form}>
        <input
          type="text"
          placeholder="Add a task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button}>Add</button>
      </form>

      <ul style={styles.list}>
        {todos.map((todo) => (
          <li key={todo.id} style={styles.listItem}>
            <span
              onClick={() => toggleTodo(todo.id)}
              style={{
                ...styles.todoText,
                textDecoration: todo.completed ? "line-through" : "none",
                color: todo.completed ? "#777" : "#000",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)} style={styles.deleteBtn}>
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Inline styles (optional)
const styles = {
  container: { maxWidth: "400px", margin: "50px auto", textAlign: "center" },
  form: { display: "flex", gap: "10px", marginBottom: "20px" },
  input: { flex: 1, padding: "10px", fontSize: "16px" },
  button: { padding: "10px 15px", cursor: "pointer" },
  list: { listStyle: "none", padding: 0 },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px",
    border: "1px solid #ddd",
    marginBottom: "10px",
    borderRadius: "4px",
  },
  todoText: { cursor: "pointer" },
  deleteBtn: {
    background: "red",
    color: "white",
    border: "none",
    padding: "5px 8px",
    cursor: "pointer",
  },
};

export default App;
