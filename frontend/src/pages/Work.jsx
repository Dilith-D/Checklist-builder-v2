import React from 'react';
import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';

export default function Work() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-accent">Case Studies</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {caseStudies.map((cs) => (
          <CaseStudyCard key={cs.slug} {...cs} />
        ))}
      </div>
    </section>
  );
}
