import { ActionTypes } from "../actions/types";

let nextTodoId = 0;

export const increment = () => ({ type: ActionTypes.Increment });
export const decrement = () => ({ type: ActionTypes.Decrement });
export const reset = () => ({ type: ActionTypes.Reset });

export const addTodo = text => ({
  type: ActionTypes.AddTodo,
  payload: {
    id: nextTodoId++,
    text: text
  }
});

export const setVisibilityFilter = filter => ({
  type: ActionTypes.SetVisibilityFilter,
  payload: {
    filter: filter
  }
});

export const toggleTodo = id => ({
  type: ActionTypes.ToggleTodo,
  payload: {
    id: id
  }
});
