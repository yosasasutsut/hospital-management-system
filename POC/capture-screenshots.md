# 📸 คู่มือถ่าย Screenshots แบบละเอียด

## 🚀 เตรียมระบบก่อนถ่าย

### 1. เริ่ม Development Server

```bash
# เปิด Terminal/CMD
cd hospital-management-system
python -m http.server 8000
```

### 2. เปิด Browser
- เปิด Chrome หรือ Edge (แนะนำ)
- ไปที่: http://localhost:8000
- กด F12 เปิด DevTools

---

## 📱 Desktop Screenshots (1920x1080)

### Setup Desktop View
1. กด `Ctrl + Shift + M` เปิด Device Toolbar
2. เลือก "Responsive"
3. ตั้งค่า: **1920 x 1080**
4. Zoom: 100%

### ลำดับการถ่าย Desktop:

#### Screenshot 1: Dashboard Overview
```
ไฟล์: desktop/01-dashboard-overview.png
ขั้นตอน:
1. คลิกเมนู "Dashboard" (ถ้ายังไม่ได้อยู่)
2. รอให้ stats โหลดเสร็จ
3. กด Ctrl+Shift+P > พิมพ์ "Capture full size screenshot"
4. บันทึกเป็น: POC/desktop/01-dashboard-overview.png
```

#### Screenshot 2: Dashboard with Data
```
ไฟล์: desktop/02-dashboard-stats.png
ขั้นตอน:
1. เพิ่มผู้ป่วย 2-3 คน (ใช้ข้อมูลตัวอย่างจาก README)
2. กลับไปที่ Dashboard
3. ดู stats อัพเดท
4. ถ่ายภาพ
```

#### Screenshot 3: Patient List (Empty)
```
ไฟล์: desktop/03-patient-list-empty.png
ขั้นตอน:
1. Clear localStorage: F12 > Console > พิมพ์ localStorage.clear()
2. Refresh หน้า (F5)
3. คลิกเมนู "ผู้ป่วย"
4. จะเห็น "ยังไม่มีข้อมูลผู้ป่วย"
5. ถ่ายภาพ
```

#### Screenshot 4: Add Patient Form
```
ไฟล์: desktop/04-patient-add-form.png
ขั้นตอน:
1. คลิก "+ เพิ่มผู้ป่วยใหม่"
2. Modal เปิดขึ้นมา
3. ถ่ายภาพ (ยังไม่ต้องกรอก)
```

#### Screenshot 5: Add Patient Form (Filled)
```
ไฟล์: desktop/05-patient-add-form-filled.png
ขั้นตอน:
1. กรอกข้อมูล:
   - ชื่อ: นายสมชาย ใจดี
   - เพศ: ชาย
   - วันเกิด: 01/01/1990
   - เบอร์โทร: 0812345678
   - ที่อยู่: 123 ถ.สุขุมวิท...
2. ถ่ายภาพ (ก่อนกด บันทึก)
```

#### Screenshot 6: Form Validation Error
```
ไฟล์: desktop/06-form-validation-error.png
ขั้นตอน:
1. เปิด Add Patient Form
2. กรอกเบอร์โทรผิด: "123"
3. กดปุ่ม "บันทึก"
4. จะเห็น error message สีแดง
5. ถ่ายภาพ
```

#### Screenshot 7: Patient List (With Data)
```
ไฟล์: desktop/07-patient-list-data.png
ขั้นตอน:
1. เพิ่มผู้ป่วย 3-5 คน
2. ดูรายการผู้ป่วยในตาราง
3. ถ่ายภาพ
```

#### Screenshot 8: Patient Details Modal
```
ไฟล์: desktop/08-patient-details.png
ขั้นตอน:
1. คลิก "ดูข้อมูล" ของผู้ป่วยคนใดคนหนึ่ง
2. Modal แสดงรายละเอียด
3. ถ่ายภาพ
```

#### Screenshot 9: Patient Search
```
ไฟล์: desktop/09-patient-search.png
ขั้นตอน:
1. ไปที่หน้าผู้ป่วย
2. พิมพ์ "สมชาย" ในช่องค้นหา
3. ดูผลลัพธ์ filter แบบ real-time
4. ถ่ายภาพ
```

#### Screenshot 10: Doctors List
```
ไฟล์: desktop/10-doctors-list.png
ขั้นตอน:
1. คลิกเมนู "แพทย์"
2. ดูรายการแพทย์
3. ถ่ายภาพ
```

#### Screenshot 11: Rooms Management
```
ไฟล์: desktop/11-rooms-overview.png
ขั้นตอน:
1. คลิกเมนู "ห้องพัก"
2. ดูสถานะห้องต่างๆ (ว่าง/ไม่ว่าง)
3. ถ่ายภาพ
```

---

## 📱 Tablet Screenshots (768x1024)

### Setup Tablet View
1. กด `Ctrl + Shift + M`
2. เลือก "iPad" หรือตั้งค่า: **768 x 1024**
3. Zoom: 100%

### ลำดับการถ่าย Tablet:

#### Screenshot 1: Dashboard Tablet
```
ไฟล์: tablet/01-dashboard-tablet.png
ขั้นตอน:
1. ไปที่ Dashboard
2. ดูว่า layout ปรับตัวเป็น 2 columns
3. ถ่ายภาพ
```

#### Screenshot 2: Patient List Tablet
```
ไฟล์: tablet/02-patient-list-tablet.png
ขั้นตอน:
1. ไปที่หน้าผู้ป่วย
2. ดูตารางที่ responsive
3. ถ่ายภาพ
```

#### Screenshot 3: Navigation Tablet
```
ไฟล์: tablet/03-navigation-tablet.png
ขั้นตอน:
1. ดู navigation bar
2. ตรวจสอบว่ายังเห็นเมนูได้ครบ
3. ถ่ายภาพ
```

---

## 📱 Mobile Screenshots (390x844)

### Setup Mobile View
1. กด `Ctrl + Shift + M`
2. เลือก "iPhone 12 Pro" หรือตั้งค่า: **390 x 844**
3. Zoom: 100%

### ลำดับการถ่าย Mobile:

#### Screenshot 1: Mobile Dashboard (Menu Closed)
```
ไฟล์: mobile/01-mobile-dashboard.png
ขั้นตอน:
1. ไปที่ Dashboard
2. ปิดเมนู (ถ้าเปิดอยู่)
3. ดู hamburger menu (☰)
4. ถ่ายภาพ
```

#### Screenshot 2: Mobile Menu (Opened)
```
ไฟล์: mobile/02-mobile-menu-open.png
ขั้นตอน:
1. คลิก hamburger menu (☰)
2. เมนูแสดงออกมา
3. ถ่ายภาพ
```

#### Screenshot 3: Mobile Stats Cards
```
ไฟล์: mobile/03-mobile-stats.png
ขั้นตอน:
1. ดู stats cards ที่เรียงเป็น 1 column
2. ถ่ายภาพ
```

#### Screenshot 4: Mobile Patient List
```
ไฟล์: mobile/04-mobile-patient-list.png
ขั้นตอน:
1. ไปที่หน้าผู้ป่วย
2. ดูตารางที่ scroll ได้ (หรือแสดงแบบ responsive)
3. ถ่ายภาพ
```

#### Screenshot 5: Mobile Add Patient Form
```
ไฟล์: mobile/05-mobile-add-patient.png
ขั้นตอน:
1. คลิก "+ เพิ่มผู้ป่วยใหม่"
2. ดู modal ที่ full screen
3. ถ่ายภาพ
```

#### Screenshot 6: Mobile Patient Details
```
ไฟล์: mobile/06-mobile-patient-details.png
ขั้นตอน:
1. คลิก "ดูข้อมูล" ของผู้ป่วย
2. ดู modal รายละเอียด
3. ถ่ายภาพ
```

---

## 🎯 Feature-Specific Screenshots

### Form Validation
```
ไฟล์: features/01-form-validation.png
- กรอกข้อมูลผิดหลายฟิลด์
- ดู error messages ทั้งหมด
- ถ่ายภาพ
```

### Search Functionality
```
ไฟล์: features/02-search-results.png
- ใช้ search box
- แสดงผลลัพธ์ที่ filter แล้ว
- ถ่ายภาพ
```

### Empty States
```
ไฟล์: features/03-empty-state.png
- Clear localStorage
- ดูข้อความ "ยังไม่มีข้อมูล"
- ถ่ายภาพ
```

### Modal Overlay
```
ไฟล์: features/04-modal-overlay.png
- เปิด modal
- ดูพื้นหลังมืดๆ (overlay)
- ถ่ายภาพ
```

---

## ✅ Checklist หลังถ่ายเสร็จ

- [ ] ตรวจสอบว่าทุกภาพชัดเจน
- [ ] ตั้งชื่อไฟล์ตรงตาม convention
- [ ] บันทึกเป็น PNG format
- [ ] เก็บไฟล์ใน folder ที่ถูกต้อง
- [ ] ไม่มีข้อมูลส่วนตัวปรากฏ
- [ ] ลบข้อมูล demo ออก (clear localStorage)

---

## 🎨 Pro Tips

### ทำให้ภาพสวยขึ้น:
1. **ซ่อน Browser UI:**
   - กด F11 (Full screen)
   - หรือใช้ Incognito mode

2. **ใช้ข้อมูลตัวอย่างที่ดี:**
   - ชื่อที่เป็นไทย
   - เบอร์โทรที่ถูกต้อง
   - ที่อยู่ที่สมจริง

3. **ตรวจสอบก่อนถ่าย:**
   - เปิด Console ดูไม่มี errors
   - รอ animation เสร็จ
   - ตรวจสอบ scroll position

4. **การจัดเรียง:**
   - เรียงตามลำดับตัวเลข
   - ใช้ leading zero (01, 02, ..., 10)
   - ใช้ชื่อที่บ่งบอกเนื้อหา

---

## 🔄 Quick Commands

```bash
# เริ่ม server
cd hospital-management-system
python -m http.server 8000

# Clear localStorage (ใน Console)
localStorage.clear()

# Refresh page
F5 หรือ Ctrl+R

# เปิด DevTools
F12

# Toggle Device Toolbar
Ctrl+Shift+M

# Capture Screenshot
Ctrl+Shift+P > "Capture full size screenshot"
```

---

**Happy Screenshot Capturing! 📸**
