import React from "react";
import "./style.scss";
import backArrow from "../../assests/img/back-arrow.svg";
import filledStar from "../../assests/img/filled_star.svg";
import emptyStar from "../../assests/img/empty_star.svg";

import avatar from "../../assests/img/avatar.svg";

import DashboardMenu from "../../components/DashboardMenu";

export default function UserDetail() {
  return (
    <div className="user-detail">
      {/* <div className="left">
        <div className="left-item">
          <img src={briefcase} alt="icon" />

          <h3>Switch Organization</h3>
          <img src={arrowDown} alt="icon" />
        </div>
        <div className="left-item">
          <img src={dash} alt="icon" />
          <h4>Dashboard</h4>
        </div>
        <div className="customers">
          <div className="top">
            <h4>Customers</h4>
          </div>
          <div className="bottom">
            {customers.map((item: { title: string; img: any }, index) => {
              return (
                <div className="left-item" key={index}>
                  <img src={item.img} alt="users" />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="businesses">
          <div className="top">
            <h4>Businesses</h4>
          </div>
          <div className="bottom">
            {businesses.map((item: { title: string; img: any }, index) => {
              return (
                <div className="left-item" key={index}>
                  <img src={item.img} alt="users" />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="settings">
          <div className="top">
            <h4>Settings</h4>
          </div>
          <div className="bottom">
            {settings.map((item: { title: string; img: any }, index) => {
              return (
                <div className="left-item" key={index}>
                  <img src={item.img} alt="users" />
                  <p>{item.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      <DashboardMenu />
      <div className="right">
        <div className="one">
          <div className="top">
            <img src={backArrow} alt="back" />
            <p>Back to Users</p>
          </div>
          <div className="bottom">
            <h3>User Details</h3>
            <div className="button-wrapper">
              <button>Blacklist User</button>
              <button className="sec">Activate User</button>
            </div>
          </div>
        </div>
        <div className="two">
          <div className="top">
            <img src={avatar} alt="Avatar" />
            <div className="user-name">
              <h3>Grace Effiom</h3>
              <p>LSQFf587g90</p>
            </div>
            <div className="user-tier">
              <p>User's Tier</p>
              <div className="stars">
                <img src={filledStar} alt="star" />{" "}
                <img src={emptyStar} alt="star" />{" "}
                <img src={emptyStar} alt="star" />
              </div>
            </div>
            <div className="user-account">
              <h3>₦ 200,000.00</h3>
              <p>9912345678/Providus Bank</p>
            </div>
          </div>
          <div className="bottom">
            <p className="active">General Details</p>
            <p>Documents</p>
            <p>Bank Details</p>
            <p>Loans</p>
            <p>Savings</p>
            <p>App and System</p>
          </div>
        </div>
        <div className="three">
          <div className="personal">
            <div className="top">
              <h4>Personal Information</h4>
            </div>
            <div className="bottom">
              <div className="edu-item">
                <p>full Name</p>
                <h4>Grace Effiom</h4>
              </div>

              <div className="edu-item">
                <p>Phone Number</p>
                <h4>07060780922</h4>
              </div>
              <div className="edu-item">
                <p>Email Address</p>
                <h4>grace@gmail.com</h4>
              </div>
              <div className="edu-item">
                <p>Bvn</p>
                <h4>07060780922</h4>
              </div>
              <div className="edu-item">
                <p>Gender</p>
                <h4>Female</h4>
              </div>
              <div className="edu-item">
                <p>Marital status</p>
                <h4>Single</h4>
              </div>
              <div className="edu-item">
                <p>Children</p>
                <h4>None</h4>
              </div>
              <div className="edu-item">
                <p>Type of residence</p>
                <h4>Parent’s Apartment</h4>
              </div>
            </div>
          </div>

          <div className="education">
            <div className="top">
              <h4>Education and Employment</h4>
            </div>
            <div className="bottom">
              <div className="edu-item">
                <p>level of education</p>
                <h4>B.Sc</h4>
              </div>
              <div className="edu-item">
                <p>employment status</p>
                <h4>Employed</h4>
              </div>
              <div className="edu-item">
                <p>sector of employment</p>
                <h4>FinTech</h4>
              </div>
              <div className="edu-item">
                <p>Duration of employment</p>
                <h4>2 years</h4>
              </div>
              <div className="edu-item">
                <p>office email</p>
                <h4>grace@lendsqr.com</h4>
              </div>
              <div className="edu-item">
                <p>Monthly income</p>
                <h4>₦200,000.00- ₦400,000.00</h4>
              </div>
              <div className="edu-item">
                <p>loan repayment</p>
                <h4>40,000</h4>
              </div>
            </div>
          </div>
          <div className="socials">
            <div className="top">
              <h4>Socials</h4>
            </div>
            <div className="bottom">
              <div className="edu-item">
                <p>Twitter</p>
                <h4>@grace_effiom</h4>
              </div>
              <div className="edu-item">
                <p>Facebook</p>
                <h4>Grace Effiom</h4>
              </div>
              <div className="edu-item">
                <p>Instagram</p>
                <h4>@grace_effiom</h4>
              </div>
            </div>
          </div>

          <div className="guarantor">
            <div className="top">
              <h4>Guarantor</h4>
            </div>
            <div className="bottom">
              <div className="edu-item">
                <p>full Name</p>
                <h4>Debby Ogana</h4>
              </div>
              <div className="edu-item">
                <p>Phone Number</p>
                <h4>07060780922</h4>
              </div>
              <div className="edu-item">
                <p>Email Address</p>
                <h4>debby@gmail.com</h4>
              </div>
              <div className="edu-item">
                <p>Relationship</p>
                <h4>Sister</h4>
              </div>
            </div>
          </div>
          <div className="last">
            <div className="bottom">
              <div className="edu-item">
                <p>full Name</p>
                <h4>Debby Ogana</h4>
              </div>
              <div className="edu-item">
                <p>Phone Number</p>
                <h4>07060780922</h4>
              </div>
              <div className="edu-item">
                <p>Email Address</p>
                <h4>debby@gmail.com</h4>
              </div>
              <div className="edu-item">
                <p>Relationship</p>
                <h4>Sister</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
