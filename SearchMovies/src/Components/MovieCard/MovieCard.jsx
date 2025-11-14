import React from 'react';
import { useMovie } from "../../MovieContext/MovieContext";

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovie();

  const fav = isFavorite(movie.id);

  return (
    <div className="h-[600px] w-[300px] bg-gray-200 rounded-md shadow-lg mb-6 hover:shadow-xl transition duration-300">

      <div className="h-[500px] w-[300px] bg-blue-200 rounded-md shadow-md px-4 py-2 flex flex-col justify-between">
        <div className="flex-1 relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="absolute inset-0 w-full h-full object-cover rounded-md"
          />
        </div>

        <div className="flex justify-end mt-3">
          <button
            onClick={() =>
              fav ? removeFromFavorites(movie.id) : addToFavorites(movie)
            }
            className={`
              px-4 py-2 rounded-xl font-semibold flex items-center gap-2
              transition-all duration-300 shadow-lg
              ${fav
                ? "bg-green-600 text-white shadow-green-900 hover:bg-green-700"
                : "bg-violet-600 text-white shadow-violet-900 hover:bg-violet-700"
              }
            `}
          >
            {fav ? "✓ Added" : "♡ Favorite"}
          </button>
        </div>
      </div>

      <h3 className="text-center mt-3">{movie.title}</h3>
      <h3 className="text-center">{movie.release_date}</h3>
    </div>
  );
}

export default MovieCard;