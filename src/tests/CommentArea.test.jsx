import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("renders CommentArea when a book is selected", () => {
  render(<App />);

  // Simula il clic su un libro (assumiamo che il primo libro sia cliccabile)
  const bookCard = screen.getAllByRole("article")[0];
  fireEvent.click(bookCard);

  // Controlla che CommentArea sia presente
  const commentArea = screen.getByText(/COMMENTS:/i);
  expect(commentArea).toBeInTheDocument();
});
