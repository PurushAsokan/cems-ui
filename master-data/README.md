# Master Data Module

## Overview

The Master Data module contains all foundational setup screens for the CEMS (College Exam Management System). These screens must be configured before operational modules can function properly.

**Access Level:** Super Admin, Exam Controller Only

---

## 📁 Screens in this Module

### 1. Degree & Subject Setup
**File:** `degree-subject-setup.html`

**Purpose:** Configure master data for degree programs and subject catalog

**Key Features:**
- Degree program management (UG/PG, Department, Duration)
- Subject master (Subject code, Name, Credits, Type)
- Exam duration and maximum marks configuration
- Subject type classification (Core/Elective/Open Elective)

**User Role:** Admin / Exam Controller

---

### 2. Program-Subject Mapping
**File:** `program-subject-mapping.html`

**Purpose:** Map subjects to specific programs, years, and semesters

**Key Features:**
- Select degree program and semester
- Assign subjects from master catalog
- Define mandatory vs. elective subjects
- Configure minimum/maximum subject selection rules
- Set prerequisite subjects

**User Role:** Admin / Deputy Controller

---

### 3. Fee Structure Configuration
**File:** `fee-structure.html`

**Purpose:** Configure exam fees for different programs and examination types

**Key Features:**
- Regular exam fee structure by program/year
- Supplementary exam fee (₹800/subject + ₹200 processing)
- Revaluation fee (₹500/subject + ₹100 processing)
- Retotaling fee (₹200/subject)
- Duplicate mark sheet fee (₹300)
- Fee change history tracking

**User Role:** Super Admin, Exam Controller Only

---

### 4. Grading System Configuration
**File:** `grading-system.html`

**Purpose:** Configure university grading scale, grade points, and classification rules

**Key Features:**
- 7-point grading scale (O, A+, A, B+, B, C, F)
- Grade point mapping (10 to 0)
- Marks range definition (90-100 for O, 80-89 for A+, etc.)
- SGPA/CGPA calculation formulas
- Degree classification rules (First Class with Distinction, First Class, etc.)
- Pass/Fail criteria (minimum 40% in CIA, ESE, and Total)

**User Role:** Super Admin, Exam Controller Only

---

### 5. User Management
**File:** `user-management.html`

**Purpose:** Manage staff accounts, role assignments, and biometric authentication

**Key Features:**
- User account creation and management
- 5-tier role hierarchy:
  1. Super Admin (Full system access)
  2. Exam Controller (Final approval authority)
  3. Deputy Controller (Level 2 verification)
  4. Assistant Controller (Level 1 verification)
  5. Data Entry Operator (Data entry only)
- Biometric enrollment status tracking
- Active session monitoring
- User activity audit log

**User Role:** Super Admin Only

---

## 🔄 Data Flow

```
Master Data Setup (Module 0)
    ↓
Operational Modules (Modules 1-10)
    ↓
Reports & Outputs
```

### Dependencies:
1. **Degree & Subject Setup** → Must be completed before Program-Subject Mapping
2. **Program-Subject Mapping** → Required before Exam Registration
3. **Fee Structure** → Auto-calculates fees during Registration
4. **Grading System** → Used in Result Processing and Mark Sheet generation
5. **User Management** → Required for all module access control

---

## 📊 Integration Points

### With Other Modules:

| Master Data Screen | Used By Modules |
|-------------------|----------------|
| Degree & Subject Setup | Registration, Scheduling, Internal Assessment, Results |
| Program-Subject Mapping | Registration, Scheduling, Hall Ticket, Results |
| Fee Structure | Registration (Regular & Supplementary), Revaluation, Retotaling |
| Grading System | Results, Mark Sheet, Certificates |
| User Management | All modules (access control) |

---

## 🔒 Access Control

### Role-Based Screen Access:

| Screen | Super Admin | Exam Controller | Deputy Controller | Asst Controller | Data Entry |
|--------|------------|----------------|------------------|-----------------|-----------|
| Degree & Subject Setup | ✅ Full | ✅ Full | ✅ View Only | ✅ View Only | ❌ No Access |
| Program-Subject Mapping | ✅ Full | ✅ Full | ✅ Full | ✅ View Only | ❌ No Access |
| Fee Structure | ✅ Full | ✅ Full | ❌ View Only | ❌ No Access | ❌ No Access |
| Grading System | ✅ Full | ✅ Full | ❌ View Only | ❌ No Access | ❌ No Access |
| User Management | ✅ Full | ❌ No Access | ❌ No Access | ❌ No Access | ❌ No Access |

---

## ⚠️ Important Notes

### 1. Data Modification Restrictions:
- **Grading System:** Changes only after official university notification
- **Fee Structure:** Requires Controller approval and effective date specification
- **User Roles:** Once assigned, role changes require Super Admin approval
- **Subject Codes:** Cannot be changed after student registrations begin

### 2. Data Integrity:
- All changes are logged in audit trail
- Historical data is preserved (never deleted)
- Fee and grade changes are effective from specified dates only
- User account suspension does not delete historical data

### 3. Biometric Authentication:
- All users must complete biometric enrollment before access
- System access is premises-only (no remote access)
- Failed login attempts (>5) trigger automatic account suspension
- Audit logs track all login attempts and system access

---

## 🎯 Setup Sequence (Recommended)

For new system installation, configure in this order:

1. **User Management** → Create Admin and Controller accounts
2. **Grading System** → Configure university grading scale
3. **Degree & Subject Setup** → Add programs and subject catalog
4. **Program-Subject Mapping** → Map subjects to semesters
5. **Fee Structure** → Configure all fee types

---

## 📝 Change Log

| Date | Screen | Change Description | Modified By |
|------|--------|-------------------|-------------|
| 2025-11-27 | All | Created Master Data module | Development Team |
| 2025-11-27 | Fee Structure | Added retotaling and supplementary fees | Development Team |
| 2025-11-27 | User Management | Implemented 5-tier role hierarchy | Development Team |

---

## 📞 Support

For master data configuration assistance:
- **Super Admin:** System Administrator (admin@sgc.edu.in)
- **Technical Support:** IT Department
- **Documentation:** See `/docs/CEMS_Screen_Flow_Specification.md`

---

**Module Status:** ✅ Complete (5/5 screens implemented)
**Last Updated:** November 27, 2025
**Maintained By:** Portx Software Solutions
