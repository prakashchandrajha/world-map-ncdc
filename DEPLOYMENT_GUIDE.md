# Angular SPA Deployment Guide

## Overview
This guide provides instructions for deploying the Angular application with proper server-side routing support across different server environments.

## Changes Made

### 1. Lazy Loading Implementation
- ✅ Converted all route components to use `loadComponent` for lazy loading
- ✅ Added proper titles for each route for better SEO
- ✅ Added wildcard route (`**`) for handling 404 errors

### 2. Router Configuration
- ✅ Enhanced router configuration with proper navigation blocking
- ✅ Added scroll position restoration
- ✅ Configured same URL navigation handling

### 3. Server-Side Routing Files
- ✅ Created `.htaccess` for Apache servers
- ✅ Created `web.config` for IIS servers
- ✅ Created `_redirects` for Netlify deployment
- ✅ Created `nginx.conf` for Nginx servers

## Nginx Server Configuration (Your Current Setup)

Since you're using Nginx, you need to update your Nginx configuration. Here's what you need to do:

### Step 1: Update Your Nginx Site Configuration

Based on your deployment script, your server details are:
- **Server**: ica5.gn.apc.org
- **Document Root**: /var/www/html
- **User**: www-data

Edit your Nginx site configuration file at `/etc/nginx/sites-available/default` or create a new one at `/etc/nginx/sites-available/cooperative-culture-heritage`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name ica5.gn.apc.org;
    root /var/www/html;
    index index.html;

    # THIS IS THE KEY FIX FOR YOUR 404 ERRORS
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Handle assets directory
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot|webp|avif|bmp|tiff|tif)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }

    # Handle i18n files
    location ~* /assets/i18n/.*\.json$ {
        expires 1h;
        add_header Cache-Control "public";
        try_files $uri =404;
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;

    # Error and access logs
    error_log /var/log/nginx/cooperative-culture-heritage_error.log;
    access_log /var/log/nginx/cooperative-culture-heritage_access.log;
}
```

### Step 2: Test and Reload Nginx

1. Test your Nginx configuration:
```bash
sudo nginx -t
```

2. If the test passes, reload Nginx:
```bash
sudo systemctl reload nginx
```

### Step 3: Build and Deploy Your Angular App

You already have an automated deployment script! Simply run:

```bash
build-deploy-prod-cch.bat
```

This script will:
1. Build your Angular application (`npm run build`)
2. Connect to your server (ica5.gn.apc.org)
3. Clean the old files from `/var/www/html`
4. Upload the new build files
5. Fix permissions (chown to www-data:www-data and chmod 755)

**Manual deployment alternative:**
1. Build your Angular application:
```bash
npm run build
```

2. The build output will be in: `dist\cooperative-culture-heritage\browser`

3. Upload to your server:
```bash
scp -r dist\cooperative-culture-heritage\browser\* root@ica5.gn.apc.org:/var/www/html/
```

## Key Points for Nginx Configuration

The most important line in the Nginx configuration is:
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

This tells Nginx to:
1. First, try to serve the requested file (`$uri`)
2. If that fails, try to serve it as a directory (`$uri/`)
3. If that also fails, serve the `index.html` file

This ensures that all Angular routes are handled by the Angular router instead of returning a 404 error.

## Alternative Nginx Configuration (Minimal)

If you want a minimal configuration, you can use this simpler version:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/your/dist/folder;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## Troubleshooting

### If you're still getting 404 errors:

1. **Check the root path**: Make sure the `root` directive in your Nginx config points to the correct directory where your built Angular files are located.

2. **Check file permissions**: Ensure Nginx has read permissions for your files:
```bash
sudo chown -R www-data:www-data /path/to/your/dist/folder
sudo chmod -R 755 /path/to/your/dist/folder
```

3. **Check Nginx error logs**:
```bash
sudo tail -f /var/log/nginx/error.log
```

4. **Verify the build output**: Make sure your `index.html` file exists in the root directory specified in Nginx.

## Testing

After implementing the changes:

1. Navigate to your website's home page
2. Navigate to any route (e.g., `/about`, `/list`, etc.)
3. Refresh the page - it should load correctly instead of showing a 404 error
4. Test direct URL access by typing the full URL in the browser address bar

## Performance Benefits

The implemented lazy loading will provide:
- ✅ Faster initial page load times
- ✅ Reduced bundle size for initial load
- ✅ Components loaded on-demand
- ✅ Better user experience with progressive loading

## SEO Benefits

- ✅ Proper page titles for each route
- ✅ Server-side routing support
- ✅ Clean URLs without hash fragments
- ✅ Better crawlability for search engines