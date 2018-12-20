import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import root from "./reducers/root";
import Counter from "../src/containers/Counter";
import TodoTable from "../src/containers/TodoTable";
import "./styles.css";

const store = createStore(root);

function App() {
  return (
    <div className="App">
      <Counter />
      <TodoTable />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
