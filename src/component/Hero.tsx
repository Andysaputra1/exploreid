// src/component/Hero.tsx

import React from 'react';
import './Hero.css'; // Impor file CSS-nya

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>WANDER</h1>
        <p>
          Discover breathtaking destinations across the Philippines with curated
          tours, local insights, and hassle-free planning all in one platform.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Plan Your Trip</button>
          <button className="btn btn-secondary">Explore Destinations</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;