# Quick Start Guide: Physical AI & Humanoid Robotics Course

This guide will help you get started with the Physical AI & Humanoid Robotics Course website.

## Prerequisites

- Node.js (version 18 or higher)
- npm (version 8 or higher)

## Installation

1. Navigate to the books directory:
   ```bash
   cd books
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Local Development

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser to http://localhost:3000 to view the course content.

## Building for Production

To build the static site for deployment:

```bash
npm run build
```

The built site will be in the `build` directory.

## Adding New Content

To add new chapters or modify existing content:

1. Create or edit markdown files in the `docs` directory
2. Update `sidebars.js` to include new pages in the navigation
3. Restart the development server to see changes

## Project Structure

- `docusaurus.config.js` - Main configuration file
- `sidebars.js` - Navigation sidebar configuration
- `docs/` - All course content in markdown format
- `src/` - Custom React components and CSS
- `static/` - Static assets like images

## Module 1: Foundations

Currently, the course includes Module 1 with three chapters:
- Chapter 1: Introduction to Physical AI
- Chapter 2: Robotics Fundamentals
- Chapter 3: Sensors and Actuators

Each chapter can be found in the `docs/Module1/` directory.