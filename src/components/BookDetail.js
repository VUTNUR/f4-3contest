// components/BookDetail.js
import React from 'react';

function BookDetail({ book, onClose }) {
    console.log("hi iam here")
  return (
    <div className="book-detail">
        <div>
        <img
        src={book.volumeInfo.imageLinks.smallThumbnail}
        alt={book.volumeInfo.title}
      />
        </div>
        <div>
        <h2>{book.volumeInfo.title}</h2>
      <p>{book.volumeInfo.authors[0]}</p>
      <p>{book.volumeInfo.description}</p>
      <table>
      <tr>
        <td>Avg Rating:{book.volumeInfo.averageRating}</td>
        <td>Rating Count:{book.volumeInfo.ratingsCount}</td>
        <td>Publisher:{book.volumeInfo.publisher}</td>
        <td className='noRight'>Language:{book.volumeInfo.language}</td>
      </tr>
      </table>
      
      <div className="buttons">
        <a className="button" href={book.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
          Read Now
        </a>
        <a className="button" href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
          More Info
        </a>
        <button onClick={onClose}>Close</button>
      </div>
        </div>
      
    </div>
  );
}

export default BookDetail;
