# VMI Collective Website

The official website for VMI Collective - The Enabling Bridge between Skills, Markets & Opportunities.

## Features

- 🎨 Modern, responsive design with gradient backgrounds
- 📱 Fully responsive across all devices
- 🚀 Built with Next.js 16 and React 19
- 🎯 Core Values showcase
- 💼 Services and Divisions pages
- 📝 Articles and blog functionality
- 🌐 Multiple division pages (MarTech, Creative, Learning, HR, Investment, Global Market)
- 📧 Contact section
- 🎭 Smooth animations and transitions

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── articles/          # Articles pages
│   ├── [divisions]/       # Division pages (MarTech, Creative, etc.)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── Hero.tsx          # Hero section
│   ├── Section.tsx       # Core values sections
│   ├── Services.tsx      # Services section
│   ├── AdditionalServices.tsx  # Divisions section
│   ├── ImpactInitiatives.tsx   # Impact initiatives
│   ├── Contact.tsx       # Contact section
│   ├── Navigation.tsx    # Navigation bar
│   ├── Footer.tsx        # Footer
│   └── Logo.tsx          # Logo component
└── lib/
    └── content.ts        # Centralized content management
```

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions to Vercel.

Quick deploy:
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically!

## Content Management

All content is managed in `lib/content.ts`. Update this file to change:
- Hero section text
- Core values
- Services descriptions
- Impact initiatives
- Articles
- Contact information

## Customization

### Colors
The site uses a purple → indigo → blue gradient theme. Colors can be customized in:
- Tailwind config (if needed)
- Component files (gradient classes)

### Images
Images are loaded from Unsplash. Update image URLs in:
- `lib/content.ts` (for articles)
- Component files (for section images)

## License

Private - VMI Collective
