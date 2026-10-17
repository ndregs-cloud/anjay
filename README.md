# anjay151422

Website **Warta Kita** — portal berita dan artikel, dibangun dengan React + Vite + Tailwind CSS.

## Menjalankan

```bash
npm install
npm run dev       # server pengembangan di http://localhost:5173
npm run build     # build produksi ke folder dist/
npm run preview   # pratinjau hasil build
```

## Struktur

```
src/
  App.jsx                 # definisi rute
  main.jsx                # entry point (BrowserRouter)
  index.css               # Tailwind + gaya dasar
  data/articles.js        # konten placeholder (ganti dengan sumber data asli)
  hooks/
    useSavedArticles.jsx  # state "Tersimpan" (localStorage) via context
    useDocumentTitle.js
  components/             # Header, Footer, Layout, ArticleCard, dll.
  pages/                  # Home, Article, Saved, NotFound
```

## Fitur saat ini

- Beranda dengan artikel pilihan, filter kategori, dan pencarian
- Halaman artikel dengan artikel terkait
- Simpan artikel (tersimpan di browser lewat localStorage) dan halaman "Tersimpan"
- Responsif untuk mobile dan desktop

## Catatan

- Semua konten, nama penulis, dan gambar sampul masih placeholder.
- Prototipe HTML awal (`The Harvard Gazette — ... .html`) hanya sebagai referensi desain dan tidak dipakai oleh aplikasi.
