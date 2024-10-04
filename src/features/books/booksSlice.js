import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: '1984', author: 'George Orwell', genre: 'Science Fiction' },
    { id: 2, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
    { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

export const selectBooks = (state) => state.books.books;

export const selectHorrorBooks = createSelector(
  selectBooks,
  (books) => books.filter((book) => book.genre === 'Horror')
);

export const selectFantasyBooks = createSelector(
  selectBooks,
  (books) => books.filter((book) => book.genre === 'Fantasy')
);

export const selectScienceFictionBooks = createSelector(
  selectBooks,
  (books) => books.filter((book) => book.genre === 'Science Fiction')
);

export default booksSlice.reducer;