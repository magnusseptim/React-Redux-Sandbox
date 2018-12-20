import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import counter from "./reducers/count";
import Counter from "../src/containers/Counter";
import "./styles.css";

const store = createStore(counter);

function App() {
  return (
    <div className="App">
      <Counter />
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
