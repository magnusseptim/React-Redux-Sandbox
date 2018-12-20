import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo id={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};
