/**
 * @file The home page.
 */

import React, { ChangeEvent, Component, Props, ReactNode } from "react";

import { Example, Head } from "../components";

import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { setExample } from "../redux/actions";
import { ReducerState } from "../redux/reducer";

import "../static/style.scss";

/**
 * Fetches Redux state and assigns it to props.
 * @param state the Redux state.
 * @returns the fetched state props.
 */
const mapStateToProps = (state: ReducerState): AppReduxStateProps => ({
  example: state.example
});

/**
 * Fetchs Redux actions and assigns them to props.
 * @param dispatch the Redux dispatch.
 * @returns the fetched action props.
 */
const mapDispatchToProps = (dispatch: Dispatch): AppReduxActionProps => {
  return bindActionCreators({ setExample }, dispatch);
};

/**
 * App props derived from mapStateToProps
 * @property example - a string
 */
interface AppReduxStateProps {
  example: string;
}

/**
 * App props derived from mapDispatchToProps
 * @property setExample - an action setting example
 */
interface AppReduxActionProps {
  setExample: (example: string) => void;
}

/**
 * The props belonging to App, extending AppReduxStateProps and AppReduxActionProps
 */
interface AppProps
  extends Props<Component>,
    AppReduxStateProps,
    AppReduxActionProps {}

/**
 * THe state of the App.
 * @property nexExample - the inputted new example.
 */
interface AppState {
  newExample: string;
}

/**
 * The home page.
 */
class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      newExample: this.props.example
    };
  }

  /**
   * Called when the input text changes.
   * Sets this.state.newExample to the inputted text.
   */
  updateExample = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ newExample: event.target.value });
  };

  /**
   * Called when the submit button is clicked.
   * Passes in the current value of this.state.newExample to this.props.setExample.
   */
  handleSubmit = (): void => this.props.setExample(this.state.newExample);

  /**
   * Renders the component.
   */
  render(): ReactNode {
    return (
      <div className="App">
        <Head />
        <Example />
        <h2>
          <label>
            Enter new example text below:
            <br />
            <input
              type="text"
              value={this.state.newExample}
              onChange={this.updateExample}
            ></input>
          </label>
        </h2>

        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
