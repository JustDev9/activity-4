'use client';

import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-600 via-purple-300 to-white p-8">
      <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-8 hover:shadow-purple-200/50 transition-all duration-300">
        <h1 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
          About Me
        </h1>
        
        <div className="space-y-8">
          <section className="transform hover:scale-[1.01] transition-all duration-300">
            <h2 className="text-2xl font-semibold text-purple-600">Background</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              I am a passionate web developer with a strong foundation in modern web technologies.
              My journey in programming began during my college years, and I've been building
              amazing web applications ever since.
            </p>
          </section>

          <section className="transform hover:scale-[1.01] transition-all duration-300">
            <h2 className="text-2xl font-semibold text-purple-600">Skills</h2>
            <ul className="mt-3 grid grid-cols-2 gap-3 text-gray-700">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>HT</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Vue.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Tailwind CSS & UI Design</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                <span>Figma</span>
              </li>
            </ul>
          </section>

          <section className="transform hover:scale-[1.01] transition-all duration-300">
            <h2 className="text-2xl font-semibold text-purple-600">Education</h2>
            <div className="mt-3 p-4 bg-purple-50 rounded-lg">
              <p className="font-medium text-purple-900">Bachelor of Science in Information Technology(currently)</p>
              <p className="text-purple-700">Gordon College, Olongapo City</p>
              <p className="text-sm text-purple-600 mt-1">
                Olongapo City Sports Complex, Donor St., East Tapinac, Olongapo City
              </p>
            </div>
          </section>

          <div className="mt-8 flex justify-center">
            <Link 
              href="/"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-lg hover:shadow-lg hover:shadow-purple-300/50 transform hover:scale-105 transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
