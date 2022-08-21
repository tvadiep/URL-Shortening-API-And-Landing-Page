import React from "react";
import { render, screen } from "@testing-library/react";
import { Container } from "./Container";

const PassTest = () => {
  return <div>Shorten it</div>;
};

test("renders learn react link", () => {
  render(<PassTest />);
  const linkElement = screen.getByText(/Shorten it/i);
  expect(linkElement).toBeInTheDocument();
});
