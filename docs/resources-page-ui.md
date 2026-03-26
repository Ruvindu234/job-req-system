# Resources Page UI — `/resources`

**File:** `src/app/resources/page.js`

---

## Page Layout (Top to Bottom)

### 1. Header (Sticky)
- `Header` (type 2) rendered twice — once static, once sticky on scroll.

---

### 2. Page Hero — `ResourcesPageHeader`
**File:** `src/components/sections/resources/ResourcesPageHeader.js`

- Full-width banner with background image (`pheader-bg.webp`)
- Badge label: **"// Recruitment & Migration Solutions"**
- Large `<h1>`: **"Resources"**
- Breadcrumb: `Home > Resources`
- Animated in with WOW.js (`fadeInDown` / `fadeInUp`)

---

### 3. Reading Materials Grid — `Services5`
**File:** `src/components/sections/services/Services5.js`

- Section label: **"Reading material"** (blue pill badge)
- Heading: **"Recruitment guides & resources"**
- Subtext: "Explore curated reading materials to help candidates and employers navigate recruitment, migration, and career growth."
- Displays **6 service cards** (`ServiceCard5`) pulled from `getALlServices()`
- On desktop: **"Browse all guides"** button floats right in the header row
- On mobile: button appears below the card grid
- Cards have hover/active state tracked via `currentIndex` state

---

### 4. Video Section — `Video`
**File:** `src/components/sections/videos/Video.js`

- Parallax background image (`h10-video-bg.webp`)
- Centered **play button** that opens a YouTube popup (`glightbox`)
- Video: `youtube.com/watch?v=MLpWrANjFbI`

---

### 5. FAQ Accordion — `Faq2`
**File:** `src/components/sections/faq/Faq2.js`

- Two-column layout (8/4 split on desktop, stacks on mobile)
- **Left (8 cols):** Bootstrap accordion with 5 Q&A items:
  1. How do consultants add value to a business?
  2. How do I know if my business needs a consultant? *(open by default)*
  3. How do business consultants charge for their services?
  4. Can a business consultant guarantee results?
  5. How can I measure the success of a consulting engagement?
- **Right (4 cols):** Decorative image (`h7-faq-banner.png`) + heading **"Questions and answers"**
- Note: all 5 answers currently have identical placeholder text

---

### 6. CTA Banner — `Cta1`
**File:** `src/components/sections/cta/Cta1.js`

- Bold heading: **"Get consultant now!"**
- Button: **"Lets talk now"** linking to `/contact`
- Decorative shape images on left and right sides

---

### 7. Footer
- `Footer2`
