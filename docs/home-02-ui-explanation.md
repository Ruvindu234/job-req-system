# Home-02 Page — UI Section Explanation

**Route:** `/home-02`
**File:** `src/app/home-02/page.js`

---

## Page Structure Overview

```
<Header> (static + sticky)
<main>
  1. Hero2
  2. Contact1
  3. Cta1
</main>
<Footer2>
<ClientWrapper />
<TjMagicCursor type={2}>
```

> **Note:** `About2` and `Testimonials2` sections have been removed from this page.

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

### Slides (1 total — loops):
The slider contains a single slide:

| Property | Value |
|---|---|
| **Background image** | `/new_images/slider-new.jpeg` |
| **Subtitle** | `"number #1 solver agency"` |
| **Title (H1)** | `"Find the Right Talent, Right Now."` (`fontSize: 54px`) |
| **CTA Button** | `"Free consultation"` → `/contact` |

> **Note:** The feature box (award icon, description text, decorative shape) from the original design has been removed.

### Navigation:
- Prev/Next arrow buttons (`fas fa-caret-left` / `fas fa-caret-right`) and fraction pagination exist in the DOM but are **hidden** via `style={{ display: "none" }}`.
- `updateDashWidth` logic is retained to animate the dash progress bar relative to slide progress.

---

## 3. Contact Section (`Contact1.js`)

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

## 4. CTA Section (`Cta1.js`)

**Class:** `tj-cta-section`

### Content:
- **Title (H2):** `"Ready to Find Your Next Hire?"` (`fontSize: 36px`)
- **Button:** `"Lets talk now"` → `/contact` (white style)
- Two decorative shape images (`cta-shapes-1.png`, `cta-shapes-2.png`) positioned absolutely

---

## 5. Footer (`Footer2.js`)

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
| 1 | Hero2 | Single full-screen image slide (`slider-new.jpeg`), nav hidden | Free consultation → /contact |
| 2 | Contact1 | Contact info + full contact form | Contact us → /contact |
| 3 | Cta1 | Bold CTA headline + decorative shapes | Lets talk now → /contact |
| — | Footer2 | 4-col: Brand, Offices, Resources, Services + copyright | — |
