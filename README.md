# Movies Webapp (React)
This is a modern **React 18** single-page application built with Vite. It is designed to be a lightweight, performant consumer for the Movies API, showcasing seamless integration between a React frontend and a .NET REST API backend with JWT authentication.

> **Note:** This public repository is a polished version of the project for showcase purposes. Development and automated CI/CD pipelines to Azure are managed through a private repository, which explains the simplified commit history here.


## 📌 Table of Contents
- [Movies Webapp (React)](#movies-webapp-react)
  - [📌 Table of Contents](#-table-of-contents)
  - [🚀 Live Demo](#-live-demo)
  - [🛠️ Tech Stack](#️-tech-stack)
  - [✨ Key Features](#-key-features)
  - [🏛️ Architecture \& Philosophy](#️-architecture--philosophy)
  - [⚙️ Environment Configuration](#️-environment-configuration)
  - [🚀 Deployment](#-deployment)
  - [⚙️ Installation \& Local Setup](#️-installation--local-setup)


## 🚀 Live Demo
**[👉 Visit Movies Webapp](https://gray-rock-05997e203.2.azurestaticapps.net)**


## 🛠️ Tech Stack
- **Frontend**: React 18 with functional components and hooks.
- **Build Tool**: Vite for blazing-fast development and optimized production builds.
- **Routing**: React Router v6 for client-side navigation and dynamic routing.
- **UI/UX**: Bootstrap 5 for responsive design and consistent data-centric interfaces.
- **State Management**: React hooks (useState, useEffect) for local component state.
- **Communication**: REST API integration using Fetch API with centralized JWT token management.
- **DevOps**: GitHub Actions for automated CI/CD pipelines and continuous deployment.


## ✨ Key Features
- **Component-Based Architecture**: Modular, reusable React components following best practices.
- **State Management**: Centralized JWT token handling and session management across the application.
- **Responsive Design**: Mobile-first approach using Bootstrap 5 for consistent rendering across devices.
- **Async API Communication**: Clean implementation of the Fetch API with centralized error handling.
- **Client-Side Routing**: Fast navigation without page reloads using React Router.
- **Automated CI/CD**: Live deployment workflow ensuring the site is updated via GitHub Actions.


## 🏛️ Architecture & Philosophy
- **Frontend**: Built with React 18 and Vite, emphasizing modern hooks-based development.
- **Component Structure**:
  - `components/` - Reusable UI components (Navbar, Footer, Forms, Alerts)
  - `pages/` - Route-specific page components
  - `services/` - API communication layer with centralized fetch logic
  - `utils/` - Helper functions and JWT token management
**Communication**: Consumes REST services via a centralized Fetch API wrapper with automatic JWT injection.
**UI/UX**: Follows Bootstrap 5 design patterns for a clean, professional, and accessible interface.


## ⚙️ Environment Configuration
The app automatically detects the hosting environment and configures API endpoints accordingly:
- **Development (localhost)**: Points to `https://localhost:XXX/api/v2`
- **Production**: Points to `https://moviesapi-rd.azurewebsites.net/api/v2`
Configuration is handled in `src/utils/tokenManager.js` via hostname detection.


## 🚀 Deployment
- **Platform**: Hosted on **Azure Static Web Application (Windows/Linux)**.
- **CI/CD**: Fully automated deployment via **GitHub Actions** (triggered on push) for seamless integration.
- **CORS Configuration**: Backend API is configured to authorize requests from the frontend (movies-rd.azurewebsites.net) domain.


## ⚙️ Installation & Local Setup
**Prerequisites**: Node.js 18+ and npm/yarn.

1. **Clone the repository**
  ```bash
  git clone https://github.com/RolandDoyen/MoviesReactPublic.git
  ```

2. **Install dependencies**
  ```bash
   npm install
  ```
  
3. **Configure the API Endpoint**
   - The application automatically switches to `localhost:XXX` when detecting a local environment in `tokenManager.js`.
   - Ensure your Movies API is running at the address specified in `src/utils/tokenManager.js`.
  
4. **Run development server**
  ```bash
  npm run dev
  ```
  
The browser will open at `https://localhost:XXXX`.

5. **Build for production**
  ```bash
  npm run build
  ```
6. **Preview production build**
  ```bash
  npm run preview
  ```