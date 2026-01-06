# Holdwell LTD - Strategic Consulting & Services

## Project Overview
- **Name**: Holdwell LTD Website
- **Goal**: Professional corporate website showcasing strategic consulting services, products, and company values
- **Features**: 
  - Responsive design (desktop 1440px, mobile 375px)
  - Sticky navigation with smooth scrolling
  - Hero section with gradient background
  - Service and product showcases
  - Process workflow visualization
  - Blog preview section
  - Client testimonials
  - Newsletter signup
  - Mobile-friendly hamburger menu

## URLs
- **Local Development**: http://localhost:3000
- **Live Preview**: https://3000-indvwj41nejwmydfz2gon-c81df28e.sandbox.novita.ai
- **Production**: Ready to deploy to Cloudflare Pages

## Design Specifications
### Colors
- **Primary**: #008000 (Green)
- **Secondary**: #FFFFFF (White)
- **Dark Gray**: #333333
- **Accent**: #FFD700 (Gold - hover states)

### Typography
- **Headings**: Montserrat (400, 500, 600, 700 weights)
- **Body**: Lora (400, 500, 600 weights)

### Sections
1. **Header**: Sticky navigation with logo, menu links, and CTA buttons
2. **Hero**: Full-width section with headline, subtitle, and dual CTAs
3. **Why Holdwell**: 4 feature cards (Clarity, Trust, Growth, Strategy)
4. **Services**: 4 service cards with "Request Service" CTAs
5. **Products**: 5 product cards (Beholder Magazine, HoldApp, Lumivue, Hold'em Blog, Tree to Five)
6. **Process**: 4-step workflow (Discover, Strategize, Execute, Optimize)
7. **Blog**: 3 latest article previews
8. **Testimonials**: Client quotes and company logos
9. **Footer**: Contact info, quick links, newsletter signup, social media

## Contact Information
- **Phone**: +255 792 178 828
- **Email**: info@holdwell.co.tz
- **Location**: Dar es Salaam, Tanzania

## Tech Stack
- **Framework**: Hono (lightweight web framework)
- **Platform**: Cloudflare Pages
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Fonts**: Google Fonts (Montserrat, Lora)
- **Icons**: Font Awesome 6.4.0
- **Build Tool**: Vite
- **Package Manager**: npm

## Development Setup

### Prerequisites
- Node.js (v18+)
- npm

### Installation
```bash
cd /home/user/webapp
npm install
```

### Running Locally
```bash
# Build the project first
npm run build

# Start development server with PM2
pm2 start ecosystem.config.cjs

# Test the service
curl http://localhost:3000

# Check logs
pm2 logs webapp --nostream
```

### Port Management
```bash
# Clean up port 3000 if needed
npm run clean-port

# Or use PM2
pm2 delete all
```

## Deployment

### Deploy to Cloudflare Pages
```bash
# Setup Cloudflare API key first
# Then build and deploy
npm run deploy:prod
```

## Features Implemented ✅
- [x] Sticky header with smooth navigation
- [x] Responsive mobile menu (hamburger)
- [x] Hero section with gradient background
- [x] Why Holdwell section (4 feature cards)
- [x] Services section (4 service cards with CTAs)
- [x] Products section (5 product cards)
- [x] Process section (4-step workflow)
- [x] Blog preview section (3 articles)
- [x] Testimonials section with client quotes
- [x] Footer with contact info and newsletter
- [x] Smooth scrolling animations
- [x] Hover effects with gold accent
- [x] Fully responsive design
- [x] Card elevation on hover
- [x] Active navigation state tracking

## Responsive Breakpoints
- **Desktop**: 1440px+ (multi-column layouts)
- **Tablet**: 768px - 1024px (2-column grids)
- **Mobile**: 375px - 767px (single column, hamburger menu)

## File Structure
```
webapp/
├── src/
│   └── index.tsx          # Main Hono application
├── public/
│   └── static/
│       ├── styles.css     # Complete CSS styles
│       └── app.js         # JavaScript interactivity
├── ecosystem.config.cjs   # PM2 configuration
├── package.json           # Dependencies and scripts
├── wrangler.jsonc         # Cloudflare configuration
└── README.md             # This file
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features
- Smooth scroll behavior
- Intersection Observer for animations
- Optimized CSS transitions
- Lazy loading ready
- Minimal JavaScript footprint

## Future Enhancements
- [ ] Add real product images
- [ ] Integrate blog CMS
- [ ] Add contact form backend
- [ ] Implement newsletter API integration
- [ ] Add more testimonials
- [ ] Create individual product/service pages
- [ ] Add analytics tracking
- [ ] Implement language translations

## Status
✅ **Active** - Fully functional and ready for deployment

## Last Updated
2026-01-06

---

Built with ❤️ by Holdwell LTD Digital Solutions Team
