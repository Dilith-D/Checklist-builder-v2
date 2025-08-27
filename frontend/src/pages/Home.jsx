import React from 'react';
import Hero from '../components/Hero';
import { homeSections } from '../data/site';

export default function Home({ onNavigate }) {
  return (
    <div>
      <Hero onNavigate={onNavigate} />
      <section className="max-w-5xl mx-auto px-4 py-12">
        {homeSections.map((section) => (
          <div key={section.id} className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-accent">{section.title}</h2>
            {section.bullets && (
              <ul className="list-disc list-inside text-muted">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {section.pillars && (
              <div className="grid sm:grid-cols-2 gap-6">
                {section.pillars.map((p) => (
                  <div key={p.name} className="card">
                    <h3 className="font-semibold text-accent">{p.name}</h3>
                    <p className="text-sm text-muted">{p.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
