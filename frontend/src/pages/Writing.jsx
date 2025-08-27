import React from 'react';
import { posts } from '../data/site';

export default function Writing() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-accent">Writing</h1>
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <div key={post.slug} className="card">
            <h3 className="text-xl font-semibold text-accent">{post.title}</h3>
            <p className="text-sm text-muted mb-2">{post.summary}</p>
            <span className="text-xs bg-bg px-2 py-1 rounded-full">{post.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
