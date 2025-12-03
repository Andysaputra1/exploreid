import React, { useState, useEffect, useRef } from 'react';
import './PortDropdown.css';
import { PORTS } from '../../data/ports'; // Import data pelabuhan

interface PortDropdownProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  icon?: React.ReactNode;
}

const PortDropdown: React.FC<PortDropdownProps> = ({ label, value, onChange, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown kalau klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Filter pelabuhan berdasarkan search
  const filterPorts = (groupName: string, ports: { name: string; value: string }[]) => {
    const filtered = ports.filter(p => 
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length === 0) return null;
    
    return (
      <div key={groupName} className="dropdown-group">
        <div className="group-title">{groupName}</div>
        {filtered.map(port => (
          <div 
            key={port.value} 
            className={`dropdown-item ${value === port.value ? 'selected' : ''}`}
            onClick={() => {
              onChange(port.value);
              setIsOpen(false);
              setSearchTerm("");
            }}
          >
            <span className="port-icon">⚓</span>
            <div className="port-info">
              <span className="port-name">{port.name}</span>
              <span className="port-city">{groupName}</span>
            </div>
            {value === port.value && <span className="check-icon">✓</span>}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <label className="dropdown-label">{label}</label>
      
      {/* TRIGGER BUTTON (Tampilan Luar) */}
      <div className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
        <span className="trigger-value">{value || "Pilih Pelabuhan"}</span>
        <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </div>

      {/* DROPDOWN CONTENT (Pop-up List) */}
      {isOpen && (
        <div className="dropdown-menu">
          
          {/* Search Bar di dalam Dropdown */}
          <div className="dropdown-search">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input 
              type="text" 
              placeholder="Cari pelabuhan..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />
          </div>

          {/* List Pelabuhan per Kota */}
          <div className="dropdown-list">
            {filterPorts("SINGAPURA", PORTS.SINGAPURA)}
            {filterPorts("BATAM", PORTS.BATAM)}
            {filterPorts("JOHOR (MALAYSIA)", PORTS.JOHOR)}
            {filterPorts("TANJUNG PINANG", PORTS.TANJUNG_PINANG)}
            {filterPorts("KARIMUN", PORTS.KARIMUN)}
            
            {/* Jika tidak ada hasil search */}
            {Object.values(PORTS).flat().filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase())).length === 0 && (
                <div className="empty-search">Pelabuhan tidak ditemukan</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PortDropdown;