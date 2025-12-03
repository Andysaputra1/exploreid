import React, { useState } from 'react';
import './FerryCard.css';
import { TicketClasses, PriceDetail } from '../../data/FerryData'; // Sesuaikan path

// --- 1. DEFINISI TIPE PROPS ---
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

// Props untuk komponen baris harga (dibuat terpisah agar rapi)
interface PriceRowProps {
  label: string;
  priceDetail: PriceDetail;
  variant?: 'standard' | 'wni' | 'vip';
  onBook?: () => void;
}

// --- 2. SUB-COMPONENT: PRICE ROW ---
// Dipisah agar renderPriceTable bersih
const PriceRow: React.FC<PriceRowProps> = ({ label, priceDetail, variant = 'standard' }) => {
  // Helper class untuk styling berdasarkan variant
  const getRowClass = () => {
    if (variant === 'vip') return 'vip-class-row';
    if (variant === 'wni') return 'id-promo-row';
    return '';
  };

  const getLabelIcon = () => {
    if (variant === 'vip') return '👑 ';
    if (variant === 'wni') return '✨ ';
    return '';
  };

  const getButtonClass = () => {
    if (variant === 'vip') return 'vip';
    if (variant === 'wni') return 'wni-promo-btn';
    return '';
  };

  return (
    <div className={`p-row ${getRowClass()}`}>
      <div className="p-col" data-label="Kategori">
        <strong className={variant === 'wni' ? 'text-id-promo' : ''}>
          {getLabelIcon()}{label}
        </strong>
      </div>
      <div className="p-col" data-label="One Way">
        Rp {priceDetail.oneWay.toLocaleString('id-ID')}
      </div>
      <div className="p-col" data-label="Two Way (PP)">
        Rp {priceDetail.twoWay.toLocaleString('id-ID')}
      </div>
      <div className="p-col action">
        <button className={`btn-book-small ${getButtonClass()}`}>
          Pesan {variant === 'vip' ? 'VIP' : variant === 'wni' ? 'WNI' : ''}
        </button>
      </div>
    </div>
  );
};


// --- 3. MAIN COMPONENT ---
const FerryCard: React.FC<FerryProps> = ({ 
  name, image, origin, destination, time, prices, note, fromPort, toPort 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper: Format Waktu
  const getTimeDisclaimer = (timeStr: string) => {
    if (timeStr.includes('SGT')) return 'Singapore Time';
    if (timeStr.includes('MYT')) return 'Malaysia Time';
    return 'WIB (Indonesia Time)';
  };

  // --- LOGIKA RENDER YANG DIPERBAIKI ---
  const renderPriceTable = () => {
    // Helper: Cek apakah harga Dewasa & Anak sama
    const isPriceSame = (adult: PriceDetail, child?: PriceDetail) => {
      if (!child) return true;
      return adult.oneWay === child.oneWay && adult.twoWay === child.twoWay;
    };

    // Deteksi ketersediaan tipe harga
    const hasWni = !!prices.wniAdult;
    const hasVip = !!prices.vipAdult;
    const hasGroup = !!prices.groupPax;

    return (
      <>
        {/* === SECTION 1: HARGA STANDAR / FOREIGNER === */}
        {/* Jika ada VIP, anggap ini "Regular". Jika ada WNI, anggap ini "Foreigner". */}
        <h4 className="table-subtitle">
          {hasVip ? "Kelas Reguler" : (hasWni ? "Paspor Asing (Foreigner)" : "Tiket Reguler")}
        </h4>
        
        {isPriceSame(prices.adult, prices.child) ? (
            <PriceRow 
              label={hasWni ? "Tiket All Passport" : "Tiket Penumpang"} 
              priceDetail={prices.adult} 
            />
        ) : (
            <>
              <PriceRow label="Dewasa" priceDetail={prices.adult} />
              <PriceRow label="Anak-anak" priceDetail={prices.child} />
            </>
        )}

        {/* === SECTION 2: HARGA KHUSUS WNI (Jika Ada) === */}
        {hasWni && prices.wniAdult && (
          <>
            <h4 className="table-subtitle promo-subtitle">Paspor Indonesia (WNI)</h4>
            {isPriceSame(prices.wniAdult, prices.wniChild) ? (
               <PriceRow 
                 label="Tiket Khusus WNI" 
                 priceDetail={prices.wniAdult} 
                 variant="wni" 
               />
            ) : (
               <>
                 <PriceRow label="Dewasa (WNI)" priceDetail={prices.wniAdult} variant="wni" />
                 {prices.wniChild && (
                   <PriceRow label="Anak (WNI)" priceDetail={prices.wniChild} variant="wni" />
                 )}
               </>
            )}
          </>
        )}

        {/* === SECTION 3: HARGA VIP (Jika Ada) === */}
        {hasVip && prices.vipAdult && (
          <>
             <h4 className="table-subtitle vip-subtitle">Kelas VIP (Cabin)</h4>
             {isPriceSame(prices.vipAdult, prices.vipChild) ? (
                <PriceRow 
                  label="Tiket VIP" 
                  priceDetail={prices.vipAdult} 
                  variant="vip" 
                />
             ) : (
                <>
                  <PriceRow label="VIP Dewasa" priceDetail={prices.vipAdult} variant="vip" />
                  {prices.vipChild && (
                    <PriceRow label="VIP Anak" priceDetail={prices.vipChild} variant="vip" />
                  )}
                </>
             )}
          </>
        )}

        {/* === SECTION 4: GROUP PAX (Jika Ada - untuk BatamFast/Majestic) === */}
        {hasGroup && prices.groupPax && (
           <>
            <h4 className="table-subtitle">Paket Group</h4>
            <div className="p-row">
                <div className="p-col"><strong>Group (Min 4 Pax)</strong></div>
                <div className="p-col">-</div>
                <div className="p-col">Rp {prices.groupPax.twoWay.toLocaleString('id-ID')}</div>
                <div className="p-col action"><button className="btn-book-small">Pesan Group</button></div>
            </div>
           </>
        )}
      </>
    );
  };

  return (
    <div className={`ticket-card-wrapper ${isOpen ? 'open' : ''}`}>
      {/* HEADER KARTU - (Bagian ini tidak banyak berubah, hanya cleanup sedikit) */}
      <div className="ticket-card">
        <div className="ticket-main">
          <div className="carrier-logo">
            <img src={image} alt={name} />
          </div>
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
            <span className="amount">
              {(prices.wniAdult?.oneWay || prices.child.oneWay || prices.adult.oneWay).toLocaleString('id-ID')}
            </span>
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
          <div className="price-table-container">
            
            <div className="p-row p-header table-header-desktop">
                <div className="p-col">Kategori</div>
                <div className="p-col">One Way</div>
                <div className="p-col">Two Way (PP)</div>
                <div className="p-col action">Aksi</div>
            </div>

            {renderPriceTable()}

          </div>
          
          <div className="detail-footer">
            <p>{note || "*Harga dapat berubah sewaktu-waktu."}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FerryCard;