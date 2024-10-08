import { useState , React } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import AddBook  from './components/AddBook';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import BookList from './components/BookList'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
            <div>
            
               <Routes>
               <Route path="/" element={<BookList />} />
               <Route path="/AddBook" element={<AddBook />} />
               </Routes>
            </div>
        </Router>
    </>
  )
}

export default App
