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
- Heading: **"Hire Smarter, Grow Faster."**
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
- Heading: **"We're Ready When You Are."**
- Description: *"Whether you need overseas or local talent, our team is ready to assist. Fill in the form and we'll be in touch shortly."*
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

---

## Unused Components (built, not yet in page.js)

### LocalRecruitment (`LocalRecruitment.js`)
- Section: `tj-about-section employer-local-section`
- Badge: `// Local Recruitment Service`
- Heading: **"Strategic local staffing solutions for your needs"**
- Description: methodology focused on quality-driven processes
- Four numbered challenge steps (time, arrangement, culture fit, fees)
- Solution box: *"Then you have come to the right firm..."*
- CTA button: "Make an Enquiry" → `#employer-enquiry`
- Right image: `/new_images/slider-3.webp`
- Quote overlay: *"We can find you the local talent...at a fraction of fees..."*

### OverseasRecruitment (`OverseasRecruitment.js`)
- Section: `tj-about-section-two`
- Badge: `// Overseas Recruitment Service`
- Heading: **"We find the right people for the right jobs!"**
- Description: Auz-connect integrated recruitment and migration solutions
- Left image: `/new_images/h2-about-1.webp`
- Key points checklist:
  - Lowest fee guarantee
  - Access to candidates in Europe, Asia & Middle East
  - Vast experience as recruiter and migration agents
  - We manage the whole process for both employer and applicant
- Quote: *"We have extensive databases and relationships..."*
- CTA button: "Make an Enquiry" → `#employer-enquiry`
- Visa cards grid:
  - TSS (482) — Temporary Skill Shortage
  - ENS (186) — Employer Nomination Scheme
  - RSMS (187) — Regional Sponsored Migration
  - Training (407) — Training Visa Program

---

## Files
- Page: `src/app/employers/page.js`
- Page Header: `src/components/sections/employers/EmployersPageHeader.js`
- Content: `src/components/sections/employers/EmployerContent.js`
- Enquiry Form: `src/components/sections/employers/EmployerEnquiry.js`
- Local Recruitment (unused): `src/components/sections/employers/LocalRecruitment.js`
- Overseas Recruitment (unused): `src/components/sections/employers/OverseasRecruitment.js`
