import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { navItems } from '../data/site';

export default function Header({ current, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handle = (path) => {
    setOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <button onClick={() => handle('/')} className="font-bold text-accent">Dilith Dinesh</button>
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handle(item.path)}
              className={`hover:text-accent ${current === item.path ? 'text-accent' : ''}`}
            >
              {item.title}
            </button>
          ))}
          <a
            href="/Dilith_Dinesh_Resume.pdf"
            className="bg-accent text-primary px-3 py-1 rounded-md"
          >
            Download Resume
          </a>
          <ThemeToggle />
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">☰</button>
      </nav>
      {open && (
        <div className="md:hidden flex flex-col px-4 pb-4 gap-3">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handle(item.path)}
              className="text-left hover:text-accent"
            >
              {item.title}
            </button>
          ))}
          <a
            href="/Dilith_Dinesh_Resume.pdf"
            className="bg-accent text-primary px-3 py-1 rounded-md text-center"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
