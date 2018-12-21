import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import root from "./reducers/root";
import counter from "./reducers/count";
import Counter from "../src/containers/Counter";
import TodoTable from "../src/containers/TodoTable";
import "./styles.css";

const store = createStore(
  root,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

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
