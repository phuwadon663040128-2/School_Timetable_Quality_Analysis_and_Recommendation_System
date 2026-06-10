# AI_CONTEXT.md

## Project Context
ระบบวิเคราะห์และเพิ่มประสิทธิภาพตารางสอนโรงเรียน

โปรเจคนี้เป็น Web Application สำหรับบริหารข้อมูลกลางของโรงเรียน จัดตารางสอน ตรวจสอบความขัดแย้ง วิเคราะห์คุณภาพตาราง แนะนำการปรับปรุง และอธิบายผลลัพธ์เป็นภาษาไทย โดยต่อยอดแนวคิดจากระบบ TPSS ของมหิดล ได้แก่ Master Data กลาง, RBAC, Workflow การจัดตาราง, Conflict Check, Smart Warning, Dashboard, Audit Trail และ Test/Seeder

MVP ปัจจุบันเน้น Manual Timetable + Real-time Conflict Checker + Lightweight Approval Workflow + Blocked Timeslot/Calendar Warning + Quality Score + Recommendation + Rule-based Explanation + Print/PDF Export ไม่เน้น full auto generator เป็นแกนหลัก

## AI Working Rules
- อ่าน PRODUCT.md, DOMAIN.md, REQUIREMENTS.md, DATA_MODEL.md, WORKFLOWS.md ก่อนแก้โค้ด
- ห้ามเพิ่ม scope นอก MVP โดยไม่แจ้ง
- ห้ามเพิ่ม role นักเรียนใน MVP
- ห้ามใช้ AI เป็นตัวจัดตารางหลัก
- ห้ามดัน full auto generator, split class, co-teaching, Excel export หรือ email notification เข้า MVP
- ห้าม hardcode API key
- Scheduling logic ต้องอยู่ใน Service Layer
- Controller ต้องบาง
- เขียน test สำหรับ logic สำคัญ
- UI ต้อง Thai-first และทางการ
- ฝ่ายวิชาการเป็นคนจัดตาราง หัวหน้ากลุ่มสาระเป็น reviewer หัวหน้างานวิชาการ/รองฯ วิชาการเป็น approver หลัก ผู้อำนวยการเป็น viewer/report consumer
