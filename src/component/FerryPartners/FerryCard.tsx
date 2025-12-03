import React, { useState } from 'react';
import './FerryCard.css';
import { TicketClasses } from '../../data/FerryData'; // Pastikan nama file datanya benar (ferryData atau FerryData)

interface FerryProps {
  name: string;
  image: string;
  origin: string;
  destination: string;
  time: string;
  prices: TicketClasses;
  note?: string; // Tanda tanya di sini BENAR (artinya props opsional)
}

const FerryCard: React.FC<FerryProps> = ({ name, image, origin, destination, time, prices, note }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`ticket-card-wrapper ${isOpen ? 'open' : ''}`}>
      
      {/* HEADER KARTU */}
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
            
            {/* Header Tabel */}
            <div className="p-row p-header">
              <div className="p-col">Kategori</div>
              <div className="p-col">One Way</div>
              <div className="p-col">Two Way (PP)</div>
              <div className="p-col action">Aksi</div>
            </div>

            {/* 1. Baris: Regular Dewasa */}
            <div className="p-row">
              <div className="p-col"><strong>Dewasa (Regular)</strong></div>
              <div className="p-col">Rp {prices.adult.oneWay.toLocaleString()}</div>
              <div className="p-col">Rp {prices.adult.twoWay.toLocaleString()}</div>
              <div className="p-col action"><button className="btn-book-small">Pesan</button></div>
            </div>

            {/* 2. Baris: Regular Anak */}
            <div className="p-row">
              <div className="p-col"><strong>Anak (Regular)</strong></div>
              <div className="p-col">Rp {prices.child.oneWay.toLocaleString()}</div>
              <div className="p-col">Rp {prices.child.twoWay.toLocaleString()}</div>
              <div className="p-col action"><button className="btn-book-small">Pesan</button></div>
            </div>

            {/* 3. Baris: VIP Dewasa (Jika Ada) */}
            {prices.vipAdult && (
              <div className="p-row vip-row">
                <div className="p-col"><strong>👑 VIP Dewasa</strong></div>
                <div className="p-col">Rp {prices.vipAdult.oneWay.toLocaleString()}</div>
                <div className="p-col">Rp {prices.vipAdult.twoWay.toLocaleString()}</div>
                <div className="p-col action"><button className="btn-book-small vip">Pesan VIP</button></div>
              </div>
            )}

            {/* 4. Baris: VIP Anak (TAMBAHAN BARU) */}
            {prices.vipChild && (
              <div className="p-row vip-row">
                <div className="p-col"><strong>👑 VIP Anak</strong></div>
                <div className="p-col">Rp {prices.vipChild.oneWay.toLocaleString()}</div>
                <div className="p-col">Rp {prices.vipChild.twoWay.toLocaleString()}</div>
                <div className="p-col action"><button className="btn-book-small vip">Pesan VIP</button></div>
              </div>
            )}

          </div>
          
          <div className="detail-footer">
            {/* PERBAIKAN DI SINI: Gunakan spasi yang benar atau OR operator */}
            <p>{note || "*Harga dapat berubah sewaktu-waktu."}</p>
          </div>
        </div>
      )}

    </div>
  );
};

export default FerryCard;