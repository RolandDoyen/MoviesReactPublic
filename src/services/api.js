import { TokenManager, AUTO_BASE_URL } from '../utils/tokenManager';

/** Global API configuration object for endpoint management. */
export const API_CONFIG = {
  baseUrl: AUTO_BASE_URL,
  movieEndpoint: "/movie"
};

/** Constructs a full movie API URL using the global configuration and an optional ID. */
export function getMovieUrl(id = "") {
  return `${API_CONFIG.baseUrl}${API_CONFIG.movieEndpoint}${id ? "/" + id : ""}`;
}

/** Wrapper for fetch that injects JWT headers and handles automatic token refresh logic. */
export async function apiFetch(url, options = {}, retry = true) {
  if (!TokenManager.token) {
    await TokenManager.init();
  }

  const headers = {
    "Content-Type": "application/json",
    ...TokenManager.getAuthHeaders(),
    ...(options.headers || {})
  };

  const response = await fetch(url, { ...options, headers });

  // Retry once if 401 (unauthorized)
  if (response.status === 401 && retry) {
    await TokenManager.refreshToken();
    return apiFetch(url, options, false);
  }

  return response;
}