import React, { useState } from "react";
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { addTodo } from "../js/actions";

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      text: text,
      id: Date.now(),
      isComplete: false,
    };
    addTodo(newTodo);
    setText("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input className="input form__input" v-model="inputVal"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required 
        />
        <button type="submit" className="btn form__submit-btn" >Add</button>

      </form>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
