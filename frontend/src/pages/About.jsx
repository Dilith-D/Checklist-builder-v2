import React from 'react';
import { about } from '../data/site';

export default function About() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-4 text-accent">About</h1>
      <p className="text-muted mb-6">{about.short}</p>
      <ul className="list-disc list-inside text-muted">
        {about.details.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </section>
  );
}
