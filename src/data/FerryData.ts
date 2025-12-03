// src/data/ferryData.ts

export interface PriceDetail {
  oneWay: number;
  twoWay: number;
}

export interface TicketClasses {
  adult: PriceDetail;
  child: PriceDetail;
  vipAdult?: PriceDetail;
  vipChild?: PriceDetail;
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
}

// URL LOGO
const LOGO_PUTRI = "https://cdn-icons-png.flaticon.com/512/2942/2942544.png"; 
const LOGO_HORIZON = "https://cdn-icons-png.flaticon.com/512/56/56903.png"; 
const LOGO_MARINEHAWK = "https://cdn-icons-png.flaticon.com/512/870/870092.png"; 
const LOGO_BATAMFAST = "https://cdn-icons-png.flaticon.com/512/56/56903.png";
const LOGO_MAJESTIC = "https://cdn-icons-png.flaticon.com/512/870/870092.png";
const LOGO_SINDO = "https://cdn-icons-png.flaticon.com/512/2942/2942544.png";

// --- HARGA ---
const PRICES_PUTRI: TicketClasses = {
  adult: { oneWay: 380000, twoWay: 580000 },
  child: { oneWay: 340000, twoWay: 540000 },
  vipAdult: { oneWay: 490000, twoWay: 730000 },
  vipChild: { oneWay: 400000, twoWay: 600000 }
};
const NOTE_PUTRI = "*Harga sudah termasuk Tax Batam, belum termasuk Tax Puteri Harbour.";

const PRICES_HORIZON: TicketClasses = {
  adult: { oneWay: 520000, twoWay: 915000 }, 
  child: { oneWay: 520000, twoWay: 915000 }, 
  vipAdult: { oneWay: 435000, twoWay: 735000 } 
};
const NOTE_HORIZON = "*Harga Regular: All Passport. Harga VIP: Khusus WNI (IDN Passport).";

const PRICES_MARINE: TicketClasses = {
  adult: { oneWay: 395000, twoWay: 565000 },
  child: { oneWay: 350000, twoWay: 555000 }
};
const NOTE_MARINE = "*Harga sudah termasuk Tax Batam, belum termasuk Tax Malaysia (23 RM).";


export const ferrySchedules: FerrySchedule[] = [
  
  // ============================================================
  // A. MARINE HAWK (BATAM -> JOHOR BAHRU)
  // Zona Waktu: WIB (Indonesia)
  // ============================================================
  { id: 301, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "06:30 WIB" },
  { id: 302, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "09:30 WIB" },
  { id: 303, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "11:00 WIB" },
  { id: 304, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "13:00 WIB" },
  { id: 305, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "16:00 WIB" },

  // ============================================================
  // B. MARINE HAWK (JOHOR BAHRU -> BATAM)
  // Zona Waktu: MYT (Malaysia Time)
  // ============================================================
  { id: 306, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "09:00 MYT" },
  { id: 307, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "10:30 MYT" },
  { id: 308, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "13:20 MYT" },
  { id: 309, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "15:30 MYT" },
  { id: 310, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "17:30 MYT" },


  // ============================================================
  // C. HORIZON FERRY (BATAM -> SINGAPURA)
  // Zona Waktu: WIB (Indonesia)
  // ============================================================
  { id: 201, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "06:00 WIB" },
  { id: 202, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "07:15 WIB" },
  { id: 203, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "08:30 WIB" },
  { id: 204, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "09:45 WIB" },
  { id: 205, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "10:45 WIB" },
  { id: 206, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "11:45 WIB" },
  { id: 207, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "12:45 WIB" },
  { id: 208, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "14:00 WIB" },
  { id: 209, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "15:30 WIB" },
  { id: 210, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "16:30 WIB" },
  { id: 211, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "17:30 WIB" },
  { id: 212, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "19:15 WIB" },
  { id: 213, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Batam", to: "Singapura", time: "20:30 WIB" },

  // ============================================================
  // D. HORIZON FERRY (SINGAPURA -> BATAM)
  // Zona Waktu: SGT (Singapore Time)
  // ============================================================
  { id: 214, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "08:15 SGT" },
  { id: 215, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "09:10 SGT" },
  { id: 216, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "10:15 SGT" },
  { id: 217, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "11:15 SGT" },
  { id: 218, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "12:15 SGT" },
  { id: 219, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "13:15 SGT" },
  { id: 220, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "14:15 SGT" },
  { id: 221, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "15:15 SGT" },
  { id: 222, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "16:30 SGT" },
  { id: 223, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "17:45 SGT" },
  { id: 224, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "19:00 SGT" },
  { id: 225, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "20:15 SGT" },
  { id: 226, ferry: "Horizon Ferry", logo: LOGO_HORIZON, prices: PRICES_HORIZON, note: NOTE_HORIZON, from: "Singapura", to: "Batam", time: "21:35 SGT" },


  // ============================================================
  // E. PUTRI ANGGRENI (BATAM -> JOHOR)
  // Zona Waktu: WIB (Indonesia)
  // ============================================================
  { id: 101, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "07:15 WIB" },
  { id: 102, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "09:15 WIB" },
  { id: 103, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "13:45 WIB" },
  { id: 104, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "15:45 WIB" },
  { id: 105, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "17:15 WIB" },

  // ============================================================
  // F. PUTRI ANGGRENI (JOHOR -> BATAM)
  // Zona Waktu: MYT (Malaysia Time)
  // ============================================================
  { id: 106, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "07:30 MYT" },
  { id: 107, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "09:00 MYT" },
  { id: 108, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "11:00 MYT" },
  { id: 109, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "13:00 MYT" },
  { id: 110, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "18:30 MYT" },

];