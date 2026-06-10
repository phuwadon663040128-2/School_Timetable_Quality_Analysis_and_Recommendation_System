window.RoleConfig = {
  admin: {
    label: "Admin",
    thaiLabel: "ผู้ดูแลระบบ",
    badge: "System control",
    description: "ดูแลผู้ใช้ สิทธิ์ ข้อมูลกลาง และ audit log",
    defaultPage: "dashboard",
    permissions: ["manage_users", "manage_master_data", "view_audit"],
    menus: [
      ["dashboard", "Dashboard", "layout-dashboard"],
      ["users", "User & Role", "shield-check"],
      ["masterData", "Master Data", "database"],
      ["reports", "Reports", "file-text"],
      ["audit", "Audit Log", "history"]
    ]
  },
  academicStaff: {
    label: "Academic Staff",
    thaiLabel: "ฝ่ายวิชาการ",
    badge: "Scheduler",
    description: "จัดตาราง draft ตรวจ conflict ส่งอนุมัติ และ publish ตามสิทธิ์",
    defaultPage: "dashboard",
    permissions: ["edit_timetable", "submit_timetable", "publish_timetable", "manage_master_data"],
    menus: [
      ["dashboard", "Dashboard", "layout-dashboard"],
      ["masterData", "Master Data", "database"],
      ["assignments", "Teaching Assignment", "clipboard-list"],
      ["timetable", "Timetable Editor", "calendar-days"],
      ["quality", "Conflict & Quality", "activity"],
      ["recommendations", "Recommendation", "lightbulb"],
      ["approval", "Submit / Publish", "send"],
      ["reports", "Reports", "file-text"]
    ]
  },
  departmentHead: {
    label: "Department Head",
    thaiLabel: "หัวหน้ากลุ่มสาระ",
    badge: "Reviewer",
    description: "ตรวจภาระครูและความถูกต้องเฉพาะกลุ่มสาระของตนเอง",
    defaultPage: "departmentDashboard",
    permissions: ["review_department", "view_department_workload"],
    menus: [
      ["departmentDashboard", "Dashboard", "layout-dashboard"],
      ["assignments", "Teaching Assignment", "clipboard-list"],
      ["departmentWorkload", "Teacher Workload", "bar-chart-3"],
      ["review", "Review Timetable", "message-square-text"],
      ["reports", "Reports", "file-text"]
    ]
  },
  academicLead: {
    label: "Academic Lead",
    thaiLabel: "หัวหน้างานวิชาการ / รองฯ วิชาการ",
    badge: "Approver",
    description: "ตรวจภาพรวม อนุมัติหรือส่งกลับตารางก่อนเผยแพร่",
    defaultPage: "approval",
    permissions: ["approve_timetable", "return_timetable", "publish_timetable", "view_quality"],
    menus: [
      ["dashboard", "Dashboard", "layout-dashboard"],
      ["approval", "Approval Queue", "check-circle-2"],
      ["quality", "Quality Summary", "activity"],
      ["recommendations", "Recommendation", "lightbulb"],
      ["reports", "Reports", "file-text"]
    ]
  },
  teacher: {
    label: "Teacher",
    thaiLabel: "ครูผู้สอน",
    badge: "Published view",
    description: "ดูตารางสอนและภาระสอนของตนเองหลัง publish",
    defaultPage: "myTimetable",
    permissions: ["view_own_timetable", "print_own_timetable"],
    menus: [
      ["myTimetable", "My Timetable", "calendar-check"],
      ["myWorkload", "My Workload", "briefcase-business"],
      ["reports", "Print / PDF", "printer"]
    ]
  },
  homeroomTeacher: {
    label: "Homeroom Teacher",
    thaiLabel: "ครูประจำชั้น",
    badge: "Class view",
    description: "ดูและพิมพ์ตารางเรียนของห้องที่รับผิดชอบ",
    defaultPage: "homeroomTimetable",
    permissions: ["view_homeroom_timetable", "print_homeroom_timetable"],
    menus: [
      ["homeroomTimetable", "Class Timetable", "calendar-range"],
      ["classTeachers", "Subject Teachers", "users"],
      ["reports", "Print / PDF", "printer"]
    ]
  },
  director: {
    label: "Director / Viewer",
    thaiLabel: "ผู้บริหาร / Viewer",
    badge: "View only",
    description: "ดู dashboard ภาพรวม คุณภาพตาราง และรายงานหลัง publish",
    defaultPage: "executiveDashboard",
    permissions: ["view_dashboard", "view_reports"],
    menus: [
      ["executiveDashboard", "Executive Dashboard", "layout-dashboard"],
      ["quality", "Quality Summary", "activity"],
      ["reports", "Reports", "file-text"]
    ]
  }
};
