# Deployment Guide for Shigari Mobile Shop

This guide covers deployment options for the Shigari Mobile Shop website.

## Option 1: GitHub Pages (Recommended for simplicity)

### Prerequisites
- GitHub account
- Git installed on your machine

### Steps

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Shigari Mobile Shop website"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/yourusername/shigari-mobile-shop.git
   git branch -M main
   git push -u origin main
   ```

3. **Update vite.config.ts** (if using subdirectory like `yourusername.github.io/shigari-mobile-shop`)
   ```typescript
   export default defineConfig({
     base: '/shigari-mobile-shop/',  // Change this
     // ... rest of config
   })
   ```
   Skip this if using custom domain or `yourusername.github.io`

4. **Enable GitHub Pages**
   - Go to Repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose Main branch, /root folder
   - Save

5. **Automatic Deployment**
   - Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Build and Deploy

   on:
     push:
       branches: [ main ]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build
         
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

Your site will be live at `https://yourusername.github.io/shigari-mobile-shop/`

## Option 2: Netlify (Recommended for features)

### Steps

1. **Install Netlify CLI** (optional)
   ```bash
   npm install -g netlify-cli
   ```

2. **Connect to Netlify**
   - Visit https://netlify.com
   - Click "Connect to Git"
   - Authorize GitHub
   - Select the repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Deploy**
   ```bash
   # Or manually just push to GitHub and Netlify deploys automatically
   netlify deploy --prod --dir=dist
   ```

Your site will be live at `https://yoursite.netlify.app/`

## Option 3: Vercel (Best for performance)

### Steps

1. **Push to GitHub** (required)
   ```bash
   git push
   ```

2. **Connect to Vercel**
   - Visit https://vercel.com/import
   - Import your GitHub repository

3. **Vercel Auto-detects Vite** and configures:
   - Build command: `npm run build`
   - Output directory: `dist`

4. **Deploy**
   - Automatic on every push to main

Your site will be live at `https://projectname.vercel.app/`

## Option 4: Custom VPS/Hosting

### Using Node.js Server

1. **Install Node.js on server**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

2. **Clone and Build**
   ```bash
   git clone https://github.com/yourusername/shigari-mobile-shop.git
   cd shigari-mobile-shop
   npm install
   npm run build
   ```

3. **Serve with Nginx**
   ```bash
   # Install Nginx
   sudo apt-get install nginx
   
   # Create config
   sudo nano /etc/nginx/sites-available/default
   ```
   
   Add:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       root /path/to/dist;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
       
       # Cache static assets
       location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

4. **Enable HTTPS with Certbot**
   ```bash
   sudo certbot --nginx -d yourdomain.com
   ```

## Option 5: Docker (For containerization)

### Dockerfile
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

### Deploy
```bash
docker build -t shigari-mobile-shop .
docker run -p 3000:3000 shigari-mobile-shop
```

## Recommended Deployment Setup

**For Best Results:**
1. **Performance**: Vercel or Netlify
2. **Simplicity**: GitHub Pages
3. **Full Control**: VPS with Nginx
4. **Scalability**: Docker + Cloud (AWS, Google Cloud, Azure)

## Monitoring & Analytics

Add to your website (e.g., after build):

### Google Analytics
```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## SEO Optimization for Search Engines

1. **Submit Sitemap** (when deployed)
   - Google Search Console
   - Bing Webmaster Tools

2. **Set Canonical URLs**
   - Add to index.html meta tags

3. **Mobile Testing**
   - Use Google Mobile-Friendly Test
   - Test on actual devices

## Custom Domain Setup

1. **Purchase Domain**
   - GoDaddy, Namecheap, etc.

2. **Netlify/GitHub Pages**
   - Add domain in settings
   - Update DNS records (provided by platform)

3. **Nginx VPS**
   - Point DNS A record to server IP
   - Use Certbot for SSL

## Performance Checklist

- [ ] Build size < 100KB gzipped
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1s
- [ ] Time to Interactive < 2s
- [ ] Images optimized and lazy-loaded
- [ ] Minified CSS and JavaScript
- [ ] CDN enabled (Netlify, Vercel provide free CDN)
- [ ] Caching headers configured

## Troubleshooting

### 404 on refresh
- Ensure SPA routing is configured (use `try_files` in Nginx)
- GitHub Pages: add `_config.yml` with `theme: jekyll-theme-minimal`

### Slow loading
- Check image sizes (use WebP format)
- Enable gzip compression
- Use a CDN

### WhatsApp links not working
- Verify phone number format: `+92XXXXXXXXXXX`
- Test on different devices

## Support

For questions contact hosting provider support or refer to their documentation.

---

**Last Updated**: February 2026
