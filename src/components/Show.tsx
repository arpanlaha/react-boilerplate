import React, { Component, Props } from "react";

export interface ShowType {
  id: number;
  name: string;
  episodesSeen: number;
}
interface ShowProps extends Props<Component>, ShowType {}
class Show extends Component<ShowProps> {
  // YOUR CODE GOES BELOW

  render(): JSX.Element {
    return <div />;
  }
}

export default Show;
