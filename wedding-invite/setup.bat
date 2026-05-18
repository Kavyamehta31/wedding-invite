@echo off
REM Wedding Invite Setup Script for Windows
REM This script will help you set up and run the wedding website

echo.
echo ===============================================
echo   Prisha ^& Ankit - Wedding Invitation Website
echo ===============================================
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo ERROR: Node.js is not installed!
    echo Please download and install Node.js from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js is installed

REM Check if MongoDB is installed or accessible
REM (This is optional as users can use MongoDB Atlas)
where mongod >nul 2>nul
if %ERRORLEVEL% equ 0 (
    echo ✓ MongoDB is installed locally
    set USE_LOCAL_MONGODB=1
) else (
    echo ⚠ Local MongoDB not found (MongoDB Atlas will be used)
    set USE_LOCAL_MONGODB=0
)

echo.
echo ===============================================
echo   Installing Dependencies...
echo ===============================================
echo.

cd server
call npm install

if %ERRORLEVEL% neq 0 (
    echo ERROR: Failed to install dependencies
    pause
    exit /b 1
)

echo.
echo ✓ Dependencies installed successfully!
echo.
echo ===============================================
echo   Setup Complete!
echo ===============================================
echo.
echo To start the wedding website:
echo.
echo 1. Open a terminal/command prompt in this folder
echo.
if %USE_LOCAL_MONGODB% equ 1 (
    echo 2. Start MongoDB:
    echo    mongod
    echo.
    echo 3. In another terminal, start the server:
) else (
    echo 2. Make sure MongoDB Atlas connection string is in .env
    echo.
    echo 3. Start the server:
)
echo    cd server
echo    npm start
echo.
echo 4. Open the website:
echo    Open client/index.html in your browser
echo    OR use Live Server extension in VS Code
echo.
echo 5. RSVP Form will submit to: http://localhost:5000/api/rsvp
echo.
echo ===============================================
echo.
pause
