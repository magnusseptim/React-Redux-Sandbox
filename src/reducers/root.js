import { combineReducers } from "redux";
import counter from "../reducers/count";
import todos from "../reducers/todos";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  counter,
  todos,
  visibilityFilter
});
