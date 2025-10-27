import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
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
