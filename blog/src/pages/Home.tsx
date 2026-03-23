import React from "react";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      {/* Name / Title */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center">
        Hi, I'm Darrell
      </h1>

      {/* Short Description */}
      <p className="text-lg md:text-xl text-gray-700 mb-8 text-center max-w-xl">
        Hi! I build tools and extensions that make life simpler. Connect with me
        on LinkedIn or check out my projects on GitHub.
      </p>

      {/* Social Links */}
      <div className="flex space-x-6">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition"
        >
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/darrellcolehill"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-semibold transition"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Home;