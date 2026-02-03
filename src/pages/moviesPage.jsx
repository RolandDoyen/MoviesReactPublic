import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllMovies } from '../services/movieService';
import Loading from '../components/ui/loading';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadMovies();
  }, []);

  async function loadMovies() {
    setLoading(true);
    setError(null);

    try {
      const data = await getAllMovies();
      setMovies(data);
    } catch (err) {
      setError(err.message || "Error loading movies");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <main className="container mt-4">
        <Loading message="Waking up API... Please be patient" />
      </main>
    );
  }

  if (error) {
    return (
      <main className="container mt-4">
        <div className="alert alert-danger">{error}</div>
      </main>
    );
  }

  return (
    <main className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>All Movies</h2>
        <Link className="btn btn-primary" to="/movies/create">
          Create
        </Link>
      </div>

      {movies.length === 0 ? (
        <div className="alert alert-info">No movies found.</div>
      ) : (
        <div className="list-group">
          {movies.map(movie => (
            <div 
              key={movie.id} 
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <Link 
                to={`/movies/${movie.id}`} 
                className="fw-bold text-decoration-none"
              >
                {movie.title}
              </Link>
              
              <div>
                <Link 
                  to={`/movies/edit/${movie.id}`} 
                  className="btn btn-sm btn-secondary ms-2"
                >
                  Edit
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}