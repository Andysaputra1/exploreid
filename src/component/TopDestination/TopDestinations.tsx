import React, { useState } from 'react';
import './TopDestinations.css';

// 1. IMPORT DATA JADWAL DARI FILE PUSAT
// Pastikan path '../data/ferryData' sesuai dengan lokasi file datamu
import { ferrySchedules } from '../../data/FerryData';

// 2. DATA KARTU DESTINASI (Saya tulis lengkap lagi agar tidak error)
const destinations = [
  {
    id: 1,
    name: "Singapura",
    location: "HarbourFront Centre",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=600",
    price: "350.000",
    desc: "Nikmati wisata belanja dan hiburan kelas dunia di Singapura.",
    origins: ["Batam", "Tanjung Pinang", "Johor Bahru"] 
  },
  {
    id: 2,
    name: "Batam",
    location: "Batam Centre",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=600",
    price: "150.000",
    desc: "Gerbang wisata bahari dengan pantai indah dan kuliner lezat.",
    origins: ["Singapura", "Johor Bahru", "Tanjung Pinang"]
  },
  {
    id: 3,
    name: "Johor Bahru",
    location: "Stulang Laut, Malaysia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=600",
    price: "250.000",
    desc: "Jelajahi budaya Melayu dan wisata sejarah di Malaysia.",
    origins: ["Batam", "Singapura", "Tanjung Pinang"]
  },
];

const TopDestinations: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState<any>(null); // Kota Tujuan
  const [selectedOrigin, setSelectedOrigin] = useState("");    // Kota Asal

  // Fungsi Buka Modal
  const handleOpenModal = (city: any) => {
    setSelectedCity(city);
    setSelectedOrigin(city.origins[0]); // Default pilih tab pertama
    setShowModal(true);
  };

  // Logic Filter: Ambil data dari 'ferrySchedules' pusat
  const filteredSchedules = ferrySchedules.filter(
    item => item.to === selectedCity?.name && item.from === selectedOrigin
  );

  return (
    <section id="destinations" className="dest-section">
      <div className="container">
        
        {/* Header */}
        <div className="dest-header">
          <div>
            <h4 className="sub-title">PILIHAN FAVORIT</h4>
            <h2 className="main-title">Destinasi Populer</h2>
          </div>
          <p className="dest-desc">
            Temukan rute kapal ferry terlaris yang paling sering dikunjungi.
          </p>
        </div>

        {/* Grid Kartu */}
        <div className="dest-grid">
          {destinations.map((item) => (
            <div key={item.id} className="dest-card">
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.name} />
                <div className="price-tag">
                  <span className="label">Mulai</span>
                  <span className="amount">IDR {item.price}</span>
                </div>
              </div>

              <div className="card-content">
                <div className="location-info">
                  <span className="location-icon">📍</span>{item.location}
                </div>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
                
                <button className="btn-detail" onClick={() => handleOpenModal(item)}>
                  Lihat Jadwal
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- POP-UP MODAL JADWAL --- */}
      {showModal && selectedCity && (
        <div className="dest-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="dest-modal-card" onClick={(e) => e.stopPropagation()}>
            
            {/* Header Modal */}
            <div className="dest-modal-header">
              <h3>Jadwal ke {selectedCity.name}</h3>
              <button className="btn-close-modal" onClick={() => setShowModal(false)}>✕</button>
            </div>

            {/* TAB TOMBOL (ASAL) */}
            <div className="dest-modal-tabs">
              {selectedCity.origins.map((origin: string) => (
                <button 
                  key={origin}
                  className={`tab-pill ${selectedOrigin === origin ? 'active' : ''}`}
                  onClick={() => setSelectedOrigin(origin)}
                >
                  Dari {origin}
                </button>
              ))}
            </div>

            {/* LIST JADWAL */}
            <div className="dest-modal-list">
              {filteredSchedules.length > 0 ? (
                filteredSchedules.map((sch) => (
                  <div key={sch.id} className="mini-schedule-item">
                    <div className="sch-left">
                      <span className="sch-ferry">{sch.ferry}</span>
                      <span className="sch-route">{sch.from} ➝ {sch.to}</span>
                    </div>
                    <div className="sch-right">
                      <div className="time-wrapper">
                        <span className="sch-time">{sch.time}</span>
                        {/* Tambahkan logika disclaimer kecil */}
                        <span className="time-zone-note">
                          {sch.time.includes('SGT') ? '(Waktu Singapura)' : 
                          sch.time.includes('MYT') ? '(Waktu Malaysia)' : 
                          '(Waktu Indonesia Barat)'}
                        </span>
                      </div>
                      {/* PERBAIKAN DI SINI: Akses prices.adult.oneWay */}
                      <span className="sch-price">IDR {sch.prices.adult.oneWay.toLocaleString()}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="sch-empty">
                  Belum ada jadwal tersedia dari {selectedOrigin} ke {selectedCity.name}.
                </div>
              )}
            </div>
            
            <div className="dest-modal-footer">
              <button 
                className="btn-book-full"
                onClick={() => window.open(`https://wa.me/6285265182020?text=Halo%20Admin,%20saya%20mau%20pesan%20tiket%20ke%20${selectedCity.name}`, '_blank')}
              >
                Pesan Sekarang via WA
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default TopDestinations;