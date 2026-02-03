
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/footer';
import HomePage from './pages/homePage';
import MoviesPage from './pages/moviesPage';
import MovieDetailPage from './pages/movieDetailPage';
import CreateMoviePage from './pages/createMoviePage';
import EditMoviePage from './pages/editMoviePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="/movies/create" element={<CreateMoviePage />} />
            <Route path="/movies/edit/:id" element={<EditMoviePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;