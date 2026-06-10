# WORKFLOWS.md

## Overall Workflow
```txt
[Setup Master Data]
      ↓
[Set Academic Year / Term]
      ↓
[Create Homeroom & Teaching Assignment]
      ↓
[Configure Blocked Timeslot / Calendar Event]
      ↓
[Manual Timetable Draft]
      ↓
[Real-time Conflict Check]
      ↓
[Quality Analysis]
      ↓
[Recommendation + Explanation]
      ↓
[Submit for Approval]
      ↓
[Review / Approve / Return]
      ↓
[Publish]
      ↓
[Print / PDF / Report]
```

## Workflow 1: Setup Master Data
Actor: Admin / ฝ่ายวิชาการ
1. เพิ่มปีการศึกษาและภาคเรียน
2. เพิ่มบุคลากร
3. เพิ่มกลุ่มสาระ
4. เพิ่มครู
5. เพิ่มวิชา
6. เพิ่มห้องและประเภทห้อง
7. เพิ่มระดับชั้นและห้องเรียน
8. เพิ่มคาบเรียน

## Workflow 2: Homeroom Assignment
Actor: ฝ่ายวิชาการ
1. เลือกปี/เทอม
2. เลือกห้องเรียน เช่น ม.2/1
3. เลือกครูประจำชั้น
4. บันทึก assignment

## Workflow 3: Teaching Assignment
Actor: ฝ่ายวิชาการ / หัวหน้ากลุ่มสาระ
1. เลือกครู
2. เลือกวิชา
3. เลือกห้องเรียน
4. กำหนดจำนวนคาบต่อสัปดาห์
5. กำหนดประเภทห้องที่ต้องใช้
6. ตรวจภาระสอนเบื้องต้น

## Workflow 4: Blocked Timeslot & Calendar Event
Actor: Admin / ฝ่ายวิชาการ
1. กำหนด blocked timeslot เช่น เข้าแถวหรือพักกลางวัน
2. กำหนด school calendar event เช่น วันหยุด วันสอบ หรือกิจกรรมโรงเรียน
3. ตั้ง severity เป็น `blocked` หรือ `warning`
4. ระบบใช้ข้อมูลนี้ตอนจัดตาราง conflict check และ quality analysis

## Workflow 5: Manual Timetable Draft
Actor: ฝ่ายวิชาการ
1. เปิดหน้า timetable editor
2. เลือก timetable ที่เป็น `draft`
3. เลือกวัน/คาบ/ชั้นเรียน
4. เลือก teaching assignment
5. เลือกห้อง
6. ระบบตรวจ conflict แบบ real-time
7. ถ้าไม่มี hard conflict บันทึกได้
8. ถ้ามี hard conflict แสดง error
9. ถ้ามี soft warning แสดง warning ให้ผู้ใช้ตัดสินใจ

## Workflow 6: Conflict Check
Actor: ระบบ
1. ตรวจครูชน
2. ตรวจห้องชน
3. ตรวจชั้นเรียนชน
4. ตรวจห้องไม่ตรงประเภท
5. ตรวจ capacity ถ้าห้องเปิด check_capacity
6. ตรวจ blocked timeslot
7. ตรวจ calendar event ที่เป็น warning/blocked
8. สรุปผลเป็น error หรือ warning

## Workflow 7: Quality Analysis
Actor: ฝ่ายวิชาการ / ผู้บริหาร
1. เลือก timetable
2. ระบบตรวจ hard conflicts และ soft warnings
3. ระบบคำนวณ score ตามหมวดคุณภาพ
4. แสดง score พร้อมเหตุผลที่คะแนนลด
5. ส่งต่อข้อมูลให้ recommendation engine

## Workflow 8: Recommendation & Explanation
Actor: ฝ่ายวิชาการ
1. ระบบสร้าง recommendation จาก warning/score
2. แสดง predicted before/after score
3. แสดงเหตุผลของข้อเสนอ
4. Rule-based explanation อธิบายผลเป็นภาษาไทย
5. AI explanation เป็น optional provider เท่านั้น
6. ผู้ใช้เป็นคนตัดสินใจแก้ตาราง ไม่ใช่ระบบแก้อัตโนมัติใน MVP

## Workflow 9: Lightweight Approval
Actor: ฝ่ายวิชาการ / หัวหน้ากลุ่มสาระ / หัวหน้างานวิชาการหรือรองฯ วิชาการ
```txt
Draft
  ↓
Run Conflict Check + Quality Analysis
  ↓
Department Head Review
  ↓
Submit for Approval
  ↓
Approve or Return
  ↓
Publish
  ↓
Archive after term ends
```

Rules:
- ฝ่ายวิชาการสร้างและแก้ไข `draft`
- หัวหน้ากลุ่มสาระ review เฉพาะกลุ่มสาระของตนเอง
- หัวหน้างานวิชาการหรือรองฯ วิชาการ approve หรือ return
- การ return ต้องมีเหตุผล
- ตารางที่มี hard conflict publish ไม่ได้
- `approved` ยังไม่เท่ากับ `published`
- `published` แล้วครู ครูประจำชั้น และ viewer จึงดู/print/PDF ได้

## Workflow 10: Print / PDF Export
Actor: ครู / ครูประจำชั้น / ฝ่ายวิชาการ / ผู้บริหาร
1. เลือกตารางที่ published
2. เลือกรูปแบบรายงาน เช่น ตารางครู ตารางห้องเรียน ตารางใช้ห้อง รายงาน quality
3. ระบบแสดงหน้า print/PDF
4. ผู้ใช้ export หรือพิมพ์ตามสิทธิ์

## Future Workflow: Timetable Generator
Auto timetable generator แบบเต็มรูปแบบเป็น future scope หรือ prototype หลังจาก manual timetable, conflict checker และ quality analyzer เสถียรแล้ว
