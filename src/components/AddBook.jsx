import React, { useState } from 'react';
import axios from 'axios';
import '../App.css'; // Import the CSS file for styling
import { useNavigate, useParams } from 'react-router-dom';


function AddBook() {
    const [bookId, setBookId] = useState('');
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [description, setDescription] = useState('');
   
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('https://finalbackend-2.onrender.com/api/v1/book', {
                bookId, bookTitle, bookAuthor, description
            });
            setMessage('Book added successfully');
            setTimeout(() => navigate('/App.jsx'), 2000); 
        } catch (error) {
            if (error.response && error.response.status === 400) {
                setMessage('Book ID already exists. Please add another ID.');
            } else {
                setMessage('An error occurred. Please try again.');
            }
        }
    };

    return (
        <div class="CreateBook">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
          </div>
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Add Book</h1>
            <p class="lead text-center">Create new book</p>
            <form onSubmit={handleSubmit}>

            <input
                    type="text"
                    placeholder="Book Id"
                    value={bookId}
                    onChange={(e) => setBookId(e.target.value)}
                    required
                />
             
                 <input
                    type="text"
                    placeholder="Book Name"
                    value={bookTitle}
                    onChange={(e) => setBookTitle(e.target.value)}
                    required
                />
             
                <input
                    type="text"
                    placeholder="Author Name"
                    value={bookAuthor}
                    onChange={(e) => setBookAuthor(e.target.value)}
                    required
                />
             
               <input
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
              <input type="submit" class="btn btn-info btn-block mt-4" />
            </form>
          </div>
        </div>
      </div>
    </div>
    );
}

export default AddBook;