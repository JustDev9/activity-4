import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Personal Profile</h1>
      <p className="text-lg mb-8">This is a simple Next.js application showcasing my profile.</p>
      <Link href="/profile">
        <a className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go to Profile
        </a>
      </Link>
    </div>
  );
};

export default Home;