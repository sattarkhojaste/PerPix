# PerPix.Design Portfolio - Deployment Guide

## 🎯 Your Portfolio URL: **PerPix.Design**

This guide will help you deploy your portfolio to your custom domain.

---

## Step 1: Purchase Your Domain

### Option A: Namecheap (Recommended)
1. Go to [Namecheap.com](https://www.namecheap.com)
2. Search for "perpix.design"
3. Add to cart and complete purchase ($9-15/year)

### Option B: GoDaddy
1. Go to [GoDaddy.com](https://www.godaddy.com)
2. Search for "perpix.design"
3. Complete purchase

### Option C: Google Domains / Cloudflare
- Similar process, competitive pricing

---

## Step 2: Deploy Your Portfolio (FREE)

### 🚀 Recommended: Deploy to Vercel (FREE)

#### Prerequisites:
- GitHub account (free)
- Vercel account (free)

#### Deployment Steps:

1. **Create GitHub Repository:**
   - Go to [GitHub.com](https://github.com)
   - Click "New Repository"
   - Name: `perpix-portfolio`
   - Set to Public or Private
   - Click "Create Repository"

2. **Upload Your Code to GitHub:**
   ```bash
   # In your project folder, run:
   git init
   git add .
   git commit -m "Initial portfolio deployment"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/perpix-portfolio.git
   git push -u origin main
   ```

3. **Deploy to Vercel:**
   - Go to [Vercel.com](https://vercel.com)
   - Click "Sign Up" and connect with GitHub
   - Click "Import Project"
   - Select your `perpix-portfolio` repository
   - Vercel will auto-detect React/Vite settings
   - Click "Deploy"
   - Wait 2-3 minutes for deployment to complete ✅

4. **You'll Get a Free URL:**
   - `perpix-portfolio.vercel.app` (temporary)

---

## Step 3: Connect Your Custom Domain

### In Vercel:

1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Enter: `perpix.design`
4. Click "Add"

### Vercel Will Provide DNS Records:

#### For Namecheap/GoDaddy:
1. Log into your domain registrar
2. Go to DNS Management
3. Add these records:

**A Record:**
- Type: `A`
- Host: `@`
- Value: `76.76.21.21` (Vercel's IP)
- TTL: Automatic

**CNAME Record:**
- Type: `CNAME`
- Host: `www`
- Value: `cname.vercel-dns.com`
- TTL: Automatic

4. Save changes
5. Wait 10-60 minutes for DNS propagation

### Verify Connection:
- Go back to Vercel
- Click "Verify" next to your domain
- Once verified, your site is live at **PerPix.Design**! 🎉

---

## Step 4: Enable HTTPS

Vercel automatically provisions SSL certificates (FREE)
- Your site will be accessible via `https://perpix.design`
- This happens automatically after domain verification

---

## Alternative: Deploy to Netlify

1. Go to [Netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "Add new site" → "Import existing project"
4. Connect to your GitHub repository
5. Deploy settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"
7. Add custom domain in Settings → Domain Management

---

## 📦 Build Your Portfolio for Production

Before deployment, ensure your code is production-ready:

```bash
# Install dependencies
npm install

# Test build locally
npm run build

# Preview production build
npm run preview
```

---

## 🔧 Environment Setup

### Required Files:

**package.json** - Already configured ✅
**vite.config.ts** - Already configured ✅

### Build Output:
- Builds to `/dist` folder
- This is what gets deployed

---

## 📊 Post-Deployment Checklist

After your site is live:

- [ ] Test all navigation links
- [ ] Verify all project images load
- [ ] Test mobile responsiveness
- [ ] Check contact form/links work
- [ ] Test on multiple browsers (Chrome, Safari, Firefox)
- [ ] Verify all project detail pages work
- [ ] Test image lightbox functionality
- [ ] Check loading speed (use [PageSpeed Insights](https://pagespeed.web.dev))

---

## 🎨 Update Your Branding

Your portfolio is branded as **PerPix.Design**:

- ✅ Footer updated with your name
- ✅ Ready for domain connection
- ✅ Professional meta tags configured

---

## 📱 Share Your Portfolio

Once live, share your portfolio URL:

**Resume:** https://perpix.design  
**LinkedIn:** Add to "Featured" section and profile URL  
**Business Cards:** Print PerPix.Design  
**Email Signature:** Include clickable link  
**Social Media Bio:** Instagram, Twitter, Behance, Dribbble  

---

## 🆘 Troubleshooting

### Domain Not Working?
- Check DNS settings are correct
- Wait 1-2 hours for DNS propagation
- Clear browser cache (Ctrl+Shift+R)

### Build Errors?
- Run `npm install` to ensure dependencies are installed
- Check Node.js version (should be 18+)
- Review build logs in Vercel/Netlify dashboard

### Images Not Loading?
- Verify all image imports are correct
- Check image paths in production build
- Ensure Figma assets are properly exported

---

## 💰 Cost Breakdown

**FREE:**
- ✅ Hosting (Vercel/Netlify)
- ✅ SSL Certificate (HTTPS)
- ✅ Unlimited bandwidth
- ✅ Automatic deployments

**PAID:**
- Domain registration: $9-15/year (perpix.design)
- That's it! 🎉

---

## 🚀 Next Steps

1. Purchase `perpix.design` domain
2. Deploy to Vercel (takes 5 minutes)
3. Connect custom domain (takes 1 hour for DNS)
4. Share your new portfolio URL everywhere!

**Need help?** Feel free to ask questions during deployment.

---

**Your Portfolio: PerPix.Design** ✨  
Built with React, Tailwind CSS, and Motion
