import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
//import { books } from './books';
import Book from './Book.js';
import './index.css';

import reportWebVitals from './reportWebVitals';
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200,200_.jpg',
    title: 'I Love you the Moon and Back',
    author: 'Amelia Bundlewoman'
  },

  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200,200_.jpg',
    title: 'Our Class is a family',
    author: 'Shannon Olsen'
  },

  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200,200_.jpg',
    title: 'The Vanishing Half',
    author: 'Brit Bennett'
  },
];




function MyComponent() {
  const [books, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch('/api/books')
      .then((res) => res.json())
      .then((books) => {
        setData(books);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error || !Array.isArray(books)) {
    return <p>There was an error loading your data!</p>;
  }
}

function BookList() {
  MyComponent();
  return (
    <section className='booklist'>
      {books.map((book, index) => {
        return <Book key={{ book }.id} {...book}></Book>;
      })}
    </section>
  );
}


ReactDOM.render(<BookList />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
