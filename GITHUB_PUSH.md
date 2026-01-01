# Push Code to GitHub

Your repository is set up! To push your code, you need to authenticate with GitHub.

## Option 1: Personal Access Token (Recommended)

### Step 1: Create a Personal Access Token

1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name (e.g., "VMI Website Deployment")
4. Select scopes: Check **"repo"** (this gives full repository access)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)

### Step 2: Push Using the Token

Run this command in your terminal:

```bash
cd "/Users/g/Desktop/website vmi /test"
git push -u origin main
```

When prompted:
- **Username**: `guramritart-blip`
- **Password**: Paste your Personal Access Token (not your GitHub password)

## Option 2: Use GitHub Desktop

1. Download GitHub Desktop: https://desktop.github.com
2. Sign in with your GitHub account
3. File → Add Local Repository → Select your project folder
4. Click "Publish repository" button

## Option 3: Use GitHub CLI

```bash
# Install GitHub CLI (if not installed)
brew install gh

# Authenticate
gh auth login

# Push
git push -u origin main
```

## After Pushing

Once your code is on GitHub, you can deploy to Vercel:

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "Add New..." → "Project"
4. Import `vmi-collective-website` repository
5. Click "Deploy"

Your site will be live in 1-2 minutes!


