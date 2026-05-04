# GitHub Pages Deployment Setup

Complete guide to deploy your Docusaurus site to GitHub Pages with custom domain.

## Prerequisites

✅ GitHub repository at `https://github.com/surajsrivastav/suraj-site`
✅ Git configured locally
✅ Node.js and npm installed
✅ Custom domain: `surajsrivastav.com`

## Current Configuration

Your `docusaurus.config.js` is already configured for GitHub Pages:

```javascript
url: 'https://surajsrivastav.com',
baseUrl: '/',
organizationName: 'surajsrivastav',
projectName: 'suraj-site',
deploymentBranch: 'gh-pages',
```

This tells Docusaurus to:
- Build for your custom domain
- Deploy to the `gh-pages` branch
- Use `/` as the base URL (root domain)

## Step 1: Enable GitHub Pages in Repository Settings

1. Go to [github.com/surajsrivastav/suraj-site/settings](https://github.com/surajsrivastav/suraj-site/settings)
2. Scroll to **"Pages"** (left sidebar)
3. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `gh-pages` and `/root` folder
4. Under "Custom domain": Enter `surajsrivastav.com`
5. Check "Enforce HTTPS"
6. Click Save

This tells GitHub to serve your site from the `gh-pages` branch.

## Step 2: Configure Custom Domain DNS

Your domain registrar needs to point to GitHub's servers.

### Option A: Using CNAME (Recommended for most registrars)

1. Go to your domain registrar (e.g., Namecheap, GoDaddy, Route53)
2. Find DNS settings
3. Add a CNAME record:
   - **Name**: `surajsrivastav.com` (or `www` for www subdomain)
   - **Value**: `surajsrivastav.github.io`
   - **TTL**: 3600 (or default)

4. If using `www`:
   - Add CNAME: `www` → `surajsrivastav.github.io`

### Option B: Using A Records (Apex Domain)

For the root domain `surajsrivastav.com` (not www), use GitHub's A records:

1. Go to your domain registrar DNS settings
2. Add A records pointing to GitHub:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

3. For `www` subdomain, add CNAME:
   - `www` → `surajsrivastav.github.io`

## Step 3: Verify CNAME File

The CNAME file must exist in the `static/` directory:

```bash
cat static/CNAME
```

Should output:
```
surajsrivastav.com
```

If missing, create it:
```bash
echo "surajsrivastav.com" > static/CNAME
```

## Step 4: Deploy to GitHub Pages

### First Time Deployment

Build and deploy:

```bash
npm run deploy
```

This command:
1. Builds the static site (`npm run build`)
2. Creates/updates the `gh-pages` branch
3. Pushes to GitHub
4. GitHub Pages automatically serves the site

### Verify Deployment

Check that the `gh-pages` branch was created:

```bash
git branch -a
```

Should show:
```
  gh-pages
* main
```

## Step 5: DNS Propagation

DNS changes take 5-30 minutes to propagate globally.

### Check DNS Status

```bash
# Check CNAME record
nslookup surajsrivastav.com

# Or using dig
dig surajsrivastav.com

# Should resolve to: surajsrivastav.github.io
```

### Monitor Deployment

1. Go to repository Settings → Pages
2. Look for green checkmark: "Your site is live at https://surajsrivastav.com"
3. Check GitHub Actions tab to see deployment progress

## Step 6: Enforce HTTPS

In GitHub repository settings → Pages:
- ✅ Check "Enforce HTTPS"

This redirects all HTTP traffic to HTTPS.

## Troubleshooting

### Site not live yet

Wait 2-3 minutes after first deployment. GitHub Actions needs to build and deploy.

Check deployment status:
```bash
# Push changes
git push origin main

# Deploy
npm run deploy

# Check github.com/surajsrivastav/suraj-site/actions
```

### Custom domain not working

**Issue**: Browser says "This site can't be reached"

**Solutions**:
1. Verify CNAME file exists: `cat static/CNAME`
2. Check DNS records are correct: `nslookup surajsrivastav.com`
3. Wait for DNS propagation (can take up to 48 hours)
4. Clear browser cache and try again
5. Try from different network/device

### DNS pointing to wrong server

**Issue**: Domain resolves but shows wrong content

**Solutions**:
1. Verify CNAME points to `surajsrivastav.github.io`
2. Check A records point to GitHub IPs (if using apex domain)
3. Wait for TTL expiration (usually 3600 seconds = 1 hour)
4. Verify in GitHub Settings → Pages that custom domain is set

### HTTPS not working

**Issue**: Site works on HTTP but not HTTPS

**Solutions**:
1. Enable "Enforce HTTPS" in GitHub Settings → Pages
2. Wait 5-10 minutes for certificate to generate
3. Check in browser: `https://surajsrivastav.com`

### gh-pages branch not created

**Issue**: `npm run deploy` fails with "gh-pages branch not found"

**Solutions**:
1. Ensure you have push permission to repository
2. Check remote URL: `git remote -v`
3. Try creating branch manually:
   ```bash
   git checkout --orphan gh-pages
   git reset --hard
   git commit --allow-empty -m "Initial gh-pages branch"
   git push origin gh-pages
   git checkout main
   ```
4. Then try `npm run deploy` again

## Regular Deployment Workflow

After making changes:

```bash
# 1. Commit changes
git add .
git commit -m "Update content"

# 2. Push to main
git push origin main

# 3. Deploy to GitHub Pages
npm run deploy

# Done! Site updates automatically
```

## Automated Deployment (Optional)

You can set up GitHub Actions to auto-deploy on every push to main:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - run: npm install
      
      - run: npm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          cname: surajsrivastav.com
```

This auto-deploys every time you push to main.

## Verify Live Site

Once deployed, test:

```bash
# Test custom domain
curl -I https://surajsrivastav.com

# Should return 200 OK
```

Or just visit: https://surajsrivastav.com

## Key Files

| File | Purpose |
|------|---------|
| `docusaurus.config.js` | Configured for GitHub Pages |
| `static/CNAME` | Custom domain configuration |
| `.github/workflows/` | (Optional) CI/CD automation |

## Support

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Docusaurus Deployment**: https://docusaurus.io/docs/deployment
- **DNS Issues**: Contact your domain registrar
- **GitHub Support**: https://support.github.com

## Checklist

Before considering deployment complete:

- [ ] Repository Settings → Pages shows custom domain
- [ ] CNAME file exists in `static/`
- [ ] DNS records configured at domain registrar
- [ ] `npm run deploy` runs successfully
- [ ] `gh-pages` branch exists in repository
- [ ] GitHub Actions shows green checkmark
- [ ] `https://surajsrivastav.com` is live
- [ ] HTTPS works and certificate is valid
- [ ] Content displays correctly

## Next Steps

1. Run `npm run deploy` to deploy
2. Monitor DNS propagation (5-30 minutes)
3. Visit https://surajsrivastav.com
4. Set up automatic deployments (optional)
5. Start writing posts and pushing updates
