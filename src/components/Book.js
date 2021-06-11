import classes from './Book.module.css'
import React from 'react'

const Book = (props) => {
    const handleDelete=()=>{
      props.deleteBook(props.id)
      
    }
    return (
        <li className={classes.book} onClick={handleDelete}>
           <h2>{props.bookTitle}</h2> 
           <p>{props.author}</p>
        </li>
    )
}

export default Book
