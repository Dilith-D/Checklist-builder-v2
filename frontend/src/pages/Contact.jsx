import React from 'react';
import { contact } from '../data/site';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h1 className="text-3xl font-bold mb-4 text-accent">Contact</h1>
      <p className="text-muted mb-6">{contact.cta}</p>
      <div className="flex flex-col items-center gap-6">
        <ContactForm />
        <div className="flex gap-4">
          {contact.links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-accent">{l.label}</a>
          ))}
          <a href={`mailto:${contact.email}`} className="hover:text-accent">Email</a>
        </div>
      </div>
    </section>
  );
}
