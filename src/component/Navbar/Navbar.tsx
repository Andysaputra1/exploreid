import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Efek: Saat discroll ke bawah, navbar berubah warna
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-content">
        
        {/* 1. LOGO SECTION */}
        <div className="navbar-brand">
          <img src="/logo.svg" alt="Reservasi.id Logo" className="brand-logo" />
          <span className="brand-name">Reservasi.id</span>
        </div>

        {/* 2. MENU LINKS */}
        <ul className="navbar-links">
          <li><a href="#home" className="active">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#schedule">Schedule</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>

        {/* 3. SEARCH & ACTION */}
        <div className="navbar-actions">
          {/* Search Bar Simple */}
          <div className="search-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input type="text" placeholder="Cari rute..." />
          </div>
          
          <button 
            className="btn-primary" 
            style={{ backgroundColor: '#F29F05', color: 'white', border: 'none' }}
          >
            Book Now
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;