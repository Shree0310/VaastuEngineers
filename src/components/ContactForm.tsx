"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailto = `mailto:vivekagr100@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    )}`;
    window.location.href = mailto;
  };

  return (
    <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        className="rounded border px-3 py-2"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="rounded border px-3 py-2"
        placeholder="Your email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="rounded border px-3 py-2"
        placeholder="Your Contact Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="rounded border px-3 py-2"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        className="md:col-span-2 min-h-32 rounded border px-3 py-2"
        placeholder="Your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <div className="md:col-span-2 flex justify-center">
        <button type="submit" className="rounded bg-[#d7343a] px-8 py-2 text-white hover:bg-[#b6282e] transition-colors">
          Send Message
        </button>
      </div>
    </form>
  );
}
