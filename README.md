# Oshadha Preveen — Portfolio (Next.js)

A modern, animated portfolio built with **Next.js 14** App Router.

## ✨ Features
- 🎆 Particle system with mouse interaction & trail effects
- 🖱️ Custom cursor with hover animations  
- 🎬 Video in hero section (right side) — flexible background
- 📷 Graduation photo in About Me section
- 📱 Fully responsive design (mobile / tablet / desktop)
- 🔗 Real GitHub projects auto-loaded from preveen-oshadha
- 📞 Contact number: +94 77 027 1399
- 🌐 Social links: LinkedIn, GitHub, Instagram, Facebook, TikTok
- 🎨 **All CSS in one file** → `styles/style.css`

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

## 📁 Project Structure
```
oshadha-portfolio/
├── app/
│   ├── layout.js            # Root layout + metadata
│   └── page.js              # Main page (all sections)
├── components/
│   ├── Cursor.js            # Custom cursor + ring
│   ├── ParticleCanvas.js    # Particle animation system
│   ├── Header.js            # Fixed navigation
│   ├── Hero.js              # Hero + video (right side)
│   ├── Marquee.js           # Scrolling tech banner
│   ├── About.js             # About me + graduation photo
│   ├── Projects.js          # GitHub projects showcase
│   ├── Skills.js            # Skills & tech stack bars
│   ├── Contact.js           # Contact form + social links
│   └── Footer.js            # Footer with social icons
├── styles/
│   └── style.css            # ← ALL CSS HERE (one file)
├── public/
│   ├── hero-video.mp4       # Your video (hero right side)
│   └── about-photo.jpeg     # Your graduation photo
└── package.json
```

## 🎨 Color System (CSS Variables)
| Variable    | Value     | Usage            |
|-------------|-----------|------------------|
| `--cyan`    | `#00f5ff` | Primary accent   |
| `--violet`  | `#9d4edd` | Secondary accent |
| `--pink`    | `#ff2d78` | Highlights       |
| `--gold`    | `#ffd60a` | Java/Special     |
| `--bg`      | `#03020a` | Page background  |

## 📞 Contact Info (already set)
- Phone: +94 77 027 1399
- Email: preveenoshadha@gmail.com
- GitHub: github.com/preveen-oshadha
- LinkedIn: oshadha-preveen-06707b3a6
- Instagram: @preveen_bhagya
- Facebook: oshada.preveen
- TikTok: @preveenbhagya
