# MODULE_MAP.md

## Module Overview
| Module | Responsibility | Main Users |
|---|---|---|
| Auth/RBAC | Login, roles, permissions, menu visibility | Admin |
| Master Data | Academic years, terms, personnel, departments, teachers, subjects, rooms, class sections, timeslots | Admin, ฝ่ายวิชาการ |
| Assignment | Homeroom assignment and teaching assignment | ฝ่ายวิชาการ, หัวหน้ากลุ่มสาระ |
| Timetable | Manual timetable editor and views | ฝ่ายวิชาการ, ครู, ครูประจำชั้น |
| Calendar | Blocked timeslot and school calendar event | Admin, ฝ่ายวิชาการ |
| Conflict | Hard constraint validation | ฝ่ายวิชาการ |
| Quality | Soft constraint scoring | ฝ่ายวิชาการ, ผู้บริหาร |
| Recommendation | Suggested improvements | ฝ่ายวิชาการ |
| Approval | Lightweight review/approve/publish workflow | ฝ่ายวิชาการ, หัวหน้ากลุ่มสาระ, หัวหน้างานวิชาการ |
| Explanation | Thai explanation via rule-based and optional AI | ทุก role ที่เกี่ยวข้อง |
| Reports | Print/PDF timetable and quality report | ครู, ครูประจำชั้น, ผู้บริหาร |
| Audit | Track important changes | Admin |

## Dependency Direction
```txt
Controllers
  -> Application Services
    -> Scheduling / Analysis / Reports Services
      -> Models / Database
```

## Core Service Classes
- TimetableService
- ConstraintChecker
- CalendarConstraintService
- QualityAnalyzer
- RecommendationEngine
- ApprovalWorkflowService
- ExplanationService
- TimetableExportService
- QualityReportService
