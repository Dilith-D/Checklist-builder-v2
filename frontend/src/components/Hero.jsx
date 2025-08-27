import React from 'react';
import { hero } from '../data/site';
import MetricChip from './MetricChip';
import { copy } from '../data/site';

export default function Hero({ onNavigate }) {
  return (
    <section className="text-center py-20 animation-fade-in">
      <h1 className="text-4xl font-bold text-accent mb-4">{hero.headline}</h1>
      <p className="max-w-2xl mx-auto mb-6 text-muted">{hero.subhead}</p>
      <div className="flex justify-center gap-4 mb-8">
        <button onClick={() => onNavigate(hero.primaryCta.href)} className="bg-accent text-primary px-4 py-2 rounded-md">
          {hero.primaryCta.label}
        </button>
        <a href={hero.secondaryCta.href} className="border border-accent px-4 py-2 rounded-md">
          {hero.secondaryCta.label}
        </a>
      </div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {hero.badges.map((b) => (
          <span key={b} className="bg-card px-3 py-1 rounded-full text-sm text-muted">{b}</span>
        ))}
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {copy.metricsBanner.map((m) => (
          <MetricChip key={m} value={m} />
        ))}
      </div>
    </section>
  );
}
