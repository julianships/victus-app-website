# Victus Website

Official website for Victus - 66 Days to a Victorious Lifestyle

## Overview

This is the marketing website for the Victus iOS app, built to meet Apple App Store requirements. The site features:

- ✅ Live, functional website
- ✅ Consistent branding (Victus)
- ✅ Contact information (support@getvictus.com)
- ✅ Privacy Policy (required by Apple)
- ✅ Support page with FAQs
- ✅ Terms of Service

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Domain**: www.getvictus.com

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

Create a production build:

```bash
npm run build
```

Test the production build locally:

```bash
npm run start
```

## Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Option 2: Deploy via GitHub (Recommended)

1. Push this repository to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Victus website"
git remote add origin https://github.com/julianships/victus-app-website.git
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Custom Domain Setup

After deployment, configure your custom domain:

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `www.getvictus.com`
4. Follow Vercel's DNS configuration instructions
5. Update your domain's DNS settings with your registrar

Typical DNS configuration:
- **Type**: CNAME
- **Name**: www
- **Value**: cname.vercel-dns.com

## Project Structure

```
victus-app-website/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx    # Site navigation
│   │   └── Footer.tsx         # Site footer
│   ├── privacy/
│   │   └── page.tsx           # Privacy Policy page
│   ├── support/
│   │   └── page.tsx           # Support & FAQ page
│   ├── terms/
│   │   └── page.tsx           # Terms of Service page
│   ├── globals.css            # Global styles & theme
│   ├── layout.tsx             # Root layout with metadata
│   ├── page.tsx               # Homepage
│   └── sitemap.ts             # XML sitemap generation
├── public/
│   └── robots.txt             # SEO robots file
└── vercel.json                # Vercel configuration
```

## Design Theme

The website uses a Greco-Roman/Spartan aesthetic:

- **Colors**: Dark theme with gold (#d4af37) accents
- **Typography**:
  - Headings: Cinzel (serif)
  - Body: Inter (sans-serif)
- **Style**: Clean, bold, motivating

## Key Pages

### Homepage (/)
- Hero section with tagline
- Features showcase (6 core features)
- Download CTA with App Store link
- Mission statement

### Privacy Policy (/privacy)
- Complete privacy policy
- Third-party service disclosures
- Data collection & usage details
- Required by Apple App Store

### Support (/support)
- Contact email: support@getvictus.com
- Comprehensive FAQ section
- Troubleshooting guides

### Terms of Service (/terms)
- User agreement
- Subscription terms
- Liability disclaimers
- Required by Apple App Store

## Important Notes for App Store Submission

Before submitting your app to Apple:

1. ✅ Ensure the website is **live** at www.getvictus.com
2. ✅ Privacy Policy URL in App Store Connect must match exactly: `https://www.getvictus.com/privacy`
3. ✅ Support URL should be: `https://www.getvictus.com/support`
4. ✅ Marketing URL can be: `https://www.getvictus.com`
5. ✅ Contact email: `support@getvictus.com` must be monitored

## Updating Content

### Change App Store Link

Update the App Store URL in `app/page.tsx` once your app is approved:

```tsx
href="https://apps.apple.com/app/victus"
```

Replace with your actual App Store link.

### Update Pricing

If pricing changes, update in:
- `app/page.tsx` - Homepage pricing display
- `app/terms/page.tsx` - Terms subscription pricing

### Modify Privacy Policy

Edit `app/privacy/page.tsx` and update the "Last Updated" date.

## Support

For questions about this website:
- Email: support@getvictus.com

## License

© 2025 Victus. All rights reserved.
