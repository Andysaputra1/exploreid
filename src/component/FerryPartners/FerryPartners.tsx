import React, { useState } from 'react';
import FerryCard from './FerryCard';
import './FerryPartners.css';

// Import data
import { ferrySchedules } from '../../data/FerryData';

const FerryPartners: React.FC = () => {
  // Default State (Pastikan stringnya sama persis dengan di data)
  const [filterOrigin, setFilterOrigin] = useState("Batam");
  const [filterDest, setFilterDest] = useState("Singapura");
  const [sortBy, setSortBy] = useState("time"); 

  // LOGIC FILTERING
  const filteredData = ferrySchedules
    .filter(item => {
      // Pastikan pencocokan string benar-benar sama
      return item.from === filterOrigin && item.to === filterDest;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.prices.adult.oneWay - b.prices.adult.oneWay;
      return a.time.localeCompare(b.time);
    });

  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        
        {/* Header */}
        <div className="schedule-header">
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
                onChange={(e) => {
                  setFilterOrigin(e.target.value);
                  // Opsional: Reset tujuan biar user ga bingung kalau rute ga ada
                  // setFilterDest(""); 
                }}
              >
                {/* Value harus sama persis dengan field 'from' di ferryData.ts */}
                <option value="Batam">Batam</option>
                <option value="Singapura">Singapura</option>
                <option value="Johor Bahru">Johor Bahru</option>
                <option value="Tanjung Pinang">Tanjung Pinang</option>
              </select>
            </div>
            
            <div className="arrow-icon">➝</div>

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

        {/* Sorting Tabs */}
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

        {/* HASIL FILTER */}
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
                prices={item.prices}
                note={item.note}
              />
            ))
          ) : (
            // PESAN JIKA DATA KOSONG (PENTING!)
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