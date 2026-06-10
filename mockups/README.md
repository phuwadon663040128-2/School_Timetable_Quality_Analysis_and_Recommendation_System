# Mock-up Prototype

Static HTML mock-up สำหรับสาธิตภาพรวมระบบและ role-based templates โดยยังไม่เชื่อม Laravel หรือฐานข้อมูลจริง

## วิธีเปิด
เปิดไฟล์นี้ใน browser:

```txt
mockups/index.html
```

ถ้าต้องการ icon จาก Lucide ให้เชื่อมอินเทอร์เน็ตตอนเปิดหน้า เพราะ mock-up ใช้ CDN สำหรับ icon เท่านั้น ส่วน UI หลักยังใช้งานได้แม้ icon ไม่โหลด

## สิ่งที่ mock-up จำลอง
- Role switcher
- Sidebar/menu ตามบทบาท
- Dashboard ตาม context ของ role
- Master Data
- Teaching Assignment
- Manual Timetable Editor
- Conflict & Quality Analysis
- Recommendation
- Department Review
- Approval Queue
- Published timetable view
- Reports / Print PDF preview

## บทบาทที่รองรับ
- Admin
- Academic Staff / ฝ่ายวิชาการ
- Department Head / หัวหน้ากลุ่มสาระ
- Academic Lead / หัวหน้างานวิชาการหรือรองฯ วิชาการ
- Teacher / ครูผู้สอน
- Homeroom Teacher / ครูประจำชั้น
- Director / Viewer

## Demo flow ที่แนะนำ
1. เลือกบทบาท `ฝ่ายวิชาการ`
2. เปิด `Timetable Editor`
3. คลิก cell ในตาราง
4. กด `ตรวจ Conflict`
5. กด `วิเคราะห์`
6. เปิด `Recommendation`
7. กลับไป `Submit / Publish` แล้วกด `Submit`
8. เปลี่ยนบทบาทเป็น `หัวหน้างานวิชาการ / รองฯ วิชาการ`
9. กด `Approve`
10. กด `Publish`
11. เปลี่ยนบทบาทเป็น `ครูผู้สอน`, `ครูประจำชั้น` หรือ `ผู้บริหาร / Viewer` เพื่อดู template แต่ละบทบาท

## ขอบเขต
mock-up นี้เน้นภาพรวม UX และ permission logic เท่านั้น ไม่มี backend, validation จริง, auth จริง หรือ database
