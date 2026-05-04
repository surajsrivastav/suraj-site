# Quick Start Guide

## Development

```bash
# Start the dev server (port 3000)
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Project Structure

```
suraj-site/
├── blog/                    # Markdown blog posts with metadata
├── docs/                    # Documentation pages
├── src/
│   ├── pages/index.jsx      # Custom homepage (React)
│   ├── components/          # Reusable components (Card, SectionHeader)
│   └── css/custom.css       # Design system & global styles
├── static/                  # Static assets (logos, CNAME file)
├── docusaurus.config.js     # Main configuration
└── package.json            # Dependencies
```

## Key Features

✅ **Custom Homepage** — Hero section, focus areas, writing preview, projects
✅ **Blog System** — Markdown posts with tags, reading time, authors
✅ **Design System** — Premium dark-mode UI inspired by Stripe/GitHub/Linear
✅ **Responsive** — Mobile-first, fully responsive design
✅ **Fast** — Static site generation, instant page loads
✅ **SEO Ready** — Sitemap, meta tags, proper structure
✅ **GitHub Pages Ready** — CNAME configured for surajsrivastav.com

## Customization

### Colors & Typography
Edit `src/css/custom.css` (CSS variables at top)

### Homepage Content
Edit `src/pages/index.jsx`

### Navigation & Footer
Edit `docusaurus.config.js` (themeConfig section)

### Blog Posts
Create markdown files in `blog/` with frontmatter:
```markdown
---
slug: my-post
title: My Post Title
authors: suraj
tags: [Systems, AI]
---
```

### Documentation
Create markdown files in `docs/`

## Deployment

### To GitHub Pages (1 command)

```bash
npm run deploy
```

This builds and pushes to the `gh-pages` branch.

### Custom Domain

1. Domain registrar: Point your domain to GitHub's servers
2. GitHub repo settings: Add custom domain
3. GitHub creates CNAME automatically
4. DNS propagates in 5-30 minutes

See `DEPLOYMENT.md` for detailed instructions.

## Directory Reference

| Path | Purpose |
|------|---------|
| `blog/` | Blog posts (markdown) |
| `blog/authors.yml` | Blog author metadata |
| `docs/` | Documentation pages |
| `src/pages/index.jsx` | Homepage React component |
| `src/components/` | Reusable UI components |
| `src/css/custom.css` | Design system & styles |
| `static/` | Static assets & CNAME |
| `docusaurus.config.js` | Site configuration |
| `sidebars.js` | Docs sidebar structure |

## Common Tasks

### Add a Blog Post
1. Create `blog/YYYY-MM-DD-slug.md`
2. Add frontmatter with title, slug, authors, tags
3. Write content in Markdown
4. Use `<!-- truncate -->` for preview cutoff

### Customize Colors
Edit `src/css/custom.css`:
- `--color-accent`: Primary color (default: #3B82F6)
- `--color-bg-primary`: Background
- `--color-text-primary`: Text color

### Update Navbar
Edit `docusaurus.config.js`, find `navbar` in `themeConfig`

### Add Custom Component
1. Create `src/components/MyComponent.jsx`
2. Create `src/components/MyComponent.module.css`
3. Import in your pages

## Performance Tips

- Images are auto-optimized
- Use `<!-- truncate -->` in blog posts
- Keep dependencies updated: `npm update`
- Monitor with Google PageSpeed Insights

## Troubleshooting

**Build fails?**
```bash
npm run clear
npm run build
```

**Port 3000 busy?**
```bash
npm start -- --port 3001
```

**Custom domain not working?**
- Check CNAME in `static/CNAME`
- Verify DNS records at registrar
- Wait for propagation (15-30 min)

## Resources

- [Docusaurus Docs](https://docusaurus.io)
- [GitHub Pages Custom Domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Markdown Guide](https://commonmark.org/help/)

## What's Next?

1. **Customize**: Update colors, fonts, and content
2. **Add Posts**: Write blog posts on your expertise
3. **Deploy**: Push to GitHub Pages
4. **Monitor**: Check analytics and performance
5. **Iterate**: Keep updating with new content

---

**Questions?** See `DEPLOYMENT.md` for more details.
