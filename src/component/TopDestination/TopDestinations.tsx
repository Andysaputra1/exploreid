import React, { useState, useMemo } from 'react';
import './TopDestinations.css';

// Import Data Pusat
import { ferrySchedules } from '../../data/FerryData';
import imgBatam from "../../assets/Batam.png" 
import imgMalay from "../../assets/Malaysia.png" 
import imgSingapore from "../../assets/Singapore.png" 


const destinations = [
  {
    id: 1, name: "Singapura", location: "HarbourFront Centre",
    image: imgSingapore, price: "350.000",
    desc: "Nikmati wisata belanja dan hiburan kelas dunia di Singapura.",
    origins: ["Batam", "Tanjung Pinang", "Johor Bahru"] 
  },
  {
    id: 2, name: "Batam", location: "Batam Centre",
    image: imgBatam, price: "365.000",
    desc: "Gerbang wisata bahari dengan pantai indah dan kuliner lezat.",
    origins: ["Singapura", "Johor Bahru", "Tanjung Pinang"]
  },
  {
    id: 3, name: "Johor Bahru", location: "Stulang Laut, Malaysia",
    image: imgMalay, price: "315.000",
    desc: "Jelajahi budaya Melayu dan wisata sejarah di Malaysia.",
    origins: ["Batam", "Singapura", "Tanjung Pinang"]
  },
];

const TopDestinations: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState<any>(null); // Kota Tujuan
  const [selectedOrigin, setSelectedOrigin] = useState("");    // Kota Asal (Tab)
  
  // STATE BARU: Filter Operator di dalam Modal
  const [selectedFerryFilter, setSelectedFerryFilter] = useState("All");

  const handleOpenModal = (city: any) => {
    setSelectedCity(city);
    setSelectedOrigin(city.origins[0]);
    setSelectedFerryFilter("All"); // Reset filter saat buka modal baru
    setShowModal(true);
  };

  // Helper: Ubah Jam String ke Angka untuk Sorting (08:00 -> 800)
  const parseTime = (timeStr: string) => {
    const cleanTime = timeStr.split(" ")[0].replace(":", "");
    return parseInt(cleanTime);
  };

  // Helper: Label Zona Waktu
  const getTimeDisclaimer = (timeStr: string) => {
    if (timeStr.includes('SGT')) return 'Singapore Time';
    if (timeStr.includes('MYT')) return 'Malaysia Time';
    return 'WIB';
  };

  // 1. Ambil SEMUA jadwal untuk rute ini dulu (sebelum difilter operator)
  const schedulesOnRoute = ferrySchedules.filter(
    item => item.to === selectedCity?.name && item.from === selectedOrigin
  );

  // 2. Buat List Operator Unik untuk Dropdown
  const availableOperators = useMemo(() => {
    const ops = schedulesOnRoute.map(item => item.ferry);
    return ["All", ...new Set(ops)];
  }, [schedulesOnRoute]);

  // 3. Filter Akhir (Rute + Operator) & Sorting Waktu
  const displayedSchedules = schedulesOnRoute
    .filter(item => selectedFerryFilter === "All" || item.ferry === selectedFerryFilter)
    .sort((a, b) => parseTime(a.time) - parseTime(b.time));


  return (
    <section id="destinations" className="dest-section">
      <div className="container">
        
        <div className="dest-header">
          <div>
            <h4 className="sub-title">PILIHAN FAVORIT</h4>
            <h2 className="main-title">Destinasi Populer</h2>
          </div>
          <p className="dest-desc">
            Temukan rute kapal ferry terlaris yang paling sering dikunjungi.
          </p>
        </div>

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

      {/* --- POP-UP MODAL --- */}
      {showModal && selectedCity && (
        <div className="dest-modal-overlay" onClick={() => setShowModal(false)}>
          <div className="dest-modal-card" onClick={(e) => e.stopPropagation()}>
            
            {/* Header */}
            <div className="dest-modal-header">
              <h3>Jadwal ke {selectedCity.name}</h3>
              <button className="btn-close-modal" onClick={() => setShowModal(false)}>✕</button>
            </div>

            {/* TABS (ASAL) */}
            <div className="dest-modal-tabs">
              {selectedCity.origins.map((origin: string) => (
                <button 
                  key={origin}
                  className={`tab-pill ${selectedOrigin === origin ? 'active' : ''}`}
                  onClick={() => {
                      setSelectedOrigin(origin);
                      setSelectedFerryFilter("All"); // Reset filter kapal saat ganti asal
                  }}
                >
                  Dari {origin}
                </button>
              ))}
            </div>

            {/* FILTER DROPDOWN OPERATOR (BARU) */}
            <div className="dest-filter-bar">
                <span className="filter-label">Pilih Kapal:</span>
                <select 
                    className="ferry-select"
                    value={selectedFerryFilter}
                    onChange={(e) => setSelectedFerryFilter(e.target.value)}
                >
                    {availableOperators.map(op => (
                        <option key={op} value={op}>
                            {op === "All" ? "Semua Kapal" : op}
                        </option>
                    ))}
                </select>
            </div>

            {/* LIST JADWAL */}
            <div className="dest-modal-list">
              {displayedSchedules.length > 0 ? (
                displayedSchedules.map((sch) => (
                  <div key={sch.id} className="mini-schedule-item">
                    <div className="sch-left">
                      <span className="sch-ferry">{sch.ferry}</span>
                      <span className="sch-route">{sch.fromPort} ➝ {sch.toPort}</span>
                    </div>
                    <div className="sch-right">
                      <div className="sch-time-group">
                         <span className="sch-time">{sch.time}</span>
                         <span className="sch-zone-note">{getTimeDisclaimer(sch.time)}</span>
                      </div>
                      {/* Tampilkan Harga Termurah */}
                      <span className="sch-price">
                        IDR {(sch.prices.wniAdult?.oneWay || sch.prices.child.oneWay || sch.prices.adult.oneWay).toLocaleString('id-ID')}
                      </span>
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
                onClick={() => window.open(`https://wa.me/6285265182020?text=Halo%20Admin,%20saya%20mau%20pesan%20tiket%20ke%20${selectedCity.name}%20dari%20${selectedOrigin}`, '_blank')}
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