export default function SaveButton({ saved, onToggle, className = '' }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={saved}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
        saved
          ? 'border-brand bg-brand text-white hover:bg-brand/90'
          : 'border-stone-300 text-stone-700 hover:border-brand hover:text-brand'
      } ${className}`}
    >
      {saved ? 'Tersimpan ✓' : 'Simpan'}
    </button>
  );
}
