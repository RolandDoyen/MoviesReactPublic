import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 text-center">
          <div className="p-5 mb-4 bg-light rounded-3 shadow-sm border">
            <h1 className="display-5 fw-bold">Welcome to Movies React</h1>
            <p className="fs-5 text-secondary">
              A full CRUD interface designed to demonstrate modern API integration.<br />
              View, create, edit, and delete records seamlessly.
            </p>
            <Link to="/movies" className="btn btn-primary btn-lg px-4 mt-3">
              View Movies
            </Link>
          </div>

          <div className="p-4 mb-4 bg-white rounded-3 shadow-sm border">
            <h2 className="h4 fw-bold mb-3">Backend Specifications</h2>
            <p className="text-muted">
              Powered by a <strong>.NET 8 REST API</strong> with <strong>JWT Authentication</strong>.<br />
              Explore the endpoints and schema via the Swagger documentation.
            </p>
            <a 
              href="https://moviesapi-rd.azurewebsites.net/swagger/index.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-dark"
            >
              <i className="bi bi-code-slash"></i> Open Swagger Interface
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}