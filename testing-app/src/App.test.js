import { render, screen } from "@testing-library/react";
import App from "./App";

describe("appjs tests", () => {
  test("renders the h1 element", () => {
    render(<App />);
    const headElement = screen.getByRole("heading");
    expect(headElement).toBeInTheDocument();
  });

  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/react app/i);
    expect(linkElement).toBeInTheDocument();
  });
});
