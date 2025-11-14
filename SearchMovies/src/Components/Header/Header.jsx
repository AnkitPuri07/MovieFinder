import React from 'react';
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
      {/* Logo or Title */}
      <div className="text-2xl font-bold tracking-wide">✨ Movie<span className='text-red-300'>Finder</span></div>

      {/* Navigation Links */}
      <div className="flex gap-6 items-center text-sm font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition duration-200 hover:text-red-600 px-2 py-1 rounded ${
              isActive
                ? "bg-white text-indigo-600 font-semibold"
                : "text-white"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `transition duration-200 hover:text-red-600 px-2 py-1 rounded ${
              isActive
                ? "bg-white text-indigo-600 font-semibold"
                : "text-white"
            }`
          }
        >
          Favorites
        </NavLink>
        <Link
          to="/about"
          className="hover:text-red-600 transition duration-200"
        >
          About
        </Link>
      </div>

    </nav>
  );
}

export default Header;