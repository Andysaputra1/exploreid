import React, { useState } from 'react';
import './FerryCard.css';
import { TicketClasses } from '../../data/FerryData'; // Import dari ferryData (Pastikan casing F/f benar)

interface FerryProps {
  name: string;
  image: string;
  origin: string;
  destination: string;
  time: string;
  prices: TicketClasses;
  note?: string; // Sudah di props
}

const FerryCard: React.FC<FerryProps> = ({ name, image, origin, destination, time, prices, note }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Fungsi untuk menentukan disclaimer waktu
  const getTimeDisclaimer = (timeStr: string) => {
    if (timeStr.includes('SGT')) return 'Singapore Time';
    if (timeStr.includes('MYT')) return 'Malaysia Time';
    return 'WIB (Indonesia Time)';
  };

  return (
    <div className={`ticket-card-wrapper ${isOpen ? 'open' : ''}`}>
      
      {/* BAGIAN UTAMA KARTU */}
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

        {/* --- PERBAIKAN WAKTU DI SINI --- */}
        <div className="ticket-time">
          <div className="time-display">
            <div className="time-group"> 
              <span className="departure-time">{time}</span> {/* Hanya tampilkan waktu dari data (08:15 SGT) */}
              <span className="zone-info">
                {getTimeDisclaimer(time)} {/* Tampilkan disclaimer lengkap di bawah */}
              </span>
            </div>
            <span className="time-label">Keberangkatan</span>
          </div>
        </div>
        {/* --- AKHIR PERBAIKAN WAKTU --- */}

        <div className="ticket-action">
          <div className="price-display">
            <span className="label-start">Mulai dari</span>
            <span className="currency">IDR</span>
            <span className="amount">{prices.adult.oneWay.toLocaleString('id-ID')}</span>
          </div>
          
          <button className="btn-select" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Tutup' : 'Pilih'} 
            <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
          </button>
        </div>
      </div>

      {/* DETAIL DROPDOWN */}
      {isOpen && (
        <div className="ticket-details">
          <div className="price-table">
            
            <div className="p-row p-header">
              <div className="p-col">Kategori</div>
              <div className="p-col">One Way</div>
              <div className="p-col">Two Way (PP)</div>
              <div className="p-col action">Aksi</div>
            </div>

            {/* Dewasa */}
            <div className="p-row">
              <div className="p-col" data-label="Kategori"><strong>Dewasa (Regular)</strong></div>
              <div className="p-col" data-label="One Way">Rp {prices.adult.oneWay.toLocaleString()}</div>
              <div className="p-col" data-label="Two Way (PP)">Rp {prices.adult.twoWay.toLocaleString()}</div>
              <div className="p-col action"><button className="btn-book-small">Pesan</button></div>
            </div>

            {/* Anak */}
            <div className="p-row">
              <div className="p-col" data-label="Kategori"><strong>Anak (Regular)</strong></div>
              <div className="p-col" data-label="One Way">Rp {prices.child.oneWay.toLocaleString()}</div>
              <div className="p-col" data-label="Two Way (PP)">Rp {prices.child.twoWay.toLocaleString()}</div>
              <div className="p-col action"><button className="btn-book-small">Pesan</button></div>
            </div>

            {/* VIP Dewasa */}
            {prices.vipAdult && (
              <div className="p-row vip-row">
                <div className="p-col" data-label="Kategori"><strong>👑 VIP Dewasa</strong></div>
                <div className="p-col" data-label="One Way">Rp {prices.vipAdult.oneWay.toLocaleString()}</div>
                <div className="p-col" data-label="Two Way (PP)">Rp {prices.vipAdult.twoWay ? prices.vipAdult.twoWay.toLocaleString() : '-'}</div>
                <div className="p-col action"><button className="btn-book-small vip">Pesan VIP</button></div>
              </div>
            )}

            {/* VIP Anak */}
            {prices.vipChild && (
              <div className="p-row vip-row">
                <div className="p-col" data-label="Kategori"><strong>👑 VIP Anak</strong></div>
                <div className="p-col" data-label="One Way">Rp {prices.vipChild.oneWay.toLocaleString()}</div>
                <div className="p-col" data-label="Two Way (PP)">Rp {prices.vipChild.twoWay ? prices.vipChild.twoWay.toLocaleString() : '-'}</div>
                <div className="p-col action"><button className="btn-book-small vip">Pesan VIP</button></div>
              </div>
            )}

          </div>
          
          <div className="detail-footer">
            <p>{note || "*Harga dapat berubah sewaktu-waktu."}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default FerryCard;