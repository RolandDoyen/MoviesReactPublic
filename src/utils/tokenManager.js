/** Dynamic base URL detection for the API based on the hosting environment. */
const AUTO_BASE_URL = window.location.hostname.includes("localhost")
  ? "https://localhost:7242/api/v2"
  : "https://moviesapi-rd.azurewebsites.net/api/v2";

export { AUTO_BASE_URL };

/** Manages JWT authentication tokens, storage persistence, and retrieval from the API. */
export const TokenManager = {
  token: null,
  tokenKey: "movie_api_token",
  
  get tokenUrl() {
    return `${AUTO_BASE_URL}/token`;
  },

  async init() {
    this.token = localStorage.getItem(this.tokenKey);
    if (!this.token) {
      await this.refreshToken();
    }
  },

  async refreshToken() {
    try {
      const response = await fetch(this.tokenUrl);
      if (!response.ok) {
        this.token = null;
        return;
      }
      const data = await response.json();
      this.token = data.token;
      localStorage.setItem(this.tokenKey, this.token);
    } catch (error) {
      console.error("Token refresh failed:", error);
      this.token = null;
    }
  },

  getAuthHeaders() {
    return this.token ? { "Authorization": "Bearer " + this.token } : {};
  }
};