import React from "react";
import "./style.scss";
import DashboardMenu from "../../components/DashboardMenu";
import loanUsers from "../../assests/img/loan-users.svg";
import hdot from "../../assests/img/h-dots.svg";
import savingUsers from "../../assests/img/saving-users.svg";
import usersIcon from "../../assests/img/users-icon.svg";
import activeUsers from "../../assests/img/active-users.svg";
import filterImg from "../../assests/img/filter-img.svg";

import Pagination from "../../components/Pagination";

export default function Dashboard() {
  let [userData, setUserData] = React.useState<[]>();
  const [PageSize, setPageSize] = React.useState<number>(25);
  const handleChange = (e: any) => {
    setPageSize(e.target.value);
  };
  const [currentPage, setCurrentPage] = React.useState(1);
  const currentTableData = React.useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (userData !== undefined) {
      return userData.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, userData, PageSize]);
  React.useEffect(() => {
    fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
      .then((res) => res.json())
      .then((result) => {
        setUserData(result);
      })
      .catch((error) => console.log(error));
  }, []);

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
            <p>Active Users</p>
            <h4>2,453</h4>
          </div>
          <div className="card">
            <img alt="card-icon" src={loanUsers} />
            <p>Users with loans</p>
            <h4>12,453</h4>
          </div>
          <div className="card">
            <img alt="card-icon" src={savingUsers} />
            <p>Users with savings</p>
            <h4>102,453</h4>
          </div>
        </div>
        <div className="bottom">
          <table>
            <tr className="table-heading">
              <th className="theading">
                <p>Organization</p>
                <img src={filterImg} alt="filter" />
              </th>
              <th className="theading">
                Username <img src={filterImg} alt="filter" />
              </th>
              <th className="theading">
                Email <img src={filterImg} alt="filter" />
              </th>
              <th className="theading mobile">
                Phone <img src={filterImg} alt="filter" />
              </th>
              <th className="theading desktop">
                Phone number <img src={filterImg} alt="filter" />
              </th>
              <th className="theading mobile">
                Joined <img src={filterImg} alt="filter" />
              </th>
              <th className="theading desktop">
                Date Joined <img src={filterImg} alt="filter" />
              </th>
              <th className="theading">
                Status <img src={filterImg} alt="filter" />
              </th>
              <th style={{ display: "none" }}>
                dot <img src={filterImg} alt="filter" />
              </th>
            </tr>
            {currentTableData ? (
              currentTableData.map((item: any, index: number) => {
                console.log(item);
                return <TableRow item={item} key={index} />;
              })
            ) : (
              <>Loading...</>
            )}
          </table>
          {/* <table>
            <tr className="table-heading">
              <th>Organization</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Date joined</th>
              <th>Status</th>
              <th style={{ display: "none" }}>dot</th>
            </tr>
          </table> */}
          {userData ? (
            <div className="pagination-holder">
              <div className="showing">
                <p>Showing</p>
                <select name="pageSize" id="pagesize" onChange={handleChange}>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                  <option value={100}>100</option>
                </select>
                <p>out of {userData.length}</p>
              </div>
              <div className="pagination-display-holder">
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={userData.length}
                  pageSize={PageSize}
                  onPageChange={(page: React.SetStateAction<number>) =>
                    setCurrentPage(page)
                  }
                />
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
const TableRow = ({ item }: { item: any }) => {
  let month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log(item.createdAt);
  let createdDate = new Date(item.createdAt);
  console.log(month[createdDate.getMonth()]);
  let randomStatus = () => {
    let status = ["Inactive", "Pending", "Blacklisted", "Active"];
    return status[Math.floor(Math.random() * 4)];
    // return
  };
  function formatAMPM() {
    var hours = createdDate.getHours();
    var minutes: any = createdDate.getMinutes();
    var ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  }
  let status = randomStatus();
  return (
    <tr className="table-body">
      <td>{item.orgName}</td>
      <td>{item.userName}</td>
      <td>{item.email}</td>
      <td>{item.phoneNumber}</td>
      <td>
        {month[createdDate.getMonth()]} {createdDate.getDay()},{" "}
        {createdDate.getFullYear()} {formatAMPM()}
      </td>
      <td>
        <p className={status}>{status}</p>
      </td>
      <td>
        <img src={hdot} alt="options" />
      </td>
    </tr>
  );
};
