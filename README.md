# Suraj Srivastav — Personal Engineering Blog

A production-ready personal website built with Docusaurus. Features a custom homepage, engineering blog, and documentation sections focused on systems, AI, and engineering leadership.

**Live at**: [surajsrivastav.com](https://surajsrivastav.com)

## Features

- ✨ Custom homepage with hero, focus areas, writing preview, and projects
- 📝 Markdown-based blog with tags and reading time
- 📚 Documentation system for guides and deep dives
- 🎨 Premium dark-mode design (light mode supported)
- 📱 Fully responsive and mobile-friendly
- ⚡ Fast static site generation with Docusaurus
- 🔍 Built-in SEO optimization and sitemap
- 🚀 Ready for GitHub Pages deployment

## Project Structure

```
suraj-site/
├── blog/                      # Markdown blog posts
│   ├── 2026-05-01-...md
│   └── 2026-04-25-...md
├── docs/                      # Documentation pages
│   └── intro.md
├── src/
│   ├── pages/
│   │   ├── index.jsx          # Custom homepage
│   │   └── index.module.css   # Homepage styles
│   ├── components/
│   │   ├── Card.jsx           # Reusable card component
│   │   ├── Card.module.css
│   │   ├── SectionHeader.jsx  # Section header component
│   │   └── SectionHeader.module.css
│   ├── css/
│   │   └── custom.css         # Design system & global styles
│   └── theme/                 # Docusaurus theme customizations
├── static/
│   ├── img/                   # Logo and images
│   ├── favicon.svg
│   └── CNAME                  # Custom domain for GitHub Pages
├── docusaurus.config.js       # Main configuration
├── sidebars.js                # Documentation sidebar structure
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/surajsrivastav/suraj-site.git
cd suraj-site

# Install dependencies
npm install

# Start development server
npm start
```

The site will open at `http://localhost:3000`.

## Development

### Adding Blog Posts

Create a new markdown file in the `blog/` directory with frontmatter:

```markdown
---
slug: my-post-slug
title: My Post Title
authors: suraj
tags: [Systems, AI, Leadership]
---

Your content here...
```

### Adding Documentation

Create a new markdown file in the `docs/` directory. Docusaurus will automatically add it to the sidebar.

### Customizing the Homepage

Edit `src/pages/index.jsx` to customize sections, and `src/pages/index.module.css` for styling.

### Creating Components

Add reusable components to `src/components/`. Example:

```jsx
import Card from '../components/Card';

<Card
  icon="🚀"
  title="My Card"
  description="Card description"
  href="/path"
/>
```

## Design System

All colors and typography are defined in `src/css/custom.css`:

- **Primary**: #3B82F6 (Blue)
- **Background**: #0B0F17 (Dark)
- **Text Primary**: #E5E7EB (Light Gray)
- **Text Secondary**: #9CA3AF (Medium Gray)

The design is responsive and includes light mode support via CSS variables.

## Building for Production

```bash
# Build static site
npm run build

# Serve the build locally
npm run serve
```

The built site is in the `build/` directory.

## Deployment

### GitHub Pages

The site is configured for GitHub Pages deployment with the `gh-pages` branch:

```bash
# Deploy to GitHub Pages
npm run deploy
```

This will:
1. Build the site
2. Push to the `gh-pages` branch
3. GitHub Pages will serve from that branch

### Custom Domain

The `static/CNAME` file contains `surajsrivastav.com`. GitHub Pages will automatically handle the DNS configuration when you point your domain's A record or CNAME to GitHub's servers.

**Steps**:
1. In your domain registrar, point your domain to GitHub's servers (IPs or CNAME)
2. Add your custom domain in GitHub repository settings
3. GitHub will create the CNAME file automatically

See [GitHub Pages Documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for details.

## Configuration

Key settings in `docusaurus.config.js`:

```javascript
url: 'https://surajsrivastav.com'        // Your site URL
baseUrl: '/'                              // Base path (/ for root)
organizationName: 'surajsrivastav'       // GitHub username
projectName: 'suraj-site'                // Repository name
deploymentBranch: 'gh-pages'             // Deployment branch
```

## Customization

### Site Metadata

Edit `docusaurus.config.js`:
- `title`: Site title
- `tagline`: Site tagline
- `favicon`: Favicon path
- `url`, `baseUrl`: Deployment settings

### Navbar

Edit the navbar items in `docusaurus.config.js` under `themeConfig.navbar.items`.

### Footer

Edit footer links in `docusaurus.config.js` under `themeConfig.footer.links`.

### Theme Colors

Edit CSS variables in `src/css/custom.css`.

## Performance

- Fast static site generation
- Optimized images and assets
- Sitemap for SEO
- No heavy JavaScript dependencies

## SEO

- Automatically generated sitemap at `/sitemap.xml`
- Proper meta tags on all pages
- Open Graph support via Docusaurus
- Fast page loads for better Core Web Vitals

## Writing Tips

### Blog Posts

- Write in Markdown
- Use clear, concise headings
- Include code examples with syntax highlighting
- Add relevant tags for discoverability
- Keep posts focused on a single topic

### Technical Writing

- Lead with the problem
- Explain why it matters
- Show the solution
- Include real examples
- Conclude with key takeaways

## Troubleshooting

### Port already in use

```bash
# Use a different port
npm start -- --port 3001
```

### Build errors

```bash
# Clear cache and rebuild
npm run clear
npm run build
```

### Deployment issues

1. Ensure `gh-pages` branch exists
2. Check GitHub Pages settings in repo
3. Verify `deploymentBranch` in config matches
4. Check that custom domain CNAME record is set

## License

MIT

## Contact

- Email: suraj.ssrivastav@gmail.com
- GitHub: [@surajsrivastav](https://github.com/surajsrivastav)
- LinkedIn: [surajsrivastav](https://linkedin.com/in/surajsrivastav)
- Twitter: [@surajsrivastav](https://twitter.com/surajsrivastav)