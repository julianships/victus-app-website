# victus-app-website

Source for [getvictus.com](https://www.getvictus.com), the public website for Victus.

This repo is the website and app-store-support layer for the product. It covers the public landing page, support, privacy, and terms pages. It does not include the private application code or internal product systems.

## Stack

- Next.js
- React
- TypeScript
- custom CSS

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Project structure

```text
app/
  page.tsx               Main homepage
  [locale]/              Localized route layer
  privacy/               Privacy policy page
  support/               Support and FAQ page
  terms/                 Terms of service
  components/            Navigation and shared page sections
  sitemap.ts             Sitemap generation

public/
  screenshots and brand assets
```

## What this repo contains

- public product marketing pages
- App Store support URLs
- legal pages
- branding and static assets

## What it does not contain

- the Victus mobile app source
- private backend systems
- subscription, growth, or analytics internals beyond what is already visible on the site

## Notes

- This repo is intended to be safe to share publicly as the presentation layer for the product.
- The deeper product and operational systems live elsewhere in private repos.
