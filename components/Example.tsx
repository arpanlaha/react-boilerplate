import React, { Component, Props } from "react";

import { connect } from "react-redux";
import { ReducerState } from "../redux/reducer";

const mapStateToProps = (state: ReducerState): ExampleReduxProps => ({
  example: state.example
});

/**
 * Props introduced by mapStateToProps.
 * NOTE: in this case, ExampleReduxProps is separated from ExampleProps to differentiate between Redux and normal props.
 * @property example our example redux state.
 */
interface ExampleReduxProps {
  example: string;
}

/**
 * Extends default component props with ExampleReduxProps.
 */
interface ExampleProps extends Props<Component>, ExampleReduxProps {}

/**
 * A component to show off the current Redux state.
 */
class Example extends Component<ExampleProps> {
  render(): JSX.Element {
    return <h1>The current Redux state is: {this.props.example}</h1>;
  }
}

export default connect(mapStateToProps)(Example);