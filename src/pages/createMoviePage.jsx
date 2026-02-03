import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createMovie } from '../services/movieService';
import MovieForm from '../components/movies/movieForm';
import Alert from '../components/ui/alert';

export default function CreateMoviePage() {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({ message: '', type: '' });

  async function handleSubmit(movieData) {
    try {
      await createMovie(movieData);
      
      setAlert({ message: 'Movie created successfully!', type: 'success' });
      
      setTimeout(() => {
        setAlert({ message: '', type: '' });
        navigate('/movies');
      }, 2000);
      
    } catch (err) {
      setAlert({ 
        message: err.message || 'Error creating movie', 
        type: 'error' 
      });
      
      setTimeout(() => setAlert({ message: '', type: '' }), 10000);
    }
  }

  function handleCancel() {
    navigate('/movies');
  }

  return (
    <main className="container mt-4">
      <h2>Create a Movie</h2>
      
      <MovieForm 
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        submitLabel="Create"
      />

      <Alert 
        message={alert.message}
        type={alert.type}
        onClose={() => setAlert({ message: '', type: '' })}
      />
    </main>
  );
}