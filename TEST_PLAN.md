# TEST_PLAN.md

## 1. Test Strategy
ทดสอบ logic สำคัญก่อน UI โดยเน้น ConstraintChecker, CalendarConstraintService, ApprovalWorkflowService, QualityAnalyzer, RecommendationEngine และ ExplanationService

## 2. Unit Tests
- Teacher conflict
- Room conflict
- Class conflict
- Room type mismatch
- Capacity check
- Shared room bypass
- Blocked timeslot conflict
- Calendar event warning
- Consecutive teaching warning
- Heavy subject clustering
- Quality score calculation by category
- Recommendation score comparison
- Rule-based explanation fallback

## 3. Feature Tests
- Admin creates master data
- Academic staff creates teaching assignment
- Academic staff creates draft timetable
- Manual timetable entry with no conflict
- Timetable entry with teacher conflict
- Normal class cannot be scheduled during blocked assembly/lunch
- Scheduling on calendar event creates warning by default
- Academic staff submits timetable for approval
- Department head reviews own subject group
- Academic lead/deputy approves timetable
- Returned timetable requires return reason
- Timetable with hard conflict cannot be published
- Published timetable is visible to teachers/homeroom teachers/viewers
- Homeroom teacher exports class timetable as print/PDF
- Teacher views own timetable after publish
- Viewer sees dashboard read-only

## 4. E2E Scenarios
### Scenario 1: Basic Feasible Schedule
Expected: conflict = 0, score > 80, timetable can be submitted

### Scenario 2: Teacher Conflict
Expected: system blocks save or shows red error, timetable cannot be published

### Scenario 3: Shared Room
Expected: no room conflict when check_room_conflict is disabled

### Scenario 4: Blocked Timeslot
Expected: normal class during assembly/lunch is blocked as hard conflict

### Scenario 5: Calendar Warning
Expected: scheduling on school event creates warning by default, not hard block

### Scenario 6: Approval Workflow
Expected: draft -> submitted -> approved -> published works by role, returned requires reason

### Scenario 7: Heavy Subjects Clustered
Expected: score decreases and warning appears

### Scenario 8: Recommendation Improvement
Expected: predicted_after_score >= before_score or warning count decreases

### Scenario 9: AI Disabled
Expected: system still explains conflicts, warnings and recommendations with rule-based explanation

### Scenario 10: MVP Boundaries
Expected: one timetable entry supports only one main teacher and split class is not supported

## 5. Acceptance Gate
ก่อนนำเสนอ final ต้องผ่าน:
- Feature tests สำคัญ
- Demo flow สมบูรณ์
- Print/PDF export ได้
- Dashboard แสดงข้อมูลครบ
- ไม่มี hard conflict ใน published timetable
- Rule-based explanation ใช้งานได้แม้ไม่มี AI
- ไม่มี bug blocking
