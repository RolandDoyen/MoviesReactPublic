import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white border-bottom box-shadow mb-3">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Movies React</Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarMovies"
          aria-controls="navbarMovies" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMovies">
          <ul className="navbar-nav flex-grow-1">
            <li className="nav-item">
              <Link 
                className="nav-link text-dark"
                to="/movies"
              >
                Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}