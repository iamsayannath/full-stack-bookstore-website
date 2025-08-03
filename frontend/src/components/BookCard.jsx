import React from 'react';

const BookCard = ({ title, subtitle, image }) => {
  return (
    <div className="p-4 m-4 rounded-lg shadow-2xl text-sm max-w-80 border border-b-black">
      <img className="rounded-md max-h-40 w-full object-cover" src={image} alt="officeImage" />
      <p className="text-gray-900 text-xl font-semibold ml-2 mt-2">{title}</p>
      <p className="text-gray-500 mt-3 ml-2">{subtitle}</p>
    </div>
  );
};

export default BookCard;