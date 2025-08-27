import React from 'react';

export default function CaseStudyCard({ title, problem, outcomes, tags }) {
  return (
    <div className="card flex flex-col gap-2">
      <h3 className="text-xl font-semibold text-accent">{title}</h3>
      <p className="text-sm text-muted">{problem}</p>
      <ul className="text-sm list-disc list-inside text-muted">
        {outcomes.map((o) => (
          <li key={o}>{o}</li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((t) => (
          <span key={t} className="text-xs bg-bg px-2 py-1 rounded-full">{t}</span>
        ))}
      </div>
    </div>
  );
}
