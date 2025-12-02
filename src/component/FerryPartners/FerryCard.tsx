import React from 'react';
import './FerryCard.css';

interface FerryProps {
  name: string;
  image: string;
  origin: string;
  destination: string;
  time: string;
  price: number;
}

const FerryCard: React.FC<FerryProps> = ({ name, image, origin, destination, time, price }) => {
  return (
    <div className="ticket-card">
      {/* Bagian Kiri: Logo & Nama */}
      <div className="ticket-main">
        <div className="carrier-logo">
          <img src={image} alt={name} />
        </div>
        <div className="carrier-info">
          <h4>{name}</h4>
          <span className="route-badge">{origin} ➝ {destination}</span>
        </div>
      </div>

      {/* Bagian Tengah: Waktu */}
      <div className="ticket-time">
        <div className="time-display">
          <span className="departure-time">{time} WIB</span>
          <span className="time-label">Keberangkatan</span>
        </div>
      </div>

      {/* Bagian Kanan: Harga & Tombol */}
      <div className="ticket-action">
        <div className="price-display">
          <span className="currency">IDR</span>
          <span className="amount">{price.toLocaleString('id-ID')}</span>
          <span className="pax">/pax</span>
        </div>
        <button className="btn-select">Pilih</button>
      </div>
    </div>
  );
};

export default FerryCard;