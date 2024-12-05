import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("filters books based on navbar selection", () => {
  render(<App />);

  // Simula la selezione di un filtro dalla navbar (esempio: "Browse")
  const browseLink = screen.getByText(/Browse/i);
  fireEvent.click(browseLink);

  const cards = screen.getAllByRole("article");
  expect(cards.length).toBeGreaterThan(0);
});
