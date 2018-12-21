import { ActionTypes } from "../actions/types";
import { createActions } from "redux-actions";

let nextTodoId = 0;

export const { increment, decrement, reset } = createActions(
  ActionTypes.Increment,
  ActionTypes.Decrement,
  ActionTypes.Reset
);

export const addTodo = text => ({
  type: ActionTypes.AddTodo,
  payload: {
    id: nextTodoId++,
    text: text
  }
});

export const setVisibilityFilter = (filter, todoText) => ({
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
