import React from "react";
import { connect } from "react-redux";
import TodoCard from "./TodoCard";

const TodoListInComplete = ({ todoList }) => {
  return (
    <transition-group tag="ol" name="list" className="todo-list">
     <h1>hello </h1>

    </transition-group>
  );
};
const mapStateToProps = (state) => {
  return {
    todoList: state.todos,
  };
};

export default connect(mapStateToProps)(TodoListInComplete);