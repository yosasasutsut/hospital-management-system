# 📸 Proof of Concept (POC) - UI Screenshots

โฟลเดอร์นี้เก็บภาพหน้าจอ (Screenshots) ของระบบ Hospital Management System เพื่อแสดง UI/UX และการทำงานของระบบ

## 📁 โครงสร้างโฟลเดอร์

```
POC/
├── desktop/          # Screenshots บน Desktop (1920x1080+)
├── tablet/           # Screenshots บน Tablet (768-1024px)
├── mobile/           # Screenshots บน Mobile (320-767px)
├── features/         # Screenshots แสดง Features เฉพาะ
└── README.md         # คู่มือนี้
```

## 📷 วิธีการถ่าย Screenshots

### วิธีที่ 1: ใช้ Browser DevTools (แนะนำ)

**Chrome/Edge:**
1. กด `F12` เปิด DevTools
2. กด `Ctrl + Shift + M` เปิด Device Toolbar
3. เลือกขนาดหน้าจอ:
   - Desktop: Responsive (1920x1080)
   - Tablet: iPad (768x1024)
   - Mobile: iPhone 12/13 (390x844)
4. กด `Ctrl + Shift + P` พิมพ์ "Capture screenshot"
5. เลือก "Capture full size screenshot"

**Firefox:**
1. กด `F12` เปิด DevTools
2. กด `Ctrl + Shift + M` เปิด Responsive Design Mode
3. คลิกขวาที่หน้าเว็บ > "Take Screenshot"
4. เลือก "Save full page"

### วิธีที่ 2: ใช้ Windows Snipping Tool

**Windows 11:**
1. กด `Win + Shift + S`
2. เลือกพื้นที่ที่ต้องการ
3. บันทึกจาก Clipboard

**PowerShell Command:**
```powershell
# Capture full window
Add-Type -AssemblyName System.Windows.Forms
[System.Windows.Forms.SendKeys]::SendWait("%{PRTSC}")
```

### วิธีที่ 3: ใช้ Extension (แนะนำสำหรับ Full Page)

**ติดตั้ง Extension:**
- [Awesome Screenshot](https://chrome.google.com/webstore/detail/awesome-screenshot)
- [FireShot](https://chrome.google.com/webstore/detail/fireshot)
- [Nimbus Screenshot](https://chrome.google.com/webstore/detail/nimbus-screenshot)

## 📋 รายการ Screenshots ที่ต้องถ่าย

### Desktop View (1920x1080)

#### Dashboard
- [ ] `desktop/01-dashboard-overview.png` - Dashboard หน้าแรก
- [ ] `desktop/02-dashboard-stats.png` - Statistics cards
- [ ] `desktop/03-dashboard-quick-actions.png` - Quick actions section

#### Patient Management
- [ ] `desktop/04-patient-list.png` - รายการผู้ป่วย
- [ ] `desktop/05-patient-add-form.png` - ฟอร์มเพิ่มผู้ป่วย (Modal)
- [ ] `desktop/06-patient-details.png` - รายละเอียดผู้ป่วย
- [ ] `desktop/07-patient-search.png` - ค้นหาผู้ป่วย

#### Appointments
- [ ] `desktop/08-appointments-list.png` - รายการนัดหมาย
- [ ] `desktop/09-appointments-create.png` - สร้างนัดหมาย

#### Doctors
- [ ] `desktop/10-doctors-list.png` - รายการแพทย์

#### Rooms
- [ ] `desktop/11-rooms-overview.png` - ภาพรวมห้องพัก

### Tablet View (768x1024)

- [ ] `tablet/01-dashboard-tablet.png` - Dashboard
- [ ] `tablet/02-patient-list-tablet.png` - รายการผู้ป่วย
- [ ] `tablet/03-navigation-tablet.png` - Navigation

### Mobile View (390x844)

#### Mobile Navigation
- [ ] `mobile/01-mobile-menu-closed.png` - เมนูปิด
- [ ] `mobile/02-mobile-menu-open.png` - เมนูเปิด
- [ ] `mobile/03-mobile-dashboard.png` - Dashboard mobile

#### Mobile Features
- [ ] `mobile/04-mobile-patient-list.png` - รายการผู้ป่วย
- [ ] `mobile/05-mobile-add-patient.png` - เพิ่มผู้ป่วย (form)
- [ ] `mobile/06-mobile-patient-details.png` - รายละเอียดผู้ป่วย

### Features (Specific Features)

- [ ] `features/01-form-validation.png` - Form validation errors
- [ ] `features/02-search-results.png` - ผลการค้นหา
- [ ] `features/03-modal-patient.png` - Patient modal
- [ ] `features/04-responsive-table.png` - Responsive table
- [ ] `features/05-loading-state.png` - Loading states
- [ ] `features/06-empty-state.png` - Empty states

## 🎨 แนวทางการถ่ายภาพ

### ✅ ควรทำ
- ใช้ข้อมูลตัวอย่างที่ดูสมจริง
- ถ่ายภาพขนาดเต็มหน้าจอ (Full page screenshot)
- แสดง UI ในสถานะต่างๆ (Empty, Loading, Error, Success)
- ตั้งชื่อไฟล์ให้เป็นระเบียบ (เรียงลำดับเลข)
- ใช้รูปแบบ PNG สำหรับความชัดเจน

### ❌ ไม่ควรทำ
- ถ่ายภาพที่มีข้อมูลส่วนตัวจริง
- ใช้ข้อมูลที่ไม่เหมาะสม
- ถ่ายภาพที่เบลอหรือไม่ชัด
- ตั้งชื่อไฟล์แบบสุ่ม

## 📝 ตัวอย่างข้อมูลสำหรับ Demo

### ผู้ป่วยตัวอย่าง:
```
ชื่อ: นายสมชาย ใจดี
เพศ: ชาย
วันเกิด: 01/01/1990
อายุ: 35 ปี
เบอร์โทร: 0812345678
ที่อยู่: 123 ถ.สุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110
```

### แพทย์ตัวอย่าง:
```
นพ.สมชาย ใจดี - อายุรแพทย์
นพ.สมหญิง รักษา - ศัลยแพทย์
นพ.วิชัย เก่ง - กุมารแพทย์
```

## 🔄 การอัพเดท Screenshots

เมื่อมีการเปลี่ยนแปลง UI ให้:
1. ลบภาพเก่าที่ไม่ใช้แล้ว
2. ถ่ายภาพใหม่ตามรายการด้านบน
3. อัพเดท checklist ข้างบน
4. Commit พร้อมข้อความ: `docs: update POC screenshots`

## 📊 การใช้งาน Screenshots

Screenshots เหล่านี้ใช้สำหรับ:
- 📄 Documentation ใน README.md
- 🎨 Portfolio แสดงผลงาน
- 👥 Presentation สำหรับ stakeholders
- 🐛 Bug reporting (เปรียบเทียบ before/after)
- 📱 Social media sharing
- 📖 Tutorial และคู่มือใช้งาน

## 🚀 Quick Start - ถ่าย Screenshots

```bash
# 1. เริ่ม server
cd hospital-management-system
python -m http.server 8000

# 2. เปิด browser
http://localhost:8000

# 3. ใช้ Chrome DevTools (F12)
# 4. Toggle Device Toolbar (Ctrl+Shift+M)
# 5. Capture Screenshot (Ctrl+Shift+P > Capture screenshot)

# 6. บันทึกภาพใน POC folder ตามโครงสร้างด้านบน
```

## 📎 Tips & Tricks

### ทำให้ภาพสวยขึ้น:
- เพิ่มข้อมูลตัวอย่างที่หลากหลาย
- ใช้ Theme สีที่สวยงาม
- ตรวจสอบ Console ไม่มี errors
- ซ่อน Personal toolbar ของ browser
- ใช้ Incognito mode เพื่อหน้าจอสะอาด

### Automation (Optional):
```bash
# ใช้ Playwright สำหรับ automated screenshots
npm install -D @playwright/test
```

---

**Created:** 2025-10-05
**Last Updated:** 2025-10-05
**Maintainer:** Hospital MS Team
