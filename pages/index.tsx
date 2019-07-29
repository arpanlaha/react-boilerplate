import React, { Component, Props } from "react";

import { Head, Instructions, Show } from "../components";
import { ShowType } from "../components/Show";

import { connect } from "react-redux";
import { ReducerState } from "../redux/reducer";

import "../static/style.scss";

const mapStateToProps = (state: ReducerState): ReducerState => ({
  example: state.example
});

/**
 * Extends Props with ReducerState
 */
interface AppProps extends Props<Component>, ReducerState {}

/**
 * THe state of the App
 * @property shows - a list of Shows
 */
interface AppState extends Readonly<{}> {
  shows: ShowType[];
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      shows: [
        { id: 1, name: "Game of Thrones", episodesSeen: 0 },
        { id: 2, name: "Naruto", episodesSeen: 220 },
        { id: 3, name: "Black Mirror", episodesSeen: 3 }
      ]
    };
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <Head />
        <Instructions complete />
        <h1>{this.props.example}</h1>
        {this.state.shows.map(
          (show: ShowType): JSX.Element => (
            <Show
              key={show.id}
              id={show.id}
              name={show.name}
              episodesSeen={show.episodesSeen}
            />
          )
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
