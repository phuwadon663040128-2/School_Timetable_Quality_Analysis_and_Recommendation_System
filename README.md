# ระบบวิเคราะห์และเพิ่มประสิทธิภาพตารางสอนโรงเรียน

## Overview
ระบบวิเคราะห์และเพิ่มประสิทธิภาพตารางสอนโรงเรียน เป็นระบบต้นแบบสำหรับโปรเจคจบวิศวกรรมคอมพิวเตอร์ มีเป้าหมายเพื่อช่วยโรงเรียนบริหารข้อมูลตารางสอนอย่างเป็นระบบ โดยใช้ฐานข้อมูลกลาง ลดการกรอกซ้ำ ตรวจปัญหาตารางชน วิเคราะห์คุณภาพตาราง และส่งออกตารางตามบทบาทผู้ใช้

## Core Capabilities
1. School Master Data
2. Teaching Assignment
3. Manual Timetable
4. Real-time Conflict Checker
5. Blocked Timeslot / School Calendar Warning
6. Lightweight Approval Workflow
7. Quality Analyzer
8. Recommendation Engine
9. Rule-based / AI-assisted Explanation
10. Dashboard & Reports
11. Print / PDF Export

## Tech Stack
- Laravel
- PHP
- MySQL
- Blade
- TailwindCSS
- Alpine.js
- Laravel Breeze
- PHPUnit / Feature Tests
- Optional AI Provider: KKU Intelsphere API

## Main Users
- Admin / ฝ่ายวิชาการ
- หัวหน้างานวิชาการ
- หัวหน้ากลุ่มสาระ
- ครูผู้สอน
- ครูประจำชั้น
- ผู้บริหาร / Viewer

## MVP
- Login + Role
- Master Data
- Teaching Assignment
- Manual Timetable
- Conflict Checker
- Blocked Timeslot / School Calendar Warning
- Lightweight Approval Workflow
- Quality Score
- Recommendation เบื้องต้น
- Rule-based Explanation
- Optional AI Explanation
- Print/PDF ตารางครู/ห้องเรียน/ชั้นเรียน

## Current Repository Status
ตอนนี้อยู่ใน Phase 1: เตรียมเอกสาร Requirements, Domain, Design, Roadmap และโครงสร้างโปรเจคก่อนเริ่มเขียนโค้ดจริง

## Project Layout
- เอกสารหลักอยู่ที่ root เช่น PRODUCT.md, DOMAIN.md, REQUIREMENTS.md, DATA_MODEL.md, WORKFLOWS.md
- เอกสารเสริมอยู่ใน `docs/`
- Static HTML mock-up อยู่ใน `mockups/`
- คำสั่งและ context สำหรับ AI อยู่ใน `CLAUDE.md`, `AGENTS.md`, `AI_CONTEXT.md` และ `.claude/`
- โครง Laravel placeholder อยู่ใน `src/` แต่ยังไม่ใช่ Laravel project ที่รันได้จริง

ดูรายละเอียดเพิ่มเติมที่ `docs/PROJECT_STRUCTURE.md`

## Static Mock-up
เปิดตัวอย่างหน้าระบบและ role switcher ได้ที่:

```txt
mockups/index.html
```
