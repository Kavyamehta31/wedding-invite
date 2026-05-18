@echo off
REM Quick Start Server - Wedding Invite

echo.
echo ===============================================
echo   Starting Wedding Invitation Server...
echo ===============================================
echo.

cd server

echo Checking if MongoDB is connected...
echo.

call npm start

REM If process exits with error
if %ERRORLEVEL% neq 0 (
    echo.
    echo ERROR: Server failed to start
    echo.
    echo Troubleshooting:
    echo - Make sure MongoDB is running
    echo - Check that port 5000 is not in use
    echo - Verify .env file has correct MONGO_URI
    echo.
    pause
)
