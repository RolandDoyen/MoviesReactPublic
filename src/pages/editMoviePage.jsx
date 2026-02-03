import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMovieById, updateMovie, deleteMovie } from '../services/movieService';
import MovieForm from '../components/movies/movieForm';
import Alert from '../components/ui/alert';
import Loading from '../components/ui/loading';

export default function EditMoviePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({ message: '', type: '' });

  useEffect(() => {
    loadMovie();
  }, [id]);

  async function loadMovie() {
    setLoading(true);
    try {
      const data = await getMovieById(id);
      setMovie(data);
    } catch (err) {
      setAlert({ 
        message: err.message || 'Error loading movie', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  }

  async function handleSubmit(movieData) {
    try {
      await updateMovie(id, movieData);
      
      setAlert({ message: 'Movie updated successfully!', type: 'success' });
      
      setTimeout(() => setAlert({ message: '', type: '' }), 5000);
      
    } catch (err) {
      setAlert({ 
        message: err.message || 'Error updating movie', 
        type: 'error' 
      });
      
      setTimeout(() => setAlert({ message: '', type: '' }), 10000);
    }
  }

  async function handleDelete() {
    if (!window.confirm('Are you sure you want to delete this movie?')) {
      return;
    }

    try {
      await deleteMovie(id);
            
      navigate('/movies', { 
        state: { message: 'Movie deleted successfully!' } 
      });
      
    } catch (err) {
      setAlert({ 
        message: err.message || 'Error deleting movie', 
        type: 'error' 
      });
      
      setTimeout(() => setAlert({ message: '', type: '' }), 10000);
    }
  }

  function handleCancel() {
    navigate('/movies');
  }

  if (loading) {
    return (
      <main className="container mt-4">
        <Loading />
      </main>
    );
  }

  if (!movie) {
    return (
      <main className="container mt-4">
        <div className="alert alert-danger">Movie not found</div>
        <button className="btn btn-secondary" onClick={() => navigate('/movies')}>
          Back to Movies
        </button>
      </main>
    );
  }

  return (
    <main className="container mt-4">
      <div className="card p-3">
        <h3>Edit Movie: {movie.title}</h3>
        
        <MovieForm 
          initialData={movie}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          submitLabel="Save"
        />

        <button 
          type="button" 
          className="btn btn-danger mt-3"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>

      <Alert 
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ message: '', type: '' })}
      />
    </main>
  );
}