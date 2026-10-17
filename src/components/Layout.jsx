import { Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { useSavedArticles } from '../hooks/useSavedArticles.jsx';

export default function Layout() {
  const { saved } = useSavedArticles();
  return (
    <div className="flex min-h-screen flex-col">
      <Header savedCount={saved.length} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
