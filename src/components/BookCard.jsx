import React from 'react';
import '../App.css'; // Import the CSS file for BookList

function BookCard({ books }) {
    return (
        <div className="book-list">
            {books.map(book => (
                <div className="book-item" key={book.bookId}>
                    <img src={book.image} alt={book.name} />
                    <div className="book-details">
                        <h2>{book.bookTitle} </h2>
                        <p>Author: {book.bookAuthor}</p>
                        <p>description: {book.description}</p>
                        <h4>BookId : {book.bookId}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default BookCard;