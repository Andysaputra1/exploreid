// src/component/DestinationCard.tsx

import React from 'react';
import './DestinationCard.css';

// Tentukan 'props' apa saja yang bisa diterima komponen ini
type CardProps = {
  image: string;
  price: string;
  title: string;
  category: string;
  location: string;
};

const DestinationCard: React.FC<CardProps> = ({ image, price, title, category, location }) => {
  return (
    <div className="dest-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="dest-card-overlay"></div> {/* Efek gradien gelap */}
      
      <div className="dest-card-price">
        mulai dari Rp {price}
      </div>
      
      <div className="dest-card-content">
        <h3>{title}</h3>
        <p>
          <span>{category}</span> | <span>{location}</span>
        </p>
      </div>
    </div>
  );
};

export default DestinationCard;