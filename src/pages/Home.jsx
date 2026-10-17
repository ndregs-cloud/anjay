import { useMemo, useState } from 'react';
import ArticleCard from '../components/ArticleCard.jsx';
import CategoryFilter from '../components/CategoryFilter.jsx';
import Cover from '../components/Cover.jsx';
import { ARTICLES, CATEGORIES, formatDate } from '../data/articles.js';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { Link } from 'react-router-dom';

export default function Home() {
  useDocumentTitle('Beranda');
  const [category, setCategory] = useState('Semua');
  const [query, setQuery] = useState('');

  const featured = ARTICLES.find((a) => a.featured);
  const showHero = Boolean(featured) && category === 'Semua' && !query;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter((a) => !showHero || a.slug !== featured.slug)
      .filter((a) => category === 'Semua' || a.category === category)
      .filter((a) => !q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q));
  }, [category, query, featured, showHero]);

  return (
    <div className="space-y-12">
      {showHero && (
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <Link to={`/artikel/${featured.slug}`} className="overflow-hidden rounded-2xl">
            <Cover cover={featured.cover} className="aspect-[4/3] transition duration-300 hover:scale-[1.02]" />
          </Link>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">Pilihan Redaksi · {featured.category}</p>
            <h1 className="mt-3 font-serif text-4xl font-bold leading-tight md:text-5xl">
              <Link to={`/artikel/${featured.slug}`} className="hover:text-brand">
                {featured.title}
              </Link>
            </h1>
            <p className="mt-4 text-lg text-stone-600">{featured.excerpt}</p>
            <p className="mt-5 text-sm text-stone-500">
              {featured.author} · {formatDate(featured.publishedAt)} · {featured.readingTime} menit baca
            </p>
          </div>
        </section>
      )}

      <section className="space-y-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <CategoryFilter
            categories={CATEGORIES}
            active={category}
            onChange={setCategory}
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari artikel…"
            aria-label="Cari artikel"
            className="w-full rounded-full border border-stone-300 bg-white px-4 py-2 text-sm outline-none focus:border-brand md:w-64"
          />
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="py-16 text-center text-stone-500">Tidak ada artikel yang cocok dengan pencarianmu.</p>
        )}
      </section>
    </div>
  );
}
