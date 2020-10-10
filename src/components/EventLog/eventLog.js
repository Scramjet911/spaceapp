import React, { Component, createRef } from "react";
import style from "./eventLog.module.css";
import FirstPhase from "./firstPhase";

export default class EventLog extends Component {
  state = {
    currPhase: 0,
    currSubPhase: 0,
    phaseOneSelection: [-1, -1, -1, -1],
  };
  constructor(props) {
    super(props);
    this.containerEnd = createRef();
  }
  onSelect = (e, index, cost) => {
    e.target.style.backgroundColor = "#C1FFBF";
    if (this.state.currPhase === 0) {
      this.setState((prevstate) => {
        prevstate.phaseOneSelection[this.state.currSubPhase] = index;
        return {
          phaseOneSelection: prevstate.phaseOneSelection,
        };
      });
    }

    if (this.state.currSubPhase < 3) {
      this.setState((prevstate) => {
        return {
          currSubPhase: prevstate.currSubPhase + 1,
        };
      });
    } else if (this.state.currPhase < 2) {
      this.setState((prevstate) => {
        return {
          currPhase: prevstate.currPhase + 1,
          currSubPhase: 0,
        };
      });
    }
    this.props.updateFund(cost);
  };

  isDisabled = (index) => {
    if (this.state.currSubPhase === index) {
      return "";
    }
    return true;
  };

  componentDidUpdate() {
    this.containerEnd.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    let firstPhase = [];
    for (let i = 0; i < 4; i++) {
      firstPhase.push(
        this.state.currSubPhase >= i && (
          <div key={i}>
            <FirstPhase
              subPhase={i}
              onSelect={this.onSelect}
              isDisabled={this.isDisabled(i)}
            />
          </div>
        )
      );
    }
    return (
      <div className={style["wrapper"]}>
        {this.state.currPhase === 0 && firstPhase}
        <div
          ref={(el) => {
            this.containerEnd = el;
          }}
        ></div>
      </div>
    );
  }
}
