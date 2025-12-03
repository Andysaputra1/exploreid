export interface PriceDetail {
  oneWay: number;
  twoWay: number;
}

export interface TicketClasses {
  adult: PriceDetail;
  child: PriceDetail;
  vipAdult?: PriceDetail; // Opsional (tanda ?) karena mungkin kapal lain ga punya VIP
  vipChild?: PriceDetail; // Opsional
}

export interface FerrySchedule {
  id: number;
  ferry: string;
  from: string;
  to: string;
  time: string;
  // Hapus 'price: number', ganti jadi object ini:
  prices: TicketClasses; 
  logo: string;
}

// URL Logo (Sama seperti sebelumnya)
const LOGO_PUTRI = "https://cdn-icons-png.flaticon.com/512/870/870092.png"; 

export const ferrySchedules: FerrySchedule[] = [
  // CONTOH DATA PUTRI ANGGRENI (Sesuai Brosur)
  { 
    id: 21, 
    ferry: "Putri Anggreni", 
    from: "Batam", 
    to: "Johor Bahru", 
    time: "07:15", 
    logo: LOGO_PUTRI,
    prices: {
      adult: { oneWay: 380000, twoWay: 580000 },
      child: { oneWay: 340000, twoWay: 540000 },
      vipAdult: { oneWay: 490000, twoWay: 730000 }, // VIP sesuai brosur
      vipChild: { oneWay: 400000, twoWay: 600000 }  // VIP Child (Estimasi/Dummy)
    }
  },
  // ... Tambahkan data lainnya dengan struktur prices yang sama ...
  // Untuk data lama yang cuma punya 1 harga, isi saja adult oneWay, sisanya samakan/kosongkan.
];