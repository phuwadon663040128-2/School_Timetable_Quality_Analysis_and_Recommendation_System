# SERVICE_BOUNDARIES.md

## TimetableService
Manages manual timetable creation and updates.

Responsibilities:
- Create and update timetable entries
- Enforce editable timetable statuses
- Prepare data for class/teacher/room views
- Coordinate conflict checks before save

Not responsible for:
- Approval decisions
- Final explanation text
- PDF rendering

## ConstraintChecker
Validates hard constraints and warning conditions.

Checks:
- Teacher conflict
- Room conflict
- Class section conflict
- Room type mismatch
- Capacity mismatch
- Shared room bypass
- Blocked timeslot
- Calendar event warning/block

## CalendarConstraintService
Interprets blocked timeslots and school calendar events.

Responsibilities:
- Return hard blocks for assembly/lunch or blocked events
- Return warnings for school calendar events by default
- Provide calendar readiness data for QualityAnalyzer

## ApprovalWorkflowService
Controls lightweight approval workflow.

Responsibilities:
- Submit timetable
- Record department review
- Return with reason
- Approve
- Publish
- Archive
- Prevent publish when hard conflicts exist

## QualityAnalyzer
Calculates score and soft warnings.

Categories:
- Conflict Safety
- Teacher Workload
- Student Learning Balance
- Room & Resource Utilization
- Calendar & Operational Readiness

## RecommendationEngine
Suggests timetable changes.

Examples:
- Move period
- Change room
- Reduce heavy subject clustering
- Reduce teacher consecutive periods

MVP recommendations are suggestions with predicted before/after score, not automatic edits.

## ExplanationService
Converts conflict, score and recommendation results into Thai explanation.

Provider strategy:
- RuleBasedExplanationProvider as default
- KkuIntelsphereProvider as optional
