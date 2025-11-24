# KASIL — Bespoke Automotive Engineering Website

A modern React website for Kasil, showcasing bespoke automotive engineering services including custom carbon fiber body kits, forged monoblock wheels, titanium exhaust systems, and performance tuning.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd kasil-web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploying to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your repository
5. Vercel will automatically detect the Vite configuration
6. Click "Deploy"

## Project Structure

```
kasil-web/
├── public/           # Static assets
├── src/
│   ├── components/   # React components
│   │   ├── Hero.jsx
│   │   ├── Expertise.jsx
│   │   ├── CurrentProject.jsx
│   │   ├── UpcomingProjects.jsx
│   │   └── Footer.jsx
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Features

- Fully responsive design
- Modern, luxury aesthetic
- Smooth animations and transitions
- Optimized for performance
- SEO-friendly
- Ready for Vercel deployment

## Technologies Used

- React 18
- Vite
- CSS3 with CSS Variables
- Modern ES6+ JavaScript

## License

Copyright © 2025 Kasil. All rights reserved.
