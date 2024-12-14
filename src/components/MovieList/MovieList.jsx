import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ moviesFromServer }) => {
  if (moviesFromServer.length === 0) {
    return null;
  }

  return (
    <div className="movies">
      {moviesFromServer.map(movie => (
        <MovieCard movie={movie} key={movie.imdbId} />
      ))}
    </div>
  );
};
