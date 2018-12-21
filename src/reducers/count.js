import { ActionTypes } from "../actions/types";
import { handleActions } from "../";

const initialState = {
  count: 0,
  countText: "Beginning"
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.Increment:
      return { ...state, count: state.count + 1, countText: "Was incremented" };
    case ActionTypes.Decrement:
      return { ...state, count: state.count - 1, countText: "Was decremented" };
    case ActionTypes.Reset:
      return { ...state, count: 0, countText: "Was reseted" };
    default:
      return state;
  }
};

export default counter;
