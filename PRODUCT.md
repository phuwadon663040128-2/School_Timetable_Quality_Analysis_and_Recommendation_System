# PRODUCT.md

## 1. Product Vision
ระบบวิเคราะห์และเพิ่มประสิทธิภาพตารางสอนโรงเรียน เป็นระบบสนับสนุนการจัดตารางสอนโรงเรียนที่ไม่ได้หยุดแค่ “สร้างตาราง” แต่ช่วยตอบว่า “ตารางนี้ดีพอหรือยัง มีปัญหาตรงไหน และควรปรับอย่างไร”

## 2. Problem Statement
โรงเรียนจำนวนมากมีการจัดตารางสอนโดยใช้โปรแกรมสำเร็จรูปหรือไฟล์ Excel ซึ่งช่วยจัดตารางและพิมพ์รายงานได้ แต่ยังมีช่องว่างในการวิเคราะห์คุณภาพของตาราง เช่น ภาระงานครูไม่สมดุล วิชาหนักติดกัน ห้องพิเศษใช้งานไม่เหมาะสม หรือผู้ใช้ไม่เข้าใจว่าควรแก้ปัญหาตารางตรงไหนก่อน

## 3. Product Goals
1. ลดการกรอกข้อมูลซ้ำด้วย Master Data กลาง
2. รองรับการจัดตารางสอนแบบ manual ที่ตรวจสอบได้
3. ตรวจ conflict แบบ real-time
4. รองรับ lightweight approval workflow ก่อนเผยแพร่ตาราง
5. วิเคราะห์คุณภาพตารางด้วย Soft Constraints
6. แนะนำแนวทางปรับปรุงตาราง
7. อธิบายผลการตรวจ/วิเคราะห์เป็นภาษาไทย
8. ส่งออกตารางแบบ print/PDF ตามบทบาทผู้ใช้

## 4. Target Users
| User | Need |
|---|---|
| ฝ่ายวิชาการ | จัดข้อมูลกลาง จัดตาราง draft ตรวจ conflict ส่งอนุมัติ และ publish/export |
| หัวหน้ากลุ่มสาระ | ตรวจภาระครูและความถูกต้องเฉพาะกลุ่มสาระของตนเอง |
| หัวหน้างานวิชาการ / รองฯ วิชาการ | อนุมัติหรือส่งกลับตารางรวมก่อนเผยแพร่ |
| ครูผู้สอน | ดูตารางสอนของตนเอง |
| ครูประจำชั้น | ดู/print/export ตารางเรียนของห้องที่รับผิดชอบ |
| ผู้อำนวยการ / ผู้บริหาร | ดู dashboard รายงานคุณภาพ และรับทราบภาพรวม |
| Admin | จัดการระบบและสิทธิ์ |

## 5. Differentiation
ระบบนี้ไม่ใช่การสร้างโปรแกรมแทน TRWIN หรือโปรแกรมจัดตารางสำเร็จรูป แต่เป็นระบบที่เน้น Master Data, Conflict, Quality Analysis, Recommendation และ Explanation โดยยึด workflow โรงเรียนไทยเป็นหลัก

## 6. MVP Scope
- User & Role
- Master Data
- Academic Year / Term
- Personnel / Department
- Homeroom Assignment
- Teaching Assignment
- Manual Timetable
- Conflict Checker
- Blocked Timeslot
- School Calendar Warning
- Lightweight Approval Workflow
- Quality Score
- Recommendation เบื้องต้น
- Rule-based Explanation
- Optional AI Explanation
- Print / PDF Export
- Dashboard / Alerts เบื้องต้น

## 7. Out of Scope
- Student login
- Mobile app เต็มรูปแบบ
- SSO
- Email notification
- ระบบจองห้องเต็มรูปแบบ
- เชื่อม TRWIN จริงทันที
- Full auto timetable generator
- Split class
- Co-teaching
- Excel export
- AI จัดตารางแทน algorithm
- Approval workflow ซับซ้อน
