// ===== Hospital Management System - Main JavaScript =====
// Version: 1.6.0
// Description: Core application logic for hospital management system
// Author: Hospital MS Team
// Last Updated: 2025-10-11

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

        // Initialize comprehensive room data with Thai hospital standards
        if (!storage.get('rooms')) storage.set('rooms', [
            // Floor 1 - Ward Rooms (ห้องรวม)
            {
                id: '101A',
                roomNumber: '101A',
                type: 'ward',
                typeName: 'ห้องรวม (Ward)',
                status: 'available',
                floor: 1,
                building: 'อาคารผู้ป่วยใน 1',
                capacity: 6,
                currentOccupancy: 0,
                pricePerDay: 1500,
                amenities: ['เตียงปรับระดับ', 'พัดลม', 'ห้องน้ำรวม', 'ตู้เก็บของส่วนตัว'],
                lastCleaned: new Date().toISOString(),
                notes: ''
            },
            {
                id: '101B',
                roomNumber: '101B',
                type: 'ward',
                typeName: 'ห้องรวม (Ward)',
                status: 'occupied',
                floor: 1,
                building: 'อาคารผู้ป่วยใน 1',
                capacity: 6,
                currentOccupancy: 4,
                pricePerDay: 1500,
                amenities: ['เตียงปรับระดับ', 'พัดลม', 'ห้องน้ำรวม', 'ตู้เก็บของส่วนตัว'],
                lastCleaned: new Date(Date.now() - 3600000).toISOString(),
                notes: 'มีผู้ป่วย 4 คน'
            },

            // Floor 2 - Semi-Private Rooms (ห้อง 2 เตียง)
            {
                id: '201',
                roomNumber: '201',
                type: 'semi-private',
                typeName: 'ห้อง 2 เตียง (Semi-Private)',
                status: 'available',
                floor: 2,
                building: 'อาคารผู้ป่วยใน 1',
                capacity: 2,
                currentOccupancy: 0,
                pricePerDay: 3500,
                amenities: ['เตียงไฟฟ้า', 'แอร์', 'TV', 'ห้องน้ำในตัว', 'ตู้เย็นเล็ก', 'โซฟาญาติ'],
                lastCleaned: new Date().toISOString(),
                notes: ''
            },
            {
                id: '202',
                roomNumber: '202',
                type: 'semi-private',
                typeName: 'ห้อง 2 เตียง (Semi-Private)',
                status: 'cleaning',
                floor: 2,
                building: 'อาคารผู้ป่วยใน 1',
                capacity: 2,
                currentOccupancy: 0,
                pricePerDay: 3500,
                amenities: ['เตียงไฟฟ้า', 'แอร์', 'TV', 'ห้องน้ำในตัว', 'ตู้เย็นเล็ก', 'โซฟาญาติ'],
                lastCleaned: new Date(Date.now() - 1800000).toISOString(),
                notes: 'กำลังทำความสะอาด'
            },

            // Floor 3 - Private Rooms (ห้องเดี่ยว)
            {
                id: '301',
                roomNumber: '301',
                type: 'private',
                typeName: 'ห้องเดี่ยว (Private)',
                status: 'occupied',
                floor: 3,
                building: 'อาคารผู้ป่วยใน 1',
                capacity: 1,
                currentOccupancy: 1,
                pricePerDay: 5000,
                amenities: ['เตียงไฟฟ้า', 'แอร์', 'TV 32"', 'ห้องน้ำในตัว', 'ตู้เย็น', 'โซฟา', 'โต๊ะทำงาน', 'WiFi'],
                lastCleaned: new Date(Date.now() - 7200000).toISOString(),
                notes: 'ผู้ป่วยหลังผ่าตัด'
            },
            {
                id: '302',
                roomNumber: '302',
                type: 'private',
                typeName: 'ห้องเดี่ยว (Private)',
                status: 'available',
                floor: 3,
                building: 'อาคารผู้ป่วยใน 1',
                capacity: 1,
                currentOccupancy: 0,
                pricePerDay: 5000,
                amenities: ['เตียงไฟฟ้า', 'แอร์', 'TV 32"', 'ห้องน้ำในตัว', 'ตู้เย็น', 'โซฟา', 'โต๊ะทำงาน', 'WiFi'],
                lastCleaned: new Date().toISOString(),
                notes: ''
            },

            // Floor 4 - VIP Rooms
            {
                id: '401',
                roomNumber: '401',
                type: 'vip',
                typeName: 'ห้อง VIP',
                status: 'reserved',
                floor: 4,
                building: 'อาคารผู้ป่วยใน 2',
                capacity: 1,
                currentOccupancy: 0,
                pricePerDay: 12000,
                amenities: ['เตียงไฟฟ้าพิเศษ', 'แอร์ 2 ตัว', 'Smart TV 43"', 'ห้องน้ำหรู', 'ตู้เย็น', 'โซฟาเบด', 'โต๊ะทำงาน', 'WiFi', 'ตู้นิรภัย', 'กาแฟเครื่อง'],
                lastCleaned: new Date().toISOString(),
                notes: 'จองไว้สำหรับผู้ป่วยพรุ่งนี้'
            },
            {
                id: '402',
                roomNumber: '402',
                type: 'vip',
                typeName: 'ห้อง VIP',
                status: 'maintenance',
                floor: 4,
                building: 'อาคารผู้ป่วยใน 2',
                capacity: 1,
                currentOccupancy: 0,
                pricePerDay: 12000,
                amenities: ['เตียงไฟฟ้าพิเศษ', 'แอร์ 2 ตัว', 'Smart TV 43"', 'ห้องน้ำหรู', 'ตู้เย็น', 'โซฟาเบด', 'โต๊ะทำงาน', 'WiFi', 'ตู้นิรภัย', 'กาแฟเครื่อง'],
                lastCleaned: new Date(Date.now() - 86400000).toISOString(),
                notes: 'ซ่อมแอร์'
            },

            // Floor 5 - Suite Rooms
            {
                id: '501',
                roomNumber: '501',
                type: 'suite',
                typeName: 'ห้องสวีท (Suite)',
                status: 'available',
                floor: 5,
                building: 'อาคารผู้ป่วยใน 2',
                capacity: 1,
                currentOccupancy: 0,
                pricePerDay: 25000,
                amenities: ['เตียงพิเศษ', 'ห้องนอนแยก', 'ห้องรับแขก', 'แอร์ 3 ตัว', 'Smart TV 55"', 'ห้องน้ำหรูพร้อมอ่างอาบน้ำ', 'ตู้เย็น', 'โซฟาเซ็ท', 'โต๊ะทำงาน', 'WiFi', 'ตู้นิรภัย', 'เครื่องชงกาแฟ', 'ห้องครัวเล็ก', 'ระเบียง'],
                lastCleaned: new Date().toISOString(),
                notes: 'ห้องพิเศษสุด พร้อมบริการ'
            },
            {
                id: '502',
                roomNumber: '502',
                type: 'suite',
                typeName: 'ห้องสวีท (Suite)',
                status: 'occupied',
                floor: 5,
                building: 'อาคารผู้ป่วยใน 2',
                capacity: 1,
                currentOccupancy: 1,
                pricePerDay: 25000,
                amenities: ['เตียงพิเศษ', 'ห้องนอนแยก', 'ห้องรับแขก', 'แอร์ 3 ตัว', 'Smart TV 55"', 'ห้องน้ำหรูพร้อมอ่างอาบน้ำ', 'ตู้เย็น', 'โซฟาเซ็ท', 'โต๊ะทำงาน', 'WiFi', 'ตู้นิรภัย', 'เครื่องชงกาแฟ', 'ห้องครัวเล็ก', 'ระเบียง'],
                lastCleaned: new Date(Date.now() - 10800000).toISOString(),
                notes: 'VIP ระดับสูง'
            }
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

    // Get today's date and current time
    const today = new Date().toISOString().split('T')[0];
    const now = new Date();

    // Count today's patients
    const todayPatients = patients.filter(p => p.registrationDate === today).length;

    // Count today's appointments
    const todayAppointments = appointments.filter(a => a.date === today).length;

    // Count active doctors
    const activeDoctors = doctors.filter(d => d.status === 'active').length;

    // Count available rooms
    const availableRooms = rooms.filter(r => r.status === 'available').length;

    // Update basic stats
    document.getElementById('todayPatients').textContent = todayPatients;
    document.getElementById('appointments').textContent = todayAppointments;
    document.getElementById('activeDoctors').textContent = activeDoctors;
    document.getElementById('availableRooms').textContent = availableRooms;

    // Load appointment statistics
    loadAppointmentStatistics(appointments, now);

    // Load room statistics
    loadRoomStatistics();

    // Load patient statistics charts
    loadPatientStatistics();
}

/**
 * Load and display room statistics in dashboard
 * Counts rooms by status and displays in gradient cards
 */
function loadRoomStatistics() {
    const rooms = storage.get('rooms') || [];

    // Count rooms by status
    const available = rooms.filter(r => r.status === 'available').length;
    const occupied = rooms.filter(r => r.status === 'occupied').length;
    const cleaning = rooms.filter(r => r.status === 'cleaning' || r.status === 'dirty').length;
    const maintenance = rooms.filter(r => r.status === 'maintenance').length;
    const reserved = rooms.filter(r => r.status === 'reserved').length;

    // Update room statistics elements
    const availableEl = document.getElementById('availableRoomsCount');
    const occupiedEl = document.getElementById('occupiedRoomsCount');
    const cleaningEl = document.getElementById('cleaningRoomsCount');
    const maintenanceEl = document.getElementById('maintenanceRoomsCount');
    const reservedEl = document.getElementById('reservedRoomsCount');

    if (availableEl) availableEl.textContent = available;
    if (occupiedEl) occupiedEl.textContent = occupied;
    if (cleaningEl) cleaningEl.textContent = cleaning;
    if (maintenanceEl) maintenanceEl.textContent = maintenance;
    if (reservedEl) reservedEl.textContent = reserved;
}

/**
 * Load and display appointment statistics in dashboard
 * @param {Array} appointments - Array of all appointments
 * @param {Date} now - Current date/time
 */
function loadAppointmentStatistics(appointments, now) {
    // Count appointments by status
    const pending = appointments.filter(a => a.status === 'pending').length;
    const confirmed = appointments.filter(a => a.status === 'confirmed').length;
    const cancelled = appointments.filter(a => a.status === 'cancelled').length;

    // Count upcoming appointments (future appointments that are not cancelled)
    const upcoming = appointments.filter(a => {
        const appointmentDateTime = new Date(`${a.date}T${a.time}`);
        return appointmentDateTime >= now && a.status !== 'cancelled';
    }).length;

    // Update appointment statistics
    const pendingEl = document.getElementById('pendingAppointments');
    const confirmedEl = document.getElementById('confirmedAppointments');
    const upcomingEl = document.getElementById('upcomingAppointments');
    const cancelledEl = document.getElementById('cancelledAppointments');

    if (pendingEl) pendingEl.textContent = pending;
    if (confirmedEl) confirmedEl.textContent = confirmed;
    if (upcomingEl) upcomingEl.textContent = upcoming;
    if (cancelledEl) cancelledEl.textContent = cancelled;
}

/**
 * Calculate gender statistics from patient data
 * @returns {Object} Gender statistics with counts for each gender
 */
function calculateGenderStatistics() {
    const patients = storage.get('patients') || [];

    const stats = {
        'ชาย': 0,
        'หญิง': 0,
        'ไม่ระบุ': 0
    };

    patients.forEach(patient => {
        const gender = patient.gender || 'ไม่ระบุ';
        if (stats.hasOwnProperty(gender)) {
            stats[gender]++;
        }
    });

    return stats;
}

/**
 * Calculate age group statistics from patient data
 * @returns {Object} Age group statistics with counts for each age range
 */
function calculateAgeGroupStatistics() {
    const patients = storage.get('patients') || [];

    const ageGroups = {
        '0-18': 0,
        '19-30': 0,
        '31-45': 0,
        '46-60': 0,
        '61+': 0
    };

    patients.forEach(patient => {
        const age = parseInt(patient.age) || 0;

        if (age >= 0 && age <= 18) {
            ageGroups['0-18']++;
        } else if (age >= 19 && age <= 30) {
            ageGroups['19-30']++;
        } else if (age >= 31 && age <= 45) {
            ageGroups['31-45']++;
        } else if (age >= 46 && age <= 60) {
            ageGroups['46-60']++;
        } else if (age >= 61) {
            ageGroups['61+']++;
        }
    });

    return ageGroups;
}

// Chart instances (global variables to allow chart updates)
let genderChartInstance = null;
let ageGroupChartInstance = null;

/**
 * Load and display patient statistics charts
 * Creates or updates gender and age group distribution charts
 */
function loadPatientStatistics() {
    const patients = storage.get('patients') || [];

    // If no patients, show empty state
    if (patients.length === 0) {
        // Destroy existing charts if they exist
        if (genderChartInstance) {
            genderChartInstance.destroy();
            genderChartInstance = null;
        }
        if (ageGroupChartInstance) {
            ageGroupChartInstance.destroy();
            ageGroupChartInstance = null;
        }
        return;
    }

    // Get statistics data
    const genderStats = calculateGenderStatistics();
    const ageGroupStats = calculateAgeGroupStatistics();

    // Create/Update Gender Chart
    createGenderChart(genderStats);

    // Create/Update Age Group Chart
    createAgeGroupChart(ageGroupStats);
}

/**
 * Create or update gender distribution chart
 * @param {Object} genderStats - Gender statistics data
 */
function createGenderChart(genderStats) {
    const ctx = document.getElementById('genderChart');
    if (!ctx) return;

    // Destroy existing chart
    if (genderChartInstance) {
        genderChartInstance.destroy();
    }

    // Create new chart
    genderChartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['ชาย', 'หญิง', 'ไม่ระบุ'],
            datasets: [{
                label: 'จำนวนผู้ป่วย',
                data: [
                    genderStats['ชาย'],
                    genderStats['หญิง'],
                    genderStats['ไม่ระบุ']
                ],
                backgroundColor: [
                    '#3b82f6', // Blue for male
                    '#ec4899', // Pink for female
                    '#94a3b8'  // Gray for unspecified
                ],
                borderWidth: 2,
                borderColor: '#ffffff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.parsed || 0;
                            const total = context.dataset.data.reduce((a, b) => a + b, 0);
                            const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : 0;
                            return `${label}: ${value} คน (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });
}

/**
 * Create or update age group distribution chart
 * @param {Object} ageGroupStats - Age group statistics data
 */
function createAgeGroupChart(ageGroupStats) {
    const ctx = document.getElementById('ageGroupChart');
    if (!ctx) return;

    // Destroy existing chart
    if (ageGroupChartInstance) {
        ageGroupChartInstance.destroy();
    }

    // Create new chart
    ageGroupChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['0-18 ปี', '19-30 ปี', '31-45 ปี', '46-60 ปี', '61+ ปี'],
            datasets: [{
                label: 'จำนวนผู้ป่วย',
                data: [
                    ageGroupStats['0-18'],
                    ageGroupStats['19-30'],
                    ageGroupStats['31-45'],
                    ageGroupStats['46-60'],
                    ageGroupStats['61+']
                ],
                backgroundColor: [
                    '#10b981', // Green
                    '#3b82f6', // Blue
                    '#f59e0b', // Orange
                    '#ef4444', // Red
                    '#8b5cf6'  // Purple
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.parsed.y || 0;
                            return `จำนวน: ${value} คน`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1,
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 11
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// ===== Patients Functions =====
/**
 * Load and display all patients in the table
 * Also updates the result count display
 */
function loadPatients() {
    const patients = storage.get('patients') || [];
    const tbody = document.getElementById('patientsTableBody');
    const resultCount = document.getElementById('patientResultCount');

    if (patients.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">👥</div>
                    <h3 style="margin: 0 0 0.5rem 0; color: #374151;">ยังไม่มีข้อมูลผู้ป่วย</h3>
                    <p style="margin: 0;">เริ่มต้นโดยการเพิ่มผู้ป่วยใหม่</p>
                </td>
            </tr>
        `;
        resultCount.innerHTML = '';
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
                <button class="btn btn-secondary" onclick="viewPatient('${patient.hn}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem; margin-right: 0.25rem;">ดู</button>
                <button class="btn btn-primary" onclick="editPatient('${patient.hn}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem; margin-right: 0.25rem;">แก้ไข</button>
                <button class="btn" onclick="deletePatient('${patient.hn}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem; background-color: #ef4444; color: white;">ลบ</button>
            </td>
        </tr>
    `).join('');

    // Display result count
    updateResultCount(patients.length, patients.length);
}

// Add patient button
document.getElementById('addPatientBtn')?.addEventListener('click', () => {
    showAddPatientModal();
});

// Export CSV button
document.getElementById('exportCSVBtn')?.addEventListener('click', () => {
    exportPatientsToCSV();
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

/**
 * Edit patient information
 * @param {string} hn - Patient HN number
 */
function editPatient(hn) {
    const patients = storage.get('patients') || [];
    const patient = patients.find(p => p.hn === hn);

    if (!patient) {
        alert('ไม่พบข้อมูลผู้ป่วย');
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h3>แก้ไขข้อมูลผู้ป่วย</h3>
        <form id="editPatientForm" style="margin-top: 1rem;">
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">HN</label>
                <input type="text" value="${patient.hn}" disabled style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); background-color: #f3f4f6;">
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">ชื่อ-นามสกุล <span style="color: red;">*</span></label>
                <input type="text" id="editPatientName" value="${patient.name}" required minlength="3" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">เพศ <span style="color: red;">*</span></label>
                <select id="editPatientGender" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="">-- เลือกเพศ --</option>
                    <option value="ชาย" ${patient.gender === 'ชาย' ? 'selected' : ''}>ชาย</option>
                    <option value="หญิง" ${patient.gender === 'หญิง' ? 'selected' : ''}>หญิง</option>
                    <option value="ไม่ระบุ" ${patient.gender === 'ไม่ระบุ' ? 'selected' : ''}>ไม่ระบุ</option>
                </select>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">วันเกิด <span style="color: red;">*</span></label>
                <input type="date" id="editPatientBirthDate" value="${patient.birthDate}" required max="${new Date().toISOString().split('T')[0]}" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">อายุ</label>
                <input type="number" id="editPatientAge" value="${patient.age}" readonly style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); background-color: #f3f4f6;">
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">เบอร์โทร <span style="color: red;">*</span></label>
                <input type="tel" id="editPatientPhone" value="${patient.phone}" required pattern="[0-9]{9,10}" placeholder="0812345678" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">ที่อยู่ <span style="color: red;">*</span></label>
                <textarea id="editPatientAddress" required rows="3" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); font-family: inherit;">${patient.address}</textarea>
            </div>
            <div id="editFormError" style="color: red; margin-bottom: 1rem; display: none;"></div>
            <div style="display: flex; gap: 0.5rem;">
                <button type="submit" class="btn btn-primary" style="flex: 1;">บันทึกการแก้ไข</button>
                <button type="button" class="btn btn-secondary" onclick="closeModal()" style="flex: 1;">ยกเลิก</button>
            </div>
        </form>
    `;

    modal.classList.add('active');

    // Auto-calculate age from birthdate
    const birthDateInput = document.getElementById('editPatientBirthDate');
    const ageInput = document.getElementById('editPatientAge');

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

    // Handle form submission
    document.getElementById('editPatientForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Validation
        const formError = document.getElementById('editFormError');
        const phone = document.getElementById('editPatientPhone').value;

        if (!/^[0-9]{9,10}$/.test(phone)) {
            formError.textContent = 'เบอร์โทรศัพท์ไม่ถูกต้อง กรุณากรอกตัวเลข 9-10 หลัก';
            formError.style.display = 'block';
            return;
        }

        formError.style.display = 'none';
        saveEditedPatient(hn);
    });
}

/**
 * Save edited patient data
 * @param {string} hn - Patient HN number
 */
function saveEditedPatient(hn) {
    const patients = storage.get('patients') || [];
    const patientIndex = patients.findIndex(p => p.hn === hn);

    if (patientIndex === -1) {
        alert('ไม่พบข้อมูลผู้ป่วย');
        return;
    }

    // Update patient data
    patients[patientIndex] = {
        ...patients[patientIndex],
        name: document.getElementById('editPatientName').value,
        gender: document.getElementById('editPatientGender').value,
        birthDate: document.getElementById('editPatientBirthDate').value,
        age: document.getElementById('editPatientAge').value,
        phone: document.getElementById('editPatientPhone').value,
        address: document.getElementById('editPatientAddress').value
    };

    storage.set('patients', patients);

    closeModal();
    applyFilters(); // Refresh the table with current filters
    loadDashboard(); // Update dashboard stats

    alert('แก้ไขข้อมูลผู้ป่วยสำเร็จ!');
}

/**
 * Export patients data to CSV file
 */
function exportPatientsToCSV() {
    const patients = storage.get('patients') || [];

    if (patients.length === 0) {
        alert('ไม่มีข้อมูลผู้ป่วยให้ Export');
        return;
    }

    // CSV header
    const headers = ['HN', 'ชื่อ-นามสกุล', 'เพศ', 'วันเกิด', 'อายุ', 'เบอร์โทร', 'ที่อยู่', 'วันที่ลงทะเบียน'];

    // CSV rows
    const rows = patients.map(patient => [
        patient.hn,
        patient.name,
        patient.gender || '-',
        patient.birthDate || '-',
        patient.age,
        patient.phone,
        `"${(patient.address || '-').replace(/"/g, '""')}"`, // Escape quotes in address
        patient.registrationDate
    ]);

    // Combine headers and rows
    const csvContent = [
        headers.join(','),
        ...rows.map(row => row.join(','))
    ].join('\n');

    // Add BOM for Excel to recognize UTF-8
    const BOM = '\uFEFF';
    const blob = new Blob([BOM + csvContent], { type: 'text/csv;charset=utf-8;' });

    // Create download link
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `patients_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert(`Export สำเร็จ! ดาวน์โหลดข้อมูล ${patients.length} รายการ`);
}

/**
 * Delete patient with confirmation
 * @param {string} hn - Patient HN number
 */
function deletePatient(hn) {
    const patients = storage.get('patients') || [];
    const patient = patients.find(p => p.hn === hn);

    if (!patient) {
        alert('ไม่พบข้อมูลผู้ป่วย');
        return;
    }

    // Show confirmation dialog
    const confirmed = confirm(
        `คุณต้องการลบข้อมูลผู้ป่วยนี้ใช่หรือไม่?\n\n` +
        `HN: ${patient.hn}\n` +
        `ชื่อ: ${patient.name}\n` +
        `เบอร์โทร: ${patient.phone}\n\n` +
        `การลบข้อมูลนี้ไม่สามารถกู้คืนได้`
    );

    if (!confirmed) {
        return;
    }

    // Delete patient
    const updatedPatients = patients.filter(p => p.hn !== hn);
    storage.set('patients', updatedPatients);

    applyFilters(); // Refresh the table with current filters
    loadDashboard(); // Update dashboard stats

    alert('ลบข้อมูลผู้ป่วยสำเร็จ');
}

// ===== Appointments Functions =====
/**
 * Load and display all appointments with sorting and status indicators
 * Sorts appointments by date and time, shows color-coded status for past/upcoming appointments
 */
function loadAppointments() {
    const appointments = storage.get('appointments') || [];
    const list = document.getElementById('appointmentsList');

    if (appointments.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">📅</div>
                <h3 style="margin: 0 0 0.5rem 0; color: #374151;">ยังไม่มีนัดหมาย</h3>
                <p style="margin: 0;">คลิกปุ่ม "สร้างนัดหมายใหม่" เพื่อเริ่มต้น</p>
            </div>
        `;
        return;
    }

    // Sort appointments by date and time (newest first for easier viewing)
    const sortedAppointments = appointments.sort((a, b) => {
        const dateTimeA = new Date(`${a.date}T${a.time}`);
        const dateTimeB = new Date(`${b.date}T${b.time}`);
        return dateTimeB - dateTimeA; // Descending order (newest first)
    });

    // Get current date and time for comparison
    const now = new Date();

    list.innerHTML = sortedAppointments.map(apt => {
        const appointmentDateTime = new Date(`${apt.date}T${apt.time}`);
        const isPast = appointmentDateTime < now;

        // Determine status colors and text
        let statusColor, statusText, cardBgColor, cardBorderColor;

        if (isPast) {
            cardBgColor = '#f3f4f6'; // Light gray for past appointments
            cardBorderColor = '#9ca3af'; // Gray border
            statusColor = '#6b7280'; // Gray text
            statusText = 'ผ่านไปแล้ว';
        } else {
            cardBgColor = '#f0f9ff'; // Light blue for upcoming
            cardBorderColor = '#3b82f6'; // Blue border
            statusColor = '#10b981'; // Green text
            statusText = 'กำลังจะถึง';
        }

        // Status badge colors based on appointment status
        let statusBadgeColor, statusBadgeText;
        switch(apt.status) {
            case 'confirmed':
                statusBadgeColor = '#10b981'; // Green
                statusBadgeText = 'ยืนยันแล้ว';
                break;
            case 'cancelled':
                statusBadgeColor = '#ef4444'; // Red
                statusBadgeText = 'ยกเลิกแล้ว';
                break;
            case 'pending':
            default:
                statusBadgeColor = '#f59e0b'; // Orange
                statusBadgeText = 'รอยืนยัน';
        }

        // Format date in Thai format
        const dateObj = new Date(apt.date);
        const thaiDate = dateObj.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });

        return `
            <div style="padding: 1.25rem; background-color: ${cardBgColor}; border-left: 4px solid ${cardBorderColor}; border-radius: var(--border-radius); margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div>
                        <h4 style="margin: 0 0 0.25rem 0; color: var(--primary-color); font-size: 1.1rem;">
                            ${apt.patientName}
                        </h4>
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">HN: ${apt.patientHN}</p>
                    </div>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <span style="padding: 0.25rem 0.75rem; background-color: ${statusBadgeColor}; color: white; border-radius: 12px; font-size: 0.75rem; font-weight: 500;">
                            ${statusBadgeText}
                        </span>
                        <span style="padding: 0.25rem 0.75rem; background-color: ${isPast ? '#9ca3af' : '#3b82f6'}; color: white; border-radius: 12px; font-size: 0.75rem; font-weight: 500;">
                            ${statusText}
                        </span>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin-bottom: 0.75rem;">
                    <div>
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">👨‍⚕️ แพทย์</p>
                        <p style="margin: 0.25rem 0 0 0; font-weight: 500;">${apt.doctorName}</p>
                        <p style="margin: 0; color: #6b7280; font-size: 0.75rem;">${apt.doctorSpecialty}</p>
                    </div>
                    <div>
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">📅 วันที่</p>
                        <p style="margin: 0.25rem 0 0 0; font-weight: 500;">${thaiDate}</p>
                        <p style="margin: 0; color: #6b7280; font-size: 0.75rem;">เวลา ${apt.time} น.</p>
                    </div>
                </div>

                ${apt.note ? `
                    <div style="padding: 0.75rem; background-color: white; border-radius: 6px; margin-top: 0.75rem;">
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">📝 หมายเหตุ</p>
                        <p style="margin: 0.25rem 0 0 0; color: #374151;">${apt.note}</p>
                    </div>
                ` : ''}

                <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid ${isPast ? '#d1d5db' : '#bfdbfe'}; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button class="btn btn-secondary" onclick="viewAppointmentDetails('${apt.id}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem;">
                        ดูรายละเอียด
                    </button>
                    ${!isPast && apt.status !== 'cancelled' ? `
                        ${apt.status === 'pending' ? `
                            <button class="btn" onclick="confirmAppointment('${apt.id}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem; background-color: #10b981; color: white;">
                                ยืนยันนัดหมาย
                            </button>
                        ` : ''}
                        <button class="btn btn-primary" onclick="editAppointment('${apt.id}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem;">
                            แก้ไข
                        </button>
                        <button class="btn" onclick="cancelAppointment('${apt.id}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem; background-color: #ef4444; color: white;">
                            ยกเลิก
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

/**
 * View appointment details in modal
 * @param {string} appointmentId - Appointment ID
 */
function viewAppointmentDetails(appointmentId) {
    const appointments = storage.get('appointments') || [];
    const appointment = appointments.find(apt => apt.id == appointmentId);

    if (!appointment) {
        alert('ไม่พบข้อมูลนัดหมาย');
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    const dateObj = new Date(appointment.date);
    const thaiDate = dateObj.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });

    let statusText, statusColor;
    switch(appointment.status) {
        case 'confirmed':
            statusText = 'ยืนยันแล้ว';
            statusColor = '#10b981';
            break;
        case 'cancelled':
            statusText = 'ยกเลิกแล้ว';
            statusColor = '#ef4444';
            break;
        case 'pending':
        default:
            statusText = 'รอยืนยัน';
            statusColor = '#f59e0b';
    }

    modalBody.innerHTML = `
        <h3>รายละเอียดนัดหมาย</h3>
        <div style="margin-top: 1.5rem;">
            <div style="padding: 1rem; background-color: #f3f4f6; border-radius: 8px; margin-bottom: 1rem;">
                <p style="margin: 0 0 0.5rem 0;"><strong>รหัสนัดหมาย:</strong> #${appointment.id}</p>
                <p style="margin: 0;"><strong>สถานะ:</strong> <span style="color: ${statusColor}; font-weight: 600;">${statusText}</span></p>
            </div>

            <h4 style="margin: 1.5rem 0 0.75rem 0; color: var(--primary-color);">ข้อมูลผู้ป่วย</h4>
            <p><strong>ชื่อ-นามสกุล:</strong> ${appointment.patientName}</p>
            <p><strong>HN:</strong> ${appointment.patientHN}</p>

            <h4 style="margin: 1.5rem 0 0.75rem 0; color: var(--primary-color);">ข้อมูลแพทย์</h4>
            <p><strong>ชื่อ:</strong> ${appointment.doctorName}</p>
            <p><strong>แผนก:</strong> ${appointment.doctorSpecialty}</p>

            <h4 style="margin: 1.5rem 0 0.75rem 0; color: var(--primary-color);">เวลานัดหมาย</h4>
            <p><strong>วันที่:</strong> ${thaiDate}</p>
            <p><strong>เวลา:</strong> ${appointment.time} น.</p>

            ${appointment.note ? `
                <h4 style="margin: 1.5rem 0 0.75rem 0; color: var(--primary-color);">หมายเหตุ</h4>
                <p style="padding: 1rem; background-color: #f9fafb; border-radius: 6px;">${appointment.note}</p>
            ` : ''}

            <p style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 0.875rem;">
                <strong>วันที่สร้าง:</strong> ${new Date(appointment.createdAt).toLocaleString('th-TH')}
            </p>
        </div>
    `;

    modal.classList.add('active');
}

/**
 * Confirm appointment
 * @param {string} appointmentId - Appointment ID
 */
function confirmAppointment(appointmentId) {
    const appointments = storage.get('appointments') || [];
    const appointment = appointments.find(apt => apt.id == appointmentId);

    if (!appointment) {
        alert('ไม่พบข้อมูลนัดหมาย');
        return;
    }

    const confirmed = confirm(
        `ยืนยันนัดหมายนี้ใช่หรือไม่?\n\n` +
        `ผู้ป่วย: ${appointment.patientName}\n` +
        `แพทย์: ${appointment.doctorName}\n` +
        `วันที่: ${appointment.date} เวลา: ${appointment.time}`
    );

    if (!confirmed) {
        return;
    }

    // Update appointment status to confirmed
    const appointmentIndex = appointments.findIndex(apt => apt.id == appointmentId);
    appointments[appointmentIndex].status = 'confirmed';
    storage.set('appointments', appointments);

    loadAppointments();
    loadDashboard();

    alert('ยืนยันนัดหมายสำเร็จ!');
}

/**
 * Cancel appointment with confirmation
 * @param {string} appointmentId - Appointment ID
 */
function cancelAppointment(appointmentId) {
    const appointments = storage.get('appointments') || [];
    const appointment = appointments.find(apt => apt.id == appointmentId);

    if (!appointment) {
        alert('ไม่พบข้อมูลนัดหมาย');
        return;
    }

    const confirmed = confirm(
        `คุณต้องการยกเลิกนัดหมายนี้ใช่หรือไม่?\n\n` +
        `ผู้ป่วย: ${appointment.patientName}\n` +
        `แพทย์: ${appointment.doctorName}\n` +
        `วันที่: ${appointment.date} เวลา: ${appointment.time}`
    );

    if (!confirmed) {
        return;
    }

    // Update appointment status to cancelled
    const appointmentIndex = appointments.findIndex(apt => apt.id == appointmentId);
    appointments[appointmentIndex].status = 'cancelled';
    storage.set('appointments', appointments);

    loadAppointments();
    loadDashboard();

    alert('ยกเลิกนัดหมายสำเร็จ');
}

/**
 * Edit appointment (placeholder for Day 11)
 * @param {string} appointmentId - Appointment ID
 */
/**
 * Edit existing appointment
 * Opens modal with pre-filled form to edit appointment details
 * @param {number} appointmentId - The ID of the appointment to edit
 */
function editAppointment(appointmentId) {
    const appointments = storage.get('appointments') || [];
    const appointment = appointments.find(a => a.id === appointmentId);

    if (!appointment) {
        alert('ไม่พบข้อมูลนัดหมาย');
        return;
    }

    // Check if appointment is in the past
    const appointmentDateTime = new Date(`${appointment.date}T${appointment.time}`);
    const now = new Date();
    if (appointmentDateTime < now) {
        alert('ไม่สามารถแก้ไขนัดหมายที่ผ่านไปแล้ว');
        return;
    }

    // Check if appointment is cancelled
    if (appointment.status === 'cancelled') {
        alert('ไม่สามารถแก้ไขนัดหมายที่ถูกยกเลิกแล้ว');
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    // Get patients and doctors for dropdown
    const patients = storage.get('patients') || [];
    const doctors = storage.get('doctors') || [];

    modalBody.innerHTML = `
        <h3>แก้ไขนัดหมาย</h3>
        <form id="editAppointmentForm" style="margin-top: 1rem;">
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">ผู้ป่วย <span style="color: red;">*</span></label>
                <select id="editAppointmentPatient" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="">-- เลือกผู้ป่วย --</option>
                    ${patients.map(p => `<option value="${p.hn}" ${p.hn === appointment.patientHN ? 'selected' : ''}>${p.name} (HN: ${p.hn})</option>`).join('')}
                </select>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">แพทย์ <span style="color: red;">*</span></label>
                <select id="editAppointmentDoctor" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="">-- เลือกแพทย์ --</option>
                    ${doctors.filter(d => d.status === 'active').map(d => `<option value="${d.id}" ${d.id == appointment.doctorId ? 'selected' : ''}>${d.name} (${d.specialty})</option>`).join('')}
                </select>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">วันที่นัดหมาย <span style="color: red;">*</span></label>
                <input type="date" id="editAppointmentDate" required value="${appointment.date}" min="${new Date().toISOString().split('T')[0]}" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                <small style="color: #6b7280;">เลือกวันที่ต้องการนัด</small>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">เวลานัดหมาย <span style="color: red;">*</span></label>
                <input type="time" id="editAppointmentTime" required value="${appointment.time}" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                <small style="color: #6b7280;">เลือกเวลาที่ต้องการนัด</small>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">สถานะนัดหมาย <span style="color: red;">*</span></label>
                <select id="editAppointmentStatus" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="pending" ${appointment.status === 'pending' ? 'selected' : ''}>รอยืนยัน</option>
                    <option value="confirmed" ${appointment.status === 'confirmed' ? 'selected' : ''}>ยืนยันแล้ว</option>
                </select>
                <small style="color: #6b7280;">เปลี่ยนสถานะนัดหมาย</small>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">หมายเหตุ</label>
                <textarea id="editAppointmentNote" rows="3" placeholder="บันทึกเพิ่มเติม (ถ้ามี)" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); font-family: inherit;">${appointment.note || ''}</textarea>
            </div>
            <div id="editFormError" style="color: red; margin-bottom: 1rem; display: none;"></div>
            <div style="display: flex; gap: 1rem;">
                <button type="submit" class="btn btn-primary" style="flex: 1;">บันทึกการแก้ไข</button>
                <button type="button" class="btn" onclick="closeModal()" style="flex: 1;">ยกเลิก</button>
            </div>
        </form>
    `;

    modal.classList.add('active');

    // Form submit handler
    document.getElementById('editAppointmentForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const patientHN = document.getElementById('editAppointmentPatient').value;
        const doctorId = document.getElementById('editAppointmentDoctor').value;
        const date = document.getElementById('editAppointmentDate').value;
        const time = document.getElementById('editAppointmentTime').value;
        const status = document.getElementById('editAppointmentStatus').value;
        const note = document.getElementById('editAppointmentNote').value;

        // Validate future date/time
        const selectedDateTime = new Date(`${date}T${time}`);
        const currentTime = new Date();

        if (selectedDateTime < currentTime) {
            const errorDiv = document.getElementById('editFormError');
            errorDiv.textContent = 'ไม่สามารถนัดหมายในเวลาที่ผ่านไปแล้ว';
            errorDiv.style.display = 'block';
            return;
        }

        // Get patient and doctor names
        const patient = patients.find(p => p.hn === patientHN);
        const doctor = doctors.find(d => d.id == doctorId);

        // Update appointment object
        const updatedAppointment = {
            ...appointment,
            patientHN: patientHN,
            patientName: patient.name,
            doctorId: doctorId,
            doctorName: doctor.name,
            doctorSpecialty: doctor.specialty,
            date: date,
            time: time,
            status: status,
            note: note,
            updatedAt: new Date().toISOString()
        };

        // Update in storage
        const appointmentIndex = appointments.findIndex(a => a.id === appointmentId);
        appointments[appointmentIndex] = updatedAppointment;
        storage.set('appointments', appointments);

        // Close modal and reload
        closeModal();
        loadAppointments();
        loadDashboard();

        // Show success message
        alert('แก้ไขนัดหมายสำเร็จ!');
    });
}

/**
 * Show modal for adding new appointment
 * Displays form with patient, doctor, date, and time selection
 */
function showAddAppointmentModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    // Get patients and doctors for dropdown
    const patients = storage.get('patients') || [];
    const doctors = storage.get('doctors') || [];

    modalBody.innerHTML = `
        <h3>สร้างนัดหมายใหม่</h3>
        <form id="addAppointmentForm" style="margin-top: 1rem;">
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">เลือกผู้ป่วย <span style="color: red;">*</span></label>
                <select id="appointmentPatient" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="">-- เลือกผู้ป่วย --</option>
                    ${patients.map(p => `<option value="${p.hn}">${p.name} (HN: ${p.hn})</option>`).join('')}
                </select>
                ${patients.length === 0 ? '<small style="color: #ef4444;">ยังไม่มีผู้ป่วยในระบบ กรุณาเพิ่มผู้ป่วยก่อน</small>' : ''}
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">เลือกแพทย์ <span style="color: red;">*</span></label>
                <select id="appointmentDoctor" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="">-- เลือกแพทย์ --</option>
                    ${doctors.filter(d => d.status === 'active').map(d => `<option value="${d.id}">${d.name} (${d.specialty})</option>`).join('')}
                </select>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">วันที่นัดหมาย <span style="color: red;">*</span></label>
                <input type="date" id="appointmentDate" required min="${new Date().toISOString().split('T')[0]}" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                <small style="color: #6b7280;">เลือกวันที่ต้องการนัด</small>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">เวลานัดหมาย <span style="color: red;">*</span></label>
                <input type="time" id="appointmentTime" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                <small style="color: #6b7280;">เลือกเวลาที่ต้องการนัด</small>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem;">หมายเหตุ</label>
                <textarea id="appointmentNote" rows="3" placeholder="บันทึกเพิ่มเติม (ถ้ามี)" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); font-family: inherit;"></textarea>
            </div>
            <div id="formError" style="color: red; margin-bottom: 1rem; display: none;"></div>
            <button type="submit" class="btn btn-primary" style="width: 100%;" ${patients.length === 0 ? 'disabled' : ''}>บันทึกนัดหมาย</button>
        </form>
    `;

    modal.classList.add('active');

    // Form submit handler
    document.getElementById('addAppointmentForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const patientHN = document.getElementById('appointmentPatient').value;
        const doctorId = document.getElementById('appointmentDoctor').value;
        const date = document.getElementById('appointmentDate').value;
        const time = document.getElementById('appointmentTime').value;
        const note = document.getElementById('appointmentNote').value;

        // Get patient and doctor names
        const patient = patients.find(p => p.hn === patientHN);
        const doctor = doctors.find(d => d.id == doctorId);

        // Create appointment object
        const appointment = {
            id: Date.now(),
            patientHN: patientHN,
            patientName: patient.name,
            doctorId: doctorId,
            doctorName: doctor.name,
            doctorSpecialty: doctor.specialty,
            date: date,
            time: time,
            note: note,
            status: 'pending', // pending, confirmed, cancelled
            createdAt: new Date().toISOString()
        };

        // Save to storage
        const appointments = storage.get('appointments') || [];
        appointments.push(appointment);
        storage.set('appointments', appointments);

        // Close modal and reload appointments
        closeModal();
        loadAppointments();
        loadDashboard(); // Update dashboard stats

        // Show success message
        alert('สร้างนัดหมายสำเร็จ!');
    });
}

// Add appointment button event listener
document.getElementById('addAppointmentBtn')?.addEventListener('click', () => {
    showAddAppointmentModal();
});

// ===== Appointment Reminders Functions =====
/**
 * Get today's appointments
 * Returns all appointments scheduled for today that are not cancelled
 * @returns {Array} Array of today's appointments
 */
function getTodaysAppointments() {
    const appointments = storage.get('appointments') || [];
    const today = new Date();
    const todayStr = today.toISOString().split('T')[0]; // YYYY-MM-DD format

    return appointments.filter(appointment => {
        return appointment.date === todayStr && appointment.status !== 'cancelled';
    });
}

/**
 * Get upcoming appointments within specified days
 * Returns appointments scheduled within the next N days (excluding today)
 * @param {number} days - Number of days to look ahead (default: 3)
 * @returns {Array} Array of upcoming appointments
 */
function getUpcomingAppointments(days = 3) {
    const appointments = storage.get('appointments') || [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const futureDate = new Date(today);
    futureDate.setDate(futureDate.getDate() + days);

    return appointments.filter(appointment => {
        if (appointment.status === 'cancelled') return false;

        const appointmentDate = new Date(appointment.date);
        appointmentDate.setHours(0, 0, 0, 0);

        // Check if appointment is between tomorrow and future date
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        return appointmentDate >= tomorrow && appointmentDate <= futureDate;
    });
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
/**
 * Get status configuration with colors and Thai labels
 * @param {string} status - Room status code
 * @returns {Object} Status configuration object
 */
function getRoomStatusConfig(status) {
    const statusConfig = {
        available: {
            label: 'ว่าง',
            icon: '✅',
            bgColor: '#10b981',
            textColor: '#ffffff',
            borderColor: '#059669',
            cardBg: '#f0fdf4'
        },
        occupied: {
            label: 'มีผู้ป่วย',
            icon: '🛏️',
            bgColor: '#ef4444',
            textColor: '#ffffff',
            borderColor: '#dc2626',
            cardBg: '#fef2f2'
        },
        cleaning: {
            label: 'กำลังทำความสะอาด',
            icon: '🧹',
            bgColor: '#3b82f6',
            textColor: '#ffffff',
            borderColor: '#2563eb',
            cardBg: '#eff6ff'
        },
        dirty: {
            label: 'รอทำความสะอาด',
            icon: '⚠️',
            bgColor: '#f59e0b',
            textColor: '#ffffff',
            borderColor: '#d97706',
            cardBg: '#fffbeb'
        },
        maintenance: {
            label: 'ซ่อมบำรุง',
            icon: '🔧',
            bgColor: '#8b5cf6',
            textColor: '#ffffff',
            borderColor: '#7c3aed',
            cardBg: '#faf5ff'
        },
        reserved: {
            label: 'จองแล้ว',
            icon: '📋',
            bgColor: '#06b6d4',
            textColor: '#ffffff',
            borderColor: '#0891b2',
            cardBg: '#f0fdfa'
        },
        blocked: {
            label: 'ปิดใช้งาน',
            icon: '🚫',
            bgColor: '#64748b',
            textColor: '#ffffff',
            borderColor: '#475569',
            cardBg: '#f8fafc'
        }
    };
    return statusConfig[status] || statusConfig.available;
}

/**
 * Load and display all rooms in table format
 * Shows room data with color-coded status in easy-to-read table
 */
function loadRooms() {
    const rooms = storage.get('rooms') || [];
    const tbody = document.getElementById('roomsTableBody');
    const resultCount = document.getElementById('roomResultCount');

    if (rooms.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🏥</div>
                    <h3 style="margin: 0 0 0.5rem 0; color: #374151;">ยังไม่มีข้อมูลห้องพัก</h3>
                    <p style="margin: 0;">กรุณาเพิ่มข้อมูลห้องพักเข้าสู่ระบบหรือคลิกปุ่มรีเซ็ตข้อมูลห้อง</p>
                </td>
            </tr>
        `;
        resultCount.innerHTML = '';
        return;
    }

    // Sort rooms by floor and room number
    const sortedRooms = rooms.sort((a, b) => {
        if (a.floor !== b.floor) return a.floor - b.floor;
        return a.roomNumber.localeCompare(b.roomNumber);
    });

    tbody.innerHTML = sortedRooms.map(room => {
        const statusConfig = getRoomStatusConfig(room.status);
        const occupancyPercentage = room.capacity > 0 ? (room.currentOccupancy / room.capacity * 100) : 0;

        return `
            <tr>
                <!-- Status -->
                <td>
                    <div style="display: inline-block; padding: 0.375rem 0.75rem; background: ${statusConfig.bgColor}; color: white; border-radius: 12px; font-size: 0.75rem; font-weight: 600; white-space: nowrap;">
                        ${statusConfig.icon} ${statusConfig.label}
                    </div>
                </td>

                <!-- Room Number -->
                <td style="font-weight: 600; color: var(--primary-color); font-size: 1.1rem;">
                    ${room.roomNumber}
                </td>

                <!-- Type -->
                <td>${room.typeName}</td>

                <!-- Building -->
                <td>${room.building}</td>

                <!-- Floor -->
                <td style="text-align: center;">ชั้น ${room.floor}</td>

                <!-- Price -->
                <td style="font-weight: 600; color: #0369a1; white-space: nowrap;">
                    ${room.pricePerDay.toLocaleString()} ฿
                </td>

                <!-- Capacity -->
                <td style="text-align: center;">${room.capacity} เตียง</td>

                <!-- Occupancy -->
                <td>
                    <div style="min-width: 120px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem; font-size: 0.75rem;">
                            <span style="color: #6b7280;">${room.currentOccupancy}/${room.capacity}</span>
                            <span style="color: #6b7280; font-weight: 600;">${occupancyPercentage.toFixed(0)}%</span>
                        </div>
                        <div style="background-color: #e5e7eb; height: 6px; border-radius: 3px; overflow: hidden;">
                            <div style="background: ${statusConfig.bgColor}; height: 100%; width: ${occupancyPercentage}%; transition: width 0.3s ease;"></div>
                        </div>
                    </div>
                </td>

                <!-- Actions -->
                <td>
                    <div style="display: flex; gap: 0.25rem; flex-wrap: nowrap;">
                        <button class="btn btn-secondary" onclick="viewRoomDetails('${room.id}')"
                                style="padding: 0.4rem 0.8rem; font-size: 0.875rem; white-space: nowrap;">
                            ดู
                        </button>
                        <button class="btn btn-primary" onclick="editRoom('${room.id}')"
                                style="padding: 0.4rem 0.8rem; font-size: 0.875rem; white-space: nowrap;">
                            จัดการ
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    // Display result count
    updateRoomResultCount(rooms.length, rooms.length);
}

/**
 * View comprehensive room details in modal
 * @param {string} roomId - Room ID
 */
function viewRoomDetails(roomId) {
    const rooms = storage.get('rooms') || [];
    const room = rooms.find(r => r.id === roomId);

    if (!room) {
        alert('ไม่พบข้อมูลห้องพัก');
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const statusConfig = getRoomStatusConfig(room.status);
    const occupancyPercentage = room.capacity > 0 ? (room.currentOccupancy / room.capacity * 100) : 0;

    modalBody.innerHTML = `
        <h3 style="margin-bottom: 1.5rem;">รายละเอียดห้องพัก ${room.roomNumber}</h3>

        <!-- Status Badge -->
        <div style="display: inline-block; padding: 0.5rem 1rem; background: linear-gradient(135deg, ${statusConfig.bgColor} 0%, ${statusConfig.borderColor} 100%); color: white; border-radius: 20px; margin-bottom: 1.5rem;">
            <span style="font-size: 1.25rem; margin-right: 0.5rem;">${statusConfig.icon}</span>
            <span style="font-weight: 600;">${statusConfig.label}</span>
        </div>

        <!-- Basic Information -->
        <div style="background-color: #f9fafb; padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <h4 style="margin: 0 0 1rem 0; color: var(--primary-color);">ข้อมูลทั่วไป</h4>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                <div>
                    <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">🚪 หมายเลขห้อง</p>
                    <p style="margin: 0.25rem 0 0 0; font-weight: 600; font-size: 1.125rem; color: #374151;">${room.roomNumber}</p>
                </div>
                <div>
                    <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">🏷️ ประเภทห้อง</p>
                    <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151;">${room.typeName}</p>
                </div>
                <div>
                    <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">🏢 อาคาร</p>
                    <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151;">${room.building}</p>
                </div>
                <div>
                    <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">📍 ชั้น</p>
                    <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151;">ชั้น ${room.floor}</p>
                </div>
            </div>
        </div>

        <!-- Pricing & Capacity -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
            <!-- Pricing Card -->
            <div style="background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); padding: 1.25rem; border-radius: 8px; border: 2px solid #3b82f6;">
                <p style="margin: 0; color: #1e40af; font-size: 0.875rem; font-weight: 600;">💰 ราคาห้องพัก</p>
                <p style="margin: 0.5rem 0 0 0; color: #1e3a8a; font-size: 2rem; font-weight: 700;">
                    ${room.pricePerDay.toLocaleString()} ฿
                </p>
                <p style="margin: 0.25rem 0 0 0; color: #1e40af; font-size: 0.75rem;">ต่อวัน (รวม VAT 7%)</p>
            </div>

            <!-- Capacity Card -->
            <div style="background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%); padding: 1.25rem; border-radius: 8px; border: 2px solid #10b981;">
                <p style="margin: 0; color: #065f46; font-size: 0.875rem; font-weight: 600;">👥 ความจุห้อง</p>
                <p style="margin: 0.5rem 0 0 0; color: #064e3b; font-size: 2rem; font-weight: 700;">
                    ${room.capacity} เตียง
                </p>
                <p style="margin: 0.25rem 0 0 0; color: #065f46; font-size: 0.75rem;">
                    ปัจจุบัน: ${room.currentOccupancy} เตียง (${occupancyPercentage.toFixed(0)}%)
                </p>
            </div>
        </div>

        <!-- Occupancy Progress -->
        <div style="background-color: #f9fafb; padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                <h4 style="margin: 0; color: var(--primary-color);">การใช้งานห้อง</h4>
                <span style="color: #374151; font-weight: 700; font-size: 1.125rem;">
                    ${room.currentOccupancy} / ${room.capacity}
                </span>
            </div>
            <div style="background-color: #e5e7eb; height: 20px; border-radius: 10px; overflow: hidden; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
                <div style="background: linear-gradient(90deg, ${statusConfig.bgColor} 0%, ${statusConfig.borderColor} 100%); height: 100%; width: ${occupancyPercentage}%; transition: width 0.5s ease; display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 0.75rem;">
                    ${occupancyPercentage > 15 ? occupancyPercentage.toFixed(0) + '%' : ''}
                </div>
            </div>
        </div>

        <!-- Amenities -->
        <div style="background-color: #f9fafb; padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem;">
            <h4 style="margin: 0 0 1rem 0; color: var(--primary-color);">🛏️ สิ่งอำนวยความสะดวก</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 0.75rem;">
                ${room.amenities.map(amenity => `
                    <div style="background-color: white; padding: 0.75rem; border-radius: 6px; border: 1px solid #e5e7eb; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="color: var(--primary-color); font-size: 1.25rem;">✓</span>
                        <span style="color: #374151; font-size: 0.875rem;">${amenity}</span>
                    </div>
                `).join('')}
            </div>
            <p style="margin: 1rem 0 0 0; color: #6b7280; font-size: 0.875rem; font-style: italic;">
                รวม ${room.amenities.length} รายการ
            </p>
        </div>

        <!-- Cleaning Info -->
        <div style="background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem; border: 2px solid #f59e0b;">
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
                <span style="font-size: 2rem;">🧹</span>
                <div style="flex: 1;">
                    <h4 style="margin: 0; color: #92400e;">ข้อมูลการทำความสะอาด</h4>
                    <p style="margin: 0.25rem 0 0 0; color: #78350f; font-size: 0.875rem;">ทำความสะอาดล่าสุด</p>
                </div>
            </div>
            <p style="margin: 0; color: #78350f; font-weight: 600; font-size: 1.125rem;">
                ${new Date(room.lastCleaned).toLocaleString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                })}
            </p>
            <p style="margin: 0.5rem 0 0 0; color: #92400e; font-size: 0.75rem;">
                ${(() => {
                    const hoursSince = Math.floor((Date.now() - new Date(room.lastCleaned).getTime()) / 3600000);
                    if (hoursSince < 1) return 'ทำความสะอาดไปแล้วไม่ถึง 1 ชั่วโมง';
                    if (hoursSince < 24) return `ทำความสะอาดไปแล้ว ${hoursSince} ชั่วโมง`;
                    return `ทำความสะอาดไปแล้ว ${Math.floor(hoursSince / 24)} วัน`;
                })()}
            </p>
        </div>

        <!-- Notes -->
        ${room.notes ? `
            <div style="background-color: #fef2f2; padding: 1.25rem; border-radius: 8px; margin-bottom: 1.5rem; border-left: 4px solid #ef4444;">
                <h4 style="margin: 0 0 0.75rem 0; color: #991b1b;">📝 หมายเหตุ</h4>
                <p style="margin: 0; color: #7f1d1d; line-height: 1.6;">${room.notes}</p>
            </div>
        ` : `
            <div style="background-color: #f9fafb; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem; text-align: center;">
                <p style="margin: 0; color: #9ca3af; font-size: 0.875rem; font-style: italic;">ไม่มีหมายเหตุ</p>
            </div>
        `}

        <!-- Room Summary -->
        <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); padding: 1.25rem; border-radius: 8px; border: 2px solid #3b82f6;">
            <h4 style="margin: 0 0 1rem 0; color: #1e40af;">📊 สรุปข้อมูลห้อง</h4>
            <ul style="margin: 0; padding-left: 1.5rem; color: #1e3a8a; line-height: 2;">
                <li>ห้องพักประเภท <strong>${room.typeName}</strong> ราคา <strong>${room.pricePerDay.toLocaleString()} บาท/วัน</strong></li>
                <li>ตั้งอยู่ที่ <strong>${room.building}</strong> ชั้น <strong>${room.floor}</strong></li>
                <li>ความจุ <strong>${room.capacity} เตียง</strong> ปัจจุบันใช้งาน <strong>${room.currentOccupancy} เตียง</strong></li>
                <li>สถานะ: <strong style="color: ${statusConfig.bgColor}">${statusConfig.label}</strong></li>
                <li>สิ่งอำนวยความสะดวก <strong>${room.amenities.length} รายการ</strong></li>
            </ul>
        </div>
    `;

    modal.classList.add('active');
}

/**
 * Edit room information (placeholder)
 * @param {string} roomId - Room ID
 */
function editRoom(roomId) {
    alert('ฟีเจอร์แก้ไขห้องจะพัฒนาในขั้นตอนถัดไป');
    // TODO: Implement room editing
}

/**
 * Reset room data to default sample data
 * Useful when localStorage has old room data structure
 */
function resetRoomData() {
    const confirmed = confirm(
        'คุณต้องการรีเซ็ตข้อมูลห้องพักใช่หรือไม่?\n\n' +
        'ข้อมูลห้องพักปัจจุบันจะถูกลบและแทนที่ด้วยข้อมูลตัวอย่างใหม่\n' +
        '(ข้อมูลผู้ป่วยและนัดหมายจะไม่ได้รับผลกระทบ)'
    );

    if (!confirmed) {
        return;
    }

    // Remove old room data
    localStorage.removeItem('rooms');

    // Re-initialize with new room data
    storage.set('rooms', [
        // Floor 1 - Ward Rooms (ห้องรวม)
        {
            id: '101A',
            roomNumber: '101A',
            type: 'ward',
            typeName: 'ห้องรวม (Ward)',
            status: 'available',
            floor: 1,
            building: 'อาคารผู้ป่วยใน 1',
            capacity: 6,
            currentOccupancy: 0,
            pricePerDay: 1500,
            amenities: ['เตียงปรับระดับ', 'พัดลม', 'ห้องน้ำรวม', 'ตู้เก็บของส่วนตัว'],
            lastCleaned: new Date().toISOString(),
            notes: ''
        },
        {
            id: '101B',
            roomNumber: '101B',
            type: 'ward',
            typeName: 'ห้องรวม (Ward)',
            status: 'occupied',
            floor: 1,
            building: 'อาคารผู้ป่วยใน 1',
            capacity: 6,
            currentOccupancy: 4,
            pricePerDay: 1500,
            amenities: ['เตียงปรับระดับ', 'พัดลม', 'ห้องน้ำรวม', 'ตู้เก็บของส่วนตัว'],
            lastCleaned: new Date(Date.now() - 3600000).toISOString(),
            notes: 'มีผู้ป่วย 4 คน'
        },

        // Floor 2 - Semi-Private Rooms (ห้อง 2 เตียง)
        {
            id: '201',
            roomNumber: '201',
            type: 'semi-private',
            typeName: 'ห้อง 2 เตียง (Semi-Private)',
            status: 'available',
            floor: 2,
            building: 'อาคารผู้ป่วยใน 1',
            capacity: 2,
            currentOccupancy: 0,
            pricePerDay: 3500,
            amenities: ['เตียงไฟฟ้า', 'แอร์', 'TV', 'ห้องน้ำในตัว', 'ตู้เย็นเล็ก', 'โซฟาญาติ'],
            lastCleaned: new Date().toISOString(),
            notes: ''
        },
        {
            id: '202',
            roomNumber: '202',
            type: 'semi-private',
            typeName: 'ห้อง 2 เตียง (Semi-Private)',
            status: 'cleaning',
            floor: 2,
            building: 'อาคารผู้ป่วยใน 1',
            capacity: 2,
            currentOccupancy: 0,
            pricePerDay: 3500,
            amenities: ['เตียงไฟฟ้า', 'แอร์', 'TV', 'ห้องน้ำในตัว', 'ตู้เย็นเล็ก', 'โซฟาญาติ'],
            lastCleaned: new Date(Date.now() - 1800000).toISOString(),
            notes: 'กำลังทำความสะอาด'
        },

        // Floor 3 - Private Rooms (ห้องเดี่ยว)
        {
            id: '301',
            roomNumber: '301',
            type: 'private',
            typeName: 'ห้องเดี่ยว (Private)',
            status: 'occupied',
            floor: 3,
            building: 'อาคารผู้ป่วยใน 1',
            capacity: 1,
            currentOccupancy: 1,
            pricePerDay: 5000,
            amenities: ['เตียงไฟฟ้า', 'แอร์', 'TV 32"', 'ห้องน้ำในตัว', 'ตู้เย็น', 'โซฟา', 'โต๊ะทำงาน', 'WiFi'],
            lastCleaned: new Date(Date.now() - 7200000).toISOString(),
            notes: 'ผู้ป่วยหลังผ่าตัด'
        },
        {
            id: '302',
            roomNumber: '302',
            type: 'private',
            typeName: 'ห้องเดี่ยว (Private)',
            status: 'available',
            floor: 3,
            building: 'อาคารผู้ป่วยใน 1',
            capacity: 1,
            currentOccupancy: 0,
            pricePerDay: 5000,
            amenities: ['เตียงไฟฟ้า', 'แอร์', 'TV 32"', 'ห้องน้ำในตัว', 'ตู้เย็น', 'โซฟา', 'โต๊ะทำงาน', 'WiFi'],
            lastCleaned: new Date().toISOString(),
            notes: ''
        },

        // Floor 4 - VIP Rooms
        {
            id: '401',
            roomNumber: '401',
            type: 'vip',
            typeName: 'ห้อง VIP',
            status: 'reserved',
            floor: 4,
            building: 'อาคารผู้ป่วยใน 2',
            capacity: 1,
            currentOccupancy: 0,
            pricePerDay: 12000,
            amenities: ['เตียงไฟฟ้าพิเศษ', 'แอร์ 2 ตัว', 'Smart TV 43"', 'ห้องน้ำหรู', 'ตู้เย็น', 'โซฟาเบด', 'โต๊ะทำงาน', 'WiFi', 'ตู้นิรภัย', 'กาแฟเครื่อง'],
            lastCleaned: new Date().toISOString(),
            notes: 'จองไว้สำหรับผู้ป่วยพรุ่งนี้'
        },
        {
            id: '402',
            roomNumber: '402',
            type: 'vip',
            typeName: 'ห้อง VIP',
            status: 'maintenance',
            floor: 4,
            building: 'อาคารผู้ป่วยใน 2',
            capacity: 1,
            currentOccupancy: 0,
            pricePerDay: 12000,
            amenities: ['เตียงไฟฟ้าพิเศษ', 'แอร์ 2 ตัว', 'Smart TV 43"', 'ห้องน้ำหรู', 'ตู้เย็น', 'โซฟาเบด', 'โต๊ะทำงาน', 'WiFi', 'ตู้นิรภัย', 'กาแฟเครื่อง'],
            lastCleaned: new Date(Date.now() - 86400000).toISOString(),
            notes: 'ซ่อมแอร์'
        },

        // Floor 5 - Suite Rooms
        {
            id: '501',
            roomNumber: '501',
            type: 'suite',
            typeName: 'ห้องสวีท (Suite)',
            status: 'available',
            floor: 5,
            building: 'อาคารผู้ป่วยใน 2',
            capacity: 1,
            currentOccupancy: 0,
            pricePerDay: 25000,
            amenities: ['เตียงพิเศษ', 'ห้องนอนแยก', 'ห้องรับแขก', 'แอร์ 3 ตัว', 'Smart TV 55"', 'ห้องน้ำหรูพร้อมอ่างอาบน้ำ', 'ตู้เย็น', 'โซฟาเซ็ท', 'โต๊ะทำงาน', 'WiFi', 'ตู้นิรภัย', 'เครื่องชงกาแฟ', 'ห้องครัวเล็ก', 'ระเบียง'],
            lastCleaned: new Date().toISOString(),
            notes: 'ห้องพิเศษสุด พร้อมบริการ'
        },
        {
            id: '502',
            roomNumber: '502',
            type: 'suite',
            typeName: 'ห้องสวีท (Suite)',
            status: 'occupied',
            floor: 5,
            building: 'อาคารผู้ป่วยใน 2',
            capacity: 1,
            currentOccupancy: 1,
            pricePerDay: 25000,
            amenities: ['เตียงพิเศษ', 'ห้องนอนแยก', 'ห้องรับแขก', 'แอร์ 3 ตัว', 'Smart TV 55"', 'ห้องน้ำหรูพร้อมอ่างอาบน้ำ', 'ตู้เย็น', 'โซฟาเซ็ท', 'โต๊ะทำงาน', 'WiFi', 'ตู้นิรภัย', 'เครื่องชงกาแฟ', 'ห้องครัวเล็ก', 'ระเบียง'],
            lastCleaned: new Date(Date.now() - 10800000).toISOString(),
            notes: 'VIP ระดับสูง'
        }
    ]);

    // Reload the rooms display
    loadRooms();
    loadDashboard();

    alert('รีเซ็ตข้อมูลห้องพักสำเร็จ! ✅\n\nโหลดข้อมูลห้องพักตัวอย่าง 10 ห้องแล้ว');
}

// ===== Room Search and Filter Functions =====
/**
 * Update room result count display
 * @param {number} showing - Number of results currently displayed
 * @param {number} total - Total number of rooms
 */
function updateRoomResultCount(showing, total) {
    const resultCount = document.getElementById('roomResultCount');
    if (resultCount) {
        if (showing === total) {
            resultCount.innerHTML = `<strong>แสดง ${showing} ห้อง</strong> จากทั้งหมด ${total} ห้อง`;
        } else {
            resultCount.innerHTML = `<strong>พบ ${showing} ห้อง</strong> จากทั้งหมด ${total} ห้อง`;
        }
    }
}

/**
 * Search and filter rooms by query, status, type, and floor
 * @param {string} query - Search query (room number or building)
 * @param {string} statusFilter - Status filter value
 * @param {string} typeFilter - Type filter value
 * @param {string} floorFilter - Floor filter value
 */
function searchAndFilterRooms(query = '', statusFilter = '', typeFilter = '', floorFilter = '') {
    const rooms = storage.get('rooms') || [];
    const tbody = document.getElementById('roomsTableBody');
    const totalRooms = rooms.length;

    if (rooms.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🏥</div>
                    <h3 style="margin: 0 0 0.5rem 0; color: #374151;">ยังไม่มีข้อมูลห้องพัก</h3>
                    <p style="margin: 0;">กรุณาเพิ่มข้อมูลห้องพักเข้าสู่ระบบหรือคลิกปุ่มรีเซ็ตข้อมูลห้อง</p>
                </td>
            </tr>
        `;
        updateRoomResultCount(0, 0);
        return;
    }

    // Filter rooms
    let filtered = rooms;

    // Filter by search query
    if (query) {
        filtered = filtered.filter(room =>
            room.roomNumber.toLowerCase().includes(query.toLowerCase()) ||
            room.building.toLowerCase().includes(query.toLowerCase()) ||
            room.typeName.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Filter by status
    if (statusFilter) {
        filtered = filtered.filter(room => room.status === statusFilter);
    }

    // Filter by type
    if (typeFilter) {
        filtered = filtered.filter(room => room.type === typeFilter);
    }

    // Filter by floor
    if (floorFilter) {
        filtered = filtered.filter(room => room.floor === parseInt(floorFilter));
    }

    // Display results
    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="9" style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                    <h3 style="margin: 0 0 0.5rem 0; color: #374151;">ไม่พบห้องพักที่ค้นหา</h3>
                    <p style="margin: 0;">ลองปรับเปลี่ยนคำค้นหาหรือตัวกรองของคุณ</p>
                    <button onclick="clearRoomFilters()" class="btn btn-secondary" style="margin-top: 1rem;">ล้างตัวกรอง</button>
                </td>
            </tr>
        `;
        updateRoomResultCount(0, totalRooms);
        return;
    }

    // Sort filtered rooms
    const sortedRooms = filtered.sort((a, b) => {
        if (a.floor !== b.floor) return a.floor - b.floor;
        return a.roomNumber.localeCompare(b.roomNumber);
    });

    // Display room rows
    tbody.innerHTML = sortedRooms.map(room => {
        const statusConfig = getRoomStatusConfig(room.status);
        const occupancyPercentage = room.capacity > 0 ? (room.currentOccupancy / room.capacity * 100) : 0;

        return `
            <tr>
                <!-- Status -->
                <td>
                    <div style="display: inline-block; padding: 0.375rem 0.75rem; background: ${statusConfig.bgColor}; color: white; border-radius: 12px; font-size: 0.75rem; font-weight: 600; white-space: nowrap;">
                        ${statusConfig.icon} ${statusConfig.label}
                    </div>
                </td>

                <!-- Room Number -->
                <td style="font-weight: 600; color: var(--primary-color); font-size: 1.1rem;">
                    ${room.roomNumber}
                </td>

                <!-- Type -->
                <td>${room.typeName}</td>

                <!-- Building -->
                <td>${room.building}</td>

                <!-- Floor -->
                <td style="text-align: center;">ชั้น ${room.floor}</td>

                <!-- Price -->
                <td style="font-weight: 600; color: #0369a1; white-space: nowrap;">
                    ${room.pricePerDay.toLocaleString()} ฿
                </td>

                <!-- Capacity -->
                <td style="text-align: center;">${room.capacity} เตียง</td>

                <!-- Occupancy -->
                <td>
                    <div style="min-width: 120px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem; font-size: 0.75rem;">
                            <span style="color: #6b7280;">${room.currentOccupancy}/${room.capacity}</span>
                            <span style="color: #6b7280; font-weight: 600;">${occupancyPercentage.toFixed(0)}%</span>
                        </div>
                        <div style="background-color: #e5e7eb; height: 6px; border-radius: 3px; overflow: hidden;">
                            <div style="background: ${statusConfig.bgColor}; height: 100%; width: ${occupancyPercentage}%; transition: width 0.3s ease;"></div>
                        </div>
                    </div>
                </td>

                <!-- Actions -->
                <td>
                    <div style="display: flex; gap: 0.25rem; flex-wrap: nowrap;">
                        <button class="btn btn-secondary" onclick="viewRoomDetails('${room.id}')"
                                style="padding: 0.4rem 0.8rem; font-size: 0.875rem; white-space: nowrap;">
                            ดู
                        </button>
                        <button class="btn btn-primary" onclick="editRoom('${room.id}')"
                                style="padding: 0.4rem 0.8rem; font-size: 0.875rem; white-space: nowrap;">
                            จัดการ
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');

    updateRoomResultCount(filtered.length, totalRooms);
}

/**
 * Apply current room search and filter settings
 */
function applyRoomFilters() {
    const searchQuery = document.getElementById('roomSearch')?.value || '';
    const statusFilter = document.getElementById('roomStatusFilter')?.value || '';
    const typeFilter = document.getElementById('roomTypeFilter')?.value || '';
    const floorFilter = document.getElementById('roomFloorFilter')?.value || '';
    searchAndFilterRooms(searchQuery, statusFilter, typeFilter, floorFilter);
}

/**
 * Clear all room filters and show all rooms
 */
function clearRoomFilters() {
    const searchBox = document.getElementById('roomSearch');
    const statusFilter = document.getElementById('roomStatusFilter');
    const typeFilter = document.getElementById('roomTypeFilter');
    const floorFilter = document.getElementById('roomFloorFilter');

    if (searchBox) searchBox.value = '';
    if (statusFilter) statusFilter.value = '';
    if (typeFilter) typeFilter.value = '';
    if (floorFilter) floorFilter.value = '';

    loadRooms();
}

// Add event listeners for room search and filters
const roomSearchBox = document.getElementById('roomSearch');
if (roomSearchBox) {
    roomSearchBox.addEventListener('input', applyRoomFilters);
}

const roomStatusFilter = document.getElementById('roomStatusFilter');
if (roomStatusFilter) {
    roomStatusFilter.addEventListener('change', applyRoomFilters);
}

const roomTypeFilter = document.getElementById('roomTypeFilter');
if (roomTypeFilter) {
    roomTypeFilter.addEventListener('change', applyRoomFilters);
}

const roomFloorFilter = document.getElementById('roomFloorFilter');
if (roomFloorFilter) {
    roomFloorFilter.addEventListener('change', applyRoomFilters);
}

const clearRoomFilterBtn = document.getElementById('clearRoomFilterBtn');
if (clearRoomFilterBtn) {
    clearRoomFilterBtn.addEventListener('click', clearRoomFilters);
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

// ===== Search and Filter Functions =====
/**
 * Update result count display
 * @param {number} showing - Number of results currently displayed
 * @param {number} total - Total number of patients
 */
function updateResultCount(showing, total) {
    const resultCount = document.getElementById('patientResultCount');
    if (resultCount) {
        if (showing === total) {
            resultCount.innerHTML = `<strong>แสดง ${showing} รายการ</strong> จากทั้งหมด ${total} รายการ`;
        } else {
            resultCount.innerHTML = `<strong>พบ ${showing} รายการ</strong> จากทั้งหมด ${total} รายการ`;
        }
    }
}

/**
 * Search and filter patients by query and age range
 * @param {string} query - Search query (name, HN, or phone)
 * @param {number|null} minAge - Minimum age filter
 * @param {number|null} maxAge - Maximum age filter
 */
function searchAndFilterPatients(query = '', minAge = null, maxAge = null) {
    const patients = storage.get('patients') || [];
    const tbody = document.getElementById('patientsTableBody');
    const totalPatients = patients.length;

    if (patients.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="no-data">ยังไม่มีข้อมูลผู้ป่วย</td></tr>';
        updateResultCount(0, 0);
        return;
    }

    // Filter by search query
    let filtered = patients;
    if (query) {
        filtered = filtered.filter(patient =>
            patient.name.toLowerCase().includes(query.toLowerCase()) ||
            patient.hn.toLowerCase().includes(query.toLowerCase()) ||
            patient.phone.includes(query)
        );
    }

    // Filter by age range
    if (minAge !== null && minAge !== '') {
        filtered = filtered.filter(patient => parseInt(patient.age) >= parseInt(minAge));
    }
    if (maxAge !== null && maxAge !== '') {
        filtered = filtered.filter(patient => parseInt(patient.age) <= parseInt(maxAge));
    }

    // Display results
    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
                    <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
                    <h3 style="margin: 0 0 0.5rem 0; color: #374151;">ไม่พบข้อมูลผู้ป่วยที่ค้นหา</h3>
                    <p style="margin: 0;">ลองค้นหาด้วยชื่อ, HN หรือเบอร์โทรอื่น</p>
                </td>
            </tr>
        `;
        updateResultCount(0, totalPatients);
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
                <button class="btn btn-secondary" onclick="viewPatient('${patient.hn}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem; margin-right: 0.25rem;">ดู</button>
                <button class="btn btn-primary" onclick="editPatient('${patient.hn}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem; margin-right: 0.25rem;">แก้ไข</button>
                <button class="btn" onclick="deletePatient('${patient.hn}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem; background-color: #ef4444; color: white;">ลบ</button>
            </td>
        </tr>
    `).join('');

    updateResultCount(filtered.length, totalPatients);
}

/**
 * Apply current search and filter settings
 */
function applyFilters() {
    const searchQuery = document.getElementById('patientSearch')?.value || '';
    const minAge = document.getElementById('minAge')?.value || null;
    const maxAge = document.getElementById('maxAge')?.value || null;
    searchAndFilterPatients(searchQuery, minAge, maxAge);
}

/**
 * Clear all filters and show all patients
 */
function clearFilters() {
    const searchBox = document.getElementById('patientSearch');
    const minAgeInput = document.getElementById('minAge');
    const maxAgeInput = document.getElementById('maxAge');

    if (searchBox) searchBox.value = '';
    if (minAgeInput) minAgeInput.value = '';
    if (maxAgeInput) maxAgeInput.value = '';

    loadPatients();
}

// Add event listener for search box
const searchBox = document.getElementById('patientSearch');
if (searchBox) {
    searchBox.addEventListener('input', applyFilters);
}

// Add event listeners for age filter inputs
const minAgeInput = document.getElementById('minAge');
const maxAgeInput = document.getElementById('maxAge');
if (minAgeInput) {
    minAgeInput.addEventListener('input', applyFilters);
}
if (maxAgeInput) {
    maxAgeInput.addEventListener('input', applyFilters);
}

// Add event listener for clear filter button
const clearFilterBtn = document.getElementById('clearFilterBtn');
if (clearFilterBtn) {
    clearFilterBtn.addEventListener('click', clearFilters);
}

// ===== Appointment Search and Filter Functions =====
/**
 * Update appointment result count display
 * @param {number} showing - Number of results currently displayed
 * @param {number} total - Total number of appointments
 */
function updateAppointmentResultCount(showing, total) {
    const resultCount = document.getElementById('appointmentResultCount');
    if (resultCount) {
        if (showing === total) {
            resultCount.innerHTML = `<strong>แสดง ${showing} รายการ</strong> จากทั้งหมด ${total} รายการ`;
        } else {
            resultCount.innerHTML = `<strong>พบ ${showing} รายการ</strong> จากทั้งหมด ${total} รายการ`;
        }
    }
}

/**
 * Search and filter appointments by query, status, and time
 * @param {string} query - Search query (patient name, HN, or doctor name)
 * @param {string} statusFilter - Status filter (pending, confirmed, cancelled, or empty for all)
 * @param {string} timeFilter - Time filter (upcoming, past, or empty for all)
 */
function searchAndFilterAppointments(query = '', statusFilter = '', timeFilter = '') {
    const appointments = storage.get('appointments') || [];
    const list = document.getElementById('appointmentsList');
    const totalAppointments = appointments.length;

    if (appointments.length === 0) {
        list.innerHTML = '<p class="no-data">ยังไม่มีนัดหมาย</p>';
        updateAppointmentResultCount(0, 0);
        return;
    }

    const now = new Date();

    // Filter appointments
    let filtered = appointments;

    // Filter by search query
    if (query) {
        filtered = filtered.filter(apt =>
            apt.patientName.toLowerCase().includes(query.toLowerCase()) ||
            apt.patientHN.toLowerCase().includes(query.toLowerCase()) ||
            apt.doctorName.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Filter by status
    if (statusFilter) {
        filtered = filtered.filter(apt => apt.status === statusFilter);
    }

    // Filter by time (upcoming/past)
    if (timeFilter === 'upcoming') {
        filtered = filtered.filter(apt => {
            const appointmentDateTime = new Date(`${apt.date}T${apt.time}`);
            return appointmentDateTime >= now;
        });
    } else if (timeFilter === 'past') {
        filtered = filtered.filter(apt => {
            const appointmentDateTime = new Date(`${apt.date}T${apt.time}`);
            return appointmentDateTime < now;
        });
    }

    // Display results
    if (filtered.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; padding: 3rem 1rem; color: #6b7280;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
                <h3 style="margin: 0 0 0.5rem 0; color: #374151;">ไม่พบนัดหมายที่ค้นหา</h3>
                <p style="margin: 0;">ลองปรับเปลี่ยนคำค้นหาหรือตัวกรองของคุณ</p>
                <button onclick="clearAppointmentFilters()" class="btn btn-secondary" style="margin-top: 1rem;">ล้างตัวกรอง</button>
            </div>
        `;
        updateAppointmentResultCount(0, totalAppointments);
        return;
    }

    // Sort filtered appointments
    const sortedAppointments = filtered.sort((a, b) => {
        const dateTimeA = new Date(`${a.date}T${a.time}`);
        const dateTimeB = new Date(`${b.date}T${b.time}`);
        return dateTimeB - dateTimeA;
    });

    list.innerHTML = sortedAppointments.map(apt => {
        const appointmentDateTime = new Date(`${apt.date}T${apt.time}`);
        const isPast = appointmentDateTime < now;

        let statusColor, statusText, cardBgColor, cardBorderColor;

        if (isPast) {
            cardBgColor = '#f3f4f6';
            cardBorderColor = '#9ca3af';
            statusColor = '#6b7280';
            statusText = 'ผ่านไปแล้ว';
        } else {
            cardBgColor = '#f0f9ff';
            cardBorderColor = '#3b82f6';
            statusColor = '#10b981';
            statusText = 'กำลังจะถึง';
        }

        let statusBadgeColor, statusBadgeText;
        switch(apt.status) {
            case 'confirmed':
                statusBadgeColor = '#10b981';
                statusBadgeText = 'ยืนยันแล้ว';
                break;
            case 'cancelled':
                statusBadgeColor = '#ef4444';
                statusBadgeText = 'ยกเลิกแล้ว';
                break;
            case 'pending':
            default:
                statusBadgeColor = '#f59e0b';
                statusBadgeText = 'รอยืนยัน';
        }

        const dateObj = new Date(apt.date);
        const thaiDate = dateObj.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        });

        return `
            <div style="padding: 1.25rem; background-color: ${cardBgColor}; border-left: 4px solid ${cardBorderColor}; border-radius: var(--border-radius); margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                    <div>
                        <h4 style="margin: 0 0 0.25rem 0; color: var(--primary-color); font-size: 1.1rem;">
                            ${apt.patientName}
                        </h4>
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">HN: ${apt.patientHN}</p>
                    </div>
                    <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                        <span style="padding: 0.25rem 0.75rem; background-color: ${statusBadgeColor}; color: white; border-radius: 12px; font-size: 0.75rem; font-weight: 500;">
                            ${statusBadgeText}
                        </span>
                        <span style="padding: 0.25rem 0.75rem; background-color: ${isPast ? '#9ca3af' : '#3b82f6'}; color: white; border-radius: 12px; font-size: 0.75rem; font-weight: 500;">
                            ${statusText}
                        </span>
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.75rem; margin-bottom: 0.75rem;">
                    <div>
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">👨‍⚕️ แพทย์</p>
                        <p style="margin: 0.25rem 0 0 0; font-weight: 500;">${apt.doctorName}</p>
                        <p style="margin: 0; color: #6b7280; font-size: 0.75rem;">${apt.doctorSpecialty}</p>
                    </div>
                    <div>
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">📅 วันที่</p>
                        <p style="margin: 0.25rem 0 0 0; font-weight: 500;">${thaiDate}</p>
                        <p style="margin: 0; color: #6b7280; font-size: 0.75rem;">เวลา ${apt.time} น.</p>
                    </div>
                </div>

                ${apt.note ? `
                    <div style="padding: 0.75rem; background-color: white; border-radius: 6px; margin-top: 0.75rem;">
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">📝 หมายเหตุ</p>
                        <p style="margin: 0.25rem 0 0 0; color: #374151;">${apt.note}</p>
                    </div>
                ` : ''}

                <div style="margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid ${isPast ? '#d1d5db' : '#bfdbfe'}; display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button class="btn btn-secondary" onclick="viewAppointmentDetails('${apt.id}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem;">
                        ดูรายละเอียด
                    </button>
                    ${!isPast && apt.status !== 'cancelled' ? `
                        ${apt.status === 'pending' ? `
                            <button class="btn" onclick="confirmAppointment('${apt.id}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem; background-color: #10b981; color: white;">
                                ยืนยันนัดหมาย
                            </button>
                        ` : ''}
                        <button class="btn btn-primary" onclick="editAppointment('${apt.id}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem;">
                            แก้ไข
                        </button>
                        <button class="btn" onclick="cancelAppointment('${apt.id}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem; background-color: #ef4444; color: white;">
                            ยกเลิก
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');

    updateAppointmentResultCount(filtered.length, totalAppointments);
}

/**
 * Apply current appointment search and filter settings
 */
function applyAppointmentFilters() {
    const searchQuery = document.getElementById('appointmentSearch')?.value || '';
    const statusFilter = document.getElementById('appointmentStatusFilter')?.value || '';
    const timeFilter = document.getElementById('appointmentTimeFilter')?.value || '';
    searchAndFilterAppointments(searchQuery, statusFilter, timeFilter);
}

/**
 * Clear all appointment filters and show all appointments
 */
function clearAppointmentFilters() {
    const searchBox = document.getElementById('appointmentSearch');
    const statusFilter = document.getElementById('appointmentStatusFilter');
    const timeFilter = document.getElementById('appointmentTimeFilter');

    if (searchBox) searchBox.value = '';
    if (statusFilter) statusFilter.value = '';
    if (timeFilter) timeFilter.value = '';

    loadAppointments();
}

// Add event listeners for appointment search and filters
const appointmentSearchBox = document.getElementById('appointmentSearch');
if (appointmentSearchBox) {
    appointmentSearchBox.addEventListener('input', applyAppointmentFilters);
}

const appointmentStatusFilter = document.getElementById('appointmentStatusFilter');
if (appointmentStatusFilter) {
    appointmentStatusFilter.addEventListener('change', applyAppointmentFilters);
}

const appointmentTimeFilter = document.getElementById('appointmentTimeFilter');
if (appointmentTimeFilter) {
    appointmentTimeFilter.addEventListener('change', applyAppointmentFilters);
}

const clearAppointmentFilterBtn = document.getElementById('clearAppointmentFilterBtn');
if (clearAppointmentFilterBtn) {
    clearAppointmentFilterBtn.addEventListener('click', clearAppointmentFilters);
}

// ===== Initialize on page load =====
document.addEventListener('DOMContentLoaded', () => {
    loadDashboard();
});
