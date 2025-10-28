import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <p className="mb-2">Feel free to reach out via email:</p>
            <a href="mailto:justindelrosario89@gmail.com" className="text-blue-500 hover:underline">
                justindelrosario89@gmail.com
            </a>
            <p className="mt-4">Or connect with me on social media:</p>
        
        </div>
    );
};

export default Contact;