# API_CONTRACTS.md

## Purpose
เอกสารนี้ใช้เป็น contract คร่าวๆ ก่อนเริ่ม implement routes/controllers จริง

## Page Routes
| Page | Purpose | Role |
|---|---|---|
| /dashboard | ภาพรวมข้อมูล, conflicts, warnings, status, quality score | Admin, Academic Staff, Viewer |
| /master-data/teachers | จัดการครู | Admin, Academic Staff |
| /master-data/subjects | จัดการวิชา | Admin, Academic Staff |
| /master-data/rooms | จัดการห้อง | Admin, Academic Staff |
| /calendar/blocked-timeslots | จัดการคาบที่ห้ามจัด | Admin, Academic Staff |
| /calendar/events | จัดการวันหยุด/กิจกรรมโรงเรียน | Admin, Academic Staff |
| /assignments/teaching | กำหนดภาระสอน | Academic Staff, Department Head |
| /assignments/homeroom | กำหนดครูประจำชั้น | Academic Staff |
| /timetables | รายการตาราง | Academic Staff |
| /timetables/{id}/edit | จัดตาราง manual | Academic Staff |
| /timetables/{id}/quality | ดูผลวิเคราะห์ | Academic Staff, Viewer |
| /timetables/{id}/recommendations | ดูข้อเสนอปรับปรุง | Academic Staff |
| /timetables/{id}/review | review เฉพาะกลุ่มสาระ | Department Head |
| /timetables/{id}/approval | approve/return/publish | Academic Lead, Deputy Academic Director, Academic Staff ตามสิทธิ์ |
| /reports | print/PDF | Teacher, Homeroom Teacher, Viewer |

## Service Result Shapes
### Conflict Result
```txt
type: teacher_conflict | room_conflict | class_conflict | room_type_mismatch | capacity_mismatch | blocked_timeslot | calendar_event
severity: error | warning
message: Thai explanation
related_entry_id: optional
```

### Quality Result
```txt
score: 0-100
conflict_safety_score: number
teacher_workload_score: number
student_learning_balance_score: number
room_resource_utilization_score: number
calendar_operational_readiness_score: number
hard_conflicts: count
soft_warnings: count
details: list of score deductions
```

### Recommendation Result
```txt
title: Thai short title
description: Thai explanation
action_type: move_period | change_room | distribute_subject | reduce_consecutive
before_score: number
predicted_after_score: number
status: draft | accepted | rejected
```

### Approval Result
```txt
action: submit | review | return | approve | publish | archive
from_status: draft | submitted | returned | approved | published | archived
to_status: draft | submitted | returned | approved | published | archived
reason: required when returned
```
