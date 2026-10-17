import { Link } from 'react-router-dom';
import Cover from './Cover.jsx';
import { formatDate } from '../data/articles.js';

export default function ArticleCard({ article }) {
  return (
    <article className="group flex flex-col">
      <Link to={`/artikel/${article.slug}`} className="block overflow-hidden rounded-xl">
        <Cover cover={article.cover} className="aspect-[16/10] transition duration-300 group-hover:scale-[1.02]" />
      </Link>
      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand">{article.category}</p>
      <h3 className="mt-2 font-serif text-xl font-semibold leading-snug">
        <Link to={`/artikel/${article.slug}`} className="hover:text-brand">
          {article.title}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-stone-600">{article.excerpt}</p>
      <p className="mt-3 text-xs text-stone-500">
        {article.author} · {formatDate(article.publishedAt)} · {article.readingTime} menit baca
      </p>
    </article>
  );
}
