import { Link } from 'react-router-dom';
import ArticleCard from '../components/ArticleCard.jsx';
import { ARTICLES } from '../data/articles.js';
import { useSavedArticles } from '../hooks/useSavedArticles.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function Saved() {
  useDocumentTitle('Tersimpan');
  const { saved } = useSavedArticles();
  const items = saved.map((slug) => ARTICLES.find((a) => a.slug === slug)).filter(Boolean);

  return (
    <div className="space-y-8">
      <h1 className="font-serif text-4xl font-bold">Tersimpan</h1>
      {items.length === 0 ? (
        <div className="py-16 text-center text-stone-500">
          <p>Belum ada artikel tersimpan.</p>
          <Link to="/" className="mt-4 inline-block text-brand hover:underline">
            Jelajahi artikel
          </Link>
        </div>
      ) : (
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </div>
  );
}
