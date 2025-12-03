import React, { useState } from 'react';
import FerryCard from './FerryCard';
import './FerryPartners.css';

// Import data pusat
import { ferrySchedules } from '../../data/FerryData';

const FerryPartners: React.FC = () => {
  const [filterOrigin, setFilterOrigin] = useState("Batam");
  const [filterDest, setFilterDest] = useState("Singapura");
  const [sortBy, setSortBy] = useState("time"); 

  const filteredData = ferrySchedules
    .sort((a, b) => {
          if (sortBy === 'price') {
            // Bandingkan harga termurah (Adult One Way)
            return a.prices.adult.oneWay - b.prices.adult.oneWay;
          }
          return a.time.localeCompare(b.time);
        });

  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        
        {/* HEADER SECTION (JUDUL & FILTER) */}
        <div className="schedule-header">
          
          {/* BAGIAN 1: JUDUL & DESKRIPSI (INI YANG HILANG KEMARIN) */}
          <div>
            <h2 className="section-title">Jadwal Kapal & Harga</h2>
            <p className="section-desc">Pilih rute perjalanan Anda dan temukan penawaran terbaik.</p>
          </div>

          {/* BAGIAN 2: KOTAK FILTER */}
          <div className="filter-controls">
            <div className="select-group">
              <label>Dari</label>
              <select value={filterOrigin} onChange={(e) => setFilterOrigin(e.target.value)}>
                <option value="Batam">Batam</option>
                <option value="Singapura">Singapura</option>
                <option value="Johor Bahru">Johor Bahru</option>
                <option value="Tanjung Pinang">Tanjung Pinang</option>
              </select>
            </div>
            
            <div className="arrow-icon">➝</div>

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
                prices={item.prices} // <--- Kirim object prices utuh
              />
            ))
          ) : (
            <div className="empty-state">
              <p>Maaf, tidak ada jadwal kapal untuk rute ini.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FerryPartners;