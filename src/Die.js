import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    let diceNum = this.props.num;
    return (
      <div className="Die">
        <i className={`fas fa-dice-${diceNum} fa-5x`}></i>
      </div>
    );
  }
}

export default Die;
