import React from "react";
import { connect } from "react-redux";

const Todo = ({ text, id }) => {
  return <li key={id}>{text}</li>;
};
