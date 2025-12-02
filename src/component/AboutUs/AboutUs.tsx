import React from 'react';
import './AboutUs.css';

const AboutUs: React.FC = () => {
  return (
    <footer id="about" className="footer-section">
      <div className="container">
        <div className="footer-content">
          
          {/* Kolom 1: Brand & Deskripsi */}
          <div className="footer-brand">
            <div className="brand-logo">
              <img src="/logo.svg" alt="Reservasi.id" />
              <h2>Reservasi.id</h2>
            </div>
            <p>
              Partner perjalanan laut terpercaya Anda. 
              Kami menyediakan layanan pemesanan tiket ferry termudah 
              untuk rute Indonesia, Singapura, dan Malaysia.
            </p>
          </div>

          {/* Kolom 2: Quick Links (Navigasi Cepat) */}
          <div className="footer-links">
            <h3>Menu</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#destinations">Destinasi</a></li>
              <li><a href="#schedule">Jadwal Kapal</a></li>
              <li><a href="#faq">Bantuan</a></li>
            </ul>
          </div>

          {/* Kolom 3: Kontak & Sosmed */}
          <div className="footer-contact">
            <h3>Hubungi Kami</h3>
            <ul className="contact-list">
              <li>
                <span className="icon">📍</span>
                <span>Harbour Bay Terminal, Batam, Indonesia</span>
              </li>
              <li>
                <span className="icon">📞</span>
                <a href="https://wa.me/6285265182020" target="_blank" rel="noreferrer">
                  +62 852 6518 2020 (WhatsApp)
                </a>
              </li>
              <li>
                <span className="icon">✉️</span>
                <span>cs@reservasi.id</span>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="social-icons">
              <a href="#" className="social-btn instagram">
                {/* SVG Icon Instagram */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="social-btn facebook">
                {/* SVG Icon Facebook */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="footer-bottom">
          <p>&copy; 2024 Reservasi.id. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default AboutUs;