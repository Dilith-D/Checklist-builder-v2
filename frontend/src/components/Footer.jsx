import React from 'react';
import { contact } from '../data/site';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-muted/20">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-muted flex flex-col items-center gap-2">
        <div className="flex gap-4">
          {contact.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent">{l.label}</a>
          ))}
          <a href={`mailto:${contact.email}`} className="hover:text-accent">Email</a>
        </div>
        <p>© Dilith Dinesh — Built with React & Tailwind</p>
      </div>
    </footer>
  );
}
