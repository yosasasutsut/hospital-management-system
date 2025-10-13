// ===== Hospital Management System - Main JavaScript =====
// Version: 2.2.0
// Description: Core application logic for hospital management system
// Author: Hospital MS Team
// Last Updated: 2025-10-13

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

        // Initialize sample doctors with comprehensive profile data
        if (!storage.get('doctors')) storage.set('doctors', [
            {
                id: 1,
                name: 'นพ.สมชาย ใจดี',
                title: 'นายแพทย์',
                specialty: 'อายุรแพทย์',
                phone: '081-234-5678',
                email: 'somchai.j@hospital.com',
                workingHours: 'จันทร์-ศุกร์ 08:00-17:00',
                experience: '15 ปี',
                education: 'แพทยศาสตร์บัณฑิต จุฬาลงกรณ์มหาวิทยาลัย',
                licenseNumber: 'MD-2008-001234',
                status: 'active',
                registrationDate: new Date().toISOString().split('T')[0],
                // Profile extensions for Day 16
                photo: null, // base64 string or null for default
                photoUrl: null,
                roomNumber: 'ห้องตรวจ 301 อาคาร 1',
                bio: 'แพทย์ผู้เชี่ยวชาญด้านอายุรศาสตร์ มีประสบการณ์กว่า 15 ปี เชี่ยวชาญในการรักษาโรคเรื้อรัง โรคหัวใจ และโรคเบาหวาน มุ่งมั่นให้การดูแลผู้ป่วยด้วยความเอาใจใส่และใช้เทคโนโลยีการแพทย์ที่ทันสมัย',
                languages: ['ไทย', 'English'],
                specializations: ['โรคหัวใจ', 'โรคเบาหวาน', 'โรคความดันโลหิตสูง'],
                certifications: [
                    'วุฒิบัตรอายุรศาสตร์ แพทยสภา',
                    'Fellow of the Royal College of Physicians of Thailand',
                    'Certificate in Advanced Cardiac Life Support (ACLS)'
                ],
                memberships: [
                    'ราชวิทยาลัยอายุรแพทย์แห่งประเทศไทย',
                    'สมาคมโรคหัวใจแห่งประเทศไทย'
                ],
                awards: [
                    'รางวัลแพทย์ดีเด่น ประจำปี 2565',
                    'Best Doctor Award 2020'
                ],
                researchInterests: 'โรคหัวใจและหลอดเลือด, การป้องกันโรคเรื้อรัง',
                patientsCount: 1250,
                appointmentsCompleted: 3420
            },
            {
                id: 2,
                name: 'นพ.สมหญิง รักษา',
                title: 'นายแพทย์',
                specialty: 'ศัลยแพทย์',
                phone: '082-345-6789',
                email: 'somying.r@hospital.com',
                workingHours: 'จันทร์-เสาร์ 09:00-18:00',
                experience: '12 ปี',
                education: 'แพทยศาสตร์บัณฑิต มหาวิทยาลัยมหิดล',
                licenseNumber: 'MD-2011-005678',
                status: 'active',
                registrationDate: new Date().toISOString().split('T')[0],
                // Profile extensions for Day 16
                photo: null,
                photoUrl: null,
                roomNumber: 'ห้องตรวจ 405 อาคาร 2',
                bio: 'ศัลยแพทย์ผู้เชี่ยวชาญด้านการผ่าตัดทั่วไปและศัลยกรรมช่องท้อง มีความชำนาญในการผ่าตัดแบบส่องกล้อง (Laparoscopic Surgery) และการผ่าตัดระบบทางเดินอาหาร',
                languages: ['ไทย', 'English', '中文'],
                specializations: ['ศัลยกรรมช่องท้อง', 'ศัลยกรรมส่องกล้อง', 'ศัลยกรรมระบบทางเดินอาหาร'],
                certifications: [
                    'วุฒิบัตรศัลยศาสตร์ แพทยสภา',
                    'Advanced Laparoscopic Surgery Training',
                    'Fellowship in Minimally Invasive Surgery'
                ],
                memberships: [
                    'ราชวิทยาลัยศัลยแพทย์แห่งประเทศไทย',
                    'สมาคมศัลยกรรมส่องกล้องแห่งประเทศไทย'
                ],
                awards: [
                    'Excellence in Surgical Innovation 2022'
                ],
                researchInterests: 'Minimally Invasive Surgery, Colorectal Surgery',
                patientsCount: 890,
                appointmentsCompleted: 2150
            },
            {
                id: 3,
                name: 'นพ.วิชัย เก่ง',
                title: 'นายแพทย์',
                specialty: 'กุมารแพทย์',
                phone: '083-456-7890',
                email: 'wichai.k@hospital.com',
                workingHours: 'จันทร์-ศุกร์ 10:00-19:00',
                experience: '8 ปี',
                education: 'แพทยศาสตร์บัณฑิต มหาวิทยาลัยเชียงใหม่',
                licenseNumber: 'MD-2015-009012',
                status: 'active',
                registrationDate: new Date().toISOString().split('T')[0],
                // Profile extensions for Day 16
                photo: null,
                photoUrl: null,
                roomNumber: 'ห้องตรวจ 201 อาคารเด็ก',
                bio: 'กุมารแพทย์ผู้มีความเชี่ยวชาญในการดูแลสุขภาพเด็กและวัยรุ่น เน้นการป้องกันโรคและการพัฒนาการของเด็ก มีความเชี่ยวชาญพิเศษด้านโรคภูมิแพ้และหอบหืดในเด็ก',
                languages: ['ไทย', 'English'],
                specializations: ['โรคภูมิแพ้ในเด็ก', 'โรคหอบหืด', 'การเจริญเติบโตและพัฒนาการ'],
                certifications: [
                    'วุฒิบัตรกุมารแพทย์ แพทยสภา',
                    'Certificate in Pediatric Allergy and Immunology',
                    'Pediatric Advanced Life Support (PALS)'
                ],
                memberships: [
                    'ราชวิทยาลัยกุมารแพทย์แห่งประเทศไทย',
                    'สมาคมโรคภูมิแพ้และภูมิคุ้มกันวิทยาแห่งประเทศไทย'
                ],
                awards: [],
                researchInterests: 'Pediatric Allergy, Childhood Asthma Prevention',
                patientsCount: 1580,
                appointmentsCompleted: 4200
            }
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

        // ===== Ward Management System Data Structure =====
        // Initialize wards (หอผู้ป่วย) - Hospital departments for inpatient care
        if (!storage.get('wards')) storage.set('wards', [
            {
                id: 'ward-001',
                wardName: 'หอผู้ป่วยอายุรกรรม',
                wardCode: 'IMW-01',
                department: 'อายุรศาสตร์',
                wardType: 'general', // 'general' = นับเตียง, 'special' = นับห้อง
                building: 'อาคารผู้ป่วยใน 1',
                floor: 2,
                headNurse: 'พยาบาล สมศรี ใจดี',
                nursingStation: 'NS-2A',
                contactPhone: '02-123-4501',
                totalRooms: 0,
                totalBeds: 0,
                occupiedBeds: 0,
                availableBeds: 0,
                status: 'active',
                description: 'หอผู้ป่วยสำหรับผู้ป่วยโรคทั่วไปทางอายุรศาสตร์'
            },
            {
                id: 'ward-002',
                wardName: 'หอผู้ป่วยศัลยกรรม',
                wardCode: 'SRW-01',
                department: 'ศัลยศาสตร์',
                wardType: 'general',
                building: 'อาคารผู้ป่วยใน 1',
                floor: 3,
                headNurse: 'พยาบาล วิไลวรรณ รักษ์',
                nursingStation: 'NS-3A',
                contactPhone: '02-123-4502',
                totalRooms: 0,
                totalBeds: 0,
                occupiedBeds: 0,
                availableBeds: 0,
                status: 'active',
                description: 'หอผู้ป่วยสำหรับผู้ป่วยหลังผ่าตัด'
            },
            {
                id: 'ward-003',
                wardName: 'หอผู้ป่วยกุมารเวชกรรม',
                wardCode: 'PDW-01',
                department: 'กุมารเวชศาสตร์',
                wardType: 'general',
                building: 'อาคารเด็ก',
                floor: 2,
                headNurse: 'พยาบาล ชนิดา อ่อนโยน',
                nursingStation: 'NS-PED-2',
                contactPhone: '02-123-4503',
                totalRooms: 0,
                totalBeds: 0,
                occupiedBeds: 0,
                availableBeds: 0,
                status: 'active',
                description: 'หอผู้ป่วยเด็กและวัยรุ่น'
            },
            {
                id: 'ward-004',
                wardName: 'หอผู้ป่วยสูติ-นรีเวช',
                wardCode: 'OBW-01',
                department: 'สูติ-นรีเวชศาสตร์',
                wardType: 'general',
                building: 'อาคารสตรี',
                floor: 3,
                headNurse: 'พยาบาล ปราณี คุ้มครอง',
                nursingStation: 'NS-OB-3',
                contactPhone: '02-123-4504',
                totalRooms: 0,
                totalBeds: 0,
                occupiedBeds: 0,
                availableBeds: 0,
                status: 'active',
                description: 'หอผู้ป่วยสำหรับมารดาและทารกแรกเกิด'
            },
            {
                id: 'ward-005',
                wardName: 'หอผู้ป่วยพิเศษ',
                wardCode: 'SPW-01',
                department: 'หอผู้ป่วยพิเศษ',
                wardType: 'special', // นับเป็นห้อง (ห้องเดี่ยว/ห้องคู่)
                building: 'อาคารผู้ป่วยใน 2',
                floor: 4,
                headNurse: 'พยาบาล สุดารัตน์ ประสิทธิ์',
                nursingStation: 'NS-4A',
                contactPhone: '02-123-4505',
                totalRooms: 0,
                totalBeds: 0,
                occupiedBeds: 0,
                availableBeds: 0,
                status: 'active',
                description: 'หอผู้ป่วยห้องเดี่ยวและห้องคู่พิเศษ'
            },
            {
                id: 'ward-006',
                wardName: 'หอผู้ป่วยหนัก (ICU)',
                wardCode: 'ICU-01',
                department: 'แพทย์วิกฤต',
                wardType: 'special',
                building: 'อาคารผู้ป่วยใน 2',
                floor: 5,
                headNurse: 'พยาบาล อรุณี เข้มแข็ง',
                nursingStation: 'NS-ICU-5',
                contactPhone: '02-123-4506',
                totalRooms: 0,
                totalBeds: 0,
                occupiedBeds: 0,
                availableBeds: 0,
                status: 'active',
                description: 'หอผู้ป่วยวิกฤตที่ต้องการการดูแลระดับสูง'
            }
        ]);

        // Initialize ward rooms (ห้องภายใน ward)
        if (!storage.get('wardRooms')) storage.set('wardRooms', [
            // Ward 1: หอผู้ป่วยอายุรกรรม (General Ward - ห้องรวม)
            {
                id: 'wroom-001',
                roomNumber: 'IMW-201A',
                roomName: 'ห้อง 201A',
                wardId: 'ward-001',
                roomType: 'general', // 'general' = ห้องรวม, 'single' = ห้องเดี่ยว, 'double' = ห้องคู่
                totalBeds: 8,
                occupiedBeds: 5,
                availableBeds: 3,
                pricePerBedPerDay: 500,
                amenities: ['เตียงปรับระดับ', 'พัดลม', 'ห้องน้ำรวม', 'ตู้เก็บของส่วนตัว', 'ม่านกั้น'],
                status: 'available',
                notes: ''
            },
            {
                id: 'wroom-002',
                roomNumber: 'IMW-201B',
                roomName: 'ห้อง 201B',
                wardId: 'ward-001',
                roomType: 'general',
                totalBeds: 6,
                occupiedBeds: 6,
                availableBeds: 0,
                pricePerBedPerDay: 500,
                amenities: ['เตียงปรับระดับ', 'พัดลม', 'ห้องน้ำรวม', 'ตู้เก็บของส่วนตัว', 'ม่านกั้น'],
                status: 'full',
                notes: 'เต็ม'
            },
            {
                id: 'wroom-003',
                roomNumber: 'IMW-202A',
                roomName: 'ห้อง 202A',
                wardId: 'ward-001',
                roomType: 'general',
                totalBeds: 10,
                occupiedBeds: 7,
                availableBeds: 3,
                pricePerBedPerDay: 500,
                amenities: ['เตียงปรับระดับ', 'พัดลม', 'ห้องน้ำรวม', 'ตู้เก็บของส่วนตัว', 'ม่านกั้น'],
                status: 'available',
                notes: ''
            },

            // Ward 2: หอผู้ป่วยศัลยกรรม (General Ward - ห้องรวม)
            {
                id: 'wroom-004',
                roomNumber: 'SRW-301A',
                roomName: 'ห้อง 301A',
                wardId: 'ward-002',
                roomType: 'general',
                totalBeds: 6,
                occupiedBeds: 4,
                availableBeds: 2,
                pricePerBedPerDay: 600,
                amenities: ['เตียงไฟฟ้า', 'พัดลม', 'ห้องน้ำรวม', 'ตู้เก็บของส่วนตัว', 'ม่านกั้น', 'ระบบเรียกพยาบาล'],
                status: 'available',
                notes: 'สำหรับผู้ป่วยหลังผ่าตัด'
            },
            {
                id: 'wroom-005',
                roomNumber: 'SRW-301B',
                roomName: 'ห้อง 301B',
                wardId: 'ward-002',
                roomType: 'general',
                totalBeds: 8,
                occupiedBeds: 6,
                availableBeds: 2,
                pricePerBedPerDay: 600,
                amenities: ['เตียงไฟฟ้า', 'พัดลม', 'ห้องน้ำรวม', 'ตู้เก็บของส่วนตัว', 'ม่านกั้น', 'ระบบเรียกพยาบาล'],
                status: 'available',
                notes: ''
            },

            // Ward 3: หอผู้ป่วยกุมารเวชกรรม (General Ward - ห้องรวม)
            {
                id: 'wroom-006',
                roomNumber: 'PDW-201A',
                roomName: 'ห้องเด็กชาย A',
                wardId: 'ward-003',
                roomType: 'general',
                totalBeds: 6,
                occupiedBeds: 3,
                availableBeds: 3,
                pricePerBedPerDay: 550,
                amenities: ['เตียงเด็ก', 'พัดลม', 'ห้องน้ำรวม', 'ตู้เก็บของ', 'เตียงพ่อแม่', 'ของเล่น', 'ทีวี'],
                status: 'available',
                notes: 'สำหรับเด็กชาย'
            },
            {
                id: 'wroom-007',
                roomNumber: 'PDW-201B',
                roomName: 'ห้องเด็กหญิง B',
                wardId: 'ward-003',
                roomType: 'general',
                totalBeds: 6,
                occupiedBeds: 4,
                availableBeds: 2,
                pricePerBedPerDay: 550,
                amenities: ['เตียงเด็ก', 'พัดลม', 'ห้องน้ำรวม', 'ตู้เก็บของ', 'เตียงพ่อแม่', 'ของเล่น', 'ทีวี'],
                status: 'available',
                notes: 'สำหรับเด็กหญิง'
            },

            // Ward 4: หอผู้ป่วยสูติ-นรีเวช (General Ward - ห้องรวม)
            {
                id: 'wroom-008',
                roomNumber: 'OBW-301A',
                roomName: 'ห้อง 301A',
                wardId: 'ward-004',
                roomType: 'general',
                totalBeds: 4,
                occupiedBeds: 2,
                availableBeds: 2,
                pricePerBedPerDay: 700,
                amenities: ['เตียงคลอด', 'แอร์', 'ห้องน้ำรวม', 'ตู้เก็บของ', 'เปลเด็ก', 'เครื่องอุ่นนม'],
                status: 'available',
                notes: 'หอผู้คลอดและหลังคลอด'
            },

            // Ward 5: หอผู้ป่วยพิเศษ (Special Ward - ห้องเดี่ยว/ห้องคู่)
            {
                id: 'wroom-009',
                roomNumber: 'SPW-401',
                roomName: 'ห้องเดี่ยว 401',
                wardId: 'ward-005',
                roomType: 'single',
                totalBeds: 1,
                occupiedBeds: 0,
                availableBeds: 1,
                pricePerRoomPerDay: 3000,
                amenities: ['เตียงไฟฟ้า', 'แอร์', 'TV 32"', 'ห้องน้ำในตัว', 'ตู้เย็น', 'โซฟา', 'WiFi'],
                status: 'available',
                notes: ''
            },
            {
                id: 'wroom-010',
                roomNumber: 'SPW-402',
                roomName: 'ห้องเดี่ยว 402',
                wardId: 'ward-005',
                roomType: 'single',
                totalBeds: 1,
                occupiedBeds: 1,
                availableBeds: 0,
                pricePerRoomPerDay: 3000,
                amenities: ['เตียงไฟฟ้า', 'แอร์', 'TV 32"', 'ห้องน้ำในตัว', 'ตู้เย็น', 'โซฟา', 'WiFi'],
                status: 'occupied',
                notes: 'มีผู้ป่วย'
            },
            {
                id: 'wroom-011',
                roomNumber: 'SPW-403',
                roomName: 'ห้องคู่ 403',
                wardId: 'ward-005',
                roomType: 'double',
                totalBeds: 2,
                occupiedBeds: 1,
                availableBeds: 1,
                pricePerRoomPerDay: 5000,
                amenities: ['เตียงไฟฟ้า 2 เตียง', 'แอร์', 'TV 40"', 'ห้องน้ำในตัว', 'ตู้เย็น', 'โซฟา 2 ตัว', 'WiFi'],
                status: 'available',
                notes: 'มีเตียงว่าง 1 เตียง'
            },

            // Ward 6: หอผู้ป่วยหนัก ICU (Special Ward - ห้องเดี่ยว)
            {
                id: 'wroom-012',
                roomNumber: 'ICU-501',
                roomName: 'ICU 501',
                wardId: 'ward-006',
                roomType: 'single',
                totalBeds: 1,
                occupiedBeds: 1,
                availableBeds: 0,
                pricePerRoomPerDay: 10000,
                amenities: ['เตียง ICU พิเศษ', 'เครื่องช่วยหายใจ', 'Monitor', 'แอร์', 'ระบบแยกโซน', 'อุปกรณ์ชีพจร'],
                status: 'occupied',
                notes: 'ผู้ป่วยวิกฤต'
            },
            {
                id: 'wroom-013',
                roomNumber: 'ICU-502',
                roomName: 'ICU 502',
                wardId: 'ward-006',
                roomType: 'single',
                totalBeds: 1,
                occupiedBeds: 0,
                availableBeds: 1,
                pricePerRoomPerDay: 10000,
                amenities: ['เตียง ICU พิเศษ', 'เครื่องช่วยหายใจ', 'Monitor', 'แอร์', 'ระบบแยกโซน', 'อุปกรณ์ชีพจร'],
                status: 'available',
                notes: ''
            }
        ]);

        // Initialize ward beds (เตียงภายในห้อง)
        if (!storage.get('wardBeds')) storage.set('wardBeds', [
            // Room IMW-201A (8 beds)
            {
                id: 'bed-001',
                bedNumber: 'IMW-201A-01',
                bedName: 'เตียง 1',
                roomId: 'wroom-001',
                wardId: 'ward-001',
                status: 'occupied',
                patientId: null,
                patientName: 'นาง สมศรี ใจดี',
                patientHN: 'HN-2025-001',
                admissionDate: '2025-10-10',
                expectedDischargeDate: '2025-10-15',
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            },
            {
                id: 'bed-002',
                bedNumber: 'IMW-201A-02',
                bedName: 'เตียง 2',
                roomId: 'wroom-001',
                wardId: 'ward-001',
                status: 'available',
                patientId: null,
                patientName: null,
                patientHN: null,
                admissionDate: null,
                expectedDischargeDate: null,
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            },
            {
                id: 'bed-003',
                bedNumber: 'IMW-201A-03',
                bedName: 'เตียง 3',
                roomId: 'wroom-001',
                wardId: 'ward-001',
                status: 'occupied',
                patientId: null,
                patientName: 'นาย วิชัย สุขสันต์',
                patientHN: 'HN-2025-002',
                admissionDate: '2025-10-11',
                expectedDischargeDate: '2025-10-16',
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            },
            {
                id: 'bed-004',
                bedNumber: 'IMW-201A-04',
                bedName: 'เตียง 4',
                roomId: 'wroom-001',
                wardId: 'ward-001',
                status: 'occupied',
                patientId: null,
                patientName: 'นาง ประนอม ดีงาม',
                patientHN: 'HN-2025-003',
                admissionDate: '2025-10-09',
                expectedDischargeDate: '2025-10-14',
                dailyRate: 500,
                specialCare: true,
                isolation: false,
                notes: 'ต้องการดูแลพิเศษ'
            },
            {
                id: 'bed-005',
                bedNumber: 'IMW-201A-05',
                bedName: 'เตียง 5',
                roomId: 'wroom-001',
                wardId: 'ward-001',
                status: 'available',
                patientId: null,
                patientName: null,
                patientHN: null,
                admissionDate: null,
                expectedDischargeDate: null,
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            },
            {
                id: 'bed-006',
                bedNumber: 'IMW-201A-06',
                bedName: 'เตียง 6',
                roomId: 'wroom-001',
                wardId: 'ward-001',
                status: 'occupied',
                patientId: null,
                patientName: 'นาย สุชาติ รักดี',
                patientHN: 'HN-2025-004',
                admissionDate: '2025-10-12',
                expectedDischargeDate: '2025-10-17',
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            },
            {
                id: 'bed-007',
                bedNumber: 'IMW-201A-07',
                bedName: 'เตียง 7',
                roomId: 'wroom-001',
                wardId: 'ward-001',
                status: 'available',
                patientId: null,
                patientName: null,
                patientHN: null,
                admissionDate: null,
                expectedDischargeDate: null,
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            },
            {
                id: 'bed-008',
                bedNumber: 'IMW-201A-08',
                bedName: 'เตียง 8',
                roomId: 'wroom-001',
                wardId: 'ward-001',
                status: 'occupied',
                patientId: null,
                patientName: 'นาง วิไล ชนะชัย',
                patientHN: 'HN-2025-005',
                admissionDate: '2025-10-13',
                expectedDischargeDate: '2025-10-18',
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            },

            // Room IMW-201B (6 beds - all occupied)
            {
                id: 'bed-009',
                bedNumber: 'IMW-201B-01',
                bedName: 'เตียง 1',
                roomId: 'wroom-002',
                wardId: 'ward-001',
                status: 'occupied',
                patientId: null,
                patientName: 'นาย ประยุทธ เก่ง',
                patientHN: 'HN-2025-006',
                admissionDate: '2025-10-10',
                expectedDischargeDate: '2025-10-15',
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            },
            {
                id: 'bed-010',
                bedNumber: 'IMW-201B-02',
                bedName: 'เตียง 2',
                roomId: 'wroom-002',
                wardId: 'ward-001',
                status: 'occupied',
                patientId: null,
                patientName: 'นาง สุดา แจ่มใส',
                patientHN: 'HN-2025-007',
                admissionDate: '2025-10-11',
                expectedDischargeDate: '2025-10-16',
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            },
            {
                id: 'bed-011',
                bedNumber: 'IMW-201B-03',
                bedName: 'เตียง 3',
                roomId: 'wroom-002',
                wardId: 'ward-001',
                status: 'occupied',
                patientId: null,
                patientName: 'นาย มานะ ชัยชนะ',
                patientHN: 'HN-2025-008',
                admissionDate: '2025-10-12',
                expectedDischargeDate: '2025-10-17',
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            },
            {
                id: 'bed-012',
                bedNumber: 'IMW-201B-04',
                bedName: 'เตียง 4',
                roomId: 'wroom-002',
                wardId: 'ward-001',
                status: 'occupied',
                patientId: null,
                patientName: 'นาง จิตรา สวยงาม',
                patientHN: 'HN-2025-009',
                admissionDate: '2025-10-09',
                expectedDischargeDate: '2025-10-14',
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            },
            {
                id: 'bed-013',
                bedNumber: 'IMW-201B-05',
                bedName: 'เตียง 5',
                roomId: 'wroom-002',
                wardId: 'ward-001',
                status: 'occupied',
                patientId: null,
                patientName: 'นาย บุญชู มีสุข',
                patientHN: 'HN-2025-010',
                admissionDate: '2025-10-13',
                expectedDischargeDate: '2025-10-18',
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            },
            {
                id: 'bed-014',
                bedNumber: 'IMW-201B-06',
                bedName: 'เตียง 6',
                roomId: 'wroom-002',
                wardId: 'ward-001',
                status: 'occupied',
                patientId: null,
                patientName: 'นาง สมพร เจริญ',
                patientHN: 'HN-2025-011',
                admissionDate: '2025-10-11',
                expectedDischargeDate: '2025-10-16',
                dailyRate: 500,
                specialCare: false,
                isolation: false,
                notes: ''
            }

            // Note: เพิ่มเตียงสำหรับห้องอื่นๆ ได้ในภายหลัง
            // สำหรับ Commit 1 จะเพิ่มข้อมูลตัวอย่างพอสมควรก่อน
        ]);

        // Initialize doctor schedules (Day 17)
        if (!storage.get('doctorSchedules')) storage.set('doctorSchedules', [
            {
                id: 'schedule-001',
                doctorId: 1,
                weeklySchedule: {
                    monday: [
                        { startTime: '08:00', endTime: '12:00', type: 'consultation', location: 'ห้องตรวจ 301' },
                        { startTime: '13:00', endTime: '17:00', type: 'consultation', location: 'ห้องตรวจ 301' }
                    ],
                    tuesday: [
                        { startTime: '08:00', endTime: '12:00', type: 'consultation', location: 'ห้องตรวจ 301' },
                        { startTime: '13:00', endTime: '17:00', type: 'consultation', location: 'ห้องตรวจ 301' }
                    ],
                    wednesday: [
                        { startTime: '08:00', endTime: '12:00', type: 'consultation', location: 'ห้องตรวจ 301' },
                        { startTime: '13:00', endTime: '17:00', type: 'consultation', location: 'ห้องตรวจ 301' }
                    ],
                    thursday: [
                        { startTime: '08:00', endTime: '12:00', type: 'consultation', location: 'ห้องตรวจ 301' },
                        { startTime: '13:00', endTime: '17:00', type: 'consultation', location: 'ห้องตรวจ 301' }
                    ],
                    friday: [
                        { startTime: '08:00', endTime: '12:00', type: 'consultation', location: 'ห้องตรวจ 301' },
                        { startTime: '13:00', endTime: '17:00', type: 'consultation', location: 'ห้องตรวจ 301' }
                    ],
                    saturday: [],
                    sunday: []
                },
                effectiveDate: '2025-10-01',
                createdAt: new Date().toISOString()
            },
            {
                id: 'schedule-002',
                doctorId: 2,
                weeklySchedule: {
                    monday: [
                        { startTime: '09:00', endTime: '13:00', type: 'consultation', location: 'ห้องตรวจ 405' },
                        { startTime: '14:00', endTime: '18:00', type: 'consultation', location: 'ห้องตรวจ 405' }
                    ],
                    tuesday: [
                        { startTime: '09:00', endTime: '13:00', type: 'consultation', location: 'ห้องตรวจ 405' }
                    ],
                    wednesday: [
                        { startTime: '09:00', endTime: '13:00', type: 'consultation', location: 'ห้องตรวจ 405' },
                        { startTime: '14:00', endTime: '18:00', type: 'consultation', location: 'ห้องตรวจ 405' }
                    ],
                    thursday: [
                        { startTime: '09:00', endTime: '13:00', type: 'consultation', location: 'ห้องตรวจ 405' }
                    ],
                    friday: [
                        { startTime: '09:00', endTime: '13:00', type: 'consultation', location: 'ห้องตรวจ 405' },
                        { startTime: '14:00', endTime: '18:00', type: 'consultation', location: 'ห้องตรวจ 405' }
                    ],
                    saturday: [
                        { startTime: '09:00', endTime: '13:00', type: 'consultation', location: 'ห้องตรวจ 405' }
                    ],
                    sunday: []
                },
                effectiveDate: '2025-10-01',
                createdAt: new Date().toISOString()
            },
            {
                id: 'schedule-003',
                doctorId: 3,
                weeklySchedule: {
                    monday: [
                        { startTime: '10:00', endTime: '14:00', type: 'consultation', location: 'ห้องตรวจ 201' },
                        { startTime: '15:00', endTime: '19:00', type: 'consultation', location: 'ห้องตรวจ 201' }
                    ],
                    tuesday: [
                        { startTime: '10:00', endTime: '14:00', type: 'consultation', location: 'ห้องตรวจ 201' },
                        { startTime: '15:00', endTime: '19:00', type: 'consultation', location: 'ห้องตรวจ 201' }
                    ],
                    wednesday: [
                        { startTime: '10:00', endTime: '14:00', type: 'consultation', location: 'ห้องตรวจ 201' },
                        { startTime: '15:00', endTime: '19:00', type: 'consultation', location: 'ห้องตรวจ 201' }
                    ],
                    thursday: [
                        { startTime: '10:00', endTime: '14:00', type: 'consultation', location: 'ห้องตรวจ 201' },
                        { startTime: '15:00', endTime: '19:00', type: 'consultation', location: 'ห้องตรวจ 201' }
                    ],
                    friday: [
                        { startTime: '10:00', endTime: '14:00', type: 'consultation', location: 'ห้องตรวจ 201' },
                        { startTime: '15:00', endTime: '19:00', type: 'consultation', location: 'ห้องตรวจ 201' }
                    ],
                    saturday: [],
                    sunday: []
                },
                effectiveDate: '2025-10-01',
                createdAt: new Date().toISOString()
            }
        ]);

        // Update ward statistics after initialization
        updateWardStatistics();
    }
};

/**
 * Update ward statistics (total beds, occupied, available)
 * Calculates real-time statistics from wardRooms and wardBeds data
 */
function updateWardStatistics() {
    const wards = storage.get('wards') || [];
    const wardRooms = storage.get('wardRooms') || [];
    const wardBeds = storage.get('wardBeds') || [];

    wards.forEach(ward => {
        // Get all rooms in this ward
        const roomsInWard = wardRooms.filter(r => r.wardId === ward.id);

        // Calculate total rooms
        ward.totalRooms = roomsInWard.length;

        // Calculate total beds
        ward.totalBeds = roomsInWard.reduce((sum, room) => sum + room.totalBeds, 0);

        // Calculate occupied beds
        ward.occupiedBeds = roomsInWard.reduce((sum, room) => sum + room.occupiedBeds, 0);

        // Calculate available beds
        ward.availableBeds = ward.totalBeds - ward.occupiedBeds;
    });

    // Save updated wards
    storage.set('wards', wards);
}

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
            case 'wards':
                loadWards();
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
    const wards = storage.get('wards') || [];
    const wardBeds = storage.get('wardBeds') || [];

    // Update ward statistics first to ensure data is fresh
    updateWardStatistics();

    // Get today's date and current time
    const today = new Date().toISOString().split('T')[0];
    const now = new Date();

    // Count today's patients
    const todayPatients = patients.filter(p => p.registrationDate === today).length;

    // Count today's appointments
    const todayAppointments = appointments.filter(a => a.date === today).length;

    // Count active doctors
    const activeDoctors = doctors.filter(d => d.status === 'active').length;

    // Count available rooms (old system)
    const availableRooms = rooms.filter(r => r.status === 'available').length;

    // Count available beds (new ward system)
    const availableBeds = wardBeds.filter(b => b.status === 'available').length;

    // Update basic stats
    document.getElementById('todayPatients').textContent = todayPatients;
    document.getElementById('appointments').textContent = todayAppointments;
    document.getElementById('activeDoctors').textContent = activeDoctors;
    document.getElementById('availableRooms').textContent = availableRooms > 0 ? availableRooms : availableBeds;

    // Load ward statistics
    loadWardStatistics();

    // Load appointment statistics
    loadAppointmentStatistics(appointments, now);

    // Load room statistics
    loadRoomStatistics();

    // Load patient statistics charts
    loadPatientStatistics();

    // Update appointment reminders
    updateAppointmentReminders();
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
 * Load and display ward statistics in dashboard
 * Shows comprehensive bed occupancy and ward status information
 */
function loadWardStatistics() {
    const wards = storage.get('wards') || [];
    const wardBeds = storage.get('wardBeds') || [];
    const wardRooms = storage.get('wardRooms') || [];

    // Calculate overall statistics
    const totalBeds = wardBeds.length;
    const occupiedBeds = wardBeds.filter(b => b.status === 'occupied').length;
    const availableBeds = wardBeds.filter(b => b.status === 'available').length;
    const maintenanceBeds = wardBeds.filter(b => b.status === 'maintenance').length;
    const cleaningBeds = wardBeds.filter(b => b.status === 'cleaning').length;

    const occupancyRate = totalBeds > 0 ? ((occupiedBeds / totalBeds) * 100).toFixed(1) : 0;

    // Count wards by status
    const activeWards = wards.filter(w => w.status === 'active').length;
    const maintenanceWards = wards.filter(w => w.status === 'maintenance').length;

    // Count rooms by status
    const totalRooms = wardRooms.length;
    const fullRooms = wardRooms.filter(r => r.status === 'full').length;
    const availableRoomsCount = wardRooms.filter(r => r.status === 'available').length;

    // Create or update ward statistics section in dashboard
    const wardStatsSection = document.getElementById('wardStatisticsSection');
    if (wardStatsSection) {
        wardStatsSection.innerHTML = `
            <div style="background: white; padding: 1.5rem; border-radius: var(--border-radius); box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h3 style="margin: 0; color: #111827;">🏥 ระบบหอผู้ป่วย</h3>
                    <button onclick="showSection('wards'); loadWards();" class="btn btn-primary" style="font-size: 0.875rem; padding: 0.5rem 1rem;">
                        จัดการหอผู้ป่วย
                    </button>
                </div>

                <!-- Key Metrics -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
                    <div style="padding: 1rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 0.5rem; color: white;">
                        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">เตียงทั้งหมด</p>
                        <p style="margin: 0.5rem 0 0 0; font-size: 2rem; font-weight: 700;">${totalBeds}</p>
                    </div>
                    <div style="padding: 1rem; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); border-radius: 0.5rem; color: white;">
                        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">เตียงที่ใช้งาน</p>
                        <p style="margin: 0.5rem 0 0 0; font-size: 2rem; font-weight: 700;">${occupiedBeds}</p>
                    </div>
                    <div style="padding: 1rem; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); border-radius: 0.5rem; color: white;">
                        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">เตียงว่าง</p>
                        <p style="margin: 0.5rem 0 0 0; font-size: 2rem; font-weight: 700;">${availableBeds}</p>
                    </div>
                    <div style="padding: 1rem; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); border-radius: 0.5rem; color: white;">
                        <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">อัตราการใช้เตียง</p>
                        <p style="margin: 0.5rem 0 0 0; font-size: 2rem; font-weight: 700;">${occupancyRate}%</p>
                    </div>
                </div>

                <!-- Occupancy Bar -->
                <div style="margin-bottom: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                        <span style="font-size: 0.875rem; font-weight: 600; color: #374151;">การใช้งานเตียง</span>
                        <span style="font-size: 0.875rem; color: #6b7280;">${occupiedBeds} / ${totalBeds} เตียง</span>
                    </div>
                    <div style="width: 100%; height: 2rem; background: #e5e7eb; border-radius: 999px; overflow: hidden; position: relative;">
                        <div style="height: 100%; background: linear-gradient(90deg, #10b981 0%, #059669 100%); width: ${occupancyRate}%; transition: width 0.3s ease;"></div>
                        <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-weight: 600; color: ${occupancyRate > 50 ? 'white' : '#374151'}; font-size: 0.875rem;">
                            ${occupancyRate}%
                        </div>
                    </div>
                </div>

                <!-- Detailed Statistics -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1rem;">
                    <div style="padding: 0.75rem; background: #f9fafb; border-radius: 0.5rem; border-left: 3px solid #3b82f6;">
                        <p style="margin: 0; font-size: 0.75rem; color: #6b7280;">หอผู้ป่วยทั้งหมด</p>
                        <p style="margin: 0.25rem 0 0 0; font-size: 1.5rem; font-weight: 700; color: #374151;">${wards.length}</p>
                    </div>
                    <div style="padding: 0.75rem; background: #f9fafb; border-radius: 0.5rem; border-left: 3px solid #10b981;">
                        <p style="margin: 0; font-size: 0.75rem; color: #6b7280;">หอผู้ป่วยใช้งาน</p>
                        <p style="margin: 0.25rem 0 0 0; font-size: 1.5rem; font-weight: 700; color: #374151;">${activeWards}</p>
                    </div>
                    <div style="padding: 0.75rem; background: #f9fafb; border-radius: 0.5rem; border-left: 3px solid #8b5cf6;">
                        <p style="margin: 0; font-size: 0.75rem; color: #6b7280;">ห้องทั้งหมด</p>
                        <p style="margin: 0.25rem 0 0 0; font-size: 1.5rem; font-weight: 700; color: #374151;">${totalRooms}</p>
                    </div>
                    <div style="padding: 0.75rem; background: #f9fafb; border-radius: 0.5rem; border-left: 3px solid #ef4444;">
                        <p style="margin: 0; font-size: 0.75rem; color: #6b7280;">ห้องเต็ม</p>
                        <p style="margin: 0.25rem 0 0 0; font-size: 1.5rem; font-weight: 700; color: #374151;">${fullRooms}</p>
                    </div>
                    <div style="padding: 0.75rem; background: #f9fafb; border-radius: 0.5rem; border-left: 3px solid #f59e0b;">
                        <p style="margin: 0; font-size: 0.75rem; color: #6b7280;">เตียงซ่อมบำรุง</p>
                        <p style="margin: 0.25rem 0 0 0; font-size: 1.5rem; font-weight: 700; color: #374151;">${maintenanceBeds}</p>
                    </div>
                    <div style="padding: 0.75rem; background: #f9fafb; border-radius: 0.5rem; border-left: 3px solid #06b6d4;">
                        <p style="margin: 0; font-size: 0.75rem; color: #6b7280;">เตียงทำความสะอาด</p>
                        <p style="margin: 0.25rem 0 0 0; font-size: 1.5rem; font-weight: 700; color: #374151;">${cleaningBeds}</p>
                    </div>
                </div>

                <!-- Ward List Quick View -->
                ${wards.length > 0 ? `
                    <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #e5e7eb;">
                        <h4 style="margin: 0 0 1rem 0; color: #374151; font-size: 0.9375rem;">หอผู้ป่วย (แสดง ${Math.min(wards.length, 5)} จาก ${wards.length})</h4>
                        <div style="display: grid; gap: 0.75rem;">
                            ${wards.slice(0, 5).map(ward => {
                                const occupancyPercent = ward.totalBeds > 0 ? ((ward.occupiedBeds / ward.totalBeds) * 100).toFixed(0) : 0;
                                const occupancyColor = occupancyPercent >= 90 ? '#ef4444' : occupancyPercent >= 70 ? '#f59e0b' : '#10b981';

                                return `
                                    <div style="padding: 0.75rem; background: #f9fafb; border-radius: 0.5rem; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s;" onmouseover="this.style.background='#eff6ff'" onmouseout="this.style.background='#f9fafb'" onclick="showSection('wards'); loadWards(); viewWardDetails('${ward.id}')">
                                        <div style="flex: 1;">
                                            <p style="margin: 0; font-weight: 600; color: #374151;">${ward.wardName}</p>
                                            <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #6b7280;">${ward.wardCode} | ${ward.department}</p>
                                        </div>
                                        <div style="text-align: right;">
                                            <p style="margin: 0; font-weight: 600; color: ${occupancyColor};">${ward.occupiedBeds}/${ward.totalBeds}</p>
                                            <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #6b7280;">${occupancyPercent}% ใช้งาน</p>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        ${wards.length > 5 ? `
                            <button onclick="showSection('wards'); loadWards();" class="btn btn-secondary" style="width: 100%; margin-top: 0.75rem; font-size: 0.875rem;">
                                ดูทั้งหมด ${wards.length} หอผู้ป่วย
                            </button>
                        ` : ''}
                    </div>
                ` : ''}

                <!-- Quick Actions -->
                <div style="display: flex; gap: 0.75rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid #e5e7eb;">
                    <button onclick="showAvailableBedsModal()" class="btn btn-primary" style="flex: 1; font-size: 0.875rem;">
                        🛏️ ดูเตียงว่าง
                    </button>
                    <button onclick="showSection('wards'); loadWards();" class="btn btn-secondary" style="flex: 1; font-size: 0.875rem;">
                        📊 จัดการหอผู้ป่วย
                    </button>
                </div>
            </div>
        `;
    }
}

/**
 * Load and display appointment statistics in dashboard
 * Enhanced to show comprehensive statistics including doctor breakdown
 * @param {Array} appointments - Array of all appointments
 * @param {Date} now - Current date/time
 */
function loadAppointmentStatistics(appointments, now) {
    // Get comprehensive statistics
    const stats = getAppointmentStatistics();

    // Update basic statistics if elements exist
    const pendingEl = document.getElementById('pendingAppointments');
    const confirmedEl = document.getElementById('confirmedAppointments');
    const upcomingEl = document.getElementById('upcomingAppointments');
    const cancelledEl = document.getElementById('cancelledAppointments');

    if (pendingEl) pendingEl.textContent = stats.pending;
    if (confirmedEl) confirmedEl.textContent = stats.confirmed;
    if (upcomingEl) upcomingEl.textContent = stats.upcoming;
    if (cancelledEl) cancelledEl.textContent = stats.cancelled;

    // Create or update appointment analytics section
    loadAppointmentAnalytics(stats);
}

/**
 * Load and display detailed appointment analytics
 * Shows doctor statistics and time-based breakdowns
 * @param {Object} stats - Statistics object from getAppointmentStatistics()
 */
function loadAppointmentAnalytics(stats) {
    // Check if analytics section exists, if not create it
    let analyticsSection = document.getElementById('appointmentAnalytics');

    if (!analyticsSection) {
        // Find dashboard section to append analytics
        const dashboardSection = document.getElementById('dashboard');
        if (!dashboardSection) return;

        // Create analytics container
        analyticsSection = document.createElement('div');
        analyticsSection.id = 'appointmentAnalytics';
        analyticsSection.style.marginTop = '2rem';
        dashboardSection.appendChild(analyticsSection);
    }

    // Build analytics HTML
    analyticsSection.innerHTML = `
        <h3 style="margin-bottom: 1.5rem; color: var(--primary-color);">📊 สถิตินัดหมายโดยละเอียด</h3>

        <!-- Time-based Statistics -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
            <div style="padding: 1.5rem; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); border-radius: 12px; color: white; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);">
                <div style="font-size: 0.875rem; opacity: 0.9; margin-bottom: 0.5rem;">วันนี้</div>
                <div style="font-size: 2rem; font-weight: 700;">${stats.today}</div>
                <div style="font-size: 0.75rem; opacity: 0.8; margin-top: 0.5rem;">นัดหมาย</div>
            </div>
            <div style="padding: 1.5rem; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 12px; color: white; box-shadow: 0 4px 6px rgba(16, 185, 129, 0.3);">
                <div style="font-size: 0.875rem; opacity: 0.9; margin-bottom: 0.5rem;">สัปดาห์นี้</div>
                <div style="font-size: 2rem; font-weight: 700;">${stats.thisWeek}</div>
                <div style="font-size: 0.75rem; opacity: 0.8; margin-top: 0.5rem;">นัดหมาย</div>
            </div>
            <div style="padding: 1.5rem; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); border-radius: 12px; color: white; box-shadow: 0 4px 6px rgba(245, 158, 11, 0.3);">
                <div style="font-size: 0.875rem; opacity: 0.9; margin-bottom: 0.5rem;">เดือนนี้</div>
                <div style="font-size: 2rem; font-weight: 700;">${stats.thisMonth}</div>
                <div style="font-size: 0.75rem; opacity: 0.8; margin-top: 0.5rem;">นัดหมาย</div>
            </div>
            <div style="padding: 1.5rem; background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); border-radius: 12px; color: white; box-shadow: 0 4px 6px rgba(139, 92, 246, 0.3);">
                <div style="font-size: 0.875rem; opacity: 0.9; margin-bottom: 0.5rem;">รวมทั้งหมด</div>
                <div style="font-size: 2rem; font-weight: 700;">${stats.total}</div>
                <div style="font-size: 0.75rem; opacity: 0.8; margin-top: 0.5rem;">นัดหมาย</div>
            </div>
        </div>

        <!-- Doctor Statistics -->
        <div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 2rem;">
            <h4 style="margin: 0 0 1.5rem 0; color: var(--primary-color); display: flex; align-items: center; gap: 0.5rem;">
                <span>👨‍⚕️</span>
                <span>สถิตินัดหมายแยกตามแพทย์</span>
            </h4>
            ${stats.byDoctor.length > 0 ? `
                <div style="display: grid; gap: 1rem;">
                    ${stats.byDoctor.slice(0, 5).map((doctor, index) => `
                        <div style="padding: 1rem; background: linear-gradient(to right, ${getGradientColor(index)}, transparent); border-radius: 8px; border-left: 4px solid ${getDoctorColor(index)};">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                <div>
                                    <div style="font-weight: 600; color: #1f2937; font-size: 1.1rem;">${doctor.doctorName}</div>
                                    <div style="font-size: 0.875rem; color: #6b7280;">${doctor.specialty}</div>
                                </div>
                                <div style="text-align: right;">
                                    <div style="font-size: 1.5rem; font-weight: 700; color: ${getDoctorColor(index)};">${doctor.count}</div>
                                    <div style="font-size: 0.75rem; color: #9ca3af;">นัดหมาย</div>
                                </div>
                            </div>
                            <div style="display: flex; gap: 1rem; font-size: 0.875rem;">
                                <span style="color: #10b981;">✓ ยืนยัน: ${doctor.confirmed}</span>
                                <span style="color: #f59e0b;">⏱ รอ: ${doctor.pending}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                ${stats.byDoctor.length > 5 ? `
                    <div style="text-align: center; margin-top: 1rem; color: #6b7280; font-size: 0.875rem;">
                        และอีก ${stats.byDoctor.length - 5} แพทย์
                    </div>
                ` : ''}
            ` : `
                <div style="text-align: center; padding: 2rem; color: #9ca3af;">
                    <div style="font-size: 3rem; margin-bottom: 0.5rem;">📋</div>
                    <div>ยังไม่มีข้อมูลนัดหมาย</div>
                </div>
            `}
        </div>

        <!-- Weekly Trend Preview -->
        <div style="background: white; padding: 1.5rem; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <h4 style="margin: 0 0 1rem 0; color: var(--primary-color); display: flex; align-items: center; gap: 0.5rem;">
                <span>📈</span>
                <span>แนวโน้มนัดหมาย 7 วันที่ผ่านมา</span>
            </h4>
            <div style="display: flex; justify-content: space-between; align-items: flex-end; height: 120px; gap: 0.5rem; padding: 1rem 0;">
                ${stats.weeklyTrend.dailyStats.map((day, index) => {
                    const maxCount = Math.max(...stats.weeklyTrend.dailyStats.map(d => d.total), 1);
                    const height = (day.total / maxCount * 100);
                    const date = new Date(day.date);
                    const dayName = date.toLocaleDateString('th-TH', { weekday: 'short' });

                    return `
                        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 0.5rem;">
                            <div style="font-size: 0.75rem; font-weight: 600; color: #3b82f6;">${day.total}</div>
                            <div style="width: 100%; height: ${height}%; min-height: 4px; background: linear-gradient(to top, #3b82f6, #60a5fa); border-radius: 4px 4px 0 0;"></div>
                            <div style="font-size: 0.75rem; color: #6b7280; white-space: nowrap;">${dayName}</div>
                        </div>
                    `;
                }).join('')}
            </div>
            <div style="text-align: center; margin-top: 1rem; font-size: 0.875rem; color: #6b7280;">
                รวม: ${stats.weeklyTrend.totalAppointments} นัดหมาย
            </div>
        </div>
    `;
}

/**
 * Get gradient background color for doctor cards
 * @param {number} index - Doctor index
 * @returns {string} Gradient color
 */
function getGradientColor(index) {
    const colors = [
        'rgba(59, 130, 246, 0.1)',
        'rgba(16, 185, 129, 0.1)',
        'rgba(245, 158, 11, 0.1)',
        'rgba(139, 92, 246, 0.1)',
        'rgba(236, 72, 153, 0.1)'
    ];
    return colors[index % colors.length];
}

/**
 * Get solid color for doctor ranking
 * @param {number} index - Doctor index
 * @returns {string} Color code
 */
function getDoctorColor(index) {
    const colors = [
        '#3b82f6', // Blue
        '#10b981', // Green
        '#f59e0b', // Orange
        '#8b5cf6', // Purple
        '#ec4899'  // Pink
    ];
    return colors[index % colors.length];
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
    const wardBeds = storage.get('wardBeds') || [];
    const wardRooms = storage.get('wardRooms') || [];
    const wards = storage.get('wards') || [];
    const patient = patients.find(p => p.hn === hn);

    if (patient) {
        // Find if patient has an assigned bed
        const assignedBed = wardBeds.find(b => b.patientHN === patient.hn && b.status === 'occupied');
        let bedInfo = null;
        if (assignedBed) {
            const room = wardRooms.find(r => r.id === assignedBed.roomId);
            const ward = wards.find(w => w.id === assignedBed.wardId);
            bedInfo = { bed: assignedBed, room, ward };
        }

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

                ${bedInfo ? `
                    <div style="margin-top: 1.5rem; padding: 1rem; background: #eff6ff; border-radius: 0.5rem; border-left: 3px solid #3b82f6;">
                        <h4 style="margin: 0 0 0.75rem 0; color: #1e40af;">🛏️ ข้อมูลการเข้าพัก</h4>
                        <p style="margin: 0.5rem 0;"><strong>หอผู้ป่วย:</strong> ${bedInfo.ward?.wardName || '-'}</p>
                        <p style="margin: 0.5rem 0;"><strong>ห้อง:</strong> ${bedInfo.room?.roomName || '-'} (${bedInfo.room?.roomNumber || '-'})</p>
                        <p style="margin: 0.5rem 0;"><strong>เตียง:</strong> ${bedInfo.bed.bedName} (${bedInfo.bed.bedNumber})</p>
                        <p style="margin: 0.5rem 0;"><strong>วันที่รับเข้า:</strong> ${bedInfo.bed.admissionDate ? new Date(bedInfo.bed.admissionDate).toLocaleDateString('th-TH') : '-'}</p>
                        <p style="margin: 0.5rem 0;"><strong>คาดว่าจำหน่าย:</strong> ${bedInfo.bed.expectedDischargeDate ? new Date(bedInfo.bed.expectedDischargeDate).toLocaleDateString('th-TH') : '-'}</p>
                        ${bedInfo.bed.specialCare ? '<p style="margin: 0.5rem 0; color: #f59e0b;"><strong>⚕️ ดูแลพิเศษ</strong></p>' : ''}
                        ${bedInfo.bed.isolation ? '<p style="margin: 0.5rem 0; color: #ef4444;"><strong>🚫 กักโรค</strong></p>' : ''}
                    </div>
                ` : `
                    <div style="margin-top: 1.5rem; padding: 1rem; background: #fef3c7; border-radius: 0.5rem; border-left: 3px solid #f59e0b;">
                        <p style="margin: 0; color: #92400e;">⚠️ ผู้ป่วยยังไม่ได้รับการมอบหมายเตียง</p>
                    </div>
                `}

                <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
                    ${bedInfo ? `
                        <button onclick="closeModal(); viewRoomBeds('${bedInfo.bed.roomId}')" class="btn btn-primary">
                            🛏️ ดูข้อมูลเตียง
                        </button>
                        <button onclick="dischargePatientFromBed('${bedInfo.bed.id}')" class="btn" style="background: #10b981; color: white;">
                            ↗️ จำหน่ายผู้ป่วย
                        </button>
                    ` : `
                        <button onclick="closeModal(); showAvailableBedsModal('${patient.id}')" class="btn btn-primary">
                            ➕ มอบหมายเตียง
                        </button>
                    `}
                    <button onclick="closeModal(); editPatient('${patient.hn}')" class="btn btn-secondary">
                        แก้ไข
                    </button>
                    <button onclick="closeModal()" class="btn btn-secondary">ปิด</button>
                </div>
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

            <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #e5e7eb;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
                    <h4 style="margin: 0; color: var(--primary-color);">📝 หมายเหตุ</h4>
                    <button class="btn btn-primary" onclick="quickEditNote('${appointment.id}')" style="padding: 0.4rem 0.8rem; font-size: 0.875rem;">
                        ✏️ แก้ไขหมายเหตุ
                    </button>
                </div>
                <div id="noteDisplay-${appointment.id}" style="padding: 1rem; background-color: ${appointment.note ? '#f0f9ff' : '#f9fafb'}; border-radius: 6px; border: 1px solid ${appointment.note ? '#bfdbfe' : '#e5e7eb'}; min-height: 60px;">
                    ${appointment.note ? `<p style="margin: 0; white-space: pre-wrap;">${appointment.note}</p>` : '<p style="margin: 0; color: #9ca3af; font-style: italic;">ยังไม่มีหมายเหตุ</p>'}
                </div>
                ${appointment.noteUpdatedAt ? `
                    <p style="margin-top: 0.5rem; font-size: 0.8rem; color: #6b7280;">
                        <em>แก้ไขล่าสุด: ${new Date(appointment.noteUpdatedAt).toLocaleString('th-TH')}</em>
                    </p>
                ` : ''}
            </div>

            <p style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 0.875rem;">
                <strong>วันที่สร้าง:</strong> ${new Date(appointment.createdAt).toLocaleString('th-TH')}
            </p>
        </div>
    `;

    modal.classList.add('active');
}

/**
 * Quick edit appointment note inline
 * @param {string} appointmentId - Appointment ID
 */
function quickEditNote(appointmentId) {
    const appointments = storage.get('appointments') || [];
    const appointment = appointments.find(apt => apt.id == appointmentId);

    if (!appointment) {
        alert('ไม่พบข้อมูลนัดหมาย');
        return;
    }

    const noteDisplay = document.getElementById(`noteDisplay-${appointmentId}`);
    const currentNote = appointment.note || '';

    // Replace display with edit form
    noteDisplay.innerHTML = `
        <div>
            <textarea id="editNoteTextarea-${appointmentId}"
                rows="4"
                maxlength="500"
                placeholder="กรอกหมายเหตุสำหรับนัดหมายนี้ (สูงสุด 500 ตัวอักษร)"
                style="width: 100%; padding: 0.75rem; border: 2px solid #3b82f6; border-radius: 6px; font-family: inherit; font-size: 1rem; resize: vertical;"
                oninput="updateNoteCharCount('${appointmentId}')">${currentNote}</textarea>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.5rem;">
                <span id="charCount-${appointmentId}" style="font-size: 0.875rem; color: #6b7280;">
                    ${currentNote.length}/500 ตัวอักษร
                </span>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn" onclick="cancelNoteEdit('${appointmentId}', \`${currentNote.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`)"
                        style="padding: 0.4rem 0.8rem; font-size: 0.875rem; background-color: #6b7280; color: white;">
                        ยกเลิก
                    </button>
                    <button class="btn btn-primary" onclick="saveNote('${appointmentId}')"
                        style="padding: 0.4rem 0.8rem; font-size: 0.875rem;">
                        💾 บันทึก
                    </button>
                </div>
            </div>
        </div>
    `;

    // Focus on textarea
    setTimeout(() => {
        const textarea = document.getElementById(`editNoteTextarea-${appointmentId}`);
        if (textarea) {
            textarea.focus();
            textarea.setSelectionRange(textarea.value.length, textarea.value.length);
        }
    }, 100);
}

/**
 * Update character count for note textarea
 * @param {string} appointmentId - Appointment ID
 */
function updateNoteCharCount(appointmentId) {
    const textarea = document.getElementById(`editNoteTextarea-${appointmentId}`);
    const charCount = document.getElementById(`charCount-${appointmentId}`);

    if (textarea && charCount) {
        const length = textarea.value.length;
        charCount.textContent = `${length}/500 ตัวอักษร`;

        // Change color based on character count
        if (length > 450) {
            charCount.style.color = '#ef4444'; // Red
        } else if (length > 400) {
            charCount.style.color = '#f59e0b'; // Orange
        } else {
            charCount.style.color = '#6b7280'; // Gray
        }
    }
}

/**
 * Save appointment note
 * @param {string} appointmentId - Appointment ID
 */
function saveNote(appointmentId) {
    const textarea = document.getElementById(`editNoteTextarea-${appointmentId}`);

    if (!textarea) {
        alert('เกิดข้อผิดพลาด: ไม่พบช่องกรอกข้อมูล');
        return;
    }

    const newNote = textarea.value.trim();
    const appointments = storage.get('appointments') || [];
    const appointmentIndex = appointments.findIndex(apt => apt.id == appointmentId);

    if (appointmentIndex === -1) {
        alert('ไม่พบข้อมูลนัดหมาย');
        return;
    }

    // Update note and timestamp
    appointments[appointmentIndex].note = newNote;
    appointments[appointmentIndex].noteUpdatedAt = new Date().toISOString();

    storage.set('appointments', appointments);

    // Show success message
    alert('บันทึกหมายเหตุสำเร็จ!');

    // Refresh the modal to show updated note
    viewAppointmentDetails(appointmentId);
}

/**
 * Cancel note editing and restore display
 * @param {string} appointmentId - Appointment ID
 * @param {string} originalNote - Original note text
 */
function cancelNoteEdit(appointmentId, originalNote) {
    const noteDisplay = document.getElementById(`noteDisplay-${appointmentId}`);

    if (!noteDisplay) return;

    // Restore original display
    if (originalNote) {
        noteDisplay.innerHTML = `<p style="margin: 0; white-space: pre-wrap;">${originalNote}</p>`;
    } else {
        noteDisplay.innerHTML = '<p style="margin: 0; color: #9ca3af; font-style: italic;">ยังไม่มีหมายเหตุ</p>';
    }
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

/**
 * Update appointment reminder badges on dashboard
 * Updates the notification counts for today's and upcoming appointments
 * Also shows/hides badge indicators based on reminder counts
 */
function updateAppointmentReminders() {
    // Get reminder counts
    const todayAppointments = getTodaysAppointments();
    const upcomingAppointments = getUpcomingAppointments(3);

    // Update today's reminders
    const todayElement = document.getElementById('todayReminders');
    const todayBadge = document.getElementById('todayReminderBadge');
    if (todayElement) {
        todayElement.textContent = todayAppointments.length;
        // Show badge if there are appointments today
        if (todayBadge) {
            todayBadge.style.display = todayAppointments.length > 0 ? 'block' : 'none';
        }
    }

    // Update upcoming reminders
    const upcomingElement = document.getElementById('upcomingReminders');
    const upcomingBadge = document.getElementById('upcomingReminderBadge');
    if (upcomingElement) {
        upcomingElement.textContent = upcomingAppointments.length;
        // Show badge if there are upcoming appointments
        if (upcomingBadge) {
            upcomingBadge.style.display = upcomingAppointments.length > 0 ? 'block' : 'none';
        }
    }
}

// ===== Doctors Functions =====
/**
 * Load and display all doctors in a modern card grid layout
 * Shows comprehensive doctor information with action buttons
 */
function loadDoctors() {
    const doctors = storage.get('doctors') || [];
    const grid = document.getElementById('doctorsGrid');
    const resultCount = document.getElementById('doctorResultCount');

    if (doctors.length === 0) {
        grid.innerHTML = `
            <div style="text-align: center; padding: 3rem 1rem; color: #6b7280; grid-column: 1 / -1;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">👨‍⚕️</div>
                <h3 style="margin: 0 0 0.5rem 0; color: #374151;">ยังไม่มีข้อมูลแพทย์</h3>
                <p style="margin: 0;">เริ่มต้นโดยการเพิ่มแพทย์ใหม่</p>
            </div>
        `;
        resultCount.innerHTML = '';
        return;
    }

    // Display doctor cards with modern design
    grid.innerHTML = doctors.map(doctor => {
        const statusConfig = getDoctorStatusConfig(doctor.status);
        return `
            <div class="doctor-card" style="background: white; border-radius: 12px; padding: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1); border-left: 4px solid ${statusConfig.color};">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div>
                        <h3 style="margin: 0 0 0.5rem 0; color: #1f2937; font-size: 1.25rem;">${doctor.name}</h3>
                        <div style="display: inline-block; padding: 0.25rem 0.75rem; background: ${statusConfig.bgColor}; color: ${statusConfig.textColor}; border-radius: 999px; font-size: 0.75rem; font-weight: 600;">
                            ${statusConfig.icon} ${statusConfig.label}
                        </div>
                    </div>
                </div>
                <div style="margin-bottom: 1rem; color: #4b5563;">
                    <p style="margin: 0.5rem 0; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-weight: 600; min-width: 80px;">🏥 แผนก:</span>
                        <span>${doctor.specialty}</span>
                    </p>
                    <p style="margin: 0.5rem 0; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-weight: 600; min-width: 80px;">📞 โทร:</span>
                        <span>${doctor.phone}</span>
                    </p>
                    <p style="margin: 0.5rem 0; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-weight: 600; min-width: 80px;">📧 Email:</span>
                        <span style="font-size: 0.875rem;">${doctor.email}</span>
                    </p>
                    <p style="margin: 0.5rem 0; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-weight: 600; min-width: 80px;">⏰ เวลา:</span>
                        <span style="font-size: 0.875rem;">${doctor.workingHours}</span>
                    </p>
                    <p style="margin: 0.5rem 0; display: flex; align-items: center; gap: 0.5rem;">
                        <span style="font-weight: 600; min-width: 80px;">📚 ประสบการณ์:</span>
                        <span>${doctor.experience}</span>
                    </p>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-top: 1rem;">
                    <button class="btn btn-secondary" onclick="viewDoctor(${doctor.id})" style="padding: 0.5rem; font-size: 0.875rem;">ดูรายละเอียด</button>
                    <button class="btn" onclick="viewDoctorSchedule(${doctor.id})" style="padding: 0.5rem; font-size: 0.875rem; background: #8b5cf6; color: white;">📅 ตารางเวลา</button>
                    <button class="btn btn-primary" onclick="editDoctor(${doctor.id})" style="padding: 0.5rem; font-size: 0.875rem;">แก้ไข</button>
                    <button class="btn" onclick="deleteDoctor(${doctor.id})" style="padding: 0.5rem; font-size: 0.875rem; background-color: #ef4444; color: white;">ลบ</button>
                </div>
            </div>
        `;
    }).join('');

    // Update result count
    resultCount.innerHTML = `พบแพทย์ทั้งหมด <strong>${doctors.length}</strong> คน`;
}

/**
 * Get status configuration for doctor status badges
 * @param {string} status - Doctor status (active, on-leave, busy)
 * @returns {Object} Status configuration
 */
function getDoctorStatusConfig(status) {
    const configs = {
        active: {
            label: 'ออกตรวจ',
            icon: '✅',
            color: '#10b981',
            bgColor: '#d1fae5',
            textColor: '#065f46'
        },
        'on-leave': {
            label: 'ลาพัก',
            icon: '🏖️',
            color: '#f59e0b',
            bgColor: '#fef3c7',
            textColor: '#92400e'
        },
        busy: {
            label: 'ไม่ว่าง',
            icon: '⏱️',
            color: '#ef4444',
            bgColor: '#fee2e2',
            textColor: '#991b1b'
        }
    };
    return configs[status] || configs.active;
}

// Add Doctor button event listener
document.getElementById('addDoctorBtn')?.addEventListener('click', () => {
    showAddDoctorModal();
});

/**
 * Show modal form for adding new doctor
 * Creates a comprehensive form with all required fields
 */
function showAddDoctorModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h3>เพิ่มแพทย์ใหม่</h3>
        <form id="addDoctorForm" style="margin-top: 1rem;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                <!-- Name -->
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ชื่อ-นามสกุล <span style="color: red;">*</span></label>
                    <input type="text" id="doctorName" required minlength="3" placeholder="นพ.สมชาย ใจดี" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <small style="color: #6b7280;">กรอกคำนำหน้า ชื่อ และนามสกุล</small>
                </div>

                <!-- Specialty -->
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">แผนก/ความเชี่ยวชาญ <span style="color: red;">*</span></label>
                    <select id="doctorSpecialty" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                        <option value="">-- เลือกแผนก --</option>
                        <option value="อายุรแพทย์">อายุรแพทย์</option>
                        <option value="ศัลยแพทย์">ศัลยแพทย์</option>
                        <option value="กุมารแพทย์">กุมารแพทย์</option>
                        <option value="สูติ-นรีเวชแพทย์">สูติ-นรีเวชแพทย์</option>
                        <option value="ออร์โธปิดิกส์">ออร์โธปิดิกส์</option>
                        <option value="จักษุแพทย์">จักษุแพทย์</option>
                        <option value="โสต ศอ นาสิก">โสต ศอ นาสิก</option>
                        <option value="รังสีแพทย์">รังสีแพทย์</option>
                        <option value="ทันตแพทย์">ทันตแพทย์</option>
                        <option value="จิตแพทย์">จิตแพทย์</option>
                        <option value="other">อื่นๆ</option>
                    </select>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                <!-- Phone -->
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">เบอร์โทร <span style="color: red;">*</span></label>
                    <input type="tel" id="doctorPhone" required pattern="[0-9]{9,10}" placeholder="0812345678" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <small style="color: #6b7280;">กรอกเบอร์โทรศัพท์ 9-10 หลัก</small>
                </div>

                <!-- Email -->
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email <span style="color: red;">*</span></label>
                    <input type="email" id="doctorEmail" required placeholder="doctor@hospital.com" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <small style="color: #6b7280;">อีเมลสำหรับการติดต่อ</small>
                </div>
            </div>

            <!-- Working Hours -->
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">เวลาทำงาน <span style="color: red;">*</span></label>
                <input type="text" id="doctorWorkingHours" required placeholder="จันทร์-ศุกร์ 08:00-17:00" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                <small style="color: #6b7280;">ระบุวันและเวลาทำงาน</small>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                <!-- Experience -->
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ประสบการณ์</label>
                    <input type="text" id="doctorExperience" placeholder="10 ปี" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>

                <!-- License Number -->
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">เลขที่ใบอนุญาต</label>
                    <input type="text" id="doctorLicenseNumber" placeholder="MD-2020-001234" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>

            <!-- Education -->
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">วุฒิการศึกษา</label>
                <textarea id="doctorEducation" rows="2" placeholder="แพทยศาสตร์บัณฑิต มหาวิทยาลัย..." style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); font-family: inherit;"></textarea>
            </div>

            <!-- Status -->
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">สถานะ <span style="color: red;">*</span></label>
                <select id="doctorStatus" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="active">ออกตรวจ</option>
                    <option value="on-leave">ลาพัก</option>
                    <option value="busy">ไม่ว่าง</option>
                </select>
            </div>

            <div id="formError" style="color: red; margin-bottom: 1rem; display: none;"></div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">บันทึกข้อมูลแพทย์</button>
        </form>
    `;

    modal.classList.add('active');

    // Handle form submission
    document.getElementById('addDoctorForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Validation
        const formError = document.getElementById('formError');
        const phone = document.getElementById('doctorPhone').value;
        const email = document.getElementById('doctorEmail').value;

        // Phone validation
        if (!/^[0-9]{9,10}$/.test(phone)) {
            formError.textContent = 'เบอร์โทรศัพท์ไม่ถูกต้อง กรุณากรอกตัวเลข 9-10 หลัก';
            formError.style.display = 'block';
            return;
        }

        // Email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formError.textContent = 'รูปแบบอีเมลไม่ถูกต้อง';
            formError.style.display = 'block';
            return;
        }

        formError.style.display = 'none';
        addDoctor();
    });
}

/**
 * Add new doctor to the system
 * Saves to localStorage and refreshes the display
 */
function addDoctor() {
    const doctors = storage.get('doctors') || [];
    const today = new Date().toISOString().split('T')[0];

    const newDoctor = {
        id: doctors.length > 0 ? Math.max(...doctors.map(d => d.id)) + 1 : 1,
        name: document.getElementById('doctorName').value,
        specialty: document.getElementById('doctorSpecialty').value,
        phone: document.getElementById('doctorPhone').value,
        email: document.getElementById('doctorEmail').value,
        workingHours: document.getElementById('doctorWorkingHours').value,
        experience: document.getElementById('doctorExperience').value || '-',
        education: document.getElementById('doctorEducation').value || '-',
        licenseNumber: document.getElementById('doctorLicenseNumber').value || '-',
        status: document.getElementById('doctorStatus').value,
        registrationDate: today
    };

    doctors.push(newDoctor);
    storage.set('doctors', doctors);

    // Close modal
    document.getElementById('modal').classList.remove('active');

    // Reload doctors list
    loadDoctors();

    // Update dashboard
    loadDashboard();

    // Show success message (optional)
    alert(`เพิ่มข้อมูลแพทย์ ${newDoctor.name} เรียบร้อยแล้ว!`);
}

/**
 * View comprehensive doctor profile with tabbed interface
 * @param {number} doctorId - Doctor ID
 */
function viewDoctor(doctorId) {
    const doctors = storage.get('doctors') || [];
    const doctor = doctors.find(d => d.id === doctorId);

    if (!doctor) {
        alert('ไม่พบข้อมูลแพทย์');
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const statusConfig = getDoctorStatusConfig(doctor.status);

    // Get appointment statistics for this doctor
    const appointments = storage.get('appointments') || [];
    const doctorAppointments = appointments.filter(a => a.doctorId === doctor.id);
    const completedCount = doctorAppointments.filter(a => a.status === 'confirmed' && new Date(a.date) < new Date()).length;
    const upcomingCount = doctorAppointments.filter(a => a.status !== 'cancelled' && new Date(a.date) >= new Date()).length;

    // Profile photo (placeholder if no photo)
    const profilePhoto = doctor.photo || `
        <div style="width: 120px; height: 120px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white;">
            ${doctor.name.charAt(0)}
        </div>
    `;

    modalBody.innerHTML = `
        <style>
            .profile-tabs {
                display: flex;
                gap: 1rem;
                border-bottom: 2px solid #e5e7eb;
                margin-bottom: 1.5rem;
            }
            .profile-tab {
                padding: 0.75rem 1rem;
                cursor: pointer;
                border: none;
                background: none;
                color: #6b7280;
                font-weight: 500;
                border-bottom: 2px solid transparent;
                margin-bottom: -2px;
                transition: all 0.3s;
            }
            .profile-tab:hover {
                color: #3b82f6;
            }
            .profile-tab.active {
                color: #3b82f6;
                border-bottom-color: #3b82f6;
            }
            .profile-tab-content {
                display: none;
            }
            .profile-tab-content.active {
                display: block;
            }
        </style>

        <div style="max-height: 80vh; overflow-y: auto; padding-right: 1rem;">
            <!-- Profile Header -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 2rem; border-radius: 12px; color: white; margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 2rem;">
                    ${typeof doctor.photo === 'string' && doctor.photo ? `<img src="${doctor.photo}" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 4px solid rgba(255,255,255,0.3);">` : profilePhoto}
                    <div style="flex: 1;">
                        <h2 style="margin: 0 0 0.5rem 0;">${doctor.name}</h2>
                        <p style="margin: 0 0 0.5rem 0; font-size: 1.125rem; opacity: 0.9;">${doctor.specialty}</p>
                        <div style="display: flex; gap: 0.75rem; margin-top: 1rem;">
                            <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border-radius: 999px; font-size: 0.875rem;">
                                ${statusConfig.icon} ${statusConfig.label}
                            </div>
                            <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border-radius: 999px; font-size: 0.875rem;">
                                📍 ${doctor.roomNumber}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tabs Navigation -->
            <div class="profile-tabs">
                <button class="profile-tab active" onclick="switchProfileTab('overview', ${doctor.id})">ภาพรวม</button>
                <button class="profile-tab" onclick="switchProfileTab('education', ${doctor.id})">การศึกษา</button>
                <button class="profile-tab" onclick="switchProfileTab('about', ${doctor.id})">เกี่ยวกับ</button>
                <button class="profile-tab" onclick="switchProfileTab('statistics', ${doctor.id})">สถิติ</button>
            </div>

            <!-- Tab Content: Overview -->
            <div id="profile-tab-overview" class="profile-tab-content active">
                <div style="display: grid; gap: 1rem;">
                    <!-- Contact Information -->
                    <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                        <h4 style="margin: 0 0 1rem 0; color: #1f2937;">📞 ข้อมูลติดต่อ</h4>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                            <div>
                                <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">โทรศัพท์</p>
                                <p style="margin: 0.25rem 0 0 0; font-weight: 600;">${doctor.phone}</p>
                            </div>
                            <div>
                                <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">อีเมล</p>
                                <p style="margin: 0.25rem 0 0 0; font-weight: 600; font-size: 0.875rem;">${doctor.email}</p>
                            </div>
                            <div>
                                <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">เวลาทำงาน</p>
                                <p style="margin: 0.25rem 0 0 0; font-weight: 600;">${doctor.workingHours}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Professional Info -->
                    <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                        <h4 style="margin: 0 0 1rem 0; color: #1f2937;">🏥 ข้อมูลวิชาชีพ</h4>
                        <div style="display: grid; gap: 1rem;">
                            <div>
                                <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">ประสบการณ์</p>
                                <p style="margin: 0.25rem 0 0 0; font-weight: 600;">${doctor.experience}</p>
                            </div>
                            <div>
                                <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">เลขที่ใบอนุญาต</p>
                                <p style="margin: 0.25rem 0 0 0; font-weight: 600;">${doctor.licenseNumber}</p>
                            </div>
                            <div>
                                <p style="margin: 0; font-size: 0.875rem; color: #6b7280;">ภาษาที่พูดได้</p>
                                <p style="margin: 0.25rem 0 0 0; font-weight: 600;">${doctor.languages.join(', ')}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Specializations -->
                    ${doctor.specializations && doctor.specializations.length > 0 ? `
                    <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                        <h4 style="margin: 0 0 1rem 0; color: #1f2937;">⭐ ความเชี่ยวชาญเฉพาะทาง</h4>
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                            ${doctor.specializations.map(s => `
                                <span style="padding: 0.5rem 1rem; background: white; border: 1px solid #e5e7eb; border-radius: 999px; font-size: 0.875rem;">
                                    ${s}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                    ` : ''}
                </div>
            </div>

            <!-- Tab Content: Education -->
            <div id="profile-tab-education" class="profile-tab-content">
                <div style="display: grid; gap: 1rem;">
                    <!-- Education -->
                    <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                        <h4 style="margin: 0 0 1rem 0; color: #1f2937;">🎓 การศึกษา</h4>
                        <p style="margin: 0; line-height: 1.6;">${doctor.education}</p>
                    </div>

                    <!-- Certifications -->
                    ${doctor.certifications && doctor.certifications.length > 0 ? `
                    <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                        <h4 style="margin: 0 0 1rem 0; color: #1f2937;">📜 ใบรับรองวิชาชีพ</h4>
                        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
                            ${doctor.certifications.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}

                    <!-- Memberships -->
                    ${doctor.memberships && doctor.memberships.length > 0 ? `
                    <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                        <h4 style="margin: 0 0 1rem 0; color: #1f2937;">👥 สมาชิกภาพทางวิชาชีพ</h4>
                        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
                            ${doctor.memberships.map(m => `<li>${m}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}

                    <!-- Awards -->
                    ${doctor.awards && doctor.awards.length > 0 ? `
                    <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                        <h4 style="margin: 0 0 1rem 0; color: #1f2937;">🏆 รางวัลและความสำเร็จ</h4>
                        <ul style="margin: 0; padding-left: 1.5rem; line-height: 1.8;">
                            ${doctor.awards.map(a => `<li>${a}</li>`).join('')}
                        </ul>
                    </div>
                    ` : ''}
                </div>
            </div>

            <!-- Tab Content: About -->
            <div id="profile-tab-about" class="profile-tab-content">
                <div style="display: grid; gap: 1rem;">
                    <!-- Biography -->
                    <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                        <h4 style="margin: 0 0 1rem 0; color: #1f2937;">📝 ประวัติและแนะนำตัว</h4>
                        <p style="margin: 0; line-height: 1.8; color: #374151;">${doctor.bio}</p>
                    </div>

                    <!-- Research Interests -->
                    ${doctor.researchInterests ? `
                    <div style="background: #f9fafb; padding: 1.5rem; border-radius: 8px;">
                        <h4 style="margin: 0 0 1rem 0; color: #1f2937;">🔬 ความสนใจด้านวิจัย</h4>
                        <p style="margin: 0; line-height: 1.8; color: #374151;">${doctor.researchInterests}</p>
                    </div>
                    ` : ''}
                </div>
            </div>

            <!-- Tab Content: Statistics -->
            <div id="profile-tab-statistics" class="profile-tab-content">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 1.5rem; border-radius: 12px; color: white;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">👥</div>
                        <div style="font-size: 2rem; font-weight: 700; margin-bottom: 0.25rem;">${doctor.patientsCount}</div>
                        <div style="font-size: 0.875rem; opacity: 0.9;">ผู้ป่วยทั้งหมด</div>
                    </div>

                    <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 1.5rem; border-radius: 12px; color: white;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">✅</div>
                        <div style="font-size: 2rem; font-weight: 700; margin-bottom: 0.25rem;">${doctor.appointmentsCompleted}</div>
                        <div style="font-size: 0.875rem; opacity: 0.9;">นัดหมายที่เสร็จสิ้น</div>
                    </div>

                    <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 1.5rem; border-radius: 12px; color: white;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📅</div>
                        <div style="font-size: 2rem; font-weight: 700; margin-bottom: 0.25rem;">${upcomingCount}</div>
                        <div style="font-size: 0.875rem; opacity: 0.9;">นัดหมายที่กำลังจะถึง</div>
                    </div>

                    <div style="background: linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%); padding: 1.5rem; border-radius: 12px; color: white;">
                        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">⏱️</div>
                        <div style="font-size: 2rem; font-weight: 700; margin-bottom: 0.25rem;">${doctor.experience}</div>
                        <div style="font-size: 0.875rem; opacity: 0.9;">ประสบการณ์</div>
                    </div>
                </div>
            </div>

            <!-- Action Buttons -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2rem;">
                <button onclick="editDoctor(${doctor.id})" class="btn btn-primary" style="width: 100%;">✏️ แก้ไขข้อมูล</button>
                <button onclick="document.getElementById('modal').classList.remove('active')" class="btn btn-secondary" style="width: 100%;">ปิด</button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

/**
 * Switch between profile tabs
 * @param {string} tabName - Tab name to switch to
 * @param {number} doctorId - Doctor ID (unused but kept for future use)
 */
function switchProfileTab(tabName, doctorId) {
    // Remove active class from all tabs
    document.querySelectorAll('.profile-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.profile-tab-content').forEach(content => content.classList.remove('active'));

    // Add active class to selected tab
    event.target.classList.add('active');
    document.getElementById(`profile-tab-${tabName}`).classList.add('active');
}

/**
 * Upload doctor profile photo
 * @param {number} doctorId - Doctor ID
 * @param {File} file - Image file to upload
 */
function uploadDoctorPhoto(doctorId, file) {
    if (!file || !file.type.startsWith('image/')) {
        alert('กรุณาเลือกไฟล์รูปภาพ');
        return;
    }

    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
        alert('ไฟล์รูปภาพต้องมีขนาดไม่เกิน 2MB');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const base64Image = e.target.result;

        // Update doctor photo
        const doctors = storage.get('doctors') || [];
        const doctorIndex = doctors.findIndex(d => d.id === doctorId);

        if (doctorIndex !== -1) {
            doctors[doctorIndex].photo = base64Image;
            storage.set('doctors', doctors);

            // Refresh display
            document.getElementById('modal').classList.remove('active');
            loadDoctors();

            alert('อัพโหลดรูปโปรไฟล์สำเร็จ!');
        }
    };

    reader.readAsDataURL(file);
}

/**
 * Remove doctor profile photo
 * @param {number} doctorId - Doctor ID
 */
function removeDoctorPhoto(doctorId) {
    const confirmed = confirm('คุณต้องการลบรูปโปรไฟล์ใช่หรือไม่?');

    if (confirmed) {
        const doctors = storage.get('doctors') || [];
        const doctorIndex = doctors.findIndex(d => d.id === doctorId);

        if (doctorIndex !== -1) {
            doctors[doctorIndex].photo = null;
            storage.set('doctors', doctors);

            // Refresh display
            document.getElementById('modal').classList.remove('active');
            loadDoctors();

            alert('ลบรูปโปรไฟล์สำเร็จ!');
        }
    }
}

/**
 * Edit doctor information
 * @param {number} doctorId - Doctor ID
 */
function editDoctor(doctorId) {
    const doctors = storage.get('doctors') || [];
    const doctor = doctors.find(d => d.id === doctorId);

    if (!doctor) {
        alert('ไม่พบข้อมูลแพทย์');
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h3>แก้ไขข้อมูลแพทย์</h3>
        <form id="editDoctorForm" style="margin-top: 1rem;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ชื่อ-นามสกุล <span style="color: red;">*</span></label>
                    <input type="text" id="editDoctorName" required value="${doctor.name}" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">แผนก <span style="color: red;">*</span></label>
                    <select id="editDoctorSpecialty" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                        <option value="อายุรแพทย์" ${doctor.specialty === 'อายุรแพทย์' ? 'selected' : ''}>อายุรแพทย์</option>
                        <option value="ศัลยแพทย์" ${doctor.specialty === 'ศัลยแพทย์' ? 'selected' : ''}>ศัลยแพทย์</option>
                        <option value="กุมารแพทย์" ${doctor.specialty === 'กุมารแพทย์' ? 'selected' : ''}>กุมารแพทย์</option>
                        <option value="สูติ-นรีเวชแพทย์" ${doctor.specialty === 'สูติ-นรีเวชแพทย์' ? 'selected' : ''}>สูติ-นรีเวชแพทย์</option>
                        <option value="ออร์โธปิดิกส์" ${doctor.specialty === 'ออร์โธปิดิกส์' ? 'selected' : ''}>ออร์โธปิดิกส์</option>
                        <option value="จักษุแพทย์" ${doctor.specialty === 'จักษุแพทย์' ? 'selected' : ''}>จักษุแพทย์</option>
                        <option value="โสต ศอ นาสิก" ${doctor.specialty === 'โสต ศอ นาสิก' ? 'selected' : ''}>โสต ศอ นาสิก</option>
                        <option value="รังสีแพทย์" ${doctor.specialty === 'รังสีแพทย์' ? 'selected' : ''}>รังสีแพทย์</option>
                        <option value="ทันตแพทย์" ${doctor.specialty === 'ทันตแพทย์' ? 'selected' : ''}>ทันตแพทย์</option>
                        <option value="จิตแพทย์" ${doctor.specialty === 'จิตแพทย์' ? 'selected' : ''}>จิตแพทย์</option>
                    </select>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">เบอร์โทร <span style="color: red;">*</span></label>
                    <input type="tel" id="editDoctorPhone" required value="${doctor.phone}" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email <span style="color: red;">*</span></label>
                    <input type="email" id="editDoctorEmail" required value="${doctor.email}" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">เวลาทำงาน <span style="color: red;">*</span></label>
                <input type="text" id="editDoctorWorkingHours" required value="${doctor.workingHours}" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ประสบการณ์</label>
                    <input type="text" id="editDoctorExperience" value="${doctor.experience}" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div style="margin-bottom: 1rem;">
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">เลขที่ใบอนุญาต</label>
                    <input type="text" id="editDoctorLicenseNumber" value="${doctor.licenseNumber}" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">วุฒิการศึกษา</label>
                <textarea id="editDoctorEducation" rows="2" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); font-family: inherit;">${doctor.education}</textarea>
            </div>
            <div style="margin-bottom: 1rem;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">สถานะ <span style="color: red;">*</span></label>
                <select id="editDoctorStatus" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="active" ${doctor.status === 'active' ? 'selected' : ''}>ออกตรวจ</option>
                    <option value="on-leave" ${doctor.status === 'on-leave' ? 'selected' : ''}>ลาพัก</option>
                    <option value="busy" ${doctor.status === 'busy' ? 'selected' : ''}>ไม่ว่าง</option>
                </select>
            </div>
            <div id="formError" style="color: red; margin-bottom: 1rem; display: none;"></div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">บันทึกการเปลี่ยนแปลง</button>
        </form>
    `;

    modal.classList.add('active');

    // Handle form submission
    document.getElementById('editDoctorForm').addEventListener('submit', (e) => {
        e.preventDefault();

        // Validation
        const formError = document.getElementById('formError');
        const phone = document.getElementById('editDoctorPhone').value;
        const email = document.getElementById('editDoctorEmail').value;

        if (!/^[0-9]{9,10}$/.test(phone)) {
            formError.textContent = 'เบอร์โทรศัพท์ไม่ถูกต้อง';
            formError.style.display = 'block';
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formError.textContent = 'รูปแบบอีเมลไม่ถูกต้อง';
            formError.style.display = 'block';
            return;
        }

        // Update doctor data
        const doctorIndex = doctors.findIndex(d => d.id === doctorId);
        doctors[doctorIndex] = {
            ...doctors[doctorIndex],
            name: document.getElementById('editDoctorName').value,
            specialty: document.getElementById('editDoctorSpecialty').value,
            phone: phone,
            email: email,
            workingHours: document.getElementById('editDoctorWorkingHours').value,
            experience: document.getElementById('editDoctorExperience').value || '-',
            education: document.getElementById('editDoctorEducation').value || '-',
            licenseNumber: document.getElementById('editDoctorLicenseNumber').value || '-',
            status: document.getElementById('editDoctorStatus').value
        };

        storage.set('doctors', doctors);
        modal.classList.remove('active');
        loadDoctors();
        loadDashboard();
        alert('อัพเดทข้อมูลแพทย์เรียบร้อยแล้ว!');
    });
}

/**
 * Delete doctor with confirmation
 * @param {number} doctorId - Doctor ID
 */
function deleteDoctor(doctorId) {
    const doctors = storage.get('doctors') || [];
    const doctor = doctors.find(d => d.id === doctorId);

    if (!doctor) {
        alert('ไม่พบข้อมูลแพทย์');
        return;
    }

    // Confirmation dialog
    const confirmed = confirm(`คุณต้องการลบข้อมูลแพทย์ "${doctor.name}" ใช่หรือไม่?\n\nการดำเนินการนี้ไม่สามารถย้อนกลับได้`);

    if (confirmed) {
        const updatedDoctors = doctors.filter(d => d.id !== doctorId);
        storage.set('doctors', updatedDoctors);
        loadDoctors();
        loadDashboard();
        alert(`ลบข้อมูลแพทย์ ${doctor.name} เรียบร้อยแล้ว`);
    }
}

// ===== Doctor Schedule Management Functions (Day 17) =====

/**
 * Get doctor schedule by doctor ID
 * @param {number} doctorId - Doctor ID
 * @returns {Object|null} Schedule object or null if not found
 */
function getDoctorSchedule(doctorId) {
    const schedules = storage.get('doctorSchedules') || [];
    return schedules.find(s => s.doctorId === doctorId) || null;
}

/**
 * Show doctor schedule management modal
 * @param {number} doctorId - Doctor ID
 */
function showDoctorScheduleModal(doctorId) {
    const doctors = storage.get('doctors') || [];
    const doctor = doctors.find(d => d.id === doctorId);

    if (!doctor) {
        alert('ไม่พบข้อมูลแพทย์');
        return;
    }

    const schedule = getDoctorSchedule(doctorId);
    const weeklySchedule = schedule ? schedule.weeklySchedule : {
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
        sunday: []
    };

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    const dayNames = {
        monday: 'จันทร์',
        tuesday: 'อังคาร',
        wednesday: 'พุธ',
        thursday: 'พฤหัสบดี',
        friday: 'ศุกร์',
        saturday: 'เสาร์',
        sunday: 'อาทิตย์'
    };

    modalBody.innerHTML = `
        <style>
            .schedule-grid {
                display: grid;
                gap: 1rem;
                margin-top: 1.5rem;
            }
            .schedule-day-card {
                background: #f9fafb;
                border-radius: 8px;
                padding: 1rem;
                border: 2px solid #e5e7eb;
            }
            .schedule-day-card.has-schedule {
                border-color: #3b82f6;
                background: #eff6ff;
            }
            .schedule-day-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.75rem;
            }
            .schedule-slots {
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
            }
            .schedule-slot {
                display: grid;
                grid-template-columns: 1fr 1fr 2fr auto;
                gap: 0.5rem;
                align-items: center;
                padding: 0.5rem;
                background: white;
                border-radius: 4px;
                border: 1px solid #e5e7eb;
            }
            .schedule-slot input, .schedule-slot select {
                padding: 0.5rem;
                border: 1px solid #d1d5db;
                border-radius: 4px;
                font-size: 0.875rem;
            }
            .btn-add-slot {
                padding: 0.5rem 1rem;
                background: #3b82f6;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.875rem;
            }
            .btn-add-slot:hover {
                background: #2563eb;
            }
            .btn-remove-slot {
                padding: 0.25rem 0.5rem;
                background: #ef4444;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 0.75rem;
            }
            .btn-remove-slot:hover {
                background: #dc2626;
            }
        </style>

        <h3 style="margin: 0 0 0.5rem 0;">📅 จัดการตารางเวลา - ${doctor.name}</h3>
        <p style="margin: 0 0 1.5rem 0; color: #6b7280; font-size: 0.875rem;">กำหนดเวลาทำงานของแพทย์ในแต่ละวัน</p>

        <div class="schedule-grid" id="scheduleGrid">
            ${Object.keys(dayNames).map(day => {
                const daySchedule = weeklySchedule[day] || [];
                return `
                    <div class="schedule-day-card ${daySchedule.length > 0 ? 'has-schedule' : ''}" id="day-${day}">
                        <div class="schedule-day-header">
                            <h4 style="margin: 0; color: #1f2937;">${dayNames[day]}</h4>
                            <button type="button" class="btn-add-slot" onclick="addTimeSlot('${day}')">+ เพิ่มช่วงเวลา</button>
                        </div>
                        <div class="schedule-slots" id="slots-${day}">
                            ${daySchedule.length > 0 ? daySchedule.map((slot, index) => `
                                <div class="schedule-slot">
                                    <input type="time" value="${slot.startTime}" data-day="${day}" data-index="${index}" data-field="startTime" class="slot-input">
                                    <input type="time" value="${slot.endTime}" data-day="${day}" data-index="${index}" data-field="endTime" class="slot-input">
                                    <input type="text" value="${slot.location || ''}" placeholder="สถานที่" data-day="${day}" data-index="${index}" data-field="location" class="slot-input">
                                    <button type="button" class="btn-remove-slot" onclick="removeTimeSlot('${day}', ${index})">ลบ</button>
                                </div>
                            `).join('') : '<p style="margin: 0; color: #9ca3af; font-size: 0.875rem;">ไม่มีช่วงเวลาทำงาน</p>'}
                        </div>
                    </div>
                `;
            }).join('')}
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 2rem; padding-top: 1.5rem; border-top: 2px solid #e5e7eb;">
            <button type="button" onclick="closeModal()" class="btn btn-secondary">ยกเลิก</button>
            <button type="button" onclick="saveDoctorSchedule(${doctorId})" class="btn btn-primary">💾 บันทึกตารางเวลา</button>
        </div>
    `;

    modal.classList.add('active');

    // Store current schedule data in a global variable for manipulation
    window.currentScheduleData = JSON.parse(JSON.stringify(weeklySchedule));
}

/**
 * Add a new time slot to a specific day
 * @param {string} day - Day name (monday, tuesday, etc.)
 */
function addTimeSlot(day) {
    if (!window.currentScheduleData) {
        window.currentScheduleData = {};
    }
    if (!window.currentScheduleData[day]) {
        window.currentScheduleData[day] = [];
    }

    window.currentScheduleData[day].push({
        startTime: '09:00',
        endTime: '17:00',
        type: 'consultation',
        location: ''
    });

    // Re-render the specific day
    renderDaySlots(day);
}

/**
 * Remove a time slot from a specific day
 * @param {string} day - Day name
 * @param {number} index - Slot index to remove
 */
function removeTimeSlot(day, index) {
    if (window.currentScheduleData && window.currentScheduleData[day]) {
        window.currentScheduleData[day].splice(index, 1);
        renderDaySlots(day);
    }
}

/**
 * Re-render slots for a specific day
 * @param {string} day - Day name
 */
function renderDaySlots(day) {
    const dayNames = {
        monday: 'จันทร์',
        tuesday: 'อังคาร',
        wednesday: 'พุธ',
        thursday: 'พฤหัสบดี',
        friday: 'ศุกร์',
        saturday: 'เสาร์',
        sunday: 'อาทิตย์'
    };

    const slotsContainer = document.getElementById(`slots-${day}`);
    const dayCard = document.getElementById(`day-${day}`);
    const daySchedule = window.currentScheduleData[day] || [];

    // Update card style
    if (daySchedule.length > 0) {
        dayCard.classList.add('has-schedule');
    } else {
        dayCard.classList.remove('has-schedule');
    }

    if (daySchedule.length === 0) {
        slotsContainer.innerHTML = '<p style="margin: 0; color: #9ca3af; font-size: 0.875rem;">ไม่มีช่วงเวลาทำงาน</p>';
    } else {
        slotsContainer.innerHTML = daySchedule.map((slot, index) => `
            <div class="schedule-slot">
                <input type="time" value="${slot.startTime}" data-day="${day}" data-index="${index}" data-field="startTime" class="slot-input" onchange="updateSlotField(this)">
                <input type="time" value="${slot.endTime}" data-day="${day}" data-index="${index}" data-field="endTime" class="slot-input" onchange="updateSlotField(this)">
                <input type="text" value="${slot.location || ''}" placeholder="สถานที่" data-day="${day}" data-index="${index}" data-field="location" class="slot-input" onchange="updateSlotField(this)">
                <button type="button" class="btn-remove-slot" onclick="removeTimeSlot('${day}', ${index})">ลบ</button>
            </div>
        `).join('');
    }
}

/**
 * Update slot field value in current schedule data
 * @param {HTMLElement} input - Input element
 */
function updateSlotField(input) {
    const day = input.getAttribute('data-day');
    const index = parseInt(input.getAttribute('data-index'));
    const field = input.getAttribute('data-field');
    const value = input.value;

    if (window.currentScheduleData && window.currentScheduleData[day] && window.currentScheduleData[day][index]) {
        window.currentScheduleData[day][index][field] = value;
    }
}

/**
 * Save doctor schedule to storage
 * @param {number} doctorId - Doctor ID
 */
function saveDoctorSchedule(doctorId) {
    // Collect all data from inputs
    document.querySelectorAll('.slot-input').forEach(input => {
        updateSlotField(input);
    });

    const schedules = storage.get('doctorSchedules') || [];
    const existingScheduleIndex = schedules.findIndex(s => s.doctorId === doctorId);

    const scheduleData = {
        id: existingScheduleIndex >= 0 ? schedules[existingScheduleIndex].id : `schedule-${Date.now()}`,
        doctorId: doctorId,
        weeklySchedule: window.currentScheduleData,
        effectiveDate: existingScheduleIndex >= 0 ? schedules[existingScheduleIndex].effectiveDate : new Date().toISOString().split('T')[0],
        createdAt: existingScheduleIndex >= 0 ? schedules[existingScheduleIndex].createdAt : new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    if (existingScheduleIndex >= 0) {
        schedules[existingScheduleIndex] = scheduleData;
    } else {
        schedules.push(scheduleData);
    }

    storage.set('doctorSchedules', schedules);
    closeModal();
    loadDoctors();
    alert('✅ บันทึกตารางเวลาสำเร็จ!');
}

/**
 * View doctor schedule (read-only)
 * @param {number} doctorId - Doctor ID
 */
function viewDoctorSchedule(doctorId) {
    const doctors = storage.get('doctors') || [];
    const doctor = doctors.find(d => d.id === doctorId);
    const schedule = getDoctorSchedule(doctorId);

    if (!doctor) {
        alert('ไม่พบข้อมูลแพทย์');
        return;
    }

    if (!schedule) {
        alert('⚠️ แพทย์ท่านนี้ยังไม่มีตารางเวลา\n\nกรุณากำหนดตารางเวลาก่อน');
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    const dayNames = {
        monday: 'จันทร์',
        tuesday: 'อังคาร',
        wednesday: 'พุธ',
        thursday: 'พฤหัสบดี',
        friday: 'ศุกร์',
        saturday: 'เสาร์',
        sunday: 'อาทิตย์'
    };

    modalBody.innerHTML = `
        <h3 style="margin: 0 0 0.5rem 0;">📅 ตารางเวลาทำงาน - ${doctor.name}</h3>
        <p style="margin: 0 0 1.5rem 0; color: #6b7280; font-size: 0.875rem;">ตารางเวลาปัจจุบัน</p>

        <div style="display: grid; gap: 1rem;">
            ${Object.keys(dayNames).map(day => {
                const daySchedule = schedule.weeklySchedule[day] || [];
                return `
                    <div style="background: ${daySchedule.length > 0 ? '#eff6ff' : '#f9fafb'}; border-radius: 8px; padding: 1rem; border: 2px solid ${daySchedule.length > 0 ? '#3b82f6' : '#e5e7eb'};">
                        <h4 style="margin: 0 0 0.75rem 0; color: #1f2937;">${dayNames[day]}</h4>
                        ${daySchedule.length > 0 ? `
                            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                                ${daySchedule.map(slot => `
                                    <div style="display: flex; gap: 1rem; padding: 0.5rem; background: white; border-radius: 4px; align-items: center;">
                                        <span style="font-weight: 600; color: #3b82f6;">⏰ ${slot.startTime} - ${slot.endTime}</span>
                                        ${slot.location ? `<span style="color: #6b7280;">📍 ${slot.location}</span>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        ` : '<p style="margin: 0; color: #9ca3af; font-size: 0.875rem;">วันหยุด</p>'}
                    </div>
                `;
            }).join('')}
        </div>

        <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1.5rem;">
            <button onclick="closeModal()" class="btn btn-secondary">ปิด</button>
            <button onclick="closeModal(); showDoctorScheduleModal(${doctorId})" class="btn btn-primary">✏️ แก้ไขตารางเวลา</button>
        </div>
    `;

    modal.classList.add('active');
}

// ===== Ward Management Functions =====

/**
 * Load and display all wards in card view
 * Shows ward data with statistics and status badges
 */
function loadWards() {
    const wards = storage.get('wards') || [];
    const grid = document.getElementById('wardsGrid');
    const resultCount = document.getElementById('wardResultCount');

    if (wards.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: white; border-radius: var(--border-radius); box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🏥</div>
                <h3 style="margin: 0 0 0.5rem 0; color: #374151;">ยังไม่มีข้อมูลหอผู้ป่วย</h3>
                <p style="margin: 0; color: #6b7280;">กรุณาเพิ่มข้อมูลหอผู้ป่วยเข้าสู่ระบบ</p>
            </div>
        `;
        updateWardResultCount(0, 0);
        return;
    }

    // Sort wards by wardCode
    const sortedWards = [...wards].sort((a, b) => a.wardCode.localeCompare(b.wardCode));

    grid.innerHTML = sortedWards.map(ward => {
        const occupancyRate = ward.totalBeds > 0 ? ((ward.occupiedBeds / ward.totalBeds) * 100).toFixed(1) : 0;

        // Status badge
        const statusConfig = {
            'active': { label: 'ใช้งาน', color: '#10b981', bgColor: '#d1fae5' },
            'maintenance': { label: 'ปิดบำรุง', color: '#f59e0b', bgColor: '#fef3c7' },
            'closed': { label: 'ปิดชั่วคราว', color: '#ef4444', bgColor: '#fee2e2' }
        };
        const status = statusConfig[ward.status] || statusConfig.active;

        // Ward type badge
        const typeLabel = ward.wardType === 'general' ? 'หอสามัญ (นับเตียง)' : 'หอพิเศษ (นับห้อง)';
        const typeColor = ward.wardType === 'general' ? '#3b82f6' : '#8b5cf6';

        return `
            <div style="background: white; border-radius: var(--border-radius); box-shadow: 0 2px 8px rgba(0,0,0,0.1); padding: 1.5rem; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; border-left: 4px solid ${typeColor};"
                 onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)';"
                 onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)';">

                <!-- Header -->
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div style="flex: 1;">
                        <h3 style="margin: 0 0 0.25rem 0; color: #1f2937; font-size: 1.25rem;">
                            ${ward.wardName}
                        </h3>
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">
                            รหัส: ${ward.wardCode} | แผนก ${ward.department}
                        </p>
                    </div>
                    <span style="padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600; background: ${status.bgColor}; color: ${status.color};">
                        ${status.label}
                    </span>
                </div>

                <!-- Ward Info -->
                <div style="background: #f9fafb; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.875rem;">
                        <div>
                            <p style="margin: 0; color: #6b7280;">📍 สถานที่</p>
                            <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151;">${ward.building}</p>
                            <p style="margin: 0; color: #9ca3af; font-size: 0.75rem;">ชั้น ${ward.floor}</p>
                        </div>
                        <div>
                            <p style="margin: 0; color: #6b7280;">👩‍⚕️ พยาบาลหัวหน้า</p>
                            <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151;">${ward.headNurse}</p>
                            <p style="margin: 0; color: #9ca3af; font-size: 0.75rem;">${ward.nursingStation}</p>
                        </div>
                    </div>
                </div>

                <!-- Statistics -->
                <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 1rem; border-radius: 0.5rem; color: white; margin-bottom: 1rem;">
                    <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; opacity: 0.9;">📊 สถิติการใช้งาน</p>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; text-align: center;">
                        <div>
                            <p style="margin: 0; font-size: 1.5rem; font-weight: 700;">${ward.totalBeds}</p>
                            <p style="margin: 0; font-size: 0.75rem; opacity: 0.9;">เตียงทั้งหมด</p>
                        </div>
                        <div>
                            <p style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #fbbf24;">${ward.occupiedBeds}</p>
                            <p style="margin: 0; font-size: 0.75rem; opacity: 0.9;">ไม่ว่าง</p>
                        </div>
                        <div>
                            <p style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #10b981;">${ward.availableBeds}</p>
                            <p style="margin: 0; font-size: 0.75rem; opacity: 0.9;">ว่าง</p>
                        </div>
                    </div>
                    <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.2);">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem;">อัตราการใช้งาน</span>
                            <span style="font-size: 1.125rem; font-weight: 700;">${occupancyRate}%</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.3); height: 8px; border-radius: 999px; margin-top: 0.5rem; overflow: hidden;">
                            <div style="background: #fbbf24; height: 100%; width: ${occupancyRate}%; transition: width 0.3s;"></div>
                        </div>
                    </div>
                </div>

                <!-- Ward Type Badge -->
                <div style="margin-bottom: 1rem;">
                    <span style="display: inline-block; padding: 0.375rem 0.75rem; background: ${typeColor}15; color: ${typeColor}; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 600;">
                        ${typeLabel}
                    </span>
                    <span style="margin-left: 0.5rem; color: #6b7280; font-size: 0.875rem;">
                        ${ward.totalRooms} ห้อง
                    </span>
                </div>

                <!-- Description -->
                <p style="margin: 0 0 1rem 0; color: #6b7280; font-size: 0.875rem; line-height: 1.5;">
                    ${ward.description || 'ไม่มีคำอธิบาย'}
                </p>

                <!-- Action Buttons -->
                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button onclick="viewWardDetails('${ward.id}')" class="btn btn-secondary" style="flex: 1; min-width: 120px; font-size: 0.875rem;">
                        👁️ ดูรายละเอียด
                    </button>
                    <button onclick="editWard('${ward.id}')" class="btn btn-primary" style="flex: 1; min-width: 100px; font-size: 0.875rem;">
                        ✏️ แก้ไข
                    </button>
                    <button onclick="deleteWard('${ward.id}')" class="btn" style="background: #ef4444; color: white; flex: 0; padding: 0.5rem 1rem; font-size: 0.875rem;">
                        🗑️
                    </button>
                </div>

                <!-- Contact Info -->
                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb; font-size: 0.75rem; color: #9ca3af;">
                    📞 ติดต่อ: ${ward.contactPhone}
                </div>
            </div>
        `;
    }).join('');

    updateWardResultCount(sortedWards.length, wards.length);
}

/**
 * Update ward result count display
 * @param {number} showing - Number of wards shown
 * @param {number} total - Total number of wards
 */
function updateWardResultCount(showing, total) {
    const resultCount = document.getElementById('wardResultCount');
    if (showing === total) {
        resultCount.innerHTML = `<strong>แสดง ${showing} หอผู้ป่วย</strong> จากทั้งหมด ${total} หอ`;
    } else {
        resultCount.innerHTML = `<strong>พบ ${showing} หอผู้ป่วย</strong> จากทั้งหมด ${total} หอ`;
    }
}

/**
 * Show modal for adding a new ward
 */
function showAddWardModal() {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h3 style="margin-bottom: 1.5rem;">เพิ่มหอผู้ป่วยใหม่</h3>
        <form id="addWardForm" style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ชื่อหอผู้ป่วย *</label>
                    <input type="text" id="wardName" required placeholder="เช่น หอผู้ป่วยอายุรกรรม"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">รหัสหอผู้ป่วย *</label>
                    <input type="text" id="wardCode" required placeholder="เช่น IMW-01"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">แผนก *</label>
                    <select id="wardDepartment" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                        <option value="">เลือกแผนก</option>
                        <option value="อายุรศาสตร์">อายุรศาสตร์</option>
                        <option value="ศัลยศาสตร์">ศัลยศาสตร์</option>
                        <option value="กุมารเวชศาสตร์">กุมารเวชศาสตร์</option>
                        <option value="สูติ-นรีเวชศาสตร์">สูติ-นรีเวชศาสตร์</option>
                        <option value="ออร์โธปิดิกส์">ออร์โธปิดิกส์</option>
                        <option value="แพทย์วิกฤต">แพทย์วิกฤต (ICU)</option>
                        <option value="หอผู้ป่วยพิเศษ">หอผู้ป่วยพิเศษ</option>
                        <option value="อื่นๆ">อื่นๆ</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ประเภทหอผู้ป่วย *</label>
                    <select id="wardType" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                        <option value="">เลือกประเภท</option>
                        <option value="general">หอสามัญ (นับเตียง)</option>
                        <option value="special">หอพิเศษ (นับห้อง)</option>
                    </select>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">อาคาร *</label>
                    <input type="text" id="wardBuilding" required placeholder="เช่น อาคารผู้ป่วยใน 1"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ชั้น *</label>
                    <input type="number" id="wardFloor" required min="1" max="50" placeholder="เช่น 2"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">พยาบาลหัวหน้า *</label>
                    <input type="text" id="wardHeadNurse" required placeholder="เช่น พยาบาล สมศรี ใจดี"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">จุดพยาบาล *</label>
                    <input type="text" id="wardNursingStation" required placeholder="เช่น NS-2A"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">เบอร์โทรศัพท์ *</label>
                <input type="tel" id="wardContactPhone" required placeholder="เช่น 02-123-4567"
                       style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">คำอธิบาย</label>
                <textarea id="wardDescription" rows="3" placeholder="คำอธิบายเกี่ยวกับหอผู้ป่วย..."
                          style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); resize: vertical;"></textarea>
            </div>

            <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                <button type="button" onclick="closeModal()" class="btn btn-secondary">ยกเลิก</button>
                <button type="submit" class="btn btn-primary">บันทึก</button>
            </div>
        </form>
    `;

    modal.classList.add('active');

    // Handle form submission
    document.getElementById('addWardForm').addEventListener('submit', (e) => {
        e.preventDefault();
        addWard();
    });
}

/**
 * Add a new ward to the system
 */
function addWard() {
    const wards = storage.get('wards') || [];

    // Generate new ward ID
    const newId = 'ward-' + String(wards.length + 1).padStart(3, '0');

    const newWard = {
        id: newId,
        wardName: document.getElementById('wardName').value.trim(),
        wardCode: document.getElementById('wardCode').value.trim().toUpperCase(),
        department: document.getElementById('wardDepartment').value,
        wardType: document.getElementById('wardType').value,
        building: document.getElementById('wardBuilding').value.trim(),
        floor: parseInt(document.getElementById('wardFloor').value),
        headNurse: document.getElementById('wardHeadNurse').value.trim(),
        nursingStation: document.getElementById('wardNursingStation').value.trim().toUpperCase(),
        contactPhone: document.getElementById('wardContactPhone').value.trim(),
        description: document.getElementById('wardDescription').value.trim() || '',
        totalRooms: 0,
        totalBeds: 0,
        occupiedBeds: 0,
        availableBeds: 0,
        status: 'active'
    };

    // Validate ward code uniqueness
    const existingWard = wards.find(w => w.wardCode === newWard.wardCode);
    if (existingWard) {
        alert(`⚠️ รหัสหอผู้ป่วย "${newWard.wardCode}" มีอยู่แล้วในระบบ\n\nกรุณาใช้รหัสอื่น`);
        return;
    }

    wards.push(newWard);
    storage.set('wards', wards);

    closeModal();
    loadWards();
    alert(`✅ เพิ่มหอผู้ป่วย "${newWard.wardName}" สำเร็จ!`);
}

/**
 * View comprehensive ward details in modal
 * @param {string} wardId - Ward ID
 */
function viewWardDetails(wardId) {
    const wards = storage.get('wards') || [];
    const ward = wards.find(w => w.id === wardId);

    if (!ward) {
        alert('ไม่พบข้อมูลหอผู้ป่วย');
        return;
    }

    const wardRooms = storage.get('wardRooms') || [];
    const roomsInWard = wardRooms.filter(r => r.wardId === wardId);

    const occupancyRate = ward.totalBeds > 0 ? ((ward.occupiedBeds / ward.totalBeds) * 100).toFixed(1) : 0;

    // Status config
    const statusConfig = {
        'active': { label: 'ใช้งาน', color: '#10b981' },
        'maintenance': { label: 'ปิดบำรุง', color: '#f59e0b' },
        'closed': { label: 'ปิดชั่วคราว', color: '#ef4444' }
    };
    const status = statusConfig[ward.status] || statusConfig.active;

    const typeLabel = ward.wardType === 'general' ? 'หอสามัญ (นับเตียง)' : 'หอพิเศษ (นับห้อง)';

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div style="max-height: 80vh; overflow-y: auto;">
            <h3 style="margin-bottom: 1.5rem; color: var(--primary-color);">รายละเอียดหอผู้ป่วย</h3>

            <!-- Ward Header -->
            <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: white; padding: 2rem; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div>
                        <h2 style="margin: 0 0 0.5rem 0;">${ward.wardName}</h2>
                        <p style="margin: 0; opacity: 0.9; font-size: 1.125rem;">รหัส: ${ward.wardCode}</p>
                    </div>
                    <span style="padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border-radius: 999px; font-weight: 600;">
                        ${status.label}
                    </span>
                </div>
                <div style="background: rgba(255,255,255,0.15); padding: 1rem; border-radius: 0.5rem;">
                    <p style="margin: 0; font-size: 0.875rem; opacity: 0.9;">แผนก ${ward.department} | ${typeLabel}</p>
                </div>
            </div>

            <!-- Statistics Grid -->
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: #f0f9ff; padding: 1rem; border-radius: var(--border-radius); text-align: center; border-left: 3px solid #3b82f6;">
                    <p style="margin: 0; color: #3b82f6; font-size: 2rem; font-weight: 700;">${ward.totalRooms}</p>
                    <p style="margin: 0.25rem 0 0 0; color: #6b7280; font-size: 0.875rem;">ห้องทั้งหมด</p>
                </div>
                <div style="background: #f0f9ff; padding: 1rem; border-radius: var(--border-radius); text-align: center; border-left: 3px solid #3b82f6;">
                    <p style="margin: 0; color: #3b82f6; font-size: 2rem; font-weight: 700;">${ward.totalBeds}</p>
                    <p style="margin: 0.25rem 0 0 0; color: #6b7280; font-size: 0.875rem;">เตียงทั้งหมด</p>
                </div>
                <div style="background: #fef3c7; padding: 1rem; border-radius: var(--border-radius); text-align: center; border-left: 3px solid #f59e0b;">
                    <p style="margin: 0; color: #f59e0b; font-size: 2rem; font-weight: 700;">${ward.occupiedBeds}</p>
                    <p style="margin: 0.25rem 0 0 0; color: #6b7280; font-size: 0.875rem;">เตียงไม่ว่าง</p>
                </div>
                <div style="background: #d1fae5; padding: 1rem; border-radius: var(--border-radius); text-align: center; border-left: 3px solid #10b981;">
                    <p style="margin: 0; color: #10b981; font-size: 2rem; font-weight: 700;">${ward.availableBeds}</p>
                    <p style="margin: 0.25rem 0 0 0; color: #6b7280; font-size: 0.875rem;">เตียงว่าง</p>
                </div>
            </div>

            <!-- Occupancy Rate -->
            <div style="background: white; padding: 1.5rem; border-radius: var(--border-radius); box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 1.5rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                    <h4 style="margin: 0; color: #374151;">อัตราการใช้งาน</h4>
                    <span style="font-size: 1.5rem; font-weight: 700; color: #3b82f6;">${occupancyRate}%</span>
                </div>
                <div style="background: #e5e7eb; height: 12px; border-radius: 999px; overflow: hidden;">
                    <div style="background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%); height: 100%; width: ${occupancyRate}%; transition: width 0.3s;"></div>
                </div>
            </div>

            <!-- Ward Information -->
            <div style="background: #f9fafb; padding: 1.5rem; border-radius: var(--border-radius); margin-bottom: 1.5rem;">
                <h4 style="margin: 0 0 1rem 0; color: #374151;">ข้อมูลทั่วไป</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                    <div>
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">📍 สถานที่</p>
                        <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151;">${ward.building}</p>
                        <p style="margin: 0.25rem 0 0 0; color: #9ca3af; font-size: 0.875rem;">ชั้น ${ward.floor}</p>
                    </div>
                    <div>
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">👩‍⚕️ พยาบาลหัวหน้า</p>
                        <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151;">${ward.headNurse}</p>
                    </div>
                    <div>
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">🏥 จุดพยาบาล</p>
                        <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151;">${ward.nursingStation}</p>
                    </div>
                    <div>
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">📞 เบอร์โทรศัพท์</p>
                        <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151;">${ward.contactPhone}</p>
                    </div>
                </div>
            </div>

            ${ward.description ? `
                <div style="background: white; padding: 1.5rem; border-radius: var(--border-radius); box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 1.5rem;">
                    <h4 style="margin: 0 0 0.75rem 0; color: #374151;">📋 คำอธิบาย</h4>
                    <p style="margin: 0; color: #6b7280; line-height: 1.6;">${ward.description}</p>
                </div>
            ` : ''}

            <!-- Rooms in Ward -->
            <div style="background: white; padding: 1.5rem; border-radius: var(--border-radius); box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <h4 style="margin: 0 0 1rem 0; color: #374151;">🚪 ห้องในหอผู้ป่วย (${roomsInWard.length} ห้อง)</h4>
                ${roomsInWard.length > 0 ? `
                    <div style="display: grid; gap: 0.75rem;">
                        ${roomsInWard.slice(0, 5).map(room => `
                            <div style="padding: 0.75rem; background: #f9fafb; border-radius: 0.5rem; display: flex; justify-content: space-between; align-items: center;">
                                <div>
                                    <p style="margin: 0; font-weight: 600; color: #374151;">${room.roomName}</p>
                                    <p style="margin: 0.25rem 0 0 0; color: #6b7280; font-size: 0.875rem;">
                                        ${room.roomNumber} | ${room.totalBeds} เตียง (ว่าง: ${room.availableBeds})
                                    </p>
                                </div>
                                <span style="padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600; background: ${room.status === 'available' ? '#d1fae5' : room.status === 'full' ? '#fee2e2' : '#fef3c7'}; color: ${room.status === 'available' ? '#10b981' : room.status === 'full' ? '#ef4444' : '#f59e0b'};">
                                    ${room.status === 'available' ? 'ว่าง' : room.status === 'full' ? 'เต็ม' : 'บางส่วน'}
                                </span>
                            </div>
                        `).join('')}
                        ${roomsInWard.length > 5 ? `
                            <p style="margin: 0.5rem 0 0 0; color: #6b7280; font-size: 0.875rem; text-align: center;">
                                และอีก ${roomsInWard.length - 5} ห้อง...
                            </p>
                        ` : ''}
                    </div>
                ` : '<p style="margin: 0; color: #9ca3af; text-align: center;">ยังไม่มีห้องในหอผู้ป่วยนี้</p>'}
            </div>

            <!-- Action Buttons -->
            <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1.5rem;">
                <button onclick="closeModal()" class="btn btn-secondary">ปิด</button>
                <button onclick="closeModal(); viewWardRooms('${ward.id}')" class="btn btn-primary">จัดการห้อง</button>
                <button onclick="closeModal(); editWard('${ward.id}')" class="btn btn-primary">แก้ไขข้อมูล</button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

/**
 * Edit ward information
 * @param {string} wardId - Ward ID
 */
function editWard(wardId) {
    const wards = storage.get('wards') || [];
    const ward = wards.find(w => w.id === wardId);

    if (!ward) {
        alert('ไม่พบข้อมูลหอผู้ป่วย');
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h3 style="margin-bottom: 1.5rem;">แก้ไขข้อมูลหอผู้ป่วย</h3>
        <form id="editWardForm" style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ชื่อหอผู้ป่วย *</label>
                    <input type="text" id="editWardName" required value="${ward.wardName}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">รหัสหอผู้ป่วย *</label>
                    <input type="text" id="editWardCode" required value="${ward.wardCode}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">แผนก *</label>
                    <select id="editWardDepartment" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                        <option value="อายุรศาสตร์" ${ward.department === 'อายุรศาสตร์' ? 'selected' : ''}>อายุรศาสตร์</option>
                        <option value="ศัลยศาสตร์" ${ward.department === 'ศัลยศาสตร์' ? 'selected' : ''}>ศัลยศาสตร์</option>
                        <option value="กุมารเวชศาสตร์" ${ward.department === 'กุมารเวชศาสตร์' ? 'selected' : ''}>กุมารเวชศาสตร์</option>
                        <option value="สูติ-นรีเวชศาสตร์" ${ward.department === 'สูติ-นรีเวชศาสตร์' ? 'selected' : ''}>สูติ-นรีเวชศาสตร์</option>
                        <option value="ออร์โธปิดิกส์" ${ward.department === 'ออร์โธปิดิกส์' ? 'selected' : ''}>ออร์โธปิดิกส์</option>
                        <option value="แพทย์วิกฤต" ${ward.department === 'แพทย์วิกฤต' ? 'selected' : ''}>แพทย์วิกฤต (ICU)</option>
                        <option value="หอผู้ป่วยพิเศษ" ${ward.department === 'หอผู้ป่วยพิเศษ' ? 'selected' : ''}>หอผู้ป่วยพิเศษ</option>
                        <option value="อื่นๆ" ${ward.department === 'อื่นๆ' ? 'selected' : ''}>อื่นๆ</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ประเภทหอผู้ป่วย *</label>
                    <select id="editWardType" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                        <option value="general" ${ward.wardType === 'general' ? 'selected' : ''}>หอสามัญ (นับเตียง)</option>
                        <option value="special" ${ward.wardType === 'special' ? 'selected' : ''}>หอพิเศษ (นับห้อง)</option>
                    </select>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">อาคาร *</label>
                    <input type="text" id="editWardBuilding" required value="${ward.building}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ชั้น *</label>
                    <input type="number" id="editWardFloor" required min="1" max="50" value="${ward.floor}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">พยาบาลหัวหน้า *</label>
                    <input type="text" id="editWardHeadNurse" required value="${ward.headNurse}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">จุดพยาบาล *</label>
                    <input type="text" id="editWardNursingStation" required value="${ward.nursingStation}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">เบอร์โทรศัพท์ *</label>
                    <input type="tel" id="editWardContactPhone" required value="${ward.contactPhone}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">สถานะ *</label>
                    <select id="editWardStatus" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                        <option value="active" ${ward.status === 'active' ? 'selected' : ''}>ใช้งาน</option>
                        <option value="maintenance" ${ward.status === 'maintenance' ? 'selected' : ''}>ปิดบำรุง</option>
                        <option value="closed" ${ward.status === 'closed' ? 'selected' : ''}>ปิดชั่วคราว</option>
                    </select>
                </div>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">คำอธิบาย</label>
                <textarea id="editWardDescription" rows="3"
                          style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); resize: vertical;">${ward.description || ''}</textarea>
            </div>

            <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                <button type="button" onclick="closeModal()" class="btn btn-secondary">ยกเลิก</button>
                <button type="submit" class="btn btn-primary">บันทึก</button>
            </div>
        </form>
    `;

    modal.classList.add('active');

    // Handle form submission
    document.getElementById('editWardForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const wardCode = document.getElementById('editWardCode').value.trim().toUpperCase();

        // Check for duplicate ward code (excluding current ward)
        const existingWard = wards.find(w => w.wardCode === wardCode && w.id !== wardId);
        if (existingWard) {
            alert(`⚠️ รหัสหอผู้ป่วย "${wardCode}" มีอยู่แล้วในระบบ\n\nกรุณาใช้รหัสอื่น`);
            return;
        }

        // Update ward
        ward.wardName = document.getElementById('editWardName').value.trim();
        ward.wardCode = wardCode;
        ward.department = document.getElementById('editWardDepartment').value;
        ward.wardType = document.getElementById('editWardType').value;
        ward.building = document.getElementById('editWardBuilding').value.trim();
        ward.floor = parseInt(document.getElementById('editWardFloor').value);
        ward.headNurse = document.getElementById('editWardHeadNurse').value.trim();
        ward.nursingStation = document.getElementById('editWardNursingStation').value.trim().toUpperCase();
        ward.contactPhone = document.getElementById('editWardContactPhone').value.trim();
        ward.status = document.getElementById('editWardStatus').value;
        ward.description = document.getElementById('editWardDescription').value.trim();

        storage.set('wards', wards);
        closeModal();
        loadWards();
        alert(`✅ แก้ไขข้อมูลหอผู้ป่วย "${ward.wardName}" สำเร็จ!`);
    });
}

/**
 * Delete ward with confirmation
 * @param {string} wardId - Ward ID
 */
function deleteWard(wardId) {
    const wards = storage.get('wards') || [];
    const ward = wards.find(w => w.id === wardId);

    if (!ward) {
        alert('ไม่พบข้อมูลหอผู้ป่วย');
        return;
    }

    // Check if ward has rooms
    const wardRooms = storage.get('wardRooms') || [];
    const roomsInWard = wardRooms.filter(r => r.wardId === wardId);

    if (roomsInWard.length > 0) {
        alert(`⚠️ ไม่สามารถลบหอผู้ป่วย "${ward.wardName}" ได้\n\nเนื่องจากมี ${roomsInWard.length} ห้องในหอผู้ป่วยนี้\n\nกรุณาลบห้องทั้งหมดก่อนลบหอผู้ป่วย`);
        return;
    }

    const confirmed = confirm(`คุณต้องการลบหอผู้ป่วย "${ward.wardName}" ใช่หรือไม่?\n\nการดำเนินการนี้ไม่สามารถย้อนกลับได้`);

    if (confirmed) {
        const updatedWards = wards.filter(w => w.id !== wardId);
        storage.set('wards', updatedWards);
        loadWards();
        alert(`✅ ลบหอผู้ป่วย "${ward.wardName}" สำเร็จ!`);
    }
}

/**
 * Search and filter wards
 * @param {string} query - Search query
 * @param {string} statusFilter - Status filter
 * @param {string} typeFilter - Ward type filter
 */
function searchAndFilterWards(query = '', statusFilter = '', typeFilter = '') {
    const wards = storage.get('wards') || [];
    const grid = document.getElementById('wardsGrid');
    const totalWards = wards.length;

    if (wards.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                <p class="no-data">ยังไม่มีข้อมูลหอผู้ป่วย</p>
            </div>
        `;
        updateWardResultCount(0, 0);
        return;
    }

    // Filter wards
    let filtered = wards;

    // Apply search query
    if (query) {
        filtered = filtered.filter(ward =>
            ward.wardName.toLowerCase().includes(query.toLowerCase()) ||
            ward.wardCode.toLowerCase().includes(query.toLowerCase()) ||
            ward.department.toLowerCase().includes(query.toLowerCase()) ||
            ward.building.toLowerCase().includes(query.toLowerCase())
        );
    }

    // Apply status filter
    if (statusFilter) {
        filtered = filtered.filter(ward => ward.status === statusFilter);
    }

    // Apply type filter
    if (typeFilter) {
        filtered = filtered.filter(ward => ward.wardType === typeFilter);
    }

    // Display results
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: white; border-radius: var(--border-radius); box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🔍</div>
                <h3 style="margin: 0 0 0.5rem 0; color: #374151;">ไม่พบหอผู้ป่วยที่ค้นหา</h3>
                <p style="margin: 0; color: #6b7280;">ลองปรับเงื่อนไขการค้นหาใหม่</p>
                <button onclick="clearWardFilters()" class="btn btn-secondary" style="margin-top: 1rem;">ล้างตัวกรอง</button>
            </div>
        `;
        updateWardResultCount(0, totalWards);
        return;
    }

    // Sort and display
    const sortedWards = [...filtered].sort((a, b) => a.wardCode.localeCompare(b.wardCode));

    grid.innerHTML = sortedWards.map(ward => {
        const occupancyRate = ward.totalBeds > 0 ? ((ward.occupiedBeds / ward.totalBeds) * 100).toFixed(1) : 0;

        const statusConfig = {
            'active': { label: 'ใช้งาน', color: '#10b981', bgColor: '#d1fae5' },
            'maintenance': { label: 'ปิดบำรุง', color: '#f59e0b', bgColor: '#fef3c7' },
            'closed': { label: 'ปิดชั่วคราว', color: '#ef4444', bgColor: '#fee2e2' }
        };
        const status = statusConfig[ward.status] || statusConfig.active;

        const typeLabel = ward.wardType === 'general' ? 'หอสามัญ (นับเตียง)' : 'หอพิเศษ (นับห้อง)';
        const typeColor = ward.wardType === 'general' ? '#3b82f6' : '#8b5cf6';

        return `
            <div style="background: white; border-radius: var(--border-radius); box-shadow: 0 2px 8px rgba(0,0,0,0.1); padding: 1.5rem; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; border-left: 4px solid ${typeColor};"
                 onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)';"
                 onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 2px 8px rgba(0,0,0,0.1)';">

                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                    <div style="flex: 1;">
                        <h3 style="margin: 0 0 0.25rem 0; color: #1f2937; font-size: 1.25rem;">${ward.wardName}</h3>
                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">รหัส: ${ward.wardCode} | แผนก ${ward.department}</p>
                    </div>
                    <span style="padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600; background: ${status.bgColor}; color: ${status.color};">${status.label}</span>
                </div>

                <div style="background: #f9fafb; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1rem;">
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; font-size: 0.875rem;">
                        <div>
                            <p style="margin: 0; color: #6b7280;">📍 สถานที่</p>
                            <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151;">${ward.building}</p>
                            <p style="margin: 0; color: #9ca3af; font-size: 0.75rem;">ชั้น ${ward.floor}</p>
                        </div>
                        <div>
                            <p style="margin: 0; color: #6b7280;">👩‍⚕️ พยาบาลหัวหน้า</p>
                            <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151;">${ward.headNurse}</p>
                            <p style="margin: 0; color: #9ca3af; font-size: 0.75rem;">${ward.nursingStation}</p>
                        </div>
                    </div>
                </div>

                <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 1rem; border-radius: 0.5rem; color: white; margin-bottom: 1rem;">
                    <p style="margin: 0 0 0.5rem 0; font-size: 0.875rem; opacity: 0.9;">📊 สถิติการใช้งาน</p>
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; text-align: center;">
                        <div>
                            <p style="margin: 0; font-size: 1.5rem; font-weight: 700;">${ward.totalBeds}</p>
                            <p style="margin: 0; font-size: 0.75rem; opacity: 0.9;">เตียงทั้งหมด</p>
                        </div>
                        <div>
                            <p style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #fbbf24;">${ward.occupiedBeds}</p>
                            <p style="margin: 0; font-size: 0.75rem; opacity: 0.9;">ไม่ว่าง</p>
                        </div>
                        <div>
                            <p style="margin: 0; font-size: 1.5rem; font-weight: 700; color: #10b981;">${ward.availableBeds}</p>
                            <p style="margin: 0; font-size: 0.75rem; opacity: 0.9;">ว่าง</p>
                        </div>
                    </div>
                    <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.2);">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="font-size: 0.875rem;">อัตราการใช้งาน</span>
                            <span style="font-size: 1.125rem; font-weight: 700;">${occupancyRate}%</span>
                        </div>
                        <div style="background: rgba(255,255,255,0.3); height: 8px; border-radius: 999px; margin-top: 0.5rem; overflow: hidden;">
                            <div style="background: #fbbf24; height: 100%; width: ${occupancyRate}%; transition: width 0.3s;"></div>
                        </div>
                    </div>
                </div>

                <div style="margin-bottom: 1rem;">
                    <span style="display: inline-block; padding: 0.375rem 0.75rem; background: ${typeColor}15; color: ${typeColor}; border-radius: 0.375rem; font-size: 0.875rem; font-weight: 600;">${typeLabel}</span>
                    <span style="margin-left: 0.5rem; color: #6b7280; font-size: 0.875rem;">${ward.totalRooms} ห้อง</span>
                </div>

                <p style="margin: 0 0 1rem 0; color: #6b7280; font-size: 0.875rem; line-height: 1.5;">${ward.description || 'ไม่มีคำอธิบาย'}</p>

                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                    <button onclick="viewWardDetails('${ward.id}')" class="btn btn-secondary" style="flex: 1; min-width: 120px; font-size: 0.875rem;">👁️ ดูรายละเอียด</button>
                    <button onclick="editWard('${ward.id}')" class="btn btn-primary" style="flex: 1; min-width: 100px; font-size: 0.875rem;">✏️ แก้ไข</button>
                    <button onclick="deleteWard('${ward.id}')" class="btn" style="background: #ef4444; color: white; flex: 0; padding: 0.5rem 1rem; font-size: 0.875rem;">🗑️</button>
                </div>

                <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #e5e7eb; font-size: 0.75rem; color: #9ca3af;">📞 ติดต่อ: ${ward.contactPhone}</div>
            </div>
        `;
    }).join('');

    updateWardResultCount(filtered.length, totalWards);
}

/**
 * Clear all ward filters and show all wards
 */
function clearWardFilters() {
    const searchBox = document.getElementById('wardSearch');
    const statusFilter = document.getElementById('wardStatusFilter');
    const typeFilter = document.getElementById('wardTypeFilter');

    if (searchBox) searchBox.value = '';
    if (statusFilter) statusFilter.value = '';
    if (typeFilter) typeFilter.value = '';

    loadWards();
}

// Add event listeners for ward search and filters
const wardSearchBox = document.getElementById('wardSearch');
if (wardSearchBox) {
    wardSearchBox.addEventListener('input', () => {
        const query = wardSearchBox.value;
        const statusFilter = document.getElementById('wardStatusFilter')?.value || '';
        const typeFilter = document.getElementById('wardTypeFilter')?.value || '';
        searchAndFilterWards(query, statusFilter, typeFilter);
    });
}

const wardStatusFilter = document.getElementById('wardStatusFilter');
if (wardStatusFilter) {
    wardStatusFilter.addEventListener('change', () => {
        const query = document.getElementById('wardSearch')?.value || '';
        const statusFilter = wardStatusFilter.value;
        const typeFilter = document.getElementById('wardTypeFilter')?.value || '';
        searchAndFilterWards(query, statusFilter, typeFilter);
    });
}

const wardTypeFilter = document.getElementById('wardTypeFilter');
if (wardTypeFilter) {
    wardTypeFilter.addEventListener('change', () => {
        const query = document.getElementById('wardSearch')?.value || '';
        const statusFilter = document.getElementById('wardStatusFilter')?.value || '';
        const typeFilter = wardTypeFilter.value;
        searchAndFilterWards(query, statusFilter, typeFilter);
    });
}

const clearWardFilterBtn = document.getElementById('clearWardFilterBtn');
if (clearWardFilterBtn) {
    clearWardFilterBtn.addEventListener('click', clearWardFilters);
}

const addWardBtn = document.getElementById('addWardBtn');
if (addWardBtn) {
    addWardBtn.addEventListener('click', showAddWardModal);
}

// ===== Ward Room Management Functions =====

/**
 * View all rooms in a specific ward
 * @param {string} wardId - Ward ID
 */
function viewWardRooms(wardId) {
    const wards = storage.get('wards') || [];
    const ward = wards.find(w => w.id === wardId);

    if (!ward) {
        alert('ไม่พบข้อมูลหอผู้ป่วย');
        return;
    }

    const wardRooms = storage.get('wardRooms') || [];
    const roomsInWard = wardRooms.filter(r => r.wardId === wardId);

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div style="max-height: 80vh; overflow-y: auto;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <div>
                    <h3 style="margin: 0; color: var(--primary-color);">จัดการห้องใน ${ward.wardName}</h3>
                    <p style="margin: 0.5rem 0 0 0; color: #6b7280; font-size: 0.875rem;">รหัส: ${ward.wardCode} | ทั้งหมด ${roomsInWard.length} ห้อง</p>
                </div>
                <button onclick="showAddWardRoomModal('${wardId}')" class="btn btn-primary" style="font-size: 0.875rem;">
                    + เพิ่มห้องใหม่
                </button>
            </div>

            ${roomsInWard.length === 0 ? `
                <div style="text-align: center; padding: 3rem; background: #f9fafb; border-radius: var(--border-radius);">
                    <div style="font-size: 4rem; margin-bottom: 1rem;">🚪</div>
                    <h4 style="margin: 0 0 0.5rem 0; color: #374151;">ยังไม่มีห้องในหอผู้ป่วยนี้</h4>
                    <p style="margin: 0; color: #6b7280;">คลิก "เพิ่มห้องใหม่" เพื่อเริ่มต้น</p>
                </div>
            ` : `
                <div style="display: grid; gap: 1rem;">
                    ${roomsInWard.map(room => {
                        const statusConfig = {
                            'available': { label: 'ว่าง', color: '#10b981', bgColor: '#d1fae5' },
                            'full': { label: 'เต็ม', color: '#ef4444', bgColor: '#fee2e2' },
                            'maintenance': { label: 'ซ่อมบำรุง', color: '#f59e0b', bgColor: '#fef3c7' }
                        };
                        const status = statusConfig[room.status] || statusConfig.available;

                        const roomTypeLabels = {
                            'general': '🏥 ห้องรวม',
                            'single': '🚪 ห้องเดี่ยว',
                            'double': '🚪🚪 ห้องคู่'
                        };
                        const typeLabel = roomTypeLabels[room.roomType] || room.roomType;

                        return `
                            <div style="background: white; border: 2px solid #e5e7eb; border-radius: var(--border-radius); padding: 1.25rem; transition: border-color 0.2s;"
                                 onmouseover="this.style.borderColor='#3b82f6'"
                                 onmouseout="this.style.borderColor='#e5e7eb'">

                                <!-- Room Header -->
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                                    <div style="flex: 1;">
                                        <h4 style="margin: 0 0 0.25rem 0; color: #1f2937; font-size: 1.125rem;">
                                            ${room.roomName}
                                        </h4>
                                        <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">
                                            รหัส: ${room.roomNumber}
                                        </p>
                                    </div>
                                    <span style="padding: 0.375rem 0.875rem; border-radius: 999px; font-size: 0.8125rem; font-weight: 600; background: ${status.bgColor}; color: ${status.color};">
                                        ${status.label}
                                    </span>
                                </div>

                                <!-- Room Info Grid -->
                                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 0.75rem; margin-bottom: 1rem; padding: 1rem; background: #f9fafb; border-radius: 0.5rem;">
                                    <div>
                                        <p style="margin: 0; color: #6b7280; font-size: 0.75rem;">ประเภทห้อง</p>
                                        <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151; font-size: 0.9375rem;">${typeLabel}</p>
                                    </div>
                                    <div>
                                        <p style="margin: 0; color: #6b7280; font-size: 0.75rem;">จำนวนเตียง</p>
                                        <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151; font-size: 0.9375rem;">${room.totalBeds} เตียง</p>
                                    </div>
                                    <div>
                                        <p style="margin: 0; color: #6b7280; font-size: 0.75rem;">ใช้งาน</p>
                                        <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: ${room.occupiedBeds > 0 ? '#f59e0b' : '#10b981'}; font-size: 0.9375rem;">
                                            ${room.occupiedBeds}/${room.totalBeds}
                                        </p>
                                    </div>
                                    <div>
                                        <p style="margin: 0; color: #6b7280; font-size: 0.75rem;">ราคา/วัน</p>
                                        <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #374151; font-size: 0.9375rem;">
                                            ${(room.pricePerBedPerDay || room.pricePerRoomPerDay || 0).toLocaleString()} ฿
                                        </p>
                                    </div>
                                </div>

                                <!-- Amenities -->
                                ${room.amenities && room.amenities.length > 0 ? `
                                    <div style="margin-bottom: 1rem;">
                                        <p style="margin: 0 0 0.5rem 0; color: #6b7280; font-size: 0.8125rem; font-weight: 600;">สิ่งอำนวยความสะดวก:</p>
                                        <div style="display: flex; flex-wrap: wrap; gap: 0.375rem;">
                                            ${room.amenities.slice(0, 4).map(a => `
                                                <span style="padding: 0.25rem 0.625rem; background: #eff6ff; color: #1e40af; border-radius: 999px; font-size: 0.75rem;">
                                                    ${a}
                                                </span>
                                            `).join('')}
                                            ${room.amenities.length > 4 ? `
                                                <span style="padding: 0.25rem 0.625rem; background: #f3f4f6; color: #6b7280; border-radius: 999px; font-size: 0.75rem;">
                                                    +${room.amenities.length - 4} อื่นๆ
                                                </span>
                                            ` : ''}
                                        </div>
                                    </div>
                                ` : ''}

                                ${room.notes ? `
                                    <p style="margin: 0 0 1rem 0; padding: 0.75rem; background: #fef3c7; border-left: 3px solid #f59e0b; border-radius: 0.25rem; color: #92400e; font-size: 0.8125rem;">
                                        📝 ${room.notes}
                                    </p>
                                ` : ''}

                                <!-- Action Buttons -->
                                <div style="display: flex; gap: 0.5rem;">
                                    <button onclick="closeModal(); viewRoomBeds('${room.id}')" class="btn btn-primary" style="flex: 1; font-size: 0.8125rem; padding: 0.5rem 1rem;">
                                        🛏️ จัดการเตียง
                                    </button>
                                    <button onclick="editWardRoom('${room.id}')" class="btn btn-secondary" style="flex: 1; font-size: 0.8125rem; padding: 0.5rem 1rem;">
                                        ✏️ แก้ไข
                                    </button>
                                    <button onclick="deleteWardRoom('${room.id}')" class="btn" style="flex: 1; background: #ef4444; color: white; font-size: 0.8125rem; padding: 0.5rem 1rem;">
                                        🗑️ ลบ
                                    </button>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            `}

            <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 2px solid #e5e7eb;">
                <button onclick="closeModal()" class="btn btn-secondary">ปิด</button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

/**
 * Show modal for adding a new room to ward
 * @param {string} wardId - Ward ID
 */
function showAddWardRoomModal(wardId) {
    const wards = storage.get('wards') || [];
    const ward = wards.find(w => w.id === wardId);

    if (!ward) {
        alert('ไม่พบข้อมูลหอผู้ป่วย');
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h3 style="margin-bottom: 1.5rem;">เพิ่มห้องใหม่ใน ${ward.wardName}</h3>
        <form id="addWardRoomForm" style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ชื่อห้อง *</label>
                    <input type="text" id="roomName" required placeholder="เช่น ห้อง 201A"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">รหัสห้อง *</label>
                    <input type="text" id="roomNumber" required placeholder="เช่น ${ward.wardCode}-201A"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ประเภทห้อง *</label>
                <select id="roomType" required onchange="handleRoomTypeChange()" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="">เลือกประเภท</option>
                    <option value="general">🏥 ห้องรวม (หลายเตียง - ปรับจำนวนได้)</option>
                    <option value="single">🚪 ห้องเดี่ยว (1 เตียง)</option>
                    <option value="double">🚪🚪 ห้องคู่ (2 เตียง)</option>
                </select>
            </div>

            <div id="bedCountSection" style="display: none;">
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">จำนวนเตียง *</label>
                <input type="number" id="totalBeds" min="1" max="20" value="6" placeholder="จำนวนเตียงในห้อง"
                       style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                <p style="margin: 0.5rem 0 0 0; color: #6b7280; font-size: 0.8125rem;">
                    💡 สำหรับห้องรวม สามารถกำหนดจำนวนเตียงได้ตามต้องการ (1-20 เตียง)
                </p>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ราคา/วัน (บาท) *</label>
                <input type="number" id="pricePerDay" required min="0" step="100" placeholder="เช่น 500"
                       style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                <p style="margin: 0.5rem 0 0 0; color: #6b7280; font-size: 0.8125rem;" id="pricingNote">
                    💡 ราคาต่อเตียงต่อวัน (สำหรับห้องรวม) หรือราคาต่อห้องต่อวัน (สำหรับห้องเดี่ยว/คู่)
                </p>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">สิ่งอำนวยความสะดวก</label>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; padding: 0.75rem; background: #f9fafb; border-radius: 0.5rem;">
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" class="amenity-checkbox" value="เตียงปรับระดับ">
                        <span style="font-size: 0.875rem;">เตียงปรับระดับ</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" class="amenity-checkbox" value="พัดลม">
                        <span style="font-size: 0.875rem;">พัดลม</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" class="amenity-checkbox" value="แอร์">
                        <span style="font-size: 0.875rem;">แอร์</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" class="amenity-checkbox" value="TV">
                        <span style="font-size: 0.875rem;">TV</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" class="amenity-checkbox" value="ห้องน้ำในตัว">
                        <span style="font-size: 0.875rem;">ห้องน้ำในตัว</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" class="amenity-checkbox" value="ห้องน้ำรวม">
                        <span style="font-size: 0.875rem;">ห้องน้ำรวม</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" class="amenity-checkbox" value="ตู้เก็บของส่วนตัว">
                        <span style="font-size: 0.875rem;">ตู้เก็บของส่วนตัว</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" class="amenity-checkbox" value="ม่านกั้น">
                        <span style="font-size: 0.875rem;">ม่านกั้น</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" class="amenity-checkbox" value="WiFi">
                        <span style="font-size: 0.875rem;">WiFi</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                        <input type="checkbox" class="amenity-checkbox" value="ระบบเรียกพยาบาล">
                        <span style="font-size: 0.875rem;">ระบบเรียกพยาบาล</span>
                    </label>
                </div>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">หมายเหตุ</label>
                <textarea id="roomNotes" rows="2" placeholder="หมายเหตุเพิ่มเติม..."
                          style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); resize: vertical;"></textarea>
            </div>

            <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                <button type="button" onclick="viewWardRooms('${wardId}')" class="btn btn-secondary">ยกเลิก</button>
                <button type="submit" class="btn btn-primary">บันทึก</button>
            </div>
        </form>

        <script>
            function handleRoomTypeChange() {
                const roomType = document.getElementById('roomType').value;
                const bedCountSection = document.getElementById('bedCountSection');
                const totalBedsInput = document.getElementById('totalBeds');
                const pricingNote = document.getElementById('pricingNote');

                if (roomType === 'general') {
                    bedCountSection.style.display = 'block';
                    totalBedsInput.required = true;
                    totalBedsInput.value = 6;
                    pricingNote.innerHTML = '💡 ราคาต่อเตียงต่อวัน (สำหรับห้องรวม)';
                } else if (roomType === 'single') {
                    bedCountSection.style.display = 'none';
                    totalBedsInput.required = false;
                    totalBedsInput.value = 1;
                    pricingNote.innerHTML = '💡 ราคาต่อห้องต่อวัน (สำหรับห้องเดี่ยว)';
                } else if (roomType === 'double') {
                    bedCountSection.style.display = 'none';
                    totalBedsInput.required = false;
                    totalBedsInput.value = 2;
                    pricingNote.innerHTML = '💡 ราคาต่อห้องต่อวัน (สำหรับห้องคู่)';
                }
            }
        </script>
    `;

    modal.classList.add('active');

    // Handle form submission
    document.getElementById('addWardRoomForm').addEventListener('submit', (e) => {
        e.preventDefault();
        addWardRoom(wardId);
    });
}

/**
 * Add a new room to ward
 * @param {string} wardId - Ward ID
 */
function addWardRoom(wardId) {
    const wardRooms = storage.get('wardRooms') || [];

    // Get selected amenities
    const amenities = Array.from(document.querySelectorAll('.amenity-checkbox:checked'))
        .map(cb => cb.value);

    const roomType = document.getElementById('roomType').value;
    let totalBeds = 1;

    if (roomType === 'general') {
        totalBeds = parseInt(document.getElementById('totalBeds').value);
    } else if (roomType === 'single') {
        totalBeds = 1;
    } else if (roomType === 'double') {
        totalBeds = 2;
    }

    // Generate new room ID
    const newId = 'wroom-' + String(wardRooms.length + 1).padStart(3, '0');

    const pricePerDay = parseFloat(document.getElementById('pricePerDay').value);

    const newRoom = {
        id: newId,
        roomNumber: document.getElementById('roomNumber').value.trim().toUpperCase(),
        roomName: document.getElementById('roomName').value.trim(),
        wardId: wardId,
        roomType: roomType,
        totalBeds: totalBeds,
        occupiedBeds: 0,
        availableBeds: totalBeds,
        pricePerBedPerDay: roomType === 'general' ? pricePerDay : 0,
        pricePerRoomPerDay: roomType !== 'general' ? pricePerDay : 0,
        amenities: amenities,
        status: 'available',
        notes: document.getElementById('roomNotes').value.trim()
    };

    // Check for duplicate room number
    const existingRoom = wardRooms.find(r => r.roomNumber === newRoom.roomNumber);
    if (existingRoom) {
        alert(`⚠️ รหัสห้อง "${newRoom.roomNumber}" มีอยู่แล้วในระบบ\n\nกรุณาใช้รหัสอื่น`);
        return;
    }

    wardRooms.push(newRoom);
    storage.set('wardRooms', wardRooms);

    // Update ward statistics
    updateWardStatistics();

    // Refresh ward rooms view
    viewWardRooms(wardId);
    alert(`✅ เพิ่มห้อง "${newRoom.roomName}" สำเร็จ!`);
}

/**
 * Edit ward room
 * @param {string} roomId - Room ID
 */
function editWardRoom(roomId) {
    const wardRooms = storage.get('wardRooms') || [];
    const room = wardRooms.find(r => r.id === roomId);

    if (!room) {
        alert('ไม่พบข้อมูลห้อง');
        return;
    }

    const wards = storage.get('wards') || [];
    const ward = wards.find(w => w.id === room.wardId);

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    const priceValue = room.pricePerBedPerDay || room.pricePerRoomPerDay || 0;

    modalBody.innerHTML = `
        <h3 style="margin-bottom: 1.5rem;">แก้ไขห้อง ${room.roomName}</h3>
        <form id="editWardRoomForm" style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ชื่อห้อง *</label>
                    <input type="text" id="editRoomName" required value="${room.roomName}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">รหัสห้อง *</label>
                    <input type="text" id="editRoomNumber" required value="${room.roomNumber}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ประเภทห้อง *</label>
                <select id="editRoomType" required disabled style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); background: #f3f4f6; cursor: not-allowed;">
                    <option value="general" ${room.roomType === 'general' ? 'selected' : ''}>🏥 ห้องรวม</option>
                    <option value="single" ${room.roomType === 'single' ? 'selected' : ''}>🚪 ห้องเดี่ยว</option>
                    <option value="double" ${room.roomType === 'double' ? 'selected' : ''}>🚪🚪 ห้องคู่</option>
                </select>
                <p style="margin: 0.5rem 0 0 0; color: #9ca3af; font-size: 0.75rem;">
                    ⚠️ ไม่สามารถเปลี่ยนประเภทห้องได้ เนื่องจากอาจมีเตียงและผู้ป่วยอยู่
                </p>
            </div>

            ${room.roomType === 'general' ? `
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">จำนวนเตียง *</label>
                    <input type="number" id="editTotalBeds" required min="${room.occupiedBeds}" max="20" value="${room.totalBeds}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <p style="margin: 0.5rem 0 0 0; color: #6b7280; font-size: 0.8125rem;">
                        💡 ปัจจุบันมีผู้ป่วย ${room.occupiedBeds} คน ต้องมีเตียงอย่างน้อย ${room.occupiedBeds} เตียง
                    </p>
                </div>
            ` : ''}

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ราคา/วัน (บาท) *</label>
                <input type="number" id="editPricePerDay" required min="0" step="100" value="${priceValue}"
                       style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">สถานะ *</label>
                <select id="editRoomStatus" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="available" ${room.status === 'available' ? 'selected' : ''}>ว่าง</option>
                    <option value="full" ${room.status === 'full' ? 'selected' : ''}>เต็ม</option>
                    <option value="maintenance" ${room.status === 'maintenance' ? 'selected' : ''}>ซ่อมบำรุง</option>
                </select>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">สิ่งอำนวยความสะดวก</label>
                <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem; padding: 0.75rem; background: #f9fafb; border-radius: 0.5rem;">
                    ${['เตียงปรับระดับ', 'พัดลม', 'แอร์', 'TV', 'ห้องน้ำในตัว', 'ห้องน้ำรวม', 'ตู้เก็บของส่วนตัว', 'ม่านกั้น', 'WiFi', 'ระบบเรียกพยาบาล'].map(amenity => `
                        <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
                            <input type="checkbox" class="edit-amenity-checkbox" value="${amenity}" ${room.amenities && room.amenities.includes(amenity) ? 'checked' : ''}>
                            <span style="font-size: 0.875rem;">${amenity}</span>
                        </label>
                    `).join('')}
                </div>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">หมายเหตุ</label>
                <textarea id="editRoomNotes" rows="2"
                          style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius); resize: vertical;">${room.notes || ''}</textarea>
            </div>

            <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                <button type="button" onclick="viewWardRooms('${room.wardId}')" class="btn btn-secondary">ยกเลิก</button>
                <button type="submit" class="btn btn-primary">บันทึก</button>
            </div>
        </form>
    `;

    modal.classList.add('active');

    // Handle form submission
    document.getElementById('editWardRoomForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const roomNumber = document.getElementById('editRoomNumber').value.trim().toUpperCase();

        // Check for duplicate room number (excluding current room)
        const existingRoom = wardRooms.find(r => r.roomNumber === roomNumber && r.id !== roomId);
        if (existingRoom) {
            alert(`⚠️ รหัสห้อง "${roomNumber}" มีอยู่แล้วในระบบ\n\nกรุณาใช้รหัสอื่น`);
            return;
        }

        // Get selected amenities
        const amenities = Array.from(document.querySelectorAll('.edit-amenity-checkbox:checked'))
            .map(cb => cb.value);

        // Update room
        room.roomName = document.getElementById('editRoomName').value.trim();
        room.roomNumber = roomNumber;

        // Update beds if it's a general room
        if (room.roomType === 'general') {
            const newTotalBeds = parseInt(document.getElementById('editTotalBeds').value);
            const bedDifference = newTotalBeds - room.totalBeds;
            room.totalBeds = newTotalBeds;
            room.availableBeds = room.availableBeds + bedDifference;
        }

        const priceValue = parseFloat(document.getElementById('editPricePerDay').value);
        if (room.roomType === 'general') {
            room.pricePerBedPerDay = priceValue;
        } else {
            room.pricePerRoomPerDay = priceValue;
        }

        room.status = document.getElementById('editRoomStatus').value;
        room.amenities = amenities;
        room.notes = document.getElementById('editRoomNotes').value.trim();

        storage.set('wardRooms', wardRooms);

        // Update ward statistics
        updateWardStatistics();

        viewWardRooms(room.wardId);
        alert(`✅ แก้ไขห้อง "${room.roomName}" สำเร็จ!`);
    });
}

/**
 * Delete ward room with confirmation
 * @param {string} roomId - Room ID
 */
function deleteWardRoom(roomId) {
    const wardRooms = storage.get('wardRooms') || [];
    const room = wardRooms.find(r => r.id === roomId);

    if (!room) {
        alert('ไม่พบข้อมูลห้อง');
        return;
    }

    // Check if room has occupied beds
    if (room.occupiedBeds > 0) {
        alert(`⚠️ ไม่สามารถลบห้อง "${room.roomName}" ได้\n\nเนื่องจากมีผู้ป่วย ${room.occupiedBeds} คน\n\nกรุณาย้ายผู้ป่วยออกก่อนลบห้อง`);
        return;
    }

    const confirmed = confirm(`คุณต้องการลบห้อง "${room.roomName}" ใช่หรือไม่?\n\nการดำเนินการนี้ไม่สามารถย้อนกลับได้`);

    if (confirmed) {
        const updatedRooms = wardRooms.filter(r => r.id !== roomId);
        storage.set('wardRooms', updatedRooms);

        // Update ward statistics
        updateWardStatistics();

        viewWardRooms(room.wardId);
        alert(`✅ ลบห้อง "${room.roomName}" สำเร็จ!`);
    }
}

// ===== Bed Management Functions =====
/**
 * View all beds in a room
 * @param {string} roomId - Room ID
 */
function viewRoomBeds(roomId) {
    const wardRooms = storage.get('wardRooms') || [];
    const wardBeds = storage.get('wardBeds') || [];
    const room = wardRooms.find(r => r.id === roomId);

    if (!room) {
        alert('ไม่พบข้อมูลห้อง');
        return;
    }

    const bedsInRoom = wardBeds.filter(b => b.roomId === roomId);

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div style="max-height: 80vh; overflow-y: auto;">
            <div style="position: sticky; top: 0; background: white; z-index: 10; padding-bottom: 1rem; border-bottom: 2px solid #e5e7eb; margin-bottom: 1.5rem;">
                <h3 style="margin: 0 0 0.5rem 0;">🛏️ จัดการเตียงในห้อง: ${room.roomName}</h3>
                <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">
                    ${room.roomNumber} | ${bedsInRoom.length}/${room.totalBeds} เตียง
                </p>
                <button onclick="closeModal(); showAddBedModal('${roomId}')" class="btn btn-primary" style="margin-top: 1rem;">
                    + เพิ่มเตียงใหม่
                </button>
            </div>

            ${bedsInRoom.length > 0 ? `
                <div style="display: grid; gap: 1rem;">
                    ${bedsInRoom.map(bed => {
                        const statusConfig = {
                            available: { label: 'ว่าง', color: '#10b981', bg: '#d1fae5' },
                            occupied: { label: 'มีผู้ป่วย', color: '#ef4444', bg: '#fee2e2' },
                            maintenance: { label: 'ซ่อมบำรุง', color: '#f59e0b', bg: '#fef3c7' },
                            cleaning: { label: 'กำลังทำความสะอาด', color: '#3b82f6', bg: '#dbeafe' }
                        };
                        const config = statusConfig[bed.status] || statusConfig.available;

                        return `
                            <div style="background: white; padding: 1.25rem; border-radius: var(--border-radius); box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 2px solid #e5e7eb; transition: all 0.2s;" onmouseover="this.style.borderColor='#3b82f6'" onmouseout="this.style.borderColor='#e5e7eb'">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem;">
                                    <div>
                                        <h4 style="margin: 0; color: #111827;">${bed.bedName}</h4>
                                        <p style="margin: 0.25rem 0 0 0; color: #6b7280; font-size: 0.875rem;">${bed.bedNumber}</p>
                                    </div>
                                    <span style="padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600; background: ${config.bg}; color: ${config.color};">
                                        ${config.label}
                                    </span>
                                </div>

                                ${bed.status === 'occupied' && bed.patientName ? `
                                    <div style="background: #f9fafb; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 0.75rem;">
                                        <p style="margin: 0; font-size: 0.875rem; color: #374151;">
                                            <strong>ผู้ป่วย:</strong> ${bed.patientName} (HN: ${bed.patientHN})
                                        </p>
                                        ${bed.admissionDate ? `
                                            <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: #6b7280;">
                                                <strong>วันที่รับเข้า:</strong> ${new Date(bed.admissionDate).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </p>
                                        ` : ''}
                                        ${bed.expectedDischargeDate ? `
                                            <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: #6b7280;">
                                                <strong>คาดว่าจำหน่าย:</strong> ${new Date(bed.expectedDischargeDate).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' })}
                                            </p>
                                        ` : ''}
                                        ${bed.dailyRate ? `
                                            <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: #6b7280;">
                                                <strong>ค่าใช้จ่ายต่อวัน:</strong> ฿${bed.dailyRate.toLocaleString()}
                                            </p>
                                        ` : ''}
                                        ${bed.specialCare ? `
                                            <span style="display: inline-block; margin-top: 0.5rem; padding: 0.25rem 0.5rem; background: #fef3c7; color: #f59e0b; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 600;">
                                                ⚕️ ดูแลพิเศษ
                                            </span>
                                        ` : ''}
                                        ${bed.isolation ? `
                                            <span style="display: inline-block; margin-top: 0.5rem; margin-left: 0.5rem; padding: 0.25rem 0.5rem; background: #fee2e2; color: #ef4444; border-radius: 0.25rem; font-size: 0.75rem; font-weight: 600;">
                                                🚫 กักโรค
                                            </span>
                                        ` : ''}
                                    </div>
                                ` : ''}

                                ${bed.notes ? `
                                    <p style="margin: 0 0 0.75rem 0; color: #6b7280; font-size: 0.875rem;">
                                        <strong>หมายเหตุ:</strong> ${bed.notes}
                                    </p>
                                ` : ''}

                                <div style="display: flex; gap: 0.5rem;">
                                    ${bed.status === 'occupied' ? `
                                        <button onclick="dischargePatientFromBed('${bed.id}')" class="btn" style="flex: 1; background: #10b981; color: white; font-size: 0.875rem; padding: 0.5rem 1rem;">
                                            ↗️ จำหน่าย
                                        </button>
                                    ` : ''}
                                    <button onclick="closeModal(); editBed('${bed.id}')" class="btn btn-secondary" style="${bed.status === 'occupied' ? 'flex: 1;' : ''} font-size: 0.875rem; padding: 0.5rem 1rem;">
                                        แก้ไข
                                    </button>
                                    ${bed.status !== 'occupied' ? `
                                        <button onclick="deleteBed('${bed.id}')" class="btn btn-danger" style="font-size: 0.875rem; padding: 0.5rem 1rem;">
                                            ลบ
                                        </button>
                                    ` : ''}
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            ` : `
                <div style="text-align: center; padding: 3rem; color: #9ca3af;">
                    <p style="font-size: 1.125rem; margin: 0;">ยังไม่มีเตียงในห้องนี้</p>
                    <p style="font-size: 0.875rem; margin: 0.5rem 0 0 0;">คลิกปุ่ม "+ เพิ่มเตียงใหม่" เพื่อเพิ่มเตียง</p>
                </div>
            `}

            <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 2px solid #e5e7eb;">
                <button onclick="closeModal(); viewWardRooms('${room.wardId}')" class="btn btn-secondary">กลับ</button>
                <button onclick="closeModal()" class="btn btn-primary">ปิด</button>
            </div>
        </div>
    `;

    modal.style.display = 'flex';
}

/**
 * Show modal to add a new bed to a room
 * @param {string} roomId - Room ID
 */
function showAddBedModal(roomId) {
    const wardRooms = storage.get('wardRooms') || [];
    const wardBeds = storage.get('wardBeds') || [];
    const room = wardRooms.find(r => r.id === roomId);

    if (!room) {
        alert('ไม่พบข้อมูลห้อง');
        return;
    }

    const bedsInRoom = wardBeds.filter(b => b.roomId === roomId);

    // Check if room is full
    if (bedsInRoom.length >= room.totalBeds) {
        alert(`⚠️ ห้อง "${room.roomName}" เต็มแล้ว\n\nมีเตียงครบ ${room.totalBeds} เตียงแล้ว\n\nหากต้องการเพิ่มเตียง กรุณาแก้ไขจำนวนเตียงในห้องก่อน`);
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    // Generate suggested bed number
    const nextBedNum = bedsInRoom.length + 1;
    const suggestedBedNumber = `${room.roomNumber}-${String(nextBedNum).padStart(2, '0')}`;
    const suggestedBedName = `เตียง ${nextBedNum}`;

    modalBody.innerHTML = `
        <h3 style="margin-bottom: 1.5rem;">เพิ่มเตียงใหม่: ${room.roomName}</h3>
        <form id="addBedForm" style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ชื่อเตียง *</label>
                    <input type="text" id="bedName" required value="${suggestedBedName}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);"
                           placeholder="เช่น เตียง 1">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">หมายเลขเตียง *</label>
                    <input type="text" id="bedNumber" required value="${suggestedBedNumber}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);"
                           placeholder="เช่น IMW-201A-01">
                </div>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">สถานะเตียง *</label>
                <select id="bedStatus" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="available">ว่าง (พร้อมใช้งาน)</option>
                    <option value="maintenance">ซ่อมบำรุง</option>
                    <option value="cleaning">กำลังทำความสะอาด</option>
                </select>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">หมายเหตุ</label>
                <textarea id="bedNotes" rows="3" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);" placeholder="บันทึกข้อมูลเพิ่มเติม..."></textarea>
            </div>

            <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                <button type="button" onclick="closeModal(); viewRoomBeds('${roomId}')" class="btn btn-secondary">ยกเลิก</button>
                <button type="submit" class="btn btn-primary">บันทึก</button>
            </div>
        </form>
    `;

    document.getElementById('addBedForm').onsubmit = function(e) {
        e.preventDefault();
        addBed(roomId);
    };

    modal.classList.add('active');
}

/**
 * Add a new bed to a room
 * @param {string} roomId - Room ID
 */
function addBed(roomId) {
    const wardRooms = storage.get('wardRooms') || [];
    const wardBeds = storage.get('wardBeds') || [];
    const room = wardRooms.find(r => r.id === roomId);

    if (!room) {
        alert('ไม่พบข้อมูลห้อง');
        return;
    }

    const bedName = document.getElementById('bedName').value.trim();
    const bedNumber = document.getElementById('bedNumber').value.trim().toUpperCase();
    const bedStatus = document.getElementById('bedStatus').value;
    const bedNotes = document.getElementById('bedNotes').value.trim();

    // Validate
    if (!bedName || !bedNumber) {
        alert('⚠️ กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }

    // Check duplicate bed number
    const existingBed = wardBeds.find(b => b.bedNumber === bedNumber);
    if (existingBed) {
        alert(`⚠️ หมายเลขเตียง "${bedNumber}" ถูกใช้งานแล้ว\n\nกรุณาใช้หมายเลขอื่น`);
        return;
    }

    // Check if room is full
    const bedsInRoom = wardBeds.filter(b => b.roomId === roomId);
    if (bedsInRoom.length >= room.totalBeds) {
        alert(`⚠️ ห้อง "${room.roomName}" เต็มแล้ว\n\nมีเตียงครบ ${room.totalBeds} เตียงแล้ว`);
        return;
    }

    // Generate new bed ID
    const newId = 'bed-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);

    // Get daily rate from room
    const dailyRate = room.pricePerBedPerDay || room.pricePerRoomPerDay || 0;

    const newBed = {
        id: newId,
        bedNumber: bedNumber,
        bedName: bedName,
        roomId: roomId,
        wardId: room.wardId,
        status: bedStatus,
        patientId: null,
        patientName: null,
        patientHN: null,
        admissionDate: null,
        expectedDischargeDate: null,
        dailyRate: dailyRate,
        specialCare: false,
        isolation: false,
        notes: bedNotes
    };

    wardBeds.push(newBed);
    storage.set('wardBeds', wardBeds);

    // Update room statistics if bed is available
    if (bedStatus === 'available') {
        room.availableBeds = (room.availableBeds || 0) + 1;
        const roomIndex = wardRooms.findIndex(r => r.id === roomId);
        wardRooms[roomIndex] = room;
        storage.set('wardRooms', wardRooms);
    }

    updateWardStatistics();

    closeModal();
    viewRoomBeds(roomId);
    alert(`✅ เพิ่มเตียง "${bedName}" สำเร็จ!`);
}

/**
 * Edit bed information
 * @param {string} bedId - Bed ID
 */
function editBed(bedId) {
    const wardBeds = storage.get('wardBeds') || [];
    const bed = wardBeds.find(b => b.id === bedId);

    if (!bed) {
        alert('ไม่พบข้อมูลเตียง');
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <h3 style="margin-bottom: 1.5rem;">แก้ไขข้อมูลเตียง</h3>
        <form id="editBedForm" style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ชื่อเตียง *</label>
                    <input type="text" id="editBedName" required value="${bed.bedName}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">หมายเลขเตียง *</label>
                    <input type="text" id="editBedNumber" required value="${bed.bedNumber}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">สถานะเตียง *</label>
                <select id="editBedStatus" required style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                    <option value="available" ${bed.status === 'available' ? 'selected' : ''}>ว่าง (พร้อมใช้งาน)</option>
                    <option value="occupied" ${bed.status === 'occupied' ? 'selected' : ''}>มีผู้ป่วย</option>
                    <option value="maintenance" ${bed.status === 'maintenance' ? 'selected' : ''}>ซ่อมบำรุง</option>
                    <option value="cleaning" ${bed.status === 'cleaning' ? 'selected' : ''}>กำลังทำความสะอาด</option>
                </select>
            </div>

            ${bed.status === 'occupied' ? `
                <div style="background: #f9fafb; padding: 1rem; border-radius: var(--border-radius); border: 1px solid #e5e7eb;">
                    <h4 style="margin: 0 0 1rem 0; color: #374151;">ข้อมูลผู้ป่วย</h4>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ชื่อผู้ป่วย</label>
                            <input type="text" id="editPatientName" value="${bed.patientName || ''}"
                                   style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">HN</label>
                            <input type="text" id="editPatientHN" value="${bed.patientHN || ''}"
                                   style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">วันที่รับเข้า</label>
                            <input type="date" id="editAdmissionDate" value="${bed.admissionDate || ''}"
                                   style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">คาดว่าจำหน่าย</label>
                            <input type="date" id="editExpectedDischargeDate" value="${bed.expectedDischargeDate || ''}"
                                   style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ค่าใช้จ่ายต่อวัน (฿)</label>
                            <input type="number" id="editDailyRate" value="${bed.dailyRate || 0}" min="0"
                                   style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">การดูแลพิเศษ</label>
                            <div style="display: flex; gap: 1rem; padding: 0.75rem;">
                                <label style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" id="editSpecialCare" ${bed.specialCare ? 'checked' : ''}>
                                    <span>ดูแลพิเศษ</span>
                                </label>
                                <label style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="checkbox" id="editIsolation" ${bed.isolation ? 'checked' : ''}>
                                    <span>กักโรค</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            ` : ''}

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">หมายเหตุ</label>
                <textarea id="editBedNotes" rows="3" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">${bed.notes || ''}</textarea>
            </div>

            <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                <button type="button" onclick="closeModal(); viewRoomBeds('${bed.roomId}')" class="btn btn-secondary">ยกเลิก</button>
                <button type="submit" class="btn btn-primary">บันทึก</button>
            </div>
        </form>
    `;

    document.getElementById('editBedForm').onsubmit = function(e) {
        e.preventDefault();
        updateBed(bedId);
    };

    modal.classList.add('active');
}

/**
 * Update bed information
 * @param {string} bedId - Bed ID
 */
function updateBed(bedId) {
    const wardBeds = storage.get('wardBeds') || [];
    const wardRooms = storage.get('wardRooms') || [];
    const bedIndex = wardBeds.findIndex(b => b.id === bedId);

    if (bedIndex === -1) {
        alert('ไม่พบข้อมูลเตียง');
        return;
    }

    const oldBed = wardBeds[bedIndex];
    const oldStatus = oldBed.status;

    const bedName = document.getElementById('editBedName').value.trim();
    const bedNumber = document.getElementById('editBedNumber').value.trim().toUpperCase();
    const bedStatus = document.getElementById('editBedStatus').value;
    const bedNotes = document.getElementById('editBedNotes').value.trim();

    // Validate
    if (!bedName || !bedNumber) {
        alert('⚠️ กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
    }

    // Check duplicate bed number (excluding current bed)
    const existingBed = wardBeds.find(b => b.bedNumber === bedNumber && b.id !== bedId);
    if (existingBed) {
        alert(`⚠️ หมายเลขเตียง "${bedNumber}" ถูกใช้งานแล้ว\n\nกรุณาใช้หมายเลขอื่น`);
        return;
    }

    // Update bed
    wardBeds[bedIndex].bedName = bedName;
    wardBeds[bedIndex].bedNumber = bedNumber;
    wardBeds[bedIndex].status = bedStatus;
    wardBeds[bedIndex].notes = bedNotes;

    // Update patient information if occupied
    if (bedStatus === 'occupied') {
        wardBeds[bedIndex].patientName = document.getElementById('editPatientName')?.value.trim() || null;
        wardBeds[bedIndex].patientHN = document.getElementById('editPatientHN')?.value.trim() || null;
        wardBeds[bedIndex].admissionDate = document.getElementById('editAdmissionDate')?.value || null;
        wardBeds[bedIndex].expectedDischargeDate = document.getElementById('editExpectedDischargeDate')?.value || null;
        wardBeds[bedIndex].dailyRate = parseInt(document.getElementById('editDailyRate')?.value) || 0;
        wardBeds[bedIndex].specialCare = document.getElementById('editSpecialCare')?.checked || false;
        wardBeds[bedIndex].isolation = document.getElementById('editIsolation')?.checked || false;
    } else {
        // Clear patient data if not occupied
        wardBeds[bedIndex].patientName = null;
        wardBeds[bedIndex].patientHN = null;
        wardBeds[bedIndex].patientId = null;
        wardBeds[bedIndex].admissionDate = null;
        wardBeds[bedIndex].expectedDischargeDate = null;
        wardBeds[bedIndex].specialCare = false;
        wardBeds[bedIndex].isolation = false;
    }

    storage.set('wardBeds', wardBeds);

    // Update room statistics if status changed
    if (oldStatus !== bedStatus) {
        const room = wardRooms.find(r => r.id === oldBed.roomId);
        if (room) {
            // Recalculate occupied and available beds
            const roomBeds = wardBeds.filter(b => b.roomId === room.id);
            room.occupiedBeds = roomBeds.filter(b => b.status === 'occupied').length;
            room.availableBeds = room.totalBeds - room.occupiedBeds;

            const roomIndex = wardRooms.findIndex(r => r.id === room.id);
            wardRooms[roomIndex] = room;
            storage.set('wardRooms', wardRooms);
        }
    }

    updateWardStatistics();

    closeModal();
    viewRoomBeds(oldBed.roomId);
    alert(`✅ อัพเดทข้อมูลเตียง "${bedName}" สำเร็จ!`);
}

/**
 * Delete bed with confirmation
 * @param {string} bedId - Bed ID
 */
function deleteBed(bedId) {
    const wardBeds = storage.get('wardBeds') || [];
    const wardRooms = storage.get('wardRooms') || [];
    const bed = wardBeds.find(b => b.id === bedId);

    if (!bed) {
        alert('ไม่พบข้อมูลเตียง');
        return;
    }

    // Check if bed is occupied
    if (bed.status === 'occupied') {
        alert(`⚠️ ไม่สามารถลบเตียง "${bed.bedName}" ได้\n\nเนื่องจากมีผู้ป่วยอยู่\n\nกรุณาย้ายผู้ป่วยหรือเปลี่ยนสถานะเตียงก่อน`);
        return;
    }

    const confirmed = confirm(`คุณต้องการลบเตียง "${bed.bedName}" (${bed.bedNumber}) ใช่หรือไม่?\n\nการดำเนินการนี้ไม่สามารถย้อนกลับได้`);

    if (confirmed) {
        const updatedBeds = wardBeds.filter(b => b.id !== bedId);
        storage.set('wardBeds', updatedBeds);

        // Update room statistics
        const room = wardRooms.find(r => r.id === bed.roomId);
        if (room) {
            if (bed.status === 'available') {
                room.availableBeds = Math.max(0, (room.availableBeds || 0) - 1);
            }

            const roomIndex = wardRooms.findIndex(r => r.id === room.id);
            wardRooms[roomIndex] = room;
            storage.set('wardRooms', wardRooms);
        }

        updateWardStatistics();

        viewRoomBeds(bed.roomId);
        alert(`✅ ลบเตียง "${bed.bedName}" สำเร็จ!`);
    }
}

// ===== Bed Assignment Functions =====
/**
 * Show available beds modal for patient assignment
 * @param {string} patientId - Patient ID (optional)
 */
function showAvailableBedsModal(patientId = null) {
    const wardBeds = storage.get('wardBeds') || [];
    const wardRooms = storage.get('wardRooms') || [];
    const wards = storage.get('wards') || [];
    const patients = storage.get('patients') || [];

    // Get available beds
    const availableBeds = wardBeds.filter(b => b.status === 'available');

    // Get patient info if patientId provided
    let patient = null;
    if (patientId) {
        patient = patients.find(p => p.id === patientId);
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = `
        <div style="max-height: 80vh; overflow-y: auto;">
            <div style="position: sticky; top: 0; background: white; z-index: 10; padding-bottom: 1rem; border-bottom: 2px solid #e5e7eb; margin-bottom: 1.5rem;">
                <h3 style="margin: 0 0 0.5rem 0;">🛏️ เตียงว่าง ${patient ? `สำหรับ ${patient.name}` : ''}</h3>
                <p style="margin: 0; color: #6b7280; font-size: 0.875rem;">
                    มีเตียงว่างทั้งหมด ${availableBeds.length} เตียง
                </p>
                ${patient ? `
                    <div style="margin-top: 1rem; padding: 1rem; background: #eff6ff; border-radius: 0.5rem; border-left: 3px solid #3b82f6;">
                        <p style="margin: 0; color: #1e40af; font-weight: 600;">
                            👤 ${patient.name} (HN: ${patient.hn})
                        </p>
                        <p style="margin: 0.25rem 0 0 0; color: #1e40af; font-size: 0.875rem;">
                            อายุ ${patient.age} ปี | ${patient.gender === 'male' ? 'ชาย' : 'หญิง'}
                        </p>
                    </div>
                ` : ''}
            </div>

            ${availableBeds.length > 0 ? `
                <div style="display: grid; gap: 1rem;">
                    ${availableBeds.map(bed => {
                        const room = wardRooms.find(r => r.id === bed.roomId);
                        const ward = wards.find(w => w.id === bed.wardId);

                        if (!room || !ward) return '';

                        const roomTypeLabel = room.roomType === 'general' ? 'ห้องรวม' : room.roomType === 'single' ? 'ห้องเดี่ยว' : 'ห้องคู่';
                        const pricePerDay = room.pricePerBedPerDay || room.pricePerRoomPerDay || 0;

                        return `
                            <div style="background: white; padding: 1.25rem; border-radius: var(--border-radius); box-shadow: 0 1px 3px rgba(0,0,0,0.1); border: 2px solid #e5e7eb; transition: all 0.2s;" onmouseover="this.style.borderColor='#10b981'" onmouseout="this.style.borderColor='#e5e7eb'">
                                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.75rem;">
                                    <div>
                                        <h4 style="margin: 0; color: #111827;">${bed.bedName}</h4>
                                        <p style="margin: 0.25rem 0 0 0; color: #6b7280; font-size: 0.875rem;">${bed.bedNumber}</p>
                                    </div>
                                    <span style="padding: 0.25rem 0.75rem; border-radius: 999px; font-size: 0.75rem; font-weight: 600; background: #d1fae5; color: #10b981;">
                                        ✅ ว่าง
                                    </span>
                                </div>

                                <div style="background: #f9fafb; padding: 0.75rem; border-radius: 0.5rem; margin-bottom: 0.75rem;">
                                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.5rem;">
                                        <div>
                                            <p style="margin: 0; font-size: 0.75rem; color: #6b7280;">หอผู้ป่วย</p>
                                            <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; font-weight: 600; color: #374151;">${ward.wardName}</p>
                                        </div>
                                        <div>
                                            <p style="margin: 0; font-size: 0.75rem; color: #6b7280;">ห้อง</p>
                                            <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; font-weight: 600; color: #374151;">${room.roomName}</p>
                                        </div>
                                        <div>
                                            <p style="margin: 0; font-size: 0.75rem; color: #6b7280;">ประเภท</p>
                                            <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; font-weight: 600; color: #374151;">${roomTypeLabel}</p>
                                        </div>
                                        <div>
                                            <p style="margin: 0; font-size: 0.75rem; color: #6b7280;">ราคา/วัน</p>
                                            <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; font-weight: 600; color: #10b981;">฿${pricePerDay.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>

                                ${room.amenities && room.amenities.length > 0 ? `
                                    <div style="margin-bottom: 0.75rem;">
                                        <p style="margin: 0 0 0.25rem 0; font-size: 0.75rem; color: #6b7280;">สิ่งอำนวยความสะดวก:</p>
                                        <div style="display: flex; flex-wrap: wrap; gap: 0.25rem;">
                                            ${room.amenities.slice(0, 3).map(a => `
                                                <span style="padding: 0.125rem 0.5rem; background: #eff6ff; color: #1e40af; border-radius: 999px; font-size: 0.625rem;">
                                                    ${a}
                                                </span>
                                            `).join('')}
                                            ${room.amenities.length > 3 ? `
                                                <span style="padding: 0.125rem 0.5rem; background: #f3f4f6; color: #6b7280; border-radius: 999px; font-size: 0.625rem;">
                                                    +${room.amenities.length - 3}
                                                </span>
                                            ` : ''}
                                        </div>
                                    </div>
                                ` : ''}

                                <button onclick="closeModal(); ${patient ? `showAssignBedForm('${bed.id}', '${patient.id}')` : `showQuickAssignForm('${bed.id}')`}" class="btn btn-primary" style="width: 100%; font-size: 0.875rem; padding: 0.625rem;">
                                    ${patient ? '✅ เลือกเตียงนี้' : '➕ มอบหมายผู้ป่วย'}
                                </button>
                            </div>
                        `;
                    }).join('')}
                </div>
            ` : `
                <div style="text-align: center; padding: 3rem; color: #9ca3af;">
                    <p style="font-size: 1.125rem; margin: 0;">ไม่มีเตียงว่าง</p>
                    <p style="font-size: 0.875rem; margin: 0.5rem 0 0 0;">เตียงทั้งหมดถูกใช้งานหมดแล้ว</p>
                </div>
            `}

            <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 2px solid #e5e7eb;">
                <button onclick="closeModal()" class="btn btn-secondary">ปิด</button>
            </div>
        </div>
    `;

    modal.classList.add('active');
}

/**
 * Show form to assign a bed to a patient
 * @param {string} bedId - Bed ID
 * @param {string} patientId - Patient ID
 */
function showAssignBedForm(bedId, patientId) {
    const patients = storage.get('patients') || [];
    const wardBeds = storage.get('wardBeds') || [];
    const wardRooms = storage.get('wardRooms') || [];
    const wards = storage.get('wards') || [];

    const patient = patients.find(p => p.id === patientId);
    const bed = wardBeds.find(b => b.id === bedId);
    const room = wardRooms.find(r => r.id === bed?.roomId);
    const ward = wards.find(w => w.id === bed?.wardId);

    if (!patient || !bed || !room || !ward) {
        alert('ไม่พบข้อมูล');
        return;
    }

    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');

    const today = new Date().toISOString().split('T')[0];
    const pricePerDay = room.pricePerBedPerDay || room.pricePerRoomPerDay || 0;

    modalBody.innerHTML = `
        <h3 style="margin-bottom: 1.5rem;">มอบหมายเตียง</h3>

        <div style="background: #eff6ff; padding: 1rem; border-radius: 0.5rem; margin-bottom: 1.5rem; border-left: 3px solid #3b82f6;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <p style="margin: 0; font-size: 0.75rem; color: #1e40af;">ผู้ป่วย</p>
                    <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #1e40af;">${patient.name}</p>
                    <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: #1e40af;">HN: ${patient.hn}</p>
                </div>
                <div>
                    <p style="margin: 0; font-size: 0.75rem; color: #1e40af;">เตียง</p>
                    <p style="margin: 0.25rem 0 0 0; font-weight: 600; color: #1e40af;">${bed.bedName} (${bed.bedNumber})</p>
                    <p style="margin: 0.25rem 0 0 0; font-size: 0.875rem; color: #1e40af;">${ward.wardName} - ${room.roomName}</p>
                </div>
            </div>
        </div>

        <form id="assignBedForm" style="display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">วันที่รับเข้า *</label>
                    <input type="date" id="admissionDate" required value="${today}"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">คาดว่าจำหน่าย</label>
                    <input type="date" id="expectedDischargeDate"
                           style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                </div>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">ค่าใช้จ่ายต่อวัน (฿) *</label>
                <input type="number" id="dailyRate" required value="${pricePerDay}" min="0"
                       style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);">
                <p style="margin: 0.25rem 0 0 0; font-size: 0.75rem; color: #6b7280;">
                    ราคามาตรฐาน: ฿${pricePerDay.toLocaleString()}/วัน
                </p>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">การดูแลพิเศษ</label>
                <div style="display: flex; gap: 1.5rem; padding: 0.75rem;">
                    <label style="display: flex; align-items: center; gap: 0.5rem;">
                        <input type="checkbox" id="specialCare">
                        <span>⚕️ ดูแลพิเศษ (Special Care)</span>
                    </label>
                    <label style="display: flex; align-items: center; gap: 0.5rem;">
                        <input type="checkbox" id="isolation">
                        <span>🚫 กักโรค (Isolation)</span>
                    </label>
                </div>
            </div>

            <div>
                <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">หมายเหตุ</label>
                <textarea id="assignmentNotes" rows="3" style="width: 100%; padding: 0.75rem; border: 1px solid var(--border-color); border-radius: var(--border-radius);" placeholder="บันทึกข้อมูลเพิ่มเติม เช่น อาการ การวินิจฉัย แผนการรักษา..."></textarea>
            </div>

            <div style="display: flex; gap: 1rem; justify-content: flex-end; margin-top: 1rem;">
                <button type="button" onclick="closeModal()" class="btn btn-secondary">ยกเลิก</button>
                <button type="submit" class="btn btn-primary">✅ ยืนยันการมอบหมาย</button>
            </div>
        </form>
    `;

    document.getElementById('assignBedForm').onsubmit = function(e) {
        e.preventDefault();
        assignPatientToBed(bedId, patientId);
    };

    modal.classList.add('active');
}

/**
 * Assign a patient to a bed
 * @param {string} bedId - Bed ID
 * @param {string} patientId - Patient ID
 */
function assignPatientToBed(bedId, patientId) {
    const patients = storage.get('patients') || [];
    const wardBeds = storage.get('wardBeds') || [];
    const wardRooms = storage.get('wardRooms') || [];

    const patient = patients.find(p => p.id === patientId);
    const bedIndex = wardBeds.findIndex(b => b.id === bedId);
    const bed = wardBeds[bedIndex];

    if (!patient || bedIndex === -1) {
        alert('ไม่พบข้อมูล');
        return;
    }

    // Check if bed is available
    if (bed.status !== 'available') {
        alert(`⚠️ เตียงนี้ไม่ว่าง\n\nสถานะปัจจุบัน: ${bed.status}\nกรุณาเลือกเตียงอื่น`);
        return;
    }

    // Get form data
    const admissionDate = document.getElementById('admissionDate').value;
    const expectedDischargeDate = document.getElementById('expectedDischargeDate').value;
    const dailyRate = parseInt(document.getElementById('dailyRate').value);
    const specialCare = document.getElementById('specialCare').checked;
    const isolation = document.getElementById('isolation').checked;
    const notes = document.getElementById('assignmentNotes').value.trim();

    if (!admissionDate) {
        alert('⚠️ กรุณากรอกวันที่รับเข้า');
        return;
    }

    // Update bed
    wardBeds[bedIndex].status = 'occupied';
    wardBeds[bedIndex].patientId = patientId;
    wardBeds[bedIndex].patientName = patient.name;
    wardBeds[bedIndex].patientHN = patient.hn;
    wardBeds[bedIndex].admissionDate = admissionDate;
    wardBeds[bedIndex].expectedDischargeDate = expectedDischargeDate || null;
    wardBeds[bedIndex].dailyRate = dailyRate;
    wardBeds[bedIndex].specialCare = specialCare;
    wardBeds[bedIndex].isolation = isolation;
    wardBeds[bedIndex].notes = notes;

    storage.set('wardBeds', wardBeds);

    // Update room statistics
    const room = wardRooms.find(r => r.id === bed.roomId);
    if (room) {
        const roomBeds = wardBeds.filter(b => b.roomId === room.id);
        room.occupiedBeds = roomBeds.filter(b => b.status === 'occupied').length;
        room.availableBeds = room.totalBeds - room.occupiedBeds;

        // Update room status
        if (room.availableBeds === 0) {
            room.status = 'full';
        } else {
            room.status = 'available';
        }

        const roomIndex = wardRooms.findIndex(r => r.id === room.id);
        wardRooms[roomIndex] = room;
        storage.set('wardRooms', wardRooms);
    }

    updateWardStatistics();

    closeModal();
    alert(`✅ มอบหมายเตียงสำเร็จ!\n\nผู้ป่วย: ${patient.name}\nเตียง: ${bed.bedName} (${bed.bedNumber})\nวันที่รับเข้า: ${new Date(admissionDate).toLocaleDateString('th-TH')}`);
}

/**
 * Discharge patient from bed
 * @param {string} bedId - Bed ID
 */
function dischargePatientFromBed(bedId) {
    const wardBeds = storage.get('wardBeds') || [];
    const wardRooms = storage.get('wardRooms') || [];
    const bedIndex = wardBeds.findIndex(b => b.id === bedId);
    const bed = wardBeds[bedIndex];

    if (bedIndex === -1) {
        alert('ไม่พบข้อมูลเตียง');
        return;
    }

    if (bed.status !== 'occupied') {
        alert('⚠️ เตียงนี้ไม่มีผู้ป่วย');
        return;
    }

    const patientName = bed.patientName;
    const bedName = bed.bedName;
    const admissionDate = bed.admissionDate ? new Date(bed.admissionDate) : null;
    const dischargeDate = new Date();

    let stayDuration = '';
    if (admissionDate) {
        const days = Math.ceil((dischargeDate - admissionDate) / (1000 * 60 * 60 * 24));
        stayDuration = `\nระยะเวลานอน: ${days} วัน`;
    }

    const confirmed = confirm(`คุณต้องการจำหน่ายผู้ป่วยใช่หรือไม่?\n\nผู้ป่วย: ${patientName}\nHN: ${bed.patientHN}\nเตียง: ${bedName} (${bed.bedNumber})${stayDuration}\n\nเตียงจะว่างและพร้อมใช้งานทันที`);

    if (confirmed) {
        // Clear patient data
        wardBeds[bedIndex].status = 'cleaning'; // Set to cleaning first
        wardBeds[bedIndex].patientId = null;
        wardBeds[bedIndex].patientName = null;
        wardBeds[bedIndex].patientHN = null;
        wardBeds[bedIndex].admissionDate = null;
        wardBeds[bedIndex].expectedDischargeDate = null;
        wardBeds[bedIndex].specialCare = false;
        wardBeds[bedIndex].isolation = false;
        wardBeds[bedIndex].notes = '';

        storage.set('wardBeds', wardBeds);

        // Update room statistics
        const room = wardRooms.find(r => r.id === bed.roomId);
        if (room) {
            const roomBeds = wardBeds.filter(b => b.roomId === room.id);
            room.occupiedBeds = roomBeds.filter(b => b.status === 'occupied').length;
            room.availableBeds = room.totalBeds - room.occupiedBeds;
            room.status = room.availableBeds > 0 ? 'available' : 'full';

            const roomIndex = wardRooms.findIndex(r => r.id === room.id);
            wardRooms[roomIndex] = room;
            storage.set('wardRooms', wardRooms);
        }

        updateWardStatistics();

        viewRoomBeds(bed.roomId);
        alert(`✅ จำหน่ายผู้ป่วยสำเร็จ!\n\nผู้ป่วย: ${patientName}\nเตียง: ${bedName}\n\nเตียงอยู่ในสถานะ "กำลังทำความสะอาด"\nกรุณาเปลี่ยนเป็น "ว่าง" เมื่อพร้อมใช้งาน`);
    }
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

// ===== Appointment Statistics Functions =====

/**
 * Get appointment statistics grouped by doctor
 * @returns {Array} Array of objects with doctor info and appointment count
 */
function getAppointmentsByDoctor() {
    const appointments = storage.get('appointments') || [];
    const doctors = storage.get('doctors') || [];

    // Count appointments per doctor
    const doctorStats = {};

    appointments.forEach(apt => {
        if (apt.status !== 'cancelled') {
            const doctorId = apt.doctorId || apt.doctorName;
            if (!doctorStats[doctorId]) {
                doctorStats[doctorId] = {
                    doctorName: apt.doctorName,
                    specialty: apt.doctorSpecialty,
                    count: 0,
                    confirmed: 0,
                    pending: 0
                };
            }
            doctorStats[doctorId].count++;
            if (apt.status === 'confirmed') {
                doctorStats[doctorId].confirmed++;
            } else if (apt.status === 'pending') {
                doctorStats[doctorId].pending++;
            }
        }
    });

    // Convert to array and sort by count
    return Object.values(doctorStats).sort((a, b) => b.count - a.count);
}

/**
 * Get appointment counts by date range
 * @param {string} range - 'day', 'week', or 'month'
 * @returns {Object} Statistics object with counts
 */
function getAppointmentsByDateRange(range = 'week') {
    const appointments = storage.get('appointments') || [];
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let startDate;
    switch(range) {
        case 'day':
            startDate = today;
            break;
        case 'week':
            startDate = new Date(today);
            startDate.setDate(today.getDate() - 7);
            break;
        case 'month':
            startDate = new Date(today);
            startDate.setMonth(today.getMonth() - 1);
            break;
        default:
            startDate = new Date(today);
            startDate.setDate(today.getDate() - 7);
    }

    const filtered = appointments.filter(apt => {
        const aptDate = new Date(apt.date);
        return aptDate >= startDate && aptDate <= now;
    });

    // Group by date
    const dateGroups = {};
    filtered.forEach(apt => {
        const date = apt.date;
        if (!dateGroups[date]) {
            dateGroups[date] = {
                date: date,
                total: 0,
                confirmed: 0,
                pending: 0,
                cancelled: 0
            };
        }
        dateGroups[date].total++;
        dateGroups[date][apt.status]++;
    });

    return {
        range: range,
        startDate: startDate.toISOString(),
        endDate: now.toISOString(),
        totalAppointments: filtered.length,
        dailyStats: Object.values(dateGroups).sort((a, b) =>
            new Date(a.date) - new Date(b.date)
        )
    };
}

/**
 * Get comprehensive appointment statistics
 * @returns {Object} Complete statistics object
 */
function getAppointmentStatistics() {
    const appointments = storage.get('appointments') || [];
    const now = new Date();

    const stats = {
        total: appointments.length,
        confirmed: 0,
        pending: 0,
        cancelled: 0,
        upcoming: 0,
        past: 0,
        today: 0,
        thisWeek: 0,
        thisMonth: 0,
        byDoctor: getAppointmentsByDoctor(),
        weeklyTrend: getAppointmentsByDateRange('week'),
        monthlyTrend: getAppointmentsByDateRange('month')
    };

    // Calculate basic counts
    appointments.forEach(apt => {
        // Status counts
        stats[apt.status]++;

        // Time-based counts
        const aptDateTime = new Date(`${apt.date}T${apt.time}`);
        if (aptDateTime >= now) {
            stats.upcoming++;
        } else {
            stats.past++;
        }

        // Today
        const aptDate = new Date(apt.date);
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        if (aptDate.toDateString() === today.toDateString()) {
            stats.today++;
        }

        // This week
        const weekStart = new Date(today);
        weekStart.setDate(today.getDate() - today.getDay());
        const weekEnd = new Date(weekStart);
        weekEnd.setDate(weekStart.getDate() + 6);
        if (aptDate >= weekStart && aptDate <= weekEnd) {
            stats.thisWeek++;
        }

        // This month
        const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
        const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        if (aptDate >= monthStart && aptDate <= monthEnd) {
            stats.thisMonth++;
        }
    });

    return stats;
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
