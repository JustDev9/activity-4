import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white font-bold text-lg">My Profile</div>
                <div className="space-x-4">
                    <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
                    <Link href="/profile" className="text-gray-300 hover:text-white">Profile</Link>
                    <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
                    <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;