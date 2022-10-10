import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Dashboard from "./Views/Dashboard";
import UserDetail from "./Views/UserDetail";
import Login from "./Views/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [auth, setAuth] = React.useState(false);
  React.useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      setAuth(true);
    }
  }, []);
  return (
    <div className="App">
      <div className="nav">
        <Header />
      </div>
      <div className="main">
        <Routes>
          <Route
            path="/user/:id"
            element={
              <ProtectedRoute
                children={<UserDetail />}
                auth={localStorage.getItem("token") !== null}
              />
            }
          />
          <Route path="/" element={<Login />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
           */}
          <Route
            path="/dashboard"
            element={<ProtectedRoute children={<Dashboard />} auth={auth} />}
          />
        </Routes>
        {/* <Dashboard /> */}
      </div>
    </div>
  );
}

export default App;
