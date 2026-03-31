# /employers Page

## Structure

### 1. Header
- Sticky + fixed (`headerType={2}`, no search)

### 2. Page Banner (`EmployersPageHeader`)
- Background: `pheader-bg.webp`
- Badge: `// Recruitment & Migration Solutions`
- Title: **"Employers"**
- Breadcrumb: `Home › Employers`

### 3. Employer Content (`EmployerContent`)
- Hero image: `/images/service/tj-service-1.webp` (full width)
- Heading: *"Recruitment is a time-consuming and complex process."*
- Intro: *"No time to search but need to find talent? We are here to make your worries disappear!"*
- Description paragraph about Skills In Motion's integrated recruitment solutions

**"We Offer" checklist:**
- Highly competitive rates
- Recruitment fees payable after 3 months of placement (subject to satisfaction)
- Flexibility to use your company's migration agent (with trusted professional recommendations)

- Track record paragraph: Automotive, Manufacturing, Engineering, Construction, Hospitality
- CTA text: *"To learn more and access our applicant database, please send us an inquiry."*

### 4. Employer Enquiry (`EmployerEnquiry`)
- Background: `contact-bg.png`
- Section ID: `#employer-enquiry`

**Left side:**
- Badge: `// Get in Touch`
- Heading: **"Make an enquiry today"**
- Description paragraph
- Contact info:
  - Phone: `+61 2989 95868`
  - Email: `contact@auz-connect.com.au`
  - Address: Suite 7.01, 12 Century Circuit, Baulkham Hills, NSW 2153
- "Contact us" button → `/contact`

**Right side — Form:**
- Full Name (text, required)
- Email Address (email, required)
- Contact Number (tel, required)
- File upload (`.pdf`, `.doc`, `.docx`)
- Message (textarea)
- "Send Enquiry" submit button

### 5. Cta1
- Call-to-action section

### 6. Footer2

## Files
- Page: `src/app/employers/page.js`
- Page Header: `src/components/sections/employers/EmployersPageHeader.js`
- Content: `src/components/sections/employers/EmployerContent.js`
- Enquiry Form: `src/components/sections/employers/EmployerEnquiry.js`


  Hero / Banner
  - "Find the Right Talent, Right Now."

  Employers Section
  - "Hire Smarter, Grow Faster."

  Our Sectors
  - "We Recruit Across the Industries That Matter."

  CTA Strip
  - "Ready to Find Your Next Hire?"

  Contact / Enquiry
  - "We're Ready When You Are."

  About / Value Proposition
  - "Recruitment Built Around You."
