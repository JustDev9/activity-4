'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [color, setColor] = useState('text-black');
  const [isGradient, setIsGradient] = useState(true);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-purple-600 via-purple-300 to-white p-8">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-purple-200/50 transition-all duration-300">
        <div className="relative">
          <Image 
            src="/profile-placeholder.svg" 
            alt="Profile" 
            width={200} 
            height={200} 
            className="rounded-full mx-auto bg-gradient-to-r from-purple-400 to-pink-300 p-1"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        <h1 className={`mt-6 text-4xl font-bold text-center ${isGradient ? 'bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600' : color}`}>
          Justin O. Del Rosario
        </h1>
        <p className="mt-4 text-lg text-gray-600 text-center leading-relaxed">
          An aspiring web developer with a passion for designing beautiful and functional user experiences. 
          I love turning creative ideas into reality through code.
        </p>
        
        <div className="mt-8 flex justify-center gap-6">
          <Link 
            href="https://github.com/fromZeroToCode" 
            target="_blank"
            className="transform hover:scale-105 transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg hover:shadow-purple-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </Link>
          <Link 
            href="https://www.facebook.com/justin.del.rosario.977201?mibextid=ZbWKwL" 
            target="_blank"
            className="transform hover:scale-105 transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-blue-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </Link>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:shadow-lg hover:shadow-purple-300/50 transform hover:scale-105 transition-all duration-300"
            onClick={() => {
              setIsGradient(!isGradient);
              setColor(isGradient ? 'text-purple-700' : 'from-purple-600 to-pink-600');
            }}
          >
            Change Name Color
          </button>
        </div>

        <nav className="mt-12 flex justify-center gap-6">
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
      </div>
    </main>
  );
}
