import React, { useState, useEffect } from 'react';
import './Hero.css';
import img1 from '../../assets/herophotos/image1.png';
import img2 from '../../assets/herophotos/image2.png';
import img3 from '../../assets/herophotos/image3.png';
import img4 from '../../assets/herophotos/image4.png';
import img5 from '../../assets/herophotos/image5.png';
import img6 from '../../assets/herophotos/image6.png';
import img7 from '../../assets/herophotos/image7.png';
import img8 from '../../assets/herophotos/image8.png';
import img9 from '../../assets/herophotos/image9.png';



// Gambar Carousel (tetap sama)
const heroImages = [
  img1,img2,img3,img4,img5,img6,img7,img8,img9
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // State untuk input user
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  // Auto-slide logic (tetap sama)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Logic Redirect ke WhatsApp
  const handleWhatsApp = () => {
    // 1. Validasi sederhana
    if (!origin || !destination) {
      alert("Mohon isi kota asal dan tujuan terlebih dahulu!");
      return;
    }

    // 2. Format Pesan
    const message = `Halo Admin Reservasi.id! Saya mau tanya ketersediaan tiket kapal dari *${origin}* ke *${destination}*. Mohon infonya, terima kasih.`;
    
    // 3. Encode pesan agar aman di URL
    const encodedMessage = encodeURIComponent(message);
    
    // 4. Buka WhatsApp
    window.open(`https://wa.me/6285265182020?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Carousel */}
      {heroImages.map((img, index) => (
        <div 
          key={index}
          className={`hero-bg ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        
        {/* Teks Kiri */}
        <div className="hero-text">
          <h1>Jelajahi Lautan <br/> Tanpa Batas</h1>
          <p>
            Konsultasikan rencana perjalanan Anda. 
            Kami siap membantu mencarikan tiket kapal ferry terbaik 
            untuk rute Indonesia, Singapura, & Malaysia.
          </p>
          <div className="hero-stats">
            <div className="stat-item"><span>Fast</span>Respon</div>
            <div className="stat-item"><span>Best</span>Price</div>
          </div>
        </div>

        {/* --- KARTU KANAN (YANG DIUBAH) --- */}
        <div className="reservation-card">
          <div className="card-header">
            <h3>Tanyakan Tiket Anda</h3>
            <p>Chat admin langsung untuk cek jadwal & harga.</p>
          </div>
          
          {/* Input 1: Dari */}
          <div className="input-group">
            <label>Dari (Asal)</label>
            <input 
              type="text" 
              placeholder="Contoh: Batam Center" 
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
            />
          </div>

          {/* Input 2: Ke */}
          <div className="input-group">
            <label>Ke (Tujuan)</label>
            <input 
              type="text" 
              placeholder="Contoh: HarbourFront SG" 
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          <button onClick={handleWhatsApp} className="btn-search">
            Chat via WhatsApp 
            {/* Ikon WA kecil (Opsional) */}
            <svg style={{marginLeft: '8px', verticalAlign: 'middle'}} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </button>

          <p className="helper-text">
            *Anda akan diarahkan ke chat WhatsApp Admin.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;