# Project Overview

The project is named "sportify" and is currently in version "0.1.0." It is a private project and utilizes the Next.js framework, focusing on server-side rendering (SSR) and static site generation (SSG).

The purpose of this web is to review products and provide affiliate links. It is designed to create a modern, interactive sports-related web application.

## Tech Stack

- **Next.js**: This is the core framework used, enabling both server-side rendering and static site generation. It simplifies building React applications with optimized performance and SEO capabilities.

- **React**: The frontend is built using React, a JavaScript library for creating user interfaces, particularly single-page applications.

- **XState**: XState is a JavaScript library for managing application state and behavior. It provides a powerful and declarative way to model and visualize complex state machines, making it easier to build robust and scalable applications.

- **Vanilla Extract**: Vanilla Extract is a CSS preprocessor that leverages TypeScript instead of traditional CSS or Sass syntax. It allows you to write your styles in TypeScript, enabling you to take advantage of TypeScript's type safety, autocompletion, and modularity. This approach makes it easier to manage and scale your styles, especially in large applications. Vanilla Extract compiles your TypeScript-based styles into static CSS at build time, ensuring zero runtime overhead and maintaining a high-performance user experience.

- **Storybook**: The project includes Storybook for UI component development and testing in isolation. This helps in building and maintaining UI components without running the full application.

- **TypeScript**: TypeScript is used for static typing, which improves code quality and developer productivity by catching errors early in the development process.

- **ESLint**: ESLint is used for maintaining code quality and enforcing coding standards.

- **Supabase**: Supabase is integrated for backend functionalities, particularly for authentication and database management.

## How to Run the Project

### Development Mode:

- Run npm run dev to start the Next.js development server.
  The application will be available at http://localhost:3000.

### Production Build:

- Run npm run build to create an optimized production build.
  Run npm start to serve the production build.
  Linting:

- Run npm run lint to analyze and enforce code quality.

### Storybook:

Run npm run storybook to start the Storybook server at http://localhost:6006.
Run npm run build-storybook to build the Storybook UI for production.
