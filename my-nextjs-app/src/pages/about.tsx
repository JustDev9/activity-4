import React from 'react';

const About: React.FC = () => {
    return (
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="mb-2">
                I am a passionate developer with a background in software engineering. I enjoy creating web applications that provide a great user experience.
            </p>
            <h2 className="text-2xl font-semibold mt-4">Background</h2>
            <p className="mb-2">
                I have a degree in Computer Science and have worked on various projects ranging from small personal websites to large-scale applications.
            </p>
            <h2 className="text-2xl font-semibold mt-4">Education</h2>
            <p className="mb-2">
                I graduated from XYZ University, where I honed my skills in programming, web development, and project management.
            </p>
            <h2 className="text-2xl font-semibold mt-4">Interests</h2>
            <p>
                In my free time, I enjoy exploring new technologies, contributing to open-source projects, and learning about UI/UX design.
            </p>
        </div>
    );
};

export default About;