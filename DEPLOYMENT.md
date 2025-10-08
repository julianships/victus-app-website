# Victus Website - Deployment Guide

## Quick Start: Deploy to Vercel in 5 Minutes

### Prerequisites
- GitHub account
- Vercel account (free tier is fine)
- Domain registered (www.getvictus.com)

### Step 1: Push to GitHub

```bash
# If not already a git repo
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Victus website for App Store"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/julianships/victus-app-website.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your `victus-app-website` repository from GitHub
4. Vercel will auto-detect Next.js settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click **"Deploy"**
6. Wait 1-2 minutes for deployment

Your site will be live at: `https://victus-app-website-xxxxx.vercel.app`

### Step 3: Add Custom Domain

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add domain: `www.getvictus.com`
4. Vercel will show DNS records to add

### Step 4: Configure DNS

Log in to your domain registrar (GoDaddy, Namecheap, etc.) and add:

**For www.getvictus.com:**
- **Type**: CNAME
- **Name**: www
- **Value**: cname.vercel-dns.com
- **TTL**: 3600 (or automatic)

**Optional - Redirect root domain:**
- **Type**: A
- **Name**: @ (or leave blank)
- **Value**: 76.76.21.21
- **TTL**: 3600

DNS propagation can take 1-48 hours, but usually works in 10-30 minutes.

### Step 5: Verify Everything Works

Check these URLs once DNS propagates:

- ✅ Homepage: https://www.getvictus.com
- ✅ Privacy Policy: https://www.getvictus.com/privacy
- ✅ Support: https://www.getvictus.com/support
- ✅ Terms: https://www.getvictus.com/terms

## Update URLs in App Store Connect

Once your site is live, update these in App Store Connect:

1. **Marketing URL**: `https://www.getvictus.com`
2. **Privacy Policy URL**: `https://www.getvictus.com/privacy`
3. **Support URL**: `https://www.getvictus.com/support`

**IMPORTANT**: URLs must be **exact matches** - include https:// and the correct path.

## After Your App is Approved

Update the App Store link on your homepage:

1. Edit `app/page.tsx`
2. Find line ~130: `href="https://apps.apple.com/app/victus"`
3. Replace with your actual App Store URL
4. Commit and push - Vercel will auto-deploy

## Troubleshooting

### DNS Not Working

- **Check DNS propagation**: Use [whatsmydns.net](https://www.whatsmydns.net)
- **Wait longer**: DNS can take up to 48 hours
- **Verify DNS records**: Use `dig www.getvictus.com` or `nslookup www.getvictus.com`

### Build Failed on Vercel

- Check the build logs in Vercel dashboard
- Verify the build works locally: `npm run build`
- Common issue: Check `package.json` has all dependencies

### Site Not Updating

- Vercel auto-deploys on every git push to main
- Check Vercel dashboard → Deployments to see status
- Force redeploy: Vercel dashboard → Deployments → ... → Redeploy

## Making Changes

Any time you push to GitHub, Vercel will automatically:
1. Build your site
2. Run tests
3. Deploy to production
4. Update www.getvictus.com

```bash
# Make changes to files
# Then:
git add .
git commit -m "Update pricing on homepage"
git push
# Vercel auto-deploys in ~1 minute
```

## Environment Variables (If Needed Later)

If you need to add API keys or secrets:

1. Vercel Dashboard → Settings → Environment Variables
2. Add variables (never commit secrets to git)
3. Redeploy for changes to take effect

## Monitoring & Analytics

### Built-in Vercel Analytics

Enable in Vercel dashboard → Analytics (free)

### Add Google Analytics (Optional)

1. Create GA4 property
2. Add tracking code to `app/layout.tsx`:

```tsx
<Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

## Performance Tips

The site is already optimized:
- ✅ Static Site Generation (SSG)
- ✅ Automatic image optimization
- ✅ Global CDN via Vercel
- ✅ Lighthouse score: 95+

## Support

If you run into issues:
1. Check Vercel documentation
2. Review build logs
3. Test locally with `npm run build`

## Security

- HTTPS is automatic via Vercel
- No user data collected on website
- Privacy policy is up-to-date
- Regular dependency updates recommended

## Backup

- All code is in GitHub (automatic backup)
- Vercel keeps deployment history
- Can rollback to any previous deployment

---

**Ready for App Store submission once deployed! 🚀**
