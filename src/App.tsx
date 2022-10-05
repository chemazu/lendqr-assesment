import React from "react";
import "./App.scss";
import Header from "./Component/Header";
import UserDetail from "./Views/UserDetail";

function App() {
  return (
    <div className="App">
      <div className="nav">
        {/* <Header/> */}
      </div>
      <div className="main">
        <UserDetail />
      </div>
    </div>
  );
}

export default App;
