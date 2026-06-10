# PROPOSAL_OUTLINE.md

## Project Title
ระบบวิเคราะห์และเพิ่มประสิทธิภาพตารางสอนโรงเรียน

English: School Timetable Quality Analysis and Recommendation System

## Key Message
โปรเจคนี้ไม่ได้ทำแค่ระบบ CRUD หรือระบบพิมพ์ตาราง แต่ทำระบบช่วยจัดตารางแบบควบคุมได้ ตรวจ conflict แบบ real-time วิเคราะห์คุณภาพตาราง แนะนำการปรับปรุง และรองรับ workflow ตรวจสอบ/อนุมัติ/เผยแพร่ที่อธิบายได้

## 1. บทนำ
กล่าวถึงบริบทการจัดตารางสอนในโรงเรียนมัธยมไทย ซึ่งมักมีข้อมูลหลายส่วนที่ต้องประสานกัน เช่น ครู วิชา ห้องเรียน ห้องพิเศษ คาบเรียน ภาระสอน และกิจกรรมโรงเรียน

ประเด็นหลัก:
- การจัดตารางสอนมีข้อจำกัดจำนวนมาก
- โรงเรียนจำนวนมากยังพึ่งพา Excel หรือโปรแกรมสำเร็จรูป
- ระบบเดิมมักช่วยจัดหรือพิมพ์ตารางได้ แต่ยังไม่ช่วยวิเคราะห์คุณภาพอย่างเป็นระบบ

## 2. ที่มาและความสำคัญ
ปัญหาที่พบ:
- กรอกข้อมูลซ้ำหลายที่
- ตารางครู ห้อง หรือชั้นเรียนอาจชนกัน
- ห้องพิเศษถูกใช้ไม่เหมาะสม
- วิชาหนักกระจุกในวันหรือช่วงเวลาเดียว
- ผู้จัดตารางไม่รู้ว่าควรแก้ปัญหาจุดใดก่อน
- การอนุมัติและเผยแพร่ตารางอาจไม่มีสถานะที่ติดตามได้

แนวคิดของระบบ:
- ใช้ Master Data กลาง
- จัดตารางแบบ manual ที่ตรวจสอบได้
- ตรวจ hard conflict แบบ real-time
- วิเคราะห์ soft warning เป็น Quality Score
- แนะนำการปรับปรุงพร้อมเหตุผล
- รองรับ lightweight approval workflow

## 3. วัตถุประสงค์
1. พัฒนาระบบจัดการข้อมูลกลางสำหรับการจัดตารางสอนโรงเรียน
2. พัฒนาหน้าจอจัดตารางแบบ manual พร้อม real-time conflict checker
3. รองรับ blocked timeslot และ school calendar warning
4. พัฒนา lightweight approval workflow สำหรับตรวจสอบ อนุมัติ และเผยแพร่ตาราง
5. พัฒนา Quality Score เพื่อวิเคราะห์คุณภาพตาราง
6. พัฒนา Recommendation Engine เพื่อเสนอแนวทางปรับปรุง
7. พัฒนา Rule-based Explanation และ optional AI explanation สำหรับอธิบายผลเป็นภาษาไทย
8. รองรับการ print/PDF ตารางและรายงานสำคัญ

## 4. ขอบเขตของระบบ
### In Scope
- User / Role / Permission
- Master Data
- Academic Year / Term
- Personnel / Department
- Homeroom Assignment
- Teaching Assignment
- Manual Timetable
- Real-time Conflict Checker
- Blocked Timeslot
- School Calendar Warning
- Lightweight Approval Workflow
- Quality Score
- Recommendation
- Rule-based Explanation
- Optional AI Explanation
- Dashboard / Alerts
- Print / PDF Export

### Out of Scope
- Full auto timetable generator
- Split class / subgroup
- Co-teaching
- Student login
- Mobile app เต็มรูปแบบ
- SSO
- Email notification
- Excel export
- ระบบจองห้องเต็มรูปแบบ
- AI-based scheduling decision
- Multi-level approval workflow ซับซ้อน

## 5. กลุ่มผู้ใช้
| Role | Responsibility |
|---|---|
| Admin | จัดการผู้ใช้ สิทธิ์ และข้อมูลระบบ |
| Academic Staff / ฝ่ายวิชาการ | จัดตาราง draft ตรวจ conflict ส่งอนุมัติ และ publish |
| Department Head / หัวหน้ากลุ่มสาระ | Review เฉพาะภาระครูและรายวิชาในกลุ่มสาระ |
| Academic Lead / Deputy Academic Director | Approve หรือ Return ตาราง |
| Teacher | ดูตารางสอนของตนเองหลัง publish |
| Homeroom Teacher | ดู/print/PDF ตารางเรียนของห้องที่รับผิดชอบ |
| Director / Viewer | ดู dashboard และรายงานภาพรวม |

## 6. ฟังก์ชันหลัก
### 6.1 Master Data
จัดการข้อมูลครู วิชา ห้อง ห้องเรียน คาบเรียน กลุ่มสาระ ปีการศึกษา และภาคเรียน

### 6.2 Teaching Assignment
กำหนดว่าครูคนใดสอนวิชาใดให้ห้องใด กี่คาบต่อสัปดาห์

### 6.3 Manual Timetable
ฝ่ายวิชาการจัดตารางผ่าน timetable editor โดยระบบตรวจ conflict ระหว่างจัด

### 6.4 Conflict Checker
ตรวจครูชน ห้องชน ชั้นเรียนชน ห้องผิดประเภท capacity และ blocked timeslot

### 6.5 Blocked Timeslot / Calendar Warning
รองรับคาบห้ามจัด เช่น เข้าแถว พักกลางวัน และกิจกรรมโรงเรียนที่เป็น warning โดยค่าเริ่มต้น

### 6.6 Lightweight Approval Workflow
สถานะหลัก:
```txt
draft -> submitted -> returned/approved -> published -> archived
```

### 6.7 Quality Score
วิเคราะห์คุณภาพตารางแบบ 0-100 ตามหมวด:
- Conflict Safety
- Teacher Workload
- Student Learning Balance
- Room & Resource Utilization
- Calendar & Operational Readiness

### 6.8 Recommendation
เสนอการย้ายคาบหรือเปลี่ยนห้อง พร้อม predicted before/after score

### 6.9 Explanation
Rule-based explanation เป็นค่าเริ่มต้น และ AI เป็น optional provider สำหรับเรียบเรียงคำอธิบาย

### 6.10 Reports
Print/PDF ตารางครู ตารางห้องเรียน ตารางใช้ห้อง และรายงานคุณภาพ

## 7. ข้อจำกัดและเงื่อนไขการจัดตาราง
### Hard Constraints
- ครูคนเดียวกันสอนได้เพียงหนึ่งรายการในคาบเดียวกัน
- ห้องที่เปิดตรวจชนใช้ได้เพียงหนึ่งรายการในคาบเดียวกัน
- หนึ่ง class section มีได้เพียงหนึ่ง timetable entry ต่อ timeslot
- ห้องต้องตรงกับประเภทห้องที่ต้องใช้
- ห้องต้องรองรับจำนวนนักเรียนถ้าเปิด check_capacity
- ห้ามจัดวิชาปกติทับ blocked timeslot

### Soft Constraints
- ครูสอนติดกันมากเกินไป
- วิชาหนักติดกันหรือกระจุกในวันเดียว
- ภาระครูไม่สมดุล
- ห้องพิเศษใช้งานไม่เหมาะสม
- ตารางทับ school calendar event ที่เป็น warning

## 8. Workflow ตรวจสอบ อนุมัติ และเผยแพร่ตาราง
```txt
ฝ่ายวิชาการจัดตาราง Draft
↓
ระบบตรวจ Conflict + Quality Score
↓
หัวหน้ากลุ่มสาระ Review เฉพาะกลุ่มสาระ
↓
หัวหน้างานวิชาการ / รองฯ วิชาการ Approve หรือ Return
↓
ฝ่ายวิชาการหรือผู้มีสิทธิ์ Publish
↓
ครู / ครูประจำชั้น / ผู้บริหาร ดูและ Print/PDF ได้
```

กฎสำคัญ:
- `approved` ยังไม่เท่ากับ `published`
- `returned` ต้องมีเหตุผล
- ตารางที่มี hard conflict publish ไม่ได้
- ผู้อำนวยการเป็น viewer/report consumer ใน MVP

## 9. สถาปัตยกรรมระบบ
Tech stack:
- Laravel
- PHP
- MySQL
- Blade
- TailwindCSS
- Alpine.js
- Laravel Breeze
- PHPUnit / Feature Tests
- Optional AI Provider: KKU Intelsphere API

Service layer:
- TimetableService
- ConstraintChecker
- CalendarConstraintService
- ApprovalWorkflowService
- QualityAnalyzer
- RecommendationEngine
- ExplanationService
- TimetableExportService

## 10. แบบจำลองข้อมูล
เอกสารอ้างอิง:
- `DATA_MODEL.md`
- `docs/database/ERD.md`
- `docs/database/DATA_DICTIONARY.md`

กลุ่มข้อมูลหลัก:
- Identity & RBAC
- Personnel & Department
- Academic Setup
- Teaching Assignment
- Calendar Rules
- Timetable
- Approval Logs
- Quality & Recommendation

## 11. UI / Wireframe
เอกสารอ้างอิง:
- `docs/ux/SCREEN_LIST.md`
- `docs/ux/WIREFRAME_PLAN.md`
- `docs/ux/WIREFRAMES.md`

หน้าจอหลัก:
- Dashboard
- Master Data
- Teaching Assignment
- Timetable Editor
- Conflict & Quality Analysis
- Recommendation
- Department Review
- Approval Queue
- Reports / Print PDF

## 12. แผนการทดสอบ
เอกสารอ้างอิง:
- `TEST_PLAN.md`
- `docs/testing/CONSTRAINT_TEST_MATRIX.md`
- `docs/testing/DEMO_SCENARIOS.md`

กลุ่ม test สำคัญ:
- Unit tests สำหรับ constraint และ scoring
- Feature tests สำหรับ workflow หลัก
- E2E demo scenarios
- AI fallback test
- Publish gate test

## 13. แผนดำเนินงาน 9 เดือน
อ้างอิง `ROADMAP.md`

สรุป:
- Month 1-4: Proposal & Design
- Month 5: Setup repo/environment และ prototype risk reduction
- Month 6: Foundation implementation
- Month 7: Scheduling core
- Month 8: Analysis, recommendation, approval, export
- Month 9: Testing, final report, final presentation

## 14. วิธีประเมินผล
- Quality Score หลัง recommendation ควรสูงขึ้น
- จำนวน warning ควรลดลง
- ต้องไม่มี hard conflict เพิ่มขึ้น
- ตารางที่ publish ต้องไม่มี hard conflict
- เปรียบเทียบกับ manual/Excel workflow ได้
- เก็บ usability feedback จากผู้ทดลองใช้

## 15. ผลที่คาดว่าจะได้รับ
- ระบบต้นแบบที่ช่วยจัดตารางสอนแบบควบคุมได้
- ลดความผิดพลาดจากตารางชน
- เห็นคุณภาพตารางผ่าน Quality Score
- ได้ข้อเสนอปรับปรุงที่อธิบายเหตุผลได้
- มี workflow ตรวจสอบ อนุมัติ และเผยแพร่ที่เหมาะกับโรงเรียนไทย
- มีเอกสารและ test plan พร้อมต่อยอดเป็น implementation จริง

## 16. Slide Outline
1. Title
2. Problem
3. Existing workflow pain points
4. Product vision
5. MVP scope
6. Users and roles
7. System workflow
8. Timetable approval lifecycle
9. Hard/soft constraints
10. Quality Score concept
11. Recommendation concept
12. Architecture
13. ERD overview
14. Wireframe preview
15. Test plan
16. Roadmap
17. Expected results
18. Q&A
