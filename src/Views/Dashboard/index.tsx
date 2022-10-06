import React from "react";
import "./style.scss";
import DashboardMenu from "../../Component/DashboardMenu";
import loanUsers from "../../assests/img/loan-users.svg";
import savingUsers from "../../assests/img/saving-users.svg";
import usersIcon from "../../assests/img/users-icon.svg";
import activeUsers from "../../assests/img/active-users.svg";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardMenu />
      <div className="right">
        <h2 className="heading">Users</h2>
        <div className="top">
          <div className="card">
            <img alt="card-icon" src={usersIcon} />
            <p>Users</p>
            <h4>2,453</h4>
          </div>
          <div className="card">
            <img alt="card-icon" src={activeUsers} />
            <p>Users</p>
            <h4>2,453</h4>
          </div>
          <div className="card">
            <img alt="card-icon" src={loanUsers} />
            <p>Users</p>
            <h4>2,453</h4>
          </div>
          <div className="card">
            <img alt="card-icon" src={savingUsers} />
            <p>Users</p>
            <h4>2,453</h4>
          </div>
        </div>
        <div className="bottom">
          <div className="table-heading">
            <p>Organization</p>
            <p>Username</p>
            <p>Email</p>
            <p>Phone number</p>
            <p>Date joined</p>
            <p>Status</p>
            <p>dot</p>
          </div>
          <div className="table-body">
            <p>Lendsqr</p>
            <p>Adedeji</p>
            <p>Email</p>
            <p>Phone number</p>
            <p>Date joined</p>
            <p>Status</p>
            <p>dot</p>
          </div>
        </div>
      </div>
    </div>
  );
}
