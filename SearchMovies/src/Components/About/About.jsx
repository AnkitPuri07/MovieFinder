import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-16 px-6 text-white">
      
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-xl">
        
        <h1 className="text-4xl font-bold text-center mb-6">
          🎬 About This Website
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold">Ankit’s Movie Finder</span> —  
          a simple yet powerful web app built to help you explore movies effortlessly.
          This website pulls real-time movie data using the 
          <span className="font-semibold"> TMDB API</span>, giving you access to
          trending, popular and searched movies instantly.
        </p>

        <h2 className="text-2xl font-semibold mb-3">✨ What You Can Do</h2>
        <ul className="list-disc ml-6 space-y-2 text-lg">
          <li>Search any movie instantly with the live search feature</li>
          <li>View posters, titles, and release dates of movies</li>
          <li>Mark any movie as your favorite</li>
          <li>See all your saved favorites in one place</li>
          <li>Enjoy a clean UI designed by <span className="font-semibold">Ankit</span></li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-3">💡 Why I Built This</h2>
        <p className="text-lg leading-relaxed">
          This project was created by <span className="font-semibold">Ankit</span>  
          to practice React, APIs, routing, and context management.  
          It also showcases UI design skills, problem-solving, and code structure —  
          all of which are essential for becoming a better developer.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">🚀 Tech Used</h2>
        <ul className="list-disc ml-6 space-y-2 text-lg">
          <li>React.js</li>
          <li>React Router</li>
          <li>Context API</li>
          <li>Tailwind CSS</li>
          <li>TMDB API</li>
        </ul>

        <p className="text-center mt-10 text-xl font-semibold opacity-90">
          Made with ❤️ by Ankit
        </p>

      </div>
    </div>
  );
}

export default About;