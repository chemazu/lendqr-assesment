import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./Component/Header";
import Dashboard from "./Views/Dashboard";
import UserDetail from "./Views/UserDetail";

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Header />
      </div>
      <div className="main">
        <Routes>
          <Route path="/user" element={<UserDetail />} />
        </Routes>
        {/* <Dashboard /> */}
      </div>
    </div>
  );
}

export default App;
