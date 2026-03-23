# Portfolio Website - A Sai Bharath

## 🚀 Project Overview

A complete, fully functional, production-ready portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and modern UI libraries. Features dark mode design, smooth animations, and a professional layout showcasing skills, projects, and contact information.

## ✨ Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Beautiful UI**: shadcn/ui components + custom Aceternity UI animations
- **Dark Mode Only**: Sleek dark theme with custom color scheme
- **Smooth Animations**: Framer Motion for page transitions and interactions
- **Custom Cursor**: Animated cursor that follows mouse movement
- **Responsive Design**: Mobile-first approach with breakpoints for all screen sizes
- **SEO Optimized**: Proper metadata and Open Graph tags
- **Performance**: Static generation for optimal loading speed

## 📦 Tech Stack

### Core
- Next.js 16.1.6 (App Router)
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4

### UI & Animations
- shadcn/ui (Button, Card, Badge, Sheet, etc.)
- Framer Motion (animations & transitions)
- Aceternity UI (custom animation components)
- @tabler/icons-react
- lucide-react

### Utilities
- clsx & tailwind-merge
- class-variance-authority

## 🎨 Design System

### Colors
- **Primary**: `#1A56A0` (Blue)
- **Accent**: `#5DCAA5` (Teal)
- **Background**: `#0A0A0A` (Near Black)
- **Surface**: `#111111`
- **Border**: `#1F1F1F`
- **Text Primary**: `#F5F5F5`
- **Text Muted**: `#888888`

### Typography
- **Headings**: Geist Mono (monospace, techy feel)
- **Body**: Space Grotesk (modern, clean)

### Border Radius
- Cards: 8px
- Badges: 4px

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main page integrating all components
│   └── globals.css         # Global styles and Tailwind setup
├── components/
│   ├── Navbar.tsx          # Sticky navigation with mobile menu
│   ├── Hero.tsx            # Hero section with typewriter effect
│   ├── About.tsx           # About section with stats
│   ├── Skills.tsx          # Skills with infinite scrolling cards
│   ├── Projects.tsx        # Project showcase with hover effects
│   ├── Contact.tsx         # Contact form with meteor background
│   ├── Footer.tsx          # Footer with social links
│   ├── CustomCursor.tsx    # Animated cursor follower
│   └── ui/
│       ├── aceternity/     # Custom Aceternity UI components
│       │   ├── background-beams.tsx
│       │   ├── spotlight.tsx
│       │   ├── card-hover-effect.tsx
│       │   ├── infinite-moving-cards.tsx
│       │   ├── text-generate-effect.tsx
│       │   ├── floating-navbar.tsx
│       │   ├── meteor-effect.tsx
│       │   └── tracing-beam.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── sheet.tsx
│       ├── separator.tsx
│       └── navigation-menu.tsx
├── lib/
│   └── utils.ts            # Utility functions (cn helper)
├── public/
│   └── bharath_resume.pdf  # Resume PDF (placeholder)
├── tailwind.config.ts      # Tailwind configuration
├── components.json         # shadcn/ui configuration
└── package.json            # Dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Navigate to the project directory**:
   ```bash
   cd portfolio
   ```

2. **Install dependencies** (if not already installed):
   ```bash
   npm install
   ```

3. **Add your resume**:
   - Replace `/public/bharath_resume.pdf` with your actual resume PDF
   - Keep the filename as `bharath_resume.pdf` or update references in Navbar.tsx and Hero.tsx

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📄 Sections

### 1. **Navbar**
- Sticky navigation with blur background on scroll
- Logo: "ASB" in Geist Mono
- Navigation links: Home, About, Skills, Projects, Contact
- Download Resume button
- Mobile: Hamburger menu with sheet overlay

### 2. **Hero**
- Full viewport height
- Background Beams animation
- "Available for opportunities" badge with pulsing indicator
- Name with text generation effect
- Typewriter animation cycling through roles
- Description text
- Two CTA buttons: "View My Work" and "Download Resume"
- Social links: GitHub, LinkedIn
- Animated scroll indicator

### 3. **About**
- Two-column layout (desktop), stacked (mobile)
- Left: Avatar with initials, location badge, social icons
- Right: Three paragraphs describing experience and focus
- Stats row with count-up animation:
  - 3 Projects Deployed
  - 56 Chrome Extension Users
  - 1+ Years Building
  - 95% PhisX Accuracy

### 4. **Skills**
- Infinite moving cards (2 rows, opposite directions)
- 5 category cards with skill badges:
  - AI & LLM
  - Backend
  - Frontend
  - Cloud & DevOps
  - Data & Storage

### 5. **Projects**
- 3 project cards with hover effects:
  
  **Dockwave** (Featured)
  - Agentic document intelligence platform
  - Tech: Next.js, Python, FastAPI, LangChain, Neo4j, PostgreSQL, Azure OpenAI, AWS S3
  - Links: GitHub, Live Demo
  
  **Personal Investor** (In Development)
  - AI-first personal finance platform
  - Tech: Next.js, Python, LangChain, Gmail API
  - Links: GitHub, Live Demo
  
  **PhisX** (56 Active Users)
  - Real-time phishing detection platform
  - Tech: Python, Flask, React, TypeScript, AWS EC2, Docker
  - Links: Chrome Web Store

### 6. **Contact**
- "Get In Touch" heading
- Large email display
- Social buttons: GitHub, LinkedIn, Email
- Contact form with validation:
  - Name, Email, Message
  - Submit button with loading spinner
  - Success toast on submit
- Meteor effect background

### 7. **Footer**
- Name in left
- "Built with Next.js, Tailwind & shadcn/ui" in center
- Social icon links in right
- Copyright notice at bottom

## 🎯 Customization

### Personal Information
Update these in the respective components:
- **Name**: Hero.tsx, About.tsx, Footer.tsx
- **Location**: About.tsx (badge)
- **Email**: Contact.tsx, Hero.tsx
- **Social Links**: All components with social icons
- **Resume**: Replace `/public/bharath_resume.pdf`

### Project Details
Edit `/components/Projects.tsx`:
- Update project titles, descriptions, tech stacks
- Change badges (Featured, In Development, etc.)
- Modify links (GitHub, Live Demo, Chrome Store)

### Skills
Edit `/components/Skills.tsx`:
- Modify `skillsRow1` and `skillsRow2` arrays
- Update `categories` array for skill category cards

### Stats
Edit `/components/About.tsx`:
- Update the `stats` array with your numbers

### Colors
Edit `/app/globals.css` and `/tailwind.config.ts`:
- Change CSS custom properties
- Update Tailwind color extensions

## 🐛 Known Issues

- Resume PDF is a placeholder text file. Replace with actual PDF.
- Some animations may not work on older browsers.
- Custom cursor is hidden on mobile/tablet devices.

## 📝 Notes

- **No company names**: As requested, no employer names or work history included
- **No salary information**: Project shows only personal projects and skills
- **Dark mode only**: No light mode toggle
- **Mobile responsive**: Tested on various screen sizes
- **Zero TypeScript errors**: Build completes successfully
- **Zero runtime errors**: All components render correctly

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
- Build the project: `npm run build`
- Output will be in `.next` directory
- Deploy static files or use Node.js server

## 📜 License

This project is open source and available for personal use.

## 👤 Author

**A Sai Bharath**
- Email: asb.bharath601@gmail.com
- GitHub: [@asb601](https://github.com/asb601)
- LinkedIn: [a-sai-bharath-b414662ab](https://www.linkedin.com/in/a-sai-bharath-b414662ab/)

---

**Build Status**: ✅ Builds successfully with zero errors
**Last Updated**: March 16, 2026
