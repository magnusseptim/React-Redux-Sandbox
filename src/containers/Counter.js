import React from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "../actions/actions";

const Counter = ({ count, countText, increment, decrement, reset }) => {
  return (
    <div>
      <h1>{countText}</h1>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>
    </div>
  );
};

const mapStateToProps = state => ({
  countText: state.countText,
  count: state.count
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
  reset: () => dispatch(reset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
