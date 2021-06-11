import {createContext,useState}  from 'react'

export const BookContext = createContext();




const BookContextProvider = (props) => {
   const [books,setBooks]= useState([
        {title:'name of the wind',author:'patrick rothfuss',id:1},
        {title:'the final empire' ,author:'brandon sanderson',id:2}
    ])
    const addBookHandler  = (title,author)=>{
        const newBook = {title:title,author:author,id:Date.now()}

        setBooks([newBook,...books])
    }
    const removeBookHandler = (id)=>{
        const filteredBooks = books.filter(book=>book.id!==id)
            setBooks(filteredBooks)
    }
    return (
       <BookContext.Provider value={{books,addBookHandler,removeBookHandler}} >
           {props.children}
       </BookContext.Provider>
    )
}

export default BookContextProvider
