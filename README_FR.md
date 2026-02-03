# Movies Webapp (React)
Il s’agit d’une application monopage moderne en **React 18**, construite avec Vite. Elle est conçue pour être un client léger et performant de l’API Movies, et met en valeur une intégration fluide entre une interface frontend React et une API REST .NET backend avec authentification JWT.

> **Note:** Ce dépôt public est une version finalisée du projet destinée à mon portfolio. Le développement et les pipelines CI/CD vers Azure sont gérés via un dépôt privé, ce qui explique l'historique simplifié des commits ici.


## 📌 Table des matières
- [Movies Webapp (React)](#movies-webapp-react)
  - [📌 Table des matières](#-table-des-matières)
  - [🚀 Demo Live](#-demo-live)
  - [🛠️ Stack Technique](#️-stack-technique)
  - [✨ Fonctionnalités Principales](#-fonctionnalités-principales)
  - [🏛️ Architecture \& Philosophie](#️-architecture--philosophie)
  - [⚙️ Configuration de l'environnement](#️-configuration-de-lenvironnement)
  - [🚀 Déploiement](#-déploiement)
  - [⚙️ Installation \& Configuration locale](#️-installation--configuration-locale)


## 🚀 Demo Live
**[👉 Visitez Movies Webapp (React)](https://gray-rock-05997e203.2.azurestaticapps.net)**


## 🛠️ Stack Technique
- **Frontend**: React 18 avec composants fonctionnels et hooks.
- **Outil de build**: Vite pour un développement ultra-rapide et des builds de production optimisés.
- **Routage**: React Router v6 pour la navigation côté client et le routage dynamique.
- **UI/UX**: Bootstrap 5 pour un design responsive et des interfaces cohérentes orientées données.
- **Gestion d’état**: Hooks React (useState, useEffect) pour l’état local des composants.
- **Communication**: Intégration d’une API REST via Fetch API avec gestion centralisée des tokens JWT.
- **DevOps**: GitHub Actions pour des pipelines CI/CD automatisés et le déploiement continu.


## ✨ Fonctionnalités Principales
- **Architecture basée sur les composants**: Composants React modulaires et réutilisables, suivant les bonnes pratiques.
- **Gestion de l’état**: Gestion centralisée des tokens JWT et des sessions à l’échelle de l’application.
- **Design responsive**: Approche mobile-first avec Bootstrap 5 pour un rendu cohérent sur tous les appareils.
- **Communication API asynchrone**: Implémentation claire de la Fetch API avec gestion centralisée des erreurs.
- **Routage côté client**: Navigation rapide sans rechargement de page grâce à React Router.
- **CI/CD automatisé**: Pipeline de déploiement continu garantissant des mises à jour automatiques via GitHub Actions.


## 🏛️ Architecture & Philosophie
- **Frontend**: Développé avec React 18 et Vite, mettant l’accent sur une approche moderne basée sur les hooks.
- **Structure des composants**:
  - `components/` - Composants UI réutilisables (Navbar, Footer, Formulaires, Alertes)
  - `pages/` - Composants de pages liés au routage
  - `services/` - Couche de communication avec l’API et logique Fetch centralisée
  - `utils/` - Fonctions utilitaires et gestion des tokens JWT
**Communication**: Consommation de services REST via un wrapper Fetch centralisé avec injection automatique du JWT.
**UI/UX**: Utilisation des patterns Bootstrap 5 pour une interface propre, professionnelle et accessible.


## ⚙️ Configuration de l'environnement
L’application détecte automatiquement l’environnement d’hébergement et configure les endpoints de l’API en conséquence :
- **Development (localhost)**: Pointe vers `https://localhost:XXX/api/v2`
- **Production**: Pointe vers `https://moviesapi-rd.azurewebsites.net/api/v2`
La configuration est gérée dans `src/utils/tokenManager.js` via la détection du nom d’hôte (hostname).


## 🚀 Déploiement
- **Plateforme**: Hébergée sur **Azure Static Web Apps (Windows/Linux)**.
- **CI/CD**: Déploiement entièrement automatisé via **GitHub Actions** (déclenché à chaque push) pour une intégration continue fluide.
- **Configuration CORS**: L’API backend est configurée pour autoriser les requêtes provenant du domaine frontend (movies-rd.azurewebsites.net).


## ⚙️ Installation & Configuration locale
**Prérequis**: Node.js 18+ and npm/yarn.

1. **Cloner le dépôt**
  ```bash
  git clone https://github.com/RolandDoyen/MoviesReactPublic.git
  ```

2. **Installer les dépendances**
  ```bash
   npm install
  ```
  
3. **Configurer l’endpoint de l’API**
   - L’application bascule automatiquement sur `localhost:XXX` lorsqu’un environnement local est détecté dans `tokenManager.js`.
   - Assurez-vous que l’API Movies est bien lancée à l’adresse définie dans `src/utils/tokenManager.js`.
  
4. **Lancer le serveur de développement**
  ```bash
  npm run dev
  ```
  
Le navigateur s’ouvrira à l’adresse `https://localhost:XXX`.

5. **Construire l’application pour la production**
  ```bash
  npm run build
  ```
6. **Prévisualiser le build de production**
  ```bash
  npm run preview
  ```