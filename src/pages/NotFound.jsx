import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function NotFound() {
  useDocumentTitle('Halaman tidak ditemukan');
  return (
    <div className="py-24 text-center">
      <h1 className="font-serif text-4xl font-bold">Halaman tidak ditemukan</h1>
      <p className="mt-4 text-stone-600">Artikel atau halaman yang kamu cari tidak tersedia.</p>
      <Link to="/" className="mt-6 inline-block text-brand hover:underline">
        Kembali ke beranda
      </Link>
    </div>
  );
}
