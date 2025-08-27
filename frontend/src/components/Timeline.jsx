import React from 'react';

export default function Timeline({ items }) {
  return (
    <ol className="relative border-l border-accent/20 ml-4">
      {items.map((item, idx) => (
        <li key={idx} className="mb-6 ml-4">
          <div className="absolute w-2 h-2 bg-accent rounded-full -left-1.5 mt-2" />
          <h3 className="text-lg font-semibold text-accent">{item.title}</h3>
          <ul className="list-disc list-inside text-sm text-muted">
            {item.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
