import React from 'react';
import './TopDestinations.css';

// Data Dummy Destinasi
const destinations = [
  {
    id: 1,
    name: "Singapura",
    location: "HarbourFront Centre",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=600",
    price: "350.000",
    desc: "Nikmati wisata belanja dan hiburan kelas dunia di Singapura."
  },
  {
    id: 2,
    name: "Batam",
    location: "Batam Centre",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=600",
    price: "150.000",
    desc: "Gerbang wisata bahari dengan pantai indah dan kuliner lezat."
  },
  {
    id: 3,
    name: "Johor Bahru",
    location: "Stulang Laut, Malaysia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=600",
    price: "250.000",
    desc: "Jelajahi budaya Melayu dan wisata sejarah di Malaysia."
  },
  {
    id: 4,
    name: "Tanjung Pinang",
    location: "Sri Bintan Pura",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=600",
    price: "200.000",
    desc: "Pusat sejarah Kerajaan Riau-Lingga yang penuh pesona."
  }
];

const TopDestinations: React.FC = () => {
  return (
    <section id="destinations" className="dest-section">
      <div className="container">
        
        {/* Header Section */}
        <div className="dest-header">
          <div>
            <h4 className="sub-title">PILIHAN FAVORIT</h4>
            <h2 className="main-title">Destinasi Populer</h2>
          </div>
          <p className="dest-desc">
            Temukan rute kapal ferry terlaris yang paling sering dikunjungi 
            oleh wisatawan bulan ini.
          </p>
        </div>

        {/* Grid Kartu */}
        <div className="dest-grid">
          {destinations.map((item) => (
            <div key={item.id} className="dest-card">
              {/* Gambar & Badge Harga */}
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.name} />
                <div className="price-tag">
                  <span className="label">Mulai</span>
                  <span className="amount">IDR {item.price}</span>
                </div>
              </div>

              {/* Info Teks */}
              <div className="card-content">
                <div className="location-info">
                  <span className="location-icon">📍</span>
                  {item.location}
                </div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                
                <button className="btn-detail">
                  Lihat Jadwal
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TopDestinations;