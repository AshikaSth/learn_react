import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props; // Destructuring props
    const {state1, state2} = this.state; // Destructuring state if needed
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    );
  }
}
//in classs we tend to destructure props in render method

export default Welcome;
