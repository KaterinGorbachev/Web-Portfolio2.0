# Marina Borisova - Portfolio Website

A modern, responsive portfolio website showcasing creative work, projects, and professional information for Marina Borisova, a creative artist, illustrator, motion designer, and animator.

## What It Does

This is a full-featured portfolio website built with Vue 3 that displays:

- **Presentation & About Section**: Hero section with video background and biographical information
- **Projects Showcase**: Interactive portfolio of creative projects with descriptions, images, and videos
- **Studies & Learning**: Educational background and skill development documentation
- **Admin Dashboard**: Secure content management area for updating portfolio information (requires authentication)
- **Responsive Design**: Mobile-first approach using Tailwind CSS for optimal viewing across all devices

## Features

- **Modern Tech Stack**: Vue 3 with Vite, providing fast development and optimized production builds
- **Real-time Database**: Firebase integration for dynamic content management
- **Admin Authentication**: Role-based access control with secure admin area
- **Video Integration**: Embedded video showcases and YouTube integration
- **Performance Optimized**: Lazy loading, code splitting, and production build optimization
- **Testing Coverage**: Unit tests with Vitest and end-to-end tests with Playwright
- **Code Quality**: Automated linting with ESLint and code formatting with Prettier
- **Deployment Ready**: Pre-configured for Vercel deployment

## Quick Start

### Prerequisites

- Node.js 20.19.0 or higher (22.12.0+ recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd marina-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your Firebase credentials:
     ```
     VITE_APP_FIREBASE_API_KEY=your_api_key
     VITE_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_APP_FIREBASE_PROJECT_ID=your_project_id
     VITE_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_APP_FIREBASE_MESSAGER_SENDER_ID=your_sender_id
     VITE_APP_FIREBASE_APP_ID=your_app_id
     ```

### Development

Start the development server with hot reload:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Testing

### Unit Tests
```bash
npm run test:unit
```

### End-to-End Tests
```bash
# Install browsers (required for first run)
npx playwright install

# Run tests
npm run test:e2e
```

## Code Quality

### Linting
```bash
npm run lint
```

This runs both ESLint and Oxlint for comprehensive code analysis.

### Code Formatting
```bash
npm run format
```

Formats code using Prettier.

## Project Structure

```
src/
├── components/          # Reusable Vue components (Header, ProjectCard, StudyCard)
├── views/              # Page-level components (Presentation, Projects, Studies, Access, Admin)
├── router/             # Vue Router configuration for navigation
├── stores/             # Pinia store for authentication/access state
├── database/           # Firebase configuration and setup
├── services/           # Business logic (authentication, error handling)
├── styles/             # Global styles and Tailwind CSS configuration
├── images/             # Static image assets
└── videos/             # Video assets for showcase
```

## Environment Variables

Required environment variables for Firebase integration:

| Variable | Description |
|----------|-------------|
| `VITE_APP_FIREBASE_API_KEY` | Firebase API key |
| `VITE_APP_FIREBASE_AUTH_DOMAIN` | Firebase authentication domain |
| `VITE_APP_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_APP_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket URL |
| `VITE_APP_FIREBASE_MESSAGER_SENDER_ID` | Firebase messaging sender ID |
| `VITE_APP_FIREBASE_APP_ID` | Firebase application ID |

## Technologies Used

- **Frontend**: Vue 3, Vue Router, Pinia
- **Styling**: Tailwind CSS 4, custom fonts
- **Build Tool**: Vite
- **Backend Services**: Firebase (Firestore, Authentication)
- **Testing**: Vitest (unit), Playwright (e2e)
- **Code Quality**: ESLint, Oxlint, Prettier
- **Deployment**: Vercel

## Browser Support

- Chrome, Edge, Brave (Chromium-based browsers)
- Firefox
- Safari

Recommended: Enable Vue.js DevTools for development:
- [Vue.js devtools for Chrome](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
- [Vue.js devtools for Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)

## Getting Help

### Resources

- [Vue 3 Documentation](https://vuejs.org/)
- [Vite Documentation](https://vite.dev/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS](https://tailwindcss.com/)

### Development Setup

For the best development experience, use:
- **IDE**: [VS Code](https://code.visualstudio.com/) + [Vue (Official) extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur if installed)
- **Browser DevTools**: Enable custom object formatters for better debugging

### Common Issues

If you encounter build or runtime issues:
1. Ensure all environment variables are properly set in `.env.local`
2. Clear `node_modules` and reinstall:
   ```bash
   rm -rf node_modules && npm install
   ```
3. Check Node.js version matches requirements:
   ```bash
   node --version
   ```
4. Review linting errors:
   ```bash
   npm run lint
   ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Create a feature branch from `main`
2. Make your changes and test them thoroughly
3. Run linting and formatting:
   ```bash
   npm run lint && npm run format
   ```
4. Ensure all tests pass:
   ```bash
   npm run test:unit && npm run test:e2e
   ```
5. Commit with clear, descriptive messages
6. Push to your branch and create a pull request

## Maintainer

Marina Borisova - Creative artist, illustrator, motion designer, and animator.

## License

This project is proprietary and all rights are reserved. See the LICENSE file for details.

## Deployment

This project is configured for deployment on Vercel. The `vercel.json` configuration handles client-side routing for the single-page application.
