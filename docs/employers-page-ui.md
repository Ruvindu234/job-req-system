# Employers Page UI — `/employers`

**File:** `src/app/employers/page.js`

---

## Page Layout (Top to Bottom)

### 1. Header (Sticky)
- `Header` (type 2) rendered twice — once static, once sticky on scroll.

---

### 2. Page Hero — `EmployersPageHeader`
**File:** `src/components/sections/employers/EmployersPageHeader.js`

- Full-width banner with background image (`pheader-bg.webp`)
- Badge: **"// Recruitment & Migration Solutions"**
- Large `<h1>`: **"Employers"**
- Tagline: **"If you need 'em, we'll find 'em"**
- Breadcrumb: `Home > Employers`
- Animated with WOW.js (`fadeInDown` / `fadeInUp`)

---

### 3. Content Block — `EmployerContent`
**File:** `src/components/sections/employers/EmployerContent.js`

- Full-width hero image (`tj-service-1.webp`)
- Section title: **"Recruitment is a time-consuming and complex process."**
- Intro text: pitch about Skills In Motion's integrated recruitment solutions (overseas + local)
- **"We Offer"** checklist (3 items):
  - Highly competitive rates
  - Recruitment fees payable after 3 months of placement
  - Flexibility to use your own migration agent (or they recommend trusted ones)
- Track record paragraph: Automotive, Manufacturing, Engineering, Construction, Hospitality
- CTA text: "To learn more and access our applicant database, please send us an inquiry."

---

### 4. Enquiry Section — `EmployerEnquiry`
**File:** `src/components/sections/employers/EmployerEnquiry.js`

Two-column layout with a contact background image:

- **Left column:**
  - Badge: **"// Get in Touch"**
  - Heading: **"Make an enquiry today"**
  - Description text
  - Contact info:
    - Phone: `+61 2989 95868`
    - Email: `contact@auz-connect.com.au`
    - Address: Suite 7.01, 12 Century Circuit, Baulkham Hills, NSW 2153
  - **"Contact us"** button → `/contact`

- **Right column (form):**
  - Title: "Feel free to get in touch with us."
  - Fields: Full Name, Email Address, Contact Number, File upload (PDF/DOC), Message (textarea)
  - **"Send Enquiry"** submit button

---

### 5. CTA Banner — `Cta1`
**File:** `src/components/sections/cta/Cta1.js`

- Heading: **"Get consultant now!"**
- Button: **"Lets talk now"** → `/contact`

---

### 6. Footer
- `Footer2`
