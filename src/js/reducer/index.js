import { ADD_TODO, EDIT_TASK, REMOVE_TODO, TOGGLE_COMPLETE } from "../const";

const initState = {
  todos: [{ text: "Learn React-redux", isComplete: false, id: 0 }],
};

export default function (state = initState, action) {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [action.payload, ...state.todos] };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };

    case EDIT_TASK:

      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };

    default:
      return state;
  }
}
