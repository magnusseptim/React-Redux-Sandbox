import React from "react";
import Footer from "../components/Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const TodoTable = ({ text = "Todos" }) => (
  <div>
    <h1>{text}</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default TodoTable;
