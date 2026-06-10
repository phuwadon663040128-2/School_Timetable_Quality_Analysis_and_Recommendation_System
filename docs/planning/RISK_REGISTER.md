# RISK_REGISTER.md

| Risk | Impact | Probability | Mitigation |
|---|---:|---:|---|
| Scope ใหญ่เกินเวลา 9 เดือน | High | Medium | Lock MVP และย้าย feature เสริมไป Future Scope |
| เผลอดัน full auto generator เข้า MVP | High | Medium | ยืนยันว่า MVP เน้น manual + conflict checker และเก็บ generator เป็น future/prototype |
| Data model เปลี่ยนบ่อย | High | Medium | Finalize DOMAIN.md และ DATA_MODEL.md ก่อน coding |
| Approval workflow ซับซ้อนเกินไป | Medium | Medium | ใช้ lightweight approval ไม่ทำ multi-level approval ใน MVP |
| ข้อมูล demo ไม่สมจริง | Medium | Medium | เตรียม seed data plan ตามโรงเรียนตัวอย่าง |
| Quality score อธิบายยาก | Medium | Medium | ใช้ rule-based scoring พร้อมรายการหักคะแนน |
| AI provider ไม่พร้อมหรือ quota หมด | Medium | Medium | Rule-based explanation เป็น default |
| UI ตารางซับซ้อนบนมือถือ | Low | High | Desktop-first ใน MVP |
| Export ใช้เวลามาก | Medium | Medium | เริ่มจาก print/PDF ตารางครู/ห้อง/ชั้นเรียนแบบจำเป็นก่อน |

## Highest Priority Risks
1. ConstraintChecker ต้องแม่น
2. Data model ต้องรองรับ timetable และ assignment ถูกต้อง
3. Quality score ต้องอธิบายได้ ไม่ใช่คะแนนลอยๆ
