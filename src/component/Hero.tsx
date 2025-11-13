// src/component/Hero.tsx

import React from 'react';
import './Hero.css'; // Impor file CSS-nya

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Reservasi.id</h1>
        <p>
          Temukan cara termudah dan tercepat untuk memesan tiket ferry.
          Nikmati perjalanan hemat ke Singapura, Batam, dan Malaysia,
          semua dalam satu platform
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Book Your Trip</button>
          <button className="btn btn-secondary">Explore Destinations</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;