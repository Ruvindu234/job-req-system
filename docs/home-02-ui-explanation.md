# Home-02 Page — UI Section Explanation

**Route:** `/home-02`
**File:** `src/app/home-02/page.js`

---

## Page Structure Overview

```
<Header> (static + sticky)
<main>
  1. Hero2
  2. About2
  3. Testimonials2
  4. Contact1
  5. Cta1
</main>
<Footer2>
<ClientWrapper />
<TjMagicCursor type={2}>
```

---

## 1. Header (`Header.js` — `headerType={2}`)

Two instances are rendered:
- **Static header** — positioned absolutely over the hero section (`header-absolute`)
- **Sticky header** — duplicated header that becomes fixed on scroll (`header-sticky`)

### Header Elements (headerType 2):
| Element | Description |
|---|---|
| **Logo** | Site logo linked to `/` |
| **Navbar** | Main navigation menu |
| **ButtonMenuToggler** | Hamburger/menu toggle button (shown on desktop for type 2) |
| **MobileMenu** | Slide-in mobile navigation overlay |
| **HeaderSearchForm** | Full-screen search overlay (toggle on click) |

> Note: For `headerType={2}`, the "Get a quote" / "Free consultation" button is **hidden**, replaced by the menu toggler.

---

## 2. Hero Section (`Hero2.js`)

**Type:** Full-screen Swiper slider with fade effect
**Class:** `tj-hero-slider style-1`

### Slides (2 total — auto-loops every 5s):
Each slide contains:
- **Background image** — full-section background (`/new_images/slider-2.webp`, `/new_images/slider-3.webp`)
- **Subtitle** — `"number #1 solver agency"`
- **Title (H1)** — `"Find the Right Talent, Right Now."` (`fontSize: 54px`)
- **CTA Button** — `"Free consultation"` → links to `/contact`

### Feature Box (on each slide):
- Award icon (`/images/icons/slider-award.svg`)
- Description text: *"Transform your business growth with expert consultancy services by our team of seasoned consultants unparalleled."*
- Decorative shape image (`/images/shapes/slider-shapes.png`)

### Navigation:
- Prev/Next arrow buttons (`fas fa-caret-left` / `fas fa-caret-right`)
- **Fraction pagination** — displays current/total slide with animated dash progress bar

---

## 3. About Section (`About2.js`)

**Class:** `tj-about-section-two section-space`

### Layout: Two-column

| Left Column | Right Column |
|---|---|
| Portrait image (`/new_images/h2-about-1.webp`) | Section heading + content |
| Author card (signature image, name "Burdee Nicolas", title "Co. Founder") | Checklist + CTA button |

### Content:
- **Subtitle:** `// Number #1 solver agency`
- **Title (H2):** `"Recruitment Built Around You."` (`fontSize: 36px`)
- **Description paragraph**
- **Checklist (3 items):**
  - Expertise and experience
  - Client Centric approach
  - Commitment excellences
- **CTA Button:** `"Free consultation"` → `/about`

### Funfact Box:
- Animated counter: **20+**
- Label: *"Years more of business consulting experiences we have."*

---

## 4. Testimonials Section (`Testimonials2.js`)

**Class:** `tj-testimonial-section-two section-space`

### Header (centered):
- **Subtitle:** `// Clients feedback`
- **Title (H2):** `"Our clients testimonials"`

### Layout: Two-column

| Left Column | Right Column |
|---|---|
| Testimonial image (`/new_images/h2-test-1.webp`) | Swiper slider with testimonial cards |
| Funfact badge: **3.8K+** "Happy clients all over world now." | Prev/Next navigation arrows |

### Slider:
- Shows **2 testimonials** (from `getTestimonials()`)
- Each rendered via `TestimonialsCard2`
- Auto-advances every 5s
- Left/right arrow navigation (`fas fa-arrow-left` / `fas fa-arrow-right`)

---

## 5. Contact Section (`Contact1.js`)

**Class:** `tj-contact-section`
**Background:** `contact-bg.png` pattern image

### Layout: Two-column

#### Left — Text Content:
- **Subtitle:** `// Meet our team`
- **Title (H2):** `"Let's discuss further to get better results"`
- **Description paragraph**
- **Button:** `"Contact us"` → `/contact` (white style)

#### Right — Contact Form:
- **Title:** `"Feel free to get in touch or visit our location."`
- **Contact info:**
  - Email icon → `support@solvior.com`
  - Location icon → `Elviraton, CA 48998`
- **Form Fields:**
  | Field | Type |
  |---|---|
  | Full name | text (required) |
  | Email address | email (required) |
  | Phone number | tel (required) |
  | Service selector | dropdown (`<select>`) |
  | Message | textarea |
  | Submit | `"Send message"` button (white style) |

- **Dropdown options:** Choose a option, IT consulting, Market research, Business process, Business consultancy, Digital marketing, Branding design

---

## 6. CTA Section (`Cta1.js`)

**Class:** `tj-cta-section`

### Content:
- **Title (H2):** `"Ready to Find Your Next Hire?"` (`fontSize: 36px`)
- **Button:** `"Lets talk now"` → `/contact` (white style)
- Two decorative shape images (`cta-shapes-1.png`, `cta-shapes-2.png`) positioned absolutely

---

## 7. Footer (`Footer2.js`)

**Class:** `tj-footer-area footer-2`

### Four-column layout:

| Column | Content |
|---|---|
| **Col 1 — Brand Info** | Logo → `/`, description text, social icons (Facebook, Instagram, Twitter, LinkedIn) |
| **Col 2 — Our Offices** | Headquarters USA: `993 Renner Burg, West Rond, MT 94251-030` + phone `+1 (009) 544-7818`; Operations Canada: `Suite 452 8082 Boner Parge, Elviraton, CA 48998` |
| **Col 3 — Resourses** | Links: Contact us, Privacy policy, Recognitions, Careers (New badge), Blog, Feedback, Error 404 |
| **Col 4 — Services** | Links: Strategic planning, Market research, Business process, Financial management, Change management, IT consulting, Leadership |

### Footer Bottom Bar:
- Copyright: `© 2025 TalentBridge All right reserved.`
- Links: Policy & privacy, Terms & conditions
- **Back to Top** button (`BackToTop` component)

---

## Extra: TjMagicCursor (`type={2}`)

Custom cursor component that replaces the default browser cursor with a branded animated cursor (type 2 variant).

---

## Summary Table

| # | Section | Key Content | CTA |
|---|---|---|---|
| — | Header | Logo, Nav, Menu toggle | — |
| 1 | Hero2 | Full-screen image slider (2 slides) | Free consultation → /contact |
| 2 | About2 | Portrait image, founder card, checklist, counter (20+) | Free consultation → /about |
| 3 | Testimonials2 | Image + testimonial slider (2 items) + counter (3.8K+) | — |
| 4 | Contact1 | Contact info + full contact form | Contact us → /contact |
| 5 | Cta1 | Bold CTA headline + decorative shapes | Lets talk now → /contact |
| — | Footer2 | 4-col: Brand, Offices, Resources, Services + copyright | — |
