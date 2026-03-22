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
  3. Services2
  4. Progress1
  5. Team1
  6. Brands1
  7. Portfolios2
  8. Testimonials2
  9. Contact1
  10. Blogs2
  11. Cta1
</main>
<Footer2>
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

### Slides (3 total — auto-loops every 5s):
Each slide contains:
- **Background image** — full-section background (`slider-1.webp`, `slider-2.webp`, `slider-3.webp`)
- **Subtitle** — `"number #1 solver agency"`
- **Title (H1)** — `"Transform your business with expert consultation"`
- **CTA Button** — `"Free consultation"` → links to `/contact`

### Feature Box (on each slide):
- Award icon (`slider-award.svg`)
- Description text: *"Transform your business growth with expert consultancy services..."*
- Decorative shape image

### Navigation:
- Prev/Next arrow buttons (`tji-angle-left` / `tji-angle-right`)
- **Fraction pagination** — displays current/total slide with animated dash progress bar

---

## 3. About Section (`About2.js`)

**Class:** `tj-about-section-two section-space`

### Layout: Two-column

| Left Column | Right Column |
|---|---|
| Portrait image (`h2-about-1.webp`) | Section heading + content |
| Author card (signature image, name "Burdee Nicolas", title "Co. Founder") | Checklist + CTA button |

### Content:
- **Subtitle:** `// Number #1 solver agency`
- **Title (H2):** `"Empowering your business vision"`
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

## 4. Services Section (`Services2.js`)

**Class:** `tj-service-section-two section-space`
**Type:** Swiper carousel (responsive)

### Header:
- **Subtitle:** `// Transformative solution`
- **Title (H2):** `"Get our comprehensive service offerings"`
- Prev/Next navigation arrows (desktop only, `d-none d-md-inline-flex`)

### Cards:
- Displays **4 services** (from `getALlServices()`)
- Each rendered via `ServiceCard2`
- **Breakpoints:** 1 card (mobile) → 2 cards (≥768px) → 3 cards (≥992px)
- Auto-advances every 5s, pauses on interaction
- Dot pagination at bottom

---

## 5. Progress Section (`Progress1.js`)

**Class:** `tj-progress-section section-space`

### Layout: Two-column (on large screens)

| Left Column | Right Column |
|---|---|
| Image (`h2-progress-1.jpeg`) | Heading + description + progress circles |
| Background image on desktop (`h2-progress-2.webp`) | — |

### Content (Right):
- **Subtitle:** `// Transformative solution`
- **Title (H2):** `"Trusted professionals with knowledge"`
- **Description paragraph**

### Progress Circles (2):
| Circle | Label | Value |
|---|---|---|
| 1 | Business consultants | Default (100%) |
| 2 | Clients communication | 75% |

---

## 6. Team Section (`Team1.js`)

**Class:** `tj-team-section section-space`

### Header:
- **Subtitle:** `// Meet our team`
- **Title (H2):** `"Expert team members"`
- **Button:** `"More member"` → `/team` (hidden on mobile, shown at bottom)

### Cards:
- Displays **4 team members** (from `getTeamMembers()`, paginated)
- Each rendered via `TeamCard`
- Grid: 4 columns (xl) → 2 columns (md/sm)
- GSAP scroll animation on card items

---

## 7. Brands Section (`Brands1.js`)

**Class:** `tj-brand-section-two section-bottom-space`

### Content:
- **Title (H6):** `"Join the 1000+ companies benefiting from solvior"`
- **Brand Slider:** Continuous auto-scrolling marquee of brand/partner logos (`BrandSlider2`)

---

## 8. Portfolios Section (`Portfolios2.js`)

**Class:** `tj-project-section-two section-space`

### Elements:
- **Marquee strip** (`PortfolioMarqee`) — scrolling text banner above the cards
- **4 portfolio cards** (from `getPortfolio()`) — rendered via `PortfolioCard2`
- GSAP sticky scroll animation on cards
- **Button:** `"Explore more"` → `/portfolios` (white style)

---

## 9. Testimonials Section (`Testimonials2.js`)

**Class:** `tj-testimonial-section-two section-space`

### Header (centered):
- **Subtitle:** `// Clients feedback`
- **Title (H2):** `"Our clients testimonials"`

### Layout: Two-column

| Left Column | Right Column |
|---|---|
| Testimonial image (`h2-test-1.webp`) | Swiper slider with testimonial cards |
| Funfact badge: **3.8K+** "Happy clients all over world now." | Prev/Next navigation arrows |

### Slider:
- Shows **2 testimonials** (from `getTestimonials()`)
- Each rendered via `TestimonialsCard2`
- Auto-advances every 5s
- Left/right arrow navigation

---

## 10. Contact Section (`Contact1.js`)

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
  | Service selector | dropdown (`FormSelect`) |
  | Message | textarea |
  | Submit | `"Send message"` button (white style) |

- **Dropdown options:** Chose a option, IT consulting, Market research, Business process, Business consultancy, Digital marketing, Branding design

---

## 11. Blogs Section (`Blogs2.js`)

**Class:** `tj-blog-section-two section-space`

### Header (centered):
- **Subtitle:** `// Latest news`
- **Title (H2):** `"Tip and tricks for success"`

### Cards:
- Displays **3 blog posts** (from `getBlogs()`)
- Each rendered via `BlogCard2`
- Grid: 3 columns (xl) → 2 columns (md)
- Left-swipe animation on cards

---

## 12. CTA Section (`Cta1.js`)

**Class:** `tj-cta-section`

### Content:
- **Title (H2):** `"Get consultant now!"`
- **Button:** `"Lets talk now"` → `/contact` (white style)
- Two decorative shape images (`cta-shapes-1.png`, `cta-shapes-2.png`) positioned absolutely

---

## 13. Footer (`Footer2.js`)

**Class:** `tj-footer-area footer-2`

### Four-column layout:

| Column | Content |
|---|---|
| **Col 1 — Brand Info** | Logo → `/`, description text, social icons (Facebook, Instagram, Twitter, LinkedIn) |
| **Col 2 — Our Offices** | Headquarters USA address + phone, Operations Canada address |
| **Col 3 — Resources** | Links: Contact us, Privacy policy, Recognitions, Careers (New badge), Blog, Feedback, Error 404 |
| **Col 4 — Services** | Links: Strategic planning, Market research, Business process, Financial management, Change management, IT consulting, Leadership |

### Footer Bottom Bar:
- Copyright: `© 2025 Solvior All right reserved.`
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
| 1 | Hero2 | Full-screen image slider (3 slides) | Free consultation → /contact |
| 2 | About2 | Portrait image, founder card, checklist, counter (20+) | Free consultation → /about |
| 3 | Services2 | Service cards carousel (4 items) | — |
| 4 | Progress1 | Image + 2 circular progress bars (100%, 75%) | — |
| 5 | Team1 | Team member cards grid (4 members) | More member → /team |
| 6 | Brands1 | 1000+ companies tagline + brand logo marquee | — |
| 7 | Portfolios2 | Marquee strip + 4 portfolio cards (sticky scroll) | Explore more → /portfolios |
| 8 | Testimonials2 | Image + testimonial slider (2 items) + counter (3.8K+) | — |
| 9 | Contact1 | Contact info + full contact form | Contact us → /contact |
| 10 | Blogs2 | 3 blog cards grid | — |
| 11 | Cta1 | Bold CTA headline + decorative shapes | Lets talk now → /contact |
| — | Footer2 | 4-col: Brand, Offices, Resources, Services + copyright | — |


  🌍 Earth Realism
                                                                                                                                                                                  1. Real texture maps — Load NASA's Blue Marble texture (free, public domain) for the diffuse map, a specular map (ocean shiny, land matte), and a night lights texture (city  
  glow that appears on the dark side)
  2. Normal/bump map — Add a height map so mountains and ocean trenches have surface relief under lighting
  3. Ocean specular — Separate ocean mesh or specular mask so only water reflects sunlight (sun glint effect)
  4. Animated clouds — Real cloud layer that slowly drifts using a time-based shader offset instead of static rotation

  ---
  ✈️ Plane & Flight

  5. Load a real GLTF aircraft model — Replace the geometry-built plane with a proper .glb model (free ones on Sketchfab/NASA 3D) via GLTFLoader
  6. Engine exhaust particles — THREE.Points particle system emitting from engines with fade + spread
  7. Contrail that fades — Trail points that fade opacity over time instead of cutting off sharply
  8. Bank/roll on turns — Rotate plane on its local X axis as it curves through waypoints (tilt into turns)
  9. Realistic speed profile — Slow take-off, cruise, slow descent rather than uniform easing

  ---
  🎬 Camera & Cinematic

  10. Named cinematic shots — Dedicated camera sequences: aerial pull-back from LA, orbit lock during cruise, nose-cam, dramatic low approach into Sydney
  11. Depth of field — Post-processing BokehPass to blur distant/near objects
  12. Lens flare — Lensflare on the sun direction
  13. Camera shake — Subtle perlin-noise shake during turbulence zones

  ---
  💡 Lighting & Post-Processing

  14. Bloom on city lights — UnrealBloomPass (already available in viewer) on night-side city glow dots
  15. Volumetric atmosphere — Custom shader for Rayleigh scattering — blue rim glow fading to orange near terminator
  16. Sun position drives lighting — Move DirectionalLight slowly to simulate time of day during the flight

  ---
  🏙️ Destination

  17. Sydney skyline silhouette — Add low-poly CBD buildings around the Opera House
  18. Animated landing approach lights — Flashing PAPI/runway lights on approach
  19. Splash screen on arrival — Fade-in overlay card: "Sydney, Australia — 14,498 km · 20h 30m"

  ---
  ⚙️ Performance & Code Quality

  20. DRACO-compressed GLTF — Smaller model files, faster load
  21. LOD (Level of Detail) — Lower-poly Earth when far, high-poly on close approach
  22. Web Worker for texture generation — Move canvas texture drawing off the main thread to avoid frame drops on load
  23. Proper asset pipeline — Pre-bake textures as PNG files in /public, load with TextureLoader instead of generating at runtime

  ---
  🗺️ UI/UX

  24. HUD overlay — Live altitude, speed, distance-to-destination counter updating during flight
  25. Route line on globe — Dashed great-circle line drawn on the globe surface showing the full path ahead
  26. Click-to-explore — Raycaster so clicking a city opens an info card
  27. Time-skip controls — Play/pause/speed buttons

  ---
  Highest impact, lowest effort (do these first):
  - UnrealBloomPass for city glow (already in your stack)
  - NASA Blue Marble texture via TextureLoader
  - Bank/roll animation on turns
  - HUD distance counter
  - Contrail fade over time

  Want me to implement any of these?
