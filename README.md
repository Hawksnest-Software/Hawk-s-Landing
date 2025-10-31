# Hawks Nest Software - Website

A modern cybersecurity company website built with Next.js and styled-components, designed to be exported as a static site.

## Features

- 🎨 Modern dark theme with gradient accents
- 📱 Fully responsive design
- ⚡ Static site generation (no JavaScript required to view)
- 🖼️ Optimized images and assets
- 🎯 SEO-friendly structure

## Pages

- **Home** - Hero section with services overview
- **About** - Company information and statistics  
- **Products** - Detailed cybersecurity service offerings

## Development

```bash
# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Export as static site
yarn export
```

## Static Export

The website is configured to export as static HTML/CSS/JS files:

```bash
yarn build
yarn export
```

The static files will be generated in the `out/` directory and can be hosted on any static web server.

## Technologies Used

- Next.js 14
- React 18
- Styled Components
- Static Site Generation

## Assets

Images are stored in `public/images/` and are automatically optimized by Next.js.
