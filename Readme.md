# 🚀 A R Mohammed Fasil - Portfolio Website

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://arfasil.github.io/portfolio/)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0.8-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.0-cyan.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

A modern, production-ready portfolio website showcasing my work in AI/ML and Full-Stack Development. Built with React 18, Vite, Tailwind CSS, and featuring stunning 3D animations powered by React Three Fiber.

![Portfolio Preview](https://via.placeholder.com/800x400/0a0a0f/00F0FF?text=Portfolio+Preview)

## ✨ Features

### 🎨 Design & UI
- **Ultra-Modern Interface** - Glassmorphism effects with gradient accents
- **3D Interactive Background** - Particle systems and floating geometric shapes
- **Smooth Animations** - Powered by Framer Motion with micro-interactions
- **Dark/Light Theme** - Toggle between themes with persistent preference
- **Fully Responsive** - Mobile-first design optimized for all devices
- **Custom Design System** - Unique color palette and typography

### 🛠️ Technical Features
- **React 18** - Latest features including hooks and concurrent rendering
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **React Three Fiber** - 3D graphics and WebGL rendering
- **Framer Motion** - Production-ready animation library
- **SEO Optimized** - Meta tags, semantic HTML, and performance-focused
- **Performance** - Code splitting, lazy loading, and optimized assets

### 📱 Sections
1. **Hero** - Eye-catching introduction with animated elements
2. **About** - Personal bio, statistics, skills, and coursework
3. **Projects** - Filterable showcase of 6+ major projects
4. **Experience** - Animated timeline with education and achievements
5. **Blog** - Article cards with category filtering
6. **Contact** - Functional contact form with validation
7. **Footer** - Quick links and social media connections

## 🎯 Live Demo

**🌐 [View Live Portfolio](https://arfasil.github.io/portfolio/)**

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm** or **yarn**
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Arfasil/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── public/                    # Static assets
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.jsx       # Navigation with scroll progress
│   │   ├── Hero.jsx         # Landing section
│   │   ├── About.jsx        # About section with skills
│   │   ├── Projects.jsx     # Projects showcase
│   │   ├── Experience.jsx   # Timeline & achievements
│   │   ├── Blog.jsx         # Blog section
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Footer.jsx       # Footer component
│   │   └── Scene3D.jsx      # 3D background
│   ├── data/
│   │   └── portfolio.js     # Portfolio content data
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html                # HTML template
├── package.json              # Dependencies & scripts
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind configuration
└── postcss.config.js        # PostCSS configuration
```

## 🛠️ Tech Stack

### Frontend Framework
- **React** 18.3.1 - UI library
- **React DOM** 18.3.1 - DOM rendering

### Build Tools
- **Vite** 5.0.8 - Build tool and dev server
- **PostCSS** 8.4.32 - CSS processing
- **Autoprefixer** 10.4.16 - CSS vendor prefixes

### Styling
- **Tailwind CSS** 3.4.0 - Utility-first CSS framework
- **Custom Design System** - Unique colors, fonts, and animations

### Animations & 3D
- **Framer Motion** 11.0.0 - Animation library
- **React Three Fiber** 8.15.0 - React renderer for Three.js
- **@react-three/drei** 9.92.0 - Three.js helpers
- **Three.js** 0.160.0 - 3D graphics library

### UI Components & Icons
- **Lucide React** 0.263.1 - Beautiful icon set
- **React Markdown** 9.0.0 - Markdown rendering
- **remark-gfm** 4.0.0 - GitHub Flavored Markdown

## 🎨 Design System

### Color Palette

```css
/* Primary Colors */
--electric:     #00F0FF  /* Electric Blue - Main accent */
--deep-purple:  #8338EC  /* Deep Purple - Secondary */
--neon-pink:    #FF006E  /* Neon Pink - Tertiary */
--cyber-yellow: #FFBE0B  /* Cyber Yellow - Quaternary */

/* Background Colors */
--bg-primary:   #0a0a0f  /* Dark mode background */
--bg-secondary: #12121a  /* Dark mode cards */
```

### Typography

- **Display Font:** Syne (Headers, Titles)
- **Body Font:** DM Sans (Paragraphs, UI)
- **Mono Font:** JetBrains Mono (Code)

## 📝 Customization

### Update Personal Information

Edit `src/data/portfolio.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... update all fields
};
```

### Modify Projects

```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "Node.js"],
    // ... add your projects
  }
];
```

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'electric': '#00F0FF',      // Change to your brand color
  'neon-pink': '#FF006E',
  'deep-purple': '#8338EC',
  'cyber-yellow': '#FFBE0B',
}
```

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

3. **Access your site**
   ```
   https://arfasil.github.io/portfolio
   ```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Click Deploy

**Done!** Auto-deploys on every push.

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md)

## 📊 Performance

- **Lighthouse Score:** 95+ (estimated)
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.0s
- **Bundle Size:** ~250KB (gzipped)

### Optimizations Applied

✅ Code splitting  
✅ Tree shaking  
✅ Lazy loading  
✅ Asset optimization  
✅ CSS minification  
✅ Browser caching  

## 📜 Available Scripts

```bash
# Start development server (port 3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 💡 Features Showcase

### Highlighted Projects

1. **MoodMate** - Real-time emotion detection using AI
2. **AI Bird Census** - Conservation technology with YOLOv11
3. **Voice Emotion Chatbot** - Emotion-aware conversational AI
4. **Face Emotion Recognition** - Deep learning facial analysis
5. **Expense Tracker** - Full-stack MERN application
6. **Multichat Bot** - Multi-platform chat integration

### Skills & Expertise

- **Programming:** C, C++, Java, Python
- **Web Development:** React, Node.js, Express, MongoDB, Flask
- **AI/ML:** TensorFlow, DeepFace, YOLOv11, NLP
- **Tools:** Docker, Git, VS Code, Jupyter Notebook
- **Databases:** SQL, MongoDB

### Achievements

- 🏆 300+ problems solved on LeetCode, GeeksforGeeks, CodeChef
- 🥇 Top 20 finalist in National Hackathon (500+ teams)
- 💻 Multiple hackathon participations
- 📚 Advanced DSA Training - GeeksforGeeks

## 📚 Documentation

- [Quick Start Guide](QUICKSTART.md)
- [Deployment Guide](DEPLOYMENT.md)
- [GitHub Pages Setup](GITHUB_DEPLOYMENT.md)
- [Project Overview](PROJECT_OVERVIEW.md)
- [File Structure](FILE_STRUCTURE.md)
- [Commands Reference](COMMANDS.md)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**A R Mohammed Fasil**

- 🌐 Website: [arfasil.github.io/portfolio](https://arfasil.github.io/portfolio/)
- 📧 Email: armohammedfasil06@gmail.com
- 💼 LinkedIn: [A R Mohammed Fasil](https://linkedin.com/in/armohammedfasil)
- 🐙 GitHub: [@Arfasil](https://github.com/Arfasil)
- 💻 LeetCode: [armohammedfasil](https://leetcode.com/armohammedfasil)

## 📞 Support

For support, email armohammedfasil06@gmail.com or create an issue in this repository.

---

<div align="center">

**Built with ❤️ using React, Vite, and Modern Web Technologies**

Made by [A R Mohammed Fasil](https://github.com/Arfasil) | © 2024

</div>