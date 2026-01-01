# Deployment Guide for VMI Collective Website

## Prerequisites
✅ Git repository initialized
✅ All files committed
✅ Build verified (npm run build successful)

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository name: `vmi-collective-website` (or your preferred name)
4. Description: "VMI Collective - The Enabling Bridge between Skills, Markets & Opportunities"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Push Code to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd "/Users/g/Desktop/website vmi /test"
git remote add origin https://github.com/YOUR_USERNAME/vmi-collective-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in (use GitHub to sign in)
2. Click "Add New..." → "Project"
3. Import your GitHub repository (`vmi-collective-website`)
4. Vercel will auto-detect Next.js settings:
   - Framework Preset: **Next.js**
   - Build Command: `next build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)
5. Click "Deploy"
6. Wait 1-2 minutes for deployment to complete
7. Your site will be live at: `https://your-project-name.vercel.app`

### Option B: Via Vercel CLI

```bash
npm i -g vercel
cd "/Users/g/Desktop/website vmi /test"
vercel
```

Follow the prompts to deploy.

## Step 4: Configure Custom Domain (Optional)

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain (e.g., `vmi-collective.com`)
3. Follow DNS configuration instructions
4. Vercel will automatically provision SSL certificate

## Step 5: Environment Variables (If Needed)

If you add form submission or other features requiring API keys:

1. Go to Vercel dashboard → Your Project → Settings → Environment Variables
2. Add variables (e.g., `RESEND_API_KEY`, `EMAIL_FROM`, etc.)
3. Redeploy for changes to take effect

## Post-Deployment Checklist

- [ ] Visit your deployed site
- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Test responsive design on mobile
- [ ] Check all pages load (Home, Articles, Divisions)
- [ ] Verify footer links work
- [ ] Test contact form (if implemented)

## Automatic Deployments

Once connected, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Run builds automatically

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
- Vercel Support: support@vercel.com


