import React, { useState } from 'react';
import FerryCard from './FerryCard';
import './FerryPartners.css';
import { ferrySchedules } from '../../data/FerryData';
import { PORTS } from '../../data/ports'; // Import data pelabuhan baru

const FerryPartners: React.FC = () => {
  // Default State (Sekarang menggunakan nama PELABUHAN, bukan Kota)
  const [filterOrigin, setFilterOrigin] = useState("Batam Centre");
  const [filterDest, setFilterDest] = useState("HarbourFront"); // Sesuaikan dengan value di PORTS
  const [sortBy, setSortBy] = useState("time"); 
  
  const [selectedOperator, setSelectedOperator] = useState('All'); 

  const handleSwapPorts = () => {
    setFilterOrigin(filterDest);
    setFilterDest(filterOrigin);
  };

  // LOGIC FILTERING (Sekarang cek fromPort dan toPort)
  const filteredData = ferrySchedules
    .filter(item => {
        // Cek Asal: Apakah user pilih pelabuhan spesifik ATAU kota umum?
        const originMatch = 
            item.fromPort === filterOrigin || // Cocok pelabuhan spesifik
            item.from === filterOrigin;       // Cocok kota umum (misal: "Batam")

        // Cek Tujuan: Sama seperti di atas
        const destMatch = 
            item.toPort === filterDest || 
            item.to === filterDest ||
            (filterDest === "HarbourFront" && item.toPort.includes("HarbourFront")); // Handle variasi nama
        
        return originMatch && destMatch;
    })
    .filter(item => selectedOperator === 'All' || item.ferry === selectedOperator)
    .sort((a, b) => {
      if (sortBy === 'price') {
        return a.prices.adult.oneWay - b.prices.adult.oneWay;
      }
      return a.time.localeCompare(b.time);
    });

  // Logic Unique Operators (Sama seperti sebelumnya)
  const uniqueOperators = ['All', ...new Set(filteredData.map(item => item.ferry))];


  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        
        <div className="schedule-header">
          <div>
            <h2 className="section-title">Jadwal Kapal & Harga</h2>
            <p className="section-desc">Cari jadwal berdasarkan pelabuhan asal dan tujuan.</p>
          </div>

          {/* FILTER CONTROLS (GROUPED DROPDOWN) */}
          <div className="filter-controls">
            
            {/* DROPDOWN DARI (PELABUHAN) */}
            <div className="select-group">
              <label>Dari Pelabuhan</label>
              <select value={filterOrigin} onChange={(e) => setFilterOrigin(e.target.value)}>
                
                <optgroup label="BATAM">
                    {PORTS.BATAM.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
                </optgroup>
                <optgroup label="SINGAPURA">
                    {PORTS.SINGAPURA.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
                </optgroup>
                <optgroup label="JOHOR (MALAYSIA)">
                    {PORTS.JOHOR.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
                </optgroup>
                <optgroup label="KEPRI LAINNYA">
                    {PORTS.TANJUNG_PINANG.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
                    {PORTS.KARIMUN.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
                </optgroup>

              </select>
            </div>
            
            <button className="swap-btn" onClick={handleSwapPorts}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 3 21 3 21 8"></polyline><line x1="21" y1="3" x2="14" y2="10"></line>
                <polyline points="8 21 3 21 3 16"></polyline><line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </button>

            {/* DROPDOWN KE (PELABUHAN) */}
            <div className="select-group">
              <label>Ke Pelabuhan</label>
              <select value={filterDest} onChange={(e) => setFilterDest(e.target.value)}>
                 {/* Sama seperti atas, tampilkan semua opsi */}
                 <optgroup label="SINGAPURA">
                    {PORTS.SINGAPURA.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
                </optgroup>
                <optgroup label="BATAM">
                    {PORTS.BATAM.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
                </optgroup>
                <optgroup label="JOHOR (MALAYSIA)">
                    {PORTS.JOHOR.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
                </optgroup>
                <optgroup label="KEPRI LAINNYA">
                    {PORTS.TANJUNG_PINANG.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
                    {PORTS.KARIMUN.map(p => <option key={p.value} value={p.value}>{p.name}</option>)}
                </optgroup>
              </select>
            </div>
          </div>
        </div>

        {/* Filter Sort Bar (Tetap sama) */}
        <div className="filter-sort-bar">
            {/* ... (Kode Sort Tabs & Operator Pills sama seperti sebelumnya) ... */}
             <div className="sort-tabs">
                <button className={`tab-btn ${sortBy === 'time' ? 'active' : ''}`} onClick={() => setSortBy('time')}>🕒 Waktu Paling Pagi</button>
                <button className={`tab-btn ${sortBy === 'price' ? 'active' : ''}`} onClick={() => setSortBy('price')}>💲 Harga Termurah</button>
             </div>
             <div className="operator-pills">
                {uniqueOperators.map(op => (
                <button key={op} className={`op-pill ${selectedOperator === op ? 'active' : ''}`} onClick={() => setSelectedOperator(op)}>
                    {op === 'All' ? 'Semua Kapal' : op}
                </button>
                ))}
             </div>
        </div>

        {/* List Result */}
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
                fromPort={item.fromPort}
                toPort={item.toPort}
              />
            ))
          ) : (
            <div className="empty-state">
              <h3>Tidak ada jadwal ditemukan 😔</h3>
              <p>
                Tidak ada jadwal langsung dari <strong>{filterOrigin}</strong> ke <strong>{filterDest}</strong>.
                <br/>Coba ganti pelabuhan atau cek rute transit.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FerryPartners;