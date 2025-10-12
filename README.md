# 🏥 Hospital Management System

ระบบจัดการโรงพยาบาลแบบ Web-based รองรับการใช้งานบน Mobile และ Desktop

## 📋 Overview

โปรเจ็กต์นี้เป็นระบบจัดการโรงพยาบาลที่ครอบคลุมการทำงานหลักของโรงพยาบาล ตั้งแต่การลงทะเบียนผู้ป่วย การนัดหมาย การจัดการห้องพัก ระบบยา และการเงิน

**🎯 จุดประสงค์**: สร้างโปรเจ็กต์เพื่อฝึกฝนการเขียนโปรแกรม และสะสม GitHub contributions แบบต่อเนื่องทุกวัน

## ✨ Features

### 🔹 ปัจจุบัน (Day 1)
- ✅ Dashboard พร้อมสถิติพื้นฐาน
- ✅ ระบบลงทะเบียนผู้ป่วย
- ✅ ดูรายการผู้ป่วย
- ✅ ระบบนัดหมายเบื้องต้น
- ✅ ข้อมูลแพทย์
- ✅ จัดการห้องพัก
- ✅ Responsive Design (รองรับ Mobile)

### 🔹 กำลังพัฒนา (ตาม ROADMAP.md)
- 📅 ปฏิทินนัดหมาย
- 💊 ระบบจัดการยา
- 💰 ระบบเรียกเก็บเงิน
- 📊 รายงานและการวิเคราะห์
- 🔐 ระบบ Authentication
- 🎨 Dark Mode
- และอื่นๆ อีกมากมาย...

## 🚀 Quick Start

### Prerequisites
- **Node.js** 18.x or higher ([Download](https://nodejs.org/))
- **npm** 9.x or higher (comes with Node.js)
- **Web Browser** (Chrome, Firefox, Safari, Edge)
- **Text Editor** (VS Code recommended)

### การติดตั้ง

1. **Clone repository**
```bash
git clone https://github.com/yosasasutsut/hospital-management-system.git
cd hospital-management-system
```

2. **ติดตั้ง dependencies**
```bash
npm install
```

3. **รันโปรเจ็กต์**

**วิธีที่ 1: ใช้ npm scripts (แนะนำ)**
```bash
npm start
# หรือ
npm run dev
```
เปิดบราวเซอร์อัตโนมัติที่ http://localhost:8080

**วิธีที่ 2: เปิดไฟล์โดยตรง**
```bash
# เปิด index.html ด้วย browser
start index.html  # Windows
open index.html   # macOS
xdg-open index.html  # Linux
```

**วิธีที่ 3: ใช้ Python (ถ้าไม่มี Node.js)**
```bash
python -m http.server 8000
# เปิด http://localhost:8000
```

## 📁 โครงสร้างโปรเจ็กต์

```
hospital-management-system/
├── index.html              # หน้าหลัก
├── css/
│   └── styles.css         # Styles ทั้งหมด (Mobile-first)
├── js/
│   └── app.js            # JavaScript หลัก
├── assets/
│   ├── icons/            # Icons
│   └── data/             # Sample data (future)
├── images/               # Images
├── README.md            # คู่มือนี้
└── ROADMAP.md          # แผนพัฒนา 60 วัน
```

## 🎯 Development Roadmap

โปรเจ็กต์นี้มีแผนพัฒนา **60 วัน** แบ่งเป็น:

- **Week 1-2**: Patient & Appointment Management
- **Week 3-4**: Doctor & Room Management
- **Week 5-6**: Pharmacy & Billing System
- **Week 7**: Reports & Analytics
- **Week 8**: Security & User Management
- **Week 9**: UI/UX Improvements

📖 ดูรายละเอียดเพิ่มเติมใน [ROADMAP.md](ROADMAP.md)

## 💻 Tech Stack

### Core Technologies
- **HTML5** - Semantic markup with modern meta tags
- **CSS3** - Mobile-first responsive design with CSS Grid & Flexbox
- **JavaScript ES6+** - Vanilla JS with modern features
- **LocalStorage API** - Client-side persistent storage

### Development Tools
- **Node.js** 18+ - JavaScript runtime
- **npm** - Package manager
- **live-server** ^1.2.2 - Development server with auto-reload

### PWA Support
- **Web App Manifest** - Progressive Web App configuration
- **Service Worker** ready - For offline support (coming soon)

### Future Enhancements
- **Backend**: Node.js/Express or Python/Flask
- **Database**: MySQL, PostgreSQL, or MongoDB
- **Authentication**: JWT or OAuth 2.0
- **Real-time**: WebSocket or Socket.io
- **Testing**: Jest, Cypress

## 🎨 Screenshots

### Desktop View
Dashboard แสดงสถิติต่างๆ แบบ real-time

### Mobile View
UI ปรับตัวอัตโนมัติสำหรับหน้าจอเล็ก

## 🤝 Contributing

โปรเจ็กต์นี้เป็นส่วนตัวสำหรับการเรียนรู้ แต่ยินดีรับ suggestions หรือ feedback

### วิธีการ Contribute
1. Fork โปรเจ็กต์
2. สร้าง Branch ใหม่ (`git checkout -b feature/AmazingFeature`)
3. Commit การเปลี่ยนแปลง (`git commit -m 'feat: add some amazing feature'`)
4. Push ไปยัง Branch (`git push origin feature/AmazingFeature`)
5. เปิด Pull Request

## 📝 Commit Convention

โปรเจ็กต์นี้ใช้ [Conventional Commits](https://www.conventionalcommits.org/)

```
feat: เพิ่ม feature ใหม่
fix: แก้ไข bug
docs: เปลี่ยนแปลง documentation
style: เปลี่ยนแปลง style/formatting
refactor: ปรับปรุง code โดยไม่เปลี่ยน functionality
test: เพิ่ม tests
chore: งานอื่นๆ (build, dependencies)
```

### ตัวอย่าง
```bash
git commit -m "feat: add patient search functionality"
git commit -m "fix: correct date format in appointments"
git commit -m "docs: update README with new features"
```

## 🎓 Learning Resources

### หากคุณกำลังเรียนรู้การเขียนโปรแกรม
- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript
- [JavaScript.info](https://javascript.info/) - JavaScript tutorial
- [CSS-Tricks](https://css-tricks.com/) - CSS techniques
- [Git Documentation](https://git-scm.com/doc) - Git & GitHub

### แนะนำสำหรับมือใหม่
1. เริ่มจาก features ง่ายๆ ก่อน
2. ทำทีละน้อยทุกวัน ดีกว่าทำครั้งเดียวเยอะ
3. อ่าน code ของคนอื่นบ้าง
4. ถาม ChatGPT/Claude เมื่อติดขัด
5. Commit บ่อยๆ อย่ากลัวผิด

## 📊 GitHub Contribution Tips

เพื่อให้ GitHub profile เขียวทุกวัน:

1. **Commit ทุกวัน** - แม้จะเป็นงานเล็กน้อย
2. **เวลาที่ดีที่สุด** - Commit ประมาณ 18:00-22:00 เพื่อนับเป็นวันนั้นๆ
3. **Quality > Quantity** - Code ที่ดีกว่า commits เยอะ
4. **Documentation** - เขียน README, comments ให้ดี
5. **Consistency** - สม่ำเสมอสำคัญกว่าเร็ว

## 📅 Development Log

### Day 13 - 2025-10-12 (Latest)
- ✅ Quick Edit Appointment Notes feature
- ✅ Inline note editing directly from appointment details modal
- ✅ Real-time character counter (0-500 characters) with color coding
- ✅ Auto-focus and cursor positioning for better UX
- ✅ Save and Cancel buttons for edit mode
- ✅ Enhanced notes display with emoji icons
- ✅ Empty state message for appointments without notes
- ✅ Note update timestamp tracking (noteUpdatedAt field)
- ✅ JSDoc documentation for all note functions
- ✅ Version bumped to 1.8.0

### Day 12 - 2025-10-11
- ✅ Appointment reminders system with notification badges
- ✅ getTodaysAppointments() helper function
- ✅ getUpcomingAppointments() helper function with configurable days
- ✅ updateAppointmentReminders() for badge updates
- ✅ Visual badges with gradient design (orange for today, blue for upcoming)
- ✅ Dynamic badge visibility based on reminder counts
- ✅ Integrated auto-loading on dashboard
- ✅ JSDoc documentation for all functions
- ✅ Version bumped to 1.7.0

### Day 11 - 2025-10-11
- ✅ Edit appointment functionality with pre-filled modal form
- ✅ Smart validation preventing edits to past/cancelled appointments
- ✅ Real-time form validation with error messages
- ✅ Status change capability (pending ↔ confirmed)
- ✅ Enhanced appointment data model with updatedAt tracking
- ✅ Auto-update dashboard after editing
- ✅ JSDoc documentation for edit functions
- ✅ Version bumped to 1.6.0

### Day 10 - 2025-10-10
- ✅ Comprehensive room management system with Thai pricing
- ✅ 5 room types (Ward, Semi-Private, Private, VIP, Suite)
- ✅ 7 status indicators with color coding
- ✅ Enhanced room display with modern card layout
- ✅ Room search and advanced filters (status, type, floor)
- ✅ Room details modal with complete information
- ✅ Room statistics on dashboard
- ✅ Amenities display and occupancy tracking
- ✅ Last cleaned timestamp with time calculation
- ✅ Responsive design for all devices
- ✅ Version bumped to 1.5.0

### Day 9 - 2025-10-10
- ✅ Enhanced appointment list view with full details
- ✅ Sort appointments by date and time (newest first)
- ✅ Color-coded cards for past/upcoming appointments
- ✅ Status badges (pending, confirmed, cancelled)
- ✅ View appointment details modal
- ✅ Cancel appointment functionality
- ✅ Thai date formatting for better UX
- ✅ Responsive appointment cards with modern design
- ✅ Version bumped to 1.4.0

### Day 8 - 2025-10-09
- ✅ Appointment booking system
- ✅ Create new appointment form with modal
- ✅ Select patient and doctor from dropdowns
- ✅ Date and time picker with validation
- ✅ Optional notes field
- ✅ Auto-update dashboard after creation
- ✅ Version bumped to 1.3.0

### Day 7 - 2025-10-07
- ✅ Patient statistics dashboard with Chart.js
- ✅ Gender distribution pie chart
- ✅ Age group distribution bar chart
- ✅ Real-time chart updates
- ✅ Version bumped to 1.2.0

### Days 4-6 - 2025-10-06
- ✅ Edit patient information functionality
- ✅ Delete patient with confirmation dialog
- ✅ Export patient data to CSV
- ✅ Patient search and filter by age range

### Day 3 - 2025-10-05
- ✅ Modern development setup with npm & package.json
- ✅ PWA support with manifest.json
- ✅ Enhanced HTML meta tags (SEO, Open Graph, Twitter)
- ✅ Updated to latest web standards
- ✅ Version bumped to 1.1.0
- ✅ Improved documentation

### Day 2 - 2025-10-05
- ✅ Enhanced patient registration (gender, birth date, address)
- ✅ Auto-calculate age from birth date
- ✅ Form validation with error messages
- ✅ Patient search functionality
- ✅ JSDoc documentation
- ✅ Code quality improvements

### Day 1 - 2025-10-05
- ✅ โครงสร้างโปรเจ็กต์
- ✅ HTML/CSS/JavaScript foundation
- ✅ Dashboard พื้นฐาน
- ✅ ระบบผู้ป่วยเบื้องต้น
- ✅ Responsive design

## 🐛 Known Issues

- LocalStorage มีข้อจำกัดเรื่องขนาดข้อมูล (~5-10MB)
- ข้อมูลจะหายเมื่อ clear browser cache
- ยังไม่มี multi-user support

## 🔮 Future Enhancements

- [ ] Backend API (Node.js/Express)
- [ ] Database (MySQL/PostgreSQL)
- [ ] User Authentication
- [ ] Real-time updates (WebSocket)
- [ ] Mobile App (React Native)
- [ ] Cloud Deployment (AWS/Azure)
- [ ] Integration กับระบบประกันสังคม

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

- คุณทุกคนที่ให้คำแนะนำ
- Community ที่ช่วยแชร์ความรู้
- AI assistants ที่ช่วยในการเรียนรู้

## 📞 Contact

- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

---

⭐ ถ้าคุณชอบโปรเจ็กต์นี้ อย่าลืม Star ให้ด้วยนะ!

**Made with ❤️ for learning**
