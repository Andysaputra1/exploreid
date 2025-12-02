import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // --- STATE BARU UNTUK MODAL ---
  const [showModal, setShowModal] = useState(false);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  // Efek Scroll (Tetap sama)
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- LOGIC KIRIM WA ---
  const handleWhatsApp = () => {
    if (!origin || !destination) {
      alert("Harap isi kota asal dan tujuan!");
      return;
    }
    
    const message = `Halo Admin! Saya mau booking tiket kapal dari *${origin}* ke *${destination}*. Mohon infonya.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6285265182020?text=${encodedMessage}`, '_blank');
    
    // Tutup modal setelah kirim
    setShowModal(false);
    setOrigin('');
    setDestination('');
  };

  return (
    <>
      {/* NAVBAR UTAMA */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-content">
          
          {/* Logo */}
          <div className="navbar-brand">
            <img src="/logo.svg" alt="Reservasi.id Logo" className="brand-logo" />
            <span className="brand-name">Reservasi.id</span>
          </div>

          {/* Menu */}
          <ul className="navbar-links">
            <li><a href="#home" className="active">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>

          {/* Actions */}
          <div className="navbar-actions">
            <div className="search-wrapper">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="search-icon"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" placeholder="Cari rute..." />
            </div>
            
            {/* Ubah onClick untuk buka Modal */}
            <button className="btn-primary" onClick={() => setShowModal(true)}>
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* --- POP-UP MODAL (KODE BARU) --- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            {/* Tombol Close (X) */}
            <button className="btn-close" onClick={() => setShowModal(false)}>
              ✕
            </button>

            <div className="modal-header">
              <h3>Pesan Tiket Cepat</h3>
              <p>Mau kemana hari ini?</p>
            </div>

            <div className="modal-body">
              <div className="form-group">
                <label>Dari (Asal)</label>
                <input 
                  type="text" 
                  placeholder="Contoh: Batam" 
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label>Ke (Tujuan)</label>
                <input 
                  type="text" 
                  placeholder="Contoh: Singapura" 
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <button className="btn-submit-wa" onClick={handleWhatsApp}>
                Lanjut ke WhatsApp ➝
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;