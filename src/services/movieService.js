import { apiFetch, getMovieUrl } from './api';

/** Fetches all movies from the API */
export async function getAllMovies() {
  const response = await apiFetch(getMovieUrl());
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  return response.json();
}

/** Fetches a single movie by ID */
export async function getMovieById(id) {
  const response = await apiFetch(getMovieUrl(id));
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
}

/** Creates a new movie */
export async function createMovie(movieData) {
  const response = await apiFetch(getMovieUrl(), {
    method: "POST",
    body: JSON.stringify(movieData)
  });
  
  if (!response.ok) {
    const errorData = await parseErrorResponse(response);
    throw errorData;
  }
  
  return true;
}

/** Updates an existing movie */
export async function updateMovie(id, movieData) {
  const response = await apiFetch(getMovieUrl(id), {
    method: "PUT",
    body: JSON.stringify(movieData)
  });
  
  if (!response.ok) {
    const errorData = await parseErrorResponse(response);
    throw errorData;
  }
  
  return true;
}

/** Deletes a movie by ID */
export async function deleteMovie(id) {
  const response = await apiFetch(getMovieUrl(id), {
    method: "DELETE"
  });
  
  if (!response.ok) {
    const errorData = await parseErrorResponse(response);
    throw errorData;
  }
  
  return true;
}

/** Parses error response from API to extract meaningful error messages */
async function parseErrorResponse(response) {
  let errorMessage = `Error ${response.status}: `;
  
  try {
    const errorObj = await response.json();
    
    if (errorObj.errors) {
      errorMessage += Object.values(errorObj.errors).flat().join(" | ");
    } else if (errorObj.message) {
      errorMessage += errorObj.message;
    } else {
      errorMessage += "An unexpected error occurred.";
    }
  } catch (e) {
    errorMessage += response.statusText || "Communication failed with the server.";
  }
  
  return { message: errorMessage, status: response.status };
}