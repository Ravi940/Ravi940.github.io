# GitHub Pages Deployment Guide

This portfolio website is ready to be deployed to GitHub Pages. Follow these steps to get your site live:

## Prerequisites
- A GitHub account
- Git installed on your computer
- Node.js and pnpm installed

## Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Create a new repository named `<your-username>.github.io` (replace `<your-username>` with your actual GitHub username)
   - This is the special naming convention for GitHub Pages personal sites
   - If you prefer a different name, use `portfolio-website` and enable GitHub Pages from the repository settings later
3. Do NOT initialize with README, .gitignore, or license (we'll push our existing code)
4. Click "Create repository"

## Step 2: Initialize Git and Push Code

In your project directory (`/home/ubuntu/portfolio-website`), run:

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio website commit"

# Add remote repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<your-username>.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Build for Production

```bash
# Install dependencies (if not already done)
pnpm install

# Build the project
pnpm run build
```

This creates a `dist/public` folder with all static files ready for deployment.

## Step 4: Deploy to GitHub Pages

### Option A: Using GitHub Actions (Recommended)

Create a file `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install pnpm
        run: npm install -g pnpm
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm run build
      
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist/public
          cname: your-domain.com  # Optional: if using custom domain
```

Then push this file to GitHub, and the site will automatically deploy!

### Option B: Manual Deployment

1. Build the project: `pnpm run build`
2. Create a `gh-pages` branch: `git checkout --orphan gh-pages`
3. Copy the built files: `cp -r dist/public/* .`
4. Commit and push:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

## Step 5: Enable GitHub Pages

1. Go to your repository settings
2. Scroll to "GitHub Pages" section
3. Set "Source" to `gh-pages` branch (if using Option B) or `main` branch with `/root` folder (if using Option A)
4. Your site will be available at `https://<your-username>.github.io`

## Step 6: Custom Domain (Optional)

If you have a custom domain:

1. In repository settings → GitHub Pages, add your domain in "Custom domain"
2. Update your domain's DNS records to point to GitHub Pages:
   - Add an `A` record pointing to `185.199.108.153`
   - Or add a `CNAME` record pointing to `<your-username>.github.io`
3. GitHub will automatically create a `CNAME` file in your repository

## Troubleshooting

**Site not showing up?**
- Wait 5-10 minutes for GitHub to process the deployment
- Check the "Actions" tab in your repository for build errors
- Verify the branch and folder settings in GitHub Pages settings

**Build fails?**
- Ensure all dependencies are installed: `pnpm install`
- Check Node.js version: `node --version` (should be 16+)
- Review error messages in the GitHub Actions logs

**Images not loading?**
- All images are stored in `/manus-storage/` and will work automatically
- No local image paths are used

## Updating Your Site

Every time you push changes to the `main` branch (if using GitHub Actions), the site will automatically rebuild and deploy. Just:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## Customization

Before deploying, update these files with your information:

- `client/index.html` - Change the title and meta tags
- `client/src/components/Header.tsx` - Update navigation links
- `client/src/components/ContactSection.tsx` - Add your real contact information
- `client/src/components/Footer.tsx` - Update your name and year
- `client/src/components/HeroSection.tsx` - Customize your headline and description

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Build Documentation](https://vitejs.dev/guide/build.html)
- [React Documentation](https://react.dev)

Good luck with your portfolio! 🚀
