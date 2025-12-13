# Deployment Guide: Connecting Kasil to kasil.us (GoDaddy)

This guide walks you through deploying your Kasil website to Vercel and connecting it to your GoDaddy domain **kasil.us**.

## Overview

1. Push code to GitHub
2. Deploy to Vercel (free hosting)
3. Configure GoDaddy DNS to point to Vercel
4. Site goes live at kasil.us

---

## Step 1: Push Code to GitHub

### Option A: Using Git (Recommended)

```bash
# Navigate to your project
cd kasil-web

# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial Kasil website with Ferrari-inspired UX"

# Create a new repository on GitHub.com (go to github.com/new)
# Name it: kasil-website
# Then connect and push:

git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/kasil-website.git
git push -u origin main
```

### Option B: Upload Manually to GitHub

1. Go to [github.com/new](https://github.com/new)
2. Create repository named `kasil-website`
3. Use GitHub's upload feature to upload the `kasil-web` folder

---

## Step 2: Deploy to Vercel

### 2.1 Sign Up for Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. **Use "Continue with GitHub"** (easiest option)
4. Authorize Vercel to access your repositories

### 2.2 Import Your Project

1. Click **"Add New..."** → **"Project"**
2. Find your `kasil-website` repository
3. Click **"Import"**

### 2.3 Configure Build Settings

Vercel should auto-detect Vite. Verify these settings:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### 2.4 Deploy

1. Click **"Deploy"**
2. Wait 1-2 minutes for deployment
3. You'll get a URL like: `https://kasil-website.vercel.app`

**Test your site at this URL before proceeding!**

---

## Step 3: Connect Your GoDaddy Domain (kasil.us)

### 3.1 Add Domain to Vercel

1. In Vercel dashboard, go to your project
2. Click **"Settings"** → **"Domains"**
3. Add domain: `kasil.us`
4. Add domain: `www.kasil.us` (recommended)
5. Vercel will show you DNS records to configure

**Important:** Note down the DNS records Vercel provides. They'll look like:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3.2 Configure GoDaddy DNS

1. Log in to [GoDaddy.com](https://www.godaddy.com)
2. Go to **"My Products"** → **"Domains"**
3. Find **kasil.us** and click **"DNS"** or **"Manage DNS"**

### 3.3 Update DNS Records

**Remove existing records:**
1. Delete any existing A records pointing to `@`
2. Delete any existing CNAME records for `www`

**Add Vercel records:**

#### For Root Domain (kasil.us):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600 seconds (or default)
```

#### For WWW Subdomain (www.kasil.us):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600 seconds (or default)
```

**Note:** Use the exact IP and CNAME values Vercel provided in Step 3.1

### 3.4 Save Changes

1. Click **"Save"** on each record
2. Changes may take 5-60 minutes to propagate
3. You can check progress at [whatsmydns.net](https://www.whatsmydns.net)

---

## Step 4: Verify Deployment

### Test Your Domain

After DNS propagation (usually 10-30 minutes):

1. Visit `https://kasil.us` in incognito/private browser
2. Visit `https://www.kasil.us`
3. Both should show your new Kasil website

### SSL Certificate

Vercel automatically provides free SSL certificates. Your site will be:
- ✅ Secured with HTTPS
- ✅ Fast (global CDN)
- ✅ Automatic deployments on git push

---

## Step 5: Future Updates

### Update Your Website

Whenever you make changes:

```bash
# Make your changes in kasil-web/

# Commit changes
git add .
git commit -m "Updated hero video and project images"

# Push to GitHub
git push

# Vercel automatically rebuilds and deploys!
# Your site updates in 1-2 minutes
```

---

## Troubleshooting

### Domain Not Working After 1 Hour

**Check DNS Settings:**
```bash
# Check if DNS is propagating
nslookup kasil.us
```

Should return Vercel's IP address (76.76.21.21)

**Common Issues:**
1. **Wrong DNS records** - Double-check A and CNAME values
2. **Old DNS cached** - Clear your browser cache and DNS cache
3. **Privacy protection** - Ensure domain isn't locked in GoDaddy

### Site Shows "Domain Not Configured"

1. Go to Vercel → Settings → Domains
2. Ensure `kasil.us` and `www.kasil.us` are added
3. Click "Refresh" on each domain
4. Wait for SSL certificate generation

### 404 Errors on Routes

This shouldn't happen with Vite + Vercel, but if it does:
1. Check that `vercel.json` exists in your project root
2. Ensure it has the correct framework configuration

---

## Alternative: Quick Deploy via Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI
npm i -g vercel

# Navigate to project
cd kasil-web

# Deploy
vercel

# Add domain
vercel domains add kasil.us
```

---

## Cost

**Vercel:**
- ✅ Free for personal/commercial use
- ✅ Unlimited bandwidth
- ✅ Automatic SSL
- ✅ Global CDN

**GoDaddy:**
- You already own the domain
- No additional hosting costs needed

---

## Summary Checklist

- [ ] Code pushed to GitHub
- [ ] Project imported to Vercel
- [ ] Site deployed and tested on Vercel URL
- [ ] Domain added in Vercel settings
- [ ] DNS records copied from Vercel
- [ ] A record updated in GoDaddy DNS
- [ ] CNAME record updated in GoDaddy DNS
- [ ] Waited 10-60 minutes for DNS propagation
- [ ] Tested kasil.us in browser
- [ ] Tested www.kasil.us in browser
- [ ] HTTPS working automatically

---

## Next Steps After Deployment

1. **Add Media Files:**
   - Upload videos to `public/videos/`
   - Upload images to `public/images/`
   - Commit and push to auto-deploy

2. **Monitor Analytics:**
   - Vercel provides built-in analytics
   - Add Google Analytics if needed

3. **Custom Email:**
   - Set up email@kasil.us via GoDaddy email hosting
   - Or use Google Workspace for professional email

4. **Performance:**
   - Your site is already optimized
   - Vercel serves from global CDN
   - Automatic image optimization available

---

## Support

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **GoDaddy DNS Help:** [godaddy.com/help/dns](https://www.godaddy.com/help/dns-management-19228)
- **Check DNS Propagation:** [whatsmydns.net](https://www.whatsmydns.net)

Your Ferrari-inspired Kasil website will be live on kasil.us! 🚀
