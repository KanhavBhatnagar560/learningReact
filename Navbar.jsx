import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white hover:text-purple-400 transition duration-300">
          BlogApp
        </a>
        <div className="space-x-4">
          <a href="/" className="text-lg text-gray-300 hover:text-purple-400 transition duration-300">Home</a>
          <a href="/about" className="text-lg text-gray-300 hover:text-purple-400 transition duration-300">About</a>
          <a href="/contact" className="text-lg text-gray-300 hover:text-purple-400 transition duration-300">Contact</a>
          <a href="/addBlog" className="text-lg text-gray-300 hover:text-purple-400 transition duration-300">+</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

