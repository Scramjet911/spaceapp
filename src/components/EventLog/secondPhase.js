import React, { Component, createRef, useState } from "react";
import style from "./eventLog.module.css";

export default function SecondPhase() {
  const [sliderVal, setSliderVal] = useState(50);
  const [targetVal, setTargetVal] = useState(Math.floor(Math.random() * 101));
  const [isSliderActive, setSliderActive] = useState(1);
  const moveBar = createRef();
  // componentDidUpdate(){
  // if(this.state.isSliderActive!==0){
  //     if(this.state.sliderVal>=100){
  //         this.setState({isSliderActive : -1, sliderVal : 100});
  //     }
  //     else if(this.state.sliderVal<=0){
  //         this.setState({isSliderActive : 1, sliderVal : 0});
  //     }
  //     this.setState(prevstate=>{
  //         return {sliderVal:prevstate.sliderVal + prevstate.isSliderActive}
  //     });
  // }
  // }
  const move = () => {
    console.log(moveBar.current);
    if (isSliderActive !== 0) {
      if (sliderVal >= 100) {
        setSliderActive(-1);
        moveBar.current.style.left -= 1;
      } else if (sliderVal <= 0) {
        setSliderActive(1);
        moveBar.current.style.left -= 1;
      }
      // this.setState(prevstate=>{
      //     return {sliderVal:prevstate.sliderVal + prevstate.isSliderActive}
      // });
      moveBar.current.style.left += isSliderActive;
    }
    return <div></div>;
  };
  // render(){
  //     console.log(this.moveBar.current);
  //     if(this.moveBar.current)

  return (
    <div className={style["main-bar"]}>
      <div
        className={style["move-bar"]}
        style={{
          left: "50%",
        }}
        ref={moveBar}
      ></div>
    </div>
  );
  // }
}
