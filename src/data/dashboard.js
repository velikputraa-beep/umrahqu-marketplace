export const STATUS_SEMUA = [
  "Semua",
  "Menunggu",
  "Diproses",
  "Dikonfirmasi",
  "Selesai",
  "Menunggu Batal",
  "Refund",
  "Dibatalkan",
];

export const BOOKINGS = [
  {
    code: "MP-261112RPD301",
    package_title: "UMROH PLUS AN-NAHL",
    package_slug: "umroh-plus-an-nahl-jakarta",
    travel_name: "An-Nahl",
    status: "Dikonfirmasi",
    pax: 1,
    price: "Rp 35.000.000",
    date: "12 Nov 2026",
    month: "November 2026",
  },
  {
    code: "MP-261112U58601",
    package_title: "UMROH PLUS AN-NAHL",
    package_slug: "umroh-plus-an-nahl-jakarta",
    travel_name: "An-Nahl",
    status: "Dibatalkan",
    pax: 1,
    price: "Rp 35.000.000",
    date: "12 Nov 2026",
    month: "November 2026",
  },
  {
    code: "MP-261106V3PK01",
    package_title: "Paket Umrah VIP Bintang 5 Depan Pelataran 9 Hari",
    package_slug: "paket-umrah-vip-bintang-5-depan-pelataran-9-hari",
    travel_name: "Persada Indonesia",
    status: "Menunggu",
    pax: 1,
    price: "Rp 39.500.000",
    date: "6 Nov 2026",
    month: "November 2026",
  },
  {
    code: "MP-261104EPG901",
    package_title: "UMROH REGULER AN-NAHL",
    package_slug: "umroh-reguler-an-nahl",
    travel_name: "An-Nahl",
    status: "Dibatalkan",
    pax: 1,
    price: "Rp 25.000.000",
    date: "4 Nov 2026",
    month: "November 2026",
  },
  {
    code: "MP-261022XGJK01",
    package_title: "UMROH PLUS AN-NAHL",
    package_slug: "umroh-plus-an-nahl-surabaya",
    travel_name: "An-Nahl",
    status: "Dibatalkan",
    pax: 1,
    price: "Rp 35.000.000",
    date: "22 Okt 2026",
    month: "Oktober 2026",
  },
  {
    code: "MP-261022KPZH01",
    package_title: "UMROH PLUS AN-NAHL",
    package_slug: "umroh-plus-an-nahl-denpasar",
    travel_name: "An-Nahl",
    status: "Dikonfirmasi",
    pax: 1,
    price: "Rp 35.000.000",
    date: "22 Okt 2026",
    month: "Oktober 2026",
  },
  {
    code: "MP-261022BMG601",
    package_title: "UMROH PLUS AN-NAHL",
    package_slug: "umroh-plus-januari-an-nahl",
    travel_name: "An-Nahl",
    status: "Dikonfirmasi",
    pax: 1,
    price: "Rp 35.000.000",
    date: "22 Okt 2026",
    month: "Oktober 2026",
  },
  {
    code: "MP-261022UL7L01",
    package_title: "Paket Umrah VIP Bintang 5 Depan Pelataran 9 Hari",
    package_slug: "paket-umrah-vip-bintang-5-depan-pelataran-9-hari",
    travel_name: "Persada Indonesia",
    status: "Dikonfirmasi",
    pax: 1,
    price: "Rp 39.500.000",
    date: "22 Okt 2026",
    month: "Oktober 2026",
  },
];

export const CASHBACK_TOTAL = {
  total: "Rp 4.750.000",
  tersedia: "Rp 4.750.000",
  tertunda: "Rp 0",
};

export const CASHBACK_HISTORY = [
  {
    amount: "Rp 1.750.000",
    package_title: "UMROH PLUS AN-NAHL",
    date: "12 Nov 2026",
    status: "Tersedia",
  },
  {
    amount: "Rp 1.900.000",
    package_title: "UMROH PLUS JANUARI AN-NAHL",
    date: "22 Okt 2026",
    status: "Tersedia",
  },
  {
    amount: "Rp 1.100.000",
    package_title: "Paket Umrah VIP Bintang 5 Depan Pelataran 9 Hari",
    date: "22 Okt 2026",
    status: "Tersedia",
  },
];

export const NOTIFICATIONS = [
  {
    id: 1,
    title: "Pesanan Dikonfirmasi",
    body: "Booking MP-261112RPD301 untuk UMROH PLUS AN-NAHL telah dikonfirmasi oleh An-Nahl.",
    time: "2 jam lalu",
    unread: true,
  },
  {
    id: 2,
    title: "Menunggu Pembayaran",
    body: "Booking MP-261106V3PK01 menunggu konfirmasi pembayaran dari Anda.",
    time: "5 jam lalu",
    unread: true,
  },
  {
    id: 3,
    title: "Cashback Tersedia",
    body: "Cashback Rp 1.750.000 sudah tersedia di dompet Anda.",
    time: "12 Nov 2026",
    unread: true,
  },
  {
    id: 4,
    title: "Pengingat Manasik",
    body: "Manasik online UMROH PLUS AN-NAHL akan digelar H-7 keberangkatan.",
    time: "11 Nov 2026",
    unread: false,
  },
  {
    id: 5,
    title: "Pesanan Dibatalkan",
    body: "Booking MP-261112U58601 dibatalkan sesuai permintaan Anda.",
    time: "12 Nov 2026",
    unread: false,
  },
  {
    id: 6,
    title: "Dokumen Lengkap",
    body: "Dokumen paspor dan vaksin untuk MP-261022KPZH01 sudah terverifikasi.",
    time: "24 Okt 2026",
    unread: false,
  },
  {
    id: 7,
    title: "Perubahan Jadwal",
    body: "An-Nahl memperbarui tanggal keberangkatan UMROH PLUS JANUARI menjadi 18 Januari 2027.",
    time: "22 Okt 2026",
    unread: false,
  },
  {
    id: 8,
    title: "Selamat Datang di UmrahQu",
    body: "Akun Anda berhasil dibuat. Mulai jelajahi paket umrah dari travel terverifikasi.",
    time: "20 Okt 2026",
    unread: false,
  },
];

// Jumlah badge notifikasi — sama dengan angka yang tampil di navbar umrahqu.com.
export const UNREAD_NOTIFICATIONS = 19;

export const PROFIL_JEMAHAH = {
  nama: "user 1",
  email: "user1@gmail.com",
  telepon: "0812-3456-7890",
};
