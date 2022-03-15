import React, { Component } from 'react';
import "./Clicker.css";
import { randomWord } from "./Words.js";
import grave from "./images/grave.png"

//Really simple button clicker that uses React. One button adds 1 to the score and
//the other adds 2. I originally had this doing a little more but couldn't get it to
//move over to this file and just changed it to bare bones version.

class Clicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Your current score is: {this.state.score}</h1>
        <button id="button1" onClick={() => this.setState({ score: this.state.score + 1 })}>
          Click me
        </button>

        <button id="button2" onClick={() => this.setState({ score: this.state.score + 2})}>
          x2!
        </button>

      </div>
    );
  }
}

export default Clicker;