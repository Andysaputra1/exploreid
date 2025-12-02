import React, { useState, useEffect } from 'react';
import './Navbar.css';

// Data Dummy untuk Search
const searchData = [
  { id: 1, name: "Singapura", type: "Destinasi", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=100" },
  { id: 2, name: "Batam", type: "Destinasi", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=100" },
  { id: 3, name: "Johor Bahru", type: "Destinasi", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=100" },
  { id: 4, name: "Tanjung Pinang", type: "Destinasi", image: "https://images.unsplash.com/photo-1627918322678-857c1341c989?q=80&w=100" },
];

const Navbar: React.FC = () => {
  // State Navbar Scroll
  const [isScrolled, setIsScrolled] = useState(false);
  
  // State Menu Mobile (Hamburger)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State Modal (Pop-up Book Now)
  const [showModal, setShowModal] = useState(false);
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  // State Search
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Logic Scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter Search
  const filteredSearch = searchData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logic Kirim WA dari Modal
  const handleWhatsApp = () => {
    if (!origin || !destination) {
      alert("Harap isi kota asal dan tujuan!");
      return;
    }
    const message = `Halo Admin! Saya mau booking tiket kapal dari *${origin}* ke *${destination}*. Mohon infonya.`;
    window.open(`https://wa.me/6285265182020?text=${encodeURIComponent(message)}`, '_blank');
    setShowModal(false); // Tutup modal setelah kirim
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-content">
          
          {/* WRAPPER LOGO & HAMBURGER */}
          <div className="brand-wrapper">
            <div className="navbar-brand">
              <img src="/logo.svg" alt="Logo" className="brand-logo" />
              <span className="brand-name">Reservasi.id</span>
            </div>
            
            {/* Tombol Hamburger (HP) */}
            <button 
              className="hamburger-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* WRAPPER MENU (Links + Actions) */}
          <div className={`navbar-menu-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            
            <ul className="navbar-links">
              <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#destinations" onClick={() => setIsMobileMenuOpen(false)}>Destinations</a></li>
              <li><a href="#schedule" onClick={() => setIsMobileMenuOpen(false)}>Schedule</a></li>
              <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
            </ul>

            <div className="navbar-actions">
              {/* Search Bar */}
              <div className="search-container">
                <div className="search-wrapper">
                  <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  <input 
                    type="text" 
                    placeholder="Cari rute..." 
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setShowSuggestions(true);
                    }}
                    onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                  />
                </div>

                {/* Dropdown Search Result */}
                {showSuggestions && searchTerm && (
                  <div className="search-dropdown">
                    {filteredSearch.length > 0 ? (
                      filteredSearch.map(item => (
                        <div key={item.id} className="search-item" onClick={() => window.location.href = "#destinations"}>
                          <img src={item.image} alt={item.name} />
                          <div>
                            <span className="item-name">{item.name}</span>
                            <span className="item-type">{item.type}</span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="search-empty">Tidak ditemukan</div>
                    )}
                  </div>
                )}
              </div>
              
              {/* TOMBOL BOOK NOW (Pemicu Modal) */}
              <button 
                className="btn-primary" 
                onClick={() => {
                  setShowModal(true); 
                  setIsMobileMenuOpen(false);
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- BAGIAN POP-UP MODAL (PENTING: HARUS ADA DI SINI) --- */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <button className="btn-close" onClick={() => setShowModal(false)}>✕</button>

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