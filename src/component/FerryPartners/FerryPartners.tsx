import React, { useState, useMemo, useEffect } from 'react';
import FerryCard from './FerryCard';
import './FerryPartners.css';
import { ferrySchedules } from '../../data/FerryData';

const FerryPartners: React.FC = () => {
  const [filterOrigin, setFilterOrigin] = useState("Batam");
  const [filterDest, setFilterDest] = useState("Singapura");
  const [sortBy, setSortBy] = useState("time"); 
  
  // State Filter Operator
  const [selectedOperator, setSelectedOperator] = useState('All'); 

  const handleSwapPorts = () => {
    setFilterOrigin(filterDest);
    setFilterDest(filterOrigin);
  };

  // --- LOGIC BARU: MENDAPATKAN OPERATOR YANG RELEVAN SAJA ---
  const uniqueOperators = useMemo(() => {
    // 1. Filter jadwal hanya untuk rute yang sedang dipilih
    const relevantSchedules = ferrySchedules.filter(
      item => item.from === filterOrigin && item.to === filterDest
    );
    
    // 2. Ambil daftar nama operator yang unik dari jadwal yang relevan
    const operators = relevantSchedules.map(sch => sch.ferry);
    
    // 3. Kembalikan array unik, selalu sertakan 'All'
    return ['All', ...new Set(operators)];
  }, [filterOrigin, filterDest]); // Dependencies: Berubah saat rute (dari/ke) berubah
  // -----------------------------------------------------------

  // EFFECT BARU: Pastikan filter operator reset ke 'All' jika operator yang dipilih 
  // tidak ada di rute yang baru (misal: pindah rute, operator lama hilang)
  useEffect(() => {
    if (!uniqueOperators.includes(selectedOperator)) {
      setSelectedOperator('All');
    }
  }, [uniqueOperators, selectedOperator]);


  // LOGIC FILTERING & SORTING 
  const filteredData = ferrySchedules
    .filter(item => item.from === filterOrigin && item.to === filterDest)
    .filter(item => selectedOperator === 'All' || item.ferry === selectedOperator)
    .sort((a, b) => {
      if (sortBy === 'price') {
        return a.prices.adult.oneWay - b.prices.adult.oneWay;
      }
      return a.time.localeCompare(b.time);
    });

  return (
    <section id="schedule" className="schedule-section">
      <div className="container">
        
        {/* HEADER SECTION (JUDUL & FILTER RUTE) */}
        <div className="schedule-header">
          <div>
            <h2 className="section-title">Jadwal Kapal & Harga</h2>
            <p className="section-desc">Pilih rute perjalanan Anda dan temukan penawaran terbaik.</p>
          </div>

          {/* FILTER KONTROL RUTE (Dropdowns) */}
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
            
            <button className="swap-btn" onClick={handleSwapPorts}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 3 21 3 21 8"></polyline><line x1="21" y1="3" x2="14" y2="10"></line>
                <polyline points="8 21 3 21 3 16"></polyline><line x1="3" y1="21" x2="10" y2="14"></line>
              </svg>
            </button>

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

        {/* CONTAINER SORTING & FILTER OPERATOR */}
        <div className="filter-sort-bar">
          
          {/* 1. SORTING TABS (Waktu & Harga) */}
          <div className="sort-tabs">
            <button 
              className={`tab-btn ${sortBy === 'time' ? 'active' : ''}`}
              onClick={() => { setSortBy('time'); }} 
            >
              🕒 Waktu Paling Pagi
            </button>
            <button 
              className={`tab-btn ${sortBy === 'price' ? 'active' : ''}`}
              onClick={() => { setSortBy('price'); }} 
            >
              💲 Harga Termurah
            </button>
          </div>
          
          {/* 2. FILTER OPERATOR (PILL BUTTONS) */}
          <div className="operator-pills">
            {uniqueOperators.map(op => (
              <button 
                key={op}
                className={`op-pill ${selectedOperator === op ? 'active' : ''}`}
                onClick={() => setSelectedOperator(op)}
              >
                {op === 'All' ? 'Semua Kapal' : op}
              </button>
            ))}
          </div>

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
                prices={item.prices}
                note={item.note}
              />
            ))
          ) : (
            <div className="empty-state">
              <h3>Tidak ada jadwal ditemukan 😔</h3>
              <p>
                Rute dari <strong>{filterOrigin}</strong> ke <strong>{filterDest}</strong> 
                {selectedOperator !== 'All' && <span> dengan operator {selectedOperator}</span>}
                <br/>tidak tersedia.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default FerryPartners;