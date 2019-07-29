import React, { Component, Props } from "react";
import NextHead from "next/head";

interface HeadProps extends Props<Component> {
  title?: string;
  description?: string;
  keywords?: string;
}

class Head extends Component<HeadProps> {
  render(): JSX.Element {
    return (
      <NextHead>
        <meta charSet="UTF-8" />
        <meta name="description" content={this.props.description || ""} />
        <meta name="keywords" content={this.props.keywords || ""} />
        <meta name="author" content="Arpan Laha" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="English" />
        <title>
          {`${
            this.props.title ? `${this.props.title} | ` : ""
          }React Boilerplate`}
        </title>
      </NextHead>
    );
  }
}

export default Head;
