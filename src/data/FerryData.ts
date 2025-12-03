// src/data/ferryData.ts
import imgDolphin from "../assets/logoferry/Dolphin.png";
import imgHorizon from "../assets/logoferry/Horizon.png";
import imgPutri from "../assets/logoferry/PutriAnggreni.png";
import imgSindo from "../assets/logoferry/Sindo.png";
import imgBatamFast from "../assets/logoferry/BatamFast.png";
import imgMajestic from "../assets/logoferry/Majestic.png";
import imgMarineHawk from "../assets/logoferry/Marine.png";



// ==========================================
// 1. TIPE DATA (INTERFACES)
// ==========================================

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

// ==========================================
// 2. KONSTANTA (Mencegah Typo)
// ==========================================

const CITIES = {
  SG: "Singapura",
  BATAM: "Batam",
  JB: "Johor Bahru",
  TPI: "Tanjung Pinang",
};

const PORTS = {
  // Singapore
  HFC: "HarbourFront",
  TMFT: "Tanah Merah",
  // Batam
  BTC: "Batam Centre",
  SKP: "Sekupang",
  HBB: "Harbour Bay",
  NONGSA: "Nongsapura",
  WFT: "Waterfront",
  GC: "Gold Coast",
  // Malaysia
  STULANG: "Stulang Laut",
  P_HARBOUR: "Puteri Harbour",
  DESARU: "Desaru Coast",
  TG_PENGELIH: "Tanjung Pengelih",
  //Tanjung Pinang
  TG_PINANG: "Tanjung Pinang",
};

// ==========================================
// 3. DEFINISI HARGA & NOTE
// ==========================================

// --- SINDO ---
const PRICES_SINDO: TicketClasses = {
  adult: { oneWay: 460000, twoWay: 890000 },
  child: { oneWay: 460000, twoWay: 890000 },
  wniAdult: { oneWay: 365000, twoWay: 720000 },
  wniChild: { oneWay: 365000, twoWay: 720000 },
};
const NOTE_SINDO = "*Harga Regular: All Passport. Harga Khusus: WNI (IDN Passport).";

// --- BATAM FAST ---
const PRICES_BATAMFAST: TicketClasses = {
  adult: { oneWay: 480000, twoWay: 900000 },
  child: { oneWay: 480000, twoWay: 900000 },
  wniAdult: { oneWay: 385000, twoWay: 720000 },
  wniChild: { oneWay: 385000, twoWay: 720000 },
  groupPax: { oneWay: 0, twoWay: 690000 },
};
const NOTE_BATAMFAST = "*Harga Regular: Foreigner. WNI: IDN Passport. Group: Min 4 Pax.";

// --- MAJESTIC ---
const PRICES_MAJESTIC: TicketClasses = {
  // Foreigner (Harga Lebih Mahal)
  adult: { oneWay: 480000, twoWay: 900000 }, 
  child: { oneWay: 480000, twoWay: 900000 }, 
  // WNI / Indonesia (Harga Lebih Murah)
  wniAdult: { oneWay: 385000, twoWay: 725000 }, 
  groupPax: { oneWay: 0, twoWay: 690000 },
};
const NOTE_MAJESTIC = "*Harga Regular: Foreigner. WNI: IDN Passport. Group: Min 4 Pax.";

// --- HORIZON ---
const PRICES_HORIZON: TicketClasses = {
  adult: { oneWay: 520000, twoWay: 915000 },
  child: { oneWay: 520000, twoWay: 915000 },
  wniAdult: { oneWay: 435000, twoWay: 735000 },
};
const NOTE_HORIZON = "*Harga Regular: All Passport. Harga Khusus: WNI (IDN Passport).";

// --- PUTRI ANGGRENI ---
const PRICES_PUTRI: TicketClasses = {
  adult: { oneWay: 380000, twoWay: 580000 },
  child: { oneWay: 340000, twoWay: 540000 },
  vipAdult: { oneWay: 490000, twoWay: 730000 },
  vipChild: { oneWay: 400000, twoWay: 600000 },
};
const NOTE_PUTRI = "*Harga sudah termasuk Tax Batam, belum termasuk Tax Puteri Harbour.";

// --- MARINE HAWK ---
const PRICES_MARINE: TicketClasses = {
  adult: { oneWay: 395000, twoWay: 565000 },
  child: { oneWay: 350000, twoWay: 555000 },
};
const NOTE_MARINE = "*Harga sudah termasuk Tax Batam, belum termasuk Tax Malaysia.";

// --- DOLPHIN & PINTAS ---
const PRICES_DOLPHIN: TicketClasses = {
  // Sesuai gambar: Twoway 485k, Child 405k
  adult: { oneWay: 350000, twoWay: 485000 }, // Oneway estimasi (karena tidak ada di foto), Twoway fix 485k
  child: { oneWay: 300000, twoWay: 405000 },
};
const NOTE_DOLPHIN = "*Gold Coast (Batam) ↔ Stulang Laut (Johor). FREE Voucher transport.";

const PRICES_PINTAS: TicketClasses = {
  adult: { oneWay: 370000, twoWay: 540000 },
  child: { oneWay: 315000, twoWay: 480000 },
};
const NOTE_PINTAS = "*Harga termasuk Tax Batam. Belum termasuk Tax Malaysia.";

// ==========================================
// 4. KONFIGURASI OPERATOR (LOGOS & DATA)
// ==========================================

const OPS = {
  SINDO: {
    name: "Sindo Ferry",
    logo: imgSindo,
    prices: PRICES_SINDO,
    note: NOTE_SINDO,
  },
  BATAMFAST: {
    name: "Batam Fast",
    logo: imgBatamFast,
    prices: PRICES_BATAMFAST,
    note: NOTE_BATAMFAST,
  },
  MAJESTIC: {
    name: "Majestic Fast Ferry",
    logo: imgMajestic,
    prices: PRICES_MAJESTIC,
    note: NOTE_MAJESTIC,
  },
  HORIZON: {
    name: "Horizon Ferry",
    logo: imgHorizon,
    prices: PRICES_HORIZON,
    note: NOTE_HORIZON,
  },
  PUTRI: {
    name: "Putri Anggreni",
    logo: imgPutri,
    prices: PRICES_PUTRI,
    note: NOTE_PUTRI,
  },
  MARINE: {
    name: "Marine Hawk",
    logo: imgMarineHawk,
    prices: PRICES_MARINE,
    note: NOTE_MARINE,
  },
  DOLPHIN: {
    name: "Dolphin Fast Ferry",
    logo: imgDolphin,
    prices: PRICES_DOLPHIN,
    note: NOTE_DOLPHIN,
  },
  PINTAS: {
    name: "Pintas & Dolphin",
    logo: "https://cdn-icons-png.flaticon.com/512/2942/2942544.png",
    prices: PRICES_PINTAS,
    note: NOTE_PINTAS,
  },
};

// ==========================================
// 5. HELPER FUNCTION (GENERATOR)
// ==========================================

const createSchedule = (
  startId: number,
  operator: typeof OPS.SINDO, // Type inference generic
  route: { from: string; to: string; fromPort: string; toPort: string },
  times: string[]
): FerrySchedule[] => {
  return times.map((time, idx) => ({
    id: startId + idx,
    ferry: operator.name,
    logo: operator.logo,
    prices: operator.prices,
    note: operator.note,
    from: route.from,
    to: route.to,
    fromPort: route.fromPort,
    toPort: route.toPort,
    time: time,
  }));
};

// ==========================================
// 6. DATABASE JADWAL LENGKAP
// ==========================================

export const ferrySchedules: FerrySchedule[] = [
  // --- 1. SINDO FERRY ---
  ...createSchedule(801, OPS.SINDO, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.HFC, toPort: PORTS.BTC }, 
    ["08:00 SGT", "09:00 SGT", "10:20 SGT", "12:00 SGT", "13:20 SGT", "14:50 SGT", "16:10 SGT", "17:20 SGT", "18:30 SGT", "19:40 SGT", "20:45 SGT", "21:50 SGT"]),

  ...createSchedule(813, OPS.SINDO, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.BTC, toPort: PORTS.HFC }, 
    ["06:00 WIB", "07:20 WIB", "08:40 WIB", "10:40 WIB", "12:40 WIB", "14:00 WIB", "15:10 WIB", "16:10 WIB", "17:20 WIB", "18:20 WIB", "19:30 WIB", "20:20 WIB"]),

  ...createSchedule(825, OPS.SINDO, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.HFC, toPort: PORTS.SKP }, 
    ["08:30 SGT", "10:00 SGT", "11:10 SGT", "14:10 SGT", "16:00 SGT", "17:30 SGT", "18:10 SGT", "19:30 SGT"]),

  ...createSchedule(833, OPS.SINDO, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.SKP, toPort: PORTS.HFC }, 
    ["06:00 WIB", "07:00 WIB", "08:30 WIB", "11:20 WIB", "12:30 WIB", "13:50 WIB", "15:20 WIB", "17:40 WIB", "18:30 WIB"]),

  ...createSchedule(842, OPS.SINDO, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.HFC, toPort: PORTS.WFT }, 
    ["10:00 SGT", "14:10 SGT"]),

  ...createSchedule(844, OPS.SINDO, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.WFT, toPort: PORTS.HFC }, 
    ["13:20 WIB", "14:50 WIB"]),

  ...createSchedule(846, OPS.SINDO, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.TMFT, toPort: PORTS.BTC }, 
    ["10:20 SGT", "12:30 SGT", "14:30 SGT", "16:30 SGT", "17:40 SGT"]),

  ...createSchedule(851, OPS.SINDO, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.BTC, toPort: PORTS.TMFT }, 
    ["08:00 WIB", "09:20 WIB", "11:30 WIB", "13:20 WIB"]),

  ...createSchedule(855, OPS.SINDO, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.HFC, toPort: PORTS.GC }, 
    ["07:55 SGT", "09:35 SGT", "13:00 SGT", "18:25 SGT"]),

  ...createSchedule(859, OPS.SINDO, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.GC, toPort: PORTS.HFC }, 
    ["10:30 WIB", "13:00 WIB", "15:30 WIB", "19:00 WIB"]),

  ...createSchedule(863, OPS.SINDO, { from: CITIES.SG, to: CITIES.TPI, fromPort: PORTS.TMFT, toPort: PORTS.TG_PINANG }, 
    ["11:00 SGT", "17:10 SGT"]),

  ...createSchedule(865, OPS.SINDO, { from: CITIES.TPI, to: CITIES.SG, fromPort: PORTS.TG_PINANG, toPort: PORTS.TMFT }, 
    ["06:45 WIB", "13:30 WIB"]),


  // --- 2. BATAM FAST ---
  ...createSchedule(701, OPS.BATAMFAST, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.HFC, toPort: PORTS.BTC }, 
    ["07:40 SGT", "08:40 SGT", "09:30 SGT", "10:50 SGT", "12:30 SGT", "14:20 SGT", "15:30 SGT", "16:50 SGT", "18:00 SGT", "19:10 SGT", "20:20 SGT", "21:40 SGT"]),

  ...createSchedule(713, OPS.BATAMFAST, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.BTC, toPort: PORTS.HFC }, 
    ["06:00 WIB", "07:00 WIB", "08:20 WIB", "09:50 WIB", "11:10 WIB", "12:50 WIB", "14:10 WIB", "15:20 WIB", "16:30 WIB", "17:40 WIB", "19:00 WIB", "20:30 WIB"]),

  ...createSchedule(725, OPS.BATAMFAST, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.HFC, toPort: PORTS.SKP }, 
    ["08:20 SGT", "09:20 SGT", "10:00 SGT", "11:10 SGT", "14:10 SGT", "16:00 SGT", "17:30 SGT", "18:10 SGT", "19:30 SGT"]),

  ...createSchedule(734, OPS.BATAMFAST, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.SKP, toPort: PORTS.HFC }, 
    ["06:00 WIB", "07:00 WIB", "08:30 WIB", "11:20 WIB", "12:30 WIB", "13:50 WIB", "15:00 WIB", "15:20 WIB", "17:40 WIB", "18:30 WIB"]),

  ...createSchedule(744, OPS.BATAMFAST, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.TMFT, toPort: PORTS.BTC }, 
    ["10:20 SGT", "12:30 SGT", "14:30 SGT", "16:30 SGT", "20:10 SGT"]),

  ...createSchedule(749, OPS.BATAMFAST, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.BTC, toPort: PORTS.TMFT }, 
    ["07:45 WIB", "08:00 WIB", "09:20 WIB", "11:30 WIB", "13:20 WIB"]),

  ...createSchedule(754, OPS.BATAMFAST, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.TMFT, toPort: PORTS.NONGSA }, 
    ["08:00 SGT", "08:50 SGT", "10:50 SGT", "12:00 SGT", "14:20 SGT", "16:20 SGT", "19:00 SGT", "20:20 SGT"]),

  ...createSchedule(762, OPS.BATAMFAST, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.NONGSA, toPort: PORTS.TMFT }, 
    ["06:00 WIB", "08:00 WIB", "09:30 WIB", "12:10 WIB", "14:20 WIB", "15:40 WIB", "17:30 WIB", "20:00 WIB"]),

  ...createSchedule(770, OPS.BATAMFAST, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.HFC, toPort: PORTS.GC }, 
    ["07:55 SGT", "09:35 SGT", "13:00 SGT", "18:25 SGT"]),

  ...createSchedule(774, OPS.BATAMFAST, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.GC, toPort: PORTS.HFC }, 
    ["10:30 WIB", "13:00 WIB", "15:30 WIB", "19:00 WIB"]),

  ...createSchedule(778, OPS.BATAMFAST, { from: CITIES.SG, to: CITIES.JB, fromPort: PORTS.TMFT, toPort: PORTS.DESARU }, 
    ["10:10 SGT"]),
  ...createSchedule(779, OPS.BATAMFAST, { from: CITIES.JB, to: CITIES.SG, fromPort: PORTS.DESARU, toPort: PORTS.TMFT }, 
    ["17:30 MYT"]),

  ...createSchedule(780, OPS.BATAMFAST, { from: CITIES.SG, to: CITIES.JB, fromPort: PORTS.TMFT, toPort: PORTS.TG_PENGELIH }, 
    ["08:30 SGT"]),
  ...createSchedule(781, OPS.BATAMFAST, { from: CITIES.JB, to: CITIES.SG, fromPort: PORTS.TG_PENGELIH, toPort: PORTS.TMFT }, 
    ["16:00 MYT"]),


// --- 3. MAJESTIC FAST FERRY ---
  
  // HFC -> BTC (Singapura ke Batam Center) - SESUAI FOTO 1
  ...createSchedule(501, OPS.MAJESTIC, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.HFC, toPort: PORTS.BTC }, 
    ["08:10 SGT", "08:50 SGT", "09:50 SGT", "10:40 SGT", "11:45 SGT", "12:20 SGT", "13:50 SGT", "14:40 SGT", "15:20 SGT", "16:20 SGT", "17:10 SGT", "17:50 SGT", "18:50 SGT", "19:20 SGT", "20:10 SGT", "21:20 SGT"]),
  
  // BTC -> HFC (Batam Center ke Singapura) - SESUAI FOTO 1
  ...createSchedule(520, OPS.MAJESTIC, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.BTC, toPort: PORTS.HFC }, 
    ["06:00 WIB", "07:10 WIB", "08:20 WIB", "09:30 WIB", "10:20 WIB", "11:30 WIB", "12:20 WIB", "13:30 WIB", "14:30 WIB", "15:15 WIB", "16:00 WIB", "16:45 WIB", "17:30 WIB", "18:30 WIB", "19:25 WIB", "20:35 WIB"]),
  
// HFC -> SKP (HarbourFront ke Sekupang)
  ...createSchedule(540, OPS.MAJESTIC, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.HFC, toPort: PORTS.SKP }, 
    ["08:45 SGT", "09:45 SGT", "12:45 SGT", "17:40 SGT", "20:40 SGT"]),

  // SKP -> HFC (Sekupang ke HarbourFront)
  ...createSchedule(545, OPS.MAJESTIC, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.SKP, toPort: PORTS.HFC }, 
    ["06:00 WIB", "09:00 WIB", "13:10 WIB", "16:20 WIB", "18:00 WIB"]),

  // TMFT -> BTC (Tanah Merah ke Batam Center)
  ...createSchedule(550, OPS.MAJESTIC, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.TMFT, toPort: PORTS.BTC }, 
    ["08:15 SGT", "09:30 SGT", "10:30 SGT", "12:40 SGT", "15:15 SGT", "16:45 SGT", "18:00 SGT", "19:20 SGT", "20:45 SGT"]),

  // BTC -> TMFT (Batam Center ke Tanah Merah)
  ...createSchedule(560, OPS.MAJESTIC, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.BTC, toPort: PORTS.TMFT }, 
    ["06:15 WIB", "08:25 WIB", "09:40 WIB", "12:00 WIB", "13:00 WIB", "15:30 WIB", "17:00 WIB", "18:00 WIB", "19:50 WIB"]),

  // Update Tanjung Pinang (Majestic) - Menambahkan jam yang kurang
  ...createSchedule(509, OPS.MAJESTIC, { from: CITIES.SG, to: CITIES.TPI, fromPort: PORTS.TMFT, toPort: PORTS.TG_PINANG }, 
    ["11:30 SGT", "17:50 SGT"]),
  ...createSchedule(510, OPS.MAJESTIC, { from: CITIES.TPI, to: CITIES.SG, fromPort: PORTS.TG_PINANG, toPort: PORTS.TMFT }, 
    ["07:30 WIB", "13:00 WIB"]),


  // --- 4. PINTAS & DOLPHIN (BATAM - JB) ---
  ...createSchedule(601, OPS.PINTAS, { from: CITIES.BATAM, to: CITIES.JB, fromPort: PORTS.BTC, toPort: PORTS.STULANG }, 
    ["06:30 WIB", "09:00 WIB", "12:30 WIB", "15:30 WIB", "17:00 WIB"]),

  ...createSchedule(606, OPS.PINTAS, { from: CITIES.JB, to: CITIES.BATAM, fromPort: PORTS.STULANG, toPort: PORTS.BTC }, 
    ["07:30 MYT", "10:00 MYT", "13:00 MYT", "16:00 MYT", "17:30 MYT"]),


  // --- 5. DOLPHIN FAST FERRY ---
  ...createSchedule(401, OPS.DOLPHIN, { from: CITIES.BATAM, to: CITIES.JB, fromPort: PORTS.GC, toPort: PORTS.STULANG }, 
    ["06:45 WIB", "11:00 WIB", "16:30 WIB"]),

  ...createSchedule(404, OPS.DOLPHIN, { from: CITIES.JB, to: CITIES.BATAM, fromPort: PORTS.STULANG, toPort: PORTS.GC }, 
    ["08:45 MYT", "10:30 MYT", "17:45 MYT"]),


  // --- 6. MARINE HAWK ---
  ...createSchedule(301, OPS.MARINE, { from: CITIES.BATAM, to: CITIES.JB, fromPort: PORTS.HBB, toPort: PORTS.STULANG }, 
    ["06:30 WIB", "09:30 WIB", "11:00 WIB", "13:00 WIB", "16:00 WIB"]),

  ...createSchedule(306, OPS.MARINE, { from: CITIES.JB, to: CITIES.BATAM, fromPort: PORTS.STULANG, toPort: PORTS.HBB }, 
    ["09:00 MYT", "10:30 MYT", "13:20 MYT", "15:30 MYT", "17:30 MYT"]),


  // --- 7. HORIZON FERRY ---
  ...createSchedule(201, OPS.HORIZON, { from: CITIES.BATAM, to: CITIES.SG, fromPort: PORTS.HBB, toPort: PORTS.HFC }, 
    ["06:00 WIB", "07:15 WIB", "08:30 WIB", "09:45 WIB", "10:45 WIB", "11:45 WIB", "12:45 WIB", "14:00 WIB", "15:30 WIB", "16:30 WIB", "17:30 WIB", "19:15 WIB", "20:30 WIB"]),

  ...createSchedule(214, OPS.HORIZON, { from: CITIES.SG, to: CITIES.BATAM, fromPort: PORTS.HFC, toPort: PORTS.HBB }, 
    ["08:15 SGT", "09:10 SGT", "10:15 SGT", "11:15 SGT", "12:15 SGT", "13:15 SGT", "14:15 SGT", "15:15 SGT", "16:30 SGT", "17:45 SGT", "19:00 SGT", "20:15 SGT", "21:35 SGT"]),


  // --- 8. PUTRI ANGGRENI ---
  ...createSchedule(101, OPS.PUTRI, { from: CITIES.BATAM, to: CITIES.JB, fromPort: PORTS.HBB, toPort: PORTS.P_HARBOUR }, 
    ["07:15 WIB", "09:15 WIB", "13:45 WIB", "15:45 WIB", "17:15 WIB"]),

  ...createSchedule(106, OPS.PUTRI, { from: CITIES.JB, to: CITIES.BATAM, fromPort: PORTS.P_HARBOUR, toPort: PORTS.HBB }, 
    ["07:30 MYT", "09:00 MYT", "11:00 MYT", "13:00 MYT", "18:30 MYT"]),
];