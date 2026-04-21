# /job-seekers Page

## Structure

### 1. Header
- Sticky + fixed (`headerType={2}`, no search)

### 2. Page Banner (`JobSeekersPageHeader`)
- Background: `pheader-bg.webp`
- Badge: `// Recruitment & Migration Solutions`
- Title: **"Job Seekers"**
- Breadcrumb: `Home › Job Seekers`

### 3. Job Seekers Content (`JobSeekersContent`)
- Client component (`"use client"`)
- Wrapped in `BootstrapWrapper` to enable Bootstrap tab behaviour
- Three-tab layout using Bootstrap nav-tabs

#### Tab 1 — Overview (default active)
- We understand and respect the different needs of companies; consultants place you in roles matching your skills
- *"We have employers waiting to hire you!"*
- Strong recruiter relationships give the best chance of finding the right job; candidate assessment matches people to roles
- Interview preparation and visa application assistance if required
- **Free service** — no fees charged to candidates

#### Tab 2 — Australian Applicants
- *"We have employers waiting to hire you!"*
- Large volume of vacancies across Australia in served sectors
- Prioritised connections with employers subject to role suitability
- Assessment process identifies best candidates; interviews arranged with post-placement support
- CTA: *"Please contact us by submitting an inquiry below."*

#### Tab 3 — Overseas Applicants
- Leading firm working with employers, recruitment partners, and sponsors for overseas workers
- Covers candidates on a valid Australian visa and those outside Australia
- Assists in securing sponsored job opportunities with reputable companies with genuine skill shortages
- Evidence of skills and qualifications required for specific roles
- Link provided for terms of engagement
- CTA: *"Please contact us by submitting an inquiry below."*

### 4. Cta1
- Call-to-action section

### 5. Footer2

---

## Files
- Page: `src/app/job-seekers/page.js`
- Page Header: `src/components/sections/job-seekers/JobSeekersPageHeader.js`
- Content: `src/components/sections/job-seekers/JobSeekersContent.js`
