import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "About me",
  description: "About myself Ibrohim",
};

export default function page() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Me</h1>

      <div className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Hello! I&lsquo;m Adeleye Olayinka Ibrohim </h2>
        <p className="text-gray-600 mb-6">
          I am a passionate <span className='italic font-bold'>Software Engineer</span> driven by a constant desire for growth and innovation. I thrive on building impactful solutions that solve real-world problems. With a deep love for technology, I enjoy creating software that makes a meaningful difference in people&lsquo;s lives.


          My journey in the tech industry has been filled with exciting challenges and continuous learning, and I am always eager to expand my skills, embrace new technologies, and contribute to projects that push the boundaries of what&lsquo;s possible.
        </p>

        <h3 className="text-xl font-semibold text-gray-700 mb-4">Skills & Interests</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Technical Skills</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Proficient in <strong>Next.js</strong> for building scalable and efficient web applications</li>
              <li>Experience with <strong>React.js</strong> for building interactive user interfaces</li>
              <li>Working knowledge of <strong>TypeScript</strong> for safer, scalable code</li>
              <li>Proficient with <strong>PostgreSQL</strong> for relational database management</li>
              <li>Experience using <strong>Supabase</strong> for backend as a service and real-time databases</li>
              <li>Familiar with <strong>Jest</strong> and <strong>React Testing Library</strong> for unit testing</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-800 mb-2">Interests</h4>
            <ul className="list-disc list-inside text-gray-600">
              <li>Open Source Contribution</li>
              <li>Tech Communities & Meetups</li>
              <li>Artificial Intelligence</li>
              <li>Startups & Entrepreneurship</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
