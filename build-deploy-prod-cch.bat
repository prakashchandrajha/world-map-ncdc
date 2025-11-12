@echo off
setlocal enabledelayedexpansion

REM ===============================
REM Configuration
REM ===============================
set REMOTE_USER=root
set REMOTE_HOST=ica5.gn.apc.org
set REMOTE_PATH=/var/www/html
set LOCAL_BUILD_PATH=dist\cooperative-culture-heritage\browser
set NGINX_CONF_LOCAL=nginx-default.conf
set NGINX_CONF_REMOTE=/etc/nginx/sites-available/default

echo 🚀 Building Angular app...
call npm run build

if not exist "%LOCAL_BUILD_PATH%" (
    echo ❌ Build directory not found: %LOCAL_BUILD_PATH%
    exit /b 1
)

echo 🔗 Connecting to %REMOTE_HOST%...
ssh %REMOTE_USER%@%REMOTE_HOST% "echo 🔒 Connected!"

echo 📁 Cleaning old files on server...
ssh %REMOTE_USER%@%REMOTE_HOST% "rm -rf %REMOTE_PATH% && mkdir -p %REMOTE_PATH%"

echo 📤 Uploading new build files...
scp -r %LOCAL_BUILD_PATH%\* %REMOTE_USER%@%REMOTE_HOST%:%REMOTE_PATH%/

if %errorlevel% neq 0 (
    echo ❌ Upload failed.
    exit /b %errorlevel%
)

echo 🔧 Fixing permissions...
ssh %REMOTE_USER%@%REMOTE_HOST% "chown -R www-data:www-data %REMOTE_PATH% && chmod -R 755 %REMOTE_PATH%"

REM ====== Update Nginx Config ======
echo ⚙️ Uploading Nginx configuration...
scp %NGINX_CONF_LOCAL% %REMOTE_USER%@%REMOTE_HOST%:%NGINX_CONF_REMOTE%.tmp

echo 🧪 Testing Nginx configuration...
ssh %REMOTE_USER%@%REMOTE_HOST% "cp %NGINX_CONF_REMOTE% %NGINX_CONF_REMOTE%.bak && mv %NGINX_CONF_REMOTE%.tmp %NGINX_CONF_REMOTE% && nginx -t"

if %errorlevel% neq 0 (
    echo ❌ Nginx configuration test failed! Restoring backup...
    ssh %REMOTE_USER%@%REMOTE_HOST% "mv %NGINX_CONF_REMOTE%.bak %NGINX_CONF_REMOTE%"
    exit /b 1
)

echo 🔄 Reloading Nginx...
ssh %REMOTE_USER%@%REMOTE_HOST% "systemctl reload nginx"

echo ✅ Deployment successful!
echo 🌍 Your site is live at: http://www.culturalheritage.coop

endlocal
pause
