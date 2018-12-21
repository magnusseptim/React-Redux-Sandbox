import { connect } from "react-redux";
import { toggleTodo } from "../actions/actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions/types";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.ShowAll:
      return todos;
    case VisibilityFilters.ShowCompleted:
      return todos.filter(x => x.completed);
    case VisibilityFilters.ShowActive:
      return todos.filter(x => !x.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProprs = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter.filter)
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProprs,
  null
)(TodoList);
