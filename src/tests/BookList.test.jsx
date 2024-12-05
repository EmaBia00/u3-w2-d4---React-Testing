import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../components/BookList";
import fantasyBooks from "../data/fantasy.json";

test("renders the correct number of book cards", () => {
  render(<BookList books={fantasyBooks} selectedBookAsin={null} onBookSelect={() => {}} />);
  const cards = screen.getAllByRole("article");
  expect(cards).toHaveLength(fantasyBooks.length);
});

test("clicking a book changes its border color", () => {
  render(<BookList books={fantasyBooks} selectedBookAsin={null} onBookSelect={() => {}} />);
  const bookCard = screen.getAllByRole("article")[0];
  fireEvent.click(bookCard);
  console.log(bookCard);
  // Verifica che il bordo del libro selezionato cambi colore
  expect(bookCard).toHaveClass("border-warning");
});

test("clicking a second book resets the first book border", () => {
  render(<BookList books={fantasyBooks} selectedBookAsin={null} onBookSelect={() => {}} />);
  const firstBookCard = screen.getAllByRole("article")[0];
  const secondBookCard = screen.getAllByRole("article")[1];

  // Click sul primo libro
  fireEvent.click(firstBookCard);
  expect(firstBookCard).toHaveClass("border-danger");

  // Click sul secondo libro
  fireEvent.click(secondBookCard);

  // Verifica che il primo libro abbia il bordo normale
  expect(firstBookCard).toHaveClass("border-light");
  expect(secondBookCard).toHaveClass("border-danger");
});
