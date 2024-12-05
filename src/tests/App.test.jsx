import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("does not render SingleComment initially", () => {
  render(<App />);

  // Controllo che il componente SingleComment non sia presente all'avvio della pagina
  const commentArea = screen.queryByText(/COMMENTS:/i);
  expect(commentArea).not.toBeInTheDocument();
});

test("loads and displays comments when a book with comments is selected", async () => {
  render(<App />);

  // Simula il clic su un libro con recensioni
  const bookCard = screen.getAllByRole("article")[0];
  fireEvent.click(bookCard);

  // Attendi che le recensioni vengano caricate
  const commentText = await screen.findByText(/Rating:/i);
  expect(commentText).toBeInTheDocument();
});
