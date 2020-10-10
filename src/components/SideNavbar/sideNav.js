import React from "react"
import style from "./sideNav.module.css";

export default function SideNav({ props }) {
  return (
    <div className="col-3 col">
      <img
        src="./images/icons/gandalf.jpg"
        width="200px"
        height="200px"
        className="float-left"
      />
      <table className={`table-hover ${style["phases"]}`}>
        <tbody>
          <tr>
            <td>Idle</td>
          </tr>
          <tr>
            <td>Planning Phase</td>
          </tr>
          <tr>
            <td>Trader</td>
          </tr>
          <tr>
            <td>Engineer</td>
          </tr>
          <tr>
            <td>Astronuat</td>
          </tr>
          <tr>
            <td>Explorer</td>
          </tr>
          <tr>
            <td>Hero</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
