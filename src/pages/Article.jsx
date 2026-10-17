import { Link, useParams } from 'react-router-dom';
import Cover from '../components/Cover.jsx';
import SaveButton from '../components/SaveButton.jsx';
import ArticleCard from '../components/ArticleCard.jsx';
import NotFound from './NotFound.jsx';
import { ARTICLES, formatDate, getArticle } from '../data/articles.js';
import { useSavedArticles } from '../hooks/useSavedArticles.jsx';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';

export default function Article() {
  const { slug } = useParams();
  const article = getArticle(slug);
  const { isSaved, toggleSaved } = useSavedArticles();
  useDocumentTitle(article?.title);

  if (!article) return <NotFound />;

  const related = ARTICLES.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-2xl">
      <Link to="/" className="text-sm text-stone-500 hover:text-brand">
        ← Kembali ke beranda
      </Link>

      <p className="mt-8 text-xs font-semibold uppercase tracking-wider text-brand">{article.category}</p>
      <h1 className="mt-3 font-serif text-4xl font-bold leading-tight md:text-5xl">{article.title}</h1>
      <p className="mt-5 text-lg text-stone-600">{article.excerpt}</p>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-y border-stone-200 py-4">
        <p className="text-sm text-stone-500">
          {article.author} · {formatDate(article.publishedAt)} · {article.readingTime} menit baca
        </p>
        <SaveButton saved={isSaved(article.slug)} onToggle={() => toggleSaved(article.slug)} />
      </div>

      <Cover cover={article.cover} className="mt-8 aspect-[16/9] rounded-2xl" />

      <div className="prose-article mt-10">
        {article.body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-stone-200 pt-10">
          <h2 className="mb-8 font-serif text-2xl font-semibold">Artikel terkait</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
