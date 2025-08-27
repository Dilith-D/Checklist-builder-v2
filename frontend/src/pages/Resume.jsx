import React from 'react';
import { resume } from '../data/site';
import Timeline from '../components/Timeline';

export default function Resume() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <div className="flex justify-end mb-4">
        <a href={resume.file} className="bg-accent text-primary px-4 py-2 rounded-md" download>
          Download PDF
        </a>
      </div>
      <Timeline items={resume.sections} />
    </section>
  );
}
