import React, { useContext, useState } from 'react';
import BookCard from '../components/BookCard';
import { MyContext } from '../context/MyContext';
import { Link } from 'react-router-dom';
import '../index.css';

const BookStore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { books, loading } = useContext(MyContext);

  const filteredBooks = books?.filter((book) => {
    const title = book?.volumeInfo?.title?.toLowerCase() || '';
    const categories = book?.volumeInfo?.categories || [];

    const matchesSearch = title.includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || categories.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });


  return (
    <div>
      {loading ? (<div className="spinner"></div>) : (
        <div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 items-center my-4">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-60"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="p-2 border border-gray-300 rounded-md w-60"
            >
              <option value="All">All Categories</option>
              {/* Dynamically extract unique categories from books */}
              {[...new Set(books?.flatMap(book => book?.volumeInfo?.categories || []))].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className='flex justify-center gap-3 flex-wrap mt-3'>
            {
              // Check if books exists and is an array before mapping
              filteredBooks.map((book) => {
                // Use optional chaining to safely access nested properties
                const thumbnailUrl = book?.volumeInfo?.imageLinks?.thumbnail;
                const title = book?.volumeInfo?.title;
                const subtitle = book?.volumeInfo?.subtitle;

                // Only render the BookCard if a thumbnail URL exists
                if (thumbnailUrl) {
                  return (
                    <Link to={`/book/${book.id}`} key={book.id}>
                      <BookCard
                        key={book.id} // Add a unique key for list items
                        title={title}
                        subtitle={subtitle}
                        image={thumbnailUrl}
                      />
                    </Link>
                  );
                }
                return null; // Return null for books without a thumbnail
              })
            }
          </div>
        </div>
      )}
    </div>);
};


export default BookStore;