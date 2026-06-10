# BACKLOG.md

## Epic 1: Documentation & Proposal
- สรุป problem statement
- วิเคราะห์ระบบเดิมและคู่แข่ง
- เขียน PRODUCT.md
- เขียน DOMAIN.md
- เขียน REQUIREMENTS.md
- เขียน WORKFLOWS.md
- ทำ flowchart
- ทำ proposal presentation
- ล็อก MVP exclusions

## Epic 2: User & Role
User Story: ในฐานะผู้ดูแลระบบ ฉันต้องการกำหนดสิทธิ์ผู้ใช้ เพื่อให้แต่ละบทบาทเห็นเมนูตามหน้าที่

Tasks:
- Setup Laravel Breeze
- Create roles/permissions
- Role middleware
- Define Academic Staff, Department Head, Academic Lead/Deputy, Teacher, Homeroom Teacher, Viewer
- Tests

## Epic 3: Master Data
User Story: ในฐานะฝ่ายวิชาการ ฉันต้องการจัดการข้อมูลครู วิชา ห้องเรียน และชั้นเรียน เพื่อใช้เป็นข้อมูลกลาง

Tasks:
- Teachers CRUD
- Subjects CRUD
- Rooms CRUD
- Room Types CRUD
- Grade Levels CRUD
- Class Sections CRUD
- Timeslots CRUD
- Validation and tests

## Epic 4: Academic Calendar & Blocked Time
User Story: ในฐานะฝ่ายวิชาการ ฉันต้องการกำหนดคาบที่ห้ามจัดและกิจกรรมโรงเรียน เพื่อป้องกันตารางทับช่วงสำคัญ

Tasks:
- Blocked Timeslots CRUD
- School Calendar Events CRUD
- Severity: blocked/warning
- CalendarConstraintService
- Tests

## Epic 5: Teaching Assignment
Tasks:
- Create teaching_assignments table
- Build assignment page
- Workload summary
- Department filtering
- MVP rule: one main teacher
- Tests

## Epic 6: Manual Timetable
Tasks:
- Create timetables and entries
- Timetable statuses
- Manual timetable editor
- View by class
- View by teacher
- View by room
- Copy entry optional
- Tests

## Epic 7: Conflict Checker
Tasks:
- checkTeacherConflict
- checkRoomConflict
- checkClassConflict
- checkRoomTypeMismatch
- checkRoomCapacity
- checkBlockedTimeslot
- checkCalendarWarning
- shared room logic
- UI warnings/errors
- Unit tests

## Epic 8: Lightweight Approval Workflow
Tasks:
- Draft/submitted/returned/approved/published/archived status
- Submit action
- Department head review log
- Approve action
- Return action with reason
- Publish action
- Prevent publish with hard conflicts
- Tests

## Epic 9: Quality & Recommendation
Tasks:
- Quality scoring categories
- Conflict Safety
- Teacher consecutive periods
- Heavy subject clustering
- Workload balance
- Room utilization
- Calendar readiness
- Recommendation before/predicted after score
- Warning reduction metric
- Tests

## Epic 10: Explanation & Reports
Tasks:
- Rule-based explanation
- AI provider interface optional
- Print/PDF timetable
- Print/PDF quality report
- Dashboard
- Final demo

## Future Scope
- Full auto timetable generator
- Co-teaching
- Split class/subgroup
- Teacher unavailable time
- Excel export
- Director final acknowledge
- Email notification
