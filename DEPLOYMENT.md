# Deployment Guide

## Local Development

Start the development server:

```bash
npm start
```

The site opens at `http://localhost:3000/`.

Edit files and changes hot-reload automatically.

## Building for Production

Create an optimized production build:

```bash
npm run build
```

The static site is in the `build/` directory.

Test the production build locally:

```bash
npm run serve
```

## Deploying to GitHub Pages

### Prerequisites

1. GitHub repository at `https://github.com/surajsrivastav/suraj-site`
2. Repository settings allow GitHub Pages deployment
3. Custom domain `surajsrivastav.com` configured (optional)

### Automatic Deployment

Deploy to GitHub Pages with a single command:

```bash
npm run deploy
```

This:
1. Builds the site
2. Commits to `gh-pages` branch
3. Pushes to GitHub
4. GitHub Pages serves the built site

The site will be live at your GitHub Pages URL within 2-3 minutes.

### Manual Deployment

To deploy manually:

```bash
# Build the site
npm run build

# Create the gh-pages branch if it doesn't exist
git branch gh-pages

# Push the build folder
git subtree push --prefix build origin gh-pages
```

## Custom Domain Setup

### Using surajsrivastav.com

The `static/CNAME` file already contains `surajsrivastav.com`.

**GitHub Pages setup:**

1. Go to your repository Settings → Pages
2. Under "Custom domain", verify it shows `surajsrivastav.com`
3. Ensure "Enforce HTTPS" is checked

**Domain registrar setup (Namecheap example):**

Option A: Using CNAME
- Add a CNAME record: `surajsrivastav.com` → `surajsrivastav.github.io`

Option B: Using A record (recommended)
- Add A records pointing to GitHub's IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

Once DNS propagates (5-30 minutes), your site is live at `https://surajsrivastav.com`.

## Environment Variables

None required for standard deployment. The config is baked into `docusaurus.config.js`.

## Troubleshooting

### Build fails locally

```bash
# Clear cache and try again
npm run clear
npm run build
```

### Custom domain not working

1. Check CNAME file exists: `static/CNAME`
2. Verify DNS records at your registrar
3. Wait for DNS propagation (15-30 min)
4. Check GitHub Pages settings in repository

### Build succeeds but site looks broken

- Clear browser cache
- Check that assets are loading (F12 → Network)
- Verify `baseUrl` in `docusaurus.config.js` matches your setup

### Port 3000 already in use

```bash
# Use a different port
npm start -- --port 3001
```

## Performance Optimization

### Image Optimization

Docusaurus automatically optimizes images. For best results:
- Use modern formats (WebP)
- Compress before adding (`tinypng.com`)
- Use appropriately sized images

### Cache Control

Static assets have long cache TTL. Blog posts update frequently but are still served from cache.

For immediate updates:
- Commit a change to trigger a new build
- GitHub Pages will serve new content within 2-3 minutes

## Security

- GitHub Pages uses HTTPS by default
- Enable "Enforce HTTPS" in repository settings
- All dependencies are locked in `package-lock.json`

## Analytics (Optional)

To add analytics, edit `docusaurus.config.js`:

```javascript
scripts: [
  {
    src: 'https://cdn.example.com/analytics.js',
    async: true,
  },
],
```

## Monitoring

Check your site health:
- **Uptime**: GitHub Pages is 99.9% uptime
- **Performance**: Run Google PageSpeed Insights on your site
- **SEO**: Sitemap is auto-generated at `/sitemap.xml`

## Updating

To update Docusaurus and dependencies:

```bash
npm install @docusaurus/core@latest @docusaurus/preset-classic@latest
npm update
```

Test locally before deploying:

```bash
npm run clear
npm run build
npm run serve
```

## Rollback

To rollback to a previous version:

```bash
# Revert to previous commit
git revert <commit-hash>
git push

# Redeploy
npm run deploy
```
