import React, { Component } from "react";
import "./App.css";
import EventLog from "./components/EventLog/eventLog";
import SecondPhase from "./components/EventLog/secondPhase";
import Home from "./components/Home/home";
import RecentMission from "./components/RecentMission/recentMission";
import SideNav from "./components/SideNavbar/sideNav";
import "./papercss/paper.min.css";

class App extends Component {
  state = {
    phase: 0,
    coins: 3000,
  };
  openMoon = () => {
    this.setState({ phase: 1 });
  };
  openMars = () => {
    this.setState({ phase: 2 });
  };
  updateFund = (value) => {
    this.setState((prevState) => {
      return { coins: prevState.coins - value };
    });
  };
  render() {
    return (
      <div className="App">
        <header>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </header>
        <div className="row">
          <SideNav />
          <div className="col-6 col">
            <div className="row">
              <div className="col-12 col">
                <h4 className="float-left">
                  Gandalf{" "}
                  <span className="badge warning">
                    Fund: {this.state.coins.toLocaleString()} coins
                  </span>
                </h4>
              </div>
            </div>
            {this.state.phase === 0 && (
              <Home openMoon={this.openMoon} openMars={this.openMars} />
            )}
            {this.state.phase === 2 && (
              <EventLog updateFund={this.updateFund} />
            )}
            {/* <SecondPhase/> */}
          </div>
          <RecentMission />
        </div>
      </div>
    );
  }
}

export default App;
