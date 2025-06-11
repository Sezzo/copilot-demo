#!/bin/bash

# Build script for GitHub Pages deployment
# This script builds the Angular app for GitHub Pages and prepares the docs folder

echo "Building Angular app for GitHub Pages..."

# Navigate to frontend directory
cd frontend

# Build with GitHub Pages configuration
npx ng build --configuration=github-pages

# Navigate back to project root
cd ..

# Copy files from browser folder to docs root for GitHub Pages
if [ -d "docs/browser" ]; then
    echo "Moving files from docs/browser to docs root..."
    cp -r docs/browser/* docs/
    rm -rf docs/browser
    rm -f docs/prerendered-routes.json docs/3rdpartylicenses.txt
fi

# Create 404.html for SPA routing
echo "Creating 404.html for SPA routing..."
cp docs/index.html docs/404.html

echo "GitHub Pages build complete! Files are ready in the docs/ folder."
echo "Enable GitHub Pages in repository settings to serve from docs/ folder."