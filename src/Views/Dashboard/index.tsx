import React from "react";
import "./style.scss";
import DashboardMenu from "../../Component/DashboardMenu";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardMenu />
      <div className="right"></div>
    </div>
  );
}
