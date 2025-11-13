// src/component/TopDestinations.tsx

import React from 'react';
import './TopDestinations.css';
import DestinationCard from './DestinationCard'; // Impor komponen kartu

// --- PERSIAPAN GAMBAR ---
// 1. Buat folder 'src/assets/'
// 2. Masukkan gambar-gambarmu ke sana
// 3. Ganti nama file di bawah ini sesuai nama gambarmu
import imgBatam from '../assets/Batam.png';
import imgSingapore from '../assets/Singapore.png';
import imgMalaysia from '../assets/Malaysia.png';

const TopDestinations: React.FC = () => {
  return (
    <section className="dest-section">
      <div className="dest-container-card">
      {/* Bagian Header Section */}
      <div className="dest-header">
        <div className="dest-header-left">
          <h2>Destinasi Populer</h2>
          <button className="dest-view-more">View more</button>
        </div>
        <div className="dest-header-right">
          <p>
            Dari wisata belanja di kota hingga perjalanan bisnis, 
            temukan ke mana perjalanan Anda selanjutnya akan membawa Anda.
          </p>
        </div>
      </div>

      {/* Bagian List Kartu */}
      <div className="dest-list">
        <DestinationCard 
          image={imgBatam}
          price="250.000"
          title="Batam"
          category="Ferry Cepat"
          location="Indonesia"
        />
        <DestinationCard 
          image={imgSingapore}
          price="385.000"
          title="Singapore"
          category="Pusat Belanja"
          location="Singapore"
        />
        <DestinationCard 
          image={imgMalaysia}
          price="400.000"
          title="Malaysia"
          category="Wisata Kuliner"
          location="Malaysia"
        />
      </div>


    </div>
    </section>
  );
};

export default TopDestinations;