import React, { Component, createRef } from "react";
import style from "./eventLog.module.css";

let firstPhaseOptions = [
  ["Atlas V541", "Vega", "PSLV"],
  ["chemical propulsion", "electrical propulsion"],
  ["Oxygen", "Hydrozene"],
];

let firstPhaseOptDescription = [
  ["Blah", "Vega graphics suck", "PSLV boooo"],
  ["Blah", "Vega graphics suck"],
  ["Blah", "Vega graphics suck"],
  ["Blah", "Vega sucks"],
];

let firstPhaseDescription = [
  `You have chosen Mars, that’s 0.38 million km away, Get ready for this adventurous
  heavy weight mission...
  First you have to plan out the mission. Lets start with the lauch vehicle`,
  `Oh cool, chose one from the Atlas family! Now you need a propulsion system, yeaah one with a main engine and thrusters.`,
  `chemical propulsion, cool now time to choose a fuel to blast off!!`,
  `Fuel count`,
];

export default class PlanPhase extends Component {
  constructor(props) {
    super(props);
    this.sliderValue = createRef();
  }

  sliderChange = (e)=>{
    console.log(this.sliderValue.current);
    this.sliderValue.current.innerHTML = e.target.value;
  }
  render() {
    return (
      <>
        <div className={`row ${style["main-content"]}`}>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>{"<gandalf>"}</strong>
                </td>
                <td>{firstPhaseDescription[this.props.subPhase]}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <table>
          <tbody>
            {this.props.subPhase === 3 && (
              <tr>
                <td>
                  <div className={style.slidecontainer}>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      // value="50"
                      onChange={(e) =>
                        this.sliderChange(e)
                      }
                      className={style.slider}
                    />
                    <p>
                      Value: <span ref={this.sliderValue}>50</span>
                    </p>
                  </div>
                </td>
              </tr>
            )}
            {this.props.subPhase < 3 &&
              firstPhaseOptions[this.props.subPhase].map((opt, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <button
                        onClick={(e) => this.props.onSelect(e, index)}
                        disabled={this.props.isDisabled}
                      >
                        {opt}
                      </button>
                    </td>
                    <td>
                      <p>
                        {firstPhaseOptDescription[this.props.subPhase][index]}
                      </p>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    );
  }
}
