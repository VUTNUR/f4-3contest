// App.js
import React, { useState, useEffect } from 'react';
// import { fetchBooks } from './fetchbook';
// import Navbar from './components/Navbar';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
const API_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

 const fetchBooks = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}?q=${query}`);
    const data = await response.json();
    return data.items; // Extracting the array of books from the response
  } catch (error) {
    console.error("Error fetching books:", error);
    return [];
  }
};

function App() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);


  useEffect(() => {
    async function fetchInitialData() {
      const harryPotterBooks = await fetchBooks('harry+potter');
      const sherlockHolmesBooks = await fetchBooks('sherlock+holmes');
      // console.log(harryPotterBooks)
      setBooks([...harryPotterBooks, ...sherlockHolmesBooks]);
    }

    fetchInitialData();
  }, []);
  const openBookDetail = (book) => {
    setSelectedBook(book);
  };

  const closeBookDetail = () => {
    setSelectedBook(null);
  };
  console.log(selectedBook)

  return (
    <div className="App">
      {/* <Navbar /> */}
      
      {selectedBook && (
        <BookDetail book={selectedBook} onClose={closeBookDetail} />
      )}
      <BookList books={books} onBookClick={openBookDetail} />
    </div>
  );
}

export default App;

