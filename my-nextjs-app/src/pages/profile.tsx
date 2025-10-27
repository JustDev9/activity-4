import React, { useState } from 'react';

const Profile = () => {
    const [color, setColor] = useState('text-black');

    const handleButtonClick = () => {
        setColor(color === 'text-black' ? 'text-blue-500' : 'text-black');
        alert('Button clicked!');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className={`text-3xl font-bold ${color}`}>John Doe</h1>
            <img src="/path/to/profile-picture.jpg" alt="Profile Picture" className="rounded-full w-32 h-32 my-4" />
            <p className="text-lg text-center">
                A short bio about John Doe. Passionate about web development and design.
            </p>
            <div className="flex space-x-4 mt-4">
                <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-500">Twitter</a>
                <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-500">GitHub</a>
                <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="text-blue-500">LinkedIn</a>
            </div>
            <button 
                onClick={handleButtonClick} 
                className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Click Me
            </button>
        </div>
    );
};

export default Profile;