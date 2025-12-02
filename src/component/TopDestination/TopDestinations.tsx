import React, { useState } from 'react';
import './TopDestinations.css';

// --- DATA DUMMY DESTINASI (KARTU) ---
const destinations = [
  {
    id: 1,
    name: "Singapura",
    location: "HarbourFront Centre",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=600",
    price: "350.000",
    desc: "Nikmati wisata belanja dan hiburan kelas dunia di Singapura.",
    // LIST ASAL: Jika mau ke Singapura, bisa dari mana saja?
    origins: ["Batam", "Tanjung Pinang", "Johor Bahru"] 
  },
  {
    id: 2,
    name: "Batam",
    location: "Batam Centre",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=600",
    price: "150.000",
    desc: "Gerbang wisata bahari dengan pantai indah dan kuliner lezat.",
    // LIST ASAL: Jika mau ke Batam, bisa dari mana saja?
    origins: ["Singapura", "Johor Bahru", "Tanjung Pinang"]
  },
  {
    id: 3,
    name: "Johor Bahru",
    location: "Stulang Laut, Malaysia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=600",
    price: "250.000",
    desc: "Jelajahi budaya Melayu dan wisata sejarah di Malaysia.",
    // LIST ASAL: Jika mau ke JB, bisa dari mana saja?
    origins: ["Batam", "Singapura", "Tanjung Pinang"]
  },
];

// --- DATA DUMMY JADWAL FERRY ---
const ferrySchedules = [
  // --- TUJUAN: SINGAPURA ---
  // Dari Batam -> Ke Singapura
  { from: "Batam", to: "Singapura", ferry: "Batam Fast", time: "07:00", price: 350000 },
  { from: "Batam", to: "Singapura", ferry: "Majestic", time: "08:30", price: 350000 },
  { from: "Batam", to: "Singapura", ferry: "Sindo Ferry", time: "10:00", price: 360000 },
  // Dari Tj Pinang -> Ke Singapura
  { from: "Tanjung Pinang", to: "Singapura", ferry: "Sindo Ferry", time: "09:00", price: 450000 },
  // Dari JB -> Ke Singapura
  { from: "Johor Bahru", to: "Singapura", ferry: "Citra Ferry", time: "11:00", price: 250000 },

  // --- TUJUAN: BATAM ---
  // Dari Singapura -> Ke Batam
  { from: "Singapura", to: "Batam", ferry: "Batam Fast", time: "08:20", price: 350000 },
  { from: "Singapura", to: "Batam", ferry: "Horizon", time: "18:00", price: 340000 },
  
  // --- TUJUAN: JOHOR BAHRU ---
  // Dari Batam -> Ke JB
  { from: "Batam", to: "Johor Bahru", ferry: "Citra Ferry", time: "09:00", price: 250000 },
];

const TopDestinations: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState<any>(null); // Kota Tujuan (Kartu yg diklik)
  const [selectedOrigin, setSelectedOrigin] = useState("");    // Kota Asal (Tab yg dipilih)

  // Buka Modal
  const handleOpenModal = (city: any) => {
    setSelectedCity(city);
    setSelectedOrigin(city.origins[0]); // Default pilih tab asal pertama
    setShowModal(true);
  };

  // Filter Logic: Cari ferry yang TUJUANNYA = Kota yg diklik, dan DARI = Tab yg aktif
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
              {/* UBAH TEXT JADI 'KE' */}
              <h3>Jadwal ke {selectedCity.name}</h3>
              <button className="btn-close-modal" onClick={() => setShowModal(false)}>✕</button>
            </div>

            {/* TAB TOMBOL (ASAL/ORIGIN) */}
            <div className="dest-modal-tabs">
              {selectedCity.origins.map((origin: string) => (
                <button 
                  key={origin}
                  className={`tab-pill ${selectedOrigin === origin ? 'active' : ''}`}
                  onClick={() => setSelectedOrigin(origin)}
                >
                  {/* UBAH LABEL JADI 'DARI' */}
                  Dari {origin}
                </button>
              ))}
            </div>

            {/* LIST JADWAL */}
            <div className="dest-modal-list">
              {filteredSchedules.length > 0 ? (
                filteredSchedules.map((sch, idx) => (
                  <div key={idx} className="mini-schedule-item">
                    <div className="sch-left">
                      <span className="sch-ferry">{sch.ferry}</span>
                      {/* TAMPILKAN RUTE YANG BENAR */}
                      <span className="sch-route">{sch.from} ➝ {sch.to}</span>
                    </div>
                    <div className="sch-right">
                      <span className="sch-time">{sch.time} WIB</span>
                      <span className="sch-price">IDR {sch.price.toLocaleString()}</span>
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
              <button className="btn-book-full">Pesan Sekarang via WA</button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default TopDestinations;