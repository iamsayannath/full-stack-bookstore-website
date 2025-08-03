import { createContext, useEffect, useState } from 'react';

// Create the context
// eslint-disable-next-line react-refresh/only-export-components
export const MyContext = createContext();

// Create a provider component
export const MyProvider = ({ children }) => {


  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const getData = async () => {
      const url = 'https://full-stack-bookstore-website-backend.onrender.com/getbook';
      const options =
      {
        method: 'GET',
        headers:
          { accept: 'application/json' }
      };

      try {
        setLoading(true);
        const response = await fetch(url, options);
        const data = await response.json();
        setBooks(data.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, []);


  const data = {
    books,
    loading,
    setLoading
  };



  return (
    <MyContext.Provider value={data}>
      {children}
    </MyContext.Provider>
  );
};


