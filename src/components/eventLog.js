import React, { Component } from "react";
import style from "./eventLog.module.css";
import PlanPhase from "./firstPhase"

export default class EventLog extends Component {
  state = {
    currPhase: 0,
    currSubPhase: 0,
    phaseOneSelection: [-1, -1, -1],
  };

  onSelect = (e, index) => {
    // console.log(e.target);
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
  };

  isDisabled = (index) => {
    if (this.state.currSubPhase === index) {
      return "";
    }
    return true;
  };
  render() {
    let firstPhase = [];
    for (let i = 0; i < 4; i++) {
      firstPhase.push(
        this.state.currSubPhase >= i && (
          <div key={i}>
            <PlanPhase
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
      </div>
    );
  }
}
