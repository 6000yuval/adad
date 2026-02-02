import React, { useEffect, useState } from 'react';

export type Page =
  | { name: "home" }
  | { name: "article"; id: string }
  | { name: "category"; id: string }
  | { name: "glossary"; term?: string };

export interface RouterContextType {
  page: Page;
  navigate: (page: Page) => void;
}

export const RouterContext = React.createContext<RouterContextType | undefined>(undefined);

// Helper to parse hash
const getPageFromHash = (): Page => {
  const hash = window.location.hash.slice(1); // remove #
  if (!hash) return { name: "home" };

  const [route, id] = hash.split('/').filter(Boolean);

  if (route === 'article' && id) return { name: "article", id: decodeURIComponent(id) };
  if (route === 'category' && id) return { name: "category", id: decodeURIComponent(id) };
  if (route === 'glossary') return { name: "glossary", term: id ? decodeURIComponent(id) : undefined };
  
  return { name: "home" };
};

// Helper to set hash
const setHashFromPage = (page: Page) => {
  let hash = '';
  switch (page.name) {
    case 'home':
      hash = '/';
      break;
    case 'article':
      hash = `/article/${page.id}`;
      break;
    case 'category':
      hash = `/category/${page.id}`;
      break;
    case 'glossary':
      hash = page.term ? `/glossary/${page.term}` : '/glossary';
      break;
  }
  if (window.location.hash.slice(1) !== hash) {
    window.history.pushState(null, '', '#' + hash);
  }
};

export const useRouter = () => {
  const context = React.useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
};

export const RouterProvider: React.FC<{ children: React.ReactNode; initialPage?: Page }> = ({ children, initialPage }) => {
  const [page, setPage] = useState<Page>(initialPage || getPageFromHash());

  useEffect(() => {
    // Sync URL when page changes
    setHashFromPage(page);
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    // Handle browser back/forward buttons
    const handleHashChange = () => {
      setPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <RouterContext.Provider value={{ page, navigate: setPage }}>
      {children}
    </RouterContext.Provider>
  );
};