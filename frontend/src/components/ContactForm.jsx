import React, { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return <p className="text-accent">Thanks! I'll get back to you soon.</p>;
  }

  return (
    <form
      action="https://formspree.io/f/mzbnqjwk"
      method="POST"
      onSubmit={() => setSubmitted(true)}
      className="flex flex-col gap-4 max-w-md w-full"
    >
      <input required name="name" type="text" placeholder="Name" className="p-2 rounded bg-card" />
      <input required name="email" type="email" placeholder="Email" className="p-2 rounded bg-card" />
      <textarea required name="message" placeholder="Message" className="p-2 rounded bg-card" rows="4" />
      <button type="submit" className="bg-accent text-primary px-4 py-2 rounded-md self-start">Send</button>
    </form>
  );
}
