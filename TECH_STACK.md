# TECH_STACK.md

## Selected Stack
| Layer | Technology | Purpose |
|---|---|---|
| Backend | Laravel | Web application framework |
| Language | PHP | Main backend language |
| Database | MySQL | Relational data store |
| Frontend | Blade | Server-rendered UI |
| Styling | TailwindCSS | Utility-first styling |
| Interaction | Alpine.js | Lightweight UI behavior |
| Auth Starter | Laravel Breeze | Login/register/session baseline |
| Tests | PHPUnit / Laravel Feature Tests | Unit and feature testing |
| Optional AI | KKU Intelsphere API | Thai explanation assistant in later phase |

## Stack Decision
เลือก Laravel + Blade เพราะเหมาะกับโปรเจคจบที่ต้องการ CRUD, RBAC, database-heavy workflow, form validation, report/export และ testing โดยไม่เพิ่มความซับซ้อนของ frontend SPA ตั้งแต่แรก

## Project Layout Decision
เอกสารโปรเจคอยู่ที่ root ส่วน Laravel implementation จะอยู่ใน `src/` เพื่อแยก phase planning ออกจาก phase coding อย่างชัดเจน

## Future Setup Notes
- เริ่ม scaffold Laravel จริงใน Month 5 หรือเมื่อเอกสาร phase proposal ผ่านแล้ว
- ถ้าใช้ `composer create-project laravel/laravel src` ต้องให้โฟลเดอร์ `src/` ว่างหรือย้าย placeholder ออกก่อน
- ควรเก็บ `.env` เฉพาะ local และไม่ commit secret
