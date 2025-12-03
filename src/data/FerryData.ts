// src/data/ferryData.ts
import imgPutri from "../assets/logoferry/PutriAnggreni.png"
import imgHorizon from "../assets/logoferry/Horizon.png"
import imgDolphin from "../assets/logoferry/Dolphin.png"



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
const LOGO_PUTRI = imgPutri; 
const LOGO_HORIZON = imgHorizon; 
const LOGO_MARINEHAWK = "https://cdn-icons-png.flaticon.com/512/870/870092.png"; 
const LOGO_DOLPHIN = imgDolphin; 
const LOGO_MAJESTIC = "https://cdn-icons-png.flaticon.com/512/870/870092.png"; 
const LOGO_PINTAS = "https://cdn-icons-png.flaticon.com/512/2942/2942544.png"; // Placeholder baru untuk Pintas
const LOGO_SINDO = "https://cdn-icons-png.flaticon.com/512/2942/2942544.png";

// --- HARGA & NOTES KHUSUS ---
const PRICES_PUTRI: TicketClasses = { adult: { oneWay: 380000, twoWay: 580000 }, child: { oneWay: 340000, twoWay: 540000 }, vipAdult: { oneWay: 490000, twoWay: 730000 }, vipChild: { oneWay: 400000, twoWay: 600000 } };
const NOTE_PUTRI = "*Harga sudah termasuk Tax Batam, belum termasuk Tax Puteri Harbour.";

const PRICES_HORIZON: TicketClasses = { adult: { oneWay: 520000, twoWay: 915000 }, child: { oneWay: 520000, twoWay: 915000 }, vipAdult: { oneWay: 435000, twoWay: 735000 } };
const NOTE_HORIZON = "*Harga Regular: All Passport. Harga VIP: Khusus WNI (IDN Passport).";

const PRICES_MARINE: TicketClasses = { adult: { oneWay: 395000, twoWay: 565000 }, child: { oneWay: 350000, twoWay: 555000 } };
const NOTE_MARINE = "*Harga sudah termasuk Tax Batam, belum termasuk Tax Malaysia (23 RM).";

const PRICES_DOLPHIN: TicketClasses = { adult: { oneWay: 485000, twoWay: 580000 }, child: { oneWay: 405000, twoWay: 555000 } };
const NOTE_DOLPHIN = "*Gold Coast (Batam) ↔ Stulang Laut (Johor). FREE Voucher transport ke Ksl, Mid Valley dan Larkin.";

// --- HARGA PINTAS & DOLPHIN CONSORTIUM (BARU) ---
const PRICES_PINTAS: TicketClasses = {
    adult: { oneWay: 370000, twoWay: 540000 },
    child: { oneWay: 315000, twoWay: 480000 }
};
const NOTE_PINTAS = "*Pintas & Dolphin. Harga termasuk Tax Batam. Belum termasuk Tax Malaysia (Stulang Laut).";


export const ferrySchedules: FerrySchedule[] = [
  
  // ============================================================
  // 1. PINTAS & DOLPHIN CONSORTIUM (BARU - ID 601+)
  // ============================================================
  // --- BATAM (WIB) -> JOHOR BAHRU (Stulang Laut) ---
  { id: 501, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Batam", to: "Johor Bahru", time: "06:30 WIB" },
  { id: 502, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Batam", to: "Johor Bahru", time: "09:00 WIB" },
  { id: 503, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Batam", to: "Johor Bahru", time: "12:30 WIB" },
  { id: 504, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Batam", to: "Johor Bahru", time: "15:30 WIB" },
  { id: 505, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Batam", to: "Johor Bahru", time: "17:00 WIB" },

  // --- JOHOR BAHRU (MYT) -> BATAM (Batam Center) ---
  { id: 506, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Johor Bahru", to: "Batam", time: "07:30 MYT" },
  { id: 507, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Johor Bahru", to: "Batam", time: "10:00 MYT" },
  { id: 508, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Johor Bahru", to: "Batam", time: "13:00 MYT" },
  { id: 509, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Johor Bahru", to: "Batam", time: "16:00 MYT" },
  { id: 510, ferry: "Pintas & Dolphin", logo: LOGO_PINTAS, prices: PRICES_PINTAS, note: NOTE_PINTAS, from: "Johor Bahru", to: "Batam", time: "17:30 MYT" },

  // ============================================================
  // 1. DOLPHIN FAST FERRY (GOLD COAST - BARU)
  // ============================================================
  
  // --- BATAM -> JOHOR BAHRU (WIB) ---
  { id: 401, ferry: "Dolphin Fast Ferry", logo: LOGO_DOLPHIN, prices: PRICES_DOLPHIN, note: NOTE_DOLPHIN, from: "Batam", to: "Johor Bahru", time: "06:45 WIB" },
  { id: 402, ferry: "Dolphin Fast Ferry", logo: LOGO_DOLPHIN, prices: PRICES_DOLPHIN, note: NOTE_DOLPHIN, from: "Batam", to: "Johor Bahru", time: "11:00 WIB" },
  { id: 403, ferry: "Dolphin Fast Ferry", logo: LOGO_DOLPHIN, prices: PRICES_DOLPHIN, note: NOTE_DOLPHIN, from: "Batam", to: "Johor Bahru", time: "16:30 WIB" },

  // --- JOHOR BAHRU -> BATAM (MYT) ---
  { id: 404, ferry: "Dolphin Fast Ferry", logo: LOGO_DOLPHIN, prices: PRICES_DOLPHIN, note: NOTE_DOLPHIN, from: "Johor Bahru", to: "Batam", time: "08:45 MYT" },
  { id: 405, ferry: "Dolphin Fast Ferry", logo: LOGO_DOLPHIN, prices: PRICES_DOLPHIN, note: NOTE_DOLPHIN, from: "Johor Bahru", to: "Batam", time: "10:30 MYT" },
  { id: 406, ferry: "Dolphin Fast Ferry", logo: LOGO_DOLPHIN, prices: PRICES_DOLPHIN, note: NOTE_DOLPHIN, from: "Johor Bahru", to: "Batam", time: "17:45 MYT" },


  // ============================================================
  // 2. MARINE HAWK (JOHOR BAHRU <-> BATAM)
  // ============================================================
  { id: 301, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "06:30 WIB" },
  { id: 302, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "09:30 WIB" },
  { id: 303, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "11:00 WIB" },
  { id: 304, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "13:00 WIB" },
  { id: 305, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Batam", to: "Johor Bahru", time: "16:00 WIB" },
  { id: 306, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "09:00 MYT" },
  { id: 307, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "10:30 MYT" },
  { id: 308, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "13:20 MYT" },
  { id: 309, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "15:30 MYT" },
  { id: 310, ferry: "Marine Hawk", logo: LOGO_MARINEHAWK, prices: PRICES_MARINE, note: NOTE_MARINE, from: "Johor Bahru", to: "Batam", time: "17:30 MYT" },

  // ============================================================
  // 3. HORIZON FERRY (BATAM <-> SINGAPURA)
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

  // Horizon Singapura -> Batam
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
  // 4. PUTRI ANGGRENI (BATAM <-> JOHOR)
  // ============================================================
  { id: 101, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "07:15 WIB" },
  { id: 102, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "09:15 WIB" },
  { id: 103, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "13:45 WIB" },
  { id: 104, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "15:45 WIB" },
  { id: 105, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Batam", to: "Johor Bahru", time: "17:15 WIB" },
  { id: 106, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "07:30 MYT" },
  { id: 107, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "09:00 MYT" },
  { id: 108, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "11:00 MYT" },
  { id: 109, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "13:00 MYT" },
  { id: 110, ferry: "Putri Anggreni", logo: LOGO_PUTRI, prices: PRICES_PUTRI, note: NOTE_PUTRI, from: "Johor Bahru", to: "Batam", time: "18:30 MYT" },

];