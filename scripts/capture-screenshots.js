const { chromium } = require('playwright');
const http = require('http');

// Viewports
const viewports = {
  desktop: { width: 1920, height: 1080 },
  tablet: { width: 768, height: 1024 },
  mobile: { width: 390, height: 844 }
};

// Sample patient data
const samplePatient = {
  name: 'นายสมชาย ใจดี',
  gender: 'ชาย',
  birthDate: '1990-01-01',
  phone: '0812345678',
  address: '123 ถ.สุขุมวิท แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110'
};

async function startServer() {
  return new Promise((resolve) => {
    const handler = require('http-server').createServer({ root: './' });
    const server = handler.listen(8000, () => {
      console.log('✅ Server started on http://localhost:8000');
      resolve(server);
    });
  });
}

async function waitForServer(url, timeout = 10000) {
  const start = Date.now();
  while (Date.now() - start < timeout) {
    try {
      await new Promise((resolve, reject) => {
        http.get(url, (res) => {
          if (res.statusCode === 200) resolve();
          else reject();
        }).on('error', reject);
      });
      return true;
    } catch (e) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
  throw new Error('Server did not start in time');
}

async function addSamplePatient(page, needClick = false) {
  // Click add patient button only if needed
  if (needClick) {
    await page.click('#addPatientBtn');
    await page.waitForTimeout(500);
  }

  // Fill form
  await page.fill('#patientName', samplePatient.name);
  await page.selectOption('#patientGender', samplePatient.gender);
  await page.fill('#patientBirthDate', samplePatient.birthDate);
  await page.fill('#patientPhone', samplePatient.phone);
  await page.fill('#patientAddress', samplePatient.address);

  await page.waitForTimeout(500);
}

async function captureDesktopScreenshots(page) {
  console.log('\n📸 Capturing Desktop Screenshots (1920x1080)...');

  await page.setViewportSize(viewports.desktop);

  // 1. Dashboard Overview
  await page.goto('http://localhost:8000');
  await page.waitForLoadState('networkidle');
  await page.screenshot({ path: 'POC/desktop/01-dashboard-overview.png', fullPage: true });
  console.log('✅ 01-dashboard-overview.png');

  // 2. Patient List (Empty)
  await page.click('a[href="#patients"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/02-patient-list-empty.png', fullPage: true });
  console.log('✅ 02-patient-list-empty.png');

  // 3. Add Patient Modal (Empty)
  await page.click('#addPatientBtn');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/03-add-patient-modal.png', fullPage: true });
  console.log('✅ 03-add-patient-modal.png');

  // 4. Add Patient Form (Filled) - stay in same modal
  await addSamplePatient(page);
  await page.screenshot({ path: 'POC/desktop/04-add-patient-filled.png', fullPage: true });
  console.log('✅ 04-add-patient-filled.png');

  // Submit form
  page.once('dialog', async dialog => await dialog.accept());
  await page.click('#addPatientForm button[type="submit"]');
  await page.waitForTimeout(1000);

  // 5. Patient List (With Data)
  await page.screenshot({ path: 'POC/desktop/05-patient-list-data.png', fullPage: true });
  console.log('✅ 05-patient-list-data.png');

  // Add 2 more patients
  for (let i = 2; i <= 3; i++) {
    await page.click('#addPatientBtn');
    await page.waitForTimeout(300);
    await page.fill('#patientName', `ผู้ป่วย ${i}`);
    await page.selectOption('#patientGender', i % 2 === 0 ? 'หญิง' : 'ชาย');
    await page.fill('#patientBirthDate', `199${i}-0${i}-0${i}`);
    await page.fill('#patientPhone', `08123456${i}${i}`);
    await page.fill('#patientAddress', `ที่อยู่ ${i}`);
    page.once('dialog', async dialog => await dialog.accept());
    await page.click('#addPatientForm button[type="submit"]');
    await page.waitForTimeout(1000);
  }

  // 6. Patient Details Modal
  await page.click('button[onclick*="viewPatient"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/06-patient-details.png', fullPage: true });
  console.log('✅ 06-patient-details.png');

  // Close modal
  await page.click('#modalClose');
  await page.waitForTimeout(300);

  // 7. Patient Search
  await page.fill('.search-box', 'สมชาย');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/07-patient-search.png', fullPage: true });
  console.log('✅ 07-patient-search.png');

  // Clear search
  await page.fill('.search-box', '');
  await page.waitForTimeout(300);

  // 8. Dashboard with Data
  await page.click('a[href="#dashboard"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/08-dashboard-stats.png', fullPage: true });
  console.log('✅ 08-dashboard-stats.png');

  // 9. Doctors List
  await page.click('a[href="#doctors"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/09-doctors-list.png', fullPage: true });
  console.log('✅ 09-doctors-list.png');

  // 10. Rooms Overview
  await page.click('a[href="#rooms"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/10-rooms-overview.png', fullPage: true });
  console.log('✅ 10-rooms-overview.png');

  // 11. Appointments
  await page.click('a[href="#appointments"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/11-appointments.png', fullPage: true });
  console.log('✅ 11-appointments.png');

  // 12. Wards (หอผู้ป่วย)
  await page.click('a[href="#wards"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/12-wards-list.png', fullPage: true });
  console.log('✅ 12-wards-list.png');

  // 13. Doctor Profile Modal
  await page.click('a[href="#doctors"]');
  await page.waitForTimeout(300);
  await page.click('button[onclick*="viewDoctor"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/13-doctor-profile.png', fullPage: true });
  console.log('✅ 13-doctor-profile.png');
  await page.click('#modalClose');
  await page.waitForTimeout(300);

  // 14. Doctor Schedule Modal
  await page.evaluate(() => {
    viewDoctorSchedule(1);
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/14-doctor-schedule.png', fullPage: true });
  console.log('✅ 14-doctor-schedule.png');
  await page.click('button[onclick*="closeModal"]');
  await page.waitForTimeout(300);

  // 15. Doctor Status Toggle Modal
  await page.evaluate(() => {
    toggleDoctorStatus(1);
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/15-doctor-status-toggle.png', fullPage: true });
  console.log('✅ 15-doctor-status-toggle.png');
  await page.click('button[onclick*="closeModal"]');
  await page.waitForTimeout(300);

  // 16. Doctor Performance Modal
  await page.evaluate(() => {
    viewDoctorPerformance(1);
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/16-doctor-performance.png', fullPage: true });
  console.log('✅ 16-doctor-performance.png');
  await page.click('button[onclick*="closeModal"]');
  await page.waitForTimeout(300);

  // 17. Department Management Modal
  await page.evaluate(() => {
    viewDepartments();
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/17-departments.png', fullPage: true });
  console.log('✅ 17-departments.png');
  await page.click('button[onclick*="closeModal"]');
  await page.waitForTimeout(300);

  // 18. Ward Details Modal
  await page.click('a[href="#wards"]');
  await page.waitForTimeout(300);
  await page.click('button[onclick*="viewWardDetails"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/18-ward-details.png', fullPage: true });
  console.log('✅ 18-ward-details.png');
  await page.click('button[onclick*="closeModal"]');
  await page.waitForTimeout(300);

  // 19. Room Management Modal (for ward)
  await page.evaluate(() => {
    viewWardRooms('ward-001');
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/19-ward-rooms.png', fullPage: true });
  console.log('✅ 19-ward-rooms.png');
  await page.click('button[onclick*="closeModal"]');
  await page.waitForTimeout(300);

  // 20. Bed Management Modal
  await page.evaluate(() => {
    viewRoomBeds('wroom-001');
  });
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/desktop/20-room-beds.png', fullPage: true });
  console.log('✅ 20-room-beds.png');
  await page.click('button[onclick*="closeModal"]');
  await page.waitForTimeout(300);

  // 21. Available Beds Modal
  await page.click('#modalClose');
  await page.waitForTimeout(500);
  await page.click('a[href="#patients"]');
  await page.waitForTimeout(500);
  await page.click('button[onclick*="viewPatient"]');
  await page.waitForTimeout(500);

  // Try to click assign bed button if exists
  try {
    await page.click('button:has-text("มอบหมายเตียง")', { timeout: 2000 });
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'POC/desktop/21-available-beds.png', fullPage: true });
    console.log('✅ 21-available-beds.png');
  } catch (e) {
    // If button doesn't exist, just show modal with evaluate
    await page.click('#modalClose');
    await page.waitForTimeout(300);
    await page.evaluate(() => {
      showAvailableBedsModal(null);
    });
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'POC/desktop/21-available-beds.png', fullPage: true });
    console.log('✅ 21-available-beds.png');
  }

  // Clean up - close modal
  await page.click('button[onclick*="closeModal"]');
  await page.waitForTimeout(500);
}

async function captureTabletScreenshots(page) {
  console.log('\n📱 Capturing Tablet Screenshots (768x1024)...');

  await page.setViewportSize(viewports.tablet);

  // 1. Dashboard Tablet
  await page.goto('http://localhost:8000');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/tablet/01-dashboard-tablet.png', fullPage: true });
  console.log('✅ 01-dashboard-tablet.png');

  // 2. Patient List Tablet
  await page.click('a[href="#patients"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/tablet/02-patient-list-tablet.png', fullPage: true });
  console.log('✅ 02-patient-list-tablet.png');

  // 3. Navigation Tablet
  await page.click('a[href="#dashboard"]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'POC/tablet/03-navigation-tablet.png', fullPage: true });
  console.log('✅ 03-navigation-tablet.png');
}

async function captureMobileScreenshots(page) {
  console.log('\n📱 Capturing Mobile Screenshots (390x844)...');

  await page.setViewportSize(viewports.mobile);

  // 1. Mobile Dashboard (Menu Closed)
  await page.goto('http://localhost:8000');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/mobile/01-mobile-dashboard.png', fullPage: true });
  console.log('✅ 01-mobile-dashboard.png');

  // 2. Mobile Menu (Open)
  await page.click('#navToggle');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'POC/mobile/02-mobile-menu-open.png', fullPage: true });
  console.log('✅ 02-mobile-menu-open.png');

  // 3. Mobile Stats
  await page.click('#navToggle');
  await page.waitForTimeout(300);
  await page.screenshot({ path: 'POC/mobile/03-mobile-stats.png', fullPage: true });
  console.log('✅ 03-mobile-stats.png');

  // 4. Mobile Patient List
  await page.click('#navToggle');
  await page.click('a[href="#patients"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/mobile/04-mobile-patient-list.png', fullPage: true });
  console.log('✅ 04-mobile-patient-list.png');

  // 5. Mobile Add Patient Modal
  await page.click('#addPatientBtn');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/mobile/05-mobile-add-patient.png', fullPage: true });
  console.log('✅ 05-mobile-add-patient.png');

  // Close modal
  await page.click('#modalClose');
  await page.waitForTimeout(300);

  // 6. Mobile Patient Details
  await page.click('button[onclick*="viewPatient"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/mobile/06-mobile-patient-details.png', fullPage: true });
  console.log('✅ 06-mobile-patient-details.png');
}

async function captureFeatureScreenshots(page) {
  console.log('\n🎯 Capturing Feature Screenshots...');

  await page.setViewportSize(viewports.desktop);

  // 1. Form Validation Error
  await page.goto('http://localhost:8000');
  await page.click('a[href="#patients"]');
  await page.waitForTimeout(300);
  await page.click('#addPatientBtn');
  await page.waitForTimeout(300);

  // Fill invalid data
  await page.fill('#patientName', 'AB'); // Too short
  await page.fill('#patientPhone', '123'); // Invalid
  await page.click('#addPatientForm button[type="submit"]');
  await page.waitForTimeout(500);

  await page.screenshot({ path: 'POC/features/01-form-validation.png', fullPage: true });
  console.log('✅ 01-form-validation.png');

  // 2. Search Results
  await page.click('#modalClose');
  await page.waitForTimeout(300);
  await page.fill('.search-box', 'ผู้ป่วย');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/features/02-search-results.png', fullPage: true });
  console.log('✅ 02-search-results.png');

  // 3. Empty State (Appointments)
  await page.click('a[href="#appointments"]');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/features/03-empty-state.png', fullPage: true });
  console.log('✅ 03-empty-state.png');

  // 4. Modal Overlay
  await page.click('a[href="#patients"]');
  await page.waitForTimeout(300);
  await page.click('#addPatientBtn');
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'POC/features/04-modal-overlay.png', fullPage: true });
  console.log('✅ 04-modal-overlay.png');
}

async function main() {
  console.log('🚀 Starting automated screenshot capture...\n');

  // Start server
  const httpServer = require('http-server');
  const server = httpServer.createServer({ root: './' });
  server.listen(8000);
  console.log('✅ Server started on http://localhost:8000\n');

  // Wait for server
  await waitForServer('http://localhost:8000');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // Capture all screenshots
    await captureDesktopScreenshots(page);
    await captureTabletScreenshots(page);
    await captureMobileScreenshots(page);
    await captureFeatureScreenshots(page);

    console.log('\n✅ All screenshots captured successfully!');
    console.log('\n📁 Screenshots saved to POC/ folder:');
    console.log('   - Desktop: 21 screenshots (Dashboard, Patients, Doctors, Rooms, Wards, All Modals)');
    console.log('   - Tablet: 3 screenshots');
    console.log('   - Mobile: 6 screenshots');
    console.log('   - Features: 4 screenshots');
    console.log('   Total: 34 screenshots\n');

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await browser.close();
    server.close();
    console.log('🛑 Server stopped');
  }
}

main();
