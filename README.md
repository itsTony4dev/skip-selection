# Choose Your Skip Size

> 🛠️ This project was built as part of a frontend technical assessment for a job opportunity.

A modern web application built with React, TypeScript, and Tailwind CSS that helps users select the appropriate skip size for their needs.

## 📖 Table of Contents

- [🚀 Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🔧 Environment Variables](#️-environment-variables)
  - [Skip Images](#skip-images)
- [📋 Prerequisites](#-prerequisites)
- [🚀 Getting Started](#-getting-started)
- [📁 Project Structure](#-project-structure)
- [🧪 Available Scripts](#-available-scripts)
- [🎨 Styling](#-styling)
- [📝 TypeScript](#-typescript)
- [🔍 Code Quality](#-code-quality)
- [✨ Development Approach & Key Enhancements](#-development-approach--key-enhancements)
  - [🧪 Testing Strategy](#-testing-strategy)
  - [📱 Responsiveness & UI Enhancements](#-responsiveness--ui-enhancements)
  - [⚙️ Build & Deployment Readiness](#️-build--deployment-readiness)
- [📄 License](#-license)
- [👥 Author](#-author)

## 🚀 Features

- Interactive skip size selection interface
- Responsive design for all devices
- Modern UI with Tailwind CSS
- Type-safe development with TypeScript
- Fast and efficient with Vite

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **Code Quality:** ESLint

## 🔧 Environment Variables

Create a `.env` file in the root directory and add the following:

```bash
API_BASE_URL=your_api_endpoint_here
```

### Skip Images

Since the original site uses the same image for multiple skip sizes (e.g., 5 to 14 yards), and no separate assets were provided, I used a single image for all skips and labeled them by size (e.g., 4-yard, 6-yard, etc.). This keeps the UI consistent while clearly communicating the skip size.

If needed, I'm happy to update the design using separate images.


## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/itsTony4dev/skip-selection
   cd skip-selection
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
src/
├── assets/        # Static assets like images
├── components/    # Reusable React components
├── hooks/         # Custom React hooks
├── pages/         # Page components
├── services/      # API and other services
├── types/         # TypeScript type definitions
├── App.tsx        # Main application component
└── main.tsx       # Application entry point
```

## 🧪 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Styling

This project uses Tailwind CSS for styling. The configuration can be found in `tailwind.config.js`.

## 📝 TypeScript

TypeScript configuration is split into three files:
- `tsconfig.json` - Base configuration
- `tsconfig.app.json` - Application-specific configuration
- `tsconfig.node.json` - Node-specific configuration

## 🔍 Code Quality

The project uses ESLint for code quality and consistency. Configuration can be found in `eslint.config.js`.

## ✨ Development Approach & Key Enhancements

This project was approached with a focus on building a robust, responsive, and maintainable frontend application. Key areas of enhancement and the methodologies applied include:

### 🧪 Testing Strategy

A comprehensive testing infrastructure was established using **Vitest** as the test runner and **React Testing Library** for component testing. This approach was chosen for Vitest's speed and compatibility with Vite, combined with React Testing Library's emphasis on testing components the way users interact with them.

*   **Unit & Integration Tests**: Implemented tests for core UI components (`SkipCard`, `SkipGrid`, `ErrorMessage`, `LoadingSpinner`, and `Header`) to ensure individual functionalities and their interactions were robust.
*   **Best Practices**: Adhered to testing best practices by:
    *   Mocking external dependencies and context providers (`useTheme`) to isolate components.
    *   Simulating realistic user interactions with `@testing-library/user-event`.
    *   Using `jest-dom` matchers for clear DOM assertions.
    *   Covering both happy paths and edge cases (e.g., different skip configurations, error states).

### 📱 Responsiveness & UI Enhancements

Significant effort was put into ensuring the application provides a seamless experience across various devices:

*   **Main Container Layout**: Adjusted top-level padding in `src/pages/SkipSelectionPage.tsx` and the `#root` styling in `src/App.css` to ensure the main content area utilizes the full width on mobile devices, removing unwanted boundary padding.
*   **SkipCard Component**: Enhanced responsiveness by converting fixed heights to `min-h` for flexible scaling. Font sizes for "Yard Skip" text and price were made responsive (`text-lg/xl` and `text-2xl/3xl`) for optimal readability on smaller screens. The skip icon's vertical position was adjusted to prevent overlap with text on mobile.
*   **Header & Theme Toggle Button**: Refined the header layout to professionally handle the dark/light mode toggle button across breakpoints:
    *   On **mobile**, the button is `absolute` positioned in the top-right corner (`right-4 top-4`), providing a clear standalone presence.
    *   On **desktop** (`md` breakpoint and up), it transitions to `static` positioning, becoming part of the header's flex row. It uses `ml-auto` to align to the far right, and explicit resets (`right-auto`, `top-auto`, `transform-none`) ensure a clean override of mobile absolute styles for perfect alignment with the navigation.

### ⚙️ Build & Deployment Readiness

Addressed critical build pipeline issues to ensure the project compiles without errors for production deployment:

*   **TypeScript Type Consistency**: Resolved type errors in test files by ensuring mock data (`mockSkip` in `SkipCard.test.tsx` and `SkipGrid.test.tsx`) fully conformed to the `Skip` interface, including newly added properties.
*   **Vite Configuration**: Corrected TypeScript errors in `vite.config.ts` related to the `test` property by adding the `/// <reference types="vitest" />` directive, enabling proper type inference and ensuring the build process recognizes Vitest configurations.
*   **Unused Imports**: Cleaned up various unused imports across components (`App.tsx`, `SkipCard.tsx`) and test files to improve code clarity and prevent build warnings.
*   **Test Environment Setup**: Ensured `src/test/setup.ts` correctly extended Jest DOM matchers and `beforeEach` was properly imported, resolving runtime errors during testing.

## 📄 License

This project is part of a job opportunity challenge. All rights reserved.

## 👥 Author

Tony Ayda

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
