// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-light py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link className="text-lg font-bold no-underline" to="/">HostelHub</Link>
        <button
          className="lg:hidden block text-gray-500 focus:outline-none"
          type="button"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 no-underline">
            List Your Hostel
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
