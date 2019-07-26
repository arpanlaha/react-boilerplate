import React, { Component, Props } from "react";
import { Instructions, Show } from "../components";
import { connect } from "react-redux";
import { ReducerInterface } from "../redux/modules/reducer";
import "../static/style.css";
import { ShowType } from "../components/Show";

const mapStateToProps = (state: ReducerInterface): AppPropsRedux => ({
  example: state.example.example
});

interface AppPropsRedux {
  example: string;
}
interface AppProps extends Props<Component>, AppPropsRedux {}

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
        <Instructions complete />
        <h1>{this.props.example}</h1>
        {this.state.shows.map(x => (
          <Show id={x.id} name={x.name} episodesSeen={x.episodesSeen} />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
