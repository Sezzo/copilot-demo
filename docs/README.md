# GitHub Pages Deployment

This folder contains the built Angular application files for GitHub Pages hosting.

## Setup Instructions

1. **Enable GitHub Pages**: In the repository settings, go to Pages section and:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /docs

2. **Access the site**: Once enabled, the site will be available at:
   `https://sezzo.github.io/copilot-demo/`

## Build Process

To rebuild the application for GitHub Pages, run from the project root:

```bash
./build-gh-pages.sh
```

Or manually:

```bash
cd frontend
npx ng build --configuration=github-pages
cd ..
# Move files from docs/browser to docs root
cp -r docs/browser/* docs/
rm -rf docs/browser docs/prerendered-routes.json docs/3rdpartylicenses.txt
cp docs/index.html docs/404.html
```

## Files

- `index.html` - Main application entry point
- `404.html` - Fallback for SPA routing (copy of index.html)
- `main-*.js` - Application bundle
- `polyfills-*.js` - Browser polyfills
- `styles-*.css` - Application styles
- `favicon.ico` - Site icon