# DESIGN.md

## 1. Architecture
```txt
Laravel Web App
  ↓
Controllers
  ↓
Application Services
  ↓
Domain Services
  - TimetableService
  - ConstraintChecker
  - QualityAnalyzer
  - RecommendationEngine
  - ApprovalWorkflowService
  - CalendarConstraintService
  - ExplanationService
  ↓
Database
```

## 2. Service Layer
### app/Services/Scheduling
- TimetableService.php
- ConstraintChecker.php
- QualityAnalyzer.php
- RecommendationEngine.php
- ApprovalWorkflowService.php
- CalendarConstraintService.php

### app/Services/AI
- AIProviderInterface.php
- RuleBasedExplanationProvider.php
- KkuIntelsphereProvider.php
- ExplanationService.php

### app/Services/Reports
- TimetableExportService.php
- QualityReportService.php

## 3. UI Principles
- Thai-first
- ทางการ
- ไม่สีจัด
- ตารางอ่านง่าย
- ปุ่มชัดเจน
- Badge: แดง conflict, เหลือง warning, เขียว passed, น้ำเงิน submitted/approved
- Desktop-first

## 4. Menu Structure
```txt
Dashboard

ข้อมูลกลาง
- บุคลากร
- ครู
- กลุ่มสาระ
- วิชา
- ห้องเรียน / สถานที่
- ชั้นเรียน
- คาบเรียน
- Blocked Timeslot
- School Calendar

ภาระสอน
- Teaching Assignment
- ครูประจำชั้น
- ภาระครู

ตารางสอน
- จัดตาราง Draft
- ตารางตามชั้นเรียน
- ตารางตามครู
- ตารางตามห้อง

ตรวจสอบและวิเคราะห์
- Conflict
- Quality Score
- Recommendation

อนุมัติและเผยแพร่
- Review ตาราง
- Approve / Return
- Publish

รายงาน
- Print/PDF ตารางเรียน
- Print/PDF ตารางครู
- รายงาน conflict/warning
- รายงานคุณภาพ
```

## 5. MVP Scheduling Strategy
MVP ใช้ manual-first strategy:
1. ฝ่ายวิชาการจัดตารางผ่าน timetable editor
2. ระบบตรวจ hard constraints แบบ real-time
3. ระบบแสดง soft warning ระหว่างจัดตาราง
4. ระบบคำนวณ Quality Score พร้อมเหตุผล
5. ระบบเสนอ Recommendation พร้อม predicted before/after score
6. ผู้ใช้เป็นคนตัดสินใจแก้ตารางเอง

Full auto generator เป็น future scope หลังจาก ConstraintChecker และ QualityAnalyzer เสถียรแล้ว

## 6. Approval Strategy
MVP ใช้ Lightweight Approval Workflow:
- `draft`: ฝ่ายวิชาการจัดตาราง
- `submitted`: ส่งให้ตรวจ/อนุมัติ
- `returned`: ส่งกลับพร้อมเหตุผล
- `approved`: อนุมัติแล้วแต่ยังไม่เผยแพร่
- `published`: เผยแพร่แล้ว ดู/print/PDF ได้
- `archived`: เก็บหลังจบภาคเรียน

หัวหน้ากลุ่มสาระเป็น reviewer เฉพาะกลุ่มสาระ หัวหน้างานวิชาการหรือรองฯ วิชาการเป็น approver หลัก ผู้อำนวยการเป็น viewer/report consumer ใน MVP

## 7. Quality Score Strategy
Quality Score แบ่งหมวด:
| Category | Weight |
|---|---:|
| Conflict Safety | 30 |
| Teacher Workload | 20 |
| Student Learning Balance | 20 |
| Room & Resource Utilization | 15 |
| Calendar & Operational Readiness | 15 |

Hard conflict เป็น publish gate ส่วน soft warning ใช้หักคะแนนและสร้าง recommendation

## 8. AI Strategy
AI ไม่ใช่ตัวจัดตารางหลัก ไม่ใช่ตัว approve และไม่ใช่ตัวตัดสินใจแทน rule ของระบบ ใช้ช่วยเรียบเรียงคำอธิบายผลเท่านั้น และต้อง fallback เป็น Rule-based ได้เสมอ
