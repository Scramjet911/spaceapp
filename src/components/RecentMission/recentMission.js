import React from "react"
import "./recentMission.module.css";

export default function RecentMission(){
  return (
    <div className="col-3 col recent">
      <strong className="recent-text">Recent</strong>
      <button className="btn-block btn-success recent-btn">
        Launched to Moon
      </button>
      <button className="btn-block btn-primary recent-btn">
        Launched to Mars
      </button>
      <button className="btn-block btn-primary recent-btn">
        Launched to Saturn
      </button>
      <button className="btn-block btn-primary recent-btn">
        Launched to Alpha Centauri
      </button>
    </div>
  )
}