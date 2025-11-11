@echo off
setlocal enabledelayedexpansion

REM ===============================
REM Configuration
REM ===============================
set REMOTE_USER=root
set REMOTE_HOST=ica5.gn.apc.org
set REMOTE_PATH=/var/www/html
set LOCAL_BUILD_PATH=dist\cooperative-culture-heritage\browser

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

if %errorlevel% neq 0 (
    echo ❌ Permission fixing failed.
    exit /b %errorlevel%
)

echo ✅ Deployment complete! Files uploaded and permissions fixed at %REMOTE_HOST%:%REMOTE_PATH%
endlocal
pause
