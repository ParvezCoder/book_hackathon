# Physical AI & Humanoid Robotics Course

This repository contains the source code and content for the Physical AI & Humanoid Robotics Course, built with Docusaurus.

## About This Course

This comprehensive educational resource covers fundamental to advanced topics in Physical AI and Humanoid Robotics, designed for students and practitioners. The course is structured into three main parts:

1. **Foundations** - Introduction to Physical AI, Robotics Fundamentals, Sensors and Actuators, and Control Systems Basics
2. **Humanoid Robotics** - Bipedal Locomotion, Motion Planning, Computer Vision for Robotics, and Human-Robot Interaction
3. **Advanced Topics** - Deep Learning for Robotics, Reinforcement Learning Applications, Real-world Deployments, and Ethics and Safety

## Local Development

To run this course locally for development:

1. Navigate to the books directory:
   ```bash
   cd books
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

This will start a local development server and open the course in your browser at `http://localhost:3000`.

## Adding New Content

To add new chapters or modify existing content:

1. Create or edit markdown files in the `docs` directory
2. Update `sidebars.js` to include new pages in the navigation
3. Restart the development server to see changes

For detailed authoring instructions, see the [Content Authoring Guide](./docs/authoring-guide.md).

## Project Structure

- `docusaurus.config.js` - Main Docusaurus configuration
- `sidebars.js` - Navigation sidebar configuration
- `package.json` - Project dependencies and scripts
- `src/` - Custom React components and CSS
- `docs/` - All course content in markdown format
  - `intro.md` - Course introduction
  - `Module1/` - Foundations module (chapters 1-4)
  - `Module2/` - Humanoid Robotics module (chapters 5-8)
  - `Module3/` - Advanced Topics module (chapters 9-12)
  - `authoring-guide.md` - Guide for content authors
- `static/` - Static assets like images
- `src/components/` - Custom React components for exercises and assessments

## Features

- Interactive documentation with code examples
- Multi-chapter structure covering fundamental to advanced topics
- Hands-on tutorials and exercises with assessment components
- Video/image integration for visual learning
- Search functionality
- Mobile-responsive design
- Accessibility compliant

## Contributing

For content contributions, follow the guidelines in the [Content Authoring Guide](./docs/authoring-guide.md).

## Building for Production

To build the static site for deployment:

```bash
npm run build
```

The built site will be in the `build` directory.

## Deployment

The site can be deployed to various platforms:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

For GitHub Pages deployment, use:
```bash
npm run deploy
```
