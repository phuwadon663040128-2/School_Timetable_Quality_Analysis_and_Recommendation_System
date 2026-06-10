# DATA_DICTIONARY.md

## Naming Rules
- ใช้ชื่อตารางแบบ snake_case พหูพจน์
- ใช้ foreign key รูปแบบ `{entity}_id`
- ข้อมูลที่ปิดใช้งานแทนการลบ ใช้ `is_active`
- ตารางที่ผูกกับปี/เทอมควรมี `academic_year_id` และ `term_id`

## Important Field Meanings
| Field | Meaning |
|---|---|
| check_room_conflict | กำหนดว่าห้องนี้ต้องตรวจการชนของห้องหรือไม่ |
| check_capacity | กำหนดว่าห้องนี้ต้องตรวจความจุหรือไม่ |
| is_shared | ห้อง/พื้นที่ใช้ร่วมกันได้ |
| priority_level | ความยากหรือความสำคัญของ teaching assignment สำหรับการจัดตาราง/วิเคราะห์ |
| source_type | manual เป็นค่าเริ่มต้น, generated เป็น future scope |
| status | สถานะตามบริบท เช่น timetable lifecycle หรือ entry status |
| severity | ระดับผลกระทบ เช่น blocked, warning, error |
| predicted_after_score | คะแนนที่คาดว่าจะได้หลังทำตาม recommendation |

## Suggested Enums
### timetable_entries.source_type
- manual
- generated

### timetable_entries.status
- active
- locked
- cancelled

### timetables.status
- draft
- submitted
- returned
- approved
- published
- archived

### timetable_approval_logs.action
- submit
- review
- return
- approve
- publish
- archive

### conflict_logs.severity
- error
- warning

### blocked_timeslots.severity
- blocked
- warning

### school_calendar_events.severity
- blocked
- warning

### recommendations.status
- draft
- accepted
- rejected
