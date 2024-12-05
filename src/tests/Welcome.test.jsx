import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

test("renders Welcome component correctly", () => {
  render(<Welcome />);
  const welcomeMessage = screen.getByText(/Welcome to EpiBook!/i);
  expect(welcomeMessage).toBeInTheDocument();
});
