import React, { Component, FormEvent, Props } from "react";

import { Example, Head } from "../components";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setExample } from "../redux/reducer";

import "../static/style.scss";

const mapStateToProps = (): any => ({});

const mapDispatchToProps = (dispatch): any => {
  return bindActionCreators({ setExample }, dispatch);
};

/**
 * THe state of the App.
 * @property nexExample - the inputted new example.
 */
interface AppState extends Readonly<{}> {
  newExample: string;
}

/**
 * The props belonging to App.
 * @property setExample - the redux action obtained through mapDispatchToProps.
 */
interface AppProps extends Props<Component> {
  setExample: (example: string) => void;
}

/**
 * The home page.
 */
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      newExample: ""
    };
  }

  /**
   * Called when the input text changes.
   * Sets this.state.newExample to the inputted text.
   */
  updateExample = (event: FormEvent<HTMLInputElement>): void => {
    this.setState({ newExample: event.currentTarget.value });
  };

  /**
   * Called when the submit button is clicked.
   * Passes in the current value of this.state.newExample to this.props.setExample.
   */
  handleSubmit = (): void => this.props.setExample(this.state.newExample);

  render(): JSX.Element {
    return (
      <div className="App">
        <Head />
        <Example />
        <h2>Enter new example text below:</h2>
        <input type="text" onChange={this.updateExample}></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
