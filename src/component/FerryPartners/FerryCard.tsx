import React, { useState } from 'react';
import './FerryCard.css';
import { TicketClasses } from '../../data/FerryData'; // Import interface tadi

interface FerryProps {
  name: string;
  image: string;
  origin: string;
  destination: string;
  time: string;
  prices: TicketClasses; // Terima object harga
}

const FerryCard: React.FC<FerryProps> = ({ name, image, origin, destination, time, prices }) => {
  const [isOpen, setIsOpen] = useState(false); // State untuk buka/tutup detail

  return (
    <div className={`ticket-card-wrapper ${isOpen ? 'open' : ''}`}>
      
      {/* BAGIAN UTAMA KARTU (SELALU MUNCUL) */}
      <div className="ticket-card">
        <div className="ticket-main">
          <div className="carrier-logo">
            <img src={image} alt={name} />
          </div>
          <div className="carrier-info">
            <h4>{name}</h4>
            <span className="route-badge">{origin} ➝ {destination}</span>
          </div>
        </div>

        <div className="ticket-time">
          <div className="time-display">
            <span className="departure-time">{time} WIB</span>
            <span className="time-label">Keberangkatan</span>
          </div>
        </div>

        <div className="ticket-action">
          <div className="price-display">
            <span className="label-start">Mulai dari</span>
            <span className="currency">IDR</span>
            {/* Tampilkan harga termurah (Adult One Way) */}
            <span className="amount">{prices.adult.oneWay.toLocaleString('id-ID')}</span>
          </div>
          
          <button className="btn-select" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Tutup' : 'Pilih'} 
            {/* Panah naik/turun */}
            <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
          </button>
        </div>
      </div>

      {/* BAGIAN DETAIL HARGA (MUNCUL SAAT DIKLIK) */}
      {isOpen && (
        <div className="ticket-details">
          <div className="price-table">
            
            {/* Header Tabel */}
            <div className="p-row p-header">
              <div className="p-col">Kategori</div>
              <div className="p-col">One Way</div>
              <div className="p-col">Two Way (PP)</div>
              <div className="p-col action">Aksi</div>
            </div>

            {/* Baris 1: Regular Dewasa */}
            <div className="p-row">
              <div className="p-col"><strong>Dewasa (Regular)</strong></div>
              <div className="p-col">Rp {prices.adult.oneWay.toLocaleString()}</div>
              <div className="p-col">Rp {prices.adult.twoWay.toLocaleString()}</div>
              <div className="p-col action"><button className="btn-book-small">Pesan</button></div>
            </div>

            {/* Baris 2: Regular Anak */}
            <div className="p-row">
              <div className="p-col"><strong>Anak (Regular)</strong></div>
              <div className="p-col">Rp {prices.child.oneWay.toLocaleString()}</div>
              <div className="p-col">Rp {prices.child.twoWay.toLocaleString()}</div>
              <div className="p-col action"><button className="btn-book-small">Pesan</button></div>
            </div>

            {/* Baris 3: VIP (Jika Ada) */}
            {prices.vipAdult && (
              <div className="p-row vip-row">
                <div className="p-col"><strong>👑 VIP Class</strong></div>
                <div className="p-col">Rp {prices.vipAdult.oneWay.toLocaleString()}</div>
                <div className="p-col">Rp {prices.vipAdult.twoWay.toLocaleString()}</div>
                <div className="p-col action"><button className="btn-book-small vip">Pesan VIP</button></div>
              </div>
            )}

          </div>
          
          <div className="detail-footer">
            <p>*Harga sudah termasuk pajak pelabuhan (Tax Batam).</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default FerryCard;