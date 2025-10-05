// ===== Hospital Management System - Main JavaScript =====
// Version: 1.0.0
// Description: Core application logic for hospital management system
// Author: Hospital MS Team

/**
 * Data Storage Module
 * Handles all localStorage operations for persistent data storage
 */
const storage = {
    /**
     * Get data from localStorage
     * @param {string} key - The storage key
     * @returns {any} Parsed JSON data or null if not found
     */
    get: (key) => {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },

    /**
     * Save data to localStorage
     * @param {string} key - The storage key
     * @param {any} value - The value to store (will be JSON stringified)
     */
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    },

    /**
     * Initialize default data if storage is empty
     * Creates sample doctors and rooms for testing
     */
    init: () => {
        if (!storage.get('patients')) storage.set('patients', []);
        if (!storage.get('appointments')) storage.set('appointments', []);

        // Initialize sample doctors
        if (!storage.get('doctors')) storage.set('doctors', [
            { id: 1, name: 'นพ.สมชาย ใจดี', specialty: 'อายุรแพทย์', phone: '081-234-5678', status: 'active' },
            { id: 2, name: 'นพ.สมหญิง รักษา', specialty: 'ศัลยแพทย์', phone: '082-345-6789', status: 'active' },
            { id: 3, name: 'นพ.วิชัย เก่ง', specialty: 'กุมารแพทย์', phone: '083-456-7890', status: 'active' }
        ]);

        // Initialize sample rooms
        if (!storage.get('rooms')) storage.set('rooms', [
            { id: 101, type: 'ห้องพักเดี่ยว', status: 'available', floor: 1 },
            { id: 102, type: 'ห้องพักเดี่ยว', status: 'occupied', floor: 1 },
            { id: 201, type: 'ห้องพักคู่', status: 'available', floor: 2 },
            { id: 202, type: 'ห้องพักคู่', status: 'available', floor: 2 }
        ]);
    }
};

// Initialize data on first load
storage.init();

// ===== Navigation =====
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navToggle?.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Navigation link clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        showSection(targetId);

        // Update active link
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Close mobile menu
        navMenu.classList.remove('active');
    });
});

// Show specific section
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');

        // Load section data
        switch(sectionId) {
            case 'dashboard':
                loadDashboard();
                break;
            case 'patients':
                loadPatients();
                break;
            case 'appointments':
                loadAppointments();
                break;
            case 'doctors':
                loadDoctors();
                break;
            case 'rooms':
                loadRooms();
                break;
        }
    }
}

// ===== Dashboard Functions =====
function loadDashboard() {
    const patients = storage.get('patients') || [];
    const appointments = storage.get('appointments') || [];
    const doctors = storage.get('doctors') || [];
    const rooms = storage.get('rooms') || [];

    // Get today's date
    const today = new Date().toISOString().split('T')[0];

    // Count today's patients
    const todayPatients = patients.filter(p => p.registrationDate === today).length;

    // Count today's appointments
    const todayAppointments = appointments.filter(a => a.date === today).length;

    // Count active doctors
    const activeDoctors = doctors.filter(d => d.status === 'active').length;

    // Count available rooms
    const availableRooms = rooms.filter(r => r.status === 'available').length;

    // Update stats
    document.getElementById('todayPatients').textContent = todayPatients;
    document.getElementById('appointments').textContent = todayAppointments;
    document.getElementById('activeDoctors').textContent = activeDoctors;
    document.getElementById('availableRooms').textContent = availableRooms;
}

// ===== Patients Functions =====
function loadPatients() {
    const patients = storage.get('patients') || [];
    const tbody = document.getElementById('patientsTableBody');

    if (patients.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="no-data">ยังไม่มีข้อมูลผู้ป่วย</td></tr>';
        return;
    }

    tbody.innerHTML = patients.map(patient => `
        <tr>
            <td>${patient.hn}</td>
            <td>${patient.name}</td>
            <td>${patient.gender || '-'}</td>
            <td>${patient.age}</td>
            <td>${patient.phone}</td>
            <td>
                <button class="btn btn-secondary" onclick="viewPatient('${patient.hn}')" style="padding: 0.5rem 1rem; font-size: 0.875rem;">ดูข้อมูล</button>
            </td>
        </tr>
    `).join('');
}

// Add patient button
document.getElementById('addPatientBtn')?.addEventListener('click', () => {
    showAddPatientModal();
});

function showAddPatientModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h3>เพิ่มผู้ป่วยใหม่</h3>
        <form id="addPatientForm" style="margin-top: 1rem;">
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">ชื่อ-นามสกุล <span style="color: red;">*</span></label>
                <input type="text" id="patientName" required minlength="3" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                <small style="color: #6b7280;">กรอกชื่อและนามสกุล (อย่างน้อย 3 ตัวอักษร)</small>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">เพศ <span style="color: red;">*</span></label>
                <select id="patientGender" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="">-- เลือกเพศ --</option>
                    <option value="ชาย">ชาย</option>
                    <option value="หญิง">หญิง</option>
                    <option value="ไม่ระบุ">ไม่ระบุ</option>
                </select>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">วันเกิด <span style="color: red;">*</span></label>
                <input type="date" id="patientBirthDate" required max="${new Date().toISOString().split('T')[0]}" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">อายุ</label>
                <input type="number" id="patientAge" readonly style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); background-color: #f3f4f6;">
                <small style="color: #6b7280;">คำนวณอัตโนมัติจากวันเกิด</small>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">เบอร์โทร <span style="color: red;">*</span></label>
                <input type="tel" id="patientPhone" required pattern="[0-9]{9,10}" placeholder="0812345678" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                <small style="color: #6b7280;">กรอกเบอร์โทรศัพท์ 9-10 หลัก</small>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">ที่อยู่ <span style="color: red;">*</span></label>
                <textarea id="patientAddress" required rows="3" placeholder="บ้านเลขที่, ถนน, ตำบล, อำเภอ, จังหวัด, รหัสไปรษณีย์" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); font-family: inherit;"></textarea>
            </div>
            <div id="formError" style="color: red; margin-bottom: 1rem; display: none;"></div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">บันทึก</button>
        </form>
    `;

    modal.classList.add('active');

    // Auto-calculate age from birthdate
    const birthDateInput = document.getElementById('patientBirthDate');
    const ageInput = document.getElementById('patientAge');

    birthDateInput.addEventListener('change', (e) => {
        const birthDate = new Date(e.target.value);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        ageInput.value = age >= 0 ? age : 0;
    });

    document.getElementById('addPatientForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Validation
        const formError = document.getElementById('formError');
        const phone = document.getElementById('patientPhone').value;

        if (!/^[0-9]{9,10}$/.test(phone)) {
            formError.textContent = 'เบอร์โทรศัพท์ไม่ถูกต้อง กรุณากรอกตัวเลข 9-10 หลัก';
            formError.style.display = 'block';
            return;
        }

        formError.style.display = 'none';
        addPatient();
    });
}

function addPatient() {
    const patients = storage.get('patients') || [];
    const today = new Date().toISOString().split('T')[0];

    const newPatient = {
        hn: 'HN' + String(patients.length + 1).padStart(6, '0'),
        name: document.getElementById('patientName').value,
        gender: document.getElementById('patientGender').value,
        birthDate: document.getElementById('patientBirthDate').value,
        age: document.getElementById('patientAge').value,
        phone: document.getElementById('patientPhone').value,
        address: document.getElementById('patientAddress').value,
        registrationDate: today
    };

    patients.push(newPatient);
    storage.set('patients', patients);

    closeModal();
    loadPatients();
    loadDashboard();

    alert('เพิ่มข้อมูลผู้ป่วยสำเร็จ! HN: ' + newPatient.hn);
}

function viewPatient(hn) {
    const patients = storage.get('patients') || [];
    const patient = patients.find(p => p.hn === hn);

    if (patient) {
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modalBody');

        modalBody.innerHTML = `
            <h3>ข้อมูลผู้ป่วย</h3>
            <div style="margin-top: 1rem;">
                <p><strong>HN:</strong> ${patient.hn}</p>
                <p><strong>ชื่อ-นามสกุล:</strong> ${patient.name}</p>
                <p><strong>เพศ:</strong> ${patient.gender || '-'}</p>
                <p><strong>วันเกิด:</strong> ${patient.birthDate || '-'}</p>
                <p><strong>อายุ:</strong> ${patient.age} ปี</p>
                <p><strong>เบอร์โทร:</strong> ${patient.phone}</p>
                <p><strong>ที่อยู่:</strong> ${patient.address || '-'}</p>
                <p><strong>วันที่ลงทะเบียน:</strong> ${patient.registrationDate}</p>
            </div>
        `;

        modal.classList.add('active');
    }
}

// ===== Appointments Functions =====
function loadAppointments() {
    const appointments = storage.get('appointments') || [];
    const list = document.getElementById('appointmentsList');

    if (appointments.length === 0) {
        list.innerHTML = '<p class="no-data">ยังไม่มีนัดหมาย</p>';
        return;
    }

    list.innerHTML = appointments.map(apt => `
        <div style="padding: 1rem; border-bottom: 1px solid var(--border-color);">
            <p><strong>${apt.patientName}</strong> - ${apt.doctorName}</p>
            <p>วันที่: ${apt.date} เวลา: ${apt.time}</p>
        </div>
    `).join('');
}

// ===== Doctors Functions =====
function loadDoctors() {
    const doctors = storage.get('doctors') || [];
    const grid = document.getElementById('doctorsGrid');

    grid.innerHTML = doctors.map(doctor => `
        <div style="padding: 1.5rem; background-color: var(--light-color); border-radius: var(--border-radius); margin-bottom: 1rem;">
            <h4>${doctor.name}</h4>
            <p>แผนก: ${doctor.specialty}</p>
            <p>โทร: ${doctor.phone}</p>
            <p>สถานะ: <span style="color: var(--secondary-color);">${doctor.status === 'active' ? 'ออกตรวจ' : 'ไม่ว่าง'}</span></p>
        </div>
    `).join('');
}

// ===== Rooms Functions =====
function loadRooms() {
    const rooms = storage.get('rooms') || [];
    const grid = document.getElementById('roomsGrid');

    grid.innerHTML = rooms.map(room => `
        <div style="padding: 1.5rem; background-color: ${room.status === 'available' ? 'var(--secondary-color)' : '#ef4444'}; color: white; border-radius: var(--border-radius); margin-bottom: 1rem;">
            <h4>ห้อง ${room.id}</h4>
            <p>${room.type}</p>
            <p>ชั้น ${room.floor}</p>
            <p>${room.status === 'available' ? '✓ ว่าง' : '✗ ไม่ว่าง'}</p>
        </div>
    `).join('');
}

// ===== Modal Functions =====
function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('active');
}

document.getElementById('modalClose')?.addEventListener('click', closeModal);

// Close modal when clicking outside
document.getElementById('modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        closeModal();
    }
});

// ===== Search Function =====
function searchPatients(query) {
    const patients = storage.get('patients') || [];
    const tbody = document.getElementById('patientsTableBody');

    if (!query) {
        loadPatients();
        return;
    }

    const filtered = patients.filter(patient =>
        patient.name.toLowerCase().includes(query.toLowerCase()) ||
        patient.hn.toLowerCase().includes(query.toLowerCase()) ||
        patient.phone.includes(query)
    );

    if (filtered.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="no-data">ไม่พบข้อมูลผู้ป่วยที่ค้นหา</td></tr>';
        return;
    }

    tbody.innerHTML = filtered.map(patient => `
        <tr>
            <td>${patient.hn}</td>
            <td>${patient.name}</td>
            <td>${patient.gender || '-'}</td>
            <td>${patient.age}</td>
            <td>${patient.phone}</td>
            <td>
                <button class="btn btn-secondary" onclick="viewPatient('${patient.hn}')" style="padding: 0.5rem 1rem; font-size: 0.875rem;">ดูข้อมูล</button>
            </td>
        </tr>
    `).join('');
}

// Add event listener for search box
const searchBox = document.querySelector('.search-box');
if (searchBox) {
    searchBox.addEventListener('input', (e) => {
        searchPatients(e.target.value);
    });
}

// ===== Initialize on page load =====
document.addEventListener('DOMContentLoaded', () => {
    loadDashboard();
});
