# ForexMate Enterprise Platform Startup Script
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "   Starting ForexMate Enterprise Suite   " -ForegroundColor Green
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host " Backend API:  http://localhost:3001/api/v1" -ForegroundColor Yellow
Write-Host " Frontend Web: http://localhost:3000" -ForegroundColor Yellow
Write-Host "=========================================" -ForegroundColor Cyan

Set-Location -Path $PSScriptRoot
npm run dev
