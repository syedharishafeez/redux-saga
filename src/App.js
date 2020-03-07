import React, { Component } from "react";
import { connect } from "react-redux";
class App extends Component {
  state = {};
  render() {
    console.log("props = ", this.props);
    return (
      <div>
        <button onClick={() => this.props.increment()}>+</button>
        <button onClick={() => this.props.decrement()}>-</button>
        <button onClick={() => this.props.reset()}>Reset</button>
        {this.props.count}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT", incrementBy: 10 }),
    decrement: () => dispatch({ type: "DECREMENT", decrementBy: 10 }),
    reset: () => dispatch({ type: "RESET" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
