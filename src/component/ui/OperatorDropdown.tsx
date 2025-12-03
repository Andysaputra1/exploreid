import React, { useState, useRef, useEffect } from 'react';
import './OperatorDropdown.css';

interface OperatorDropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (val: string) => void;
}

const OperatorDropdown: React.FC<OperatorDropdownProps> = ({ label, value, options, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="custom-dropdown" ref={dropdownRef}>
      <label className="dropdown-label">{label}</label>
      
      {/* TRIGGER (TOMBOL UTAMA) */}
      <div className="dropdown-trigger" onClick={() => setIsOpen(!isOpen)}>
        <div className="trigger-content">
            {/* Ikon Kapal Kecil */}
            <span style={{ marginRight: '10px', fontSize: '1.1rem' }}>⛴️</span>
            <span className="trigger-value">
                {value === 'All' ? 'Semua Kapal' : value}
            </span>
        </div>
        <span className={`arrow-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </div>

      {/* LIST PILIHAN */}
      {isOpen && (
        <div className="dropdown-menu-op">
          <div className="dropdown-list-op">
            {options.map((op) => (
              <div 
                key={op} 
                className={`dropdown-item-op ${value === op ? 'selected' : ''}`}
                onClick={() => {
                  onChange(op);
                  setIsOpen(false);
                }}
              >
                <span>{op === 'All' ? 'Semua Kapal' : op}</span>
                {value === op && <span className="check-icon">✓</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OperatorDropdown;