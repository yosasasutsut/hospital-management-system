# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.7.0] - 2025-10-11

### Added
- **Appointment Reminders System** (Day 12)
  - getTodaysAppointments() - Returns all non-cancelled appointments for today
  - getUpcomingAppointments(days) - Returns appointments within next N days
  - updateAppointmentReminders() - Updates reminder badges on dashboard
  - Visual notification badges with gradient design:
    - Today's appointments (orange gradient)
    - Upcoming appointments 3 days (blue gradient)
  - Dynamic badge indicators that show/hide based on reminder counts
  - Integrated into dashboard auto-loading
  - JSDoc documentation for all reminder functions

### Changed
- Updated version to 1.7.0
- Enhanced dashboard with appointment reminder section
- Improved user awareness of upcoming appointments

### Technical
- Helper functions use proper date comparison logic
- Automatic badge visibility toggling
- Filters out cancelled appointments
- Real-time updates when dashboard loads

---

## [1.6.0] - 2025-10-11

### Added
- **Edit Appointment Functionality** (Day 11)
  - Complete appointment editing with pre-filled modal form
  - Edit patient, doctor, date, time, status, and notes
  - Smart validation preventing edits to:
    - Past appointments
    - Cancelled appointments
  - Real-time form validation:
    - Prevents scheduling in the past
    - Required field validation
    - Error messages with visual feedback
  - Status change capability (pending ↔ confirmed)
  - Auto-update dashboard after edit
  - Success/error notifications

- **Enhanced Appointment Data Model**
  - Added `updatedAt` timestamp tracking
  - Tracks last modification time for appointments

### Changed
- Updated version to 1.6.0
- Improved appointment management workflow
- Enhanced user experience with better validation messages
- Updated JSDoc documentation for edit functions

### Technical
- `editAppointment(appointmentId)` function with full implementation
- Modal-based edit form with pre-populated values
- Date/time comparison logic for validation
- Spread operator for efficient object updates
- Event handler for form submission with validation
- LocalStorage update with array index finding

---

## [1.5.0] - 2025-10-10

### Added
- **Comprehensive Room Management System** (Day 10)
  - Thai hospital-standard room types with realistic pricing:
    - Ward (ห้องรวม): 1,500 THB/day, 6-bed capacity
    - Semi-Private (ห้อง 2 เตียง): 3,500 THB/day, 2-bed capacity
    - Private (ห้องเดี่ยว): 5,000 THB/day, single occupancy
    - VIP: 12,000 THB/day with premium amenities
    - Suite: 25,000 THB/day with luxury features

  - 7 color-coded status indicators:
    - Available (ว่าง): Green gradient
    - Occupied (มีผู้ป่วย): Red gradient
    - Cleaning (กำลังทำความสะอาด): Blue gradient
    - Dirty (รอทำความสะอาด): Orange gradient
    - Maintenance (ซ่อมบำรุง): Purple gradient
    - Reserved (จองแล้ว): Cyan gradient
    - Blocked (ปิดใช้งาน): Gray gradient

- **Enhanced Room Display**
  - Modern card-based layout with grid system
  - Gradient headers by room status
  - Comprehensive room information:
    - Building and floor
    - Pricing with Thai Baht formatting
    - Capacity and occupancy progress bars
    - Amenities preview (4 items + counter)
    - Last cleaned timestamp
    - Notes section (conditional)
  - Hover effects (lift and shadow)
  - Responsive design (min 320px cards)

- **Room Search and Filter**
  - Real-time search by room number, building, type
  - Advanced filters:
    - Status filter (7 options)
    - Room type filter (5 types)
    - Floor filter (floors 1-5)
  - Combined filter logic
  - Result count display
  - Empty state with clear button
  - Clear all filters functionality

- **Room Details Modal**
  - Comprehensive modal with all room information
  - Status badge with gradient
  - Pricing and capacity cards
  - Animated occupancy progress bar
  - All amenities grid display (responsive)
  - Cleaning information with time since last cleaned
  - Notes section (conditional display)
  - Room summary with bullet points

- **Room Statistics Dashboard**
  - 5 gradient cards showing room counts:
    - Available rooms (green)
    - Occupied rooms (red)
    - Cleaning rooms (blue)
    - Maintenance rooms (purple)
    - Reserved rooms (cyan)
  - Auto-updates with dashboard
  - Matches appointment statistics style
  - Responsive grid layout

### Changed
- Updated version to 1.5.0
- Enhanced room data structure with comprehensive fields
- Improved room management section with filters
- Expanded dashboard with room statistics

### Technical
- 10 sample rooms across 5 floors
- Comprehensive room data model:
  - Room number, type, and type name in Thai
  - Building and floor information
  - Capacity and current occupancy tracking
  - Price per day
  - Amenities array
  - Last cleaned timestamp
  - Notes field
  - Status tracking
- getRoomStatusConfig() helper function
- searchAndFilterRooms() with multi-criteria filtering
- loadRoomStatistics() for dashboard integration
- JSDoc documentation for all functions
- Event listeners for real-time filtering

---

## [1.4.0] - 2025-10-10

### Added
- **Enhanced Appointment List View** (Day 9)
  - Comprehensive appointment display with full details
  - Automatic sorting by date and time (newest first)
  - Color-coded appointment cards:
    - Past appointments: Gray background with gray border
    - Upcoming appointments: Blue background with blue border
  - Status badges with color indicators:
    - Pending (รอยืนยัน): Orange badge
    - Confirmed (ยืนยันแล้ว): Green badge
    - Cancelled (ยกเลิกแล้ว): Red badge
  - Time-based status indicators (ผ่านไปแล้ว / กำลังจะถึง)
  - Thai date formatting for better readability
  - Detailed appointment cards showing:
    - Patient name and HN
    - Doctor name and specialty
    - Date and time with Thai format
    - Notes/remarks (if available)
  - Action buttons:
    - View details modal
    - Edit (for upcoming appointments)
    - Cancel with confirmation
  - Responsive grid layout for appointment information
  - Shadow effects and modern card design

### Added - Additional Features
- **Appointment Details Modal**
  - Full appointment information display
  - Status visualization with colors
  - Creation timestamp tracking
  - Organized sections for patient, doctor, and appointment info

- **Cancel Appointment Functionality**
  - Confirmation dialog before cancellation
  - Updates appointment status to 'cancelled'
  - Auto-refresh dashboard statistics
  - Preserves appointment history

### Changed
- Enhanced `loadAppointments()` function with advanced features
- Improved appointment card UI with modern design
- Updated version to 1.4.0 in app.js
- Better visual hierarchy for appointment information
- Conditional button display based on appointment status and time

### Technical
- Smart date/time comparison for status determination
- Efficient sorting algorithm for appointments
- JSDoc documentation for all new functions
- Status-based conditional rendering
- Thai locale date formatting

---

## [1.3.0] - 2025-10-09

### Added
- **Appointment Booking System** (Day 8)
  - Create new appointment form with modal interface
  - Select patient from existing patient list
  - Select doctor from active doctors
  - Date and time picker for appointment scheduling
  - Optional notes field for additional information
  - Appointment status tracking (pending, confirmed, cancelled)
  - Automatic validation preventing past date selection
  - Disabled state when no patients exist in system
  - Auto-update dashboard statistics after appointment creation
  - JSDoc documentation for appointment functions

### Changed
- Enhanced appointments section with full CRUD capability
- Updated loadDashboard() to reflect appointment counts
- Improved user feedback with success messages

### Technical
- Appointment data structure includes: id, patient info, doctor info, date/time, notes, status
- LocalStorage persistence for appointments
- Form validation with required fields
- Modal-based user interface for better UX

---

## [1.2.0] - 2025-10-07

### Added
- **Patient Statistics Dashboard** (Day 7)
  - Gender distribution chart (Pie chart)
  - Age group distribution chart (Bar chart)
  - Real-time chart updates when patient data changes
  - Chart.js library integration (v4.4.1)
  - Statistics calculated by gender (Male/Female/Unspecified)
  - Age groups categorized: 0-18, 19-30, 31-45, 46-60, 61+
  - Responsive chart containers with proper styling
  - JSDoc documentation for statistics functions

### Changed
- Enhanced dashboard with visual data representation
- Updated loadDashboard() to include chart rendering
- Charts automatically refresh on patient add/edit/delete

### Technical
- Chart.js 4.4.1 via CDN
- Global chart instances for proper chart updates
- Color-coded visualizations for better UX

---

## [1.1.0] - 2025-10-05

### Added
- **Modern Development Setup**
  - Added `package.json` with npm scripts for easy development
  - Added `live-server` as dev dependency for auto-reload
  - Added `manifest.json` for PWA support

- **Enhanced HTML Meta Tags**
  - SEO optimization with comprehensive meta tags
  - Open Graph tags for better social media sharing
  - Twitter Card support
  - PWA meta tags (theme-color, apple-mobile-web-app)
  - Emoji favicon using SVG data URI

- **Documentation Improvements**
  - Added CHANGELOG.md for version tracking
  - Updated README.md with npm installation instructions
  - Detailed tech stack information
  - Updated development log

### Changed
- Version bumped from 1.0.0 to 1.1.0
- Updated JavaScript header with version 1.1.0 and last updated date
- Enhanced README installation guide with npm instructions
- Improved meta description for better SEO

### Technical
- Node.js 18+ requirement specified
- npm 9+ requirement specified
- Modern web standards compliance

---

## [1.0.0] - 2025-10-05

### Added (Day 2)
- **Enhanced Patient Registration**
  - Gender selection (Male/Female/Not specified)
  - Birth date picker with auto-age calculation
  - Address field with textarea
  - Comprehensive form validation
  - Phone number validation (9-10 digits)
  - Required field indicators with asterisks
  - Error messages for invalid inputs

- **Patient Search**
  - Real-time search functionality
  - Search by name, HN, or phone number
  - Dynamic table filtering
  - "No results" message

- **Code Quality**
  - JSDoc documentation for all functions
  - Improved code structure and readability
  - Better comments and documentation
  - Enhanced user feedback messages

### Changed
- Updated patient table to include gender column
- Updated patient data model with new fields (gender, birthDate, address)
- Enhanced patient view modal to show all new fields

### Initial Release (Day 1)
- **Core Features**
  - Responsive web design (Mobile/Tablet/Desktop)
  - Dashboard with statistics cards
  - Patient management (add, view, list)
  - Basic appointment tracking
  - Doctor information display
  - Room management display
  - Modal system for forms and details

- **UI/UX**
  - Mobile-first CSS design
  - Clean and modern interface
  - Hospital theme with appropriate colors
  - Smooth animations and transitions
  - Navigation menu with mobile toggle

- **Data Management**
  - LocalStorage-based persistence
  - Sample data initialization
  - CRUD operations for patients

- **Documentation**
  - Comprehensive README.md
  - 60-day development roadmap
  - Setup instructions
  - Contribution guidelines

---

## Version History

- **1.2.0** (2025-10-07) - Patient statistics dashboard with charts
- **1.1.0** (2025-10-05) - Modern setup, PWA support, enhanced meta tags
- **1.0.0** (2025-10-05) - Initial release with patient management

---

## Upcoming Features (Roadmap)

### v1.2.0 (Planned)
- Patient filter by age range
- Patient statistics and charts
- Export patient data to CSV

### v1.3.0 (Planned)
- Appointment calendar view
- Appointment creation and management
- Doctor schedule management

### v2.0.0 (Future)
- Backend API integration
- User authentication
- Role-based access control
- Real-time updates

See [ROADMAP.md](ROADMAP.md) for complete development plan.

---

**Legend:**
- `Added` - New features
- `Changed` - Changes in existing functionality
- `Deprecated` - Soon-to-be removed features
- `Removed` - Removed features
- `Fixed` - Bug fixes
- `Security` - Security improvements
