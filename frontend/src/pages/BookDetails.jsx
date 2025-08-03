
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MyContext } from '../context/MyContext.jsx';

const BookDetails = () => {

  const { id } = useParams();
  const { books } = useContext(MyContext);
  const [book, setBook] = useState(null);


  useEffect(() => {
    const selectedBook = books?.find((b) => b.id === Number(id));
    setBook(selectedBook);
  }, [id, books]);

  if (!books) return <p>Loading...</p>;
  if (!book) return <p>Book not found.</p>;


  console.log(book);

  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 m-10" >
      <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
        <img className="max-w-md w-full object-cover rounded-2xl"
          src={book?.volumeInfo?.imageLinks?.thumbnail}
          alt="book image" />
      </div>
      <div className="text-sm text-slate-600 max-w-lg">


        <h1 className="text-xl uppercase font-semibold text-slate-700">{book?.volumeInfo?.title}</h1>


        <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>
        <p className="mt-8">Description -{book?.volumeInfo?.description} </p>
        <p className="mt-4">Publisher - {book?.volumeInfo?.publisher}</p>
        <p className="mt-4">Publish Date -{book?.volumeInfo?.publishedDate} </p>
        <p className="mt-4">Page Count - {book?.volumeInfo?.pageCount} </p>
        <p className="mt-4">Categories -{
          book?.volumeInfo?.categories?.map((cat, index) => {
            return <b key={index}>{cat}</b>;
          })
        } </p>
        <p className="mt-4">Authors - {
          book?.volumeInfo?.authors?.map((cat, index) => {
            return <b key={index}>{cat},  </b>;
          })
        }</p>


        <Link to={"/"}>
          <button className="flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-indigo-600 to-[#8A7DFF] py-3 px-8 rounded-full text-white cursor-pointer">
            Go back
          </button>
        </Link>
      </div>
    </section>
  );
};

export default BookDetails;