# CLAUDE.md

## Project Brief
โปรเจคนี้คือ School Timetable Quality Analysis and Recommendation System สำหรับโรงเรียนมัธยมไทย จุดขายหลักคือ Master Data, Manual Timetable, Conflict Checker, Quality Score, Recommendation และ Explanation ภาษาไทย

## Current Phase
Phase 1: เตรียมเอกสาร โครงสร้าง Requirements และ Design ก่อนเริ่มเขียนโค้ดจริง

ห้ามเริ่มสร้าง feature จริงจนกว่าเอกสารหลักต่อไปนี้จะนิ่ง:
- PRODUCT.md
- DOMAIN.md
- REQUIREMENTS.md
- DATA_MODEL.md
- WORKFLOWS.md
- DESIGN.md
- TEST_PLAN.md
- BACKLOG.md

## Required Reading Before Work
1. README.md
2. PRODUCT.md
3. DOMAIN.md
4. REQUIREMENTS.md
5. DATA_MODEL.md
6. WORKFLOWS.md
7. DESIGN.md
8. DECISIONS.md
9. TASK.md

## Architecture Rules
- Tech stack: Laravel, PHP, MySQL, Blade, TailwindCSS, Alpine.js, Laravel Breeze, PHPUnit
- Laravel implementation จะอยู่ใน `src/` เมื่อเริ่ม phase coding
- Controller ต้องบางและไม่ใส่ business logic หนัก
- Scheduling logic ต้องอยู่ใน `app/Services/Scheduling`
- Approval workflow logic ต้องอยู่ใน service layer
- Explanation/AI provider ต้องอยู่ใน `app/Services/AI`
- Export/report logic ต้องอยู่ใน `app/Services/Reports`
- Validation ควรอยู่ใน Form Request
- Test logic สำคัญก่อน UI

## Product Rules
- นักเรียนไม่มี login ใน MVP
- ครูประจำชั้นเป็น assignment ตามปี/เทอม ไม่ใช่ role ถาวร
- ฝ่ายวิชาการเป็นคนจัดตารางหลัก
- หัวหน้ากลุ่มสาระเป็น reviewer เฉพาะกลุ่มสาระ
- หัวหน้างานวิชาการหรือรองผู้อำนวยการฝ่ายวิชาการเป็น approver หลัก
- ผู้อำนวยการเป็น viewer/report consumer ใน MVP
- AI ใช้อธิบายผล ไม่ใช่ตัวจัดตารางหลัก
- Hard constraints ต้องผิดไม่ได้
- Soft constraints ใช้สำหรับ quality score และ recommendation
- ระบบต้อง fallback เป็น rule-based explanation ได้เสมอ
- MVP ไม่รวม full auto generator, split class, co-teaching, student login, Excel export, SSO, email notification หรือ mobile app เต็มรูปแบบ
- ต้องรองรับ blocked timeslot, school calendar warning และ lightweight approval workflow
- ห้าม hardcode API key หรือ secret

## Output Style
- ตอบและเขียนเอกสารเป็นภาษาไทยเป็นหลัก
- ใช้คำศัพท์ domain ให้ตรงกับ GLOSSARY.md
- ถ้าเพิ่ม requirement ใหม่ ต้องระบุว่าเป็น In Scope, Out of Scope หรือ Future Scope
- ถ้าตัดสินใจเรื่องสถาปัตยกรรมใหม่ ให้บันทึกใน DECISIONS.md
