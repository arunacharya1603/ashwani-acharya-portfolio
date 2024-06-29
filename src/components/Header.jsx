import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Img from "../assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg p-4 z-10">
      {" "}
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-black text-pretty font-mono hover:italic text-yellow-900 flex items-center"
        >
          <img
            src={Img}
            alt="Logo"
            className="w-14 h-14 inline-block mr-2 rounded-md hover:animate-ping"
          />
          Ashwani Acharya
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-4">
            <li>
              <NavLink
                exact="true"
                to="/"
                className="text-white hover:text-gray-400"
                activeclassname="text-gray-300"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-white hover:text-gray-400"
                activeclassname="text-gray-300"
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="text-white hover:text-gray-400"
                activeclassname="text-gray-300"
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-white hover:text-gray-400"
                activeclassname="text-gray-300"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            type="button"
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center space-y-4 mt-4">
            <li>
              <NavLink
                exact="true" 
                to="/"
                className="text-white hover:text-gray-400"
                activeclassname="text-gray-300"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-white hover:text-gray-400"
                activeclassname="text-gray-300"
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className="text-white hover:text-gray-400"
                activeclassname="text-gray-300"
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-white hover:text-gray-400"
                activeclassname="text-gray-300"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
