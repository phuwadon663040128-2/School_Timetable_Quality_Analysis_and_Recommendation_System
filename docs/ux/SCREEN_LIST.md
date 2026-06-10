# SCREEN_LIST.md

## MVP Screens
| Screen | Purpose | Primary Role |
|---|---|---|
| Login | เข้าสู่ระบบ | All |
| Dashboard | สรุปข้อมูลและสถานะตาราง | Admin, Academic Staff, Viewer |
| Teachers | จัดการครู | Admin, Academic Staff |
| Subjects | จัดการวิชา | Admin, Academic Staff |
| Rooms | จัดการห้องและประเภทห้อง | Admin, Academic Staff |
| Class Sections | จัดการห้องเรียน | Admin, Academic Staff |
| Timeslots | จัดการคาบเรียน | Admin, Academic Staff |
| Blocked Timeslots | จัดการคาบเข้าแถว/พักกลางวัน/คาบห้ามจัด | Admin, Academic Staff |
| School Calendar | จัดการวันหยุดและกิจกรรมโรงเรียน | Admin, Academic Staff |
| Homeroom Assignment | กำหนดครูประจำชั้น | Academic Staff |
| Teaching Assignment | กำหนดภาระสอน | Academic Staff, Department Head |
| Timetable Editor | จัดตาราง manual | Academic Staff |
| Department Review | ตรวจตารางเฉพาะกลุ่มสาระ | Department Head |
| Approval Queue | approve/return/publish ตาราง | Academic Lead, Deputy Academic Director, Academic Staff ตามสิทธิ์ |
| Timetable by Class | ดูตารางห้องเรียน | Academic Staff, Homeroom Teacher |
| Timetable by Teacher | ดูตารางครู | Teacher |
| Timetable by Room | ดูตารางห้อง | Academic Staff |
| Quality Analysis | ดู score/warnings | Academic Staff, Viewer |
| Recommendations | ดูข้อเสนอปรับปรุง | Academic Staff |
| Reports | export/print | Teacher, Homeroom Teacher, Viewer |

## UI Direction
- Thai-first
- Desktop-first
- ตารางต้องอ่านง่าย
- สีใช้เพื่อสถานะเท่านั้น: แดง conflict, เหลือง warning, เขียวผ่าน, น้ำเงิน submitted/approved
- หลีกเลี่ยง UI ที่เหมือน consumer app มากเกินไป
