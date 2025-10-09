// ===== Hospital Management System - Main JavaScript =====
// Version: 1.2.0
// Description: Core application logic for hospital management system
// Author: Hospital MS Team
// Last Updated: 2025-10-07

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

    // Load patient statistics charts
    loadPatientStatistics();
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
        tbody.innerHTML = '<tr><td colspan="6" class="no-data">ยังไม่มีข้อมูลผู้ป่วย</td></tr>';
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
        tbody.innerHTML = '<tr><td colspan="6" class="no-data">ไม่พบข้อมูลผู้ป่วยที่ค้นหา</td></tr>';
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

// ===== Initialize on page load =====
document.addEventListener('DOMContentLoaded', () => {
    loadDashboard();
});
