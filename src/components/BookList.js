import classes from "./BookList.module.css";
import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import Book from "./Book";

const BookList = () => {
  const { books } = useContext(BookContext);
 
  return (
    <ul className={classes.bookList}>
      {books.length!==0?books.map((book) => (
        <Book
        id={book.id}
        key={book.id}
          bookTitle={book.title}
          author={book.author}
         
        />
      )):<p style={{color:'white'}}>Sorry there Are No books to read:(</p>}
    </ul>
  );
};

export default BookList;
