@echo off
setlocal enabledelayedexpansion

REM ===============================
REM Configuration
REM ===============================
set REMOTE_USER=root
set REMOTE_HOST=ica5.gn.apc.org
set REMOTE_PATH=/var/www/html
set LOCAL_BUILD_PATH=dist\cooperative-culture-heritage

echo 🚀 Building app...
call npm run build

if not exist "%LOCAL_BUILD_PATH%" (
    echo ❌ Build directory not found: %LOCAL_BUILD_PATH%
    exit /b 1
)

echo 🔗 Connecting to %REMOTE_HOST% and cleaning old files...
ssh %REMOTE_USER%@%REMOTE_HOST% "rm -rf %REMOTE_PATH% && mkdir -p %REMOTE_PATH%"

echo 📤 Uploading new build files to server...
scp -r %LOCAL_BUILD_PATH%\* %REMOTE_USER%@%REMOTE_HOST%:%REMOTE_PATH%/

if %errorlevel% neq 0 (
    echo ❌ Deployment failed during upload.
    exit /b %errorlevel%
)

echo 🔧 Fixing permissions on server...
ssh %REMOTE_USER%@%REMOTE_HOST% "chown -R www-data:www-data %REMOTE_PATH% && chmod -R 755 %REMOTE_PATH%"

echo 🔧 Creating nginx config file...
(
echo server {
echo     listen 443 ssl http2;
echo     server_name culturalheritage.coop www.culturalheritage.coop;
echo.
echo     root /var/www/html/browser;
echo     index index.html;
echo.
echo     ssl_certificate /etc/letsencrypt/live/culturalheritage.coop/fullchain.pem;
echo     ssl_certificate_key /etc/letsencrypt/live/culturalheritage.coop/privkey.pem;
echo.
echo     # Serve static files directly
echo     location / {
echo         try_files $uri $uri/ /index.html;
echo     }
echo.
echo     # Cache static assets
echo     location ~* \.(js^|css^|png^|jpg^|jpeg^|gif^|ico^|svg^|woff2?^|ttf^|eot^)$ {
echo         expires 1y;
echo         add_header Cache-Control "public, immutable";
echo     }
echo.
echo     # Security headers
echo     add_header X-Content-Type-Options nosniff;
echo     add_header X-Frame-Options DENY;
echo     add_header X-XSS-Protection "1; mode=block";
echo }
echo.
echo server {
echo     server_name culturalheritage.coop www.culturalheritage.coop;
echo     listen 80;
echo     return 301 https://$host$request_uri;
echo }
) > temp-nginx.conf

echo 🔧 Uploading nginx configuration...
scp temp-nginx.conf %REMOTE_USER%@%REMOTE_HOST%:/etc/nginx/sites-available/culturalheritage.coop.conf

if %errorlevel% neq 0 (
    echo ❌ Failed to upload nginx configuration.
    del temp-nginx.conf
    exit /b %errorlevel%
)

echo 🔧 Cleaning up temporary file...
del temp-nginx.conf

echo 🔧 Enabling SSL site and disabling default...
ssh %REMOTE_USER%@%REMOTE_HOST% "ln -sf /etc/nginx/sites-available/culturalheritage.coop.conf /etc/nginx/sites-enabled/ && rm -f /etc/nginx/sites-enabled/default"

echo ✅ Testing Nginx configuration...
ssh %REMOTE_USER%@%REMOTE_HOST% "nginx -t"

echo 🔄 Reloading Nginx...
ssh %REMOTE_USER%@%REMOTE_HOST% "systemctl reload nginx"

if %errorlevel% neq 0 (
    echo ❌ Nginx reload failed.
    exit /b %errorlevel%
)

echo ✅ Deployment complete! Files uploaded and permissions fixed at %REMOTE_HOST%:%REMOTE_PATH%
echo 🔒 Your secure site should be live at: https://www.culturalheritage.coop
endlocal
pause
