import classes from "./BookList.module.css";
import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import Book from "./Book";

const BookList = () => {
  const { books, removeBookHandler } = useContext(BookContext);
 
  return (
    <ul className={classes.bookList}>
      {books.map((book) => (
        <Book
        id={book.id}
        key={book.id}
          bookTitle={book.title}
          author={book.author}
          deleteBook={removeBookHandler}
        />
      ))}
    </ul>
  );
};

export default BookList;
