# Ravikiran Portfolio

A modern, responsive, and interactive portfolio website built with React, featuring dark/light mode, smooth animations, and professional design.

## 🚀 Live Demo

**Live Portfolio:** https://ravikiranediga.github.io/RAVIKIRANPORTFOLIO/

![Portfolio Preview](https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop)

## Features

- 🎨 **Dark/Light Mode** - Toggle between themes with smooth transitions
- ✨ **Smooth Animations** - Scroll reveal animations and micro-interactions
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🔄 **Typing Effect** - Dynamic text animation in hero section
- 🎯 **Project Filtering** - Filter projects by category
- 📬 **Contact Form** - Form validation with success animation
- 📊 **Animated Counters** - Stat counters with number animation
- 🎓 **Skills Visualization** - Animated progress bars

## Folder Structure

```
RavikiranPortfolio/
├── public/
│   └── favicon.svg              # Website favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation component
│   │   ├── Hero.jsx             # Hero section with typing effect
│   │   ├── About.jsx            # About section with counters
│   │   ├── Skills.jsx           # Skills with progress bars
│   │   ├── Projects.jsx        # Projects grid with modal
│   │   ├── Contact.jsx         # Contact form with validation
│   │   ├── Footer.jsx           # Footer with social links
│   │   └── ScrollReveal.jsx    # Scroll animation wrapper
│   ├── data/
│   │   └── projects.json       # Projects data
│   ├── App.jsx                 # Main App component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles & CSS variables
├── index.html                  # HTML template
├── package.json                 # Dependencies & scripts
├── vite.config.js              # Vite configuration
├── .gitignore                   # Git ignore rules
└── README.md                    # Documentation
```

## Tech Stack

- **React 18** - Component-based UI library
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with CSS variables
- **React Icons** - Icon library
- **No external frameworks** - Pure CSS, no Bootstrap/Tailwind

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ravikiran-portfolio.git
   cd ravikiran-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## Deployment

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/ravikiran-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository
   - Click "Deploy"

### Option 2: Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign in with GitHub
   - Click "Add new site" → "Import an existing project"
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

### Option 3: GitHub Pages

1. **Update `vite.config.js`**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/',
     server: {
       port: 3000,
       host: true
     }
   })
   ```

2. **Install gh-pages**
   ```bash
   npm install gh-pages --save-dev
   ```

3. **Update `package.json`**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Configure GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages"
   - Source: Deploy from a branch
   - Branch: gh-pages

## Customization

### Change Profile Image
Edit `src/components/About.jsx` and update the image URL:
```jsx
<img src="your-image-url" alt="Profile" className="about-image" />
```

### Update Projects
Edit `src/data/projects.json` with your own projects:
```json
{
  "projects": [
    {
      "id": 1,
      "title": "Your Project",
      "description": "Description",
      "techStack": ["React", "Node.js"],
      "category": "fullstack",
      "image": "image-url",
      "github": "github-link",
      "liveDemo": "demo-link"
    }
  ]
}
```

### Change Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --accent-primary: #your-color;
  --accent-secondary: #your-color;
}
```

### Update Contact Form
Edit the `handleSubmit` function in `src/components/Contact.jsx` to connect to your backend or use a service like Formspree.

## SEO Optimization

The `index.html` includes:
- Meta description
- Keywords
- Open Graph tags (for social sharing)
- Semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ by Ravikiran
