import Link from 'next/link';

export default function About() {
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
        <h1 className="text-4xl font-bold mb-6">About Me</h1>
        
        <div className="space-y-4">
          <section>
            <h2 className="text-2xl font-semibold text-blue-600">Background</h2>
            <p className="mt-2 text-gray-700">
              I am a passionate web developer with a strong foundation in modern web technologies.
              My journey in programming began during my college years, and I've been building
              amazing web applications ever since.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600">Skills</h2>
            <ul className="mt-2 list-disc list-inside text-gray-700">
              <li>React.js & Next.js</li>
              <li>TypeScript & JavaScript</li>
              <li>Tailwind CSS & Modern UI Design</li>
              <li>Node.js & Express</li>
              <li>Database Management (SQL & NoSQL)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-600">Education</h2>
            <p className="mt-2 text-gray-700">
              Bachelor's Degree in Computer Science<br />
              Gordon College, Olongapo City<br />
              <small className="text-gray-500">
                Olongapo City Sports Complex, Donor St., East Tapinac, Olongapo City
              </small>
            </p>
          </section>
        </div>

        <div className="mt-8">
          <Link 
            href="/"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
