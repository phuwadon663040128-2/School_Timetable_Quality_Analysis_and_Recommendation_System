# DEMO_SCENARIOS.md

## Demo Flow 1: Basic Workflow
1. Login เป็นฝ่ายวิชาการ
2. ตรวจ master data
3. สร้าง teaching assignment
4. ตั้ง blocked timeslot และ school calendar event
5. เพิ่ม timetable entry แบบ manual
6. ระบบตรวจว่าไม่มี conflict
7. วิเคราะห์ quality score
8. submit ตารางเพื่ออนุมัติ
9. approve และ publish
10. ดูตารางตามชั้นเรียน/ครู/ห้อง
11. Print/PDF ตาราง

## Demo Flow 2: Conflict Detection
1. เพิ่มรายการที่ทำให้ครูชน
2. ระบบแสดง error
3. เปลี่ยนคาบหรือครู
4. ระบบผ่าน validation

## Demo Flow 3: Blocked Timeslot / Calendar Warning
1. เพิ่มรายการในคาบเข้าแถวหรือพักกลางวัน
2. ระบบ block เป็น hard conflict
3. เพิ่มรายการในวันที่มีกิจกรรมโรงเรียนแบบ warning
4. ระบบบันทึกได้แต่แสดง warning

## Demo Flow 4: Quality Analysis
1. เลือก timetable
2. กดวิเคราะห์คุณภาพ
3. ระบบแสดง score, warning และเหตุผล
4. เปิด recommendation
5. ดู predicted before/after score

## Demo Flow 5: Approval Workflow
1. ฝ่ายวิชาการ submit timetable
2. หัวหน้ากลุ่มสาระ review เฉพาะกลุ่มสาระ
3. หัวหน้างานวิชาการหรือรองฯ วิชาการ approve หรือ return
4. หาก return ต้องมีเหตุผล
5. หาก approve แล้วจึง publish ได้

## Demo Flow 6: Explanation
1. เลือกปัญหาหนึ่งรายการ
2. ระบบอธิบายเป็นภาษาไทยแบบ rule-based
3. ถ้าเปิด AI provider ในอนาคต ให้เทียบผลกับ rule-based fallback
