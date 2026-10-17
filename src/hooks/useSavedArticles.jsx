import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'warta-kita:saved-slugs';

function readSaved() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

const SavedContext = createContext(null);

// Menyimpan daftar artikel yang disimpan pembaca di localStorage,
// dibagikan ke seluruh aplikasi lewat context.
export function SavedProvider({ children }) {
  const [saved, setSaved] = useState(readSaved);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  }, [saved]);

  const toggleSaved = useCallback((slug) => {
    setSaved((current) =>
      current.includes(slug) ? current.filter((s) => s !== slug) : [...current, slug],
    );
  }, []);

  const value = useMemo(
    () => ({
      saved,
      isSaved: (slug) => saved.includes(slug),
      toggleSaved,
    }),
    [saved, toggleSaved],
  );

  return <SavedContext.Provider value={value}>{children}</SavedContext.Provider>;
}

export function useSavedArticles() {
  const ctx = useContext(SavedContext);
  if (!ctx) throw new Error('useSavedArticles harus dipakai di dalam <SavedProvider>');
  return ctx;
}
