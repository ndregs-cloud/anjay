import { useEffect } from 'react';

export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · Warta Kita` : 'Warta Kita';
  }, [title]);
}
