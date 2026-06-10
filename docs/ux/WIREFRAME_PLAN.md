# WIREFRAME_PLAN.md

## Wireframes To Prepare
1. Dashboard
2. Teaching Assignment list/form
3. Manual Timetable editor
4. Conflict display state
5. Blocked Timeslot / School Calendar
6. Quality analysis page
7. Recommendation detail
8. Approval queue / return reason
9. Teacher timetable view
10. Homeroom class timetable export

## Timetable Editor Notes
- ตารางควรใช้วันเป็น column หรือ row ให้เลือกแบบอ่านง่าย
- แต่ละ cell แสดง subject, teacher, room และ conflict badge
- ต้องมี filter: class section, teacher, room
- การเพิ่มรายการควรเลือก teaching assignment ก่อนเลือก room/timeslot
- cell ที่ทับ blocked timeslot ต้องแสดงสถานะห้ามจัดชัดเจน
- calendar warning ต้องแสดงเป็น warning ไม่ใช่ block เสมอ

## Quality Page Notes
- แสดง score ขนาดเด่นแต่ไม่เกิน dashboard context
- แยก hard conflicts และ soft warnings
- รายการ warning ต้องบอกเหตุผลและผลกระทบ
- Recommendation ต้องแสดง before/predicted after score

## Approval Page Notes
- แสดงสถานะ `draft`, `submitted`, `returned`, `approved`, `published`, `archived`
- return ต้องมีช่องเหตุผล
- ปุ่ม publish ต้อง disabled ถ้ามี hard conflict
