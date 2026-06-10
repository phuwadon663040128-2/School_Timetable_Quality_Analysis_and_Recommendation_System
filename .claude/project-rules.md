# Project Rules

## Scope Control
- ทำ MVP ก่อน future features เสมอ
- ถ้า feature ใหม่ไม่อยู่ใน PRODUCT.md หรือ REQUIREMENTS.md ให้เสนอเป็น backlog ก่อน
- ห้ามเพิ่ม student login, SSO, mobile app เต็มรูปแบบ, full auto generator, split class, co-teaching, Excel export หรือ approval workflow ซับซ้อนใน MVP

## Documentation Discipline
- Requirement ใหม่ต้องมี acceptance criteria
- Business rule ใหม่ต้องเพิ่มใน DOMAIN.md หรือ REQUIREMENTS.md
- Schema change ต้องสะท้อนใน DATA_MODEL.md
- Workflow ใหม่ต้องสะท้อนใน WORKFLOWS.md
- Test expectation ใหม่ต้องสะท้อนใน TEST_PLAN.md

## Laravel Conventions
- Controller รับ request และคืน response เท่านั้น
- Service เป็นที่อยู่ของ scheduling, analysis, recommendation, export และ explanation logic
- Approval workflow และ calendar constraint ต้องอยู่ใน service layer
- Model ไม่ควรแบก workflow logic ที่ซับซ้อน
- ใช้ migration, seeder และ factory เมื่อเข้าสู่ phase coding
- ต้องมี unit test สำหรับ constraint สำคัญ

## AI Provider Rules
- Rule-based explanation เป็น default
- KKU Intelsphere เป็น optional provider
- ห้ามให้ AI ตัดสินใจ scheduling แทน rule/algorithm หลัก
- ต้อง log prompt/response เฉพาะข้อมูลที่ไม่ละเมิด privacy
