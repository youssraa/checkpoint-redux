import React from "react";
import { connect } from "react-redux";
import TodoCard from "./TodoCard";

const TodoList = ({ todoList }) => {
  return (
    <transition-group tag="ol" name="list" className="todo-list">
      
    {todoList.map((el) => (
        <TodoCard key={el.id} todo={el} />
      ))} 
     
      

    </transition-group>
  );
};
const mapStateToProps = (state) => {
  return {
    todoList: state.todos,
  };
};

export default connect(mapStateToProps)(TodoList);
