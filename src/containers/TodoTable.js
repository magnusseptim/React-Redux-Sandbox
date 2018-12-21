import React from "react";
import Footer from "../components/Footer";
import AddTodo from "../containers/AddTodo";
import { connect } from "react-redux";
import VisibleTodoList from "../containers/VisibleTodoList";

const TodoTable = ({ todoText }) => (
  <div>
    <h1>{todoText}</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

const mapStateToProps = state => ({
  todoText: state.visibilityFilter.todoText
});

export default connect(
  mapStateToProps,
  null
)(TodoTable);

//export default TodoTable;
