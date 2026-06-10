window.MockData = {
  metrics: {
    teachers: 28,
    classSections: 18,
    rooms: 24,
    assignments: 126,
    hardConflicts: 0,
    warnings: 5,
    qualityScore: 82,
    predictedScore: 87
  },
  timetable: {
    name: "ตาราง ม.ต้น ภาคเรียน 1/2569",
    status: "draft",
    classSection: "ม.2/1",
    selectedCell: {
      day: "จันทร์",
      period: "1",
      subject: "คณิตศาสตร์",
      teacher: "ครูสมชาย",
      room: "302",
      state: "passed"
    },
    periods: ["เข้าแถว", "1", "2", "3", "พักกลางวัน", "4", "5", "6", "7"],
    days: ["จันทร์", "อังคาร", "พุธ", "พฤหัสฯ", "ศุกร์"],
    entries: {
      "เข้าแถว-จันทร์": { label: "เข้าแถว", state: "blocked" },
      "เข้าแถว-อังคาร": { label: "เข้าแถว", state: "blocked" },
      "เข้าแถว-พุธ": { label: "เข้าแถว", state: "blocked" },
      "เข้าแถว-พฤหัสฯ": { label: "เข้าแถว", state: "blocked" },
      "เข้าแถว-ศุกร์": { label: "เข้าแถว", state: "blocked" },
      "พักกลางวัน-จันทร์": { label: "พัก", state: "blocked" },
      "พักกลางวัน-อังคาร": { label: "พัก", state: "blocked" },
      "พักกลางวัน-พุธ": { label: "พัก", state: "blocked" },
      "พักกลางวัน-พฤหัสฯ": { label: "พัก", state: "blocked" },
      "พักกลางวัน-ศุกร์": { label: "พัก", state: "blocked" },
      "1-จันทร์": { subject: "คณิต", teacher: "สมชาย", room: "302", state: "passed" },
      "2-จันทร์": { subject: "คณิต", teacher: "สมชาย", room: "302", state: "warning", note: "สอนติดกัน" },
      "1-พุธ": { subject: "วิทย์", teacher: "มาลี", room: "Lab 1", state: "passed" },
      "2-พุธ": { subject: "อังกฤษ", teacher: "วารี", room: "301", state: "passed" },
      "3-พุธ": { subject: "กิจกรรม", teacher: "ระบบ", room: "หอประชุม", state: "warning", note: "วันภาษาไทย" },
      "1-ศุกร์": { subject: "ไทย", teacher: "อร", room: "301", state: "passed" },
      "4-พฤหัสฯ": { subject: "คอม", teacher: "กิตติ", room: "คอม 1", state: "passed" }
    }
  },
  quality: [
    ["Conflict Safety", 30, 30, "ไม่มี hard conflict"],
    ["Teacher Workload", 15, 20, "ครูสมชายสอนติดกัน 2 คาบ"],
    ["Student Learning Balance", 16, 20, "ม.2/1 มีวิชาหนักติดกัน"],
    ["Room & Resource Utilization", 12, 15, "ห้อง Lab ถูกใช้กระจุกช่วงเช้า"],
    ["Calendar & Operational Readiness", 9, 15, "มีรายการทับกิจกรรมวันภาษาไทย"]
  ],
  conflicts: [
    { type: "warning", title: "วิชาหนักติดกัน", detail: "ม.2/1 มีคณิตศาสตร์ติดกัน 2 คาบในวันจันทร์" },
    { type: "warning", title: "Calendar warning", detail: "รายการกิจกรรมทับวันภาษาไทย ระบบให้ตรวจสอบก่อน publish" },
    { type: "passed", title: "ครูไม่ชน", detail: "ไม่พบครูสอนสองห้องในคาบเดียวกัน" },
    { type: "passed", title: "ห้องไม่ชน", detail: "ไม่พบห้องถูกใช้ซ้ำในคาบเดียวกัน" }
  ],
  recommendations: [
    {
      title: "ย้ายคณิตศาสตร์ ม.2/1 คาบ 2",
      reason: "ลดวิชาหนักติดกันและลดภาระครูสมชายช่วงเช้า",
      impact: "+3 คะแนน",
      action: "move_period"
    },
    {
      title: "เปลี่ยนกิจกรรมวันภาษาไทยเป็น warning acknowledged",
      reason: "รายการนี้เป็นกิจกรรมโรงเรียน ไม่ควร block แต่ควรมีหมายเหตุ",
      impact: "+1 readiness",
      action: "mark_warning"
    },
    {
      title: "กระจายการใช้ห้อง Lab",
      reason: "ลดการกระจุกของห้องพิเศษช่วงเช้า",
      impact: "+2 คะแนน",
      action: "change_room"
    }
  ],
  assignments: [
    ["ครูสมชาย", "คณิตศาสตร์", "ม.2/1", "4", "ห้องทั่วไป", "คณิตศาสตร์"],
    ["ครูมาลี", "วิทยาศาสตร์", "ม.2/1", "3", "Lab วิทย์", "วิทยาศาสตร์"],
    ["ครูวารี", "ภาษาอังกฤษ", "ม.2/1", "3", "ห้องทั่วไป", "ภาษาต่างประเทศ"],
    ["ครูกิตติ", "คอมพิวเตอร์", "ม.2/1", "2", "ห้องคอม", "เทคโนโลยี"],
    ["ครูอร", "ภาษาไทย", "ม.2/1", "3", "ห้องทั่วไป", "ภาษาไทย"]
  ],
  masterRows: [
    ["ครู", "28", "active", "จัดกลุ่มสาระครบ"],
    ["วิชา", "36", "active", "มี difficulty level"],
    ["ห้อง", "24", "active", "มี room type และ capacity"],
    ["Blocked Timeslot", "3", "active", "เข้าแถว, พักกลางวัน"],
    ["School Calendar", "8", "warning", "วันวิทย์, วันภาษาไทย, วันสอบ"]
  ],
  reviewRows: [
    ["คณิตศาสตร์", "ครูสมชาย", "18/22", "ผ่าน", "ภาระเหมาะสม"],
    ["วิทยาศาสตร์", "ครูมาลี", "20/22", "warning", "มี Lab ช่วงเช้าหลายวัน"],
    ["ภาษาไทย", "ครูอร", "16/22", "ผ่าน", "ครบจำนวนคาบ"]
  ],
  audit: [
    ["01:10", "Academic Staff", "submit", "ตาราง ม.ต้น"],
    ["01:16", "Department Head", "review", "กลุ่มสาระคณิตศาสตร์"],
    ["01:20", "Academic Lead", "approve", "ตาราง ม.ต้น"]
  ]
};
