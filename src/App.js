
import './App.css';
import BookList from './components/BookList';
import NavBar from './components/NavBar';
import BookContextProvider from './contexts/BookContext';
import NewBookForm from './components/NawBookForm'

function App() {
  return (
    <div className="App">
 <BookContextProvider>
   <nav>
   <NavBar/>
   </nav>
<main>
  <BookList/>
  <NewBookForm/>
</main>
 </BookContextProvider>
    </div>
    
  );
}

export default App;
