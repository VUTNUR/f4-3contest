// components/BookList.js
import React from 'react';


function BookList({ books, onBookClick }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        // Render each book as per your design
        <div key={book.id}
        className="book"
        onClick={() => onBookClick(book)}>
           {<img
            src={book.volumeInfo.imageLinks.smallThumbnail}
            alt={book.volumeInfo.title}
          />} 
        </div>
      ))}
    </div>
  );
}

export default BookList;
