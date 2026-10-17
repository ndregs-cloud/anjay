import { Link, NavLink } from 'react-router-dom';

const navClass = ({ isActive }) =>
  `text-sm font-medium transition hover:text-brand ${isActive ? 'text-brand' : 'text-stone-600'}`;

export default function Header({ savedCount }) {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link to="/" className="font-serif text-2xl font-bold tracking-tight">
          Warta<span className="text-brand">Kita</span>
        </Link>
        <nav className="flex items-center gap-5">
          <NavLink to="/" end className={navClass}>
            Beranda
          </NavLink>
          <NavLink to="/tersimpan" className={navClass}>
            Tersimpan{savedCount > 0 && ` (${savedCount})`}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
