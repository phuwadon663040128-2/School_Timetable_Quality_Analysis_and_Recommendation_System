# ADVISOR_QUESTIONS.md

## Final Answers
### Q1: ใครเป็นคนจัด ตรวจ อนุมัติ และเผยแพร่ตาราง
- คนจัดตารางหลัก: ฝ่ายวิชาการ / Academic Staff
- Reviewer: หัวหน้ากลุ่มสาระ ตรวจเฉพาะกลุ่มสาระของตนเอง
- Approver หลัก: หัวหน้างานวิชาการหรือรองผู้อำนวยการฝ่ายวิชาการ
- Publisher: ฝ่ายวิชาการหรือผู้มีสิทธิ์ publish หลัง approved
- Director: Viewer/report consumer และ final acknowledge เป็น future scope

### Q2: MVP ควรมี timetable generator หรือ manual + conflict checker ก่อน
MVP เน้น Manual Timetable + Real-time Conflict Checker ก่อน Full auto generator เป็น future scope หรือ prototype หลัง logic หลักเสถียร

### Q3: Quality Score และ Recommendation เป็นจุดขายหลักได้ไหม
ได้ และควรเป็นจุดขายหลัก เพราะระบบต้องบอกได้ว่าตารางดีพอหรือยัง คะแนนลดเพราะอะไร และควรปรับตรงไหนก่อน

### Q4: AI explanation ควรอยู่ใน scope หลักหรือ optional
AI เป็น optional explanation provider เท่านั้น ระบบหลักต้องอธิบายผลด้วย rule-based explanation ได้เสมอ

### Q5: ต้องรองรับ blocked timeslot และ calendar event หรือไม่
ต้องรองรับใน MVP โดย blocked timeslot เช่น เข้าแถว/พักกลางวันเป็น hard block ส่วน school calendar event เป็น warning โดยค่าเริ่มต้น

### Q6: ต้องรองรับ co-teaching หรือ split class หรือไม่
ไม่รองรับใน MVP ทั้งสองกรณีเป็น future scope/out of MVP

### Q7: ประเมินผลระบบด้วย metric ใด
- Quality Score หลัง recommendation ควรสูงขึ้น
- จำนวน warning ควรลดลง
- ต้องไม่มี hard conflict เพิ่มขึ้น
- เปรียบเทียบกับ manual/Excel workflow ได้
- เก็บ usability feedback จากผู้ทดลองใช้

## Remaining Advisor Questions
- โรงเรียนตัวอย่างมีคาบต่อวันกี่คาบ
- Calendar event ในโรงเรียนตัวอย่างควรมีประเภทใดบ้าง
- ขนาด demo data ที่อาจารย์คาดหวังคือกี่ครู กี่ห้อง กี่วิชา
