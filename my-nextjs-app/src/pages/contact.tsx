import React from 'react';

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
            <p className="mb-2">Feel free to reach out via email:</p>
            <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">
                your-email@example.com
            </a>
            <p className="mt-4">Or connect with me on social media:</p>
            <div className="flex space-x-4 mt-2">
                <a href="https://twitter.com/yourprofile" className="text-blue-500 hover:underline">Twitter</a>
                <a href="https://linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">LinkedIn</a>
            </div>
        </div>
    );
};

export default Contact;