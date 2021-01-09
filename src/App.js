import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

import "./App.scss";

const App = () => {
  return (
    
    <main id="todolist">
  <h1>
    Todo List
    <span>Get things done, one item at a time.</span>
  </h1>
<AddTodo/>
<TodoList/>  
    </main>

  );
};

export default App;
