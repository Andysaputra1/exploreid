import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const getTimeDisclaimer = (timeStr: string) => {
    if (timeStr.includes('SGT')) return 'Singapore Time';
    if (timeStr.includes('MYT')) return 'Malaysia Time';
    return 'WIB (Indonesia Time)';
  };

  // --- FUNGSI RENDER LOGIC BARU ---
  const renderPriceTable = () => {
    
    // Cek ketersediaan harga khusus (WNI/VIP)
    const hasWniPrice = prices.vipAdult !== undefined || prices.wniAdult !== undefined;
    
    // Cek apakah harga Foreigner Dewasa == Anak
    const isForeignSame = prices.adult.oneWay === prices.child.oneWay;
    
    // --- Template Baris Harga (Helper) ---
    const PriceRow = ({ label, owPrice, twPrice, isWni = false }: any) => (
      <div className={`p-row ${isWni ? 'id-promo-row' : ''}`}>
        <div className="p-col" data-label="Kategori">
          <strong className={isWni ? 'text-id-promo' : ''}>
            {isWni ? '✨ ' : ''}{label}
          </strong>
        </div>
        <div className="p-col" data-label="One Way">Rp {owPrice.toLocaleString()}</div>
        <div className="p-col" data-label="Two Way (PP)">Rp {twPrice.toLocaleString()}</div>
        <div className="p-col action">
          <button className={`btn-book-small ${isWni ? 'wni-promo-btn' : ''}`}>
            Pesan {isWni ? 'WNI' : ''}
          </button>
        </div>
      </div>
    );

    // =========================================================
    // SKENARIO 1: TIDAK ADA HARGA KHUSUS (WNI/VIP)
    // (Misal: Marine Hawk, Dolphin)
    // =========================================================
    if (!hasWniPrice) {
        
        // KASUS 1a: Harga Dewasa == Anak (Tampilkan 1 Baris Saja)
        if (isForeignSame) {
            return (
                <PriceRow 
                    label="Tiket Reguler" 
                    owPrice={prices.adult.oneWay} 
                    twPrice={prices.adult.twoWay} 
                />
            );
        }

        // KASUS 1b: Harga Dewasa != Anak (Tampilkan 2 Baris)
        return (
            <>
                <PriceRow label="Tiket Dewasa" owPrice={prices.adult.oneWay} twPrice={prices.adult.twoWay} />
                <PriceRow label="Tiket Anak-anak" owPrice={prices.child.oneWay} twPrice={prices.child.twoWay} />
            </>
        );
    }

    // =========================================================
    // SKENARIO 2: ADA PEMBEDAAN HARGA (FOREIGNER vs WNI)
    // (Misal: Horizon, Majestic, Putri Anggreni)
    // =========================================================
    
    // Tentukan harga WNI dari field yang tersedia (wniAdult atau vipAdult)
    const wniAdultPrice = prices.wniAdult || prices.vipAdult;
    const wniChildPrice = prices.wniChild || prices.vipChild;

    return (
        <>
            {/* SECTION 1: TIKET FOREIGNER */}
            <h4 className="table-subtitle">Paspor Asing (Foreigner)</h4>
            
            {/* Cek lagi: Jika Foreigner Dewasa == Anak, gabung jadi 1 baris */}
            {isForeignSame ? (
                 <PriceRow label="Tiket Reguler (Foreigner)" owPrice={prices.adult.oneWay} twPrice={prices.adult.twoWay} />
            ) : (
                <>
                    <PriceRow label="Dewasa (Foreigner)" owPrice={prices.adult.oneWay} twPrice={prices.adult.twoWay} />
                    <PriceRow label="Anak (Foreigner)" owPrice={prices.child.oneWay} twPrice={prices.child.twoWay} />
                </>
            )}


            {/* SECTION 2: TIKET WNI */}
            <h4 className="table-subtitle promo-subtitle">Paspor Indonesia (WNI)</h4>
            
            <PriceRow 
                label="Dewasa (WNI)" 
                owPrice={wniAdultPrice!.oneWay} 
                twPrice={wniAdultPrice!.twoWay!} 
                isWni={true}
            />
            
            {/* Tampilkan Anak WNI jika datanya ada */}
            {wniChildPrice ? (
                <PriceRow 
                    label="Anak (WNI)" 
                    owPrice={wniChildPrice.oneWay} 
                    twPrice={wniChildPrice.twoWay!} 
                    isWni={true}
                />
            ) : (
                // Jika tidak ada data khusus anak WNI, asumsikan sama dengan Dewasa WNI (opsional)
                 null
            )}
        </>
    );
  };


  return (
    <div className={`ticket-card-wrapper ${isOpen ? 'open' : ''}`}>
      
      {/* HEADER KARTU */}
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
                {prices.child ? prices.child.oneWay.toLocaleString('id-ID') : prices.adult.oneWay.toLocaleString('id-ID')}
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