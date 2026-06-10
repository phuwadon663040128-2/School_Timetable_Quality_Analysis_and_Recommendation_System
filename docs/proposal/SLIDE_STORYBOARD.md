# SLIDE_STORYBOARD.md

## Purpose
Storyboard สำหรับทำสไลด์นำเสนอ proposal จากเอกสาร MVP ล่าสุด ใช้เป็นโครงก่อนย้ายไป PowerPoint/Google Slides/Canva

## Slide 1: Title
Title: ระบบวิเคราะห์และเพิ่มประสิทธิภาพตารางสอนโรงเรียน

Subtitle: School Timetable Quality Analysis and Recommendation System

Speaker note:
แนะนำชื่อระบบ จุดประสงค์ และบริบทว่าเป็นโปรเจคจบที่เน้นการจัดตารางสอนโรงเรียนระดับมัธยม

Visual:
- ชื่อระบบ
- ชื่อผู้จัดทำ
- อาจารย์ที่ปรึกษา

## Slide 2: Problem Context
Main message:
การจัดตารางสอนโรงเรียนมีข้อจำกัดหลายด้าน และมักต้องประสานข้อมูลหลายชุด

Bullets:
- ครู วิชา ห้อง คาบเรียน และห้องเรียนต้องไม่ชนกัน
- มีกิจกรรมโรงเรียนและคาบห้ามจัด เช่น เข้าแถว พักกลางวัน
- การตรวจคุณภาพตารางยังทำได้ยากถ้าใช้ Excel หรือ workflow manual

Visual:
- ไดอะแกรมเล็กๆ แสดง Teacher / Subject / Room / Timeslot / Class

## Slide 3: Current Workflow Pain Points
Main message:
ระบบเดิมมักช่วยให้พิมพ์ตารางได้ แต่ยังไม่ช่วยวิเคราะห์ว่าตารางดีพอหรือควรแก้อะไรก่อน

Bullets:
- ข้อมูลกระจายและกรอกซ้ำ
- ตรวจ conflict ยาก
- ไม่เห็นคุณภาพตารางเป็นคะแนน
- ไม่มีคำแนะนำเชิงเหตุผล
- สถานะตรวจ/อนุมัติ/เผยแพร่ไม่ชัด

Visual:
- Before workflow: Excel/manual -> ตรวจเอง -> publish

## Slide 4: Product Vision
Main message:
ระบบนี้เป็น decision support system สำหรับตารางสอน ไม่ใช่แค่ CRUD หรือเครื่องมือพิมพ์ตาราง

Bullets:
- Master Data กลาง
- Manual timetable พร้อมตรวจ conflict
- Quality Score
- Recommendation
- Explanation ภาษาไทย
- Lightweight Approval Workflow

Visual:
- Product capability wheel

## Slide 5: MVP Scope
Main message:
MVP โฟกัสสิ่งที่ทำได้จริงและวัดผลได้ภายในเวลาโปรเจค

In scope:
- Master Data
- Manual Timetable
- Real-time Conflict Checker
- Blocked Timeslot / Calendar Warning
- Lightweight Approval Workflow
- Quality Score / Recommendation
- Print/PDF

Out of scope:
- Full auto generator
- Split class
- Co-teaching
- Student login
- Excel export

Visual:
- Two-column in/out scope

## Slide 6: Users and Roles
Main message:
บทบาทผู้ใช้สะท้อน workflow โรงเรียนไทย

Table:
- Academic Staff: จัดตาราง
- Department Head: review กลุ่มสาระ
- Academic Lead / Deputy: approve/return
- Teacher: ดูตารางตัวเอง
- Homeroom Teacher: ดู/print ตารางห้อง
- Director/Viewer: ดูภาพรวม

Visual:
- Role responsibility table

## Slide 7: System Workflow
Main message:
Workflow เริ่มจากข้อมูลกลางไปจนถึง publish และ print/PDF

Flow:
```txt
Master Data -> Teaching Assignment -> Manual Timetable -> Conflict Check
-> Quality Analysis -> Recommendation -> Review -> Approve -> Publish -> Print/PDF
```

Visual:
- ใช้ `school_timetable_9month_flowchart.drawio` หรือทำ flow ในสไลด์

## Slide 8: Approval Lifecycle
Main message:
ระบบแยกการจัด ตรวจ อนุมัติ และเผยแพร่

Lifecycle:
```txt
draft -> submitted -> returned/approved -> published -> archived
```

Rules:
- returned ต้องมีเหตุผล
- approved ยังไม่เท่ากับ published
- hard conflict ทำให้ publish ไม่ได้

Visual:
- State diagram

## Slide 9: Hard and Soft Constraints
Main message:
ระบบแยกสิ่งที่ผิดไม่ได้ออกจากสิ่งที่เป็นคุณภาพ

Hard constraints:
- ครูชน
- ห้องชน
- ชั้นเรียนชน
- ห้องผิดประเภท
- capacity ไม่พอ
- blocked timeslot

Soft constraints:
- วิชาหนักติดกัน
- ครูสอนติดกันมากเกิน
- calendar event warning
- ภาระครูไม่สมดุล

Visual:
- Red hard / yellow soft comparison

## Slide 10: Quality Score Concept
Main message:
Quality Score ช่วยบอกว่าตารางดีพอหรือยัง และคะแนนลดเพราะอะไร

Categories:
- Conflict Safety 30
- Teacher Workload 20
- Student Learning Balance 20
- Room & Resource Utilization 15
- Calendar & Operational Readiness 15

Visual:
- Score breakdown bar/chart

## Slide 11: Recommendation Concept
Main message:
Recommendation เสนอทางเลือกพร้อม predicted after score แต่ไม่แก้ตารางแทนผู้ใช้

Example:
- Before Score: 82
- Predicted After Score: 87
- Warning ลดลง: 2
- เหตุผล: ลดวิชาหนักติดกัน / ใช้ห้องถูกประเภท

Visual:
- Before/after card

## Slide 12: Architecture
Main message:
ใช้ Laravel service-layer architecture เพื่อให้ logic สำคัญ test ได้

Services:
- TimetableService
- ConstraintChecker
- CalendarConstraintService
- ApprovalWorkflowService
- QualityAnalyzer
- RecommendationEngine
- ExplanationService
- TimetableExportService

Visual:
- Architecture diagram จาก DESIGN.md

## Slide 13: ERD Overview
Main message:
Data model แยกชัดระหว่าง master data, timetable, approval, analysis และ recommendation

Visual:
- ใช้ `docs/database/ERD.drawio`

Highlight:
- timetables.status
- timetable_entries snapshot fields
- blocked_timeslots
- school_calendar_events
- quality_scores
- recommendations

## Slide 14: Wireframe Preview
Main message:
หน้าจอถูกออกแบบให้รองรับ workflow ซ้ำๆ ของฝ่ายวิชาการ

Show:
- Dashboard
- Timetable Editor
- Quality Analysis
- Approval Queue
- Reports

Visual:
- ใช้ `docs/ux/WIREFRAME_FLOW.drawio` และ `docs/ux/WIREFRAMES.md`

## Slide 15: Testing Plan
Main message:
ทดสอบ logic สำคัญก่อน UI เพื่อป้องกันตารางผิด

Test groups:
- Constraint tests
- Approval workflow tests
- Quality score tests
- Recommendation tests
- AI fallback tests
- Publish gate tests

Visual:
- Test pyramid or test matrix

## Slide 16: 9-Month Roadmap
Main message:
แผนแบ่งเป็น proposal/design, setup/prototype, implementation, final delivery

Timeline:
- Month 1-4: Proposal & Design
- Month 5: Setup repo/environment
- Month 6: Foundation
- Month 7: Scheduling core
- Month 8: Analysis/approval/export
- Month 9: Testing/final presentation

Visual:
- Roadmap from `ROADMAP.md`

## Slide 17: Expected Results
Main message:
ผลลัพธ์ที่คาดหวังคือระบบต้นแบบที่ช่วยลดความผิดพลาดและอธิบายคุณภาพตารางได้

Bullets:
- ลดการกรอกซ้ำ
- ตรวจ conflict ได้เร็วขึ้น
- เห็น quality score และเหตุผล
- มี recommendation ที่วัดผลได้
- มี workflow publish ที่ชัดเจน

Visual:
- Outcome cards

## Slide 18: Q&A
Main message:
เปิดรับคำถามเรื่อง scope, constraints, quality score และ workflow

Backup answers:
- ทำไมไม่ทำ full auto generator ใน MVP
- ทำไม AI ไม่ใช่ตัวจัดตาราง
- ใครเป็นคน approve
- ทำไม approved ยังไม่เท่ากับ published
