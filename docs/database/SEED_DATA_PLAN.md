# SEED_DATA_PLAN.md

## Goal
เตรียมข้อมูลตัวอย่างที่พอสำหรับ demo workflow ตั้งแต่ master data จนถึง quality analysis

## Minimum Demo Dataset
| Data | Suggested Amount |
|---|---:|
| Academic year | 1 |
| Term | 1 |
| Departments / subject groups | 8 |
| Teachers | 20-30 |
| Subjects | 20-40 |
| Room types | 5-8 |
| Rooms | 15-25 |
| Grade levels | ม.1-ม.6 |
| Class sections | 12-18 |
| Timeslots | 5 days x 8 periods |
| Teaching assignments | 80-150 |
| Blocked timeslots | 2-5 |
| School calendar events | 5-10 |
| Timetable reviewers/approvers | 3-5 |

## Required Demo Cases
- ตารางที่ไม่มี conflict
- ครูชน
- ห้องชน
- ชั้นเรียนชน
- ห้อง shared ไม่ถือว่าชน
- ห้องผิดประเภท
- ห้อง capacity ไม่พอ
- จัดทับ blocked timeslot แล้วถูก block
- จัดทับ calendar event แล้วเกิด warning
- ส่งตารางให้อนุมัติ approve และ publish
- return ตารางพร้อมเหตุผล
- วิชาหนักติดกันจน score ลด
- Recommendation ทำให้ score ดีขึ้น

## Seed Data Principle
ข้อมูล demo ควรสมจริงพอให้อาจารย์เห็นบริบทโรงเรียนไทย แต่ไม่ต้องใช้ข้อมูลส่วนบุคคลจริง
