import React, { Component } from 'react'

class Instructions extends Component {
  render() {
    return (
      <div>
        <p>
          Pass a 'complete' prop to the instructions component in <code>src/App.js</code>. See the README for more details. If you are successful, you'll see another line below saying you've completed this part.
        </p>
        <br />
        <p hidden={!this.props.complete}>
          Completed Part 1!
        </p>
      </div>
    )
  }
}

export default Instructions
