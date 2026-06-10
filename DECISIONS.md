# DECISIONS.md

## Decision Log

### D-001: ไม่ทำ role นักเรียนใน MVP
เหตุผล: บริบทโรงเรียนไทยสามารถเผยแพร่ตารางผ่านครูประจำชั้นได้ และลด scope

### D-002: AI ไม่ใช่ตัวจัดตารางหลัก
เหตุผล: Scheduling ต้องอธิบายได้และ test ได้ จึงใช้ algorithm/rule เป็นแกน AI ใช้เฉพาะ explanation

### D-003: เริ่มจาก manual scheduling + conflict checker ก่อน generator
เหตุผล: ถ้าตรวจ conflict ไม่แม่น generator จะสร้างผลลัพธ์ผิด

### D-004: หัวหน้ากลุ่มสาระไม่ publish ตารางรวมใน MVP
เหตุผล: ตารางมี conflict ข้ามกลุ่มสาระ จึงให้ฝ่ายวิชาการเป็นผู้จัดรวม

### D-005: ครูประจำชั้นเป็น assignment
เหตุผล: เปลี่ยนได้ตามปีการศึกษา/ภาคเรียน

### D-006: Shared room/open area ใช้ field check_room_conflict และ check_capacity
เหตุผล: ห้องบางประเภท เช่น สนาม/ลานกิจกรรม ไม่ควรถูกตรวจแบบห้องเรียนปิด

### D-007: UI ต้องทางการ
เหตุผล: ผู้ใช้หลักคือบุคลากรโรงเรียน ไม่ใช่ consumer app

### D-008: แยกเอกสารไว้ที่ root และ Laravel implementation ไว้ใน src/
เหตุผล: ตอนนี้อยู่ใน phase เตรียมเอกสารและ requirements จึงต้องให้ root เป็นพื้นที่เอกสารโปรเจคจบที่อ่านง่าย ส่วน `src/` ใช้เป็นพื้นที่ implementation เมื่อเริ่ม coding phase เพื่อลดความสับสนระหว่าง planning กับ source code

### D-009: MVP เน้น Manual Timetable + Real-time Conflict Checker
เหตุผล: การจัดตารางอัตโนมัติเต็มรูปแบบมีความเสี่ยงสูงเกิน MVP จึงให้ฝ่ายวิชาการจัดตารางเองผ่าน timetable editor และให้ระบบตรวจ conflict, quality score และ recommendation เป็นแกนหลัก

### D-010: Auto generator ไม่ใช่ core MVP
เหตุผล: Generator ต้องพึ่ง constraint logic ที่แม่นก่อน จึงวางเป็น future scope หรือ prototype ลดความเสี่ยงหลังจาก manual scheduling และ conflict checker ใช้งานได้จริง

### D-011: Quality Score + Recommendation เป็นจุดขายหลัก
เหตุผล: ระบบต้องตอบได้มากกว่า “ตารางชนหรือไม่ชน” โดยต้องบอกว่าตารางดีพอหรือยัง คุณภาพลดลงเพราะอะไร และควรปรับจุดใดก่อน

### D-012: ใช้ Lightweight Approval Workflow ใน MVP
เหตุผล: ต้องสะท้อน workflow โรงเรียนจริงโดยไม่ทำ approval หลายชั้นซับซ้อน สถานะหลักคือ `draft`, `submitted`, `returned`, `approved`, `published`, `archived`

### D-013: คนจัดตารางหลักคือฝ่ายวิชาการ
เหตุผล: ฝ่ายวิชาการเป็นผู้รับผิดชอบข้อมูลกลาง การจัดตาราง draft การแก้ไข conflict และการเตรียมตารางก่อนส่งอนุมัติ

### D-014: คนอนุมัติหลักคือหัวหน้างานวิชาการหรือรองผู้อำนวยการฝ่ายวิชาการ
เหตุผล: บทบาทนี้รับผิดชอบการจัดการเรียนการสอนโดยตรง ส่วนหัวหน้ากลุ่มสาระเป็น reviewer เฉพาะกลุ่มสาระ และผู้อำนวยการเป็น viewer/report consumer หรือ final acknowledge ใน future scope

### D-015: Blocked timeslot อยู่ใน MVP
เหตุผล: โรงเรียนไทยมีช่วงเวลาที่ไม่ควรถูกจัดวิชาปกติ เช่น เข้าแถวและพักกลางวัน จึงต้องมี hard block เพื่อป้องกันการจัดทับ

### D-016: School calendar event เป็น warning โดยค่าเริ่มต้น
เหตุผล: วันหยุดหรือกิจกรรมโรงเรียนบางกรณีอาจยังจัดตารางพิเศษได้ จึงให้ค่าเริ่มต้นเป็น warning และให้ admin ปรับเป็น blocked ได้

### D-017: ไม่รองรับ split class และ co-teaching ใน MVP
เหตุผล: ทั้งสองกรณีทำให้ data model และ conflict checker ซับซ้อนขึ้นมาก MVP จึงกำหนดให้ 1 class section มีได้ 1 timetable entry ต่อ timeslot และ 1 timetable entry มีครูหลัก 1 คน

### D-018: Export เริ่มจาก Print/PDF
เหตุผล: Print/PDF เพียงพอสำหรับ demo และ workflow โรงเรียนใน MVP ส่วน Excel export และ template ขั้นสูงเป็น future scope

### D-019: Evaluation ใช้ score improvement และ warning reduction
เหตุผล: วัดผล recommendation ด้วยคะแนนก่อน/หลัง จำนวน warning ที่ลดลง ไม่มี hard conflict เพิ่มขึ้น การเปรียบเทียบกับ manual/Excel workflow และ feedback จากผู้ทดลองใช้
