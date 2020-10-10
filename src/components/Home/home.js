import React from "react";
import style from "./home.module.css";

export default function Home(props) {
  return (
    <div className="row">
      <h3>Destinations</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <i className={style["icon"]}>
                <img
                  className="no-border"
                  src="./images/icons/moon-phase.png"
                  alt=""
                />
              </i>
            </td>
            <td>Moon</td>
            <td>0.38 million miles</td>
            <td>
              <button
                className="btn-block btn-primary-outline"
                onClick={() => props.openMoon()}
              >
                Launch
              </button>
            </td>
            <td></td>
          </tr>

          <tr>
            <td>
              <i className={style["icon"]}>
                <img
                  className="no-border"
                  src="./images/icons/mars.png"
                  alt=""
                />
              </i>
            </td>
            <td>Mars</td>
            <td>63.4 million miles</td>
            <td>
              <button 
                className="btn-block btn-primary-outline"
                onClick={() => props.openMars()}
              >Launch</button>
            </td>
            <td></td>
          </tr>
          <tr></tr>
          <tr>
            <td>
              <i className={style["icon"]}>
                <img
                  className="no-border"
                  src="./images/icons/saturn.png"
                  alt=""
                />
              </i>
            </td>
            <td>Saturn</td>
            <td>1.45 billion miles</td>
            <td>
              <button className="btn-block btn-primary-outline">Launch</button>
            </td>
            <td></td>
          </tr>
          <tr></tr>
          <tr>
            <td>
              <i className={style["icon"]}>
                <img
                  className="no-border"
                  src="./images/icons/universe.png"
                  alt=""
                />
              </i>
            </td>
            <td>Alpha Centauri</td>
            <td>41.3 trillion miles</td>
            <td>
              <button className="btn-block btn-primary-outline">Launch</button>
            </td>
            <td>
              <button className="btn-block btn-secondary-outline">
                Premium
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
