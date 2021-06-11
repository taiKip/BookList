import classes from './Book.module.css'
import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext'

const Book = (props) => {
    const {dispatch} = useContext(BookContext)
    const handleDelete=()=>{
      dispatch({type:'remove-book',id:props.id})
      
    }
    return (
        <li className={classes.book} onClick={handleDelete}>
           <h2>{props.bookTitle}</h2> 
           <p>{props.author}</p>
        </li>
    )
}

export default Book
