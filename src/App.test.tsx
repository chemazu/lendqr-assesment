import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "../src/Views/Login";

test("Login", () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
