@echo off
setlocal enabledelayedexpansion

REM ===============================
REM Configuration
REM ===============================
set REMOTE_USER=root
set REMOTE_HOST=ica5.gn.apc.org
set REMOTE_PATH=/var/www/html
set LOCAL_BUILD_PATH=dist\cooperative-culture-heritage
set ARCHIVE_NAME=frontend.tar.gz

echo ======================================
echo 🚀 STARTING DEPLOYMENT
echo ======================================

REM ===============================
REM Build Frontend
REM ===============================
echo 🔨 Building app...
call npm run build

if not exist "%LOCAL_BUILD_PATH%" (
echo ❌ Build directory not found: %LOCAL_BUILD_PATH%
exit /b 1
)

REM ===============================
REM Create Archive
REM ===============================
echo 📦 Creating archive...
tar -czf %ARCHIVE_NAME% -C %LOCAL_BUILD_PATH% .

if not exist "%ARCHIVE_NAME%" (
echo ❌ Failed to create archive
exit /b 1
)

REM ===============================
REM Upload Archive
REM ===============================
echo 📤 Uploading archive to server...
scp %ARCHIVE_NAME% %REMOTE_USER%@%REMOTE_HOST%:/tmp/

if %errorlevel% neq 0 (
echo ❌ Upload failed
del %ARCHIVE_NAME%
exit /b %errorlevel%
)

REM ===============================
REM Deploy on Server
REM ===============================
echo ⚙️ Extracting and deploying on server...

ssh %REMOTE_USER%@%REMOTE_HOST% "mkdir -p %REMOTE_PATH% && rm -rf %REMOTE_PATH%/* && tar -xzf /tmp/%ARCHIVE_NAME% -C %REMOTE_PATH% && rm /tmp/%ARCHIVE_NAME% && chown -R www-data:www-data %REMOTE_PATH% && chmod -R 755 %REMOTE_PATH%"
if %errorlevel% neq 0 (
echo ❌ Deployment failed on server
del %ARCHIVE_NAME%
exit /b %errorlevel%
)

REM ===============================
REM Cleanup Local
REM ===============================
echo 🧹 Cleaning local archive...
del %ARCHIVE_NAME%

REM ===============================
REM Reload Nginx
REM ===============================
echo 🔄 Reloading Nginx...
ssh %REMOTE_USER%@%REMOTE_HOST% "nginx -t && systemctl reload nginx"

if %errorlevel% neq 0 (
echo ❌ Nginx reload failed
exit /b %errorlevel%
)

echo ======================================
echo ✅ DEPLOYMENT SUCCESSFUL
echo 🌐 https://www.culturalheritage.coop
echo ======================================

endlocal
pause
