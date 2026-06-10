# DOMAIN.md

## 1. Domain Overview
ระบบอยู่ในบริบทโรงเรียนไทย ระดับมัธยมศึกษา โดยมีผู้จัดตารางหลักคือฝ่ายวิชาการ และมีผู้เกี่ยวข้อง เช่น หัวหน้ากลุ่มสาระ ครูผู้สอน ครูประจำชั้น และผู้บริหาร

## 2. Key Concepts
### Personnel
บุคลากรในโรงเรียน เช่น ผู้อำนวยการ รองผู้อำนวยการ ครู เจ้าหน้าที่ เจ้าหน้าที่ธุรการ

### Position
ตำแหน่งจริงของบุคลากร เช่น ผู้อำนวยการ รองผู้อำนวยการ ครู เจ้าหน้าที่

### Department / Unit
ฝ่ายหรือหน่วยงาน เช่น ฝ่ายวิชาการ ฝ่ายบุคคล ฝ่ายงบประมาณ ฝ่ายบริหารทั่วไป กลุ่มสาระคณิตศาสตร์ กลุ่มสาระวิทยาศาสตร์

### System Role
สิทธิ์การใช้งานระบบ เช่น Admin, Academic Staff, Department Head, Teacher, Homeroom Teacher, Viewer

### Assignment
หน้าที่ตามปีการศึกษา/ภาคเรียน เช่น ครูประจำชั้น ม.2/1 หรือครูสอนคณิตศาสตร์ ม.2/1

### Academic Staff / Timetable Scheduler
ฝ่ายวิชาการหรือผู้จัดตาราง เป็นผู้สร้างและแก้ไขตาราง draft ตรวจ conflict แก้ปัญหาก่อนส่งอนุมัติ และ publish ตารางเมื่อได้รับอนุมัติ

### Department Head / Subject Group Reviewer
หัวหน้ากลุ่มสาระ ทำหน้าที่ตรวจสอบข้อมูลเฉพาะกลุ่มสาระของตนเอง เช่น ภาระครู ความครบของรายวิชา และความเหมาะสมเบื้องต้น ไม่ใช่ผู้อนุมัติตารางรวมใน MVP

### Academic Lead / Deputy Academic Director
หัวหน้างานวิชาการหรือรองผู้อำนวยการฝ่ายวิชาการ เป็นผู้อนุมัติหลักของตารางรวมใน MVP และสามารถส่งตารางกลับพร้อมเหตุผลได้

### Director / Executive Viewer
ผู้อำนวยการหรือผู้บริหารระดับสูง ดู dashboard/report และรับทราบภาพรวม ใน MVP ไม่ต้องเป็นผู้ approve รายการตารางทุกชุดโดยตรง

## 3. Important Domain Decisions
- Position ไม่เท่ากับ System Role
- Department ไม่เท่ากับ System Role
- ครูประจำชั้นควรเป็น Assignment ตามปี/เทอม ไม่ใช่ role ถาวร
- นักเรียนไม่ต้องมี login ใน MVP
- ฝ่ายวิชาการเป็นผู้จัดตารางหลักและดูแล draft timetable
- หัวหน้ากลุ่มสาระเป็น reviewer เฉพาะกลุ่มสาระ ไม่ใช่ approver หลักของตารางรวม
- หัวหน้างานวิชาการหรือรองผู้อำนวยการฝ่ายวิชาการเป็น approver หลัก
- ฝ่ายวิชาการหรือ approver ที่มีสิทธิ์เป็นผู้ publish ตารางหลัง approved
- ผู้อำนวยการเป็น viewer/report consumer และ final acknowledge เป็น future scope
- AI ใช้ช่วยอธิบายผล ไม่ใช่สมองหลักของการจัดตาราง
- Full auto generator ไม่ใช่ core MVP
- Split class และ co-teaching ไม่อยู่ใน MVP

## 4. Timetable Domain
### Class Section
ห้องเรียนตามระดับชั้น เช่น ม.1/1, ม.2/3, ม.6/1

### Room
สถานที่จริงที่ใช้เรียนหรือกิจกรรม เช่น ห้อง 301, ห้องคอม 1, ห้องวิทย์, สนาม, ลานกิจกรรม

### Room Type
ประเภทห้อง เช่น ห้องทั่วไป ห้องคอม ห้องวิทย์ ห้องดนตรี ห้องพละ พื้นที่เปิด

### Shared Room / Open Area
สถานที่ที่ใช้ร่วมกันได้ เช่น สนาม ลานกิจกรรม พื้นที่นิทรรศการ สามารถตั้งค่าไม่ตรวจ room conflict และไม่ตรวจ capacity ได้

### Timeslot
วันและคาบเรียน เช่น จันทร์ คาบ 1 เวลา 08:30-09:20

### Teaching Assignment
ความสัมพันธ์ระหว่างครู วิชา ห้องเรียน จำนวนคาบต่อสัปดาห์ และประเภทห้องที่ต้องใช้

### Timetable Entry
รายการจริงในตาราง เช่น จันทร์ คาบ 1 ม.2/1 คณิตศาสตร์ ครูสมชาย ห้อง 302

ใน MVP หนึ่ง timetable entry มีครูหลัก 1 คน และอ้างอิง teaching assignment หลัก 1 รายการ ไม่รองรับ co-teaching

### Timetable Status
สถานะของตารางรวม ใช้ควบคุม lightweight approval workflow:
- `draft`: ฝ่ายวิชาการกำลังจัดหรือแก้ไข ยังไม่ถือเป็นตารางจริง
- `submitted`: ส่งให้ตรวจ/อนุมัติแล้ว ควรจำกัดการแก้ไขโดยไม่ส่งกลับ
- `returned`: ถูกส่งกลับพร้อมเหตุผล ต้องแก้ไขก่อนส่งใหม่
- `approved`: ผ่านการอนุมัติแล้ว แต่ยังไม่เผยแพร่
- `published`: เผยแพร่แล้ว ครู ครูประจำชั้น และผู้เกี่ยวข้องดู/print/PDF ได้
- `archived`: เก็บหลังจบภาคเรียนหรือเลิกใช้งาน

### Review / Approval / Publish
- Review คือการตรวจสอบเฉพาะส่วน เช่น หัวหน้ากลุ่มสาระตรวจภาระครูและรายวิชาในกลุ่มสาระ
- Approval คือการอนุมัติตารางรวมโดยหัวหน้างานวิชาการหรือรองผู้อำนวยการฝ่ายวิชาการ
- Publish คือการเผยแพร่ตารางที่ approved แล้วให้ผู้เกี่ยวข้องดูและ export ได้

### Blocked Timeslot
ช่วงเวลาที่ห้ามจัดวิชาปกติ เช่น เข้าแถวหรือพักกลางวัน ถือเป็น hard block ใน MVP

### School Calendar Event
วันหรือกิจกรรมพิเศษ เช่น วันหยุดราชการ วันวิทยาศาสตร์ วันสอบ กิจกรรมโรงเรียน ค่าเริ่มต้นเป็น warning แต่ admin สามารถตั้งให้เป็น blocked ได้

### Class Section Limitation
ใน MVP หนึ่ง class section มีได้เพียงหนึ่ง timetable entry ต่อหนึ่ง timeslot ไม่รองรับ split class หรือ subgroup ภายในห้องเรียน

## 5. Constraint Types
### Hard Constraints
ข้อห้ามที่ผิดไม่ได้ เช่น ครูชน ห้องชน ชั้นเรียนชน ห้องไม่ตรงประเภท ความจุห้องไม่พอเมื่อเปิดตรวจ และจัดทับ blocked timeslot

Hard conflict ต้องทำให้ publish ไม่ได้ แม้ระบบจะยังคำนวณ score เพื่อช่วยวิเคราะห์ได้

### Soft Constraints
ข้อกำหนดเชิงคุณภาพ เช่น ครูสอนติดกันมากเกิน วิชาหนักติดกัน ภาระครูไม่สมดุล ตารางทับ school calendar event ที่เป็น warning

## 6. Quality Score
คะแนน 0-100 ที่สะท้อนคุณภาพของตาราง โดยต้องแสดงเหตุผลที่คะแนนลด ไม่ใช่แสดงตัวเลขอย่างเดียว

หมวดคะแนนที่ใช้เป็นแนวทาง:
| Category | Weight |
|---|---:|
| Conflict Safety | 30 |
| Teacher Workload | 20 |
| Student Learning Balance | 20 |
| Room & Resource Utilization | 15 |
| Calendar & Operational Readiness | 15 |

Hard conflict เป็น publish gate ส่วน soft warning ใช้หักคะแนนและสร้าง recommendation

## 7. Recommendation
ข้อเสนอปรับปรุง เช่น ย้ายคาบ เปลี่ยนห้อง กระจายวิชาหนัก ลดคาบติดกันของครู โดย MVP เป็นการเสนอคำแนะนำพร้อม predicted before/after score ไม่ใช่การแก้ตารางอัตโนมัติแทนผู้ใช้

## 8. Explanation
ระบบต้องอธิบาย conflict, warning, score และ recommendation เป็นภาษาไทยด้วย rule-based explanation เป็นค่าเริ่มต้น AI เป็น optional provider สำหรับเรียบเรียงคำอธิบายให้อ่านง่ายขึ้นเท่านั้น
