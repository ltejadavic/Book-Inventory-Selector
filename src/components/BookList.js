import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../features/books/booksSlice';

const BookList = () => {
  const [genre, setGenre] = useState('All');

  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const scienceFictionBooks = useSelector(selectScienceFictionBooks);

  const renderBooks = () => {
    if (genre === 'Horror') return horrorBooks;
    if (genre === 'Fantasy') return fantasyBooks;
    if (genre === 'Science Fiction') return scienceFictionBooks;
    return [...horrorBooks, ...fantasyBooks, ...scienceFictionBooks];
  };

  return (
    <div>
      <h1>Book Inventory</h1>
      <div>
        <button onClick={() => setGenre('Horror')}>Horror</button>
        <button onClick={() => setGenre('Fantasy')}>Fantasy</button>
        <button onClick={() => setGenre('Science Fiction')}>Science Fiction</button>
        <button onClick={() => setGenre('All')}>All</button>
      </div>
      <ul>
        {renderBooks().map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} - {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;