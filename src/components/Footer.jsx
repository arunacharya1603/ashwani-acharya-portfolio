import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/services" className="hover:text-gray-400">Services</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Ashwani Acharya. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
