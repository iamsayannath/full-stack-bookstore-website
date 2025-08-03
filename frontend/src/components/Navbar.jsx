import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-20 bg-white text-gray-700 shadow-[0px_4px_25px_0px_#0000000D] transition-all">


      <h1><Link to="/" className="text-indigo-600 text-2xl">BookStore</Link></h1>


      <ul className="md:flex hidden items-center gap-10">
        <li><a className="hover:text-gray-500/80 transition" href="/">All books</a></li>
        <li><a className="hover:text-gray-500/80 transition" href="#">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;