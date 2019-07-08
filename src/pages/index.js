import React, { Component } from "react";
import { Instructions, Show } from "../components";
import { connect } from "react-redux";
import "../static/style.css";

const mapStateToProps = state => ({
  example: state.example.example
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [
        { id: 1, name: "Game of Thrones", episodes_seen: 0 },
        { id: 2, name: "Naruto", episodes_seen: 220 },
        { id: 3, name: "Black Mirror", episodes_seen: 3 }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <Instructions />
        <h1>{this.props.example}</h1>
        {this.state.shows.map(x => (
          <Show id={x.id} name={x.name} episodes_seen={x.episodes_seen} />
        ))}
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
