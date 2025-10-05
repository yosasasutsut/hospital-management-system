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
- Web Browser (Chrome, Firefox, Safari, Edge)
- Text Editor (VS Code, Sublime Text, etc.)

### การติดตั้ง

1. **Clone repository**
```bash
git clone https://github.com/your-username/hospital-management-system.git
cd hospital-management-system
```

2. **เปิดโปรเจ็กต์**
   - วิธีที่ 1: เปิดไฟล์ `index.html` ด้วย browser โดยตรง
   - วิธีที่ 2: ใช้ Live Server (แนะนำ)

### ใช้ Live Server (แนะนำ)

**สำหรับ VS Code:**
```bash
# 1. ติดตั้ง Live Server extension
# 2. คลิกขวาที่ไฟล์ index.html
# 3. เลือก "Open with Live Server"
```

**หรือใช้ Python:**
```bash
# Python 3
python -m http.server 8000

# เปิดบราวเซอร์ไปที่ http://localhost:8000
```

**หรือใช้ Node.js:**
```bash
npx http-server

# เปิดบราวเซอร์ไปที่ http://localhost:8080
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

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Storage**: LocalStorage (Browser-based)
- **Design**: Mobile-first, Responsive Design
- **Future**: อาจเพิ่ม Backend (Node.js/Python), Database (MySQL/MongoDB)

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

### Day 1 - 2025-10-05
- ✅ โครงสร้างโปรเจ็กต์
- ✅ HTML/CSS/JavaScript foundation
- ✅ Dashboard พื้นฐาน
- ✅ ระบบผู้ป่วยเบื้องต้น
- ✅ Responsive design

### Day 2 - TBD
- ⏳ Coming soon...

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
