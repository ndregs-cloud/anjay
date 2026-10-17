// Konten placeholder. Ganti dengan data asli (CMS, Markdown, atau API) nanti.
export const CATEGORIES = ['Teknologi', 'Ekonomi', 'Gaya Hidup', 'Opini'];

export const ARTICLES = [
  {
    slug: 'contoh-artikel-utama',
    title: 'Contoh judul artikel utama yang menarik perhatian pembaca',
    excerpt:
      'Ini ringkasan singkat artikel. Gunakan dua sampai tiga kalimat untuk menjelaskan isi berita agar pembaca tahu apa yang akan mereka dapatkan.',
    category: 'Teknologi',
    author: 'Nama Penulis',
    publishedAt: '2026-10-14',
    readingTime: 6,
    featured: true,
    cover: { from: '#9e2a2b', to: '#4a1212' },
    body: [
      'Paragraf pembuka artikel. Di sini penulis memperkenalkan topik dan membangun konteks bagi pembaca.',
      'Paragraf kedua melanjutkan cerita dengan data, kutipan, atau contoh nyata yang mendukung argumen utama.',
      'Bagian berikutnya membahas dampak dan sudut pandang lain, supaya pembaca mendapat gambaran yang seimbang.',
    ],
  },
  {
    slug: 'ekonomi-digital-di-kota-kecil',
    title: 'Ekonomi digital mulai merambah kota-kota kecil',
    excerpt: 'Pelaku usaha lokal memanfaatkan platform daring untuk menjangkau pembeli yang lebih luas.',
    category: 'Ekonomi',
    author: 'Nama Penulis',
    publishedAt: '2026-10-12',
    readingTime: 4,
    cover: { from: '#2f4858', to: '#11202b' },
    body: [
      'Placeholder paragraf pertama tentang ekonomi digital di kota kecil.',
      'Placeholder paragraf kedua dengan contoh usaha lokal yang berhasil.',
    ],
  },
  {
    slug: 'kebiasaan-berjalan-kaki-sore',
    title: 'Kebiasaan berjalan kaki sore hari dan manfaatnya',
    excerpt: 'Aktivitas sederhana yang dapat membantu kesehatan tubuh dan pikiran tanpa perlu peralatan khusus.',
    category: 'Gaya Hidup',
    author: 'Nama Penulis',
    publishedAt: '2026-10-10',
    readingTime: 3,
    cover: { from: '#c97e5d', to: '#6b3b28' },
    body: [
      'Placeholder paragraf pertama tentang berjalan kaki sore.',
      'Placeholder paragraf kedua tentang manfaat dan tips memulai.',
    ],
  },
  {
    slug: 'mengapa-kita-perlu-jeda-dari-layar',
    title: 'Mengapa kita perlu jeda dari layar setiap hari',
    excerpt: 'Opini tentang bagaimana kebiasaan digital memengaruhi konsentrasi dan cara kita beristirahat.',
    category: 'Opini',
    author: 'Nama Penulis',
    publishedAt: '2026-10-08',
    readingTime: 5,
    cover: { from: '#4b5d3a', to: '#1f2a17' },
    body: [
      'Placeholder paragraf pertama opini tentang jeda layar.',
      'Placeholder paragraf kedua dengan argumen dan contoh pribadi.',
    ],
  },
  {
    slug: 'transportasi-publik-yang-makin-nyaman',
    title: 'Transportasi publik yang makin nyaman untuk warga',
    excerpt: 'Perbaikan layanan bus dan kereta di sejumlah kota membuat perjalanan harian lebih mudah.',
    category: 'Ekonomi',
    author: 'Nama Penulis',
    publishedAt: '2026-10-05',
    readingTime: 4,
    cover: { from: '#3b4a6b', to: '#161d2e' },
    body: [
      'Placeholder paragraf pertama tentang transportasi publik.',
      'Placeholder paragraf kedua tentang tanggapan warga.',
    ],
  },
  {
    slug: 'merawat-tanaman-di-ruang-terbatas',
    title: 'Cara merawat tanaman di ruang yang terbatas',
    excerpt: 'Panduan praktis memilih tanaman dan mengatur cahaya untuk balkon atau sudut kecil di rumah.',
    category: 'Gaya Hidup',
    author: 'Nama Penulis',
    publishedAt: '2026-10-02',
    readingTime: 5,
    cover: { from: '#7a8f5a', to: '#34401f' },
    body: [
      'Placeholder paragraf pertama tentang merawat tanaman.',
      'Placeholder paragraf kedua tentang pemilihan tanaman dan pot.',
    ],
  },
];

export function getArticle(slug) {
  return ARTICLES.find((article) => article.slug === slug);
}

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
