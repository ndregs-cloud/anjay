export default function CategoryFilter({ categories, active, onChange }) {
  const items = ['Semua', ...categories];
  return (
    <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter kategori">
      {items.map((item) => {
        const isActive = active === item;
        return (
          <button
            key={item}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(item)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              isActive ? 'bg-ink text-white' : 'bg-stone-200/70 text-stone-700 hover:bg-stone-200'
            }`}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
}
