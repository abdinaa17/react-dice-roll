import React, { Component } from "react";
import Die from "./Die";
import "./rolling.css";

class Rolling extends Component {
  state = {
    firstDie: "one",
    secondDie: "two",
    thirdDie: "three"
  };
  changeDie = () => {
    let dieArr = ["one", "two", "three", "four", "five", "six"];

    let rollingOne = dieArr[Math.floor(Math.random() * dieArr.length)];
    let rollingTwo = dieArr[Math.floor(Math.random() * dieArr.length)];

    this.setState({
      firstDie: rollingOne,
      secondDie: rollingTwo
    });
  };

  render() {
    return (
      <div className="Rolling">
        <div className="Rolling-dice">
          <Die num={this.state.firstDie} />
          <Die num={this.state.secondDie} />
        </div>
        {(this.state.firstDie === "six") & (this.state.secondDie === "six") ? (
          <h1 className="Rolling-winner">Winner!!!!</h1>
        ) : (
          <button className="Rolling-btn" onClick={this.changeDie}>
            Roll it!
          </button>
        )}
      </div>
    );
  }
}

export default Rolling;
