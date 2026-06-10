# CONSTRAINT_TEST_MATRIX.md

| Test ID | Rule | Input Situation | Expected Result |
|---|---|---|---|
| CT-001 | Teacher conflict | ครูคนเดียวกันถูกจัดสองห้องคาบเดียวกัน | error |
| CT-002 | Room conflict | ห้องเดียวกันถูกใช้สองรายการคาบเดียวกัน | error |
| CT-003 | Class conflict | ห้องเรียนเดียวกันมีสองวิชาคาบเดียวกัน | error |
| CT-004 | Room type mismatch | วิชาต้องใช้ห้องคอมแต่เลือกห้องทั่วไป | error |
| CT-005 | Capacity mismatch | นักเรียน 45 คนใช้ห้อง capacity 30 | error/warning ตาม policy |
| CT-006 | Shared room bypass | ห้อง shared ปิด check_room_conflict | no room conflict |
| CT-007 | Inactive master data | เลือกข้อมูลที่ inactive สำหรับรายการใหม่ | blocked |
| CT-008 | Assignment period count | จัดคาบเกิน periods_per_week | warning/error ตาม policy |
| CT-009 | Heavy subject clustering | วิชาหนักติดกันหลายคาบ | soft warning |
| CT-010 | Teacher consecutive periods | ครูสอนติดกันเกิน threshold | soft warning |
| CT-011 | Blocked timeslot | จัดวิชาปกติในคาบเข้าแถว/พักกลางวัน | error |
| CT-012 | Calendar event warning | จัดคาบในวันที่มีกิจกรรมโรงเรียน severity warning | warning |
| CT-013 | Calendar event blocked | จัดคาบในวันที่มีกิจกรรม severity blocked | error |
| CT-014 | Publish gate | ตารางมี hard conflict แล้วกด publish | blocked |
| CT-015 | MVP one main teacher | เพิ่มครูมากกว่า 1 คนใน entry เดียว | not supported |
| CT-016 | MVP no split class | ห้องเดียวกันมีสอง entry ใน timeslot เดียวกัน | error |

## Testing Priority
เริ่มจาก CT-001 ถึง CT-006 และ CT-011 ถึง CT-014 ก่อน เพราะเป็นแกนของ manual timetable, conflict checker และ publish gate
