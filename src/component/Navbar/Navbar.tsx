import React, { useState, useEffect, useMemo } from 'react';
import './Navbar.css';
import PortDropdown from '../ui/PortDropdown';
import OperatorDropdown from '../ui/OperatorDropdown';
import { ferrySchedules, TicketClasses } from '../../data/FerryData';

// Data Dummy Search (Tetap)
const searchData = [
  { id: 1, name: "Singapura", type: "Destinasi", image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=100" },
  { id: 2, name: "Batam", type: "Destinasi", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=100" },
  { id: 3, name: "Johor Bahru", type: "Destinasi", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=100" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // --- STATE MODAL BOOKING ---
  const [showModal, setShowModal] = useState(false);
  const [step, setStep] = useState(1); 

  // Step 1 Data
  const [origin, setOrigin] = useState('Batam Centre');
  const [destination, setDestination] = useState('HarbourFront');
  const [selectedFerry, setSelectedFerry] = useState('All');
  
  // Step 2 Data (Detail)
  const [selectedSchedule, setSelectedSchedule] = useState<any>(null); // Data jadwal yg dipilih
  const [tripType, setTripType] = useState<'oneWay' | 'twoWay'>('twoWay');
  const [ticketClass, setTicketClass] = useState<'standard' | 'wni' | 'vip'>('standard');
  const [pax, setPax] = useState({ adult: 1, child: 0 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredSearch = searchData.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- LOGIC PENCARIAN JADWAL ---
  // 1. Cari semua jadwal di rute ini
  const schedulesOnRoute = useMemo(() => {
    return ferrySchedules.filter(item => {
        const matchOrigin = item.fromPort === origin || item.from === origin;
        const matchDest = item.toPort === destination || item.to === destination || (destination === "HarbourFront" && item.toPort.includes("HarbourFront"));
        return matchOrigin && matchDest;
    }).sort((a, b) => a.time.localeCompare(b.time)); // Urutkan berdasarkan jam
  }, [origin, destination]);

  // 2. Ambil daftar operator yang tersedia di rute ini
  const availableFerries = useMemo(() => {
    const ops = schedulesOnRoute.map(s => s.ferry);
    return ['All', ...new Set(ops)];
  }, [schedulesOnRoute]);

  // 3. Filter jadwal berdasarkan operator yang dipilih user
  const displayedSchedules = useMemo(() => {
      return schedulesOnRoute.filter(item => selectedFerry === 'All' || item.ferry === selectedFerry);
  }, [schedulesOnRoute, selectedFerry]);

  // Reset Ferry jika rute berubah
  useEffect(() => {
    if (!availableFerries.includes(selectedFerry)) {
        setSelectedFerry('All');
    }
  }, [origin, destination, availableFerries]);


  // --- KLIK TOMBOL "PESAN" PADA LIST JADWAL ---
  const handleSelectSchedule = (schedule: any) => {
      setSelectedSchedule(schedule);
      // Reset detail form
      setTicketClass('standard');
      setTripType('twoWay');
      setPax({ adult: 1, child: 0 });
      setStep(2); // Pindah ke Step 2
  };

  // --- HELPER HITUNG HARGA ---
  const calculateTotal = () => {
    if (!selectedSchedule) return 0;
    const prices = selectedSchedule.prices;
    
    let adultPrice = 0;
    let childPrice = 0;

    if (ticketClass === 'vip') {
        adultPrice = prices.vipAdult ? prices.vipAdult[tripType] : 0;
        childPrice = prices.vipChild ? prices.vipChild[tripType] : adultPrice;
    } else if (ticketClass === 'wni') {
        adultPrice = prices.wniAdult ? prices.wniAdult[tripType] : 0;
        childPrice = prices.wniChild ? prices.wniChild[tripType] : adultPrice;
    } else {
        adultPrice = prices.adult[tripType];
        childPrice = prices.child[tripType];
    }
    return (pax.adult * adultPrice) + (pax.child * childPrice);
  };

  // --- KIRIM WA ---
  const handleSendToWA = () => {
    if (!selectedSchedule) return;
    const total = calculateTotal();
    const classNameMap = { standard: 'Reguler / Foreigner', wni: 'WNI (Paspor Indonesia)', vip: 'VIP Class' };
    const tripNameMap = { oneWay: 'Sekali Jalan', twoWay: 'Pulang Pergi (PP)' };

    const message = `
Halo Admin Reservasi.id! 👋
Saya ingin memesan via Quick Book:

🚢 *Kapal:* ${selectedSchedule.ferry}
📍 *Rute:* ${selectedSchedule.fromPort} ➝ ${selectedSchedule.toPort}
⏰ *Jam:* ${selectedSchedule.time}

📋 *Detail:*
• Tipe: ${tripNameMap[tripType]}
• Kelas: ${classNameMap[ticketClass]}
• Dewasa: ${pax.adult}
• Anak: ${pax.child}

💰 *Estimasi:* IDR ${total > 0 ? total.toLocaleString('id-ID') : 'Hubungi Admin'}

Mohon infonya. Terima kasih!`.trim();

    window.open(`https://wa.me/6285265182020?text=${encodeURIComponent(message)}`, '_blank');
    setShowModal(false);
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-content">
          <div className="brand-wrapper">
            <div className="navbar-brand">
              <img src="/logo.svg" alt="Logo" className="brand-logo" />
              <span className="brand-name">Reservasi.id</span>
            </div>
            <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>

          <div className={`navbar-menu-wrapper ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="navbar-links">
              <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#destinations" onClick={() => setIsMobileMenuOpen(false)}>Destinations</a></li>
              <li><a href="#schedule" onClick={() => setIsMobileMenuOpen(false)}>Schedule</a></li>
              <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a></li>
            </ul>

            <div className="navbar-actions">
               <div className="search-container">
                  <div className="search-wrapper">
                    <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input 
                        type="text" placeholder="Cari rute..." value={searchTerm}
                        onChange={(e) => { setSearchTerm(e.target.value); setShowSuggestions(true); }}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    />
                  </div>
                  {showSuggestions && searchTerm && (
                  <div className="search-dropdown">
                    {filteredSearch.length > 0 ? (
                      filteredSearch.map(item => (
                        <div key={item.id} className="search-item" onClick={() => window.location.href = "#destinations"}>
                          <img src={item.image} alt={item.name} />
                          <div><span className="item-name">{item.name}</span><span className="item-type">{item.type}</span></div>
                        </div>
                      ))
                    ) : (<div className="search-empty">Tidak ditemukan</div>)}
                  </div>
                )}
              </div>
              
              <button className="btn-primary" onClick={() => { setShowModal(true); setStep(1); setIsMobileMenuOpen(false); }}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- MULTI-STEP MODAL --- */}
      {showModal && (
        <div className="booking-overlay" onClick={() => setShowModal(false)}>
          <div className="booking-card" onClick={(e) => e.stopPropagation()}>
            <button className="btn-close-booking" onClick={() => setShowModal(false)}>✕</button>
            
            {/* === STEP 1: PILIH RUTE & LIHAT JADWAL === */}
            {step === 1 && (
                <>
                    <div className="booking-header">
                        <h3>Cari Jadwal</h3>
                        <p>Pilih rute dan kapal Anda</p>
                    </div>
                    <div className="booking-body">
                        <div className="form-group">
                            <PortDropdown label="Dari Pelabuhan" value={origin} onChange={setOrigin} />
                        </div>
                        <div className="form-group">
                            <PortDropdown label="Ke Pelabuhan" value={destination} onChange={setDestination} />
                        </div>
                        <div className="form-group">
                           <OperatorDropdown 
                              label="Pilih Operator Kapal"
                              value={selectedFerry}
                              options={availableFerries}
                              onChange={setSelectedFerry}
                           />
                        </div>

                        {/* DAFTAR JADWAL YANG MUNCUL */}
                        <div className="modal-schedule-list-label">Jadwal Tersedia:</div>
                        <div className="modal-schedule-list">
                            {displayedSchedules.length > 0 ? (
                                displayedSchedules.map((sch) => (
                                    <div key={sch.id} className="modal-sch-item">
                                        <div className="sch-info-left">
                                            <span className="sch-time">{sch.time}</span>
                                            <span className="sch-name">{sch.ferry}</span>
                                        </div>
                                        <button className="btn-sch-book" onClick={() => handleSelectSchedule(sch)}>
                                            Pesan
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <div className="search-empty">Tidak ada jadwal ditemukan.</div>
                            )}
                        </div>

                    </div>
                </>
            )}

            {/* === STEP 2: CALCULATOR HARGA === */}
            {step === 2 && selectedSchedule && (
                <>
                    <div className="booking-header-row">
                        <button className="btn-back-text" onClick={() => setStep(1)}>← Kembali</button>
                        <h3>Konfirmasi</h3>
                        <div style={{width: 20}}></div>
                    </div>

                    <div className="booking-summary-compact">
                         <span>{selectedSchedule.ferry}</span>
                         <span>{selectedSchedule.time}</span>
                    </div>

                    <div className="booking-section">
                        <label className="section-label">Tipe Perjalanan</label>
                        <div className="toggle-container">
                            <button className={`toggle-btn ${tripType === 'oneWay' ? 'active' : ''}`} onClick={() => setTripType('oneWay')}>Sekali Jalan</button>
                            <button className={`toggle-btn ${tripType === 'twoWay' ? 'active' : ''}`} onClick={() => setTripType('twoWay')}>Pulang Pergi</button>
                        </div>
                    </div>

                    <div className="booking-section">
                        <label className="section-label">Kategori Tiket</label>
                        <div className="custom-select-wrapper">
                            <select className="navbar-ferry-select" value={ticketClass} onChange={(e) => setTicketClass(e.target.value as any)}>
                                <option value="standard">Paspor Asing / Umum</option>
                                {selectedSchedule.prices.wniAdult && <option value="wni">Paspor Indonesia (WNI)</option>}
                                {selectedSchedule.prices.vipAdult && <option value="vip">Kelas VIP</option>}
                            </select>
                        </div>
                    </div>

                    <div className="booking-section">
                        <label className="section-label">Jumlah Penumpang</label>
                        <div className="counter-row">
                            <div className="counter-info">
                                <span className="c-title">Dewasa</span>
                                <span className="c-price">IDR {(ticketClass==='vip'? selectedSchedule.prices.vipAdult?.oneWay : ticketClass==='wni'? selectedSchedule.prices.wniAdult?.oneWay : selectedSchedule.prices.adult.oneWay)?.toLocaleString()} (OW)</span>
                            </div>
                            <div className="pax-stepper small">
                                <button className="step-btn" onClick={() => setPax({...pax, adult: Math.max(1, pax.adult - 1)})}>−</button>
                                <span className="pax-number">{pax.adult}</span>
                                <button className="step-btn" onClick={() => setPax({...pax, adult: pax.adult + 1})}>+</button>
                            </div>
                        </div>
                        <div className="counter-row">
                            <div className="counter-info">
                                <span className="c-title">Anak-anak</span>
                                <span className="c-price">Usia 2-11 Tahun</span>
                            </div>
                            <div className="pax-stepper small">
                                <button className="step-btn" onClick={() => setPax({...pax, child: Math.max(0, pax.child - 1)})}>−</button>
                                <span className="pax-number">{pax.child}</span>
                                <button className="step-btn" onClick={() => setPax({...pax, child: pax.child + 1})}>+</button>
                            </div>
                        </div>
                    </div>

                    <div className="booking-footer">
                        <div className="total-section">
                            <span className="total-label">Total ({tripType === 'twoWay' ? 'PP' : '1 Way'})</span>
                            <span className="total-amount">IDR {calculateTotal().toLocaleString('id-ID')}</span>
                        </div>
                        <button className="btn-wa-premium" onClick={handleSendToWA}>
                            Lanjut ke WhatsApp ➝
                        </button>
                    </div>
                </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;