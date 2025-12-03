// src/data/ferryData.ts
import imgDolphin from "../assets/logoferry/Dolphin.png"
import imgHorizon from "../assets/logoferry/Horizon.png"
import imgPutri from "../assets/logoferry/PutriAnggreni.png"
import imgSindo from "../assets/logoferry/Sindo.png" 


export interface PriceDetail {
  oneWay: number;
  twoWay: number;
}

export interface TicketClasses {
  adult: PriceDetail;
  child: PriceDetail;
  wniAdult?: PriceDetail; 
  wniChild?: PriceDetail; 
  vipAdult?: PriceDetail; 
  vipChild?: PriceDetail; 
  groupPax?: PriceDetail; 
}

export interface FerrySchedule {
  id: number;
  ferry: string;
  from: string;
  to: string;
  time: string;
  prices: TicketClasses;
  logo: string;
  note?: string;
  fromPort: string;
  toPort: string;
}

// --- ASSETS LOGO ---
const LOGO_BATAMFAST = "https://cdn-icons-png.flaticon.com/512/56/56903.png"; 
const LOGO_MAJESTIC = "https://cdn-icons-png.flaticon.com/512/870/870092.png";
const LOGO_HORIZON = imgHorizon;
const LOGO_PUTRI = imgPutri; 
const LOGO_MARINEHAWK = "https://cdn-icons-png.flaticon.com/512/870/870092.png"; 
const LOGO_DOLPHIN = imgDolphin; 
const LOGO_PINTAS = "https://cdn-icons-png.flaticon.com/512/2942/2942544.png";
const LOGO_SINDO = imgSindo; // Icon Kapal Sindo


// ==========================================
// DEFINISI HARGA (PRICE LIST)
// ==========================================

// 1. SINDO FERRY (Sesuai Poster Terbaru)
// All Passport (Standard): 2-way 890k / 1-way SG-Batam 460k / 1-way Batam-SG 455k
// Kita ambil rata-rata one-way asing ~460k
// IDN Passport: 2-way 720k / 1-way 365k
const PRICES_SINDO: TicketClasses = {
  // Foreigner
  adult: { oneWay: 460000, twoWay: 890000 },
  child: { oneWay: 460000, twoWay: 890000 }, 
  // WNI
  wniAdult: { oneWay: 365000, twoWay: 720000 },
  wniChild: { oneWay: 365000, twoWay: 720000 }
};
const NOTE_SINDO = "*Harga Regular: All Passport. Harga Khusus: WNI (IDN Passport).";


// 2. BATAM FAST
const PRICES_BATAMFAST: TicketClasses = {
  adult: { oneWay: 480000, twoWay: 900000 },
  child: { oneWay: 480000, twoWay: 900000 }, 
  wniAdult: { oneWay: 385000, twoWay: 720000 },
  wniChild: { oneWay: 385000, twoWay: 720000 },
  groupPax: { oneWay: 0, twoWay: 690000 }
};
const NOTE_BATAMFAST = "*Harga Regular: Foreigner. WNI: IDN Passport. Group: Min 4 Pax.";

// 3. MAJESTIC
const PRICES_MAJESTIC: TicketClasses = {
  adult: { oneWay: 385000, twoWay: 725000 },
  child: { oneWay: 385000, twoWay: 725000 },
  wniAdult: { oneWay: 480000, twoWay: 900000 },
  groupPax: { oneWay: 0, twoWay: 690000 }
};
const NOTE_MAJESTIC = "*Harga Regular: Foreigner. WNI: IDN Passport. Group: Min 4 Pax.";

// 4. HORIZON FERRY
const PRICES_HORIZON: TicketClasses = {
  adult: { oneWay: 520000, twoWay: 915000 }, 
  child: { oneWay: 520000, twoWay: 915000 }, 
  wniAdult: { oneWay: 435000, twoWay: 735000 } 
};
const NOTE_HORIZON = "*Harga Regular: All Passport. Harga Khusus: WNI (IDN Passport).";

// 5. PUTRI ANGGRENI
const PRICES_PUTRI: TicketClasses = {
  adult: { oneWay: 380000, twoWay: 580000 },
  child: { oneWay: 340000, twoWay: 540000 },
  vipAdult: { oneWay: 490000, twoWay: 730000 }, 
  vipChild: { oneWay: 400000, twoWay: 600000 } 
};
const NOTE_PUTRI = "*Harga sudah termasuk Tax Batam, belum termasuk Tax Puteri Harbour.";

// 6. MARINE HAWK
const PRICES_MARINE: TicketClasses = {
  adult: { oneWay: 395000, twoWay: 565000 },
  child: { oneWay: 350000, twoWay: 555000 }
};
const NOTE_MARINE = "*Harga sudah termasuk Tax Batam, belum termasuk Tax Malaysia.";

// 7. DOLPHIN / PINTAS
const PRICES_DOLPHIN: TicketClasses = {
    adult: { oneWay: 485000, twoWay: 580000 },
    child: { oneWay: 405000, twoWay: 555000 }
};
const NOTE_DOLPHIN = "*Gold Coast (Batam) ↔ Stulang Laut (Johor). FREE Voucher transport.";

const PRICES_PINTAS: TicketClasses = {
    adult: { oneWay: 370000, twoWay: 540000 },
    child: { oneWay: 315000, twoWay: 480000 }
};
const NOTE_PINTAS = "*Harga termasuk Tax Batam. Belum termasuk Tax Malaysia.";


// ==========================================
// DATABASE JADWAL LENGKAP
// ==========================================

export const ferrySchedules: FerrySchedule[] = [
  
  // ============================================================
  // 1. SINDO FERRY (FULL SCHEDULE DARI POSTER) - ID 800+
  // ============================================================
  
  // --- HFC (Singapore) -> BATAM CENTRE (BTC) [SG Time] ---
  { id: 801, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "08:00 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 802, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "09:00 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 803, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "10:20 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 804, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "12:00 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 805, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "13:20 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 806, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "14:50 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 807, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "16:10 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 808, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "17:20 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 809, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "18:30 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 810, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "19:40 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 811, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "20:45 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 812, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "21:50 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },

  // --- BATAM CENTRE (BTC) -> HFC (Singapore) [Indo Time] ---
  { id: 813, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "06:00 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 814, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "07:20 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 815, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "08:40 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 816, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "10:40 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 817, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "12:40 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 818, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "14:00 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 819, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "15:10 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 820, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "16:10 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 821, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "17:20 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 822, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "18:20 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 823, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "19:30 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 824, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "20:20 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },

  // --- HFC (Singapore) -> SEKUPANG (SKP) [SG Time] ---
  { id: 825, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "08:30 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 826, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "10:00 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 827, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "11:10 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 828, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "14:10 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 829, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "16:00 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 830, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "17:30 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 831, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "18:10 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 832, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "19:30 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },

  // --- SEKUPANG (SKP) -> HFC (Singapore) [Indo Time] ---
  { id: 833, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "06:00 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 834, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "07:00 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 835, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "08:30 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 836, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "11:20 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 837, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "12:30 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 838, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "13:50 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 839, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "15:20 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 840, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "17:40 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 841, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "18:30 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },

  // --- HFC (Singapore) -> WATERFRONT [SG Time] ---
  { id: 842, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "10:00 SGT", fromPort: "HarbourFront", toPort: "Waterfront" },
  { id: 843, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "14:10 SGT", fromPort: "HarbourFront", toPort: "Waterfront" },

  // --- WATERFRONT -> HFC (Singapore) [Indo Time] ---
  { id: 844, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "13:20 WIB", fromPort: "Waterfront", toPort: "HarbourFront" },
  { id: 845, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "14:50 WIB", fromPort: "Waterfront", toPort: "HarbourFront" },

  // --- TANAH MERAH (TMFT) -> BATAM CENTRE [SG Time] ---
  { id: 846, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "10:20 SGT", fromPort: "Tanah Merah", toPort: "Batam Centre" },
  { id: 847, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "12:30 SGT", fromPort: "Tanah Merah", toPort: "Batam Centre" },
  { id: 848, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "14:30 SGT", fromPort: "Tanah Merah", toPort: "Batam Centre" },
  { id: 849, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "16:30 SGT", fromPort: "Tanah Merah", toPort: "Batam Centre" },
  { id: 850, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "17:40 SGT", fromPort: "Tanah Merah", toPort: "Batam Centre" },

  // --- BATAM CENTRE -> TMFT (Tanah Merah) [Indo Time] ---
  { id: 851, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "08:00 WIB", fromPort: "Batam Centre", toPort: "Tanah Merah" },
  { id: 852, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "09:20 WIB", fromPort: "Batam Centre", toPort: "Tanah Merah" },
  { id: 853, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "11:30 WIB", fromPort: "Batam Centre", toPort: "Tanah Merah" },
  { id: 854, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "13:20 WIB", fromPort: "Batam Centre", toPort: "Tanah Merah" },

  // --- HFC (Singapore) -> GOLD COAST BATAM [SG Time] ---
  { id: 855, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "07:55 SGT", fromPort: "HarbourFront", toPort: "Gold Coast" },
  { id: 856, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "09:35 SGT", fromPort: "HarbourFront", toPort: "Gold Coast" },
  { id: 857, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "13:00 SGT", fromPort: "HarbourFront", toPort: "Gold Coast" },
  { id: 858, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Batam", time: "18:25 SGT", fromPort: "HarbourFront", toPort: "Gold Coast" },

  // --- GOLD COAST -> HFC (Singapore) [Indo Time] ---
  { id: 859, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "10:30 WIB", fromPort: "Gold Coast", toPort: "HarbourFront" },
  { id: 860, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "13:00 WIB", fromPort: "Gold Coast", toPort: "HarbourFront" },
  { id: 861, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "15:30 WIB", fromPort: "Gold Coast", toPort: "HarbourFront" },
  { id: 862, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Batam", to: "Singapura", time: "19:00 WIB", fromPort: "Gold Coast", toPort: "HarbourFront" },

  // --- TMFT (Tanah Merah) <-> TANJUNG PINANG (TPI) ---
  { id: 863, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Tanjung Pinang", time: "11:00 SGT", fromPort: "Tanah Merah", toPort: "Tanjung Pinang" },
  { id: 864, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Singapura", to: "Tanjung Pinang", time: "17:10 SGT", fromPort: "Tanah Merah", toPort: "Tanjung Pinang" },
  
  { id: 865, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Tanjung Pinang", to: "Singapura", time: "06:45 WIB", fromPort: "Tanjung Pinang", toPort: "Tanah Merah" },
  { id: 866, ferry: "Sindo Ferry", logo: LOGO_SINDO, prices: PRICES_SINDO, note: NOTE_SINDO, from: "Tanjung Pinang", to: "Singapura", time: "13:30 WIB", fromPort: "Tanjung Pinang", toPort: "Tanah Merah" },


  // ============================================================
  // 2. BATAM FAST (FULL SCHEDULE) - ID 700+
  // ============================================================
  
  // --- HFC (Singapore) -> BTC (Batam Centre) ---
  { id: 701, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "07:40 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 702, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "08:40 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 703, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "09:30 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 704, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "10:50 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 705, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "12:30 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 706, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "14:20 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 707, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "15:30 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 708, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "16:50 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 709, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "18:00 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 710, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "19:10 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 711, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "20:20 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },
  { id: 712, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "21:40 SGT", fromPort: "HarbourFront", toPort: "Batam Centre" },

  // --- BTC (Batam Centre) -> HFC (Singapore) ---
  { id: 713, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "06:00 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 714, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "07:00 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 715, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "08:20 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 716, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "09:50 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 717, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "11:10 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 718, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "12:50 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 719, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "14:10 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 720, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "15:20 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 721, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "16:30 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 722, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "17:40 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 723, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "19:00 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },
  { id: 724, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "20:30 WIB", fromPort: "Batam Centre", toPort: "HarbourFront" },

  // --- HFC (Singapore) -> SKP (Sekupang) ---
  { id: 725, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "08:20 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 726, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "09:20 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 727, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "10:00 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 728, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "11:10 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 729, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "14:10 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 730, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "16:00 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 731, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "17:30 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 732, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "18:10 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },
  { id: 733, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "19:30 SGT", fromPort: "HarbourFront", toPort: "Sekupang" },

  // --- SKP (Sekupang) -> HFC (Singapore) ---
  { id: 734, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "06:00 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 735, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "07:00 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 736, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "08:30 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 737, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "11:20 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 738, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "12:30 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 739, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "13:50 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 740, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "15:00 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 741, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "15:20 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 742, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "17:40 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },
  { id: 743, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "18:30 WIB", fromPort: "Sekupang", toPort: "HarbourFront" },

  // --- TMFT (Tanah Merah) <-> BTC (Batam Centre) ---
  { id: 744, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "10:20 SGT", fromPort: "Tanah Merah", toPort: "Batam Centre" },
  { id: 745, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "12:30 SGT", fromPort: "Tanah Merah", toPort: "Batam Centre" },
  { id: 746, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "14:30 SGT", fromPort: "Tanah Merah", toPort: "Batam Centre" },
  { id: 747, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "16:30 SGT", fromPort: "Tanah Merah", toPort: "Batam Centre" },
  { id: 748, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "20:10 SGT", fromPort: "Tanah Merah", toPort: "Batam Centre" },
  
  { id: 749, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "07:45 WIB", fromPort: "Batam Centre", toPort: "Tanah Merah" },
  { id: 750, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "08:00 WIB", fromPort: "Batam Centre", toPort: "Tanah Merah" },
  { id: 751, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "09:20 WIB", fromPort: "Batam Centre", toPort: "Tanah Merah" },
  { id: 752, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "11:30 WIB", fromPort: "Batam Centre", toPort: "Tanah Merah" },
  { id: 753, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "13:20 WIB", fromPort: "Batam Centre", toPort: "Tanah Merah" },

  // --- TMFT (Tanah Merah) <-> Nongsapura ---
  { id: 754, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "08:00 SGT", fromPort: "Tanah Merah", toPort: "Nongsapura" },
  { id: 755, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "08:50 SGT", fromPort: "Tanah Merah", toPort: "Nongsapura" },
  { id: 756, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "10:50 SGT", fromPort: "Tanah Merah", toPort: "Nongsapura" },
  { id: 757, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "12:00 SGT", fromPort: "Tanah Merah", toPort: "Nongsapura" },
  { id: 758, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "14:20 SGT", fromPort: "Tanah Merah", toPort: "Nongsapura" },
  { id: 759, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "16:20 SGT", fromPort: "Tanah Merah", toPort: "Nongsapura" },
  { id: 760, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "19:00 SGT", fromPort: "Tanah Merah", toPort: "Nongsapura" },
  { id: 761, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "20:20 SGT", fromPort: "Tanah Merah", toPort: "Nongsapura" },

  { id: 762, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "06:00 WIB", fromPort: "Nongsapura", toPort: "Tanah Merah" },
  { id: 763, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "08:00 WIB", fromPort: "Nongsapura", toPort: "Tanah Merah" },
  { id: 764, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "09:30 WIB", fromPort: "Nongsapura", toPort: "Tanah Merah" },
  { id: 765, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "12:10 WIB", fromPort: "Nongsapura", toPort: "Tanah Merah" },
  { id: 766, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "14:20 WIB", fromPort: "Nongsapura", toPort: "Tanah Merah" },
  { id: 767, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "15:40 WIB", fromPort: "Nongsapura", toPort: "Tanah Merah" },
  { id: 768, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "17:30 WIB", fromPort: "Nongsapura", toPort: "Tanah Merah" },
  { id: 769, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "20:00 WIB", fromPort: "Nongsapura", toPort: "Tanah Merah" },

  // --- HFC (HarbourFront) <-> Gold Coast ---
  { id: 770, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "07:55 SGT", fromPort: "HarbourFront", toPort: "Gold Coast" },
  { id: 771, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "09:35 SGT", fromPort: "HarbourFront", toPort: "Gold Coast" },
  { id: 772, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "13:00 SGT", fromPort: "HarbourFront", toPort: "Gold Coast" },
  { id: 773, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Batam", time: "18:25 SGT", fromPort: "HarbourFront", toPort: "Gold Coast" },

  { id: 774, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "10:30 WIB", fromPort: "Gold Coast", toPort: "HarbourFront" },
  { id: 775, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "13:00 WIB", fromPort: "Gold Coast", toPort: "HarbourFront" },
  { id: 776, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "15:30 WIB", fromPort: "Gold Coast", toPort: "HarbourFront" },
  { id: 777, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Batam", to: "Singapura", time: "19:00 WIB", fromPort: "Gold Coast", toPort: "HarbourFront" },

  // --- TMFT (Tanah Merah) <-> Desaru Coast (Johor) ---
  { id: 778, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Johor Bahru", time: "10:10 SGT", fromPort: "Tanah Merah", toPort: "Desaru Coast" },
  { id: 779, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Johor Bahru", to: "Singapura", time: "17:30 MYT", fromPort: "Desaru Coast", toPort: "Tanah Merah" },

  // --- TMFT (Tanah Merah) <-> Tanjung Pengelih (Johor) ---
  { id: 780, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Singapura", to: "Johor Bahru", time: "08:30 SGT", fromPort: "Tanah Merah", toPort: "Tanjung Pengelih" },
  { id: 781, ferry: "Batam Fast", logo: LOGO_BATAMFAST, prices: PRICES_BATAMFAST, note: NOTE_BATAMFAST, from: "Johor Bahru", to: "Singapura", time: "16:00 MYT", fromPort: "Tanjung Pengelih", toPort: "Tanah Merah" },


  // ============================================================
  // 3. MAJESTIC FAST FERRY (FULL)
  // ============================================================
  { id: 501, ferry: "Majestic Fast Ferry", logo: LOGO_MAJESTIC, prices: PRICES_MAJESTIC, note: NOTE_MAJESTIC, from: "Singapura", to: "Batam", time: "08:10 SGT", fromPort: "HarbourFront Centre", toPort: "Batam Centre" },
  { id: 502, ferry: "Majestic Fast Ferry", logo: LOGO_MAJESTIC, prices: PRICES_MAJESTIC, note: NOTE_MAJESTIC, from: "Singapura", to: "Batam", time: "09:50 SGT", fromPort: "HarbourFront Centre", toPort: "Batam Centre" },
  { id: 503, ferry: "Majestic Fast Ferry", logo: LOGO_MAJESTIC, prices: PRICES_MAJESTIC, note: NOTE_MAJESTIC, from: "Singapura", to: "Batam", time: "11:45 SGT", fromPort: "HarbourFront Centre", toPort: "Batam Centre" },
  { id: 504, ferry: "Majestic Fast Ferry", logo: LOGO_MAJESTIC, prices: PRICES_MAJESTIC, note: NOTE_MAJESTIC, from: "Singapura", to: "Batam", time: "13:30 SGT", fromPort: "HarbourFront Centre", toPort: "Batam Centre" },
  { id: 505, ferry: "Majestic Fast Ferry", logo: LOGO_MAJESTIC, prices: PRICES_MAJESTIC, note: NOTE_MAJESTIC, from: "Batam", to: "Singapura", time: "06:00 WIB", fromPort: "Batam Centre", toPort: "HarbourFront Centre" },
  { id: 506, ferry: "Majestic Fast Ferry", logo: LOGO_MAJESTIC, prices: PRICES_MAJESTIC, note: NOTE_MAJESTIC, from: "Batam", to: "Singapura", time: "07:20 WIB", fromPort: "Batam Centre", toPort: "HarbourFront Centre" },
  { id: 507, ferry: "Majestic Fast Ferry", logo: LOGO_MAJESTIC, prices: PRICES_MAJESTIC, note: NOTE_MAJESTIC, from: "Batam", to: "Singapura", time: "10:40 WIB", fromPort: "Batam Centre", toPort: "HarbourFront Centre" },
  { id: 508, ferry: "Majestic Fast Ferry", logo: LOGO_MAJESTIC, prices: PRICES_MAJESTIC, note: NOTE_MAJESTIC, from: "Batam", to: "Singapura", time: "13:30 WIB", fromPort: "Batam Centre", toPort: "HarbourFront Centre" },
  { id: 509, ferry: "Majestic Fast Ferry", logo: LOGO_MAJESTIC, prices: PRICES_MAJESTIC, note: NOTE_MAJESTIC, from: "Singapura", to: "Tanjung Pinang", time: "11:30 SGT", fromPort: "Tanah Merah", toPort: "Tanjung Pinang" },
  { id: 510, ferry: "Majestic Fast Ferry", logo: LOGO_MAJESTIC, prices: PRICES_MAJESTIC, note: NOTE_MAJESTIC, from: "Tanjung Pinang", to: "Singapura", time: "07:30 WIB", fromPort: "Tanjung Pinang", toPort: "Tanah Merah" },

  // ============================================================
  // 4. PINTAS & DOLPHIN (BATAM <-> JOHOR)
  // ============================================================
  { id: 601, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Batam", to: "Johor Bahru", time: "06:30 WIB", fromPort: "Batam Centre", toPort: "Stulang Laut" },
  { id: 602, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Batam", to: "Johor Bahru", time: "09:00 WIB", fromPort: "Batam Centre", toPort: "Stulang Laut" },
  { id: 603, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Batam", to: "Johor Bahru", time: "12:30 WIB", fromPort: "Batam Centre", toPort: "Stulang Laut" },
  { id: 604, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Batam", to: "Johor Bahru", time: "15:30 WIB", fromPort: "Batam Centre", toPort: "Stulang Laut" },
  { id: 605, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Batam", to: "Johor Bahru", time: "17:00 WIB", fromPort: "Batam Centre", toPort: "Stulang Laut" },
  { id: 606, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Johor Bahru", to: "Batam", time: "07:30 MYT", fromPort: "Stulang Laut", toPort: "Batam Centre" },
  { id: 607, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Johor Bahru", to: "Batam", time: "10:00 MYT", fromPort: "Stulang Laut", toPort: "Batam Centre" },
  { id: 608, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Johor Bahru", to: "Batam", time: "13:00 MYT", fromPort: "Stulang Laut", toPort: "Batam Centre" },
  { id: 609, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Johor Bahru", to: "Batam", time: "16:00 MYT", fromPort: "Stulang Laut", toPort: "Batam Centre" },
  { id: 610, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Johor Bahru", to: "Batam", time: "17:30 MYT", fromPort: "Stulang Laut", toPort: "Batam Centre" },

  // ============================================================
  // 5. DOLPHIN FAST FERRY (BATAM <-> JOHOR)
  // ============================================================
  { id: 401, ferry: "Dolphin Fast Ferry", logo: LOGO_DOLPHIN, prices: PRICES_DOLPHIN, note: NOTE_DOLPHIN, from: "Batam", to: "Johor Bahru", time: "06:45 WIB", fromPort: "Gold Coast", toPort: "Stulang Laut" },
  { id: 402, ferry: "Dolphin Fast Ferry", logo: LOGO_DOLPHIN, prices: PRICES_DOLPHIN, note: NOTE_DOLPHIN, from: "Batam", to: "Johor Bahru", time: "11:00 WIB", fromPort: "Gold Coast", toPort: "Stulang Laut" },
  { id: 403, ferry: "Dolphin Fast Ferry", logo: LOGO_DOLPHIN, prices: PRICES_DOLPHIN, note: NOTE_DOLPHIN, from: "Batam", to: "Johor Bahru", time: "16:30 WIB", fromPort: "Gold Coast", toPort: "Stulang Laut" },
  { id: 404, ferry: "Dolphin Fast Ferry", logo: LOGO_DOLPHIN, prices: PRICES_DOLPHIN, note: NOTE_DOLPHIN, from: "Johor Bahru", to: "Batam", time: "08:45 MYT", fromPort: "Stulang Laut", toPort: "Gold Coast" },
  { id: 405, ferry: "Dolphin Fast Ferry", logo: LOGO_DOLPHIN, prices: PRICES_DOLPHIN, note: NOTE_DOLPHIN, from: "Johor Bahru", to: "Batam", time: "10:30 MYT", fromPort: "Stulang Laut", toPort: "Gold Coast" },
  { id: 406, ferry: "Dolphin Fast Ferry", logo: LOGO_DOLPHIN, prices: PRICES_DOLPHIN, note: NOTE_DOLPHIN, from: "Johor Bahru", to: "Batam", time: "17:45 MYT", fromPort: "Stulang Laut", toPort: "Gold Coast" },

  // ============================================================
  // 6. MARINE HAWK (JOHOR BAHRU <-> BATAM)
  // ============================================================
  { id: 301, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "06:30 WIB", fromPort: "Harbour Bay", toPort: "Stulang Laut" },
  { id: 302, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "09:30 WIB", fromPort: "Harbour Bay", toPort: "Stulang Laut" },
  { id: 303, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "11:00 WIB", fromPort: "Harbour Bay", toPort: "Stulang Laut" },
  { id: 304, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "13:00 WIB", fromPort: "Harbour Bay", toPort: "Stulang Laut" },
  { id: 305, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "16:00 WIB", fromPort: "Harbour Bay", toPort: "Stulang Laut" },
  { id: 306, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "09:00 MYT", fromPort: "Stulang Laut", toPort: "Harbour Bay" },
  { id: 307, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "10:30 MYT", fromPort: "Stulang Laut", toPort: "Harbour Bay" },
  { id: 308, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "13:20 MYT", fromPort: "Stulang Laut", toPort: "Harbour Bay" },
  { id: 309, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "15:30 MYT", fromPort: "Stulang Laut", toPort: "Harbour Bay" },
  { id: 310, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "17:30 MYT", fromPort: "Stulang Laut", toPort: "Harbour Bay" },

  // ============================================================
  // 7. HORIZON FERRY (BATAM <-> SINGAPURA)
  // ============================================================
  { id: 201, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "06:00 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },
  { id: 202, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "07:15 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },
  { id: 203, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "08:30 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },
  { id: 204, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "09:45 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },
  { id: 205, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "10:45 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },
  { id: 206, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "11:45 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },
  { id: 207, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "12:45 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },
  { id: 208, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "14:00 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },
  { id: 209, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "15:30 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },
  { id: 210, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "16:30 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },
  { id: 211, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "17:30 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },
  { id: 212, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "19:15 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },
  { id: 213, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "20:30 WIB", fromPort: "Harbour Bay", toPort: "HarbourFront Centre" },

  // Horizon Singapura -> Batam
  { id: 214, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "08:15 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },
  { id: 215, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "09:10 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },
  { id: 216, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "10:15 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },
  { id: 217, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "11:15 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },
  { id: 218, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "12:15 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },
  { id: 219, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "13:15 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },
  { id: 220, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "14:15 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },
  { id: 221, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "15:15 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },
  { id: 222, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "16:30 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },
  { id: 223, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "17:45 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },
  { id: 224, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "19:00 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },
  { id: 225, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "20:15 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },
  { id: 226, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "21:35 SGT", fromPort: "HarbourFront Centre", toPort: "Harbour Bay" },

  // ============================================================
  // 8. PUTRI ANGGRENI (BATAM <-> JOHOR)
  // ============================================================
  { id: 101, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "07:15 WIB", fromPort: "Harbour Bay", toPort: "Puteri Harbour" },
  { id: 102, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "09:15 WIB", fromPort: "Harbour Bay", toPort: "Puteri Harbour" },
  { id: 103, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "13:45 WIB", fromPort: "Harbour Bay", toPort: "Puteri Harbour" },
  { id: 104, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "15:45 WIB", fromPort: "Harbour Bay", toPort: "Puteri Harbour" },
  { id: 105, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "17:15 WIB", fromPort: "Harbour Bay", toPort: "Puteri Harbour" },
  { id: 106, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "07:30 MYT", fromPort: "Puteri Harbour", toPort: "Harbour Bay" },
  { id: 107, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "09:00 MYT", fromPort: "Puteri Harbour", toPort: "Harbour Bay" },
  { id: 108, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "11:00 MYT", fromPort: "Puteri Harbour", toPort: "Harbour Bay" },
  { id: 109, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "13:00 MYT", fromPort: "Puteri Harbour", toPort: "Harbour Bay" },
  { id: 110, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "18:30 MYT", fromPort: "Puteri Harbour", toPort: "Harbour Bay" },

];