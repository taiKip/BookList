import classes from './NavBar.module.css'
import React,{useContext} from 'react'
import { BookContext } from '../contexts/BookContext'

const NavBar = () => {
    const {books} = useContext(BookContext)
    return (
        <div className={classes.navbar}>
            <h1>Tai's Book List</h1>
            <p>Currently you have {books.length} books to get  through...</p>
        </div>
    )
}

export default NavBar
