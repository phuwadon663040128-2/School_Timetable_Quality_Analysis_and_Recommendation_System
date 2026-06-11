window.RoleConfig = {
  admin: {
    label: "Admin",
    thaiLabel: "ผู้ดูแลระบบ",
    badge: "ควบคุมระบบ",
    description: "ดูแลผู้ใช้ สิทธิ์ ข้อมูลกลาง และประวัติการดำเนินการ",
    defaultPage: "dashboard",
    permissions: ["manage_users", "manage_master_data", "view_audit"],
    menus: [
      ["dashboard", "ภาพรวม", "layout-dashboard"],
      ["users", "ผู้ใช้และสิทธิ์", "shield-check"],
      ["masterData", "ข้อมูลกลาง", "database"],
      ["reports", "รายงาน", "file-text"],
      ["audit", "ประวัติการดำเนินการ", "history"]
    ]
  },
  academicStaff: {
    label: "ฝ่ายวิชาการ",
    thaiLabel: "ฝ่ายวิชาการ",
    badge: "ผู้จัดตาราง",
    description: "จัดตารางฉบับร่าง ตรวจตารางชน ส่งอนุมัติ และเผยแพร่ตามสิทธิ์",
    defaultPage: "dashboard",
    permissions: ["edit_timetable", "submit_timetable", "publish_timetable", "manage_master_data"],
    menus: [
      ["dashboard", "ภาพรวม", "layout-dashboard"],
      ["masterData", "ข้อมูลกลาง", "database"],
      ["assignments", "ภาระสอน", "clipboard-list"],
      ["timetable", "จัดตารางสอน", "calendar-days"],
      ["quality", "ตรวจชนและคุณภาพ", "activity"],
      ["recommendations", "คำแนะนำ", "lightbulb"],
      ["approval", "ส่งอนุมัติ/เผยแพร่", "send"],
      ["reports", "รายงาน", "file-text"]
    ]
  },
  departmentHead: {
    label: "หัวหน้ากลุ่มสาระ",
    thaiLabel: "หัวหน้ากลุ่มสาระ",
    badge: "ผู้ตรวจสอบ",
    description: "ตรวจภาระครูและความถูกต้องเฉพาะกลุ่มสาระของตนเอง",
    defaultPage: "departmentDashboard",
    permissions: ["review_department", "view_department_workload"],
    menus: [
      ["departmentDashboard", "ภาพรวม", "layout-dashboard"],
      ["assignments", "ภาระสอน", "clipboard-list"],
      ["departmentWorkload", "ภาระสอนครู", "bar-chart-3"],
      ["review", "ตรวจตาราง", "message-square-text"],
      ["reports", "รายงาน", "file-text"]
    ]
  },
  academicLead: {
    label: "หัวหน้างานวิชาการ",
    thaiLabel: "หัวหน้างานวิชาการ / รองฯ วิชาการ",
    badge: "ผู้อนุมัติ",
    description: "ตรวจภาพรวม อนุมัติหรือส่งกลับตารางก่อนเผยแพร่",
    defaultPage: "approval",
    permissions: ["approve_timetable", "return_timetable", "publish_timetable", "view_quality"],
    menus: [
      ["dashboard", "ภาพรวม", "layout-dashboard"],
      ["approval", "รายการรออนุมัติ", "check-circle-2"],
      ["quality", "สรุปคุณภาพ", "activity"],
      ["recommendations", "คำแนะนำ", "lightbulb"],
      ["reports", "รายงาน", "file-text"]
    ]
  },
  teacher: {
    label: "ครูผู้สอน",
    thaiLabel: "ครูผู้สอน",
    badge: "มุมมองหลังเผยแพร่",
    description: "ดูตารางสอนและภาระสอนของตนเองหลังเผยแพร่",
    defaultPage: "myTimetable",
    permissions: ["view_own_timetable", "print_own_timetable"],
    menus: [
      ["myTimetable", "ตารางสอนของฉัน", "calendar-check"],
      ["myWorkload", "ภาระสอนของฉัน", "briefcase-business"],
      ["reports", "พิมพ์/PDF", "printer"]
    ]
  },
  homeroomTeacher: {
    label: "ครูประจำชั้น",
    thaiLabel: "ครูประจำชั้น",
    badge: "มุมมองห้องเรียน",
    description: "ดูและพิมพ์ตารางเรียนของห้องที่รับผิดชอบ",
    defaultPage: "homeroomTimetable",
    permissions: ["view_homeroom_timetable", "print_homeroom_timetable"],
    menus: [
      ["homeroomTimetable", "ตารางเรียนของห้อง", "calendar-range"],
      ["classTeachers", "ครูประจำวิชา", "users"],
      ["reports", "พิมพ์/PDF", "printer"]
    ]
  },
  director: {
    label: "ผู้บริหาร / ผู้ดูแลภาพรวม",
    thaiLabel: "ผู้บริหาร / ผู้ดูแลภาพรวม",
    badge: "ดูอย่างเดียว",
    description: "ดูภาพรวม คุณภาพตาราง และรายงานหลังเผยแพร่",
    defaultPage: "executiveDashboard",
    permissions: ["view_dashboard", "view_reports"],
    menus: [
      ["executiveDashboard", "ภาพรวมผู้บริหาร", "layout-dashboard"],
      ["quality", "สรุปคุณภาพ", "activity"],
      ["reports", "รายงาน", "file-text"]
    ]
  }
};
