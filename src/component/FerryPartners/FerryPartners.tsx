import React, { useState } from 'react';
import FerryCard from './FerryCard';
import './FerryPartners.css';

// Data Dummy Jadwal
const ferryData = [
  { id: 1, name: "Batam Fast", origin: "Batam", destination: "Singapura", time: "08:20", price: 350000, image: "https://cdn-icons-png.flaticon.com/512/56/56903.png" },
  { id: 2, name: "Majestic Ferry", origin: "Batam", destination: "Singapura", time: "09:50", price: 340000, image: "https://cdn-icons-png.flaticon.com/512/870/870092.png" },
  { id: 3, name: "Sindo Ferry", origin: "Batam", destination: "Singapura", time: "07:00", price: 360000, image: "https://cdn-icons-png.flaticon.com/512/2942/2942544.png" },
  { id: 4, name: "Horizon Ferry", origin: "Singapura", destination: "Batam", time: "18:00", price: 400000, image: "https://cdn-icons-png.flaticon.com/512/56/56903.png" },
  { id: 5, name: "Citra Ferry", origin: "Batam", destination: "Johor Bahru", time: "10:30", price: 250000, image: "https://cdn-icons-png.flaticon.com/512/870/870092.png" },
];

const FerryPartners: React.FC = () => {
  const [filterOrigin, setFilterOrigin] = useState("Batam");
  const [filterDest, setFilterDest] = useState("Singapura");
  const [sortBy, setSortBy] = useState("time"); // 'time' atau 'price'

  // Logic Filtering & Sorting
  const filteredData = ferryData
    .filter(item => item.origin === filterOrigin && item.destination === filterDest)
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      return a.time.localeCompare(b.time);
    });

  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        
        {/* Header & Controls */}
        <div className="schedule-header">
          <div>
            <h2 className="section-title">Jadwal Kapal & Harga</h2>
            <p className="section-desc">Pilih rute perjalanan Anda dan temukan penawaran terbaik.</p>
          </div>

          {/* Filter Box */}
          <div className="filter-controls">
            <div className="select-group">
              <label>Dari</label>
              <select value={filterOrigin} onChange={(e) => setFilterOrigin(e.target.value)}>
                <option value="Batam">Batam</option>
                <option value="Singapura">Singapura</option>
              </select>
            </div>

            <div className="arrow-icon">➝</div>

            <div className="select-group">
              <label>Ke</label>
              <select value={filterDest} onChange={(e) => setFilterDest(e.target.value)}>
                <option value="Singapura">Singapura</option>
                <option value="Batam">Batam</option>
                <option value="Johor Bahru">Johor Bahru</option>
              </select>
            </div>
          </div>
        </div>

        {/* Tab Sorting */}
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

        {/* List Result */}
        <div className="schedule-list">
          {filteredData.length > 0 ? (
            filteredData.map(item => (
              <FerryCard 
                key={item.id}
                name={item.name}
                image={item.image}
                origin={item.origin}
                destination={item.destination}
                time={item.time}
                price={item.price}
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