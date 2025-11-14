import React from "react";
import { useMovie } from "../../MovieContext/MovieContext";
import MovieCard from "../MovieCard/MovieCard";

function Favorites() {
  const { favorites } = useMovie();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 p-6">
      <h1 className="text-center text-white text-3xl font-bold mb-8">
        Your Favorite Movies
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {favorites.length > 0 ? (
          favorites.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-white text-lg">No favorite movies yet ❤️</p>
        )}
      </div>
    </div>
  );
}

export default Favorites;