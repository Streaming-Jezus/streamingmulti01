import React from 'react';

const movies = [
  { id: 1, title: 'Movie 1', image: 'https://source.unsplash.com/random/300x450?movie' },
  { id: 2, title: 'Movie 2', image: 'https://source.unsplash.com/random/300x450?film' },
  { id: 3, title: 'Movie 3', image: 'https://source.unsplash.com/random/300x450?cinema' },
  { id: 4, title: 'Movie 4', image: 'https://source.unsplash.com/random/300x450?series' },
  { id: 5, title: 'Movie 5', image: 'https://source.unsplash.com/random/300x450?tv' },
  { id: 6, title: 'Movie 6', image: 'https://source.unsplash.com/random/300x450?show' },
];

const MovieGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="relative group">
          <img src={movie.image} alt={movie.title} className="w-full h-auto rounded-md transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <p className="text-white text-center">{movie.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;