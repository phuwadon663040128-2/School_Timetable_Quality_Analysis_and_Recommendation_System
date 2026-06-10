# Claude Context

## One-line Summary
ระบบวิเคราะห์และเพิ่มประสิทธิภาพตารางสอนโรงเรียนระดับมัธยม สำหรับช่วยฝ่ายวิชาการจัดตาราง ตรวจชน วิเคราะห์คุณภาพ แนะนำการปรับปรุง และอธิบายผลเป็นภาษาไทย

## Main Users
- Admin
- ฝ่ายวิชาการ
- หัวหน้ากลุ่มสาระ
- ครูผู้สอน
- ครูประจำชั้น
- ผู้บริหาร / Viewer

## MVP Modules
- Authentication and Role
- School Master Data
- Academic Year and Term
- Personnel and Department
- Homeroom Assignment
- Teaching Assignment
- Manual Timetable
- Conflict Checker
- Blocked Timeslot / School Calendar Warning
- Lightweight Approval Workflow
- Quality Analyzer
- Recommendation Engine
- Rule-based Explanation
- Optional AI Explanation
- Dashboard and Print/PDF Export

## Non-negotiable Domain Rules
- ครูหนึ่งคนสอนได้เพียงหนึ่งรายการในคาบเดียวกัน
- ห้องที่เปิดตรวจชนต้องถูกใช้ได้เพียงหนึ่งรายการในคาบเดียวกัน
- ห้องเรียนหนึ่งห้องมีได้เพียงหนึ่งวิชาในคาบเดียวกัน
- ห้องต้องตรงกับประเภทห้องที่วิชาหรือ teaching assignment ต้องใช้
- ห้องที่เปิดตรวจ capacity ต้องรองรับจำนวนนักเรียนได้
- Shared room/open area อาจปิดการตรวจ room conflict และ capacity ได้
- ตารางที่มี hard conflict ต้อง publish ไม่ได้
- Calendar event เป็น warning โดยค่าเริ่มต้น
- หนึ่ง timetable entry มีครูหลัก 1 คนใน MVP
- หนึ่ง class section มีได้ 1 timetable entry ต่อ timeslot ใน MVP

## Project Positioning
ระบบนี้ไม่ใช่การแทน TRWIN หรือโปรแกรมจัดตารางสำเร็จรูป แต่เป็นระบบสนับสนุนการตัดสินใจที่เน้นข้อมูลกลาง การตรวจปัญหา คุณภาพตาราง คำแนะนำ และคำอธิบาย
