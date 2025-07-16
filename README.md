# Spidr Air Fryer Interest Form

A modern, production-ready React app for collecting interest in the Spidr Air Fryer. Features a sharp, web-inspired UI, animated background, and a clean, modular codebase.

## Features

- Sharp, professional UI inspired by Spidr Design
- Animated web-like background using Vanta.js
- Responsive and accessible form
- PIN masking and formatting
- Clean, modular React structure (components, pages, utils)

## Folder Structure

```
spidr-form/
  src/
    assets/         # Images and static assets
    components/     # Reusable React components
    pages/          # Page-level components
    utils/          # Utility functions
    App.css         # Main styles
    App.tsx         # App entry
    main.tsx        # Vite entry
    index.css       # Base styles
  public/
  index.html        # Main HTML file
  package.json      # Project metadata
  tsconfig*.json    # TypeScript config
  vite.config.ts    # Vite config
  README.md         # This file
```

## Setup & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the dev server:**
   ```bash
   npm run dev
   ```
3. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) (or as shown in your terminal)

## Build for Production

```bash
npm run build
```

## Notes

- The animated background uses Vanta.js (via CDN) and Three.js.
- All form data is logged to the console in JSON format on submit.
- To deploy, just build and serve the `dist/` folder.

## Usage

This interest form is intended for use by Spidr Design as part of their product launch initiatives. It is designed to be embedded at the bottom of the Spidr Design landing page to collect potential customer interest for new products. The form provides a seamless, branded experience and captures essential lead information for follow-up and marketing purposes.
