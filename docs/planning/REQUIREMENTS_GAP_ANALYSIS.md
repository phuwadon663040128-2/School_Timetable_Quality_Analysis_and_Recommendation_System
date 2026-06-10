# REQUIREMENTS_GAP_ANALYSIS.md

## Final Decisions
| Topic | Final Decision | Scope |
|---|---|---|
| Timetable owner | ฝ่ายวิชาการเป็นคนจัดตารางหลัก | MVP |
| Department review | หัวหน้ากลุ่มสาระตรวจเฉพาะกลุ่มสาระ | MVP |
| Approval | หัวหน้างานวิชาการหรือรองฯ วิชาการเป็น approver หลัก | MVP |
| Director role | Viewer/report consumer, final acknowledge เป็นอนาคต | Future |
| Publish status | ใช้ `draft`, `submitted`, `returned`, `approved`, `published`, `archived` | MVP |
| Period locking | รองรับ blocked timeslot เช่น เข้าแถว/พักกลางวัน | MVP |
| Calendar event | ค่าเริ่มต้นเป็น warning, admin ปรับเป็น blocked ได้ | MVP |
| Co-teaching | ไม่รองรับใน MVP | Future |
| Split class | ไม่รองรับใน MVP | Out of MVP |
| Teacher unavailable time | ยังไม่ใช่ core MVP | Future |
| Export format | เริ่มจาก print/PDF | MVP |
| Excel export | ยังไม่ทำ | Future |
| Full auto generator | ไม่ใช่ core MVP | Future/Prototype |
| AI explanation | Optional provider, fallback rule-based | MVP |

## Resolved Questions
- เพิ่ม `timetables.status` ใน DATA_MODEL.md แล้ว
- เพิ่ม `blocked_timeslots` และ `school_calendar_events` แล้ว
- กำหนด minimum export เป็น print/PDF แล้ว
- กำหนดว่า hard conflict เป็น publish gate แล้ว
- กำหนดว่า recommendation ใช้ predicted before/after score แล้ว

## Remaining Clarifications For Advisor
- โรงเรียนตัวอย่างมีคาบต่อวันกี่คาบ
- จะใช้ข้อมูล demo ขนาดกี่ห้อง/กี่ครู
- เกณฑ์ usability feedback จากผู้ทดลองใช้จะเก็บแบบใด
