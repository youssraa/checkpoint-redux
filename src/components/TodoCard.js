import React from "react";
import { connect } from "react-redux";
import { toggleComplete, removeTodo, editTask } from "../js/actions";
import {FaRegCheckCircle , FaRegCircle , FaBan } from 'react-icons/fa';
import EditForm from "./EditForm";

const TodoCard = ({ todo, toggleComplete, removeTodo }) => {
  return (

      <li className="todo-list__item">
       <p
        style={
          todo.isComplete
            ? { textDecoration: "line-through", opacity: "0.3" }
            : {}
        }
      >
        {todo.text}
      </p>
      <div>
        <button class="btn-picto" type="button"  onClick={() => toggleComplete(todo.id)}>
          {todo.isComplete ? <FaRegCheckCircle size={30}/> :<FaRegCircle size={30}/> }
          
        </button>
        <button class="btn-picto" type="button" onClick={() => removeTodo(todo.id)}>
          <FaBan size={30}/>
        </button>
        
        <EditForm  oldTodo={todo} />
      </div>
      </li>

    
  );
};

export default connect(null, { toggleComplete, removeTodo, editTask })(
  TodoCard
);
