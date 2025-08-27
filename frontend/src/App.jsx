import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Writing from './pages/Writing';
import About from './pages/About';
import Contact from './pages/Contact';

const routes = {
  '/': Home,
  '/work': Work,
  '/resume': Resume,
  '/writing': Writing,
  '/about': About,
  '/contact': Contact
};

export default function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const navigate = (to) => {
    if (to === path) return;
    window.history.pushState({}, '', to);
    setPath(to);
  };

  const Page = routes[path] || Home;

  return (
    <div className="min-h-screen flex flex-col bg-bg text-white">
      <Header current={path} onNavigate={navigate} />
      <main id="content" className="flex-1">
        <Page onNavigate={navigate} />
      </main>
      <Footer />
    </div>
  );
}
