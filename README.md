# Eigen Tri Mathema News Portal

This is a React-based news portal project built with Vite, TypeScript, Ant Design, and Zustand for state management. It fetches news from the [NewsAPI](https://newsapi.org/) and provides a simple, modern UI for browsing and searching news articles.

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/firlyafriansyah/news-portal.git
   cd news-portal
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the App
- **Development mode:**
  ```bash
  npm run dev
  ```
  This will start the Vite development server. Open [http://localhost:5173](http://localhost:5173) in your browser.

- **Production build:**
  ```bash
  npm run build
  npm run preview
  ```
  This will build the app and serve the production build locally.

### Linting
- To check code style and lint errors:
  ```bash
  npm run lint
  ```

### Running Tests
- To run all unit tests:
  ```bash
  npm test
  ```
  Tests are written using [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/).

## 📰 API Key & Configuration
- This project uses a **hardcoded API key** for [NewsAPI](https://newsapi.org/) in the source code for demonstration purposes. **No additional environment variables or configuration are required to run the app.**
- If you wish to use your own API key, update the `apiKey` parameter in these files:
  - `src/infrastructure/news/news-api-repository.ts`
  - `src/infrastructure/news/search-news-api-repository.ts`

## 🧪 About the Tests
- The project includes unit tests for components, hooks, and utility functions.
- **AI Assistance:** The unit tests and this README were generated with the help of AI (like ChatGPT/Cursor), ensuring good coverage and documentation quality.

## 📦 Main Dependencies
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Ant Design](https://ant.design/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)

## 📁 Project Structure
```
├── src/
│   ├── application/         # Application logic
│   ├── assets/              # Static assets
│   ├── domain/              # Domain models & interfaces
│   ├── infrastructure/      # API and data fetching
│   ├── shared/              # Shared utilities
│   ├── test/                # Unit tests
│   └── ui/                  # UI components, hooks, pages, stores
├── public/                  # Static public files
├── package.json             # Project metadata & scripts
├── vite.config.ts           # Vite configuration
└── README.md                # Project documentation
```

## 🙏 Credits
- News data provided by [NewsAPI.org](https://newsapi.org/)
- Created by Firly Afriansyah
- Unit tests and documentation generated with the help of AI (ChatGPT/Cursor)
