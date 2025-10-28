import React, { useState } from 'react';

const Profile = () => {
    const [color, setColor] = useState('text-black');

    const handleButtonClick = () => {
        setColor(color === 'text-black' ? 'text-blue-500' : 'text-black');
        alert('Button clicked!');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className={`text-3xl font-bold ${color}`}>Justin</h1>
            <img src="/path/to/profile-picture.jpg" alt="Profile Picture" className="rounded-full w-32 h-32 my-4" />
    
            
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