import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <Todo id={todo.id} {...todo} />
    ))}
  </ul>
);

export default TodoList;
