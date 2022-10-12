import React from "react";
import { MemoryRouter } from "react-router-dom";
import { findByRole, render, screen } from "@testing-library/react";
import Login from "../src/Views/Login";
import Dashboard from "./Views/Dashboard";
import AuthProvider from "../src/context/AuthContext";

test("Login", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/LOG IN/i);
  expect(linkElement).toBeInTheDocument();
});
test("Dashboard", async () => {
  render(
    <AuthProvider>
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    </AuthProvider>
  );
  const linkElement = screen.getAllByText(/Loading.../i);
  expect(linkElement[0]).toBeInTheDocument();
  let userList = await screen.findByRole("table");
  expect(userList).toBeInTheDocument();
});
