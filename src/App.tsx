import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Dashboard from "./Views/Dashboard";
import UserDetail from "./Views/UserDetail";
import Login from "./Views/Login";


function App() {
  return (
    <div className="App">
      <div className="nav">
        <Header />
      </div>
      <div className="main">
        <Routes>
          <Route path="/user/:id" element={<UserDetail />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        {/* <Dashboard /> */}
      </div>
    </div>
  );
}

export default App;
