# AGENTS.md

## Purpose
ไฟล์นี้ใช้กำกับ AI agent เช่น Codex, Claude, GPT เมื่อช่วยเขียนโค้ด

## General Rules
1. อ่านเอกสารก่อนลงมือ
2. ทำงานตาม TASK.md
3. อย่าแก้ migration/schema ถ้าไม่ได้รับมอบหมาย
4. อย่า weaken tests
5. อย่าเปลี่ยน business rules
6. รัน test เฉพาะส่วนก่อน full test
7. รายงานสิ่งที่แก้และผล test
8. อย่าเพิ่ม feature นอก MVP โดยไม่บันทึกเป็น future scope ก่อน

## Architecture Rules
- app/Services/Scheduling สำหรับ scheduling logic
- app/Services/AI สำหรับ explanation/AI provider
- app/Services/Reports สำหรับ export
- ใช้ Form Request validation
- หลีกเลี่ยง logic หนักใน controller

## MVP Scope Rules
- ฝ่ายวิชาการเป็นคนจัดตาราง
- หัวหน้ากลุ่มสาระเป็น reviewer เฉพาะกลุ่มสาระ
- หัวหน้างานวิชาการหรือรองผู้อำนวยการฝ่ายวิชาการเป็น approver หลัก
- ผู้อำนวยการเป็น viewer/report consumer ใน MVP
- MVP ใช้ manual timetable + real-time conflict checker
- Full auto generator, split class, co-teaching, student login, Excel export, SSO, email notification และ mobile app เต็มรูปแบบเป็น out of MVP
- AI ใช้ช่วยอธิบายผลเท่านั้น ไม่ใช่ตัวจัดตารางหรืออนุมัติ
