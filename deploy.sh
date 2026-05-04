#!/bin/bash
# Deployment script for GitHub Pages

set -e

echo "🚀 Deploying to GitHub Pages..."
echo ""

# Check if git is clean
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  You have uncommitted changes. Commit them first:"
    echo "   git add . && git commit -m 'Your message'"
    exit 1
fi

# Ensure we're on main branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
    echo "⚠️  You're on branch '$CURRENT_BRANCH'. Switch to main first:"
    echo "   git checkout main"
    exit 1
fi

# Step 1: Clear and build
echo "📦 Building site..."
npm run clear > /dev/null 2>&1
npm run build

# Step 2: Deploy
echo ""
echo "📤 Deploying to gh-pages branch..."
npm run deploy

# Step 3: Verify
echo ""
echo "✅ Deployment complete!"
echo ""
echo "🌐 Your site will be live at:"
echo "   https://surajsrivastav.com"
echo ""
echo "⏱️  DNS propagation may take 5-30 minutes"
echo "🔗 Check deployment status:"
echo "   https://github.com/surajsrivastav/suraj-site/actions"
