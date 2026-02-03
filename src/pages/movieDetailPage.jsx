import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getMovieById } from '../services/movieService';
import Loading from '../components/ui/loading';

export default function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMovieDetails();
  }, [id]);

  async function loadMovieDetails() {
    setLoading(true);
    setError(null);

    try {
      const data = await getMovieById(id);
      setMovie(data);
    } catch (err) {
      setError(err.message || "Error loading movie details");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <main className="container mt-4">
        <Loading />
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mt-4">
        <div className="alert alert-danger">{error}</div>
        <Link to="/movies" className="btn btn-secondary">Back to Movies</Link>
      </main>
    );
  }

  if (!movie) {
    return (
      <main className="container mt-4">
        <div className="alert alert-warning">No movie found</div>
        <Link to="/movies" className="btn btn-secondary">Back to Movies</Link>
      </main>
    );
  }

  return (
    <main className="container mt-4">
      <div className="mb-3">
        <Link to="/movies" className="btn btn-secondary">Back to Movies</Link>
      </div>

      <div className="card p-3">
        <h3>{movie.title}</h3>
        <p><strong>Year:</strong> {movie.year}</p>
        <p><strong>Rating:</strong> {movie.rating}</p>
        <p><strong>Length:</strong> {movie.length} minutes</p>
        <p>
          <strong>Trailer:</strong>{' '}
          {movie.trailerLink ? (
            <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
              Watch
            </a>
          ) : (
            'N/A'
          )}
        </p>
        <p><strong>Synopsis:</strong> {movie.sypnosis || 'N/A'}</p>
        <p>
          <strong>Styles:</strong>{' '}
          {movie.styles && movie.styles.length > 0 ? movie.styles.join(', ') : 'N/A'}
        </p>
        <p>
          <strong>Realisators:</strong>{' '}
          {movie.realisators && movie.realisators.length > 0 ? movie.realisators.join(', ') : 'N/A'}
        </p>
        <p>
          <strong>Scenarists:</strong>{' '}
          {movie.scenarists && movie.scenarists.length > 0 ? movie.scenarists.join(', ') : 'N/A'}
        </p>
        <p>
          <strong>Actors:</strong>{' '}
          {movie.actors && movie.actors.length > 0 ? movie.actors.join(', ') : 'N/A'}
        </p>
        <p>
          <strong>Producers:</strong>{' '}
          {movie.producers && movie.producers.length > 0 ? movie.producers.join(', ') : 'N/A'}
        </p>
      </div>
    </main>
  );
}