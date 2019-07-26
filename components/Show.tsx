import React, { Component, Props } from "react";

/**
 * Type description for a show
 * @property id - a number
 * @property name - a string
 * @propert episodesSeen - a number
 */
export interface ShowType {
  id: number;
  name: string;
  episodesSeen: number;
}

/**
 * Props extended with ShowType
 */
interface ShowProps extends Props<Component>, ShowType {}
class Show extends Component<ShowProps> {
  // YOUR CODE GOES BELOW

  render(): JSX.Element {
    return <div />;
  }
}

export default Show;
