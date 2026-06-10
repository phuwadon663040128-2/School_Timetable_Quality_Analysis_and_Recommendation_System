# REQUIREMENTS.md

## 1. Functional Requirements

### FR-01 User & Role Management
- ระบบต้องให้ผู้ใช้ login/logout ได้
- ระบบต้องกำหนดสิทธิ์ตาม role ได้
- ผู้ใช้หนึ่งคนสามารถมีหลาย role ได้
- ระบบต้องแสดงเมนูตาม role ปัจจุบัน
- ระบบต้องรองรับบทบาทหลัก ได้แก่ Admin, Academic Staff, Department Head, Academic Lead/Deputy Academic Director, Teacher, Homeroom Teacher และ Viewer

### FR-02 School Master Data
- ระบบต้องจัดการข้อมูลปีการศึกษา ภาคเรียน บุคลากร ตำแหน่ง ฝ่าย กลุ่มสาระ ครู วิชา ห้อง ห้องเรียน และคาบเรียนได้
- ระบบต้องปิดใช้งานข้อมูล master data โดยไม่ลบข้อมูลที่เคยอ้างอิงในตาราง
- ระบบต้องป้องกันการใช้ master data ที่ inactive กับรายการใหม่

### FR-03 Academic Year & Term
- ระบบต้องกำหนดปีการศึกษาและภาคเรียนปัจจุบันได้
- ระบบต้องกำหนดช่วงเปิดให้จัดตารางได้
- ข้อมูล timetable, assignment, blocked timeslot และ calendar event ต้องผูกกับปีการศึกษา/ภาคเรียน

### FR-04 Personnel / Department
- ระบบต้องเก็บข้อมูลบุคลากรและสังกัด
- ระบบต้องกำหนดหัวหน้ากลุ่มสาระได้
- ระบบต้องแยกตำแหน่งจริงกับสิทธิ์ในระบบ

### FR-05 Homeroom Assignment
- ระบบต้องกำหนดครูประจำชั้นให้แต่ละห้องตามปี/เทอมได้
- ครูประจำชั้นต้องดู/print/PDF export ตารางเรียนของห้องที่รับผิดชอบได้หลังตาราง published

### FR-06 Subject Management
- ระบบต้องเก็บรหัสวิชา ชื่อวิชา ประเภทวิชา จำนวนคาบต่อสัปดาห์ ระดับความยาก และประเภทห้องที่ต้องใช้
- ระบบต้องใช้ระดับความยากของวิชาในการวิเคราะห์ Student Learning Balance

### FR-07 Room Management
- ระบบต้องจัดการห้องและประเภทห้องได้
- ห้องต้องกำหนด capacity ได้
- ห้องต้องกำหนด check_room_conflict และ check_capacity ได้
- ห้องประเภทพื้นที่เปิดสามารถตั้งค่าเป็น shared ได้

### FR-08 Teaching Assignment
- ระบบต้องกำหนดว่าครูคนใดสอนวิชาใดให้ห้องใด กี่คาบต่อสัปดาห์
- ระบบต้องแสดงภาระสอนรวมของครูและกลุ่มสาระได้
- MVP รองรับครูหลัก 1 คนต่อ teaching assignment และ timetable entry
- Co-teaching เป็น future scope

### FR-09 Manual Timetable
- ผู้ใช้ที่มีสิทธิ์ต้องเพิ่ม/แก้ไข/ลบรายการตารางได้ในสถานะที่อนุญาต
- ระบบต้องตรวจ conflict ก่อนบันทึกหรือระหว่างเลือกข้อมูล
- ระบบต้องรองรับการดูตารางตามชั้นเรียน ครู ห้อง และรายการรวม
- หนึ่ง class section ต้องมีได้เพียงหนึ่ง timetable entry ต่อหนึ่ง timeslot ใน MVP
- Split class/subgroup เป็น out of scope สำหรับ MVP

### FR-10 Blocked Timeslot & School Calendar
- ระบบต้องรองรับ blocked timeslot สำหรับช่วงเวลาประจำ เช่น เข้าแถวและพักกลางวัน
- รายการที่ทับ blocked timeslot ต้องถูกถือเป็น hard conflict
- ระบบต้องรองรับ school calendar event เช่น วันหยุด วันสอบ วันกิจกรรมโรงเรียน หรือประชุมผู้ปกครอง
- School calendar event ต้องเป็น warning โดยค่าเริ่มต้น และ admin สามารถตั้งเป็น blocked ได้
- ระบบต้องแสดง warning เมื่อจัดตารางทับ calendar event ที่ไม่ใช่ hard block

### FR-11 Conflict Checker
- ระบบต้องตรวจครูชน
- ระบบต้องตรวจห้องชน
- ระบบต้องตรวจชั้นเรียนชน
- ระบบต้องตรวจห้องไม่ตรงประเภท
- ระบบต้องตรวจความจุห้อง หากห้องนั้นเปิด check_capacity
- ระบบต้องไม่ตรวจ room conflict สำหรับห้องที่ปิด check_room_conflict
- ระบบต้องตรวจ blocked timeslot เป็น hard conflict
- ตารางที่มี hard conflict ต้อง publish ไม่ได้

### FR-12 Lightweight Approval Workflow
- ระบบต้องรองรับสถานะตาราง `draft`, `submitted`, `returned`, `approved`, `published`, `archived`
- ฝ่ายวิชาการต้องสร้างและแก้ไข draft timetable ได้
- หัวหน้ากลุ่มสาระต้องตรวจข้อมูลเฉพาะกลุ่มสาระของตนเองได้ในฐานะ reviewer
- หัวหน้างานวิชาการหรือรองผู้อำนวยการฝ่ายวิชาการต้อง approve หรือ return ตารางได้
- การ return ต้องมีเหตุผล
- ตารางที่ approved แล้วต้อง publish ได้โดยผู้มีสิทธิ์
- ตารางที่ published แล้วครู ครูประจำชั้น และ viewer ต้องดู/print/PDF export ได้
- Director/final acknowledge เป็น future scope

### FR-13 Quality Analyzer
- ระบบต้องคำนวณ Quality Score 0-100
- ระบบต้องแสดงเหตุผลที่คะแนนลด
- ระบบต้องแยก hard conflict กับ soft warning ชัดเจน
- Quality Score ต้องแบ่งหมวดอย่างน้อย Conflict Safety, Teacher Workload, Student Learning Balance, Room & Resource Utilization และ Calendar & Operational Readiness

### FR-14 Recommendation Engine
- ระบบต้องเสนอการย้ายคาบหรือเปลี่ยนห้องเบื้องต้นได้
- ระบบต้องแสดง predicted before/after score
- ระบบต้องบอกเหตุผลของข้อเสนอ
- Recommendation ใน MVP เป็นข้อเสนอให้ผู้ใช้พิจารณา ไม่ใช่การแก้ตารางอัตโนมัติ

### FR-15 Explanation Assistant
- ระบบต้องอธิบายผลด้วย rule-based template ได้
- ระบบอาจเชื่อม AI ผ่าน KKU Intelsphere เป็น optional provider
- ถ้า AI ปิดหรือ quota หมด ระบบต้อง fallback เป็น rule-based
- AI ห้ามเป็นตัวตัดสินใจจัดตารางหรืออนุมัติตาราง

### FR-16 Dashboard & Reports
- ระบบต้องแสดงจำนวนข้อมูลหลัก จำนวน conflict จำนวน warning สถานะตาราง และ Quality Score
- ระบบต้อง print/PDF export ตารางครู ตารางชั้นเรียน ตารางห้อง รายงาน conflict/warning และรายงาน quality score ได้
- Excel export เป็น future scope

### FR-17 Audit Log
- ระบบควรบันทึกการเปลี่ยนแปลงข้อมูลสำคัญ เช่น master data, teaching assignment, timetable, approval, publish, recommendation และ export

## 2. Non-functional Requirements
- ใช้งานผ่าน browser
- UI ภาษาไทยเป็นหลัก
- UI ทางการ เรียบง่าย ไม่สีจัด
- รองรับ desktop เป็นหลัก
- ระบบต้องตรวจสอบข้อมูลก่อนบันทึก
- โครงสร้างต้องรองรับการขยายในอนาคต
- ห้าม hardcode API key
- ต้องมี test สำหรับ constraint สำคัญ
- Controller ต้องบาง และ logic สำคัญต้องอยู่ใน service layer
- Rule-based explanation ต้องใช้งานได้แม้ไม่มี AI provider

## 3. MVP Exclusions
- Full auto timetable generator
- Split class / subgroup
- Co-teaching
- Student login
- Mobile app เต็มรูปแบบ
- SSO
- Email notification
- Excel export
- ระบบจองห้องเต็มรูปแบบ
- AI-based scheduling decision
- Multi-level approval workflow ซับซ้อน

## 4. Acceptance Criteria
- เพิ่ม master data ได้ครบ
- สร้าง teaching assignment ได้
- จัดตาราง manual ได้
- ตรวจครูชน ห้องชน ชั้นเรียนชน ห้องผิดประเภท capacity และ blocked timeslot ได้
- ห้อง shared ไม่ถูกถือว่าชน
- Calendar event แบบ warning ไม่ block การบันทึกโดยค่าเริ่มต้น
- ตารางที่มี hard conflict publish ไม่ได้
- ส่งตารางให้อนุมัติ approve return และ publish ได้ตามสิทธิ์
- การ return ต้องมีเหตุผล
- คำนวณ Quality Score พร้อมเหตุผลที่คะแนนลดได้
- แนะนำวิธีปรับปรุงอย่างน้อย 1 ประเภทพร้อม predicted before/after score ได้
- AI disabled แล้วยังอธิบายผลด้วย rule-based explanation ได้
- ครูประจำชั้น export ตารางห้องตนเองเป็น print/PDF ได้หลัง published
