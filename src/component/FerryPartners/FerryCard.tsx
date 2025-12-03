import React, { useState } from 'react';
import { createPortal } from 'react-dom'; // WAJIB: Agar popup muncul di atas segalanya
import './FerryCard.css';
import { TicketClasses } from '../../data/FerryData'; 

interface FerryProps {
  name: string; 
  image: string; 
  origin: string; 
  destination: string;
  time: string; 
  prices: TicketClasses; 
  note?: string; 
  fromPort: string; 
  toPort: string;
}

const FerryCard: React.FC<FerryProps> = ({ name, image, origin, destination, time, prices, note, fromPort, toPort }) => {
  const [isOpen, setIsOpen] = useState(false); // Untuk dropdown tabel harga

  // --- STATE UNTUK MODAL BOOKING ---
  const [showBooking, setShowBooking] = useState(false);
  
  // Pilihan User di dalam Modal
  const [tripType, setTripType] = useState<'oneWay' | 'twoWay'>('twoWay'); // Default PP
  const [ticketClass, setTicketClass] = useState<'standard' | 'wni' | 'vip'>('standard');
  const [pax, setPax] = useState({ adult: 1, child: 0 });

  const getTimeDisclaimer = (timeStr: string) => {
    if (timeStr.includes('SGT')) return 'Singapore Time';
    if (timeStr.includes('MYT')) return 'Malaysia Time';
    return 'WIB (Indonesia Time)';
  };

  // --- LOGIC BUKA MODAL ---
  const handleOpenBooking = (initialClass: 'standard' | 'wni' | 'vip') => {
    setTicketClass(initialClass);
    setTripType('twoWay'); // Default tawarin PP
    setPax({ adult: 1, child: 0 }); // Reset jumlah penumpang
    setShowBooking(true);
  };

  // --- HELPER: HITUNG TOTAL HARGA ---
  const calculateTotal = () => {
    let adultPrice = 0;
    let childPrice = 0;

    // 1. Tentukan Harga Berdasarkan Kelas & Tipe Perjalanan
    if (ticketClass === 'vip') {
        adultPrice = prices.vipAdult ? prices.vipAdult[tripType] : 0;
        // Fallback: kalau harga anak VIP gak ada, pakai harga dewasa VIP
        childPrice = prices.vipChild ? prices.vipChild[tripType] : adultPrice; 
    } else if (ticketClass === 'wni') {
        adultPrice = prices.wniAdult ? prices.wniAdult[tripType] : 0;
        childPrice = prices.wniChild ? prices.wniChild[tripType] : adultPrice;
    } else {
        // Standard / Foreigner
        adultPrice = prices.adult[tripType];
        childPrice = prices.child[tripType];
    }

    return (pax.adult * adultPrice) + (pax.child * childPrice);
  };

  // --- LOGIC KIRIM KE WHATSAPP ---
  const handleSendToWA = () => {
    const total = calculateTotal();
    const classNameMap = { standard: 'Paspor Asing / Reguler', wni: 'WNI (Paspor Indonesia)', vip: 'VIP Class' };
    const tripNameMap = { oneWay: 'Sekali Jalan (One Way)', twoWay: 'Pulang Pergi (Two Way)' };

    const message = `
Halo Admin Reservasi.id! 👋
Saya ingin memesan tiket ferry:

🚢 *Kapal:* ${name}
📍 *Rute:* ${fromPort} ➝ ${toPort}
⏰ *Jam:* ${time}

📋 *Detail Pesanan:*
• Tipe: ${tripNameMap[tripType]}
• Kelas: ${classNameMap[ticketClass]}
• Dewasa: ${pax.adult} Org
• Anak: ${pax.child} Org

💰 *Total Estimasi:* IDR ${total.toLocaleString('id-ID')}

Mohon info ketersediaannya. Terima kasih!
    `.trim();

    window.open(`https://wa.me/6285265182020?text=${encodeURIComponent(message)}`, '_blank');
    setShowBooking(false);
  };

  // --- RENDER TABLE HARGA (DROPDOWN) ---
  const renderPriceTable = () => {
    const hasWni = prices.wniAdult !== undefined;
    const hasVip = prices.vipAdult !== undefined;
    const isForeignSame = prices.adult.oneWay === prices.child.oneWay;

    const PriceRow = ({ label, owPrice, twPrice, type = 'standard' }: any) => {
        let rowClass = '', btnClass = '', btnText = 'Pesan', icon = '';
        if (type === 'wni') { rowClass = 'id-promo-row'; btnClass = 'wni-promo-btn'; btnText = 'Pesan WNI'; icon = '✨ '; }
        if (type === 'vip') { rowClass = 'vip-class-row'; btnClass = 'vip'; btnText = 'Pesan VIP'; icon = '👑 '; }

        return (
            <div className={`p-row ${rowClass}`}>
                <div className="p-col"><strong>{icon}{label}</strong></div>
                <div className="p-col">Rp {owPrice.toLocaleString()}</div>
                <div className="p-col">Rp {twPrice.toLocaleString()}</div>
                <div className="p-col action">
                    <button className={`btn-book-small ${btnClass}`} onClick={() => handleOpenBooking(type)}>
                        {btnText}
                    </button>
                </div>
            </div>
        );
    };

    return (
        <>
            {/* Header Kategori Standard */}
            <h4 className="table-subtitle">{hasVip ? "Kelas Reguler" : "Paspor Asing (Foreigner)"}</h4>
            {isForeignSame ? 
                <PriceRow label={hasVip ? "Tiket Reguler" : "Tiket Foreigner"} owPrice={prices.adult.oneWay} twPrice={prices.adult.twoWay} type="standard"/> :
                <>
                    <PriceRow label="Dewasa" owPrice={prices.adult.oneWay} twPrice={prices.adult.twoWay} type="standard"/>
                    <PriceRow label="Anak-anak" owPrice={prices.child.oneWay} twPrice={prices.child.twoWay} type="standard"/>
                </>
            }
            
            {/* Header Kategori WNI */}
            {hasWni && (
                <>
                    <h4 className="table-subtitle promo-subtitle">Paspor Indonesia (WNI)</h4>
                    <PriceRow label="Dewasa (WNI)" owPrice={prices.wniAdult!.oneWay} twPrice={prices.wniAdult!.twoWay} type="wni" />
                    {prices.wniChild && <PriceRow label="Anak (WNI)" owPrice={prices.wniChild.oneWay} twPrice={prices.wniChild.twoWay} type="wni" />}
                </>
            )}

            {/* Header Kategori VIP */}
            {hasVip && (
                <>
                    <h4 className="table-subtitle vip-subtitle">Kelas VIP</h4>
                    <PriceRow label="VIP Dewasa" owPrice={prices.vipAdult!.oneWay} twPrice={prices.vipAdult!.twoWay} type="vip" />
                    {prices.vipChild && <PriceRow label="VIP Anak" owPrice={prices.vipChild.oneWay} twPrice={prices.vipChild.twoWay} type="vip" />}
                </>
            )}
        </>
    );
  };

  return (
    <div className={`ticket-card-wrapper ${isOpen ? 'open' : ''}`}>
      
      {/* 1. KARTU UTAMA */}
      <div className="ticket-card">
        <div className="ticket-main">
          <div className="carrier-logo"><img src={image} alt={name} /></div>
          <div className="carrier-info">
            <h4>{name}</h4>
            <span className="route-badge">{fromPort} ➝ {toPort}</span> 
            <span className="route-city-context">{origin} ➝ {destination}</span>
          </div>
        </div>

        <div className="ticket-time">
          <div className="time-display">
            <div className="time-group">
              <span className="departure-time">{time}</span>
              <span className="zone-info">{getTimeDisclaimer(time)}</span>
            </div>
            <span className="time-label">Keberangkatan</span>
          </div>
        </div>

        <div className="ticket-action">
          <div className="price-display">
            <span className="label-start">Mulai dari</span>
            <span className="currency">IDR</span>
            <span className="amount">{(prices.wniAdult?.oneWay || prices.child.oneWay || prices.adult.oneWay).toLocaleString('id-ID')}</span>
          </div>
          <button className="btn-select" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Tutup' : 'Pilih'} <span className={`arrow ${isOpen ? 'up' : 'down'}`}>▼</span>
          </button>
        </div>
      </div>

      {/* 2. DROPDOWN TABEL HARGA */}
      {isOpen && (
        <div className="ticket-details">
          <div className="price-table-container">
            <div className="p-row p-header table-header-desktop">
                <div className="p-col">Kategori</div><div className="p-col">One Way</div><div className="p-col">Two Way (PP)</div><div className="p-col action">Aksi</div>
            </div>
            {renderPriceTable()}
          </div>
          <div className="detail-footer"><p>{note || "*Harga dapat berubah sewaktu-waktu."}</p></div>
        </div>
      )}

      {/* 3. MODAL BOOKING POPUP (MENGGUNAKAN PORTAL) */}
      {showBooking && createPortal(
        <div className="booking-overlay" onClick={() => setShowBooking(false)}>
            <div className="booking-card" onClick={(e) => e.stopPropagation()}>
                
                {/* Header Modal */}
                <div className="booking-header-row">
                    <h3>Atur Pesanan</h3>
                    <button className="btn-close-booking" onClick={() => setShowBooking(false)}>✕</button>
                </div>

                {/* Section A: Tipe Perjalanan */}
                <div className="booking-section">
                    <label className="section-label">Tipe Perjalanan</label>
                    <div className="toggle-container">
                        <button className={`toggle-btn ${tripType === 'oneWay' ? 'active' : ''}`} onClick={() => setTripType('oneWay')}>Sekali Jalan</button>
                        <button className={`toggle-btn ${tripType === 'twoWay' ? 'active' : ''}`} onClick={() => setTripType('twoWay')}>Pulang Pergi (PP)</button>
                    </div>
                </div>

                {/* Section B: Pilih Kelas */}
                <div className="booking-section">
                    <label className="section-label">Kategori Tiket</label>
                    <select 
                        className="class-select" 
                        value={ticketClass} 
                        onChange={(e) => setTicketClass(e.target.value as any)}
                    >
                        <option value="standard">{name.includes("Putri") ? "Reguler" : "Paspor Asing (Foreigner)"}</option>
                        {prices.wniAdult && <option value="wni">Paspor Indonesia (WNI)</option>}
                        {prices.vipAdult && <option value="vip">Kelas VIP</option>}
                    </select>
                </div>

                {/* Section C: Counter Penumpang */}
                <div className="booking-section">
                    <label className="section-label">Jumlah Penumpang</label>
                    
                    {/* Dewasa */}
                    <div className="counter-row">
                        <div className="counter-info">
                            <span className="c-title">Dewasa</span>
                            <span className="c-price">
                                IDR {
                                    (ticketClass === 'vip' ? (prices.vipAdult?.oneWay || 0) : 
                                     ticketClass === 'wni' ? (prices.wniAdult?.oneWay || 0) : 
                                     prices.adult.oneWay).toLocaleString()
                                } /pax (OW)
                            </span>
                        </div>
                        <div className="pax-stepper small">
                            <button className="step-btn" onClick={() => setPax({...pax, adult: Math.max(1, pax.adult - 1)})}>−</button>
                            <span className="pax-number">{pax.adult}</span>
                            <button className="step-btn" onClick={() => setPax({...pax, adult: pax.adult + 1})}>+</button>
                        </div>
                    </div>

                    {/* Anak */}
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

                {/* Footer Total & Tombol WA */}
                <div className="booking-footer">
                    <div className="total-section">
                        <span className="total-label">Total Estimasi ({tripType === 'twoWay' ? 'PP' : '1 Way'})</span>
                        <span className="total-amount">IDR {calculateTotal().toLocaleString('id-ID')}</span>
                    </div>
                    <button className="btn-wa-premium" onClick={handleSendToWA}>
                        Lanjut ke WhatsApp ➝
                    </button>
                </div>

            </div>
        </div>,
        document.body // KUNCI UTAMA: Render di luar component, nempel di Body
      )}

    </div>
  );
};

export default FerryCard;