import React from "react";
import { connect } from "react-redux";
import TodoCard from "./TodoCard";

const TodoComplete = ({ todoList }) => {
    
  return (
    <transition-group tag="ol" name="list" className="todo-list">
          { todoList.map((el) => (
      <TodoCard key={el.id} todo={el} />
      ))} 
      <h1>work it </h1>
    </transition-group>
  );
};
const mapStateToProps = (state) => {
  return {
    todoList: state.todos,
  };
};

export default connect(mapStateToProps)(TodoComplete);