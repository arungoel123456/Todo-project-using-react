import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, updateTodos] = useState([]);

  const addTodos = (todo) => {
    console.log(todo.target.value);
    const updatedTodos = [...todos];
    updateTodos([...updatedTodos, todo.target.value]);

    console.log(todos);
  };

  return (
    <div>
      <h1> To Do </h1>

      <input type="text" name="name" onKeyUp={addTodos} />

      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
    </div>
  );
}
