# Suggested Commands

ยังไม่ต้องรันคำสั่ง scaffold ใน Phase 1

## Phase 1: Documentation
```bash
# ตรวจไฟล์เอกสารหลัก
ls
```

## Future Phase: Laravel Setup
```bash
# ตัวอย่างเท่านั้น ใช้เมื่อเริ่ม Month 5 หรือ coding phase
composer create-project laravel/laravel src
cd src
composer require laravel/breeze --dev
php artisan breeze:install blade
npm install
```

## Future Phase: Tests
```bash
php artisan test
php artisan test --testsuite=Unit
php artisan test --testsuite=Feature
```
