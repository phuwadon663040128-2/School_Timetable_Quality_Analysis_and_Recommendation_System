# DATA_MODEL.md

## 1. Core Entities
```txt
users
roles
permissions
role_user
personnel
positions
departments
department_members
academic_years
terms
teachers
subjects
room_types
rooms
grade_levels
class_sections
timeslots
homeroom_assignments
teaching_assignments
blocked_timeslots
school_calendar_events
timetables
timetable_entries
timetable_review_logs
timetable_approval_logs
conflict_logs
quality_scores
quality_score_details
recommendations
recommendation_items
audit_logs
ai_prompt_logs
```

## 2. Key Relations
- users 1:1 personnel
- personnel M:N departments ผ่าน department_members
- users M:N roles ผ่าน role_user
- teachers มีหลาย teaching_assignments
- subjects มีหลาย teaching_assignments
- class_sections มีหลาย teaching_assignments
- rooms มีหลาย timetable_entries
- timeslots มีหลาย timetable_entries
- timetables มีหลาย timetable_entries
- timetables มีหลาย timetable_review_logs
- timetables มีหลาย timetable_approval_logs
- timetable_entries อ้างอิง teaching_assignments
- timetable_entries มี teacher_id เป็น snapshot ของครูหลักใน MVP
- timetables มี quality_scores
- quality_scores มี quality_score_details
- timetables มี recommendations
- recommendations มี recommendation_items

## 3. Important Tables
### teachers
- id
- personnel_id
- department_id
- teacher_code
- max_periods_per_week
- is_active

### subjects
- id
- code
- name
- subject_type
- difficulty_level
- periods_per_week
- required_room_type_id
- is_active

### rooms
- id
- code
- name
- room_type_id
- capacity
- check_room_conflict
- check_capacity
- is_shared
- is_active

### class_sections
- id
- grade_level_id
- name
- student_count
- academic_year_id
- term_id
- is_active

### timeslots
- id
- day_of_week
- period_no
- start_time
- end_time
- label
- is_active

### homeroom_assignments
- id
- teacher_id
- class_section_id
- academic_year_id
- term_id

### teaching_assignments
- id
- teacher_id
- subject_id
- class_section_id
- academic_year_id
- term_id
- periods_per_week
- required_room_type_id
- priority_level
- notes
- is_active

### blocked_timeslots
- id
- academic_year_id
- term_id
- timeslot_id
- title
- type
- severity
- applies_every_week
- is_active

Notes:
- ใช้กับช่วงประจำ เช่น เข้าแถวหรือพักกลางวัน
- `severity` ใช้ค่า `blocked` หรือ `warning`
- ค่า default สำหรับเข้าแถว/พักกลางวันควรเป็น `blocked`

### school_calendar_events
- id
- academic_year_id
- term_id
- event_date
- title
- event_type
- severity
- description
- is_active

Notes:
- ใช้กับวันหยุด วันสอบ หรือกิจกรรมโรงเรียน
- ค่า default คือ `warning`
- admin สามารถตั้งเป็น `blocked` ได้

### timetables
- id
- academic_year_id
- term_id
- name
- status
- created_by
- submitted_by
- submitted_at
- approved_by
- approved_at
- published_by
- published_at
- archived_at
- notes

Allowed status:
- draft
- submitted
- returned
- approved
- published
- archived

### timetable_entries
- id
- timetable_id
- teaching_assignment_id
- teacher_id
- subject_id
- class_section_id
- timeslot_id
- room_id
- status
- source_type
- notes

Notes:
- MVP ใช้ครูหลัก 1 คนต่อ entry
- `teacher_id`, `subject_id`, `class_section_id` เป็น snapshot/denormalized fields จาก teaching assignment เพื่อ query และ report ได้ง่าย
- ต้องมี validation ให้ snapshot ตรงกับ teaching assignment ตอนสร้างหรือแก้ไข
- ไม่เพิ่ม `timetable_entry_teachers` ใน MVP เพราะ co-teaching เป็น future scope

### timetable_review_logs
- id
- timetable_id
- reviewer_id
- department_id
- status
- comment
- reviewed_at

Notes:
- ใช้ให้หัวหน้ากลุ่มสาระตรวจเฉพาะกลุ่มสาระ
- ไม่ใช่ approval gate หลายชั้นใน MVP

### timetable_approval_logs
- id
- timetable_id
- actor_id
- action
- from_status
- to_status
- reason
- acted_at

Allowed action:
- submit
- review
- return
- approve
- publish
- archive

### conflict_logs
- id
- timetable_entry_id
- conflict_type
- severity
- message
- related_entry_id

### quality_scores
- id
- timetable_id
- score
- conflict_safety_score
- teacher_workload_score
- student_learning_balance_score
- room_resource_utilization_score
- calendar_operational_readiness_score
- analyzed_at

### quality_score_details
- id
- quality_score_id
- category
- severity
- message
- deduction
- related_entry_id

### recommendations
- id
- timetable_id
- title
- description
- before_score
- predicted_after_score
- status
- created_at

### recommendation_items
- id
- recommendation_id
- action_type
- timetable_entry_id
- from_timeslot_id
- to_timeslot_id
- from_room_id
- to_room_id
- reason
- expected_score_delta

## 4. MVP Modeling Boundaries
- ไม่มี student login
- ไม่มี split class/subgroup
- ไม่มี co-teaching pivot table
- ไม่มี full auto generator tables ใน MVP
- Teacher unavailable time เป็น future scope
- Excel export เป็น future scope
