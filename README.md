# Choose Your Skip Size

> 🛠️ This project was built as part of a frontend technical assessment for a job opportunity.

A modern web application built with React, TypeScript, and Tailwind CSS that helps users select the appropriate skip size for their needs.



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

### Skip Images

Since the original site uses the same image for multiple skip sizes (e.g., 5 to 14 yards), and no separate assets were provided, I used a single image for all skips and labeled them by size (e.g., 4-yard, 6-yard, etc.). This keeps the UI consistent while clearly communicating the skip size.

If needed, I’m happy to update the design using separate images.


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


## 📄 License

This project is part of a job opportunity challenge. All rights reserved.

## 👥 Author

Tony Ayda

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
