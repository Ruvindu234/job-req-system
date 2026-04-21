# /our-sectors Page

## Structure

### 1. Header
- Sticky + fixed (`headerType={2}`, no search)

### 2. Page Banner (`OurSectorsPageHeader`)
- Background: `pheader-bg.webp`
- Badge: `// Recruitment & Migration Solutions`
- Title: **"Our Sectors"**
- Breadcrumb: `Home › Our Sectors`

### 3. Sectors Grid (`Blogs6`)
- Sub-title: `// Recruitment & Migration Solutions`
- Heading: **"Hire seamlessly across industries"**
- Description: 10 years of experience paragraph
- 5 cards in a 2-column grid (`col-xl-6 col-md-6 col-12`)

| # | Sector | Image |
|---|---|---|
| 1 | Automotive & Transportation | `/new_images/automotive.jpg` |
| 2 | Construction | `/new_images/Construction.jpg` |
| 3 | Engineering & Consulting | `/new_images/engineer.jpg` |
| 4 | Hospitality | `/new_images/Hospitality.jpg` |
| 5 | Manufacturing | `/new_images/Manufacturing.jpg` |

Each card contains:
- Fixed-height image (250px, object-fit cover)
- Title (no link, `url="#"`)
- 2-line clamped description
- Role tags (pill badges in primary color)
- "Read more →" link

### 4. Cta1
- Call-to-action section

### 5. Footer2

## Files
- Page: `src/app/our-sectors/page.js`
- Page Header: `src/components/sections/our-sectors/OurSectorsPageHeader.js`
- Sectors Grid: `src/components/sections/blogs/Blogs6.js`
- Card: `src/components/shared/cards/BlogCard6.js`
