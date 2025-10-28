'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { FormEvent } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('Message sent! (Demo only)');
    setMessage('');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-600 via-purple-300 to-white p-8">
      <nav className="fixed top-0 left-0 right-0 p-4 flex justify-center items-center gap-6 bg-white/10 backdrop-blur-md z-50">
        <Link 
          href="/"
          className="px-6 py-3 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300 text-purple-700 font-medium shadow-lg hover:shadow-purple-200/50 transform hover:scale-105"
        >
          Home
        </Link>
        <Link 
          href="/about"
          className="px-6 py-3 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300 text-purple-700 font-medium shadow-lg hover:shadow-purple-200/50 transform hover:scale-105"
        >
          About Me
        </Link>
        <Link 
          href="/contact"
          className="px-6 py-3 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300 text-purple-700 font-medium shadow-lg hover:shadow-purple-200/50 transform hover:scale-105"
        >
          Contact
        </Link>
      </nav>
            <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mt-20">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Contact Me
        </h1>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-purple-600">Get in Touch</h2>
            <p className="mt-2 text-gray-700">
              Feel free to reach out for collaborations or just to say hello!
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-600">Contact Information</h2>
            <div className="mt-4 space-y-3 text-gray-700">
              <p className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                <span className="text-2xl">📍</span> Olongapo City, Philippines
              </p>
              <p className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                <span className="text-2xl">📧</span> justin.delrosario@example.com
              </p>
              <p className="flex items-center gap-2 hover:text-purple-600 transition-colors">
                <span className="text-2xl">📱</span> 0912-345-6789
              </p>
            </div>
          </section>

          <section className="mt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-purple-600">
                  Leave a Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-2 block w-full rounded-lg border border-purple-200 shadow-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 bg-white/50 backdrop-blur-sm transition-all duration-300 resize-none"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:shadow-lg hover:shadow-purple-300/50 transform hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>

              {status && (
                <p className="text-purple-600 text-center font-medium animate-fade-in">
                  {status}
                </p>
              )}
            </form>
          </section>
        </div>

        <div className="mt-12 flex justify-center">
          <Link 
            href="/"
            className="px-6 py-3 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/80 transition-all duration-300 text-purple-700 font-medium shadow-lg hover:shadow-purple-200/50 transform hover:scale-105"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
