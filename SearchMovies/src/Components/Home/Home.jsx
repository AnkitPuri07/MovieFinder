import React, { useEffect, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";


export default function Home() {
  const API_KEY = "80a5b1eb79437416d756cd8722d9001d";
const BASE_URL = "https://api.themoviedb.org/3";
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");  // input value for search bar
  const [searchTerm, setSearchTerm] = useState(""); // term to trigger search

  useEffect(() => {
    if (searchTerm) {
      // Fetch movies based on search term
      fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1`)
        .then(res => res.json())
        .then(data => setMovies(data.results));
    } else {
      // Fetch popular movies on mount or if search is empty
      fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => setMovies(data.results.slice(0, 16))); // limit to 16
    }
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(input.trim());
  };

 return (
  <div className="home bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-500 min-h-screen px-4 py-8">
    {/* Centered & Responsive Search Bar */}
    <div className="flex items-center justify-center mb-12">
      <div className="search-bar bg-white rounded-xl shadow-lg p-4 w-full max-w-md flex flex-col sm:flex-row items-center gap-3">
        <input
          type="text"
          placeholder="Search movies..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter") handleSearch();
          }}
          className="flex-1 w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
        />
        <button
          onClick={handleSearch}
          className="bg-pink-600 text-white px-4 py-2 text-sm rounded-md hover:bg-pink-700 transition w-full sm:w-auto font-medium shadow"
        >
          🔍 Search
        </button>
      </div>
    </div>

    {/* Movie Cards */}
    <div className="flex flex-wrap justify-evenly gap-6">
      {movies.length > 0 ? (
        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p className="text-white text-lg font-medium">No movies found</p>
      )}
    </div>
  </div>
);
}