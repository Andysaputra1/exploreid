import React, { useState } from 'react';
import FerryCard from './FerryCard';
import './FerryPartners.css';

// IMPORT DATA PUSAT
import { ferrySchedules } from '../../data/ferryData';

const FerryPartners: React.FC = () => {
  // State Default
  const [filterOrigin, setFilterOrigin] = useState("Batam");
  const [filterDest, setFilterDest] = useState("Singapura");
  const [sortBy, setSortBy] = useState("time"); 

  // Fungsi Swap Ports
  const handleSwapPorts = () => {
    // Menukar nilai state Origin dan Destination
    setFilterOrigin(filterDest);
    setFilterDest(filterOrigin);
  };

  // LOGIC FILTERING & SORTING (Harga termurah adalah Adult One Way)
  const filteredData = ferrySchedules
    .filter(item => item.from === filterOrigin && item.to === filterDest)
    .sort((a, b) => {
      if (sortBy === 'price') {
        // Sorting berdasarkan harga Adult One Way termurah
        return a.prices.adult.oneWay - b.prices.adult.oneWay;
      }
      // Sorting berdasarkan waktu
      return a.time.localeCompare(b.time);
    });

  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        
        {/* HEADER SECTION (JUDUL & FILTER) */}
        <div className="schedule-header">
          
          {/* JUDUL DAN DESKRIPSI */}
          <div>
            <h2 className="section-title">Jadwal Kapal & Harga</h2>
            <p className="section-desc">Pilih rute perjalanan Anda dan temukan penawaran terbaik.</p>
          </div>

          {/* FILTER CONTROLS */}
          <div className="filter-controls">
            
            {/* DROPDOWN DARI (ASAL) */}
            <div className="select-group">
              <label>Dari</label>
              <select 
                value={filterOrigin} 
                onChange={(e) => setFilterOrigin(e.target.value)}
              >
                <option value="Batam">Batam</option>
                <option value="Singapura">Singapura</option>
                <option value="Johor Bahru">Johor Bahru</option>
                <option value="Tanjung Pinang">Tanjung Pinang</option>
              </select>
            </div>
            
            {/* TOMBOL SWAP PANAH BERPUTAR */}
            <button className="swap-btn" onClick={handleSwapPorts}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 3 21 3 21 8"></polyline><line x1="21" y1="3" x2="14" y2="10"></line>
                <polyline points="8 21 3 21 3 16"></polyline><line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </button>

            {/* DROPDOWN KE (TUJUAN) */}
            <div className="select-group">
              <label>Ke</label>
              <select value={filterDest} onChange={(e) => setFilterDest(e.target.value)}>
                <option value="Singapura">Singapura</option>
                <option value="Batam">Batam</option>
                <option value="Johor Bahru">Johor Bahru</option>
                <option value="Tanjung Pinang">Tanjung Pinang</option>
              </select>
            </div>
          </div>
        </div>

        {/* TAB SORTING */}
        <div className="sort-tabs">
          <button 
            className={`tab-btn ${sortBy === 'time' ? 'active' : ''}`}
            onClick={() => setSortBy('time')}
          >
            🕒 Waktu Paling Pagi
          </button>
          <button 
            className={`tab-btn ${sortBy === 'price' ? 'active' : ''}`}
            onClick={() => setSortBy('price')}
          >
            💲 Harga Termurah
          </button>
        </div>

        {/* LIST RESULT */}
        <div className="schedule-list">
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <FerryCard 
                key={item.id}
                name={item.ferry}
                image={item.logo}
                origin={item.from}
                destination={item.to}
                time={item.time}
                prices={item.prices} // Passing object harga detail
                note={item.note}     // Passing disclaimer
              />
            ))
          ) : (
            <div className="empty-state">
              <h3>Tidak ada jadwal ditemukan 😔</h3>
              <p>
                Belum ada jadwal kapal tersedia dari <strong>{filterOrigin}</strong> ke <strong>{filterDest}</strong>.
                <br/>Silakan coba ganti rute lain.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FerryPartners;