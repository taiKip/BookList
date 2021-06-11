import classes from "./NewBookForm.module.css";
import React, { useState,useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const NawBookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  //context
  const {addBookHandler}=useContext(BookContext)
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };
  const handleSubmit=(event)=>{
event.preventDefault();
addBookHandler(title,author)
setTitle('');
setAuthor('');
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <input
        placeholder="book title"
        required
        value={title}
        onChange={handleTitle}
      />
      <input
        placeholder="author name"
        required
        value={author}
        onChange={handleAuthor}
      />
      <button type="submit">add book</button>
    </form>
  );
};

export default NawBookForm;
