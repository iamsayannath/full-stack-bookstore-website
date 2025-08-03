import React from 'react';
import { Routes, Route } from "react-router-dom";
import BookStore from './pages/BookStore';
import BookDetails from './pages/BookDetails';
import Navbar from './components/Navbar';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<BookStore />} />
        <Route path='/book/:id' element={<BookDetails />} />

      </Routes>
    </>
  );
};

export default App

