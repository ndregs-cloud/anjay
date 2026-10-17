// Sampul sederhana berbasis gradien, sebagai pengganti gambar sampai ada aset asli.
export default function Cover({ cover, className = '' }) {
  return (
    <div
      className={`w-full bg-gradient-to-br ${className}`}
      style={{ backgroundImage: `linear-gradient(135deg, ${cover.from}, ${cover.to})` }}
      aria-hidden="true"
    />
  );
}
