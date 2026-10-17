import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Article from './pages/Article.jsx';
import Saved from './pages/Saved.jsx';
import NotFound from './pages/NotFound.jsx';
import { SavedProvider } from './hooks/useSavedArticles.jsx';

export default function App() {
  return (
    <SavedProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="artikel/:slug" element={<Article />} />
          <Route path="tersimpan" element={<Saved />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </SavedProvider>
  );
}
