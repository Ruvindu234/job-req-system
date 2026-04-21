# Employers Page UI — Section Explanation

**Route:** `/employers`
**Main File:** `src/app/employers/page.js`

---

## Section Order

| # | Component | Purpose |
|---|-----------|---------|
| 1 | `EmployersPageHeader` | Hero / page banner |
| 2 | `OverseasRecruitment` | Overseas recruitment services + visa cards |
| 3 | `LocalRecruitment` | Local staffing solutions + challenge questions |
| 4 | `EmployerEnquiry` | Contact info + inquiry form |
| 5 | `Cta1` | Generic call-to-action banner |
| 6 | `Footer2` | Site footer |

---

## 1. EmployersPageHeader

**File:** `src/components/sections/employers/EmployersPageHeader.js`

The hero/banner section displayed at the top of the page.

**Layout:** Full-width, centred content over a background image (`/new_images/pheader-bg.webp`).

**Content:**
- Badge label: `// Recruitment & Migration Solutions`
- Page title: **Employers**
- Tagline: *"If you need 'em, we'll find 'em"*
- Breadcrumb: `Home / Employers`

**Animations:** WOW.js `fadeInDown` / `fadeInUp` with staggered delays.

---

## 2. OverseasRecruitment

**File:** `src/components/sections/employers/OverseasRecruitment.js`

Presents Auz-Connect's overseas recruitment offering, including supported visa pathways.

### Top Two-Column Layout

| Left | Right |
|------|-------|
| Responsive image (`/new_images/h2-about-1.webp`) | Section heading, key points list, quote block, CTA button |

**Section heading:**
- Sub-title: `// Overseas Recruitment Service`
- Heading: *"We find the **right people** for the right jobs!"*
- Description paragraph explaining the integrated recruitment + migration solution.

**Key Points (check icon list):**
1. Lowest fee guarantee
2. Access to candidates in Europe, Asia & Middle East
3. Vast experience as recruiter and migration agents
4. We manage the whole process for both employer and applicant

**Quote Block:**
> "We have extensive databases and relationships with a variety of candidates and agencies to find the right people for the right jobs…"

**CTA Button:** `Make an Enquiry` → scrolls to `#employer-enquiry`

---

### Visa Cards Grid

A 4-column responsive grid (collapses to 2 on tablet/mobile).

| Card | Visa Code | Full Name | Icon |
|------|-----------|-----------|------|
| 1 | TSS (482) | Temporary Skill Shortage | `fa-plane-departure` |
| 2 | ENS (186) | Employer Nomination Scheme | `fa-building` |
| 3 | RSMS (187) | Regional Sponsored Migration | `fa-map-location-dot` |
| 4 | Training (407) | Training Visa Program | `fa-graduation-cap` |

**Card hover effect:** Dark background, elevated position (`translateY`), top accent bar animation, icon/text colour changes.

---

## 3. LocalRecruitment

**File:** `src/components/sections/employers/LocalRecruitment.js`

Addresses employer pain points and positions Auz-Connect as the local staffing solution.

### Two-Column Layout

| Left | Right |
|------|-------|
| Section heading, challenge steps, solution callout, CTA button | Image (`/new_images/slider-3.webp`) + local quote box |

**Section heading:**
- Sub-title: `// Local Recruitment Service`
- Heading: *"Strategic **local staffing** solutions for your needs"*
- Description paragraph about quality-driven, personalised matching.

**Challenge Steps (numbered 01–04):**
1. Are you spending too much time looking for and interviewing candidates?
2. Are you simply not getting what you need with your current arrangement?
3. Are you having issues finding talent that fits your corporate culture?
4. Are you paying too much in external or contingent staffing fees?

*Hover effect: step number box background switches to primary theme colour.*

**Solution Callout Box (dark background):**
> "Then you have come to the **right firm** for all your recruitment and staff augmentation needs."

**CTA Button:** `Make an Enquiry` → scrolls to `#employer-enquiry`

**Local Quote Box (beside/below image, dark background):**
> "We can find you the local talent that you were looking for at a fraction of fees charged by other local recruitment agencies."

---

## 4. EmployerEnquiry

**File:** `src/components/sections/employers/EmployerEnquiry.js`
**Client Component:** `"use client"` (interactive form)
**Anchor ID:** `#employer-enquiry` (targeted by CTA buttons in sections above)

### Two-Column Layout

| Left | Right |
|------|-------|
| Contact information | Enquiry form |

---

### Left — Contact Information

**Section heading:**
- Sub-title: `// Get in Touch`
- Heading: *"Make an enquiry today"*
- Description about overseas and local talent assistance.

**Contact Details:**

| Icon | Detail |
|------|--------|
| `fa-phone` | +61 2989 95868 (tel link) |
| `fa-envelope` | contact@auz-connect.com.au (mailto link) |
| `fa-location-dot` | Suite 7.01, 12 Century Circuit, Baulkham Hills, NSW 2153 |

**Button:** `Contact us` → navigates to `/contact`

---

### Right — Enquiry Form

**Form title:** *"Feel free to get in touch with us."*

| # | Field | Type | Notes |
|---|-------|------|-------|
| 1 | Full Name | Text input | Required |
| 2 | Email Address | Email input | Required |
| 3 | Contact Number | Tel input | Required |
| 4 | Preferred Contact Method | Dropdown | Email / Phone |
| 5 | Preferred Contact Time | Dropdown | Anytime / 08:00–12:00 / 12:00–16:00 / 16:00–20:00 |
| 6 | File Upload | File input | Accepts `.pdf`, `.doc`, `.docx` |
| 7 | Message | Textarea | Required |
| 8 | — | Submit button | Label: **Send Enquiry** |

Desktop layout: 2-column (fields share row). Mobile: single column.

---

## 5. Cta1

Generic site-wide call-to-action banner. Not specific to the employers page.

---

## Styling

**File:** `src/app/assets/sass/layout/_employers.scss`

Key style notes:
- CSS custom properties (`--tj-color-*`, `--tj-ff-*`) used throughout.
- Hover transitions on visa cards, process steps, and contact links.
- Responsive breakpoints: `lg`, `md`, `sm`, `xs`.
- WOW.js animation utility classes applied for entrance effects.
