// src/component/Navbar.tsx

import React from 'react';
import './Navbar.css'; // File CSS-nya

// Kita buat komponen SVG untuk ikon "search"
// Kamu tidak perlu menginstal apa-apa, ini sudah bagian dari React
const SearchIcon = () => (
  <svg 
    className="search-icon"
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      
      {/* GRUP KIRI: Logo + Links */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <a href="/">
            <img src="/logo.svg" alt="Reservasi ID Logo" />
          </a>
        </div>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/destination">Destination</a></li>
          <li><a href="/ferry">Ferry</a></li>
          <li><a href="/about-us">About Us</a></li>
        </ul>
      </div>

      {/* GRUP KANAN: Search + Button */}
      <div className="navbar-right">
        <div className="navbar-search">
          <input type="text" placeholder="Search for a place, city, or destination..." />
          <SearchIcon />
        </div>
        <div className="navbar-actions">
          {/* Ganti teks dan style-nya akan di-update di CSS */}
          <button className="navbar-cta">Book now</button>
        </div>
      </div>

    </nav>
  );
};

export default Navbar;