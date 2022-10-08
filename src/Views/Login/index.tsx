import React from "react";
import logo from "../../assests/img/logo.svg";
import pablo from "../../assests/img/pablo.svg";

import "./style.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="left">
        <div className="logo">
          <img src={logo} alt="Lendsqr" />
          <h2>Lendsqr</h2>
        </div>
        <div className="img-wrapper">
          <img src={pablo} alt="Sign In" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}
